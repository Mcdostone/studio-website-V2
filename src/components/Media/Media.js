import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cover from '../Cover';
import Layout from '../Layout';
import MediaToolbar from './MediaToolbar';
import StudioList from '../List/StudioList';
import Item from '../List/Item';
import M from './M';
import { closeLightbox, showMedium, addMedia } from '../../actions/lightboxActions';
import { SORT_LAST_ADDED,
	SORT_POPULARITY,
	SORT_LIKES } from '../../actions/mediaListActions';

import Lightbox from '../Lightbox';
import mock from './mock-media';

class Media extends React.Component {

	constructor(props) {
		super(props);
		this.props.addMedia(mock);
	}

	componentWillUnmount() {
		this.props.closeLightbox();
	}

	sortMedia() {
		const copy = [...this.props.media];
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
		const media = this.sortMedia();
		console.log(media);

		const container = (
			<div>
				<Lightbox />
				<MediaToolbar />
				<StudioList gutter={5}>
					{media.map(medium =>
						<Item
							square={this.props.squareView}
							data={medium}
							key={medium.src}
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
		media: state.lightbox.media,
		typeSorting: state.mediaList.sortBy,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    showMedium,
		addMedia,
		closeLightbox,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);
