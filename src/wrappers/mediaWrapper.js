import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LayoutMedia } from '../containers/Layout';

export default function mediaWrapper(resource, WrappedComponent = LayoutMedia) {

	const MediaContainer = class extends React.Component {

		render() {
			return null;
		}

	}

	function mapStateToProps(state) {
		return {
			dataSource: state[resource],
			media: state.media,
			cover: state.covers.current,
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(MediaContainer);
}
