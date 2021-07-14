var initialData = {
    radius: 160,
    angle: 0
}

function render(data, ctx){

// Drawing pentagon
    var rad = data.radius
    var angle = data.angle
    var sides = 3


    for(let i = 0; i < sides; i++){
        let x = a => Math.cos(a * 2 * Math.PI/sides + angle)
        let y = a => Math.sin(a * 2 * Math.PI/sides + angle)
        ctx.line(rad * x(i), 
                 rad * y(i), 
                 rad * x(i+1), 
                 rad * y(i+1), {affects:'none', 'stroke-width':5})

        ctx.line(rad * x(i-1), 
                 rad * y(i-1), 
                 rad * (-y(i) + Math.sqrt(2) * Math.cos(2 * Math.PI * (i-1)/sides - Math.PI/4 + angle)), 
                 rad * (x(i) + Math.sqrt(2) * Math.sin(2 * Math.PI * (i-1)/sides - Math.PI/4 + angle)), {affects:'none', stroke:'black','stroke-width':2})
        
        ctx.line(rad * (-y(i) + Math.sqrt(2) * Math.cos(2 * Math.PI * (i-1)/sides - Math.PI/4 + angle)), 
                 rad * (x(i) + Math.sqrt(2) * Math.sin(2 * Math.PI * (i-1)/sides - Math.PI/4 + angle)), 
                 rad * (-y(i+1) + Math.sqrt(2) * Math.cos(2 * Math.PI * (i)/sides - Math.PI/4 + angle)), 
                 rad * (x(i+1) + Math.sqrt(2) * Math.sin(2 * Math.PI * (i)/sides - Math.PI/4 + angle)), {affects:'none', stroke:'red','stroke-width':5})

        ctx.point(rad * (-y(i) + Math.sqrt(2) * Math.cos(2 * Math.PI * (i-1)/sides - Math.PI/4 + angle)), 
                  rad * (x(i) + Math.sqrt(2) * Math.sin(2 * Math.PI * (i-1)/sides - Math.PI/4 + angle)), {affects:'none', fill:'red'})

        ctx.point(rad * x(i), rad * y(i))

    }


}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#triangle_rotate')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
