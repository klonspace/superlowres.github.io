/**
 * 	Example HTML5 canvas
 */

const TAU    = Math.PI * 2

const canvas = document.querySelector('canvas')
const ctx    = canvas.getContext('2d')

canvas.width = window.innerWidth*2;
canvas.height = window.innerHeight*2

requestAnimationFrame(loop)
console.log("saasd")

const NUM_X  = 128;
const NUM_Y = 128;
const CELLSIZE = 16;

const data = new Array(NUM_X*NUM_Y).fill(0);

function loop(time){
	requestAnimationFrame(loop)

	for(var i  = 0; i < NUM_Y; i++) {
		for(var j = 0; j < NUM_X; j++) {
			data[i*NUM_Y + j] = Math.sqrt((i*CELLSIZE - pointer.y)**2 + (j*CELLSIZE - pointer.x)**2);
		}
	}
	
	


	ctx.fillStyle = "white"
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	
	for(var i  = 0; i < NUM_Y; i++) {
		for(var j = 0; j < NUM_X; j++) {
			var bright = Math.floor(data[i*NUM_Y + j]*255);
			ctx.fillStyle = "rgb("+bright+","+bright+","+bright+")"
			ctx.fillRect(j*CELLSIZE, i*CELLSIZE, CELLSIZE-3, CELLSIZE-3)
		}
	}
	console.log(NUM_X)
}

// pointer events
const pointer = {
	x  : 0,
	y  : 0,
	px : 0,
	py : 0,
	pressed : false
}

canvas.addEventListener('mousemove', e => {
	pointer.x = e.offsetX
	pointer.y = e.offsetY
})

canvas.addEventListener('mousedown', e => {
	pointer.pressed = true
})

canvas.addEventListener('mouseup', e => {
	pointer.pressed = false
})




