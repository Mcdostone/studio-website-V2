import React from 'react';
import { Cover } from '../../components/Cover';
import AdminOptionsMenu from './AdminOptionsMenu';


class AdminCover extends React.Component {

	render() {
		return (
			<Cover {...this.props}>
				<div>
					{this.props.children}
					{this.props.id && <AdminOptionsMenu {...this.props} />}
				</div>
			</Cover>
		);
	}
}

AdminCover.propTypes = Cover.propTypes;
AdminCover.defaultProps = Cover.defaultProps;

export default AdminCover;
