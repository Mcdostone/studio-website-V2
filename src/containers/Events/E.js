import React from 'react';
import Thumbnail from '../../components/Thumbnail';
import { itemWrapper } from '../../wrappers';

class E extends React.Component {

	render() {
		return (
			<Thumbnail square src="http://lorempicsum.com/futurama/350/200/1">
				<span className="title">{this.props.event.name}</span>
				<span className="subtitle">{this.props.event.getDate()}</span>
			</Thumbnail>
		);
	}

}

export default itemWrapper(E);
