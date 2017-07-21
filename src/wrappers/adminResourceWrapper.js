import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAll } from '../actions/fetchActions';


export default function adminResourceWrapper(WrappedComponent, resource, fetchAllAction = fetchAll) {

	const adminResourceContainer = class extends React.Component {

		componentDidMount() {
			console.log()
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
			fetchAll: fetchAllAction
		}, dispatch);
	}

	adminResourceContainer.propTypes = {
		fetchAll: PropTypes.func.isRequired,
	}

	return connect(mapStateToProps, mapDispatchToProps)(withRouter(adminResourceContainer));
}
