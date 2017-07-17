import React from 'react';
import moment from 'moment';
import {Card, CardTitle} from 'material-ui/Card';

import { Link } from 'react-router-dom';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';

import { adminResourceWrapper } from '../../../wrappers';

class AlbumsList extends React.Component {

	render() {
		const albums = this.props.dataSource || {}
		const countAlbums = Object.keys(albums).length;
		return (
			<Card className="admin-container albums-container">
				<CardTitle title="List of albums"
				subtitle={countAlbums < 2 ?countAlbums + ' album' : countAlbums + ' albums'}
				expandable={false} />
				<Table selectable={false}>

					<TableHeader
					displaySelectAll={false}
      	  adjustForCheckbox={false}
					>
      			<TableRow selectable={false}>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>title</TableHeaderColumn>
							<TableHeaderColumn>date</TableHeaderColumn>
      			</TableRow>
    			</TableHeader>

    			<TableBody displayRowCheckbox={false}>
						{Object.keys(albums).map(id => {
							const link = `/admin/albums/${id}`
							return <TableRow hoverable={true} key={id}>
									<TableRowColumn><Link to={link}>{id}</Link></TableRowColumn>
									<TableRowColumn><Link to={link}>{albums[id].title}</Link></TableRowColumn>
									<TableRowColumn><Link to={link}>{moment(albums[id].date).format('DD/MM/YYYY')}</Link></TableRowColumn>
								</TableRow>
						}
						)}
					</TableBody>
				</Table>
			</Card>
		);
	}
}

export default adminResourceWrapper('albums', AlbumsList);
