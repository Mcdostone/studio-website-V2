import React from 'react';
import StackGrid from 'react-stack-grid';
import EventListener from 'react-event-listener';
import Waypoint from 'react-waypoint';
// import Loading from './Loading';
import './StudioList.css';

class StudioList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			width: '33.33%',
		};
		this.handleResize = this.handleResize.bind(this);
		this.handleOnEnter = this.handleOnEnter.bind(this);
	}

	componentDidMount() {
		this.handleResize();
	}

	handleOnEnter() {
		if(this.props.fetchMoreData)
			this.props.fetchMoreData();
	}

	handleResize() {
		const newWidth = document.body.offsetWidth;
		this.setState({width: newWidth < 700 ? '33.33%': '25%'});
	}

	render() {
		return (
			<div className="studio-list">
				<StackGrid
					className={this.props.className}
					columnWidth={this.state.width}
					gutterHeight={this.props.gutter}
					gutterWidth={this.props.gutter}
					monitorImagesLoaded={true}
				>
					{this.props.children}
				</StackGrid>
				<EventListener target="window" style={{display: 'none'}} onResize={this.handleResize} />
				<Waypoint onEnter={this.handleOnEnter} />
				{/*<Loading />*/}
			</div>
		);
	}
}

export default StudioList;
