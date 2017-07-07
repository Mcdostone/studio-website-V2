import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWithRefs } from '../../actions/fetchActions';
import Studio from '../../containers/Studio';

export default function mediaWrapper(resource) {

	const MediaContainer = class extends React.Component {

		componentDidMount() {
			const id = this.props.match.params.id;
			this.fetchData(id);
		}

		getData() {
			const id = this.props.match.params.id;
			return this.props.dataSource[id] !== undefined ? this.props.dataSource[id] : undefined;
		}

		fetchData(id) {
			this.props.fetchWithRefs(resource, id, 'media');
		}

		componentWillReceiveProps(nextProps) {
			const oldId = this.props.match.params.id;
			const newId = nextProps.match.params.id;
			if(oldId !== newId) {
				this.fetchData(newId);
				return true;
			}
			return false;
		}

		render() {
			const id = this.props.match.params.id;
			const data = this.getData(id);
			const media = this.props.media.media;
			return <Studio title={data ? data.name : ''} id={id} media={media} />
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

	return connect(mapStateToProps, mapDispatchToProps)(MediaContainer);
}
