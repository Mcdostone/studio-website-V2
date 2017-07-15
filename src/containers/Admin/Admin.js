import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TranslationProvider } from 'admin-on-rest';

import Dashboard from './Dashboard';
import { EventsList, EventsCreate } from './Events';
import UsersList from './UsersList';



// bootstrap redux and the routes
const Admin = (props) => (
	<TranslationProvider>
		<Switch>
			<Route exact path="/admin" component={Dashboard} />
			<Route exact path="/admin/users" render={(routeProps) => <UsersList hasCreate resource="users" {...routeProps} />} />
			<Route exact path="/admin/events" render={(routeProps) => <EventsList hasCreate resource="events" {...routeProps} />} />
			<Route exact path="/admin/events/create" render={(routeProps) => <EventsCreate hasCreate resource="events" {...routeProps} />} />
		</Switch>
	</TranslationProvider>
	)

export default Admin;
