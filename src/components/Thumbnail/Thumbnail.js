import React from 'react';
import overlayWrapper from '../../wrappers/overlayWrapper/overlayWrapper';
import Image from '../Image';


class Thumbnail extends React.Component {

	render() {
		return (
			<div style={{height: '100%', width: '100%', background: 'black'}}>
				<Image className="thumbnail" src={this.props.src} alt="" />
			</div>
		)
	}
}

export default overlayWrapper(Thumbnail);
