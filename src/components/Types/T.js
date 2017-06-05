import React from 'react';
import Overlay from '../List/Overlay';

class T extends React.Component {

	render() {
		return (
			<div className="item-content">
				<img src={this.props.type.cover} alt="" />
				<Overlay>
					<span className="name">{this.props.type.name}</span>
				</Overlay>
			</div>
		);
	}
}

export default T;
