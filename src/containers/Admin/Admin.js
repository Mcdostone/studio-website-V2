import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import { UsersList, UserEdit } from './Users';
import './Admin.css';

const Admin = (props) => (
	<Switch>
		<Route exact path="/admin" component={Dashboard} />
		<Route exact path="/admin/users" component={UsersList} />
		<Route path="/admin/users/:id" component={UserEdit} />
	</Switch>
	);

export default Admin;
