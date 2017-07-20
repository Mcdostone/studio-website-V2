import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn, } from 'material-ui/Table';
import { formatDate } from '../../../utils';
import { adminListWrapper } from '../../../wrappers';


const AlbumsList = (props) =>
	<Table selectable={false}>
		<TableHeader
		displaySelectAll={false}
    adjustForCheckbox={false}
		>
  		<TableRow selectable={false}>
				<TableHeaderColumn>ID</TableHeaderColumn>
				<TableHeaderColumn>title</TableHeaderColumn>
				<TableHeaderColumn>date</TableHeaderColumn>
				<TableHeaderColumn>updatedAt</TableHeaderColumn>
  		</TableRow>
  	</TableHeader>
  	<TableBody displayRowCheckbox={false}>
			{Object.keys(props.dataSource).map(id => {
				const link = `/admin/albums/${id}`
				return <TableRow hoverable={true} key={id}>
						<TableRowColumn><Link to={link}>{id}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].title}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{formatDate(props.dataSource[id].date, 'DD/MM/YYYY')}</Link></TableRowColumn>
						<TableRowColumn>{formatDate(props.dataSource[id].updatedAt, 'DD/MM/YYYY HH:mm')}</TableRowColumn>
					</TableRow>
			}
			)}
		</TableBody>
	</Table>

AlbumsList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper('albums', AlbumsList);
