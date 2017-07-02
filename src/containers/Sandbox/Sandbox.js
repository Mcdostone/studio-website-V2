import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { fetchMedia } from '../../actions/mediaActions';
import { connect } from 'react-redux';
import { StudioList, Item } from '../../components/List';
import M from '../Media/M';
import { Cover, Layout } from '../Layout';


class Sandbox extends React.Component {

	render() {
		const cover = (
			<Cover title="Sandbox" />
		);

		const container = (
			<div>

				<RaisedButton
				label="hit firebase DB"
				onTouchTap={this.props.fetchMedia} />

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

		return (
			<Layout cover={cover} container={container} />
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
		mediaList: state.media.processedMedia,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchMedia,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sandbox);

