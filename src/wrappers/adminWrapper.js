import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchOne, fetchAll } from '../actions/fetchActions';
import { remove, update, create } from '../actions/crudActions';


export default function adminWrapper(WrappedComponent, resource = null, fetchOneAction = fetchOne) {

	const adminContainer = class extends React.Component {

		constructor(props) {
			super(props);
			this.save = this.save.bind(this);
		}

		componentDidMount() {
			if(!this.props.creation) {
				this.fetchData(this.props.match.params.id);
			}
		}

		fetchData(id) {
			this.props.fetchOne(resource, id);
		}

		save(data) {
			data.id === undefined ? this.props.create(resource, data) : this.props.update(resource, data);
		}

		render() {
			const data = this.props.creation === true ? this.props.default[resource]() : this.props.dataSource[resource][this.props.match.params.id];
			return <WrappedComponent {...this.props} save={this.save} data={data} />
		}

	}

	function mapStateToProps(state, ownProps) {
		return {
			dataSource: state,
			default: state.default,
			...ownProps,
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchOne: fetchOneAction,
			fetchAll,
			update,
			create,
			remove,
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(withRouter(adminContainer));
}
