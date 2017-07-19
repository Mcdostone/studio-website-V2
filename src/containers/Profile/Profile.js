import React from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SimpleCover } from '../../components/Cover';
import Studio from '../../components/Studio';

class Profile extends React.Component {

	render() {
		return (
			<div className="layout-studio">
				<SimpleCover className="cover" title="profile" src={this.props.cover} >
					<div>
						<Avatar size={150} src={this.props.auth.user.picture} />
						<p style={{marginBottom: 0}} className="cover-name">{this.props.auth.user.name}</p>
					</div>
				</SimpleCover>
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

export default connect(mapStateToProps, null)(Profile);
