import React from 'react';
import PropTypes from 'prop-types';
import DashboardIconMenu from '../../../components/shared/DashboardIconMenu';
import './Cover.css';
import defaultCover from '../../../assets/default-cover.jpg';

class Cover extends React.Component {

	render() {
		const settings = (
			<DashboardIconMenu
				style={{ zInex: 15, position: 'absolute', right: 100, bottom: 0 }}
			/>
		);
		return (
			<div className={this.props.className}>
				<img className="cover-image" src={this.props.src || defaultCover} alt="" />
				<div className="cover-content">
					{this.props.children}
					{settings}
				</div>
			</div>
		);
	}
}

Cover.propTypes = {
	title: PropTypes.string,
	src: PropTypes.string,
};

export default Cover;
