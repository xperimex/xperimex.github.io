var initialData = {
    angle: 0,
    inv_center_x: -130,
    inv_center_y: 30,
    inv_rad_x: 30,
    inv_rad_y: 30,
    sides: 200,
    test_center_x: 130,
    test_center_y: -70,
    test_rad_x: 130-150,
    test_rad_y: -20

}

function norm(x1, x2, y1, y2){
	return Math.sqrt((x1-x2)**2 + (y1-y2)**2)
}

function invert(x, y, cX, cY, rad){
    var mag = norm(x, cX, y, cY)
    var mag_prime = rad**2/mag
    var x_prime = cX + (x-cX) * mag_prime/mag
    var y_prime = cY + (y-cY) * mag_prime/mag
    return [x_prime, y_prime]
}

function render(data, ctx){
// Drawing circle of inversion
    var inv_cX = data.inv_center_x
    var inv_cY = data.inv_center_y
    inv_cX = Math.max(Math.min(inv_cX, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    inv_cY = Math.max(Math.min(inv_cY, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    ctx.text('O', inv_cX, inv_cY+25,{affects: 'none', 'text-anchor': 'middle', 'fill':'green'})

    var inv_rX = data.inv_rad_x
    var inv_rY = data.inv_rad_y
    inv_rX = Math.max(Math.min(inv_rX, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    inv_rY = Math.max(Math.min(inv_rY, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    var inv_radius = norm(inv_cX, inv_rX, inv_cY, inv_rY)

    // ctx.text(inv_radius.toFixed(3), inv_rX, inv_rY-10,{affects: 'none', 'text-anchor': 'middle'})
    // ctx.text('RI', inv_rX, inv_rY+25,{affects: 'none', 'text-anchor': 'middle'})
    ctx.line(inv_cX, inv_cY, inv_rX, inv_rY, {affects: 'none', 'stroke':'green'})

    ctx.circle(inv_cX, inv_cY, inv_radius, {affects:'none',fill: 'none', stroke: 'green'})
    ctx.point(inv_cX, inv_cY, {'fill':'green'})
    ctx.point(inv_rX, inv_rY, {'fill':'green'})

// Drawing circle to invert
    var test_cX = data.test_center_x
    var test_cY = data.test_center_y
    test_cX = Math.max(Math.min(test_cX, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    test_cY = Math.max(Math.min(test_cY, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    ctx.text('C', test_cX, test_cY+25,{affects: 'none', 'text-anchor': 'middle', 'fill':'blue'})

    var test_rX = data.test_rad_x
    var test_rY = data.test_rad_y
    test_rX = Math.max(Math.min(test_rX, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    test_rY = Math.max(Math.min(test_rY, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    var test_radius = norm(test_cX, test_rX, test_cY, test_rY)

    // ctx.text(test_radius.toFixed(3), test_rX, test_rY-10,{affects: 'none', 'text-anchor': 'middle'})
    // ctx.text('R1', test_rX, test_rY+25,{affects: 'none', 'text-anchor': 'middle'})
    ctx.line(test_cX, test_cY, test_rX, test_rY, {affects: 'none', 'stroke':'blue'})


    var sides = data.sides
    var test_points_x = []
    var test_points_y = []
    for(let i=0; i<sides; i++){
        test_points_x.push(test_radius * Math.cos(i/sides * Math.PI * 2) + test_cX)
        test_points_y.push(test_radius * Math.sin(i/sides * Math.PI * 2) + test_cY)
     }
     test_points_x.push(test_points_x[0])
     test_points_y.push(test_points_y[0])

     for (let i=0; i<test_points_x.length-1; i++){
       ctx.line(test_points_x[i], test_points_y[i], test_points_x[i+1], test_points_y[i+1],
       {affects:'none', 'stroke':'blue'})
     }


// Drawing inversion
     var inverted_center = invert(test_cX, test_cY, inv_cX, inv_cY, inv_radius)
     ctx.point(inverted_center[0], inverted_center[1], {affects:'none', 'fill':'red'})
     ctx.text('C\'', inverted_center[0], inverted_center[1]+25,{affects: 'none', 'text-anchor': 'middle', 'fill':'red'})
     var inverted = []
     for (let i=0; i<test_points_x.length; i++){
       inverted.push(invert(test_points_x[i],
                            test_points_y[i],
                            inv_cX,
                            inv_cY,
                            inv_radius))
     }
     for (let i=0; i<inverted.length-1; i++){
       ctx.line(inverted[i][0], inverted[i][1], inverted[i+1][0], inverted[i+1][1],
       {affects:'none', 'stroke':'red'})
     }
     ctx.point(test_rX, test_rY, {'fill':'blue'})
     ctx.point(test_cX, test_cY, {'fill':'blue'})



}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#invertingCircles')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
