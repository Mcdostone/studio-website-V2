import React from 'react';
import PropTypes from 'prop-types';
import { CoverContent, Cover } from '../../components/Cover';
import './Layout.css';

class Layout extends React.Component {

	render() {
		return (
			<div className="layout-studio">
				<Cover className="cover" src={this.props.cover}>
					<CoverContent data={this.props.title}>
						<h2 className="cover-title">{this.props.title}</h2>
					</CoverContent>
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
