import React from 'react';
import './Item.css';

class Item extends React.Component {

	render() {
		const classNames = this.props.square ? 'item square' : 'item';
		return (
			<div className={classNames}>{this.props.children}</div>
		);
	}
}

export default Item;
