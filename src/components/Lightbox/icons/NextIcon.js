import React from 'react';
import LightboxIcon from './LightboxIcon';
import Right from 'material-ui/svg-icons/navigation/chevron-right';

class NextIcon extends React.Component {
	render() {
		const styles = {
			right: 10,
			top: '50%',
		};

		return (
			<LightboxIcon style={styles}>
				<Right />
			</LightboxIcon>
		);
	}
}

export default NextIcon;
