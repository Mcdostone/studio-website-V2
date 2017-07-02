import React from 'react';
import PropTypes from 'prop-types';
import DashboardIconMenu from '../../../components/shared/DashboardIconMenu';
import './Cover.css';


class Cover extends React.Component {
	render() {
		const settings = (
			<DashboardIconMenu
				style={{ zIndex: 15, position: 'absolute', right: 100, bottom: 0 }}
			/>
		);

		return (
			<div className="cover">
				<img src="http://lorempicsum.com/futurama/600/600/2" alt="" />
				<div className="cover-content">
					<h2 className="cover-title">{this.props.title}</h2>
					{this.props.children}
					{settings}
				</div>
			</div>
		);
	}
}

Cover.propTypes = {
	title: PropTypes.string,
};

export default Cover;
