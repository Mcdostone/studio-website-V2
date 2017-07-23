import React from 'react';
import { adminWrapper } from '../../../wrappers';
import { fetchOneMedium } from '../../../actions/mediaActions';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardText } from 'material-ui/Card';
import { getRandomProperty } from '../../../utils';

class MediumForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: undefined,
		};
		this.applyChanges = this.applyChanges.bind(this);
		this.setAlbum = this.setAlbum.bind(this);
	}

	componentDidMount() {
		this.props.fetchAll('albums');
		this.setState({data: this.props.data});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({data: nextProps.data});
		return this.props.data !== nextProps.data;
	}

	setAlbum(e, key, payload) {
		const mediumUpdated = this.state.data;
		mediumUpdated.album = payload;
		this.setState({data: mediumUpdated});
	}

	applyChanges() {
		this.props.save(this.state.data);
		this.props.history.goBack();
	}

	getContainer() {
		const medium = this.state.data;
		const albums = this.props.dataSource['albums'];
		return (
			<Card className="admin-container media-container">
			<img src={medium.getThumbnail(600)} style={{width: '100%'}} alt=""/>
			<CardText>
				<SelectField
					floatingLabelText="Album"
					style={{width: '100%'}}
					value={this.state.data.album || getRandomProperty(albums)}
					onChange={this.setAlbum}>
						{Object.keys(albums).map(idAlbum =>
							<MenuItem key={idAlbum} value={idAlbum} primaryText={albums[idAlbum].title} />)
						}
				</SelectField>
				</CardText>
				<CardActions>
					<FlatButton label="Back" onTouchTap={() => this.props.history.goBack()} />
					<FlatButton label="Save" onTouchTap={this.applyChanges}/>
				</CardActions>
			</Card>
		);
	}

	render() {
		return this.state.data !== undefined ? this.getContainer() : null;
	}
}

export default adminWrapper(MediumForm, 'media', fetchOneMedium);
