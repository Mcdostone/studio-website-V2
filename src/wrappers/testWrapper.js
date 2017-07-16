import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOne } from '../actions/fetchActions';


export default function testWrapper(resource, WrappedComponent) {

	const testContainer = class extends React.Component {

		componentDidMount() {
			const id = this.props.match.params.id;
			this.fetchData(id);
		}

		fetchData(id) {
			this.props.fetchOne(resource, id);
		}

		render() {
			const id = this.props.match.params.id;
			return <WrappedComponent data={this.props.dataSource[id]} />
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
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(testContainer);
}
