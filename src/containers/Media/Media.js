import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux'
import { Cover, Layout } from '../Layout';
import MediaToolbar from './MediaToolbar';
import StudioList from '../../components/List/StudioList';
import Item from '../../components/List/Item';
import Lightbox from '../../components/Lightbox';
import M from './M';
import { addMedia, fetchMedia } from '../../actions/mediaActions';
import { showMedium, closeLightbox } from '../../actions/lightboxActions';
import { fetchCover } from '../../actions/coverActions';
import mock from './mock-media';


class Media extends React.Component {

	constructor(props) {
		super(props);
		this.showMedium = this.showMedium.bind(this);
		this.loadMoreMedia = this.loadMoreMedia.bind(this);
	}

	componentWillUnmount() {
		this.props.closeLightbox();
	}

	componentDidMount() {
		this.props.fetchCover('media');
		this.props.addMedia(mock);
	}

	loadMoreMedia() {
		this.props.fetchMedia(this.props.index);
	}

	showMedium(mediumData) {
		this.props.openMediumInLightbox(mediumData);
	}

	render() {
		const cover = <Cover title="Media" url={this.props.cover} />;

		const container = (
			<div>
				<Lightbox />
				<MediaToolbar />
				<StudioList
					gutter={16}
					monitorImagesLoaded={true}
					appear={{border: '2px solid red'}}
					loading={this.props.loading}
					fetchMoreData={this.loadMoreMedia}
				>
					{this.props.media.map((medium, index) =>
						<Item
							square={this.props.squareView}
							data={{medium, index}}
							key={medium.src}
							onClick={this.showMedium}
						>
							<M medium={medium} />
						</Item>
					)}
				</StudioList>
			</div>
		);
		return (<Layout cover={cover} container={container} />);
	}
}

function mapStateToProps(state) {
	return {
		lightbox: state.lightbox,
		squareView: state.ui.squareView,
		media: state.media.processedMedia,
		index: state.media.index,
		cover: state.cover.media,
		loading: state.media.loading,
		typeSorting: state.media.sortBy,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addMedia,
		openMediumInLightbox: showMedium,
		closeLightbox,
		push,
		fetchCover,
		fetchMedia,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);
