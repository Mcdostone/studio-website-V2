import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';
import { Cover } from '../../components/Cover';
import Studio from '../../components/Studio';

class Profile extends React.Component {

	render() {
		return (
			<div className="layout-studio">
				<Cover className="cover" title="profile" src={this.props.cover} >
					<div style={{marginTop: 50, height: '100%'}}>
						<Avatar size={150} src={this.props.user.picture} />
						<p style={{marginBottom: 0, color: 'white', textAlign: 'center'}} className="cover-name">
							{this.props.user.getFullName()}
						</p>
					</div>
				</Cover>
				<div className="container">
					<h1 className="big-title">Your likes</h1>
					<Studio />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.auth.user
	}
}

Profile.propTypes = {
	user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, null)(Profile);
