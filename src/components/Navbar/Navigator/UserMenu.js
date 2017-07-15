import React from 'react';
import PropTypes from 'prop-types';
import Anime from 'react-anime';
import Avatar from 'material-ui/Avatar';


export default class UserMenu extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		 return this.props.auth.authentificated !== nextProps.auth.authentificated;
	}

	render() {
		return (
			<div onClick={this.props.handleRequestOpen} className="navbar-link">
				<Anime elasticity={0} scale={[0, 1]} rotate={['-90deg', '0']} delay={500} duration={700} >
					<div>
						<Avatar src={this.props.auth.user.picture}  style={{ marginRight: '5px', backfaceVisibility: 'hidden' }}/>
					</div>
				</Anime>
				<Anime elasticity={0} easing="easeOutExpo" translateX={['50px', '0']} opacity={[0, 1]} delay={600} duration={900} >
					<span id="navigator-username">{this.props.auth.user.name}</span>
				</Anime>
			</div>
		);
	}

}

UserMenu.propTypes = {
	auth: PropTypes.object.isRequired,
	handleRequestOpen: PropTypes.func.isRequired,
}
