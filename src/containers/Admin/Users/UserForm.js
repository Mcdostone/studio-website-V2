import React from 'react';
import moment from 'moment';
import Avatar from 'material-ui/Avatar';
import { SimpleCover } from '../../../components/Cover';
import RaisedButton from 'material-ui/RaisedButton';
import ActionDelete from 'material-ui/svg-icons/action/delete-forever';
import Toggle from 'material-ui/Toggle';
import { adminWrapper } from '../../../wrappers';
import {Card, CardActions, CardText, CardTitle } from 'material-ui/Card';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';


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

		const likes = {};
		return (
				<Card className="admin-container users-container">
					<SimpleCover className="cover" title="lol" src="http://www.groupesida.ch/filrouge/san-francisco-news-summer-code-camp.jpg">
						<div className="admin-user-header">
							<Avatar size={150} src={user.picture} />
							<div className="admin-user-info">
								<p>{user.getFullName()}</p>
								<p>{user.email}</p>
								<p>{user.id}</p>
								<p>Connected {moment(user.createdAt).fromNow()}</p>
							</div>
						</div>
					</SimpleCover>

					<CardTitle title="Account"
					expandable={false} />
					<CardText>
						<div>
							<Toggle onTouchTap={this.toggleBan} toggled={user.banned} label="Ban user ?" />
						</div>
					</CardText>

					<CardTitle title={`Tags of ${user.givenName}`}
					subtitle="X tags"
					expandable={false} />
					<CardText>
						<Table selectable={false}>
							<TableHeader
								displaySelectAll={false}
      		  		adjustForCheckbox={false}
							>
	      				<TableRow selectable={false}>
									<TableHeaderColumn>ID</TableHeaderColumn>
									<TableHeaderColumn>tag</TableHeaderColumn>
									<TableHeaderColumn>Medium</TableHeaderColumn>
									<TableHeaderColumn></TableHeaderColumn>
      					</TableRow>
    					</TableHeader>
    					<TableBody displayRowCheckbox={false}>
							{Object.keys(likes).map(l =>
								<TableRow>
									<TableRowColumn></TableRowColumn>
									<TableRowColumn></TableRowColumn>
									<TableRowColumn></TableRowColumn>
									<TableRowColumn><RaisedButton icon={<ActionDelete color={'#FFC107'} />} /></TableRowColumn>
								</TableRow>
							)}

							</TableBody>
						</Table>
					</CardText>

					<CardActions>
						<RaisedButton label="Back" onTouchTap={() => this.props.history.goBack()} />
						<RaisedButton label="Save" onTouchTap={this.applyChanges}/>
					</CardActions>
				</Card>
		);
	}

	render() {
		return this.state.data !== undefined ? this.getContainer() : null;
	}
}

export default adminWrapper(UserForm, 'users');
