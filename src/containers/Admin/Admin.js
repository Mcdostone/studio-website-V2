import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import { UsersList, UserEdit } from './Users';
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
				<Route exact path="/admin/users" component={UsersList} />
				<Route path="/admin/users/:id" component={UserEdit} />
			</Switch>
		</div>
	}
};

export default Admin;
