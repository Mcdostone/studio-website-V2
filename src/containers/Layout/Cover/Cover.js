import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCover } from '../../../actions/coverActions';
import ProgressiveImg from '../../../components/Progressive-img';
import DashboardIconMenu from '../../../components/shared/DashboardIconMenu';
import config from '../../../configuration';
import './Cover.css';


class Cover extends React.Component {

	componentDidMount() {
		this.props.fetchCover(this.props.name, this.props.className === 'cover');
	}

	getURL() {
		return this.className === 'cover' ? this.props.covers.current : this.props.covers[this.props.name];
	}

	render() {
		const settings = (
			<DashboardIconMenu
				style={{ zIndex: 15, position: 'absolute', right: 100, bottom: 0 }}
			/>
		);
		return (
			<div className={this.props.className}>
				<ProgressiveImg src={this.getURL()} placeholder={config.UI.DEFAULT_COVER}/>
				<div className="cover-content">
					{this.props.children}
					{settings}
				</div>
			</div>
		);
	}
}

Cover.propTypes = {
	title: PropTypes.string,
};

function mapStateToProps(state, props) {
	return {
		covers: state.covers,
		...props,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchCover,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
