var initialData = {
    number: 7,
    angle: 0
}

function norm(x1, x2, y1, y2){
	return Math.sqrt((x1-x2)**2 + (y1-y2)**2)
}


function render(data, ctx){
    var number = data.number
    var scale = 165
    var cX = 0
    var cY = 0
    var angle = data.angle

    ctx.point(cX + scale * Math.cos(angle), cY + scale * Math.sin(angle))

    var circle_centers = []
    for (let i = 0; i < number; i++){
      circle_centers.push([cX + scale * Math.cos(i * 2 * Math.PI / number + angle), cY + scale * Math.sin(i * 2 * Math.PI / number + angle)])
    }

    var stein_rad = (1/2) * norm(circle_centers[0][0],
                                 circle_centers[1][0],
                                 circle_centers[0][1],
                                 circle_centers[1][1])


    for (let i = 0; i < number; i++){
      ctx.circle(circle_centers[i][0], circle_centers[i][1], stein_rad, {affects:'none', fill:'none', stroke:'black'})
    }

    var big_rad = scale + stein_rad
    var small_rad = scale - stein_rad
    ctx.circle(cX, cY, big_rad, {affects:'none', fill:'none', stroke:'blue'})
    ctx.circle(cX, cY, small_rad, {affects:'none', fill:'none', stroke:'red'})


}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#concentricSteinerChain')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
