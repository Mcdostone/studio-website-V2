import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import './Cover.css';


const imageStyles =  {
	objectFit: 'cover',
	position: 'relative',
	display: 'inline-block',
	height: '100%',
	width: '100%',
	background: 'black',
};

const Cover = (props) => {
	const contentStyles = {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	}

	const overlayStyles = {
		background: props.foregroundColor,
		...contentStyles
	};

	return (
		<div className={props.className}>
			<Image style={imageStyles} src={props.src} />
			<span style={overlayStyles} />
			<div style={contentStyles}>
				{props.children}
			</div>
		</div>
	);
}

Cover.propTypes = {
	src: PropTypes.string,
	className: PropTypes.string,
	foregroundColor: PropTypes.string,
};

Cover.defaultProps = {
	src: null,
	foregroundColor: 'rgba(0, 0, 0, 0.6)',
}

export default Cover;
