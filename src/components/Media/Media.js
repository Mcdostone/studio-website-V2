import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cover from '../Cover';
import Layout from '../Layout';
import MediaToolbar from './MediaToolbar';
import StudioList from '../List/StudioList';
import Item from '../List/Item';
import M from './M';
import { showMedium, addMedia } from '../../actions/lightboxActions';
import Lightbox from '../Lightbox';
import mock from './mock-media';

class Media extends React.Component {

	constructor(props) {
		super(props);
		this.props.addMedia(mock);
	}

	render() {
		const cover = <Cover title="Media" />;
		const media = this.props.media;
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
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    showMedium,
		addMedia,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);
