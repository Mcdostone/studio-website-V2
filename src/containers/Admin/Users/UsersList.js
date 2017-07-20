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
				<TableHeaderColumn>ID</TableHeaderColumn>
				<TableHeaderColumn>Family name</TableHeaderColumn>
				<TableHeaderColumn>Firstname</TableHeaderColumn>
				<TableHeaderColumn>Authorization</TableHeaderColumn>
				<TableHeaderColumn>Last login time</TableHeaderColumn>
				<TableHeaderColumn>banned</TableHeaderColumn>
  		</TableRow>
  	</TableHeader>
		<TableBody displayRowCheckbox={false}>
			{Object.keys(props.dataSource).map(id => {
				const link = `/admin/users/${id}`
				return <TableRow hoverable={true} key={id}>
						<TableRowColumn><Link to={link}>{id}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].familyName}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].givenName}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].authorization}</Link></TableRowColumn>
						<TableRowColumn>{moment(props.dataSource[id].updatedAt).fromNow()}</TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].banned ? 'true' : ''}</Link></TableRowColumn>
					</TableRow>
			})}
		</TableBody>
	</Table>

UsersList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper('users', UsersList);
