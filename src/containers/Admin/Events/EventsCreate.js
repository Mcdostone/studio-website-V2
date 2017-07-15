import React from 'react';
import { CardActions } from 'material-ui/Card';
import { Create, DateInput, SimpleForm, TextInput } from 'admin-on-rest';
import { CreateButton } from 'admin-on-rest';


export default class EventsCreate extends React.Component {

	render() {
		console.log(this);
		console.log(this.props.location.pathname.split('/').slice(0, -2).join('/'));
		return (
			<Create  actions={<ResourceActions />} {...this.props}>
				<SimpleForm>
					<TextInput source="name" />
					<DateInput source="date" />
				</SimpleForm>
    	</Create>
		);
	}

}



const ResourceActions = ({ basePath, data, refresh }) => (
    <CardActions>
        <CreateButton basePath={basePath}/>
    </CardActions>
);
