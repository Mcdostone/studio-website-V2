import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOne } from '../actions/fetchActions';
import { update } from '../actions/crudActions';


export default function testWrapper(resource, WrappedComponent) {

	const testContainer = class extends React.Component {

		constructor(props) {
			super(props);
			this.update = this.update.bind(this);
		}

		componentDidMount() {
			const id = this.props.match.params.id;
			this.fetchData(id);
		}

		fetchData(id) {
			this.props.fetchOne(resource, id);
		}

		update(user) {
			this.props.update(resource, user)
		}

		render() {
			const id = this.props.match.params.id;
			const data = this.props.create ? this.props.default : this.props.dataSource[id]
			return <WrappedComponent {...this.props} update={this.update} data={data} />
		}

	}

	function mapStateToProps(state) {
		return {
			dataSource: state[resource],
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchOne,
			update
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(testContainer);
}
