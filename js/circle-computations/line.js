const width  = 600;
const height = 600;

class Ray {
  constructor(x, y, dir, radius) {
    this.px = x;
    this.py = y;
    this.radius = radius;
    this.dir = dir;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Class for interactive points
class Draggable {
  constructor(x, y, r, color) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.r = r ;
    this.offsetX = 0;
    this.offsetY = 0;
    this.color = color;
    this.prevX = x;
    this.prevY = y;
  }

  over() {
    // Is mouse over object
    if ((mouseX - this.x)**2 + (mouseY - this.y)**2 < 2 * (this.r / 2)**2) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    // stroke(0);
    strokeWeight(this.r);
    // Different fill based on state
    if (this.dragging) {
      stroke(this.color[0] - 100, this.color[1] - 100, this.color[2] - 100);
    } else if (this.rollover) {
      stroke(this.color[0] - 50, this.color[1] - 50, this.color[2] - 50);
    } else {
      stroke(this.color[0], this.color[1], this.color[2]);
    }
    point(this.x, this.y);
  }

  pressed() {
    // Did I click on the rectangle?
    if ((mouseX - this.x)**2 + (mouseY - this.y)**2 <= 2 * (this.r / 2)**2) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

function drawRay(ray) {
  stroke(0,0,0);
  strokeWeight(1.3);
  line(ray.px, ray.py, ray.px + ray.radius * Math.cos(ray.dir), ray.py + ray.radius * Math.sin(ray.dir));
}




function drawPoint(P) {
  // Reflect back in if out-of-bounds
  var current = P;
  // while (current.x > width || current.x < 0 || current.y > height || current.y < 0 ) {
  //   if (current.x > width) {current = reflectRight(current);}
  //   if (current.x < 0) {current = reflectLeft(current);}
  //   if (current.y > height) {current = reflectTop(current);}
  //   if (current.y < 0) {current = reflectBottom(current);}
  // }
  
  strokeWeight(6);
  stroke(0,0,255);
  point(current.x, current.y);
  
}

function intersect(ray, P) {
  var translated = [P.x - ray.px, P.y - ray.py];
  // distance = cross(translated, ray)/ray.magnitude;
  // ray.magnitude = 1 since using sin and cos directions that lie on unit circle
  var dist = (translated[0] * Math.sin(ray.dir) - translated[1] * Math.cos(ray.dir)) / 1
  // The smaller the threshold for intersecting, the closer it is to actual point geometry
  // This dictates the radius of the circle around a dot to deem an acceptable hit
  return (Math.abs(dist) <= 1.5);
}

function circleIntersection(cx, cy, cradius, ray) {
  var current = ray;
  
//   Basic raytracing algorithm
  // Using points as stand-ins for vectors
  var Q = new Point(cx, cy);
  var P = new Point(current.px, current.py);
  var V = new Point(Math.cos(current.dir), Math.sin(current.dir));
  
  // If hits the target, stop the beam
  if (intersect(current, new Point(target.x, target.y))) {
    current.radius = Math.abs((target.x - current.px) * Math.cos(current.dir) + (target.y - current.py) * Math.sin(current.dir)) / 1;
    drawRay(current);
    return;
  }
  
  var a = V.x ** 2 + V.y ** 2;
  var b = 2 * ( V.x * (P.x - Q.x) + V.y * (P.y - Q.y) );
  var c = P.x ** 2 + P.y ** 2 + Q.x ** 2 + Q.y ** 2 - 2 * (P.x * Q.x + P.y * Q.y) - cradius ** 2;
    
  
  if (b**2 - 4*a*c < 0) {
    t1 = current.radius;
    t2 = current.radius;
  } else { 
    t1 = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a);
    t2 = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a);
  }
  
  // t1 is for collisions INSIDE the circle, t2 is for collisions OUTSIDE the circle
  
  if ((P.x - Q.x)**2 + (P.y - Q.y)**2 < cradius**2) {
    t = t1;
  } else {
    t = t2;
  }
    
  current.radius = t;
  
  
  drawRay(current);
  
  
  var reflectPoint = new Point(current.px + t * Math.cos(current.dir), 
                               current.py + t * Math.sin(current.dir));

  // drawPoint(reflectPoint);

    
  if (t != 1000) {
    var center_to_reflection = new Point(reflectPoint.x - Q.x, reflectPoint.y - Q.y);

    // Perpendicular to radial line/tangent to circle
    var reflectLine = new Point(-center_to_reflection.y, center_to_reflection.x);

    var reflectScalar = 2 * (V.x * reflectLine.x + V.y * reflectLine.y)/(reflectLine.x ** 2 + reflectLine.y ** 2);

    var reflectedVector = new Point(reflectScalar * reflectLine.x - V.x, reflectScalar * reflectLine.y - V.y);

    var reflectedRay = new Ray(reflectPoint.x, reflectPoint.y, Math.atan2(reflectedVector.y, reflectedVector.x), 10000);

    if (intersect(reflectedRay, new Point(target.x, target.y))) {
      reflectedRay.radius = current.radius = Math.abs((target.x - reflectedRay.px) * Math.cos(reflectedRay.dir) + (target.y - reflectedRay.py) * Math.sin(reflectedRay.dir)) / 1;
    }
    
    drawRay(reflectedRay);

 }

}


let light;

function setup() {
  let c = createCanvas(width,height);
  c.parent("line");
  // background(255);
  // line(0,0,width,0);
  // line(0,0,0,height);
  // line(width,0,width,height);
  // line(0,height,width,height);

  light = new Draggable(160, 350, 6, [255,0,0]);
}

var track_mouse = true;

function keyPressed() {
  if (keyCode == 50) {
    track_mouse = !track_mouse;
  }
}


function draw() {
  background(255);
  stroke(0);
  strokeWeight(1);
  line(0,0,width,0);
  line(0,0,0,height);
  line(width,0,width,height);
  line(0,height,width,height); 
  


  if (light.x < 5) {
      light.x = 5
  }

  if (light.x > 600 - 5) {
      light.x = 600 - 5
  }

  if (light.y < 5) {
      light.y = 5
  }

  if (light.y > 600 - 5) {
      light.y = 600 - 5
  }


  
  if (track_mouse) {
    mouse_angle = Math.atan2(mouseY - light.y, mouseX - light.x);
  } else {
    mouse_angle = mouse_angle;
  }
  
//   var beam = new Ray(light.x - 1000*Math.cos(mouse_angle), light.y - 1000 * Math.sin(mouse_angle), mouse_angle, 1000);
//   drawRay(beam);

  line(light.x - 1000*Math.cos(mouse_angle), light.y - 1000*Math.sin(mouse_angle),
       light.x + 1000*Math.cos(mouse_angle), light.y + 1000*Math.sin(mouse_angle))
  

  
  light.over();
  light.update();
  light.show();
  
}

function mousePressed() {
  light.pressed();
}

function mouseReleased() {
  light.released();
}

