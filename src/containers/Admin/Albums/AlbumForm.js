import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import { fetchCover } from '../../../actions/coverActions';
import { adminWrapper } from '../../../wrappers';
import { FileInputField } from '../../../components/shared';
import DatePicker from 'material-ui/DatePicker';
import AdminCover from '../AdminCover';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardText } from 'material-ui/Card';
import config from '../../../configuration';

class AlbumForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newCover: undefined,
			oldCover: undefined,
			valid: false,
			errorTitle: false,
		};
		this.updateTitle = this.updateTitle.bind(this);
		this.updateDate = this.updateDate.bind(this);
		this.updateCover = this.updateCover.bind(this);
		this.checkAlbum = this.checkAlbum.bind(this);
		this.applyChanges = this.applyChanges.bind(this);
	}

	componentDidMount() {
		this.setState({data: this.props.data});
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.data !== nextProps.data)
			this.props.fetchCover(nextProps.data ? nextProps.data.id : undefined);
		const coverObject = nextProps.state.covers[this.props.match.params.id];
		if(this.state.cover === undefined && coverObject)
			this.setState({ data: nextProps.data, oldCover: coverObject.cover});
		else {
			if(this.state.data !== nextProps.data && nextProps.data)
				this.setState({ data: nextProps.data , ...this.checkAlbum(nextProps.data)});
		}
		return this.props.data !== nextProps.data;
	}

	checkAlbum(album) {
		const validTitle = album.title.length !== 0;
		return {
			valid: validTitle,
			errorTitle: !validTitle,
		}
	}

	applyChanges() {
		const data = this.state.data;
		if(this.state.valid) {
			data.cover = this.state.newCover || null;
			this.props.save(data);
			this.props.history.goBack();
		}
	}

	updateTitle(e) {
		const album = this.state.data;
		album.title = e.target.value;
		this.setState({data: album, ...this.checkAlbum(album)});
	}

	updateDate(e, newDate) {
		const album = this.state.data;
		album.date = newDate;
		this.setState({data: album });
	}

	updateCover(e) {
		if(e.target.files.length === 1) {
			const file = e.target.files[0];
			const reader = new FileReader();
	    reader.onloadend = () => this.setState({newCover: reader.result});
			reader.readAsDataURL(file);
		}
	}

	getContainer() {
		const album = this.state.data;
		return (
			<Card className="admin-container albums-container">
				<AdminCover
				resource="albums"
				data={album}
				className="cover"
				title={album.title}
				creation={this.props.creation}
				src={this.state.newCover || this.state.oldCover || config.APP.DEFAULT_COVER}>
					<h2 className="cover-title">{album.title}</h2>
				</AdminCover>
				<CardText>
					<TextField id="text-field-default"
					errorText={this.state.errorTitle ? 'Title is required' : null}
					floatingLabelText="Title of the album: WEI 2K17..."
					defaultValue={album.title} onChange={this.updateTitle}
					fullWidth={true} />
					<br />
					<DatePicker
						hintText="Date of the album"
						autoOk
						floatingLabelText="Date of the album"
						onChange={this.updateDate}
						formatDate={(date) => moment(album.date).format('DD/MM/YYYY')}
						defaultDate={new Date(album.date)}
						fullWidth={true} />
						<FileInputField label="Choose a cover" onChange={this.updateCover}/>
				</CardText>
				<CardActions>
					<FlatButton label="Back" onTouchTap={() => this.props.history.goBack()} />
					<FlatButton label="Save" disabled={!this.state.valid} onTouchTap={this.applyChanges}/>
				</CardActions>
			</Card>
		);
	}

	render() {
		return this.state.data !== undefined ? this.getContainer() : null;
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchCover
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(adminWrapper(AlbumForm, 'albums'));
