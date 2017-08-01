import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Snackbar from 'material-ui/Snackbar';
import Dashboard from './Dashboard';
import { hide } from '../../actions/notificationActions';
import { MediaList, MediumEdit, MediaCreate } from './Media';
import { UsersList, UserForm } from './Users';
import { AlbumsList, AlbumForm } from './Albums';
import { ReportsList } from './Reports';
import { UploadsList, UploadForm } from './Uploads';
import './Admin.css';

class Admin extends React.Component {

	componentDidMount() {
		document.body.style.background = '#EEEEEE';
	}

	componentWillUnmount() {
		document.body.style.background = '';
	}

	render() {
		return <div className="admin-app">
			<Route exact path="/admin" component={Dashboard} />

			<Route exact path="/admin/media" component={MediaList} />
			<Route exact path="/admin/media/create" component={MediaCreate} />
			<Route path="/admin/media/:id" render={() => <MediumEdit/>} />

			<Route exact path="/admin/reports" component={ReportsList} />

			<Route exact path="/admin/uploads" render={() => <UploadsList creation />} />
			<Route exact path="/admin/uploads/create" render={() => <UploadForm creation />} />

			<Route exact path="/admin/users" render={() => <UsersList />} />
			<Route path="/admin/users/:id" render={() => <UserForm />} />

			<Route exact path="/admin/albums" render={() => <AlbumsList creation />} />
			<Route path="/admin/albums/:id" render={() => <AlbumForm />} />
			<Route exact path="/admin/albums/create" render={() => <AlbumForm creation />} />
			<Snackbar
				open={this.props.notif.open}
				message={this.props.notif.message}
				autoHideDuration={this.props.notif.autoHideDuration}
				onRequestClose={(e) => e !== 'clickaway' ? this.props.hideNotif() : null}
			/>
		</div>
	}
};

function mapStateToProps(state, ownProps) {
	return {
		notif: state.notifications,
		...ownProps,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		hideNotif: hide,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
