import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOne } from '../../../actions/fetchActions';
import {Card, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { fetchCover } from '../../../actions/coverActions';
import { adminWrapper } from '../../../wrappers';
import { FileInputField } from '../../../components/shared';
import AdminCover from '../AdminCover';


class CoverForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newCover: undefined,
			oldCover: undefined,
		};
		this.updateCover = this.updateCover.bind(this);
		this.applyChanges = this.applyChanges.bind(this);
	}

	componentDidMount() {
		this.setState({data: this.props.data});
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.data !== nextProps.data && nextProps.data && nextProps.data.id) {
			this.setState({ data: nextProps.data});
			if(nextProps.data.resource)
				this.props.fetchOneBasic(nextProps.data.resource, nextProps.data.id);
		}
	}

	applyChanges() {
/*		const data = this.state.data;
		if(this.state.valid) {
			data.cover = this.state.newCover || null;
			this.props.save(data);
			this.props.history.goBack();
		}*/
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
		return (
			<Card className="admin-container covers-container">
				<AdminCover
				className="cover"
				creation={true}
				src={this.state.newCover || this.state.data.cover}>
					<h2 className="cover-title">{this.state.data.id}</h2>
				</AdminCover>
				<CardText>
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

function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchOneBasic: fetchOne,
		}, dispatch);
	}

export default connect(null, mapDispatchToProps)(adminWrapper(CoverForm, 'covers', fetchCover));
