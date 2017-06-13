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
	sortBy } from '../../../actions/mediaListActions';

class MediaToolbar extends React.Component {

	constructor(props) {
		super(props);
		this.handleOnSortByChange = this.handleOnSortByChange.bind(this);
	}

	handleOnSortByChange(event, index, value) {
		this.props.sortBy(value);
	}

	render() {
		return (
			<Toolbar style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}>

				<ToolbarGroup>
					<DropDownMenu
						labelStyle={{ color: grey500, paddingLeft: 0 }}
						onChange={this.handleOnSortByChange}
						value={this.props.typeSorting}
					>
						<MenuItem value={SORT_LAST_ADDED} primaryText="Last added" />
						<MenuItem value={SORT_POPULARITY} primaryText="Most popular" />
						<MenuItem value={SORT_LIKES} primaryText="Most liked" />
					</DropDownMenu>

					<DropDownMenu
						value={1}
						labelStyle={{ color: grey500 }}
					>
						<MenuItem primaryText="all" />
						<MenuItem value={1} primaryText="Photo" />
						<MenuItem value={2} primaryText="Video" />
						<MenuItem value={3} primaryText="Poster" />
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
		typeSorting: state.mediaList.sortBy
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		activeSquareView: squareView,
		activeMasonryView: masonryView,
		sortBy
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaToolbar);
