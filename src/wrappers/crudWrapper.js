import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { remove, update, create } from '../actions/crudActions';


export default function crudWrapper(WrappedComponent) {

	const crud = (props) => <WrappedComponent {...props} />;

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			update,
			create,
			remove,
		}, dispatch);
	}

	return connect(null, mapDispatchToProps)(withRouter(crud));
}
