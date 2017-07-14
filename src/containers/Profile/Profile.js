import React from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Cover } from '../Layout';
import Studio from '../../components/Studio';

class Profile extends React.Component {

	render() {
		return (
			<div className="layout-studio">
				<Cover className="cover" src={this.props.cover} >
					<div>
						<Avatar size={150} src={this.props.auth.user.picture} />
						<p style={{marginBottom: 0}} className="cover-name">{this.props.auth.user.name}</p>
					</div>
				</Cover>
				<div className="container">
					<h1 className="big-title">Your likes</h1>
					<Studio media={this.props.media}></Studio>
				</div>
			</div>
		);
	}
}

Profile.propTypes = {
	media: PropTypes.object.isRequired,
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
