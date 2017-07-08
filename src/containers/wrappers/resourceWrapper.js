import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAll } from '../../actions/fetchActions';
import { setCover, setTitle } from '../../actions/coverActions';
import { Layout } from '../Layout';

export default function resourceWrapper(resource, WrappedComponent) {

	const resourceContainer = class extends React.Component {

		componentDidMount() {
			this.props.setCover(resource);
			this.props.setTitle(resource);
			this.props.fetchAll(resource);
		}

		render() {
			return (
				<Layout cover={this.props.cover} title={resource}>
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
			setTitle,
			setCover,
			fetchAll,
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(resourceContainer);
}
