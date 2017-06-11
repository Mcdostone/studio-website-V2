import React from 'react';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layout from '../Layout';
import Cover from '../Cover';

class Profile extends React.Component {

	render() {
		const cover = (
			<Cover>
				<Avatar
					size={150}
					src={this.props.auth.user.profile.imageUrl}
        />
				<p className="cover-name">{this.props.auth.user.profile.name}</p>

			</Cover>
		);
		return (
			<Layout cover={cover}>
			pro!
			</Layout>
		)
	}
}

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
