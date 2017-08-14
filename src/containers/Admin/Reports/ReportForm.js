import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/FlatButton';
import { UserCover } from 'containers/Admin/Users';
import {Card, CardActions, CardText, CardTitle } from 'material-ui/Card';
import { adminWrapper } from 'wrappers';
import { DeleteDialog } from 'components/Dialogs';
import Studio from 'components/Studio';
import { fetchMedium, deleteMedium } from 'actions/mediaActions';

class ReportForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: undefined,
			sureDialog: false
		};
	}

	componentDidMount() {
		this.setState({data: this.props.data});
		if(this.props.data !== undefined)
			this.fetchReferences(this.props.data);
	}

	fetchReferences = (report) => {
		this.props.fetchOne('users', report.reportedBy);
		this.props.fetchMedium('media', report.medium);
	}

	reject = () => {
		this.props.history.goBack();
		this.props.remove('reports', this.state.data);
	}

	accept = () => {
		const medium = this.props.state.media[this.state.data.medium];
		this.props.deleteMedium(medium);
		this.props.remove('reports', this.state.data);
		this.props.history.goBack();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({data: nextProps.data});
		if(this.props.data === undefined && nextProps.data !== undefined) {
			this.fetchReferences(nextProps.data);
		}
		return this.props.data !== nextProps.data;
	}

	getContainer() {
		const user = this.props.state.users[this.state.data.reportedBy];
		const medium = this.props.state.media[this.state.data.medium];
		return (
			<Card className="admin-container users-container">
				<UserCover user={user} />
				<CardTitle title="Report"
				expandable={false} />
				<CardText>
					{this.state.data.description}
				</CardText>
				<CardText>
					<Studio disableToolbar media={[medium]} />
				</CardText>
				<CardActions>
					<FlatButton label="Reject" onTouchTap={() => this.reject()} />
					<FlatButton label="Accept" onTouchTap={() => this.setState({sureDialog: true})} />
					<DeleteDialog
					open={this.state.sureDialog}
					resource="media"
					handleClose={() => this.setState({sureDialog: false})}
					data={this.state.data}
					remove={this.props.deleteMedium}
					onAccept={this.accept} />
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
		fetchMedium,
		deleteMedium,
	}, dispatch);
}


export default connect(null, mapDispatchToProps)(adminWrapper(ReportForm, 'reports'));
