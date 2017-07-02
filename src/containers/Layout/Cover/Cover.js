import React from 'react';
import PropTypes from 'prop-types';
import { spring, Motion } from 'react-motion';
import DashboardIconMenu from '../../../components/shared/DashboardIconMenu';
import defaultCover from '../../../assets/default-cover.jpg';
import './Cover.css';


class Cover extends React.Component {
	render() {
		const settings = (
			<DashboardIconMenu
				style={{ zIndex: 15, position: 'absolute', right: 100, bottom: 0 }}
			/>
		);
		const url = this.props.url ? this.props.url : defaultCover;
		return (
			<div className="cover">
				<img src="http://lorempicsum.com/futurama/627/200/3" alt="" />
				<Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 8, damping: 5})}} >
  				{interpolatingStyle => {
						return <img src={url} alt="" style={interpolatingStyle} />
					}}
				</Motion>
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
