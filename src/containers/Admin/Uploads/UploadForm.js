import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { Card } from 'material-ui/Card';
import GooglePicker from '../GooglePicker';
import { adminWrapper } from '../../../wrappers';
import config from '../../../configuration';
import { buildMediumFromDrive } from '../../../factories';
import driveLogo from '../../../assets/drive.svg';
import { getRandomProperty } from '../../../utils';
import UploadTable from './UploadTable';

class UploadForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			slideIndex: 0,
		};
	}

  handleChange = (value) => {
    this.setState({ slideIndex: value});
  };

	handleDataPicked(data) {
		switch(data.action) {
			case 'picked':
				let newMedia = {};
				data.docs.map(doc => {
					const newMedium = buildMediumFromDrive(doc);
					newMedium.album = getRandomProperty(this.props.state.albums);
					newMedia[doc.id] = newMedium;
					return null;
				});
				newMedia = {...this.state.media, ...newMedia};
				this.setState({media: newMedia, mediaByIndex: Object.values(newMedia)});
				break;
			default:
				return;
		}
	}

	render() {
		return (
			<div>
				<Card className="admin-container uploads-container">
				  <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
						<Tab label="Google drive" value={0} />
      	    <Tab label="Web" value={1} />
      	    <Tab label="Youtube" value={2} />
					</Tabs>
					<SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
						<GooglePicker clientId={config.PICKER.clientId}
						developerKey={config.PICKER.apiKey}
						scope={['https://www.googleapis.com/auth/drive.readonly']}
						onChange={this.handleDataPicked}
						multiselect={true}
						navHidden={true}
						authImmediate={true}
						mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
						viewId={'DOCS'}>
							<div>
								<img className="google-drive-logo" src={driveLogo} alt="google drive logo" />
								<p>Open google drive</p>
							</div>
						</GooglePicker>
						<div>web</div>
						<div>youtube</div>
					</SwipeableViews>
				</Card>

				<UploadTable {...this.props} />
			</div>
		);
	}

}

export default adminWrapper(UploadForm, 'uploads');
