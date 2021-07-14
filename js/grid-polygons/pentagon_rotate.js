var initialData = {
    radius: 250,
    angle: 0
}

function render(data, ctx){

// Drawing pentagon
    var rad = data.radius
    var angle = data.angle
    var sides = 5

    ctx.text("v", rad * Math.cos(0 * 2 * Math.PI/sides + angle) + 10, rad * Math.sin(0 * 2 * Math.PI/sides + angle), {affects:'none', fill:'black', 'text-anchor': 'middle'})
    ctx.text("t", rad * Math.cos(-1 * 2 * Math.PI/sides + angle) + 10, rad * Math.sin(-1 * 2 * Math.PI/sides + angle), {affects:'none', fill:'black', 'text-anchor': 'middle'})
    ctx.text("v'", rad * (-Math.sin(0 * 2 * Math.PI/sides + angle) + Math.sqrt(2) * Math.cos(2 * Math.PI * (-1)/sides - Math.PI/4 + angle)), 
                   rad * (Math.cos(0 * 2 * Math.PI/sides + angle) + Math.sqrt(2) * Math.sin(2 * Math.PI * (-1)/sides - Math.PI/4 + angle)) - 10, {affects:'none', fill:'red', 'text-anchor': 'middle'})


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
    .insertInto('#pentagon_rotate')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
