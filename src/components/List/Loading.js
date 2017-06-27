import React from 'react';
import { Motion, spring } from 'react-motion';
import CircularProgress from 'material-ui/CircularProgress';


class Loading extends React.Component {

	render() {
		return <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 52, damping: 17})}}>
			{interpolatingStyle => <div className="loading" style={interpolatingStyle}><CircularProgress /></div>}
		</Motion>
	}
}

export default Loading;
