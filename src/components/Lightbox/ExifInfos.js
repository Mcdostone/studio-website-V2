import React from 'react';
import PropTypes from 'prop-types';
import cameraIso from '../../assets/camera-iso.svg';
import cameraExposure from '../../assets/camera-exposure.svg';
import cameraTimer from '../../assets/camera-timer.svg';
import cameraLens from '../../assets/camera-lens.svg';
import camera from '../../assets/camera.svg';

class ExifInfos extends React.Component {

	getContainer() {
		return (
			<div className="lightbox-infos-exif">
				<div className="exif-cell exif-icon">
					<img alt="" src={camera}></img>
				</div>
				<span className="exif-cell">{this.props.exif.camera}</span>

				<div className="exif-cell exif-icon">
					<img alt="" src={cameraLens}></img>
				</div>
				<span className="exif-cell">{this.props.exif.lens}</span>

				<div className="exif-cell exif-icon">
					<img alt="" src={cameraExposure}></img>
				</div>
				<span className="exif-cell">{this.props.exif.aperture}</span>

				<div className="exif-cell exif-icon">
					<img alt="" src={cameraTimer}></img>
				</div>
				<span className="exif-cell">{this.props.exif.exposure}</span>

				<div className="exif-cell exif-icon">
					<img alt="" src={cameraIso}></img>
				</div>
				<span className="exif-cell">{this.props.exif.iso}</span>
			</div>
		);
	}

	render() {
		if(this.props.exif)
			return this.props.exif.containsMetadata() ? this.getContainer() : null
		else
			return null;
	}

}

ExifInfos.propTypes = {
	exif : PropTypes.object
}

export default ExifInfos;
