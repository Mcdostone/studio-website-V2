import React from 'react';
import { adminWrapper } from '../../../wrappers';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardText } from 'material-ui/Card';


class MediumForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: undefined,
		};
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
		this.props.history.goBack();
	}

	getContainer() {
		const medium = this.state.data;

		return (
			<Card className="admin-container media-container">
				<CardText>
					{JSON.stringify(medium)}
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

export default adminWrapper('media', MediumForm);
