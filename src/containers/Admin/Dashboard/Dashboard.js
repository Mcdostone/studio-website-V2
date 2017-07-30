import React from 'react';
import Widget from './Widget';
import Face from 'material-ui/svg-icons/action/face';
import Theaters from 'material-ui/svg-icons/action/theaters';
import Backup from 'material-ui/svg-icons/action/backup';
import Album from 'material-ui/svg-icons/av/album';
import AlertWarning from 'material-ui/svg-icons/alert/warning';


class DashboardStudio extends React.Component {

	componentDidMount() {
	}

	render() {
		return <div className="dashboard">
			<Widget resource='users'>
				<Face style={{width: '50%', height: '50%'}} color="white"/>
			</Widget>

			<Widget resource='albums'>
				<Album style={{width: '50%', height: '50%'}} color="white"/>
			</Widget>

			<Widget resource='media'>
				<Theaters style={{width: '50%', height: '50%'}} color="white"/>
			</Widget>

			<Widget resource='uploads'>
				<Backup style={{width: '50%', height: '50%'}} color="white"/>
			</Widget>

			<Widget resource='reports'>
				<AlertWarning style={{width: '50%', height: '50%'}} color="white"/>
			</Widget>
		</div>
	}
}

export default DashboardStudio;
