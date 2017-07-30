import React from 'react';
import { adminUploadWrapper } from '../../../wrappers';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardText } from 'material-ui/Card';
import GooglePicker from '../GooglePicker';
import config from '../../../configuration';
import { AlbumSelectField } from '../shared';
import { getRandomProperty } from '../../../utils';


const CustomRowColumn = (props) => {
	const{children, ...others} = props;
	return (
		<TableRowColumn {...others} className='prevent-cell-click'>
			<div className="prevent-cell-click-wrapper" onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</TableRowColumn>
	);
}

class UploadForm extends React.Component {

	constructor(props) {
		super(props);
		this.handleDataPicked = this.handleDataPicked.bind(this);
		this.handleRowSelection = this.handleRowSelection.bind(this);
		this.save = this.save.bind(this);
		this.state = {
			media: {},
			selected: {},
			mediaByIndex: [],
			selectedAlbum: undefined,
		};
	}

	componentDidMount() {
		this.props.fetchAll('albums');
	}

	componentWillReceiveProps(nextProps) {
		const albums = nextProps.dataSource['albums'];
		if(albums !== '' && this.state.selectedAlbum === undefined)
			this.setState({selectedAlbum: getRandomProperty(albums)});
	}

	handleRowSelection(indexRowsSelected) {
		const selected = {};
		if(indexRowsSelected === 'all')
			Object.keys(this.state.media).map((e, i) => selected[i] = true);
		else {
			if(indexRowsSelected !== 'none')
				indexRowsSelected.map(i => selected[i] = true);
		}
		this.setState({selected});
	}

	changeAlbum(mediumId, albumId) {
		const newMediaState = this.state.media;
		newMediaState[mediumId].album = albumId;
		this.setState({media: newMediaState, mediaByIndex: Object.values(newMediaState)});
	}

	changeAlbumForSelectedMedia(albumId) {
		const { media, selected, mediaByIndex } = this.state;
		Object.keys(selected).map(index => media[mediaByIndex[index].id].album = albumId);
		this.setState({media: media, mediaByIndex: Object.values(media), selectedAlbum: albumId});
	}

	save() {
		const upload = this.props.data;
		upload.author = this.props.dataSource.auth.user.id;
		upload.media = this.state.media;
		this.props.save(upload);
		this.props.history.goBack();
	}

	handleDataPicked(data) {
		switch(data.action) {
			case 'picked':
				let newMedia = {};
				data.docs.map(doc => newMedia[doc.id] = this.buildMedium(doc));
				newMedia = {...this.state.media, ...newMedia};
				this.setState({media:newMedia, mediaByIndex: Object.values(newMedia)});
				break;
			default:
				return;
		}
	}

	buildMedium(driveData) {
		const createMedium = this.props.default['media'];
		const newMedium = createMedium();
		newMedium.id = driveData.id;
		newMedium.from = 'drive';
		newMedium.src = driveData.url;
		newMedium.album = getRandomProperty(this.props.dataSource['albums']);
		return newMedium;
	}

	render() {
		const albums = this.props.dataSource['albums'];
		const processedMedia = this.state.mediaByIndex;
		return (
			<Card className="admin-container uploads-container">
				<CardText>

					<GooglePicker clientId={config.PICKER.clientId}
						developerKey={config.PICKER.apiKey}
						scope={['https://www.googleapis.com/auth/drive.readonly']}
						onChange={this.handleDataPicked}
						multiselect={true}
						navHidden={true}
						authImmediate={true}
						mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
						viewId={'DOCS'}>
   					<FlatButton label="google drive" />
					</GooglePicker>

					<Table
					multiSelectable
					onRowSelection={this.handleRowSelection}>
						<TableHeader>
  						<TableRow>
								<TableHeaderColumn>ID</TableHeaderColumn>
								<TableHeaderColumn>Link</TableHeaderColumn>
								<TableHeaderColumn style={{overflow: 'hidden'}}>
									<AlbumSelectField
									value={this.state.selectedAlbum}
									albums={albums}
									underlineStyle={{border: 'none'}}
									onChange={(e, k, payload) => this.changeAlbumForSelectedMedia(payload)}
									/>
								</TableHeaderColumn>
  						</TableRow>
  					</TableHeader>
						<TableBody deselectOnClickaway={false}>

							{processedMedia.map((medium, index) => {
								return <TableRow
								selected={this.state.selected[index] === true}
								hoverable={true}
								key={medium.id}>
									<CustomRowColumn>{medium.id}</CustomRowColumn>
									<CustomRowColumn><a target="blank" href={medium.src}>{medium.src}</a></CustomRowColumn>
									<CustomRowColumn>
										<AlbumSelectField
										disableLabel
										value={medium.album}
										labelStyle={{height: '100%', top: -2}}
										onChange={(e, k, payload) => this.changeAlbum(medium.id, payload)}
										underlineStyle={{border: 'none'}} albums={albums} />
									</CustomRowColumn>
								</TableRow>
							})}

						</TableBody>
					</Table>

				</CardText>
				<CardActions>
					<FlatButton label="Back" onTouchTap={() => this.props.history.goBack()} />
					<FlatButton label="Save" onTouchTap={this.save}/>
				</CardActions>
			</Card>
		);
	}
}

export default adminUploadWrapper(UploadForm, 'uploads');




