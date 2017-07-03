import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCover } from '../../actions/coverActions';
import { fetch } from '../../actions/fetchActions';
import Cover from './Cover';
import './Layout.css';



class Test2 extends React.Component {

	componentDidMount() {
		this.props.fetch(this.props.name);
	}

	render() {

		return (
			<div className="layout-studio">
				<Cover className="cover" src={this.props.cover} name={this.props.name}>
					<h2 className="cover-title">{this.props.name}</h2>
				</Cover>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}

}

function mapStateToProps(state, props) {
	return {
		cover: state.covers.current,
		...props,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchCover,
		fetch,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Test2);
