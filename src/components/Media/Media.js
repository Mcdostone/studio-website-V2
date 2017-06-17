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
import Lightbox from '../Lightbox';
import mock from './mock-media';

class Media extends React.Component {

	constructor(props) {
		super(props);
		this.props.addMedia(mock);
		this.showMedium = this.showMedium.bind(this);
	}

	componentWillUnmount() {
		this.props.closeLightbox();
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
				<StudioList gutter={5}>
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
