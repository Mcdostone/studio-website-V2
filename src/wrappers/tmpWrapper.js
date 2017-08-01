import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchOne, fetchAll } from '../actions/fetchActions';
import { remove, update, create } from '../actions/crudActions';


export default function tmpWrapper(WrappedComponent) {

	const tmp = (props) => <WrappedComponent {...props} />;

	function mapStateToProps(state, ownProps) {
		return {
			state,
			...ownProps,
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchOne,
			fetchAll,
			update,
			create,
			remove,
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(withRouter(tmp));
}
