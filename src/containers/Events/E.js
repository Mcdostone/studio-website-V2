import React from 'react';
import { Overlay } from '../../components/List';


class E extends React.Component {

	render() {
		return (
			<div className={'item-content'}>
				<img src={this.props.event.cover} alt="" />
				<Overlay>
					<span className="name">{this.props.event.name}</span>
					<span className="date">{this.props.event.date}</span>
				</Overlay>
			</div>
		);
	}
}

export default E;
