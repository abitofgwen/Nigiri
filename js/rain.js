//array of all sushi images.
var gifs = ['image/Aoriika.png', 'image/Hashira.png', 'image/Ika.png', 'image/Kanpachi.png', 'image/katsuo.png',
						'image/Kinmedai.png','image/Kurumaebi.png', 'image/Roe.png', 'image/Sake.png','image/Salmonbelly.png',
						'image/Sawara.png','image/Sayori.png','image/sumi-ika.png','image/Tamago.png','image/Toro.png','image/Uni.png'];
var sizeChar = []
var l = gifs.length;
var bodyWrapper = document.body;
var lastNum = 0;
// let it rain function.
function sushiRain() {
	var gif = document.createElement('div');
	var randomNum = Math.floor((Math.random() * l) + 0);
	//Randon top/left
	var randomTop = (Math.floor(Math.random() * (document.body.clientHeight - 200)) + 200) * -1,
			randomLeft = Math.floor(Math.random() * (document.body.clientWidth - 300)) + 1;
	//Random width/height and random transition time
	var wANDh = (Math.floor(Math.random() * 150) + 1),
			seconds = (Math.floor(Math.random() * 2));
	// create random sushi
	var sushi  = gifs[randomNum];
	gif.style.backgroundImage = 'url(' + sushi + ')';
	gif.classList += 'gif';
	gif.style.left = randomLeft + 'px';
	gif.style.top = randomTop + 'px';
	//gif.style.width = wANDh + 'px';
	//gif.style.height = wANDh / 1.6 + 'px';
	gif.style.width = "150px";
	gif.style.height = "70px";
	gif.style.transition = "transform " + seconds + 's linear';
  gif.style.zIndex = "100";
	bodyWrapper.appendChild(gif);

	//Set top to trigger animation
	setTimeout(function() {
		gif.style.transform = "translateY(" + (document.body.clientHeight * 2) + 'px)';
	}, 100)

	//Remove old gifs
	setTimeout(function() {
		bodyWrapper.removeChild(gif);
	}, seconds * 1000)
}

function letItRain () {
	var id = window.setInterval(function() {
		sushiRain();
	}, 20)
	return id;
}
