import React from 'react';
import Youtube from 'react-youtube';
import { insertRandomGif, randomColor, addImage } from './animations';
import $ from 'jquery';
import loading1 from '../../assets/countdown/loading1.png';
import loading2 from '../../assets/countdown/loading2.png';
import loading5 from '../../assets/countdown/loading5.png';
import loading6 from '../../assets/countdown/loading6.png';
import loading7 from '../../assets/countdown/loading7.gif';
import loading8 from '../../assets/countdown/loading8.gif';
import loading9 from '../../assets/countdown/loading9.jpg';
import loading11 from '../../assets/countdown/loading11.gif';
import loading12 from '../../assets/countdown/loading12.png';
import loading13 from '../../assets/countdown/loading13.gif';
import loading14 from '../../assets/countdown/loading14.gif';
import loading16 from '../../assets/countdown/loading16.gif';

import loading17 from '../../assets/countdown/loading17.gif';
import loading18 from '../../assets/countdown/loading18.png';
import loading19 from '../../assets/countdown/loading19.jpg';
import loading20 from '../../assets/countdown/loading20.png';
import loading22 from '../../assets/countdown/loading22.gif';
import illuminabite from '../../assets/countdown/illuminabite.gif';
import nothing1 from '../../assets/countdown/nothing1.gif';
import nothing2 from '../../assets/countdown/nothing2.gif';
import nothing5 from '../../assets/countdown/nothing5.gif';
import patou from '../../assets/countdown/patou.jpg'
import './StudioCountdown.css';
require('jquery-countdown');

class StudioCountdown extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
		this.onReady = this.onReady.bind(this);
		this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
		this.eliot = this.eliot.bind(this);
	}

	onReady(event) {
		event.target.playVideo();
	}

	componentDidMount() {
		$('#cuming').countdown('2017/07/07 12:0:00', function(event) {
			$(this).html(event.strftime('%-D %!D:jour,jours; %H:%M:%S') + "<br><br>  Studio is coming !");
		});
	}

	render() {
		const opts = {
			playerVars: {
        autoplay: 1,
				showinfo: 0,
				controls: 0,
				rel : 0
      },
		};


		return (
			<div className="countdown">
				<Youtube
					className="countdown-video"
					videoId={this.props.videoId}
					opts={opts}
					onReady={this.onReady}
					onStateChange={this.onPlayerStateChange}
				/>
				<div className="countdown-overlay">
					<div id="cuming"></div>
				</div>
			</div>
		);
	}

	onPlayerStateChange(event) {
		const el = document.getElementsByClassName('countdown-overlay')[0];
		if (event.data === 1 && !this.state.done) {

			setTimeout(() => addImage(loading1, ['rotate-lol']), 3600)


			setTimeout(() => document.getElementById('cuming').classList.add('techno'), 9650);
  	  setTimeout(() => randomColor(el), 21400);
			setTimeout(() => addImage(illuminabite), 5200);
			setTimeout(() => addImage(loading2, ['animated', 'rubberBand', 'infinite']), 6800);
    	setTimeout(() => this.eliot(), 9650);
			setTimeout(() => addImage("https://s3.amazonaws.com/image.blingee.com/images19/content/output/000/000/000/81f/868742399_1251338.gif", ['animated', 'slideOutDOwn', 'infinite']), 12000);

			setTimeout(() => addImage(loading22), 15000);
			setTimeout(() => addImage("https://media.giphy.com/media/bKWSxiGpx2BRS/giphy.gif",), 18500);
			setTimeout(insertRandomGif, 21400)
			setTimeout(() => document.getElementById('eliot').classList.add('techno'), 21800);
			setTimeout(() => addImage(patou, ['animated', 'lightSpeedIn', 'infinite']), 23800);
    	setTimeout(() => addImage("https://media.giphy.com/media/uudNRE0I3Ehyg/giphy.gif", ['techno']), 26800);
    	setTimeout(() => addImage(loading18, ['rotate-lol']), 28000);
			setTimeout(() => addImage(loading5, ['techno']), 29000);
    	setTimeout(() => addImage("/images/il_y_une_image_qui_charge_pas.png", ['animated', 'zoomInDown', 'infinite']), 30000);
    	setTimeout(() => addImage(loading6, ['animated', 'flipInY', 'infinite']), 31000);
    	setTimeout(() => addImage("/images/default-profile-picture.png", ['techno']), 32000);
    	setTimeout(() => addImage(loading7), 35000);
    	setTimeout(() => addImage(loading8, ['techno']), 35000);
    	setTimeout(() => addImage(loading9, ['animated', 'zoomOutLeft', 'infinite']), 38000);
    	setTimeout(() => addImage(loading11), 45000);
    	setTimeout(() => addImage(loading12, ['animated', 'flipInX', 'infinite']), 48000);
    	setTimeout(() => addImage(loading13, ['techno']), 51000);
    	setTimeout(() => addImage(nothing2, ['techno']), 53000);
    	setTimeout(() => addImage(nothing1, ['techno']), 58000);
    	setTimeout(() => addImage(loading14, ['techno']), 60000);
    	setTimeout(() => addImage(loading16), 63000);

    	setTimeout(() => addImage("https://media.giphy.com/media/13jtwqhcZM6Xi8/giphy.gif",), 67500);
    	setTimeout(() => addImage("https://media.giphy.com/media/l0O9zBvk5nZ71Molq/giphy.gif",), 85000);
    	setTimeout(() => addImage(loading17, ['techno']), 72000);
    	setTimeout(() => addImage(loading19, ['rotate-lol']), 92000);
    	setTimeout(() => addImage(loading20, ['animated', 'flipInX', 'infinite']), 95000);
    	setTimeout(() => addImage("https://media.giphy.com/media/p04CSILL5ZUfS/giphy.gif ", ['techno']), 98000);
    	setTimeout(() => addImage("img.pr0gramm.com/2017/02/12/1671e7f6f8e2bd1d.gif", ['techno']), 110000);
    	setTimeout(() => addImage("https://media.giphy.com/media/jKVJKhpPq9og8/giphy.gif",), 130000);

  	}
	}

	eliot() {
  	const img = document.createElement('img');
  	img.src = nothing5;
  	img.classList.add('countdown-image');
  	img.id = 'eliot';
  	let top = window.innerHeight/2 - 400;
  	let left = window.innerWidth/2 - 200;
  	let rotate = Math.floor(Math.random() * 45) + -45;
  	img.style.top = top + 'px';
  	img.style.left =  left + 'px';
  	img.style.width = "400px";
  	img.style.transform =  'rotate(' + rotate +'deg)';
  	let parent = document.getElementsByClassName('countdown')[0];
  	parent.insertBefore(img, document.getElementsByClassName('countdown-overlay')[0]);
	}

}

