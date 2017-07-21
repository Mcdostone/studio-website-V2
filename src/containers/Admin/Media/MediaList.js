import React from 'react';
import PropTypes from 'prop-types';
// import moment from 'moment';
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
import { fetchAllMedia } from '../../../actions/mediaActions';


const MediaList = (props) =>
	<Table selectable={false}>
		<TableHeader
		displaySelectAll={false}
  	adjustForCheckbox={false} >
  		<TableRow selectable={false}>
				<TableHeaderColumn>ID</TableHeaderColumn>
				<TableHeaderColumn>uploader</TableHeaderColumn>
				<TableHeaderColumn>CreatedAt</TableHeaderColumn>
				<TableHeaderColumn>UpdatedAt</TableHeaderColumn>
  		</TableRow>
  	</TableHeader>
		<TableBody displayRowCheckbox={false}>
			{Object.keys(props.dataSource).map(id => {
				const link = `/admin/media/${id}`
				return <TableRow hoverable={true} key={id}>
						<TableRowColumn><Link to={link}>{id}</Link></TableRowColumn>
						<TableRowColumn><Link to={'#'}>{null}</Link></TableRowColumn>
						<TableRowColumn>###</TableRowColumn>
						<TableRowColumn>###</TableRowColumn>
					</TableRow>
			})}
		</TableBody>
	</Table>

MediaList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper(MediaList, 'media', fetchAllMedia);
