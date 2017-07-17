import React from 'react';
import moment from 'moment';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import { testWrapper } from '../../../wrappers';
import {Card, CardActions, CardText} from 'material-ui/Card';


class UserEdit extends React.Component {

	render() {
		const user = this.props.data;
		return user !== undefined ?
				<Card className="admin-container">
					<div className="admin-user-header">
						<Avatar size={150} src={this.props.data.picture} />
						<div className="admin-user-info">
						{this.props.data !== undefined &&
						<div>
							<p>{this.props.data.getFullName()}</p>
							<p>{this.props.data.email}</p>
							<p>{this.props.data.id}</p>
							<p>Connected {moment(user.updatedAt).fromNow()}</p>
						</div>
						}
						</div>
					</div>
					<Divider />
					<CardText>
						<div className="form-input form-toggle">
							<Toggle label="Ban user ?" />
						</div>
					</CardText>
					<CardActions>
						<FlatButton label="Back" />
						<FlatButton label="Save" />
					</CardActions>
				</Card>
				: null;
	}
}

export default testWrapper('users', UserEdit);
