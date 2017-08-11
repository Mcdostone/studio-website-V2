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


class UploadsList extends React.Component {

	componentDidMount() {
		this.props.fetchAll('users');
	}

	getUserName(userId) {
		const user = this.props.state.users[userId];
		return user ? user.getFullName() : userId
	}

	render() {
		return (
		<Table selectable={false}>
			<TableHeader
			displaySelectAll={false}
  		adjustForCheckbox={false} >
  			<TableRow selectable={false}>
					<TableHeaderColumn >ID</TableHeaderColumn>
					<TableHeaderColumn className="remove-small-screen">Uploader</TableHeaderColumn>
					<TableHeaderColumn className="remove-small-screen">Count Media</TableHeaderColumn>
					<TableHeaderColumn>Created at</TableHeaderColumn>
  			</TableRow>
  		</TableHeader>
			<TableBody displayRowCheckbox={false}>
				{Object.keys(this.props.dataSource).map(uploadId => {
					const link = `/admin/uploads/${uploadId}`;
					const upload = this.props.dataSource[uploadId];
					const linkAuthor = `/admin/users/${upload.author}`;
					return <TableRow hoverable={true} key={uploadId}>
							<TableRowColumn><Link to={link}>{uploadId}</Link></TableRowColumn>
							<TableRowColumn className="remove-small-screen"><Link to={linkAuthor}>{this.getUserName(upload.author)}</Link></TableRowColumn>
							<TableRowColumn className="remove-small-screen">{upload.countMedia()}</TableRowColumn>
							<TableRowColumn>{formatDate(upload.createdAt)}</TableRowColumn>
						</TableRow>
				})}
			</TableBody>
		</Table>
		);
	}

}

UploadsList.propTypes = {
	dataSource: PropTypes.object.isRequired
};

export default adminListWrapper(UploadsList, 'uploads');
