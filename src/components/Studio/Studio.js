import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MediaToolbar from './StudioToolbar';
import StudioList from '../List/StudioList';
import Lightbox from '../Lightbox';
import M from './M';
import { fetchMedia } from '../../actions/mediaActions';
import { showMedium, closeLightbox } from '../../actions/lightboxActions';


const SORT_LAST_ADDED = 0;
const SORT_POPULARITY = 1;
const SORT_LIKES = 2;

class Studio extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			squareView: true,
			filter: 0,
			sorting: 0,
		};
		this.setSquareView = this.setSquareView.bind(this);
		this.setFilter = this.setFilter.bind(this);
		this.setSorting = this.setSorting.bind(this);
		this.getProcessedMedia = this.getProcessedMedia.bind(this);
	}

	componentWillUnmount() {
		this.props.closeLightbox();
	}

	getProcessedMedia(filters) {
		let arrayMedia = Object.values(this.props.media);
		const filter = filters[this.state.filter];
		if(filter.toLowerCase() !== 'all' ) {
			arrayMedia = arrayMedia.filter(medium => medium.type.toLowerCase().trim() === filter.toLowerCase().trim());
		}
		switch(this.state.sorting) {
			case SORT_LIKES:
				return arrayMedia.sort((a, b) => (b.countLikes() > a.countLikes()) ? 1 : ((a.countLikes() > b.countLikes()) ? -1 : 0));
			case SORT_LAST_ADDED:
			case SORT_POPULARITY:;
			return arrayMedia;
			default:
			return arrayMedia;
		}
	}

	getFilters() {
		// return ['all', ...getUniquePropertyFromDataset('type', this.props.media)];
		return ['all'];
	}

	getSortingTypes() {
		let sort = {}
		sort[SORT_LAST_ADDED] = 'Last added';
		sort[SORT_POPULARITY] = 'Most popular';
		sort[SORT_LIKES] = 'Most liked';
		return sort;
	}

	showMedium(mediumData) {
		this.props.openMediumInLightbox(mediumData);
	}

	setSquareView(active) {
		this.setState({squareView: active});
	}

	setFilter(newFilterIndex) {
		this.setState({filter: newFilterIndex});
	}

	setSorting(newSortingIndex) {
		this.setState({sorting: newSortingIndex});
	}

	render() {
		const filters = this.getFilters();
		const processedMedia = this.getProcessedMedia(filters);
		return (
			<div>
				<Lightbox />
				<MediaToolbar
					squareView={this.state.squareView}
					onSetSquareView={this.setSquareView}
					onSetFilter={this.setFilter}
					activeFilter={this.state.filter}
					filters={filters}
					activeSorting={this.state.sorting}
					sortingTypes={this.getSortingTypes()}
					onSetSorting={this.setSorting}/>
				<StudioList gutter={16}>
					{processedMedia.map(m =>
						<div key={m.id} onClick={() => this.showMedium(m)}>
							<M square={this.state.squareView} medium={m} />
						</div>
					)}
				</StudioList>
			</div>
		)
	}
}

Studio.propTypes = {
	media: PropTypes.object,
};

Studio.defaultProps = {
	media: {},
};

function mapStateToProps(state, props) {
	return {
		...props,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		openMediumInLightbox: showMedium,
		closeLightbox,
		fetchMedia,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Studio);
