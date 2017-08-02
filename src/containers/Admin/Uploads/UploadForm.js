import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import GooglePicker from '../GooglePicker';
import { adminWrapper } from '../../../wrappers';
import config from '../../../configuration';
import { buildMediumFromDrivePicker } from '../../../factories';
import driveLogo from '../../../assets/drive.svg';
import { getRandomProperty } from '../../../utils';
import PropTypes from 'prop-types';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardText } from 'material-ui/Card';
import { AlbumSelectField } from '../shared';
import { grey500, grey900 } from 'material-ui/styles/colors';
import ClearContent from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';

class UploadForm extends React.Component {

	constructor(props) {
		super(props);
		this.handleRowSelection = this.handleRowSelection.bind(this);
		this.handleDataPicked = this.handleDataPicked.bind(this);
		this.save = this.save.bind(this);
		this.deleteMedium = this.deleteMedium.bind(this);
		this.deleteMediaSelected = this.deleteMediaSelected.bind(this);
		this.state = {
			media: {},
			selected: {},
			mediaByIndex: [],
			selectedAlbum: undefined,
			slideIndex: 0,
		};
	}

  handleChange = (value) => {
    this.setState({ slideIndex: value});
	};

	componentDidMount() {
		this.props.fetchAll('albums');
		this.props.fetchAll('media');
		this.setState({data: this.props.data});
	}

	componentWillReceiveProps(nextProps) {
		const albums = nextProps.state['albums'];
		if(albums !== '' && this.state.selectedAlbum === undefined)
			this.setState({selectedAlbum: getRandomProperty(albums)});
	}

	handleDataPicked(data) {
		switch(data.action) {
			case 'picked':
				let newMedia = {};
				data.docs.map(doc => {
					const newMedium = buildMediumFromDrivePicker(doc);
					newMedium.album = getRandomProperty(this.props.state.albums);
					newMedia[doc.id] = newMedium;
					return null;
				});
				newMedia = {...this.state.media, ...newMedia};
				this.setState({media: newMedia, mediaByIndex: Object.values(newMedia)});
				break;
			default:
				return;
		}
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

	checkUpload() {
		return {
			valid: Object.keys(this.state.media).length >= 5,
		};
	}

	deleteMedium(idMedium) {
		const newMediaState = this.state.media;
		delete newMediaState[idMedium];
		this.setState({media: newMediaState, mediaByIndex: Object.values(newMediaState)});
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

	deleteMediaSelected() {
		const { media, selected, mediaByIndex } = this.state;
		Object.keys(selected).map(index => delete media[mediaByIndex[index].id]);
		this.setState({media: media, mediaByIndex: Object.values(media), selected: {}});
	}

	save() {
		const upload = this.state.data;
		upload.author = this.props.state.auth.user.id;
		upload.media = this.state.media;
		this.props.save(upload);
		this.props.history.goBack();
	}

	render() {
		const albums = this.props.state['albums'];
		const processedMedia = this.state.mediaByIndex;
		return (
			<div>
				<Card className="admin-container uploads-container">
				  <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
						<Tab label="Google drive" value={0} />
					</Tabs>
					<SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
						<GooglePicker clientId={config.PICKER.clientId}
						developerKey={config.PICKER.apiKey}
						scope={['https://www.googleapis.com/auth/drive.readonly']}
						onChange={this.handleDataPicked}
						multiselect={true}
						navHidden={true}
						authImmediate={true}
						mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
						viewId={'DOCS'}>
							<div className="google-drive-tab">
								<img className="google-drive-logo" src={driveLogo} alt="google drive logo" />
								<FlatButton label="Open google drive" />
							</div>
						</GooglePicker>
						<div>web</div>
						<div>youtube</div>
					</SwipeableViews>
				</Card>

			<Card className="admin-container uploads-container">
				<CardText>
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
							<TableHeaderColumn style={{textAlign: 'right', paddingRight: 36}}>
								<RaisedButton onTouchTap={this.deleteMediaSelected} label="Delete ?" />
							</TableHeaderColumn>
							</TableRow>
  					</TableHeader>
						<TableBody deselectOnClickaway={false}>

							{processedMedia.map((medium, index) => {
								return <TableRow
								selected={this.state.selected[index] === true}
								hoverable={true}
								key={medium.id}>
									<TableRowColumn>{medium.id}</TableRowColumn>
									<TableRowColumn><a target="blank" href={medium.src}>{medium.src}</a></TableRowColumn>
									<TableRowColumn>
										<AlbumSelectField
										disableLabel
										value={medium.album}
										labelStyle={{height: '100%', top: -2}}
										onChange={(e, k, payload) => this.changeAlbum(medium.id, payload)}
										underlineStyle={{border: 'none'}} albums={albums} />
									</TableRowColumn>
									<TableRowColumn style={{textAlign: 'right'}}>
										<IconButton onTouchTap={() => this.deleteMedium(medium.id)}>
											<ClearContent color={grey500} hoverColor={grey900} />
										</IconButton>
									</TableRowColumn>
								</TableRow>
							})}

						</TableBody>
					</Table>

				</CardText>
				<CardActions>
					<FlatButton label="Back" onTouchTap={() => this.props.history.goBack()} />
					<FlatButton
					label="Save"
					disabled={!this.checkUpload().valid && Object.keys(albums).length !== 0}
					onTouchTap={this.save} />
				</CardActions>
			</Card>
		</div>
		);
	}

}

UploadForm.propTypes = {
	state: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
	save: PropTypes.func.isRequired,
};

export default adminWrapper(UploadForm, 'uploads');
