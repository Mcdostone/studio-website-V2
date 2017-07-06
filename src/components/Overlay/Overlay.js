import React from 'react';
import './Overlay.css';

export default function overlayedComponent(WrappedComponent) {

	return class Overlay extends React.Component {
		render() {
			return (
				<div className="overlay">
					<div className="overlay-content">
						{this.props.children}
					</div>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	}

}
