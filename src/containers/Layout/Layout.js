import React from 'react';
import PropTypes from 'prop-types';
import { CoverContent, SimpleCover } from '../../components/Cover';
import './Layout.css';

class Layout extends React.Component {

	render() {
		return (
			<div className="layout-studio">
				<SimpleCover className="cover" src={this.props.cover}>
					<CoverContent title={this.props.title} />
				</SimpleCover>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}

}

Layout.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
};

export default Layout;
