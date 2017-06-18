import React from 'react';
import cameraIso from '../../assets/camera-iso.svg';
import cameraExposure from '../../assets/camera-exposure.svg';
import cameraTimer from '../../assets/camera-timer.svg';
import cameraLens from '../../assets/camera-lens.svg';
import camera from '../../assets/camera.svg';

class ExifInfos extends React.Component {

	render() {
		return <div className="lightbox-infos-exif">
			<div className="exif-cell exif-icon">
				<img alt="" src={camera}></img>
			</div>
			<span className="exif-cell">Canon 6D</span>

			<div className="exif-cell exif-icon">
				<img alt="" src={cameraLens}></img>
			</div>
			<span className="exif-cell">EF 50mm f/1.8 II</span>

			<div className="exif-cell exif-icon">
				<img alt="" src={cameraExposure}></img>
			</div>
			<span className="exif-cell">f/4.9</span>

			<div className="exif-cell exif-icon">
				<img alt="" src={cameraTimer}></img>
			</div>
			<span className="exif-cell">1/200</span>

			<div className="exif-cell exif-icon">
				<img alt="" src={cameraIso}></img>
			</div>
			<span className="exif-cell">400</span>
		</div>
	};

}

export default ExifInfos;
