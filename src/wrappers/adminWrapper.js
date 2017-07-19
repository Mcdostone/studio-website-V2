import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchOne } from '../actions/fetchActions';
import { remove, update, create } from '../actions/crudActions';


export default function adminWrapper(resource, WrappedComponent) {

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
			console.log(data);
			data.id === undefined ? this.props.create(resource, data) : this.props.update(resource, data);
		}

		render() {
			const data = this.props.creation ? this.props.default : this.props.dataSource[this.props.match.params.id];
			return <WrappedComponent {...this.props} save={this.save} data={data} />
		}

	}

	function mapStateToProps(state) {
		return {
			dataSource: state[resource],
			default: state.default[resource]
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchOne,
			update,
			create,
			remove,
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(withRouter(adminContainer));
}
