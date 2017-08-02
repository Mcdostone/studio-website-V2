import React from 'react';
import PropTypes from 'prop-types';
import { Cover } from '../../components/Cover';
// import CoverMenu from './CoverMenu';

const AdminCover = (props) =>
	<Cover {...props}>
		{props.children}
	</Cover>

AdminCover.propTypes = {
	itemsMenu: PropTypes.array,
}

export default AdminCover;
