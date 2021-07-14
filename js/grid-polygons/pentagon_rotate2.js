var initialData = {
    radius: 250,
    angle: 0
}

function render(data, ctx){

// Drawing pentagon
    var rad = data.radius
    var angle = data.angle
    var iterations = 2
    var sides = 5
    // var scale = 3 - 2 * Math.sqrt(2) * Math.sin(2/sides * Math.PI + Math.PI/4)
    // var phi = Math.atan2(1 - Math.sqrt(2) * Math.sin(2/sides * Math.PI + Math.PI/4), Math.sqrt(2) * Math.cos(2/sides * Math.PI + Math.PI/4))
    var scale = 1
    var phi = 0

    for (let j = 0; j < iterations; j++){
        for(let i = 0; i < sides; i++){
            let x = a => Math.cos(a * 2 * Math.PI/sides + phi + angle)
            let y = a => Math.sin(a * 2 * Math.PI/sides + phi + angle)
            ctx.line(rad * scale * x(i), 
                     rad * scale * y(i), 
                     rad * scale * x(i+1), 
                     rad * scale * y(i+1), {affects:'none', 'stroke-width':5})
    
            ctx.line(rad * scale * x(i-1), 
                     rad * scale * y(i-1), 
                     rad * scale * (-y(i) + Math.sqrt(2) * Math.cos(2 * Math.PI * (i-1)/sides - Math.PI/4 + phi + angle)), 
                     rad * scale * (x(i) + Math.sqrt(2) * Math.sin(2 * Math.PI * (i-1)/sides - Math.PI/4 + phi + angle)), {affects:'none', stroke:'black','stroke-width':2})
            
            ctx.line(rad * scale * (-y(i) + Math.sqrt(2) * Math.cos(2 * Math.PI * (i-1)/sides - Math.PI/4 + phi + angle)), 
                     rad * scale * (x(i) + Math.sqrt(2) * Math.sin(2 * Math.PI * (i-1)/sides - Math.PI/4 + phi + angle)), 
                     rad * scale * (-y(i+1) + Math.sqrt(2) * Math.cos(2 * Math.PI * (i)/sides - Math.PI/4 + phi + angle)), 
                     rad * scale * (x(i+1) + Math.sqrt(2) * Math.sin(2 * Math.PI * (i)/sides - Math.PI/4 + phi + angle)), {affects:'none', stroke:'red','stroke-width':5})
    
            ctx.point(rad * scale * (-y(i) + Math.sqrt(2) * Math.cos(2 * Math.PI * (i-1)/sides - Math.PI/4 + phi + angle)), 
                      rad * scale * (x(i) + Math.sqrt(2) * Math.sin(2 * Math.PI * (i-1)/sides - Math.PI/4 + phi + angle)), {affects:'none', fill:'red'})
    
            ctx.point(rad * scale * x(i), rad * scale * y(i))
    
        }
        scale = scale * Math.sqrt((3 - 2 * Math.sqrt(2) * Math.sin(2/sides * Math.PI + Math.PI/4)))
        phi = phi + Math.atan2(1 - Math.sqrt(2) * Math.sin(2/sides * Math.PI + Math.PI/4), Math.sqrt(2) * Math.cos(2/sides * Math.PI + Math.PI/4))
    
    }


}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#pentagon_rotate2')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
