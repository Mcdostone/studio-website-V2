import React from 'react';
import PropTypes from 'prop-types';
import { CoverTitle, SimpleCover } from '../../components/Cover';
import './Layout.css';

class Layout extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.cover !== nextProps.cover || this.props.title !== nextProps.title
		|| this.props.children !== nextProps.children;
	}

	render() {
		return (
			<div className="layout-studio">
				<SimpleCover className="cover" src={this.props.cover}>
					<CoverTitle title={this.props.title} />
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
