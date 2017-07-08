import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWithRefs } from '../../actions/fetchActions';
import { LayoutMedia } from '../Layout';

export default function mediaWrapper(resource, WrappedComponent = LayoutMedia) {

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

		getMediaByresourceId(id) {
			const filteredMedia = {}
			try {
				this.props.dataSource[id].media.map(idMedium => {
					if(this.props.media[idMedium] !== undefined)
						filteredMedia[idMedium] = this.props.media[idMedium]
					return undefined;
				});
			} catch(err) {}
			return filteredMedia;
		}

		render() {
			const id = this.props.match.params.id;
			const media = this.getMediaByresourceId(id);
			const title = this.props.dataSource[id] ? this.props.dataSource[id].name : '';
			return <WrappedComponent {...this.props} title={title} id={id} media={media} />
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
