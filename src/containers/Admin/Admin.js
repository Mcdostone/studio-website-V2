import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import { MediaList, MediumEdit, MediaCreate } from './Media';
import { UsersList, UserForm } from './Users';
import { AlbumsList, AlbumForm } from './Albums';
import { ReportsList, ReportForm } from './Reports';
import { TagsList } from './Tags';
import { UploadsList, UploadForm, UploadRecap } from './Uploads';
import { CoversList, CoverForm } from './Covers';
import './Admin.css';

class Admin extends React.Component {

	componentDidMount() {
		document.body.style.background = '#EEEEEE';
		document.getElementById('navbar').classList.add('admin');
	}

	componentWillUnmount() {
		document.body.style.background = '';
		document.getElementById('navbar').classList.remove('admin');
	}

	render() {
		return <div className="admin-app">
		<Switch>
			<Route exact path="/admin" component={Dashboard} />

			<Route exact path="/admin/media" component={MediaList} />
			<Route exact path="/admin/media/create" component={MediaCreate} />
			<Route path="/admin/media/:id" render={() => <MediumEdit/>} />

			<Route exact path="/admin/reports" component={ReportsList} />
			<Route exact path="/admin/reports/:id" component={ReportForm} />

			<Route exact path="/admin/uploads" render={() => <UploadsList creation />} />
			<Route exact path="/admin/uploads/create" render={() => <UploadForm creation={true} />} />
			<Route path="/admin/uploads/:id" render={() => <UploadRecap />} />

			<Route exact path="/admin/covers" render={() => <CoversList />} />
			<Route exact path="/admin/covers/:id" render={() => <CoverForm />} />

			<Route exact path="/admin/users" render={() => <UsersList />} />
			<Route path="/admin/users/:id" render={() => <UserForm />} />

			<Route exact path="/admin/albums" render={() => <AlbumsList creation />} />
			<Route exact path="/admin/albums/create" render={() => <AlbumForm creation />} />
			<Route path="/admin/albums/:id" render={() => <AlbumForm />} />

			<Route exact path="/admin/tags" component	={TagsList} />
		</Switch>
		</div>
	}
};

export default Admin;
