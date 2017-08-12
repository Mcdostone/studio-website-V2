import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserCover } from '../Users';
import Studio from '../../../components/Studio';
import { adminWrapper } from '../../../wrappers';
import { fetchMedium } from '../../../actions/mediaActions';
import {Card, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class UploadRecap extends React.Component {

	componentWillReceiveProps(nextProps) {
		if(this.props.data !== nextProps.data && nextProps.data && nextProps.data.id) {
			this.props.fetchOne('users', nextProps.data.author);
			Object.keys(nextProps.data.media).map(mediumId => this.props.fetchMedium('media', mediumId));
		}

	}

	getContainer = () => {
		const user = this.props.state.users[this.props.data.author];
		const media = Object.values(this.props.state.media).filter(medium => this.props.data.media[medium.id]);
		return (
			<Card className="admin-container uploads-container">
				<UserCover
				className="cover"
				user={user}
				/>
				<CardText>
					<Studio media={media} />
				</CardText>
				<CardActions>
					<FlatButton label="Back" onTouchTap={() => this.props.history.goBack()} />
				</CardActions>
			</Card>
		);
	}

	render() {
		return this.props.data !== undefined ? this.getContainer() : null;
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchMedium,
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(adminWrapper(UploadRecap, 'uploads'));
