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


const TagsList = (props) =>
	<Table selectable={false}>
		<TableHeader
		displaySelectAll={false}
    adjustForCheckbox={false}
		>
  		<TableRow selectable={false}>
				<TableHeaderColumn className="remove-small-screen">ID</TableHeaderColumn>
				<TableHeaderColumn>tag</TableHeaderColumn>
				<TableHeaderColumn>author</TableHeaderColumn>
				<TableHeaderColumn className="remove-small-screen">Created at</TableHeaderColumn>
  		</TableRow>
  	</TableHeader>
  	<TableBody displayRowCheckbox={false}>
			{Object.keys(props.dataSource).map(id => {
				const link = `/admin/tags/${id}`
				return <TableRow hoverable={true} key={id}>
						<TableRowColumn className="remove-small-screen"><Link to={link}>{id}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].tag}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{props.dataSource[id].author}</Link></TableRowColumn>
						<TableRowColumn><Link to={link}>{formatDate(props.dataSource[id].createdAt)}</Link></TableRowColumn>
					</TableRow>
			}
			)}
		</TableBody>
	</Table>

TagsList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper(TagsList, 'tags');
