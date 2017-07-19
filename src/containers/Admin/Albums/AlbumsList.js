import React from 'react';
import FlatButton from 'material-ui/RaisedButton';
import {Card, CardTitle, CardActions } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableHeader,
	TableHeaderColumn, TableRow, TableRowColumn, } from 'material-ui/Table';
import { formatDate } from '../../../utils';
import { adminResourceWrapper } from '../../../wrappers';


class AlbumsList extends React.Component {

	constructor(props) {
		super(props);
		this.goToCreate = this.goToCreate.bind(this);
	}

	goToCreate() {
		this.props.history.push('/admin/albums/create');
	}

	render() {
		const albums = this.props.dataSource || {};
		const countAlbums = Object.keys(albums).length;
		return (
			<Card className="admin-container albums-container">
				<CardTitle title="List of albums"
				subtitle={countAlbums < 2 ?countAlbums + ' album' : countAlbums + ' albums'}
				expandable={false} />

				<CardActions>
      		<FlatButton label="Create" onTouchTap={this.goToCreate} />
    		</CardActions>

				<Table selectable={false}>
					<TableHeader
					displaySelectAll={false}
      	  adjustForCheckbox={false}
					>
      			<TableRow selectable={false}>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>title</TableHeaderColumn>
							<TableHeaderColumn>date</TableHeaderColumn>
							<TableHeaderColumn>updatedAt</TableHeaderColumn>
      			</TableRow>
    			</TableHeader>
    			<TableBody displayRowCheckbox={false}>
						{Object.keys(albums).map(id => {
							const link = `/admin/albums/${id}`
							return <TableRow hoverable={true} key={id}>
									<TableRowColumn><Link to={link}>{id}</Link></TableRowColumn>
									<TableRowColumn><Link to={link}>{albums[id].title}</Link></TableRowColumn>
									<TableRowColumn><Link to={link}>{formatDate(albums[id].date, 'DD/MM/YYYY')}</Link></TableRowColumn>
									<TableRowColumn>{formatDate(albums[id].updatedAt, 'DD/MM/YYYY HH:mm')}</TableRowColumn>
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
