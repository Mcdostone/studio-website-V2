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
// import { adminListWrapper } from '../../../wrappers';
import { formatDate } from '../../../utils';


const MediaList = class extends React.Component {

	componentDidMount() {
		this.props.fetchAll('albums');
	}

	render() {
		return (
			<Table selectable={false}>
				<TableHeader
				displaySelectAll={false}
  			adjustForCheckbox={false} >
  				<TableRow selectable={false}>
						<TableHeaderColumn>ID</TableHeaderColumn>
						<TableHeaderColumn>Album</TableHeaderColumn>
						<TableHeaderColumn className="remove-small-screen">Updated at</TableHeaderColumn>
  				</TableRow>
  			</TableHeader>
				<TableBody displayRowCheckbox={false}>
					{Object.keys(this.props.dataSource).map(mediumId => {
						const link = `/admin/media/${mediumId}`
						const medium = this.props.dataSource[mediumId];
						const album = medium.album && this.props.state.albums[medium.album ]? this.props.state.albums[medium.album] : null;
						return <TableRow hoverable={true} key={mediumId}>
								<TableRowColumn><Link to={link}>{mediumId}</Link></TableRowColumn>
								<TableRowColumn>{album && <Link to={`/admin/albums/${album.id}`}>{album.title}</Link>}</TableRowColumn>
								<TableRowColumn className="remove-small-screen">{formatDate(medium.updatedAt)}</TableRowColumn>
							</TableRow>
					})}
				</TableBody>
			</Table>
		);
	}

}

MediaList.propTypes = {
	dataSource: PropTypes.object.isRequired,
	fetchAll: PropTypes.func.isRequired,
};

export default MediaList;
