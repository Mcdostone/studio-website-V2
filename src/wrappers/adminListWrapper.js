import React from 'react';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import pluralize from 'pluralize';
import FlatButton from 'material-ui/RaisedButton';
import adminResourceWrapper from './adminResourceWrapper'


export default function adminListWrapper(WrappedComponent, resource, fetchAllAction) {

	const AdminList = (props) => {
		const count = Object.keys(props.dataSource).length;
		return (
			<Card className={`admin-container ${resource}-container`}>
				<CardTitle title={`List of ${resource}`}
				subtitle={`${count} ${count > 1 ? pluralize(resource) : pluralize.singular(resource)}`}
				expandable={false} />

				<CardActions>
      		{props.creation && <FlatButton label="Create" onTouchTap={() => props.history.push(`${resource}/create`)} />}
					<FlatButton label="Back" onTouchTap={() => props.history.goBack()} />
    		</CardActions>

				<WrappedComponent {...props} />
			</Card>
		);
	}

	return adminResourceWrapper(AdminList, resource, fetchAllAction);

}