import React from 'react';
import moment from 'moment';
import TextField from 'material-ui/TextField';
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
			id: undefined,
			cover: undefined,
		};
		this.updateTitle = this.updateTitle.bind(this);
		this.updateDate = this.updateDate.bind(this);
		this.updateCover = this.updateCover.bind(this);
		this.applyChanges = this.applyChanges.bind(this);
	}

	componentDidMount() {
		this.setState({data: this.props.data});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({data: nextProps.data});
		return this.props.data !== nextProps.data;
	}

	applyChanges() {
		const data = this.state.data;
		data.cover = this.state.cover || null;
		this.props.save(data);
		this.props.history.goBack();
	}

	updateTitle(e) {
		const album = this.state.data;
		album.title = e.target.value;
		this.setState({data: album});
	}

	updateDate(e, newDate) {
		const album = this.state.data;
		album.date = newDate;
		this.setState({data: album});
	}

	updateCover(e) {
		if(e.target.files.length === 1) {
			const file = e.target.files[0];
			const reader = new FileReader();
	    reader.onloadend = () => this.setState({cover: reader.result});
			reader.readAsDataURL(file);
		}
	}

	getContainer() {
		const album = this.state.data;
		return (
			<Card className="admin-container albums-container">
				<AdminCover
				resource="albums"
				id={album.id}
				className="cover"
				title={album.title}
				src={this.state.cover || config.APP.DEFAULT_COVER}>
					<h2 className="cover-title">{album.title}</h2>
				</AdminCover>
				<CardText>
					<TextField id="text-field-default"
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
					<FlatButton label="Save" onTouchTap={this.applyChanges}/>
				</CardActions>
			</Card>
		);
	}

	render() {
		return this.state.data !== undefined ? this.getContainer() : null;
	}

}

export default adminWrapper(AlbumForm, 'albums');
