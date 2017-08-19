import React from 'react';
import UserCover from './UserCover';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { adminWrapper } from '../../../wrappers';
import {Card, CardActions, CardText, CardTitle } from 'material-ui/Card';


class UserForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {data: undefined};
		this.toggleBan = this.toggleBan.bind(this);
		this.applyChanges = this.applyChanges.bind(this);
	}

	toggleBan() {
		const userUpdated = this.state.data;
		userUpdated.banned = !userUpdated.banned
		this.setState({data: userUpdated});
	}

	toggleAuthor = () => {
		const userUpdated = this.state.data;
		userUpdated.role = userUpdated.isAuthor() ? 0 : 1;
		this.setState({data: userUpdated});
	}

	componentDidMount() {
		this.setState({data: this.props.data});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({data: nextProps.data});
		return this.props.data !== nextProps.data;
	}

	applyChanges() {
		this.props.save(this.state.data);
		this.props.history.goBack();
		}

	getContainer() {
		const user = this.state.data;
		return (
				<Card className="admin-container users-container">
					<UserCover
					className="cover"
					user={user}
					/>

					{!user.isAdmin() &&
						<div>
							<CardTitle title="Account"
							expandable={false} />

					 		<CardText>
								<div>
									<Toggle onTouchTap={this.toggleBan} toggled={user.banned} label="Ban user ?" />
								</div>
								<div>
									<Toggle onTouchTap={this.toggleAuthor} toggled={user.isAuthor()} label="Author ?" />
								</div>
							</CardText>
						</div>
					}

					<CardActions>
						<FlatButton label="Back" onTouchTap={() => this.props.history.goBack()} />
						<FlatButton label="Save" onTouchTap={this.applyChanges}/>
					</CardActions>
				</Card>
		);
	}

	render() {
		return this.state.data !== undefined ? this.getContainer() : null;
	}
}

export default adminWrapper(UserForm, 'users');
