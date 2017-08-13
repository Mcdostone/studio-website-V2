import React from 'react';
import PropTypes from 'prop-types';
import { CoverContent, Cover } from '../../components/Cover';
import Studio from '../../components/Studio';
import './Layout.css';

class LayoutMedia extends React.Component {

	render() {
		return (
			<div className="Layout-studio">
				<Cover className="cover" src={this.props.cover}>
					<CoverContent>
						<h2 className="cover-title">{this.props.title}</h2>
					</CoverContent>
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
	media: PropTypes.array,
};

LayoutMedia.defaultProps = {
	media: []
}

export default LayoutMedia;
