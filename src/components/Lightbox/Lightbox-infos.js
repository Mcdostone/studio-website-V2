import React from 'react';
import DashboardIconMenu from '../shared/DashboardIconMenu';
import LikeButton from './LikeButton';

class LightboxInfos extends React.Component {
	render() {
		const adminButton =
		<div className="lightbox-infos-top">
			<DashboardIconMenu />
		</div>

		return (
			<div className="lightbox-infos">
				{adminButton}
				<LikeButton />
			</div>
		)
	}
}

export default LightboxInfos;
