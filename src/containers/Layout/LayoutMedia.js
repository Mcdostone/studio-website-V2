import React from 'react';
import PropTypes from 'prop-types';
import { SimpleCover } from '../../components/Cover';
import Studio from '../../components/Studio';
import './Layout.css';

class LayoutMedia extends React.Component {

	render() {
		return (
			<div className="Layout-studio">
				<SimpleCover className="cover" title={this.props.title} src={this.props.cover}>
					<h2 className="cover-title">{this.props.title}</h2>
				</SimpleCover>
				<div className="container">
					<Studio media={this.props.media} />
				</div>
			</div>
		);
	}

}

LayoutMedia.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	media: PropTypes.object,
};

export default LayoutMedia;
