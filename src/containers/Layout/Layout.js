import React from 'react';
import PropTypes from 'prop-types';
import Cover from './Cover';
import './Layout.css';


class Layout extends React.Component {

	render() {
		return (
			<div className="layout-studio">
				<Cover className="cover" title={this.props.title} src={this.props.cover}>
					<h2 className="cover-title">{this.props.title}</h2>
				</Cover>
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
