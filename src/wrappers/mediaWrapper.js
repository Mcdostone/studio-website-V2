import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LayoutMedia } from '../containers/Layout';
import { fetchOne } from '../actions/fetchActions';
import { fetchCover } from '../actions/coverActions';

export default function mediaWrapper(resource, WrappedComponent = LayoutMedia) {

	const MediaContainer = class extends React.Component {

		componentDidMount = () => {
			const id = this.props.match.params.id;
			this.props.fetchOne(resource, id);
			this.props.fetchCover('covers', id);
		}

		componentWillReceiveProps = (nextProps, nextState) => {
			const id = this.props.match.params.id;
			if(this.props.dataSource[id] === undefined && nextProps.dataSource[id] !== undefined) {
				Object.keys(nextProps.dataSource[id].media).map(mediumId => this.props.fetchOne('media', mediumId));
			}
		}

		render() {
			const id = this.props.match.params.id;
			const data = this.props.dataSource[id];
			const media = Object.values(this.props.media).filter(medium => medium.album === (data ? data.id : null));

			return <WrappedComponent
			title={data ? data.title : null}
			cover={this.props.covers[id] ? this.props.covers[id].cover: null} media={media} />
		}

	}

	function mapStateToProps(state) {
		return {
			dataSource: state[resource],
			media: state.media,
			covers: state.covers,
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchOne,
			fetchCover,
		}, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(MediaContainer);
}
