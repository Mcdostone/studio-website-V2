import React from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { Cover } from '../../Layout';
import Toggle from 'material-ui/Toggle';
import { testWrapper } from '../../../wrappers';

class UserEdit extends React.Component {

	render() {
		return (
			<div>
				<Cover className="cover" src="user" title="user">
					<div>
						<Avatar size={150} src={this.props.data ? this.props.data.picture: ''} />
						<p style={{marginBottom: 0}} className="cover-name">{this.props.data !== undefined ? this.props.data.getFullName() : ''}</p>
					</div>
				</Cover>
				<div className="admin-form">
					<div className="form-input form-toggle">
						<Toggle label="Ban user ?" />
					</div>
					<div className="form-input">
						<RaisedButton label="Save" />
					</div>
				</div>
			</div>
		)
	}
}

export default testWrapper('users', UserEdit);
