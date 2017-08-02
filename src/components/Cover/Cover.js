import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import './Cover.css';


class Cover extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return ((this.props.src === undefined) && (nextProps.src !== undefined)) || (this.props.src !== nextProps.src)
		|| (this.props.title !== nextProps.title);
	}

	render() {
		return (
			<div className={this.props.className}>
				{this.props.src !== undefined &&
				<div>
					<Image className="cover-image" src={this.props.src} alt="" />
					<div className="cover-content">
						{this.props.children}
					</div>
				</div>}
			</div>
		);
	}
}

Cover.propTypes = {
	title: PropTypes.string,
	src: PropTypes.string,
	admin: PropTypes.bool,
};

Cover.defaultProps = {
	title: undefined,
	src: undefined,
	admin: false,
}

export default Cover;
