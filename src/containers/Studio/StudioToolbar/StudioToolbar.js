import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { squareView, masonryView } from '../../../actions/uiActions';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { grey500 } from 'material-ui/styles/colors';
import IconViewModule from './icons/IconViewModule';
import IconViewQuilt from './icons/IconViewQuilt';
import { SORT_LAST_ADDED,
	SORT_POPULARITY,
	SORT_LIKES,
	sortBy,
	filterBy } from '../../../actions/mediaActions';

import './MediaToolbar.css';


class StudioToolbar extends React.Component {

	constructor(props) {
		super(props);
		this.handleOnSortByChange = this.handleOnSortByChange.bind(this);
		this.handleOnFilterByChange = this.handleOnFilterByChange.bind(this);
	}

	handleOnSortByChange(event, index, value) {
		this.props.sortBy(value);
	}

	handleOnFilterByChange(event, index, value) {
		this.props.filterBy(value);
	}

	render() {
		return (
			<Toolbar className="media-toolbar" style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}>

				<ToolbarGroup className="dropdown">
					<DropDownMenu
						labelStyle={{ color: grey500, paddingLeft: 0 }}
						onChange={this.handleOnSortByChange}
						value={this.props.typeSorting}
					>
						<MenuItem  value={SORT_LAST_ADDED} primaryText="Last added" />
						<MenuItem value={SORT_POPULARITY} primaryText="Most popular" />
						<MenuItem value={SORT_LIKES} primaryText="Most liked" />
					</DropDownMenu>

					<DropDownMenu
						value={this.props.filter}
						onChange={this.handleOnFilterByChange}
						labelStyle={{ color: grey500 }}
					>
						{this.props.filters.map((filter, index) =>
							<MenuItem value={index} key={filter} primaryText={filter} />
						)}
					</DropDownMenu>
				</ToolbarGroup>

				<ToolbarGroup className="view-mode">
					<IconViewModule active={this.props.squareView} onTouchTap={this.props.activeSquareView} />
					<IconViewQuilt
						active={!this.props.squareView}
						style={{marginRight: -12}}
						onTouchTap={this.props.activeMasonryView}
					/>
				</ToolbarGroup>

			</Toolbar>
		);
	}
}

function mapStateToProps(state) {
	return {
		squareView: state.ui.squareView,
		typeSorting: state.media.sortBy,
		filter: state.media.filterBy,
		filters: state.media.filters,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		activeSquareView: squareView,
		activeMasonryView: masonryView,
		sortBy,
		filterBy,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StudioToolbar);
