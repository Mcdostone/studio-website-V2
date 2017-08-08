import React from 'react';
import { adminWrapper } from '../../../wrappers';
import AdminCover from '../AdminCover';
import { fetchMedium } from '../../../actions/mediaActions';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardText } from 'material-ui/Card';
import { AlbumSelectField } from '../shared';


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
		this.setState({data: this.props.data});
		this.props.fetchAll('albums');
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
		const albums = this.props.state['albums'];
		const src = medium.src ? medium.getThumbnail(600) : null;
		return (
			<Card className="admin-container media-container">
				<AdminCover
				resource="media"
				data={medium}
				hideOverlay
				className="cover"
				src={src} />
				<CardText>
					<AlbumSelectField value={this.state.data.album} albums={albums} onChange={this.setAlbum} />
				</CardText>
				<CardActions>
					<FlatButton label="Back" onTouchTap={() => this.props.history.goBack()} />
					<FlatButton label="Save" onTouchTap={this.applyChanges}/>
				</CardActions>
			</Card>
		);
	}

	render() {
		return (this.state.data !== undefined && this.state.src !== null)  ? this.getContainer() : null;
	}
}

export default adminWrapper(MediumForm, 'media', fetchMedium);
