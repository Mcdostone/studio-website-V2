import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import './Widget.css';

const Widget = (props) =>
	<Link to={`/admin/${props.resource}`} className={`admin-widget widget-${props.resource}`}>
		<Paper className="widget-container" style={{background: 'transparent'}}>
			<div className="widget-icon">{props.children}</div>
			<div className="widget-content">
				<p className="widget-measure">{props.resource}</p>
				<p className="widget-value">{props.resource.length}</p>
			</div>
		</Paper>
	</Link>


export default Widget;
