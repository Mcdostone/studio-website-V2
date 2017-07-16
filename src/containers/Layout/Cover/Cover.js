import React from 'react';
import PropTypes from 'prop-types';
import Anime from 'react-anime';
import DashboardIconMenu from '../../../components/shared/DashboardIconMenu';
import Image from '../../../components/Image'
import './Cover.css';


class Cover extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		const r = ((this.props.src === undefined) && (nextProps.src !== undefined)) || (this.props.src !== nextProps.src)
		|| (this.props.title !== nextProps.title);
		console.log(r);
		return r;
	}

	render() {
		const settings = (
			<DashboardIconMenu
				style={{ zIndex: 1000, position: 'absolute', right: 100, bottom: 0 }}
			/>
		);

		return (
			<div className={this.props.className}>
				{this.props.src !== undefined &&
				<div>
					<Image className="cover-image" src={this.props.src} alt="" />
					<div className="cover-content">
					<Anime
						opacity={[0, 1]}
						translateY={['-0.2rem', '0rem']}
  					scale={[0.97, 1]}
						duration={250}
						direction="forwards"
						easing="easeInOutQuad"
						elasticity={250}>
						{this.props.children}
					</Anime>
					</div>
				</div>}
				{this.props.admin && settings}
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
