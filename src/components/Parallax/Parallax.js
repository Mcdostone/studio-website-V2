import React from 'react';
import PropTypes from 'prop-types';
import Plx from 'react-plx';

const Parallax = (props) =>
	<Plx
	className={props.className}
	parallaxData={[{
		start: '.cover',
		duration: 300,
		properties: [
			{
				startValue: 0,
				endValue: -150,
				property: 'translateY',
			},
		]
	}]}>
		<div>
			{props.children}
		</div>
	</Plx>


Parallax.propTypes = {
	start: PropTypes.any.isRequired
};

export default Parallax;
