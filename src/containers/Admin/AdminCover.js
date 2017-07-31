import React from 'react';
import { Cover } from '../../components/Cover';
import AdminOptionsMenu from './AdminOptionsMenu';


const AdminCover = (props) => {
	return <Cover {...props}>
		<div>
			{props.children}
			{props.data && !props.creation && <AdminOptionsMenu {...props} />}
		</div>
	</Cover>
};

AdminCover.propTypes = Cover.propTypes;
AdminCover.defaultProps = Cover.defaultProps;

export default AdminCover;
