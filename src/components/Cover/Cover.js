import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay';
import Image from '../Image';
import './Cover.css';

const imageStyles =  {
	objectFit: 'cover',
	position: 'relative',
	float: 'left',
	display: 'inline-block',
	height: '100%',
	width: '100%',
	background: 'black',
};

const contentStyles = {
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const Cover = (props) => {
	return (
		<div className={props.className}>
			<Image style={imageStyles} src={props.src} />
			{!props.hideOverlay && <Overlay />}
			<div style={contentStyles}>
				{props.children}
			</div>
		</div>
	);
}

Cover.propTypes = {
	src: PropTypes.string,
	hideOverlay: PropTypes.bool,
	className: PropTypes.string,
};

Cover.defaultProps = {
	src: null,
	hideOverlay: false,
}

export default Cover;
