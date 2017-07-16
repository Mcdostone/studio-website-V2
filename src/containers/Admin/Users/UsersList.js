import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';

import { adminResourceWrapper } from '../../../wrappers';

class UsersList extends React.Component {

	render() {
		const users = this.props.dataSource || {}
		return (
			<div className="admin-container">
				<Table selectable={false}>

					<TableHeader
					displaySelectAll={false}
      	  adjustForCheckbox={false}
					>
      			<TableRow selectable={false}>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>Family name</TableHeaderColumn>
							<TableHeaderColumn>Firstname</TableHeaderColumn>
							<TableHeaderColumn>Authorization</TableHeaderColumn>
							<TableHeaderColumn>Last login time</TableHeaderColumn>
							<TableHeaderColumn>banned</TableHeaderColumn>
      			</TableRow>
    			</TableHeader>

    			<TableBody displayRowCheckbox={false}>
						{Object.keys(users).map(id => {
							const link = `/admin/users/${id}`
							return <TableRow hoverable={true} key={id}>
									<TableRowColumn><Link to={link}>{id}</Link></TableRowColumn>
									<TableRowColumn><Link to={link}>{users[id].familyName}</Link></TableRowColumn>
									<TableRowColumn><Link to={link}>{users[id].givenName}</Link></TableRowColumn>
									<TableRowColumn><Link to={link}>{users[id].authorization}</Link></TableRowColumn>
									<TableRowColumn>{moment(users[id].updatedAt).fromNow()}</TableRowColumn>
									<TableRowColumn><Link to={link}>{users[id].banned ? 'true' : ''}</Link></TableRowColumn>
								</TableRow>
						}
						)}
					</TableBody>
				</Table>
			</div>
		);
	}
}

export default adminResourceWrapper('users', UsersList);