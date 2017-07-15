import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';


export default class EventsList extends React.Component {

	render() {
		return (
			<List {...this.props}>
				<Datagrid>
					<TextField source="id" />
					<TextField source="name" />
					<TextField source="date" />
				</Datagrid>
    	</List>
		);
	}

}
