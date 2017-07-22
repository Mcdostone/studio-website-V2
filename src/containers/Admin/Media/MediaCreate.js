import React from 'react';
import { adminWrapper } from '../../../wrappers';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardText } from 'material-ui/Card';
import { authWrapper } from '../../../wrappers';
import GooglePicker from '../GooglePicker';
import config from '../../../configuration';


class MediaCreate extends React.Component {

	constructor(props) {
		super(props);
		this.handleDataPicked = this.handleDataPicked.bind(this);
		this.state = {
			media: {},
		};
	}

	handleDataPicked(data) {
		switch(data.action) {
			case 'picked':
				const newMedia = {};
				data.docs.map(doc => newMedia[doc.id] = doc);
				this.setState({media: newMedia});
				break;
			default:
				return;
		}
	}

	render() {
		return (
			<Card className="admin-container media-container">
				<CardText>

					<GooglePicker clientId={config.PICKER.clientId}
						developerKey={config.PICKER.apiKey}
						scope={['https://www.googleapis.com/auth/drive.readonly']}
						onChange={this.handleDataPicked}
						multiselect={true}
						navHidden={true}
						authImmediate={true}
						mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
						viewId={'DOCS'}>
   					<FlatButton label="google drive" />
					</GooglePicker>

					<Table>
						<TableHeader>
  						<TableRow>
								<TableHeaderColumn>ID</TableHeaderColumn>
								<TableHeaderColumn>Link</TableHeaderColumn>
  						</TableRow>
  					</TableHeader>
						<TableBody>
							{Object.keys(this.state.media).map(id =>
								<TableRow hoverable={true} key={id}>
									<TableRowColumn>{id}</TableRowColumn>
									<TableRowColumn><a target="blank" href={this.state.media[id].url}>{this.state.media[id].url}</a></TableRowColumn>
								</TableRow>
							)}
						</TableBody>
					</Table>

				</CardText>
				<CardActions>
					<FlatButton label="Back" onTouchTap={() => this.props.history.goBack()} />
					<FlatButton label="Save" onTouchTap={this.applyChanges}/>
				</CardActions>
			</Card>
		);
	}
}

export default authWrapper(adminWrapper('media', MediaCreate));
