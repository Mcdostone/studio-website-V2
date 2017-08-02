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


const MediaList = (props) =>
	<Table selectable={false}>
		<TableHeader
		displaySelectAll={false}
  	adjustForCheckbox={false} >
  		<TableRow selectable={false}>
				<TableHeaderColumn>ID</TableHeaderColumn>
				<TableHeaderColumn>Updated at</TableHeaderColumn>
  		</TableRow>
  	</TableHeader>
		<TableBody displayRowCheckbox={false}>
			{Object.keys(props.dataSource).map(mediumId => {
				const link = `/admin/media/${mediumId}`
				const medium = props.dataSource[mediumId];
				return <TableRow hoverable={true} key={mediumId}>
						<TableRowColumn><Link to={link}>{mediumId}</Link></TableRowColumn>
						<TableRowColumn>{formatDate(medium.updatedAt)}</TableRowColumn>
					</TableRow>
			})}
		</TableBody>
	</Table>

MediaList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper(MediaList, 'media');
