import React from 'react';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { withRouter } from 'react-router-dom';
import { Cover } from '../../Layout';
import FlatButton from 'material-ui/RaisedButton';
import { testWrapper } from '../../../wrappers';
import {Card, CardActions, CardText } from 'material-ui/Card';


class AlbumEdit extends React.Component {

	constructor(props) {
		super(props);
		this.state = {data: undefined};
		this.updateTitle = this.updateTitle.bind(this);
		this.updateDate = this.updateDate.bind(this);
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
		this.props.update(this.state.data);
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

	getContainer() {
		const album = this.state.data;
		return (
				<Card className="admin-container albums-container">
					<Cover className="cover" title={album.title} src="http://www.groupesida.ch/filrouge/san-francisco-news-summer-code-camp.jpg">
						<h2 className="cover-title">{album.title}</h2>
					</Cover>
					{console.log(album)}

					<CardText>
						<TextField id="text-field-default"
						floatingLabelText="Title of the album: WEI 2K17..."
						defaultValue={album.title} onChange={this.updateTitle} /><br />
						 <DatePicker hintText="Date of the album" autoOk onChange={this.updateDate}
						 formatDate={(date) => moment(album.date).format('DD/MM/YYYY')} defaultDate={new Date(album.date)} />
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

export default withRouter(testWrapper('albums', AlbumEdit));
