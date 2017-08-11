import React from 'react';
import Widget from './Widget';
import Face from 'material-ui/svg-icons/action/face';
import Theaters from 'material-ui/svg-icons/action/theaters';
import Backup from 'material-ui/svg-icons/action/backup';
import Album from 'material-ui/svg-icons/av/album';
import Panorama from 'material-ui/svg-icons/image/panorama';
import AlertWarning from 'material-ui/svg-icons/alert/warning';
import { crudWrapper } from '../../../wrappers';

class DashboardStudio extends React.Component {

	componentDidMount() {
		this.props.fetchAll('users');
		this.props.fetchAll('albums');
		this.props.fetchAll('uploads');
	}

	getCount = resource => {
		const resourceData = this.props.state[resource];
		return resourceData ? Object.keys(resourceData).length : 0;
	}

	render() {
		return <div className="dashboard">
			<Widget resource='users' count={this.getCount('users')}>
				<Face style={{width: '50%', height: '50%'}} color="white"/>
			</Widget>

			<Widget resource='albums' count={this.getCount('albums')} >
				<Album style={{width: '50%', height: '50%'}} color="white" />
			</Widget>

			<Widget resource='media' count={this.getCount('media')}>
				<Theaters style={{width: '50%', height: '50%'}} color="white"/>
			</Widget>

			<Widget resource='uploads' count={this.getCount('uploads')}>
				<Backup style={{width: '50%', height: '50%'}} color="white"/>
			</Widget>

			<Widget resource='reports' count={this.getCount('reports')}>
				<AlertWarning style={{width: '50%', height: '50%'}} color="white"/>
			</Widget>

			<Widget resource='covers' count={this.getCount('covers')}>
				<Panorama style={{width: '50%', height: '50%'}} color="white"/>
			</Widget>
		</div>
	}
}

export default crudWrapper(DashboardStudio);
