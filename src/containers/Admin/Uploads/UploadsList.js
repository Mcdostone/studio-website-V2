import React from 'react';
import PropTypes from 'prop-types';
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


const UploadsList = (props) =>
	<Table selectable={false}>
		<TableHeader
		displaySelectAll={false}
  	adjustForCheckbox={false} >
  		<TableRow selectable={false}>
				<TableHeaderColumn>ID</TableHeaderColumn>
				<TableHeaderColumn>Uploader</TableHeaderColumn>
				<TableHeaderColumn>Count Media</TableHeaderColumn>
				<TableHeaderColumn>Created at</TableHeaderColumn>
  		</TableRow>
  	</TableHeader>
		<TableBody displayRowCheckbox={false}>
			{Object.keys(props.dataSource).map(id => {
				const link = `/admin/uploads/${id}`;
				const linkAuthor = `/admin/users/${props.dataSource[id].author}`;
				return <TableRow hoverable={true} key={id}>
						<TableRowColumn><Link to={link}>{id}</Link></TableRowColumn>
						<TableRowColumn><Link to={linkAuthor}>{props.dataSource[id].author}</Link></TableRowColumn>
						<TableRowColumn>{props.dataSource[id].countMedia()}</TableRowColumn>
						<TableRowColumn>{formatDate(props.dataSource[id].createdAt)}</TableRowColumn>
					</TableRow>
			})}
		</TableBody>
	</Table>

UploadsList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper(UploadsList, 'uploads');
