var initialData = {
    circle1_x: -90-35,
    circle1_y: 0,
    // circle1_rx: 75-35,
    // circle1_ry: 0,
    circle1_rad: 175.95,
    circle1_angle: 0,
    circle2_x: -25-25,
    circle2_y: -25,
    // circle2_rx: 35-35,
    // circle2_ry: -25,
    circle2_rad: 65,
    circle2_angle: 0,
    // axis_t1: -.2,
    // axis_t2: .5,
    inter_r: 100,
    inter_theta: 0,
    angle: 0
}

var print = console.log

function dist(x1, x2, y1, y2){
	return Math.sqrt((x1-x2)**2 + (y1-y2)**2)
}

function invert(x, y, cX, cY, rad){
  var mag = norm(x, cX, y, cY)
  var mag_prime = rad**2/mag
  var x_prime = cX + (x-cX) * mag_prime/mag
  var y_prime = cY + (y-cY) * mag_prime/mag
  return [x_prime, y_prime]
}

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

function find_circle_intersection(cx1, cy1, r1, cx2, cy2, r2){
    var d = dist(cx1, cx2, cy1, cy2)
    c1_to_c2 = [cx2 - cx1, cy2 - cy1]

    // Send points way off screen if intersection shouldn't exist
    if (d > (r1 + r2)){ // Non-intersecting circles
        return [[99999,99999],[99999,99999]]
    }
    if (d < Math.abs(r1 - r2)){ // Contained circles
        return [[99999,99999],[99999,99999]]
    }
    if ((d == 0) && (r1 == r2)){ // Coincident circles
        return [[99999,99999],[99999,99999]]
    }

    var a = (r1**2 - r2**2 + d**2)/(2*d)
    var h = Math.sqrt(r1**2 - a**2)

    p = [cx1 + (a/d)*c1_to_c2[0], cy1 + (a/d)*c1_to_c2[1]]

    intersect1 = [p[0] + (h/d) * (cy2 - cy1), p[1] - (h/d) * (cx2 - cx1)]
    intersect2 = [p[0] - (h/d) * (cy2 - cy1), p[1] + (h/d) * (cx2 - cx1)]

    return [intersect1, intersect2]
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


ctx.point(c1x, c1y, {fill:'blue'})
ctx.point(c2x, c2y, {fill:'red'})
ctx.point(c1rx, c1ry, {affects:['circle1_rad', 'circle1_angle'], fill:'blue'})
ctx.point(c2rx, c2ry, {affects:['circle2_rad', 'circle2_angle'], fill:'red'})


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

// Uncomment for radical axis
  // ctx.line(axis_p1[0], axis_p1[1], axis_p2[0], axis_p2[1], {affects:'none', stroke:'green'})

  var axis_t1 = -1
  var axis_t2 = 1

  var P1 = [c1x + c1_to_axis[0] + axis_t1 * axis_dir[0], c1y + c1_to_axis[1] + axis_t1 * axis_dir[1]]  
  var P2 = [c1x + c1_to_axis[0] + axis_t2 * axis_dir[0], c1y + c1_to_axis[1] + axis_t2 * axis_dir[1]]

// Drawing tangents to circles from P
  var tangents_C1 = find_tangent(P1[0], P1[1], c1x, c1y, rad1)
  var tangents_C2 = find_tangent(P1[0], P1[1], c2x, c2y, rad2)

//   ctx.line(P1[0], P1[1], tangents_C1[0][0], tangents_C1[0][1], {affects:'none', stroke:'purple'})
//   ctx.line(P1[0], P1[1], tangents_C1[1][0], tangents_C1[1][1], {affects:'none', stroke:'purple'})
//   ctx.line(P1[0], P1[1], tangents_C2[0][0], tangents_C2[0][1], {affects:'none', stroke:'purple'})
//   ctx.line(P1[0], P1[1], tangents_C2[1][0], tangents_C2[1][1], {affects:'none', stroke:'purple'})

  var tang_rad1 = dist(P1[0], tangents_C1[0][0], P1[1], tangents_C1[0][1])

// Orthogonal circle 1
  // ctx.circle(P1[0], P1[1], tang_rad1, {affects:'none', fill:'none', stroke:'purple'})

  var tangent_CP2 = find_tangent(P2[0], P2[1], c1x, c1y, rad1)
  var tang_rad2 = dist(P2[0], tangent_CP2[0][0], P2[1], tangent_CP2[0][1])

// Orthogonal circle 2
  // ctx.circle(P2[0], P2[1], tang_rad2, {affects:'none', fill:'none', stroke:'purple'})

  var orthogonal_intersections = find_circle_intersection(P1[0], P1[1], tang_rad1, P2[0], P2[1], tang_rad2)
  
  if (dist(c1x, orthogonal_intersections[0][0], c1y, orthogonal_intersections[0][1]) > dist(c1x, orthogonal_intersections[1][0], c1y, orthogonal_intersections[1][1])){
      var intersection = [orthogonal_intersections[0][0], orthogonal_intersections[0][1]]
      var inv_center = [orthogonal_intersections[1][0], orthogonal_intersections[1][1]]
  } else {
      var intersection = [orthogonal_intersections[1][0], orthogonal_intersections[1][1]]
      var inv_center = [orthogonal_intersections[0][0], orthogonal_intersections[0][1]]

  }

// Center of black inversion circle
  // ctx.point(intersection[0], intersection[1], {affects:'none', fill:'black'})


//   Intersections are collinear with centers   
//   ctx.line(c1x, c1y, orthogonal_intersections[0][0], orthogonal_intersections[0][1])

// Drawing inverted circles (red, blue, purple1, purple2)
  // var inv_rad = Math.sqrt(dist(intersection[0], inv_center[0], intersection[1], inv_center[1]) *
  //                         dist(intersection[0], c1x, intersection[1], c1y))
    //  var inv_rad = 100
  
  var inv_rad = data.inter_r
  var inv_angle = data.inter_theta
  var inv_rad_x = intersection[0] + inv_rad * Math.cos(inv_angle)
  var inv_rad_y = intersection[1] + inv_rad * Math.sin(inv_angle)
  ctx.point(inv_rad_x, inv_rad_y, {affects:['inter_r','inter_theta'], fill:'black'})

  var inv_center = invert(inv_center[0], inv_center[1], intersection[0], intersection[1], inv_rad)


  ctx.circle(intersection[0], intersection[1], inv_rad, {affects:'none', fill:'none', stroke:'black'})  
  var new_blue_circle = invert_circle(intersection[0], intersection[1], inv_rad,
                                      c1x, c1y, rad1)
  var new_red_circle = invert_circle(intersection[0], intersection[1], inv_rad,
                                     c2x, c2y, rad2)
  var new_purple1 = invert_circle(intersection[0], intersection[1], inv_rad,
                                  P1[0]-.05, P1[1]-.05, tang_rad1) // Offset centers a little to not worry about division by 0
  var new_purple2 = invert_circle(intersection[0], intersection[1], inv_rad,
                                  P2[0]-.05, P2[1]-.05, tang_rad2)
  ctx.circle(new_blue_circle[0][0], new_blue_circle[0][1], new_blue_circle[1], {affects:'none', fill:'none', stroke:'blue'})
  ctx.circle(new_red_circle[0][0], new_red_circle[0][1], new_red_circle[1], {affects:'none', fill:'none', stroke:'red'})

// Uncomment for inverted orthogonal circles
  // ctx.circle(new_purple1[0][0], new_purple1[0][1], new_purple1[1], {affects:'none', fill:'none', stroke:'purple'})
  // ctx.circle(new_purple2[0][0], new_purple2[0][1], new_purple2[1], {affects:'none', fill:'none', stroke:'purple'})

//   var new_purple_line1 = find_circle_intersection(intersection[0], intersection[1], inv_rad,
//                                                   P1[0], P1[1], tang_rad1)

//   var new_purple_line2 = find_circle_intersection(intersection[0], intersection[1], inv_rad,
//                                                   P2[0], P2[1], tang_rad2)
//   var purple_line1_vec = [new_purple_line1[0][0] - new_purple_line1[1][0], new_purple_line1[0][1] - new_purple_line1[1][1]]
//   var purple_line2_vec = [new_purple_line2[0][0] - new_purple_line2[1][0], new_purple_line2[0][1] - new_purple_line2[1][1]]

//   ctx.line(new_purple_line1[0][0] - 10000*purple_line1_vec[0], new_purple_line1[0][1] - 10000*purple_line1_vec[1], 
//            new_purple_line1[0][0] + 10000*purple_line1_vec[0], new_purple_line1[0][1] + 10000*purple_line1_vec[1], {affects:'none', stroke:'purple'})
//   ctx.line(new_purple_line2[0][0] - 10000*purple_line2_vec[0], new_purple_line2[0][1] - 10000*purple_line2_vec[1], 
//            new_purple_line2[0][0] + 10000*purple_line2_vec[0], new_purple_line2[0][1] + 10000*purple_line2_vec[1], {affects:'none', stroke:'purple'})
 

  
    if ((Math.abs(c1x - c2x) < .000001) && (Math.abs(c1y - c2y) < .000001)){
      var stein_rad = (rad1 - rad2)/2
      var scale = (rad1 + rad2)/2
      var theta = 2 * Math.asin(stein_rad / (rad2 + stein_rad))
      var number = (2 * Math.PI/theta)
      var angle = data.angle
      for (let i = 0; i < number; i++){
        ctx.circle(c1x + scale * Math.cos(i * theta - angle),
                   c1y + scale * Math.sin(i * theta - angle),
                   stein_rad,
                   {affects:'none', fill:'none', stroke:'black'})
      }

    } else {
      var stein_rad = (new_blue_circle[1] - new_red_circle[1])/2
      var scale = (new_blue_circle[1] + new_red_circle[1])/2
      var theta = 2 * Math.asin(stein_rad / (new_red_circle[1] + stein_rad))
      var number = (2 * Math.PI/theta)
      var angle = data.angle

      for (let i = 0; i < number; i++){
        let new_circle = invert_circle(intersection[0], intersection[1], inv_rad,
                                       inv_center[0] + scale * Math.cos(i * theta + angle), inv_center[1] + scale * Math.sin(i * theta + angle), stein_rad)
        ctx.circle(inv_center[0] + scale * Math.cos(i * theta + angle),
                   inv_center[1] + scale * Math.sin(i * theta + angle),
                   stein_rad,
                   {affects:'none', fill:'none', stroke:'black'})
        ctx.circle(new_circle[0][0], new_circle[0][1], new_circle[1], {affects:'none', fill:'none', stroke:'black'})
    }

    }

    // var stein_rad = (new_blue_circle[1] - new_red_circle[1])/2
    // var scale = (new_blue_circle[1] + new_red_circle[1])/2
    // var theta = 2 * Math.asin(stein_rad / (new_red_circle[1] + stein_rad))
    // var number = (2 * Math.PI/theta)
    // for (let i = 0; i < number; i++){
    //   let new_circle = invert_circle(intersection[0], intersection[1], inv_rad,
    //                                  inv_center[0] + scale * Math.cos(i * theta), inv_center[1] + scale * Math.sin(i * theta), stein_rad)
    //   ctx.circle(inv_center[0] + scale * Math.cos(i * theta),
    //              inv_center[1] + scale * Math.sin(i * theta),
    //              stein_rad,
    //              {affects:'none', fill:'none', stroke:'black'})
    //   ctx.circle(new_circle[0][0], new_circle[0][1], new_circle[1], {affects:'none', fill:'none', stroke:'black'})
    // }

// Drawing control points
  // ctx.point(P1[0], P1[1], {affects:['axis_t1'], fill:'green'})
  // ctx.point(P2[0], P2[1], {affects:['axis_t2'], fill:'green'})


  // ctx.point(c1x, c1y, {fill:'blue'})
  // ctx.point(c2x, c2y, {fill:'red'})
  // ctx.point(c1rx, c1ry, {affects:['circle1_rad', 'circle1_angle'], fill:'blue'})
  // ctx.point(c2rx, c2ry, {affects:['circle2_rad', 'circle2_angle'], fill:'red'})


}

var canvas = g9(initialData, render)
.align('center', 'center')
.insertInto('#steinersComplete')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();

setInterval(() => {
  initialData.angle += .01
  canvas.setData(initialData)
}, 25)