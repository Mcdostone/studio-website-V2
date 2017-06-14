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
	filterBy } from '../../../actions/mediaListActions';

class MediaToolbar extends React.Component {

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
		const style = {
			textTransform: 'capitalize',
		};

		return (
			<Toolbar style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}>

				<ToolbarGroup>
					<DropDownMenu
						labelStyle={{ color: grey500, paddingLeft: 0 }}
						onChange={this.handleOnSortByChange}
						value={this.props.typeSorting}
						menuItemStyle={style}
					>
						<MenuItem  value={SORT_LAST_ADDED} primaryText="Last added" />
						<MenuItem value={SORT_POPULARITY} primaryText="Most popular" />
						<MenuItem value={SORT_LIKES} primaryText="Most liked" />
					</DropDownMenu>

					<DropDownMenu
						value={this.props.filter}
						onChange={this.handleOnFilterByChange}
						labelStyle={{ color: grey500 }}
						menuItemStyle={style}
					>
						{this.props.filters.map((filter, index) =>
							<MenuItem value={index} key={filter} primaryText={filter} />
						)}
					</DropDownMenu>
				</ToolbarGroup>

				<ToolbarGroup>
					<IconViewModule active={this.props.squareView} onTouchTap={this.props.activeSquareView} />
					<IconViewQuilt
						active={!this.props.squareView}
						onTouchTap={this.props.activeMasonryView}
						style={{ padding: 0, margin: 0, width: 'auto' }}
					/>
				</ToolbarGroup>

			</Toolbar>
		);
	}
}

function mapStateToProps(state) {
	return {
		squareView: state.ui.squareView,
		typeSorting: state.mediaList.sortBy,
		filter: state.mediaList.filterBy,
		filters: state.mediaList.filters,
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

export default connect(mapStateToProps, mapDispatchToProps)(MediaToolbar);
