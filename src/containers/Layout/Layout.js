import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import { CoverContent, Cover, CoverMenu } from 'components/Cover';
import './Layout.css';

class Layout extends React.Component {

	getMenuCover = () => {
		const items = [
			<MenuItem primaryText="Admin" key="1" onTouchTap={() => this.props.history.push(`/admin${this.props.location.pathname}`)} />
		];
		if(this.props.auth.authentificated && this.props.auth.user.canAdmin()) {
			return <CoverMenu menuItems={items} />
		}
		else {
			return null;
		}
	}

	render = () => {
		return (
			<div className="layout-studio">
				<Cover className="cover" src={this.props.cover}>
					<CoverContent delay={500} data={this.props.title}>
						<h2 className="cover-title">{this.props.title}</h2>
					</CoverContent>
					{this.getMenuCover()}
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

function mapStateToProps(state) {
	return {
		auth: state.auth,
		open: state.lightbox.openLightbox
	}
}

export default connect(mapStateToProps, null)(withRouter(Layout));
