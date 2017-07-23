import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import { MediaList, MediumEdit, MediaCreate } from './Media';
import { UsersList, UserEdit } from './Users';
import { AlbumsList, AlbumForm } from './Albums';
import './Admin.css';

class Admin extends React.Component {

	componentDidMount() {
		document.body.style.background = '#EEEEEE';
	}

	componentWillUnmount() {
		document.body.style.background = '';
	}

	render() {
		return <div className="admin-app">
			<Route exact path="/admin" component={Dashboard} />
			<Route exact path="/admin/media" component={MediaList} />
			<Route exact path="/admin/media/create" component={MediaCreate} />
			<Route path="/admin/media/:id" render={() => <MediumEdit/>} />
			<Route exact path="/admin/users" component={UsersList} />
			<Route path="/admin/users/:id" component={UserEdit} />
			<Route exact path="/admin/albums" component={AlbumsList} />
			<Route path="/admin/albums/:id" render={() => <AlbumForm />} />
			<Route exact path="/admin/albums/create" render={() => <AlbumForm creation />} />
		</div>
	}
};

export default Admin;
