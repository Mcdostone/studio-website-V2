import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOne } from '../../actions/fetchActions';


class Sandbox extends React.Component {

	componentDidMount = () => {
		this.props.fetchOne('albums', this.props.match.params.id);
	}

	render() {
		return null;
	}

}

function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchOne,
		}, dispatch);
	}


export default connect(null, mapDispatchToProps)(Sandbox);
