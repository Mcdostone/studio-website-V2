import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cover from '../Cover';
import Layout from '../Layout';
import MediaToolbar from './MediaToolbar';
import StudioList from '../List/StudioList';
import Item from '../List/Item';
import M from './M';
import { addMedia, fetchMedia } from '../../actions/mediaActions';
import { showMedium, closeLightbox } from '../../actions/lightboxActions';
import { push } from 'react-router-redux'
import Lightbox from '../Lightbox';
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
		this.props.addMedia(mock);
	}

	loadMoreMedia() {
		this.props.fetchMedia(this.props.index);
	}

	showMedium(mediumData) {
		this.props.openMediumInLightbox(mediumData);
	}

	render() {
		const cover = <Cover title="Media" />;

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
					{this.props.mediaList.map((medium, index) =>
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
		mediaList: state.mediaList.processedMedia,
		index: state.mediaList.index,
		loading: state.mediaList.loading,
		typeSorting: state.mediaList.sortBy,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addMedia,
		openMediumInLightbox: showMedium,
		closeLightbox,
		push,
		fetchMedia,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);
