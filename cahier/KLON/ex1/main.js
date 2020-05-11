/**
 * 	Example HTML5 canvas
 */

const TAU    = Math.PI * 2

const canvas = document.querySelector('canvas')
const ctx    = canvas.getContext('2d')


canvas.width = window.innerWidth*2;
canvas.height = window.innerHeight*2

ctx.scale(2, 2)

requestAnimationFrame(loop)
console.log("saasd")

const NUM_X  = 32;
const NUM_Y = 32;
const CELLSIZE = 30;

const data = new Array(NUM_X*NUM_Y).fill(0);
const feather = 400;
const radius = 200;

function loop(time){
	requestAnimationFrame(loop)

	for(var i  = 0; i < NUM_Y; i++) {
		for(var j = 0; j < NUM_X; j++) {
			var d = (Math.sqrt(
				(i*CELLSIZE - pointer.y)**2 + 
				(j*CELLSIZE - pointer.x)**2
				));
				if(d < radius-feather/2) {
					data[i*NUM_Y + j] = 0;
				}
				else if(d < radius+feather/2) {
					data[i*NUM_Y + j] = (d - (radius-feather/2))/feather
				}
				else {
					data[i*NUM_Y + j] = 1;
				}
		}
	}
	
	


	ctx.fillStyle = "white"
	ctx.font = "30px Arial"
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	
	for(var i  = 0; i < NUM_Y; i++) {
		for(var j = 0; j < NUM_X; j++) {
			var bright = data[i*NUM_Y + j]*0.8;
			// ctx.fillStyle = "rgb("+bright+","+bright+","+bright+")"
			ctx.save();
			ctx.translate(j*CELLSIZE, i*CELLSIZE)
			ctx.fillStyle = "black"
			ctx.rotate(1.25*bright*Math.PI)
			// ctx.scale(bright, bright)
			ctx.fillRect((-bright/2)*CELLSIZE, (-bright/2)*CELLSIZE, CELLSIZE*bright, CELLSIZE*bright)
				// ctx.fillText("KLON", 0, 0)
			ctx.restore()
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




