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


const ReportsList = (props) =>
	<Table selectable={false}>
		<TableHeader
		displaySelectAll={false}
  	adjustForCheckbox={false} >
  		<TableRow selectable={false}>
				<TableHeaderColumn>ID</TableHeaderColumn>
				<TableHeaderColumn className="remove-small-screen">Description</TableHeaderColumn>
				<TableHeaderColumn className="remove-small-screen">Reported by</TableHeaderColumn>
				<TableHeaderColumn className="remove-small-screen">Medium</TableHeaderColumn>
				<TableHeaderColumn className="remove-small-screen">Created at</TableHeaderColumn>
  		</TableRow>
  	</TableHeader>
		<TableBody displayRowCheckbox={false}>
			{Object.keys(props.dataSource).map(reportId => {
				const link = `/admin/reports/${reportId}`;
				const report = props.dataSource[reportId];
				return <TableRow hoverable={true} key={reportId}>
						<TableRowColumn><Link to={link}>{reportId}</Link></TableRowColumn>
						<TableRowColumn className="remove-small-screen"><Link to={link}>{report.description}</Link></TableRowColumn>
						<TableRowColumn className="remove-small-screen"><Link to={link}>{report.reportedBy}</Link></TableRowColumn>
						<TableRowColumn className="remove-small-screen"><Link to={link}>{report.medium}</Link></TableRowColumn>
						<TableRowColumn className="remove-small-screen">{formatDate(report.createdAt)}</TableRowColumn>
					</TableRow>
			})}
		</TableBody>
	</Table>

ReportsList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper(ReportsList, 'reports');
