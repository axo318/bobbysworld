function setup(){
	createCanvas(400, 400);
	background(255,215,0,150);
	popup = new pop_up_window(1,400,400);
	// img = loadImage("https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png");
	// image(img, 0, 0);
}

function draw() {
	// image(img, 0, 0);
	popup.display_text(5);
}