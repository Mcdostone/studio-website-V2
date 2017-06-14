
var YouTubeIframeLoader = require('youtube-iframe')
require('jquery-countdown')

var player = undefined
var done = false
var allClasses = [ ["techno"],
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
  ["animated", "infinite", "bounceOut"]
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
function random_class() {
  let length = allClasses.length
  return allClasses[Math.floor(Math.random() * length - 1)]
}

function randomGif() {
  window.setInterval(function(){
    $(function() {
      var gifs="";
  	  $.ajax({
  	     type: "GET",
  	     dataType: "jsonp",
  	     cache: false,
  	     url: "http://johnjohnston.info/oddsandends/ds106gif?f=jsonp&c=1",
  	     success: function(data) {
          for (var i=0; i < data.length; i++) {
            add_image(data[i].url, random_class())
  	      }
        }

      })
  	})
  }, 5000)
}

function onPlayerReady(event) {
  event.target.playVideo()
  $('body').trigger('click')
}

function add_image(url, classes) {
  var img = document.createElement('img')
  img.src = url
  img.classList.add('countdown-image')
  if(classes !== undefined) {
    classes.forEach(e => img.classList.add(e))
  }

  let ecart = Math.floor(Math.random() * 250 ) -  100;
  let top = Math.floor(Math.random() * window.innerHeight - 100)
  let left = Math.floor(Math.random() * window.innerWidth - 100)
  let rotate = Math.floor(Math.random() * 90) + -90;
  img.style.top = top + 'px'
  img.style.left =  left + 'px'
  img.style.transform =  'rotate(' + rotate +'deg)'
  let parent = document.getElementsByClassName('nothing')[0]
  parent.insertBefore(img, document.getElementsByClassName('iframe-overlay')[0])
}

function eliot() {
  var img = document.createElement('img')
  img.src = "/images/nothing5.gif"
  img.classList.add('countdown-image')
  img.id = 'eliot'
  let ecart = Math.floor(Math.random() * 250 ) -  100;
  let top = window.innerHeight/2 - 400
  let left = window.innerWidth/2 - 200
  let rotate = Math.floor(Math.random() * 45) + -45;
  img.style.top = top + 'px'
  img.style.left =  left + 'px'
  img.style.width = "400px"
  img.style.transform =  'rotate(' + rotate +'deg)'
  let parent = document.getElementsByClassName('nothing')[0]
  parent.insertBefore(img, document.getElementsByClassName('iframe-overlay')[0])
}


function boom(event) {
  document.getElementById('cuming').classList.add('techno')
}

function random_color() {
  window.setInterval(function(){
    let hex = '#'+Math.random().toString(16).substr(-6);
    hex = hex.replace('#','');
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);
    document.getElementsByClassName('iframe-overlay')[0].style.background = 'rgba('+r+','+g+','+b+', 0.5)';
  }, 377.358491)
}


function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(random_color, 21400)
    setTimeout(boom, 9650)
    setTimeout(randomGif, 21400)

    setTimeout(() => document.getElementById('eliot').classList.add('techno'), 21800)


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

    done = true;
  }

  if(event.data == YT.PlayerState.ENDED)
    player.seekTo(0)

}

$(function() {

  $('body').on('click', function(e) {
    player.playVideo()
  })

  $('#cuming').countdown('2017/03/07 12:0:00', function(event) {
    $(this).html(event.strftime('%-D %!D:jour,jours; %H:%M:%S') + "<br><br>  Studio is coming !");
  });

  YouTubeIframeLoader.load(function(YT) {
    player = new YT.Player('player-countdown', {
      height: '390',
      width: '640',
      videoId: 'x537Cqg5nEI',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {
       'autoplay': 1,
       'showinfo': 0,
       'controls': 0,
       'rel' : 0
      }
    })
  })
})
