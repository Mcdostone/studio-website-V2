import React from 'react';
import './overlayWrapper.css';


export default function overlayWrapper(WrappedComponent, overlayVisibleByDefault = false) {

	return class Overlay extends React.Component {
		render() {
			return (
				<div className="overlay">
					<div className={`overlay-content ${overlayVisibleByDefault ? 'visible' : ''}`}>
						{this.props.children}
					</div>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	}

}
