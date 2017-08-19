import React from 'react';
import PropTypes from 'prop-types';
import Studio from 'components/Studio';
import Layout from './Layout';
import './Layout.css';

class LayoutMedia extends React.Component {

	render() {
		return (
			<Layout {...this.props} >
				<Studio style={{marginTop: 16}} media={this.props.media} />
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
