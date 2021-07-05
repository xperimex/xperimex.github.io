var initialData = {
    small_radius: 96.729239709,
    angle: 0
}

function render(data, ctx){
    var big_rad = 245
    var cX = 0
    var cY = 0
    var angle = data.angle
    var small_rad = data.small_radius
    var stein_rad = (big_rad - small_rad)/2
    var scale = (big_rad + small_rad)/2

    ctx.circle(cX, cY, big_rad, {affects:'none', fill:'none', stroke:'blue'})
    ctx.circle(cX, cY, small_rad, {affects:'none', fill:'none', stroke:'red'})

    var x = Math.max(Math.min(small_rad, 235), 17.5902085825)
    ctx.point(x, 0, {fill:'red'})
    ctx.point(scale * Math.cos(angle), scale * Math.sin(angle), {affects: ['angle'], fill:'black'})


    var theta = 2 * Math.asin(stein_rad / (small_rad + stein_rad))
    var number = (2 * Math.PI/theta)

    for (let i = 0; i < number; i++){
      ctx.circle(scale * Math.cos(i * theta + angle),
                 scale * Math.sin(i * theta + angle),
                 stein_rad,
                 {affects:'none', fill:'none', stroke:'black'})
    }


    // ctx.point(small_rad, 0, {fill:'red'})
    // ctx.point(scale * Math.cos(angle), scale * Math.sin(angle), {affects: ['angle'], fill:'black'})




}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#concentricVariableSteinerChain')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
