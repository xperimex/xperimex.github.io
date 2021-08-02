var initialData = {
    angle: 0,
    center_x: -75,
    center_y: -10,
    sides: 100,
    // rad_x: 125,
    // rad_y: -10,
    rad: 200,
    rad_angle: 0,
    test_x: 300-75,
    test_y: 160-10,
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
    var sides = data.sides

    var cX = data.center_x
    var cY = data.center_y
    // cX = Math.max(Math.min(cX, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    // cY = Math.max(Math.min(cY, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    ctx.text('O', cX, cY+25,{affects: 'none', 'text-anchor': 'middle', 'fill': 'green'})

    var radius = data.rad
    var angle = data.rad_angle
    // var rX = data.rad_x
    // var rY = data.rad_y
    var rX = cX + radius * Math.cos(angle)
    var rY = cY + radius * Math.sin(angle)
    var rX_text = rX
    var rY_text = rY

    rX_text = Math.max(Math.min(rX_text, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    rY_text = Math.max(Math.min(rY_text, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    // var radius = norm(cX, rX, cY, rY)

    ctx.text(radius.toFixed(3), rX_text, rY_text-10,{affects: 'none', 'text-anchor': 'middle', 'fill':'green'})
    ctx.text('R', rX_text, rY_text+25,{affects: 'none', 'text-anchor': 'middle', 'fill':'green'})

    ctx.line(cX, cY, rX, rY, {affects: 'none', 'stroke':'green'})

    var tX = data.test_x
    var tY = data.test_y

    var tX_text = tX
    var tY_text = tY

    tX_text = Math.max(Math.min(tX, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    tY_text = Math.max(Math.min(tY, ctx.height / 2 - 50), -ctx.height / 2 + 50)

    var inverted = invert(tX, tY, cX, cY, radius)

    ctx.line(cX, cY, tX, tY, {affects: 'none'})
        ctx.text(norm(cX,tX,cY,tY).toFixed(3), tX_text, tY_text-10,{affects: 'none',
                                                          'text-anchor': 'middle'})
        ctx.text('P', tX_text, tY_text+25,{affects: 'none', 'text-anchor': 'middle'})


    var inverted_txt_x = inverted[0]
    var inverted_txt_y = inverted[1]
    inverted_txt_x = Math.max(Math.min(inverted_txt_x, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    inverted_txt_y = Math.max(Math.min(inverted_txt_y, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    ctx.line(cX, cY, inverted[0], inverted[1], {affects: 'none', stroke: 'red'})

        ctx.text(norm(cX,inverted[0],cY,inverted[1]).toFixed(3),
                 inverted_txt_x,
                 inverted_txt_y-10,
                 {affects: 'none','text-anchor': 'middle', fill: 'red'})
        ctx.text('P\'',
                 inverted_txt_x,
                 inverted_txt_y+25,
                 {affects: 'none','text-anchor': 'middle', fill: 'red'})


    ctx.circle(cX, cY, radius, {affects:'none',fill: 'none', stroke: 'green'})

    ctx.point(cX, cY, {fill: 'green'})
    ctx.point(rX, rY, {affects:['rad', 'rad_angle'],fill: 'green'})
    ctx.point(tX, tY)
    ctx.point(inverted[0], inverted[1], {affects: 'none', fill: 'red'})



   // for(var i=0; i<sides; i++){
   //     ctx.line(radius * Math.cos(i/sides * Math.PI * 2) + cX,
   //              radius * Math.sin(i/sides * Math.PI * 2) + cY,
   //              radius * Math.cos((i+1)/sides * Math.PI * 2) + cX,
   //              radius * Math.sin((i+1)/sides * Math.PI * 2) + cY)
   // }
}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#inversionIntro')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
