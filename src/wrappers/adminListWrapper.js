import React from 'react';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import pluralize from 'pluralize';
import FlatButton from 'material-ui/RaisedButton';
import crudWrapper from './crudWrapper'

export default function adminListWrapper(WrappedComponent, resource) {

	const AdminList = class extends React.Component {

		componentDidMount() {
			this.props.fetchAll(resource);
		}

		render() {
			const dataSource = this.props.state[resource];
			const count = Object.keys(dataSource).length;
			return (
				<Card className={`admin-container ${resource}-container`}>
					<CardTitle title={`List of ${resource}`}
					subtitle={`${count} ${count > 1 ? pluralize(resource) : pluralize.singular(resource)}`}
					expandable={false} />

					<CardActions>
      			{this.props.creation && <FlatButton label="Create" onTouchTap={() => this.props.history.push(`${resource}/create`)} />}
						<FlatButton label="Back" onTouchTap={() => this.props.history.goBack()} />
    			</CardActions>

					<WrappedComponent {...this.props} dataSource={dataSource} />
				</Card>
			);
		}

	}

	return crudWrapper(AdminList);

}
