import React from 'react';
import PropTypes from 'prop-types';
import StackGrid from 'react-stack-grid';
import EventListener from 'react-event-listener';
import Waypoint from 'react-waypoint';
import './StudioList.css';

class StudioList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			width: '33.33%',
			gutter: 0
		};
		this.handleResize = this.handleResize.bind(this);
		this.handleOnEnter = this.handleOnEnter.bind(this);
	}

	componentDidMount = () => this.handleResize();

	componentDidUpdate = () => this.updateLayout();

	updateLayout = () => {
		if(this.grid)
			this.grid.updateLayout();
	}

	handleOnEnter = () => {
		if(this.props.fetchMoreData)
			this.props.fetchMoreData();
	}

	handleResize = () => {
		const newWidth = document.body.offsetWidth;
		this.setState({
			width: newWidth < 700 ? '33.33%': '25%',
			gutter: newWidth < 700 ? 3 : this.props.gutter
		})
		this.updateLayout();
	}

	render = () =>
		<div className="studio-list">
			<StackGrid
			 	gridRef={grid => this.grid = grid}
				className={this.props.className}
				columnWidth={this.state.width}
				gutterHeight={this.state.gutter}
				gutterWidth={this.state.gutter}
				monitorImagesLoaded={true}
			>
				{this.props.children}
			</StackGrid>
			<EventListener target="window" style={{display: 'none'}} onResize={this.handleResize} />
			<Waypoint onEnter={this.handleOnEnter} />
		</div>

}

StudioList.proptypes = {
	gutter: PropTypes.number,
	squareView: PropTypes.bool,
	className: PropTypes.string
}

StudioList.defaultProps = {
	gutter: 16,
	squareView: true,
}

export default StudioList;
