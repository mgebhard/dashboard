var surface;
var hour_hand;
var minute_hand;

var hour = 0;
var minute = 0;

var icon_size = 150.0; // TODO Load Dynamically 

function startClock() {
	// Get our Canvas element
	surface = document.getElementById("analog-clock");

	if (surface.getContext) {
		hour_hand = new Image();
		hour_hand.onload = loadingComplete;
		hour_hand.src = "static/img/clock_hour.svg";

		minute_hand = new Image();
		minute_hand.onload = loadingComplete;
		minute_hand.src = "static/img/clock_minute.svg";
	}
}

function loadingComplete(e) {
	// When the image has loaded begin the loop
	setInterval(loop, 25);
}

function drawRotatedImage(image, angle) {
	// Each loop we rotate the image
	// Grab the context
	var surfaceContext = surface.getContext('2d');

	// Save the current context
	surfaceContext.save();

	surfaceContext.scale( icon_size / 256.0 , icon_size / 256.0 );
	// Translate to the center point of our image
	surfaceContext.translate(image.width * 0.5, image.height * 0.5);
	// Perform the rotation
	surfaceContext.rotate(degreesToRadians(angle));
	// Translate back to the top left of our image
	surfaceContext.translate(-image.width * 0.5, -image.height * 0.5);
	// Finally we draw the image
	surfaceContext.drawImage(image, 0, 0);
	// And restore the context ready for the next loop
	surfaceContext.restore();
}

function clearCanvas() {
	var surfaceContext = surface.getContext('2d');
	// Clear the canvas to White
	surfaceContext.fillStyle = "rgb(0,0,255)"; // TODO: Make this transparent.
	surfaceContext.fillRect(0, 0, surface.width, surface.height);
}

function drawTime( hour, minute ) {

	clearCanvas();

	drawRotatedImage( hour_hand, hour * 360 / 12 );
	drawRotatedImage( minute_hand, minute * 360 / 60 );

}

function loop() {
	drawTime( hour, minute );
	minute += 0.5
	if( minute >= 60 ) {
		minute -= 60;
		hour ++;
	}
}

function degreesToRadians(d) {
	// Converts degrees to radians
	return d * 0.0174532925199432957;
}