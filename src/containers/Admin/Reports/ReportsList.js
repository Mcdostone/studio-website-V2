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
import { formatDate } from '../../../utils';


const UsersList = (props) =>
	<Table selectable={false}>
		<TableHeader
		displaySelectAll={false}
  	adjustForCheckbox={false} >
  		<TableRow selectable={false}>
				<TableHeaderColumn>ID</TableHeaderColumn>
				<TableHeaderColumn>description</TableHeaderColumn>
				<TableHeaderColumn>Reported by</TableHeaderColumn>
				<TableHeaderColumn>medium</TableHeaderColumn>
				<TableHeaderColumn>createdAt</TableHeaderColumn>
  		</TableRow>
  	</TableHeader>
		<TableBody displayRowCheckbox={false}>
			{Object.keys(props.dataSource).map(id => {
				const link = `/admin/reports/${id}`
				return <TableRow hoverable={true} key={id}>
						<TableRowColumn><Link to={link}>{id}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].description}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].reportedBy}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].medium}</Link></TableRowColumn>
						<TableRowColumn>{formatDate(props.dataSource[id].createdAt)}</TableRowColumn>
					</TableRow>
			})}
		</TableBody>
	</Table>

UsersList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper(UsersList, 'users');
