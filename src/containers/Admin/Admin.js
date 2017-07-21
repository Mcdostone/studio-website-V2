import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import { MediaList } from './Media';
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
			<Switch>
				<Route exact path="/admin" component={Dashboard} />
				<Route exact path="/admin/media" component={MediaList} />
				<Route exact path="/admin/users" component={UsersList} />
				<Route path="/admin/users/:id" component={UserEdit} />
				<Route exact path="/admin/albums" component={AlbumsList} />
				<Route exact path="/admin/albums/create" render={() => <AlbumForm creation />} />
				<Route path="/admin/albums/:id" render={() => <AlbumForm />} />
			</Switch>
		</div>
	}
};

export default Admin;
