import React from 'react';
import PropTypes from 'prop-types';
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
import { adminListWrapper } from '../../../wrappers';

const UsersList = (props) =>
	<Table selectable={false}>
		<TableHeader
		displaySelectAll={false}
  	adjustForCheckbox={false} >
  		<TableRow selectable={false}>
				<TableHeaderColumn className="remove-small-screen">ID</TableHeaderColumn>
				<TableHeaderColumn>Family name</TableHeaderColumn>
				<TableHeaderColumn>Firstname</TableHeaderColumn>
				<TableHeaderColumn className="remove-small-screen">Role</TableHeaderColumn>
				<TableHeaderColumn className="remove-small-screen">Last login time</TableHeaderColumn>
				<TableHeaderColumn className="remove-small-screen">banned</TableHeaderColumn>
  		</TableRow>
  	</TableHeader>
		<TableBody displayRowCheckbox={false}>
			{Object.keys(props.dataSource).map(id => {
				const link = `/admin/users/${id}`;
				return <TableRow hoverable={true} key={id}>
						<TableRowColumn className="remove-small-screen"><Link to={link}>{id}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].familyName}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].givenName}</Link></TableRowColumn>
						<TableRowColumn className="remove-small-screen"><Link to={link}>{props.dataSource[id].getRoleName()}</Link></TableRowColumn>
						<TableRowColumn className="remove-small-screen">{moment(props.dataSource[id].createdAt).fromNow()}</TableRowColumn>
						<TableRowColumn className="remove-small-screen"><Link to={link}>{props.dataSource[id].banned ? 'true' : ''}</Link></TableRowColumn>
					</TableRow>
			})}
		</TableBody>
	</Table>

UsersList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper(UsersList, 'users');
