import React from 'react';
import Thumbnail from '../../components/Thumbnail';
import { itemWrapper } from '../../wrappers';

class T extends React.Component {

	render() {

		return (
			<Thumbnail square src="http://lorempicsum.com/futurama/350/200/1">
				<span className="title">{this.props.type.name}</span>
				<span className="subtitle">{this.props.type.countMedia()}</span>
			</Thumbnail>
		);
	}

}

export default itemWrapper(T);
