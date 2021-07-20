var initialData = {
    radius: 250,
    angle: Math.PI/3
}

function render(data, ctx){

// Drawing pentagon
    var rad = 250
    var angle = data.angle
    var sides = 5
    var small_rad = Math.sqrt(3 + 2*Math.cos(angle + 2 * Math.PI/sides) - 2 * Math.cos(angle) - 2 * Math.cos(2 * Math.PI/sides))
    var phi = Math.atan2(Math.sin(angle) - 2*Math.cos(-2*Math.PI/sides + angle/2)*Math.sin(angle/2), Math.cos(angle) + 2*Math.sin(-2*Math.PI/sides + angle/2)*Math.sin(angle/2))



    for(let i = 0; i < sides; i++){
        let x = (a,b) => Math.cos(a * 2 * Math.PI/sides + b)
        let y = (a,b) => Math.sin(a * 2 * Math.PI/sides + b)
        ctx.line(rad * x(i, 0), 
                 rad * y(i, 0), 
                 rad * x(i+1, 0), 
                 rad * y(i+1, 0), {affects:'none', 'stroke-width':5})
       
        ctx.line(rad * x(i-1, 0), 
                 rad * y(i-1, 0), 
                 rad * small_rad * x(i, phi), 
                 rad * small_rad * y(i, phi), {affects:'none', stroke:'black','stroke-width':2})
        

        ctx.line(rad * small_rad * x(i, phi), 
                 rad * small_rad * y(i, phi), 
                 rad * small_rad * x(i+1, phi), 
                 rad * small_rad * y(i+1, phi), {affects:'none', 'stroke-width':5, 'stroke':'red'})


        ctx.point(rad * x(i, 0), rad * y(i, 0))


        ctx.point(small_rad * rad * x(i, phi), 
                  small_rad * rad * y(i, phi), {affects:['angle'], fill:'red'})


    }


}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#pentagon_rotate_angle')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
