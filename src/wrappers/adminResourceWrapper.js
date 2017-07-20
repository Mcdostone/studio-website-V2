import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAll } from '../actions/fetchActions';


export default function adminResourceWrapper(resource, WrappedComponent) {

	const adminResourceContainer = class extends React.Component {

		componentDidMount() {
			this.props.fetchAll(resource);
		}

		render() {
			return <WrappedComponent {...this.props} dataSource={this.props.dataSource || {}} />
		}

	}

	function mapStateToProps(state) {
		return {
			dataSource: state[resource],
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchAll,
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(withRouter(adminResourceContainer));
}