export default StudioCountdown;

/*setTimeout(() => document.getElementById('eliot').classList.add('techno'), 21800)


  	  setTimeout(() => add_image("/images/loading1.png", ['rotate-lol']), 3600)
  	  setTimeout(() => add_image("/images/illuminabite.gif"), 5200)
  	  setTimeout(() => add_image("/images/loading3.png", ['animated', 'rubberBand', 'infinite']), 6800)
  	  setTimeout(() => eliot(), 9650)
			setTimeout(() => add_image("https://s3.amazonaws.com/image.blingee.com/images19/content/output/000/000/000/81f/868742399_1251338.gif", ['animated', 'slideOutDOwn', 'infinite']), 12000)

  	  setTimeout(() => add_image("/images/loading22.gif",), 15000)
  	  setTimeout(() => add_image("https://media.giphy.com/media/bKWSxiGpx2BRS/source.gif",), 18500)

  	  setTimeout(() => add_image("/images/patou.jpg", ['animated', 'lightSpeedIn', 'infinite']), 23800)
  	  setTimeout(() => add_image("https://media.giphy.com/media/uudNRE0I3Ehyg/giphy.gif", ['techno']), 26800)
  	  setTimeout(() => add_image("/images/loading18.png", ['rotate-lol']), 28000)

  	  setTimeout(() => add_image("/images/loading5.png", ['techno']), 29000)
  	  setTimeout(() => add_image("/images/il_y_une_image_qui_charge_pas.png", ['animated', 'zoomInDown', 'infinite']), 30000)
  	  setTimeout(() => add_image("/images/loading6.png", ['animated', 'flipInY', 'infinite']), 31000)
  	  setTimeout(() => add_image("/images/default-profile-picture.png", ['techno']), 32000)
  	  setTimeout(() => add_image("/images/loading7.gif"), 35000)
  	  setTimeout(() => add_image("/images/loading8.gif", ['techno']), 35000)
  	  setTimeout(() => add_image("/images/loading9.jpg", ['animated', 'zoomOutLeft', 'infinite']), 38000)
  	  setTimeout(() => add_image("/images/loading10.jpg", ['animated', 'fadeInLeft', 'infinite']), 40000)
  	  setTimeout(() => add_image("/images/loading11.gif"), 45000)
  	  setTimeout(() => add_image("/images/loading12.png", ['animated', 'flipInX', 'infinite']), 48000)
  	  setTimeout(() => add_image("/images/loading13.gif", ['techno']), 51000)
  	  setTimeout(() => add_image("/images/nothing2.gif", ['techno']), 53000)
  	  setTimeout(() => add_image("/images/nothing1.gif", ['techno']), 58000)
  	  setTimeout(() => add_image("/images/loading14.gif", ['techno']), 60000)
  	  setTimeout(() => add_image("/images/loading16.gif"), 63000)
  	  setTimeout(() => add_image("https://media.giphy.com/media/13jtwqhcZM6Xi8/giphy.gif",), 67500)
  	  setTimeout(() => add_image("https://media.giphy.com/media/l0O9zBvk5nZ71Molq/giphy.gif",), 85000)
  	  setTimeout(() => add_image("/images/loading17.gif" ['techno']), 72000)
  	  setTimeout(() => add_image("/images/loading19.jpg", ['rotate-lol']), 92000)
  	  setTimeout(() => add_image("/images/loading20.png", ['animated', 'flipInX', 'infinite']), 95000)
  	  setTimeout(() => add_image("/images/loading20.JPG", ['techno']), 98000)
  	  setTimeout(() => add_image("https://media.giphy.com/media/p04CSILL5ZUfS/giphy.gif ", ['techno']), 98000)
  	  setTimeout(() => add_image("img.pr0gramm.com/2017/02/12/1671e7f6f8e2bd1d.gif", ['techno']), 110000)
  	  setTimeout(() => add_image("https://media.giphy.com/media/jKVJKhpPq9og8/giphy.gif",), 130000)
  	  done = true;*/
