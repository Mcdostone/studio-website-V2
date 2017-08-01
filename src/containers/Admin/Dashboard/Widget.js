import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import pluralize from 'pluralize';
import './Widget.css';


const Widget = (props) =>
	<Link to={`/admin/${props.resource}`} className={`admin-widget widget-${props.resource}`}>
		<Paper className="widget-container" style={{background: 'transparent'}}>
			<div className="widget-icon">{props.children}</div>
			<div className="widget-content">
				<p className="widget-measure">{props.count > 1 ? pluralize(props.resource) : pluralize.singular(props.resource)}</p>
				<p className="widget-value">{props.count}</p>
			</div>
		</Paper>
	</Link>

Widget.propTypes = {
	count: PropTypes.number,
	resource: PropTypes.string.isRequired,
};

Widget.defaultProps = {
	count: 0
};

export default Widget;
