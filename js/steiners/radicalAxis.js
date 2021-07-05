var initialData = {
    circle1_x: -90-35,
    circle1_y: 0,
    // circle1_rx: 75-35,
    // circle1_ry: 0,
    circle1_rad: 165,
    circle1_angle: 0,
    circle2_x: -25-25,
    circle2_y: -25,
    // circle2_rx: 35-35,
    // circle2_ry: -25,
    circle2_rad: 65,
    circle2_angle: 0,
    axis_t: 0
}

function dist(x1, x2, y1, y2){
	return Math.sqrt((x1-x2)**2 + (y1-y2)**2)
}

var print = console.log

function find_tangent(pX, pY, cX, cY, R){
  var d1 = Math.sqrt(dist(pX, cX, pY, cY)**2 - R**2)
  var d2 = -Math.sqrt(dist(pX, cX, pY, cY)**2 - R**2)

  if (isNaN(d1) || isNaN(d2)){
    return [[pX, pY],[pX,pY]]
  }

  var rad_c = math.complex(pX - cX, pY - cY)
  var rad_dir1 = math.divide(rad_c, math.add(R, math.complex(0, d1)))
  var rad_dir2 = math.divide(rad_c, math.add(R, math.complex(0, d2)))

  t = -1
  tangent1 = [
    pX + t * math.re(math.multiply(d1, math.multiply(rad_dir1, math.complex(0, 1)))),
    pY + t * math.im(math.multiply(d1, math.multiply(rad_dir1, math.complex(0, 1))))
  ]
  tangent2 = [
    pX + t * math.re(math.multiply(d2, math.multiply(rad_dir2, math.complex(0, 1)))),
    pY + t * math.im(math.multiply(d2, math.multiply(rad_dir2, math.complex(0, 1))))
  ]


  return [tangent1, tangent2]

}


function render(data, ctx){
// Drawing circles
  var c1x = data.circle1_x
  var c1y = data.circle1_y
  var rad1 = data.circle1_rad
  var c1a = data.circle1_angle
  var c1rx = c1x + rad1 * Math.cos(c1a)
  var c1ry = c1y + rad1 * Math.sin(c1a)
  // var c1rx = data.circle1_rx
  // var c1ry = data.circle1_ry
  var c2x = data.circle2_x
  var c2y = data.circle2_y
  var rad2 = data.circle2_rad
  var c2a = data.circle2_angle
  var c2rx = c2x + rad2 * Math.cos(c2a)
  var c2ry = c2y + rad2 * Math.sin(c2a)
  // var c2rx = data.circle2_rx
  // var c2ry = data.circle2_ry


  // var rad1 = dist(c1x, c1rx, c1y, c1ry)
  // var rad2 = dist(c2x, c2rx, c2y, c2ry)

  ctx.circle(c1x, c1y, rad1, {affects:'none', fill:'none', stroke:'blue'})
  ctx.circle(c2x, c2y, rad2, {affects:'none', fill:'none', stroke:'red'})


// Drawing radical axis
  var c1_to_c2 = [c2x - c1x, c2y - c1y]
  var abs_c1_to_c2 = dist(c1x, c2x, c1y, c2y)
  var c1_to_axis = .5 * ((rad1**2 - rad2**2)/(abs_c1_to_c2) + abs_c1_to_c2)
  c1_to_axis = [c1_to_c2[0] / abs_c1_to_c2 * c1_to_axis, c1_to_c2[1] / abs_c1_to_c2 * c1_to_axis]

  var axis_dir = [-c1_to_axis[1], c1_to_axis[0]]

  var t = 100
  var axis_p1 = [c1x + c1_to_axis[0] + t * axis_dir[0], c1y + c1_to_axis[1] + t * axis_dir[1]]
  var axis_p2 = [c1x + c1_to_axis[0] - t * axis_dir[0], c1y + c1_to_axis[1] - t * axis_dir[1]]
  ctx.line(axis_p1[0], axis_p1[1], axis_p2[0], axis_p2[1], {affects:'none', stroke:'green'})

  var axis_t = data.axis_t
  var P = [c1x + c1_to_axis[0] + axis_t * axis_dir[0], c1y + c1_to_axis[1] + axis_t * axis_dir[1]]

// Drawing tangents to circles from P
  var tangents_C1 = find_tangent(P[0], P[1], c1x, c1y, rad1)
  var tangents_C2 = find_tangent(P[0], P[1], c2x, c2y, rad2)

  ctx.line(P[0], P[1], tangents_C1[0][0], tangents_C1[0][1], {affects:'none', stroke:'purple'})
  ctx.line(P[0], P[1], tangents_C1[1][0], tangents_C1[1][1], {affects:'none', stroke:'purple'})
  ctx.line(P[0], P[1], tangents_C2[0][0], tangents_C2[0][1], {affects:'none', stroke:'purple'})
  ctx.line(P[0], P[1], tangents_C2[1][0], tangents_C2[1][1], {affects:'none', stroke:'purple'})

  var tang_rad = dist(P[0], tangents_C1[0][0], P[1], tangents_C1[0][1])
  ctx.circle(P[0], P[1], tang_rad, {affects:'none', fill:'none', stroke:'purple'})


// Drawing control points
  ctx.point(P[0], P[1], {affects:['axis_t'], fill:'green'})

  ctx.point(c1x, c1y, {fill:'blue'})
  ctx.point(c2x, c2y, {fill:'red'})
  ctx.point(c1rx, c1ry, {affects:['circle1_rad', 'circle1_angle'], fill:'blue'})
  ctx.point(c2rx, c2ry, {affects:['circle2_rad', 'circle2_angle'], fill:'red'})

}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#radicalAxis')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();