import React from 'react';

class Overlay extends React.Component {
	render() {
		return (
			<div className="item-overlay">
					{this.props.children}
			</div>
		);
	}
}

export default Overlay;
