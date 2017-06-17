import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cover from '../Cover';
import Layout from '../Layout';
import MediaToolbar from './MediaToolbar';
import StudioList from '../List/StudioList';
import Item from '../List/Item';
import M from './M';
import { addMedia } from '../../actions/mediaListActions';
import { showMedium } from '../../actions/lightboxActions';

import { SORT_LAST_ADDED,
	SORT_POPULARITY,
	SORT_LIKES } from '../../actions/mediaListActions';

import Lightbox from '../Lightbox';
import mock from './mock-media';

class Media extends React.Component {

	constructor(props) {
		super(props);
		this.props.addMedia(mock);
		this.getSortedAndFilteredMedia = this.getSortedAndFilteredMedia.bind(this);
		this.showMedium = this.showMedium.bind(this);
	}

	componentWillUnmount() {
		this.props.closeLightbox();
	}

	showMedium(mediumData) {
		this.props.openMediumInLightbox(mediumData);
	}

	getSortedAndFilteredMedia() {
		let copy = [...this.props.mediaList.media];
		const filter = this.props.mediaList.filters[this.props.mediaList.filterBy];
		if(filter !== 'all') {
			copy = this.props.mediaList.media.filter(medium => medium.type.toLowerCase().trim() === filter.toLowerCase().trim());
		}

		switch(this.props.typeSorting) {
			case SORT_LIKES:
				return copy.sort((a, b) => (b.likes > a.likes) ? 1 : ((a.likes > b.likes) ? -1 : 0));
			case SORT_LAST_ADDED:
				return copy;
			case SORT_POPULARITY:;
				return copy;
			default:
				return copy;
		}
	}

	render() {
		const cover = <Cover title="Media" />;
		let media = this.getSortedAndFilteredMedia();

		const container = (
			<div>
				<Lightbox />
				<MediaToolbar />
				<StudioList gutter={5}>
					{media.map((medium, index) =>
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
		mediaList: state.mediaList,
		typeSorting: state.mediaList.sortBy,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addMedia,
		openMediumInLightbox: showMedium
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);
