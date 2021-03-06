import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAll } from '../actions/fetchActions';
import { fetchCover } from '../actions/coverActions';
import { Layout } from '../containers/Layout';

export default function resourceWrapper(WrappedComponent, resource) {

	const resourceContainer = class extends React.Component {

		componentDidMount() {
			this.props.fetchAll(resource);
			this.props.fetchCover('covers', resource);
		}

		render() {
			return (
				<Layout cover={this.props.cover ? this.props.cover.cover : null} title={resource}>
					<WrappedComponent dataSource={this.props.dataSource} />
				</Layout>
			);
		}

	}

	function mapStateToProps(state) {
		return {
			dataSource: state[resource],
			cover: state.covers[resource],
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchAll,
			fetchCover,
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(resourceContainer);
}
