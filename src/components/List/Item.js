import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMedium } from '../../actions/lightboxActions';
import './Item.css';

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.showMedium = this.showMedium.bind(this);
	}

	showMedium(event) {
		this.props.showMedium(this.props.data);
	}

	render() {
		const classNames = this.props.square ? 'item square' : 'item';
		return (
			<div className={classNames} onClick={this.showMedium}>{this.props.children}</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    showMedium,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Item);
