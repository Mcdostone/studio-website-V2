import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { grey500 } from 'material-ui/styles/colors';
import IconViewModule from './icons/IconViewModule';
import IconViewQuilt from './icons/IconViewQuilt';
import { capitalizeFirstLetter } from '../../../utils';

import './StudioToolbar.css';


class StudioToolbar extends React.Component {

	constructor(props) {
		super(props);
		this.handleOnSortByChange = this.handleOnSortByChange.bind(this);
		this.handleOnFilterByChange = this.handleOnFilterByChange.bind(this);
	}

	handleOnSortByChange(event, index, value) {
		this.props.onSetSorting(index);
	}

	handleOnFilterByChange(event, index, value) {
		this.props.onSetFilter(index);
	}

	render() {
		return (
			<Toolbar className="media-toolbar" style={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}>

				<ToolbarGroup className="dropdown">
					<DropDownMenu
						labelStyle={{ color: grey500 }}
						onChange={this.handleOnSortByChange}
						value={this.props.activeSorting}
					>
						{Object.keys(this.props.sortingTypes).map((key, index) =>
							<MenuItem value={index} key={this.props.sortingTypes[key]}
							primaryText={capitalizeFirstLetter(this.props.sortingTypes[key])} />
						)}
					</DropDownMenu>

					<DropDownMenu
						value={this.props.activeFilter}
						onChange={this.handleOnFilterByChange}
						labelStyle={{ color: grey500 }}
					>
						{this.props.filters.map((filter, index) =>
							<MenuItem value={index} key={filter} primaryText={capitalizeFirstLetter(filter)} />
						)}
					</DropDownMenu>
				</ToolbarGroup>

				<ToolbarGroup className="view-mode">
					<IconViewModule active={this.props.squareView} onTouchTap={() => this.props.onSetSquareView(true)} />
					<IconViewQuilt
						active={!this.props.squareView}
						style={{marginRight: -12}}
						onTouchTap={() => this.props.onSetSquareView(false)}
					/>
				</ToolbarGroup>

			</Toolbar>
		);
	}
}

StudioToolbar.propTypes = {
	onSetSquareView: PropTypes.func.isRequired,
	filters: PropTypes.array,
	activeFilter: PropTypes.number.isRequired,
	onSetFilter: PropTypes.func.isRequired,
	sortingTypes: PropTypes.object,
	activeSorting: PropTypes.number.isRequired,
	onSetSorting: PropTypes.func.isRequired,
}

StudioToolbar.defaultProps = {
	filters: []
}

export default StudioToolbar;
