import $ from 'jquery';

const classes = [
	["techno"],
	["rotate-lol"],
	["animated", "infinite", "bounce"],
	["animated", "infinite", "flash"],
	["animated", "infinite", "pulse"],
	["animated", "infinite", "rubberBand"],
	["animated", "infinite", "shake"],
	["animated", "infinite", "headShake"],
	["animated", "infinite", "headShake"],
	["animated", "infinite", "swing"],
	["animated", "infinite", "tada"],
	["animated", "infinite", "wobble"],
	["animated", "infinite", "jello"],
	["animated", "infinite", "bounceIn"],
	["animated", "infinite", "bounceInDown"],
	["animated", "infinite", "bounceInLeft"],
	["animated", "infinite", "bounceInRight"],
	["animated", "infinite", "bounceInUp"],
	["animated", "infinite", "bounceOut"],
	["animated", "infinite", "bounceOutDown"],
	["animated", "infinite", "bounceOutLeft"],
	["animated", "infinite", "bounceOutRight"],
	["animated", "infinite", "bounceOutUp"],
	["animated", "infinite", "fadeIn"],
	["animated", "infinite", "fadeInDown"],
	["animated", "infinite", "fadeInDownBig"],
	["animated", "infinite", "fadeInLeft"],
	["animated", "infinite", "fadeInLeftBig"],
	["animated", "infinite", "fadeInRight"],
	["animated", "infinite", "fadeInRightBig"],
	["animated", "infinite", "fadeInUp"],
	["animated", "infinite", "fadeInUpBig"],
	["animated", "infinite", "fadeOut"],
	["animated", "infinite", "fadeOutDown"],
	["animated", "infinite", "fadeOutDownBig"],
	["animated", "infinite", "fadeOutLeft"],
	["animated", "infinite", "fadeOutLeftBig"],
	["animated", "infinite", "fadeOutRight"],
	["animated", "infinite", "fadeOutRightBig"],
	["animated", "infinite", "fadeOutUp"],
	["animated", "infinite", "fadeOutUpBig"],
	["animated", "infinite", "flipInX"],
	["animated", "infinite", "flipInY"],
	["animated", "infinite", "flipOutX"],
	["animated", "infinite", "flipOutY"],
	["animated", "infinite", "lightSpeedIn"],
	["animated", "infinite", "lightSpeedOut"],
	["animated", "infinite", "rotateIn"],
	["animated", "infinite", "rotateInDownLeft"],
	["animated", "infinite", "rotateInDownRight"],
	["animated", "infinite", "rotateInUpLeft"],
	["animated", "infinite", "rotateInUpRight"],
	["animated", "infinite", "rotateOut"],
	["animated", "infinite", "rotateOutDownLeft"],
	["animated", "infinite", "rotateOutDownRight"],
	["animated", "infinite", "rotateOutUpLeft"],
	["animated", "infinite", "rotateOutUpRight"],
	["animated", "infinite", "hinge"],
	["animated", "infinite", "rollIn"],
	["animated", "infinite", "rollOut"],
	["animated", "infinite", "zoomIn"],
	["animated", "infinite", "zoomInDown"],
	["animated", "infinite", "zoomInLeft"],
	["animated", "infinite", "zoomInRight"],
	["animated", "infinite", "zoomInUp"],
	["animated", "infinite", "zoomOut"],
	["animated", "infinite", "zoomOutDown"],
	["animated", "infinite", "zoomOutLeft"],
	["animated", "infinite", "zoomOutRight"],
	["animated", "infinite", "zoomOutUp"],
	["animated", "infinite", "slideInDown"],
	["animated", "infinite", "slideInLeft"],
	["animated", "infinite", "slideInRight"],
	["animated", "infinite", "slideInUp"],
	["animated", "infinite", "slideOutDown"],
	["animated", "infinite", "slideOutLeft"],
	["animated", "infinite", "slideOutRight"],
	["animated", "infinite", "slideOutUp"]
]

export function randomAnimation() {
	const length = classes.length;
	return classes[Math.floor(Math.random() * length - 1)];
}

export function insertRandomGif() {
  window.setInterval(function(){
    $(function() {
  	  $.ajax({
  	     type: "GET",
  	     dataType: "jsonp",
  	     cache: false,
  	     url: "http://johnjohnston.info/oddsandends/ds106gif?f=jsonp&c=1",
  	     success: function(data) {
          for (var i=0; i < data.length; i++) {
            addImage(data[i].url, randomAnimation())
  	      }
        }
      })
  	})
  }, 5000)
}

export function addImage(url, classes) {
	let img = document.createElement('img')
	img.src = url
	img.classList.add('countdown-image')
	if(classes !== undefined) {
  	classes.forEach(e => img.classList.add(e))
	}
	let top = Math.floor(Math.random() * window.innerHeight - 100)
	let left = Math.floor(Math.random() * window.innerWidth - 100)
	let rotate = Math.floor(Math.random() * 90) + -90;
	img.style.top = top + 'px'
	img.style.left =  left + 'px'
	img.style.transform =  'rotate(' + rotate +'deg)'
	let parent = document.getElementsByClassName('countdown')[0];
	console.log(parent);
	parent.insertBefore(img, document.getElementsByClassName('countdown-overlay')[0]);
}


export function randomColor(element) {
	window.setInterval(function(){
    let hex = '#'+ Math.random().toString(16).substr(-6);
    hex = hex.replace('#','');
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);
    element.style.background = `rgba(${r}, ${g}, ${b}, 0.5)`;
  }, 377.358491)
}
