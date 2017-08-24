import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchAll, fetchOne } from '../actions/fetchActions';
import { remove, update, create } from '../actions/crudActions';

const defaultActions = {
	fetchOne,
	fetchAll
};

export default function crudWrapper(WrappedComponent, actions = {}) {

	const crud = (props) => {
		return <WrappedComponent {...props} />
	};

	function mapStateToProps(state, ownProps) {
		return {
			state,
			...ownProps,
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			...Object.keys(actions).reduce((actionsSet, a) => {
				if(actions[a] !== undefined)
					actionsSet[a] = actions[a];
				return actionsSet;
			}, defaultActions),
			update,
			create,
			remove,
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(withRouter(crud));
}
