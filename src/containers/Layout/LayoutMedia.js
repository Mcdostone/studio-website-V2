import React from 'react';
import PropTypes from 'prop-types';
import Cover from './Cover';
import Studio from '../../components/Studio';
import './Layout.css';

class LayoutMedia extends React.Component {

	render() {
		return (
			<div className="Layout-studio">
				<Cover className="cover" src={this.props.cover}>
					<h2 className="cover-title">{this.props.title}</h2>
				</Cover>
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
