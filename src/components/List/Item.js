import React from 'react';
import './Item.css';

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onClick(this.props.data);
	}

	render() {
		const classNames = this.props.square ? 'item square' : 'item';
		return (
			<div className={classNames} onClick={this.handleClick}>
				{this.props.children}
			</div>
		);
	}
}

export default Item;
