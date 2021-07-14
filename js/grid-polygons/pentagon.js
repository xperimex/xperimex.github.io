var initialData = {
    radius: 250,
    angle: 0
}

function render(data, ctx){

// Drawing pentagon
    var rad = data.radius
    var angle = data.angle
    var sides = 5
  
    for(let i = 0; i < sides; i++){
        ctx.line(rad * Math.cos(i * 2 * Math.PI/sides + angle), 
                 rad * Math.sin(i * 2 * Math.PI/sides + angle), 
                 rad * Math.cos((i+1) * 2 * Math.PI/sides + angle), 
                 rad * Math.sin((i+1) * 2 * Math.PI/sides + angle), {affects:'none', 'stroke-width':5})
        ctx.point(rad * Math.cos(i * 2 * Math.PI/sides + angle), rad * Math.sin(i * 2 * Math.PI/sides + angle))


    }


}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#pentagon')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
