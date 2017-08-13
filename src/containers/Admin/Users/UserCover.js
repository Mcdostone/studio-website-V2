import React from 'react';
import moment from 'moment';
import Avatar from 'material-ui/Avatar';
import { Cover } from '../../../components/Cover';

class UserCover extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.user !== undefined && this.props.user !== nextProps.user;
	}

	getContainer() {
		const user = this.props.user;
		return (
			<Cover
			className="cover"
			src="http://www.groupesida.ch/filrouge/san-francisco-news-summer-code-camp.jpg">
				<div className="admin-user-header">
					<Avatar size={150} src={user.picture} />
					<div className="admin-user-info">
						<p>{user.getFullName()}</p>
						<p>{user.email}</p>
						<p>{user.id}</p>
						<p>{user.getRoleName()}</p>
						<p>Connected {moment(user.createdAt).fromNow()}</p>
					</div>
				</div>
			</Cover>
		);
	}

	render() {
		return this.props.user !== undefined ? this.getContainer() : null;
	}

}

export default UserCover;
