import React from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Cover, Layout } from '../Layout';
import Studio from '../Studio';
import mock from '../Media/mock-media';
import { mediaWrapper } from '../wrappers';

class Profile extends React.Component {

	render() {
		return (
			<div className="layout-studio">
				<Cover className="cover" >
					{/*<Avatar size={150} src={this.props.auth.user.profile.picture} />
					<p className="cover-name">{this.props.auth.user.profile.name}</p>
					*/}
				</Cover>
				<div className="container">
					<h1 className="big-title">What you liked</h1>
					<Studio media={mock}></Studio>
				</div>
			</div>
		);
	}
}

Profile.propTypes = {
	media: PropTypes.object,
};

Profile.defaultProps = {
	media: {}
};

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
