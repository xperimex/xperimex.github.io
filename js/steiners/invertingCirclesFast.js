var initialData = {
    angle: 0,
    inv_center_x: -130,
    inv_center_y: 30,
    // inv_rad_x: 30,
    // inv_rad_y: 30,
    inv_rad: 160,
    inv_angle: 0,
    test_center_x: 130,
    test_center_y: -70,
    // test_rad_x: 130-150,
    // test_rad_y: -20,
    test_rad: 160,
    test_angle: Math.PI + .5

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

function invert_circle(iX, iY, iR, cX, cY, cR){
// Find diameter of inverted circle with vector OC
    var vec_oc_mag = norm(iX, cX, iY, cY)
    var vec_oc_x = (iX - cX)/vec_oc_mag
    var vec_oc_y = (iY - cY)/vec_oc_mag

    var dia_point_a_x = cX + vec_oc_x * cR
    var dia_point_a_y = cY + vec_oc_y * cR
    var dia_point_b_x = cX - vec_oc_x * cR
    var dia_point_b_y = cY - vec_oc_y * cR

    // ctx.point(dia_point_a_x, dia_point_a_y)
    // ctx.point(dia_point_b_x, dia_point_b_y)

    var inv_dia_point_a = invert(dia_point_a_x, dia_point_a_y, iX, iY, iR)
    var inv_dia_point_b = invert(dia_point_b_x, dia_point_b_y, iX, iY, iR)

    // ctx.point(inv_dia_point_a[0], inv_dia_point_a[1], {'fill':'red'})
    // ctx.point(inv_dia_point_b[0], inv_dia_point_b[1], {'fill':'red'})

    var new_center_x = (inv_dia_point_a[0] + inv_dia_point_b[0])/2
    var new_center_y = (inv_dia_point_a[1] + inv_dia_point_b[1])/2

    // ctx.point(new_center_x, new_center_y, {'fill':'red'})

    var new_radius = norm(new_center_x, inv_dia_point_a[0], new_center_y, inv_dia_point_a[1])

    return [[new_center_x, new_center_y], new_radius]
}

function render(data, ctx){
// Drawing circle of inversion
    var inv_cX = data.inv_center_x
    var inv_cY = data.inv_center_y
    inv_cX = Math.max(Math.min(inv_cX, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    inv_cY = Math.max(Math.min(inv_cY, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    ctx.text('O', inv_cX, inv_cY+25,{affects: 'none', 'text-anchor': 'middle', 'fill':'green'})

    // var inv_rX = data.inv_rad_x
    // var inv_rY = data.inv_rad_y
    var inv_radius = data.inv_rad
    var inv_angle = data.inv_angle
    var inv_rX = inv_cX + inv_radius * Math.cos(inv_angle)
    var inv_rY = inv_cY + inv_radius * Math.sin(inv_angle)
    // inv_rX = Math.max(Math.min(inv_rX, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    // inv_rY = Math.max(Math.min(inv_rY, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    // var inv_radius = norm(inv_cX, inv_rX, inv_cY, inv_rY)

    // ctx.text(inv_radius.toFixed(3), inv_rX, inv_rY-10,{affects: 'none', 'text-anchor': 'middle'})
    // ctx.text('RI', inv_rX, inv_rY+25,{affects: 'none', 'text-anchor': 'middle'})
// Radial line of inverting circle
    // ctx.line(inv_cX, inv_cY, inv_rX, inv_rY, {affects: 'none', 'stroke':'green'})

    ctx.circle(inv_cX, inv_cY, inv_radius, {affects:'none',fill: 'none', stroke: 'green'})

// Drawing circle to invert
    var test_cX = data.test_center_x
    var test_cY = data.test_center_y
    test_cX = Math.max(Math.min(test_cX, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    test_cY = Math.max(Math.min(test_cY, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    ctx.text('C', test_cX, test_cY+25,{affects: 'none', 'text-anchor': 'middle', 'fill':'blue'})

    // var test_rX = data.test_rad_x
    // var test_rY = data.test_rad_y
    var test_radius = data.test_rad
    var test_angle = data.test_angle
    var test_rX = test_cX + test_radius * Math.cos(test_angle)
    var test_rY = test_cY + test_radius * Math.sin(test_angle)
    // test_rX = Math.max(Math.min(test_rX, ctx.width / 2 - 50), -ctx.width / 2 + 50)
    // test_rY = Math.max(Math.min(test_rY, ctx.height / 2 - 50), -ctx.height / 2 + 50)
    // var test_radius = norm(test_cX, test_rX, test_cY, test_rY)

    // ctx.text(test_radius.toFixed(3), test_rX, test_rY-10,{affects: 'none', 'text-anchor': 'middle'})
    // ctx.text('R1', test_rX, test_rY+25,{affects: 'none', 'text-anchor': 'middle'})
// Radial line of blue circle
    // ctx.line(test_cX, test_cY, test_rX, test_rY, {affects: 'none', 'stroke':'blue'})

    ctx.circle(test_cX, test_cY, test_radius, {affects:'none',fill: 'none', stroke: 'blue'})

// Drawing the inversion
    var new_circle = invert_circle(inv_cX, inv_cY, inv_radius, test_cX, test_cY, test_radius)
    ctx.circle(new_circle[0][0], new_circle[0][1], new_circle[1], {affects:'none', fill:'none', stroke:'red'})

    var inverted_center = invert(test_cX, test_cY, inv_cX, inv_cY, inv_radius)
    ctx.point(inverted_center[0], inverted_center[1], {affects:'none', 'fill':'red'})
    ctx.text('C\'', inverted_center[0], inverted_center[1]+25,{affects: 'none', 'text-anchor': 'middle', 'fill':'red'})


    ctx.point(inv_cX, inv_cY, {'fill':'green'})
    ctx.point(inv_rX, inv_rY, {affects:['inv_rad', 'inv_angle'], 'fill':'green'})
    ctx.point(test_rX, test_rY, {affects:['test_rad', 'test_angle'], 'fill':'blue'})
    ctx.point(test_cX, test_cY, {'fill':'blue'})






}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#invertingCirclesFast')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
