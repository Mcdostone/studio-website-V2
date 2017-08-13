import React from 'react';
import PropTypes from 'prop-types';
import Studio from 'components/Studio';
import Layout from './Layout';
import './Layout.css';

class LayoutMedia extends React.Component {

	render() {
		return (
			<Layout {...this.props} >
				<div className="container">
					<Studio media={this.props.media} />
				</div>
			</Layout>
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
