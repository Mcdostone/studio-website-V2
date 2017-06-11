import React from 'react';
import LightboxIcon from './LightboxIcon';
import Left from 'material-ui/svg-icons/navigation/chevron-left';

class PreviousIcon extends React.Component {
	render() {
		const styles = {
			left: 10,
			top: '50%',
		};

		return (
			<LightboxIcon
				style={styles}
			>
				<Left />
			</LightboxIcon>
		);
	}
}

export default PreviousIcon;
