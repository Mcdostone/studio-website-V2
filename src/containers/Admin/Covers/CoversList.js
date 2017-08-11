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
import { fetchAllCovers} from '../../../actions/coverActions';
import { adminListWrapper } from '../../../wrappers';


const CoversList = class extends React.Component {

	componentDidMount = () => this.props.fetchAll('albums');

	render = () =>
		<Table selectable={false}>
			<TableHeader
			displaySelectAll={false}
    	adjustForCheckbox={false}
			>
  			<TableRow selectable={false}>
					<TableHeaderColumn>ID</TableHeaderColumn>
					<TableHeaderColumn>Resource</TableHeaderColumn>
  			</TableRow>
  		</TableHeader>
  		<TableBody displayRowCheckbox={false}>
				{Object.keys(this.props.dataSource).map(id => {
					const link = `/admin/covers/${id}`
					return <TableRow hoverable={true} key={id}>
							<TableRowColumn><Link to={link}>{id}</Link></TableRowColumn>
							<TableRowColumn><Link to={link}>{this.props.dataSource[id].resource}</Link></TableRowColumn>
						</TableRow>
				})}
			</TableBody>
		</Table>
}


CoversList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper(CoversList, 'covers', fetchAllCovers);
