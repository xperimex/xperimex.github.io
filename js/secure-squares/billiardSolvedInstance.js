const s3 = ( sketch ) => {
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
      if ((sketch.mouseX - this.x)**2 + (sketch.mouseY - this.y)**2 < 2 * (this.r / 2)**2) {
        this.rollover = true;
      } else {
        this.rollover = false;
      }
    }

    update() {
      // Adjust location if being dragged
      if (this.dragging) {
        this.x = sketch.mouseX + this.offsetX;
        this.y = sketch.mouseY + this.offsetY;
      }
    }

    show() {
      // stroke(0);
      sketch.strokeWeight(this.r);
      // Different fill based on state
      if (this.dragging) {
        sketch.stroke(this.color[0] - 100, this.color[1] - 100, this.color[2] - 100);
      } else if (this.rollover) {
        sketch.stroke(this.color[0] - 50, this.color[1] - 50, this.color[2] - 50);
      } else {
        sketch.stroke(this.color[0], this.color[1], this.color[2]);
      }
      sketch.point(this.x, this.y);
    }

    pressed() {
      // Did I click on the rectangle?
      if ((sketch.mouseX - this.x)**2 + (sketch.mouseY - this.y)**2 <= 2 * (this.r / 2)**2) {
        this.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        this.offsetX = this.x - sketch.mouseX;
        this.offsetY = this.y - sketch.mouseY;
      }
    }

    released() {
      // Quit dragging
      this.dragging = false;
    }
  }

  function drawRay(ray) {
    sketch.stroke(0,0,0);
    sketch.strokeWeight(1.3);
    sketch.line(ray.px, ray.py, ray.px + ray.radius * Math.cos(ray.dir), ray.py + ray.radius * Math.sin(ray.dir));
  }




  function drawPoint(P) {
    // Reflect back in if out-of-bounds
    var current = P;
    
    sketch.strokeWeight(6);
    sketch.stroke(0,0,255);
    sketch.point(current.x, current.y);
    
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


  function wallIntersect() {
    
  //   if (intersect(ray, new Point(wall_target.x, wall_target.y))) {
  //     ray.radius = Math.abs((wall_target.x - ray.px) * Math.cos(ray.dir) +
  //                              (wall_target.y - ray.py) * Math.sin(ray.dir));
  //     drawRay(ray);
  //     return;
  //   }
    

    
    var wall = new Point(line1.x-line2.x, line1.y-line2.y);
    
    
    var point_reflect_scalar = 2 * ((wall_target.x - line1.x) * wall.x + (wall_target.y - line1.y) * wall.y)/(wall.x ** 2 + wall.y ** 2);
    
    var point_reflect_vec = new Point(point_reflect_scalar * wall.x - (wall_target.x - line1.x), point_reflect_scalar * wall.y - (wall_target.y - line1.y));

    var reflection = new Point(point_reflect_vec.x + line1.x, point_reflect_vec.y + line1.y);
    
    
    var ray = new Ray(wall_light.x, wall_light.y, 
                      Math.atan2((reflection.y-wall_light.y),(reflection.x-wall_light.x)),
                    1000);

      sketch.strokeWeight(1);
      sketch.stroke(0,0,0);
      sketch.setLineDash([5,5]);
      sketch.line(ray.px,ray.py,reflection.x,reflection.y);

      sketch.strokeWeight(6);
      sketch.stroke(0,128,0);
      sketch.point(reflection.x, reflection.y);

      sketch.setLineDash([0,0]);

    
  //   Comes from solving system of eqs: line = wall --> vt + p = us + q
    if (wall.x == 0) {
      var intersect_t = (line1.x - ray.px)/Math.cos(ray.dir);
    } else {
  
      var intersect_t = (wall.y * ((ray.px - line1.x)/wall.x) + line1.y - ray.py)/(Math.sin(ray.dir) - wall.y * Math.cos(ray.dir)/wall.x);
    }
    if (intersect_t < 0) {
      drawRay(ray);
      return;
    }
      ray.radius = intersect_t;
    
      var intersection = new Point(Math.cos(ray.dir) * ray.radius + ray.px, Math.sin(ray.dir) * ray.radius + ray.py);
      drawRay(ray);

      // strokeWeight(6);
      // stroke(0,0,255);
      // point(intersection.x, intersection.y);


      var reflect_scalar = 2 * (Math.cos(ray.dir) * wall.x + Math.sin(ray.dir) * wall.y)/(wall.x ** 2 + wall.y ** 2);
      var reflect_vec = new Point(reflect_scalar * wall.x - Math.cos(ray.dir), reflect_scalar * wall.y - Math.sin(ray.dir));

      var bounce = new Ray(intersection.x, intersection.y,
                          Math.atan2(reflect_vec.y, reflect_vec.x),
                          1000);


      if (intersect(bounce, new Point(wall_target.x, wall_target.y))) {
        bounce.radius = Math.abs((wall_target.x - bounce.px) * Math.cos(bounce.dir) +
                                (wall_target.y - bounce.py) * Math.sin(bounce.dir));
      }

      drawRay(bounce);

  }


  sketch.setLineDash = function(list) {
    sketch.drawingContext.setLineDash(list);
  }


  let wall_light;
  let wall_target;
  let line1;
  let line2;

  sketch.setup = function() {
    sketch.createCanvas(width, height);
    // let c = createCanvas(width,height);
    // c.parent('billiardSolved')

    wall_light = new Draggable(110, 430, 6, [255,0,0]);
    wall_target = new Draggable(400, 390, 6, [0,255,0]);
    line1 = new Draggable(300, 250, 6, [100,100,100]);
    line2 = new Draggable(200, 200, 6, [100,100,100]);
    
  }



  sketch.draw = function() {
    sketch.background(255);
    sketch.stroke(0);
    sketch.strokeWeight(1);
    sketch.setLineDash([0]);
    sketch.line(0,0,width,0);
    sketch.line(0,0,0,height);
    sketch.line(width,0,width,height);
    sketch.line(0,height,width,height); 
    
    var wall = new Point(line1.x-line2.x, line1.y-line2.y);
      
    sketch.line(-1000*(wall.x) + line1.x, -1000*(wall.y) + line1.y,
        1000*(wall.x) + line1.x, 1000*(wall.y) + line1.y);


    
    // var beam = new Ray(wall_light.x, wall_light.y, Math.PI/3, 1000);
    // drawRay(beam);
    
    
    if (wall_light.x < 5) {
        wall_light.x = 5
    }
    
    if (wall_light.x > 600 - 5) {
        wall_light.x = 600 - 5
    }
    
    if (wall_light.y < 5) {
        wall_light.y = 5
    }
    
    if (wall_light.y > 600 - 5) {
        wall_light.y = 600 - 5
    }

    
    if (wall_target.x < 5) {
        wall_target.x = 5
    }
    
    if (wall_target.x > 600 - 5) {
        wall_target.x = 600 - 5
    }
    
    if (wall_target.y < 5) {
        wall_target.y = 5
    }
    
    if (wall_target.y > 600 - 5) {
        wall_target.y = 600 - 5
    }
    

    if (line1.x < 5) {
        line1.x = 5
    }
    
    if (line1.x > 600 - 5) {
        line1.x = 600 - 5
    }
    
    if (line1.y < 5) {
        line1.y = 5
    }
    
    if (line1.y > 600 - 5) {
        line1.y = 600 - 5
    }

    
    if (line2.x < 5) {
        line2.x = 5
    }
    
    if (line2.x > 600 - 5) {
        line2.x = 600 - 5
    }
    
    if (line2.y < 5) {
        line2.y = 5
    }
    
    if (line2.y > 600 - 5) {
        line2.y = 600 - 5
    }
  



  //   Use cross product to see if both the light and target are on the same side; if either both positive or negative relative to wall, they'll multiply to a positive number
    
    if ((wall.x * (wall_light.y - line1.y) - (wall_light.x - line1.x) * wall.y) * 
        (wall.x * (wall_target.y - line1.y) - (wall_target.x - line1.x) * wall.y) > 0) {
      
      wallIntersect();

    }
    
    

    
    wall_light.over();
    wall_light.update();
    wall_light.show();
    wall_target.over();
    wall_target.update();
    wall_target.show();
    line1.over();
    line1.update();
    line1.show();
    line2.over();
    line2.update();
    line2.show();

    
  }

  sketch.mousePressed = function() {
    wall_light.pressed();
    wall_target.pressed();
    line1.pressed();
    line2.pressed();
  }

  sketch.mouseReleased = function() {
    wall_light.released();
    wall_target.released();
    line1.released();
    line2.released();
  }

}

let billiardSolved = new p5(s3, 'billiardSolved');