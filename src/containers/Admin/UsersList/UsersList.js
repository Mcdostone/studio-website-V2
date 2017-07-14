import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';


class UsersList extends React.Component {

	render() {
		return (
			<List {...this.props}>
				<Datagrid>
					<TextField source="name" />
					<TextField source="id" />
					<TextField source="email" />
				</Datagrid>
    	</List>
		);
	}

}
export default UsersList;
