import React from 'react';
import PropTypes from 'prop-types';


	const Parallax = (props) =>
		<div>
			{props.children}
		</div>


Parallax.propTypes = {
	className: PropTypes.string,
};

export default Parallax;
