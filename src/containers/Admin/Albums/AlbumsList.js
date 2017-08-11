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
				<TableHeaderColumn className="remove-small-screen">ID</TableHeaderColumn>
				<TableHeaderColumn>Title</TableHeaderColumn>
				<TableHeaderColumn>Date</TableHeaderColumn>
				<TableHeaderColumn className="remove-small-screen">Updated at</TableHeaderColumn>
  		</TableRow>
  	</TableHeader>
  	<TableBody displayRowCheckbox={false}>
			{Object.keys(props.dataSource).map(id => {
				const link = `/admin/albums/${id}`
				return <TableRow hoverable={true} key={id}>
						<TableRowColumn className="remove-small-screen"><Link to={link}>{id}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].title}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{formatDate(props.dataSource[id].date, 'DD/MM/YYYY')}</Link></TableRowColumn>
						<TableRowColumn className="remove-small-screen">{formatDate(props.dataSource[id].updatedAt)}</TableRowColumn>
					</TableRow>
			}
			)}
		</TableBody>
	</Table>

AlbumsList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper(AlbumsList, 'albums');
