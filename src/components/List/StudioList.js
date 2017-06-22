import React from 'react';
import StackGrid from 'react-stack-grid';
import EventListener from 'react-event-listener';

import './StudioList.css';

class StudioList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			width: '25%',
		};
		this.handleResize = this.handleResize.bind(this);
	}

	componentWillMount() {
		this.handleResize();
	}
	handleResize() {
		const newWidth = document.body.offsetWidth;
		this.setState({width: newWidth < 700 ? '33.33%': '25%'});
	}

	render() {
		return (
			<StackGrid
				className={this.props.className}
				columnWidth={this.state.width}
				gutterHeight={this.props.gutter}
				monitorImagesLoaded={true}
				gutterWidth={this.props.gutter}
			>
				<EventListener target="window" onResize={this.handleResize} />
				{this.props.children}
      </StackGrid>
		);
	}
}

export default StudioList;
