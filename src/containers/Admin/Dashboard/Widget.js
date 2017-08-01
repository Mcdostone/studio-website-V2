import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import pluralize from 'pluralize';
import './Widget.css';

class Widget extends React.Component {

	componentWillReceiveProps(nextProps) {
		return this.props.count !== nextProps.count;
	}

	render() {
		return (
		<Link to={`/admin/${this.props.resource}`} className={`admin-widget widget-${this.props.resource}`}>
			<Paper className="widget-container" style={{background: 'transparent'}}>
				<div className="widget-icon">{this.props.children}</div>
				<div className="widget-content">
					<p className="widget-measure">{this.props.count > 1 ? pluralize(this.props.resource) : pluralize.singular(this.props.resource)}</p>
					<input disabled type="text" className="widget-value" value={this.props.count} />
				</div>
			</Paper>
		</Link>
		);
	}

}
/*
<Anime
	value={this.props.count}
	round={1}
	easing="easeInOutBack">
</Anime>

*/
Widget.propTypes = {
	count: PropTypes.number,
	resource: PropTypes.string.isRequired,
};

Widget.defaultProps = {
	count: 0,
};

export default Widget;
