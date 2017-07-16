import React from 'react';
import './overlayWrapper';
import './overlayWrapper.css';


export default function overlayVisibleWrapper(WrappedComponent) {
	return overlayWrapper(WrappedComponent, true);
}
