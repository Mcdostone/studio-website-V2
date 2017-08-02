import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchAll, fetchOne } from '../actions/fetchActions';
import { remove, update, create } from '../actions/crudActions';

export default function crudWrapper(WrappedComponent, fetchOneAction) {

	const crud = (props) => <WrappedComponent {...props} />;

	function mapStateToProps(state, ownProps) {
		return {
			state,
			...ownProps,
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchAll,
			fetchOne: fetchOneAction ? fetchOneAction : fetchOne,
			update,
			create,
			remove,
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(withRouter(crud));
}
