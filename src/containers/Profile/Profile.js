import React from 'react';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Cover, Layout } from '../Layout';


class Profile extends React.Component {

	render() {
		const cover = (
			<Cover>
				<Avatar
					size={150}
					src={this.props.auth.user.profile.picture}
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