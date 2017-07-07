import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from '../Layout';
import MediaToolbar from './StudioToolbar';
import StudioList from '../../components/List/StudioList';
import Lightbox from '../../components/Lightbox';
import M from './M';
import { fetchMedia } from '../../actions/mediaActions';
import { showMedium, closeLightbox } from '../../actions/lightboxActions';
import { setCover } from '../../actions/coverActions';

class Studio extends React.Component {

	componentWillUnmount() {
		this.props.closeLightbox();
		this.props.setCover(null);
	}x

	componentDidMount() {
		this.props.setCover(this.props.id);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.Id !== nextProps.id) {
			this.props.setCover(nextProps.id);
			return true;
		}
		return false;
	}

	showMedium(mediumData) {
		this.props.openMediumInLightbox(mediumData);
	}

	render() {
		const container = (
			<div>
				<Lightbox />
				<StudioList gutter={16}>
					{Object.keys(this.props.media).map((id, index) =>
						<M square medium={this.props.media[id]} key={id} />
					)}
				</StudioList>
			</div>
		);

		return (
			<Layout cover={this.props.cover} title={this.props.title}>
				<MediaToolbar />
				{container}
			</Layout>
		)
	}
}

Studio.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	media: PropTypes.object,
};

Studio.defaultProps = {
	media: {},
};

function mapStateToProps(state, props) {
	return {
		//lightbox: state.lightbox,
		squareView: state.ui.squareView,
		index: state.media.index,
		cover: state.covers.current,
		loading: state.media.loading,
		typeSorting: state.media.sortBy,
		...props,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		openMediumInLightbox: showMedium,
		closeLightbox,
		setCover,
		fetchMedia,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Studio);
