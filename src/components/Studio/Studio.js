import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StudioToolbar from './StudioToolbar';
import StudioList from '../List/StudioList';
import Lightbox from '../Lightbox';
import M from './M';
import { getUniquePropertyFromDataset } from 'utils';
import { showMedium, closeLightbox, openLightbox } from '../../actions/lightboxActions';
import { fetchAll } from 'actions/fetchActions';
import Waypoint from 'react-waypoint';


const SORT_LAST_ADDED = 0;
const SORT_POPULARITY = 1;
const SORT_LIKES = 2;
const INCR = 5;

class Studio extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			squareView: true,
			filter: 0,
			index: INCR,
			sorting: 0,
			medium: null
		};
		this.setSquareView = this.setSquareView.bind(this);
		this.setFilter = this.setFilter.bind(this);
		this.setSorting = this.setSorting.bind(this);
		this.getProcessedMedia = this.getProcessedMedia.bind(this);
		this.fetchMore = this.fetchMore.bind(this);
	}

	fetchMore = () => {
		const countMedia = this.props.media.length;
		if(this.state.index < countMedia) {
			if(this.state.index + INCR <= countMedia)
				this.setState({index: this.state.index + INCR})
			else
				this.setState({index: countMedia});
		}
	}

	componentDidMount = () => this.props.fetchAll('tags');

	componentWillUnmount() {
		this.props.closeLightbox();
	}

	getProcessedMedia = (filters) => {
		let media = this.props.media.filter(medium => medium !== undefined);
		const filter = filters[this.state.filter];
		if(filter.toLowerCase() !== 'all' )
			media = media.filter(medium => medium.type.toLowerCase().trim() === filter.toLowerCase().trim());
		switch(this.state.sorting) {
			case SORT_LIKES:
				media = media.sort((a, b) => (b.countLikes() > a.countLikes()) ? 1 : ((a.countLikes() > b.countLikes()) ? -1 : 0));
				break;
			case SORT_LAST_ADDED:
			break;
			case SORT_POPULARITY:;
			break;
			default:
			break;
		}
		return media.splice(0, this.state.index);
	}

	getFilters() {
		return ['all', ...getUniquePropertyFromDataset('type', this.props.media)];
	}

	getSortingTypes() {
		let sort = {}
		sort[SORT_LAST_ADDED] = 'Last added';
		sort[SORT_POPULARITY] = 'Most popular';
		sort[SORT_LIKES] = 'Most liked';
		return sort;
	}

	showMedium(medium) {
		this.setState({medium});
		this.props.openLightbox();
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

	getContainer = () => {
		const filters = this.getFilters();
		const processedMedia = this.getProcessedMedia(filters);
		return (
		<div>
			{this.props.disableToolbar === false &&
				<StudioToolbar
				squareView={this.state.squareView}
				onSetSquareView={this.setSquareView}
				onSetFilter={this.setFilter}
				activeFilter={this.state.filter}
				filters={filters}
				activeSorting={this.state.sorting}
				sortingTypes={this.getSortingTypes()}
				onSetSorting={this.setSorting}/>
			}
			<StudioList
			gutter={16}
			squareView={this.state.squareView}>
				{processedMedia.map(m =>
					<div key={m.id} onClick={() => this.showMedium(m)}>
						<M square={this.state.squareView} medium={m} />
					</div>
				)}
			</StudioList>
			<Waypoint onEnter={this.fetchMore} />
		</div>
		);

	}

	render() {
		return (
			<div style={this.props.style}>
				<Lightbox
				medium={this.state.medium}
				open={this.props.open} />
				{this.getContainer()}
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		open: state.lightbox.openLightbox,
		...ownProps,
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		openMediumInLightbox: showMedium,
		closeLightbox,
		openLightbox,
		fetchAll,
  }, dispatch);
}

Studio.propTypes = {
	media: PropTypes.array.isRequired,
	disableToolbar: PropTypes.bool,
}

Studio.defaultProps = {
	media: [],
	disableToolbar: false,
}

export default connect(mapStateToProps, mapDispatchToProps)(Studio);
