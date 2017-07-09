import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWithRefs } from '../actions/fetchActions';
import Studio from '../components/Studio';
import { Layout } from '../containers/Layout';


export default function studioWrapper(resource) {

	const wrapper = class extends React.Component {
		render() {
			return (
				<Layout cover={this.props.cover} title={this.props.title}>
					<Studio />
				</Layout>
			)
		}
	}

	function mapStateToProps(state) {
		return {
			dataSource: state[resource],
			media: state.media,
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchWithRefs,
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(wrapper);
}
