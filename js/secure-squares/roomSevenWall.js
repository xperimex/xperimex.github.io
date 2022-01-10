const s6 = ( sketch )  => {
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


    function reflect(mirror, P) {
    var start = mirror[0];
    var end = mirror[1];
    var wall = new Point(start.x-end.x, start.y-end.y);
    
    
    var point_reflect_scalar = 2 * ((P.x - start.x) * wall.x + (P.y - start.y) * wall.y)/(wall.x ** 2 + wall.y ** 2);
    
    var point_reflect_vec = new Point(point_reflect_scalar * wall.x - (P.x - start.x), point_reflect_scalar * wall.y - (P.y - start.y));

    var reflection = new Point(point_reflect_vec.x + start.x, point_reflect_vec.y + start.y);
    
    return reflection;

    }

    function wallIntersect() {
    
    // var reflection = wall_target;
    reflection = wall_target;
    
    var temp_left = [new Point(wall_left[0].x, wall_left[0].y), 
                    new Point(wall_left[1].x, wall_left[1].y)];
    
    for (let x = 0; x < ref_coords.x; x++) {
        reflection = reflect(temp_left, reflection);
        temp_left[0].x -= square_dim;
        temp_left[1].x -= square_dim
        
    }
    
    var temp_top = [new Point(wall_top[0].x, wall_top[0].y), 
                    new Point(wall_top[1].x, wall_top[1].y)];
    
    for (let y = 0; y < ref_coords.y; y++) {
        reflection = reflect(temp_top, reflection);
        temp_top[0].y -= square_dim;
        temp_top[1].y -= square_dim;

    }

    var mirror_ray = new Ray(wall_light.x, wall_light.y, 
                        Math.atan2((reflection.y-wall_light.y),(reflection.x-wall_light.x)),
                    1000);

    sketch.strokeWeight(1);
    sketch.stroke(0,0,0);
    sketch.setLineDash([5,5]);
    sketch.line(mirror_ray.px,mirror_ray.py,reflection.x,reflection.y);

    sketch.strokeWeight(6);
    sketch.stroke(0,128,0);
    // point(reflection.x, reflection.y);
    reflected_target.x = reflection.x;
    reflected_target.y = reflection.y;

    sketch.setLineDash([0,0]);
    
    
    sketch.strokeWeight(1);
    sketch.stroke(0,0,0);

    
    let current = mirror_ray;
    
    for (let i = 0; i < 100; i++){
        // Check if ray intersects any points first
        if (intersect(current, wall_target)) {
        // Use dot product to find projection length (unsure why Math.abs() is needed)
        current.radius = Math.abs((wall_target.x - current.px) * Math.cos(current.dir) + (wall_target.y - current.py) * Math.sin(current.dir)) / 1;

        drawRay(current);
        break;
        }

        // Check intersection with left, right, top, and bottom walls
        var t = [[(wall_left[0].x - current.px)/Math.cos(current.dir), Math.PI - current.dir],
                [(wall_right[0].x - current.px)/Math.cos(current.dir), Math.PI - current.dir],
                [(wall_top[0].y - current.py)/Math.sin(current.dir), -current.dir],
                [(wall_bottom[0].y - current.py)/Math.sin(current.dir), -current.dir]];
        
    //     Sort from least to greatest t value
        t.sort(function(a,b) {return a[0]-b[0]});

        for (let j = 0; j < t.length; j++) {
            if (t[j][0] <= 0.01) {  // Only want smallest positive value
                t.splice(j, 1); 
                j--;
            }
        }
        
        current.radius = t[0][0];
        drawRay(current);

        current.px += t[0][0] * Math.cos(current.dir);
        current.py += t[0][0] * Math.sin(current.dir);
        current.dir = t[0][1];

    }

    }


    sketch.setLineDash = function(list) {
        sketch.drawingContext.setLineDash(list);
    }



    let wall_light;
    let wall_target;
    let line1;
    let line2;
    let grid_size = 7;
    let square_dim = (600-2*20)/grid_size;

    let reflected_target;
    // let ref_coords = new Point(2,3);
    let ref_coords;


    let wall_left;
    let wall_top;
    let wall_right;
    let wall_bottom;


    sketch.setup = function() {
    sketch.createCanvas(width,height);

    wall_light = new Draggable(544, 569, 6, [255,0,0]);
    wall_target = new Draggable(560, 517, 6, [0,255,0]);
    reflected_target = new Draggable(240,163,6,[0,128,0]);
      
    line1 = new Point((600 - grid_size*square_dim)/2 + (grid_size-1)*square_dim, 
                        (600 - grid_size*square_dim)/2);
    
    line2 = new Point((600 - grid_size*square_dim)/2 + (grid_size-1)*square_dim, 
                        600 - (600-grid_size*square_dim)/2);

    
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
    
    
    ref_coords = new Point(grid_size - Math.ceil((reflected_target.x - 20)/square_dim), 
                            grid_size - Math.ceil((reflected_target.y - 20)/square_dim));
    
    var wall = new Point(line1.x-line2.x, line1.y-line2.y); // Guiding wall vector based on left wall
    
    //   Drawing square + reflection
    
    wall_left = [new Point(0*(wall.x) + line1.x, 0*(wall.y) + line1.y),
                new Point(0*(wall.x) + line1.x, -1*(wall.y) + line1.y)]

    wall_top = [new Point(0*(wall.x) + line1.x - (grid_size-1)*square_dim, (600-grid_size*square_dim)/2 + (grid_size-1)*square_dim),
                new Point(0*(wall.x) + line1.x + square_dim, (600-grid_size*square_dim)/2 + (grid_size-1)*square_dim)]

    wall_bottom = [new Point(0*(wall.x) + line1.x - (grid_size-1)*square_dim, -1*(wall.y) + line1.y),
                    new Point(0*(wall.x) + line1.x + square_dim, -1*(wall.y) + line1.y)]

    wall_right = [new Point(0*(wall.x) + line1.x + square_dim, 0*(wall.y) + line1.y),
                    new Point(-1*(wall.x) + line1.x + square_dim, -1*(wall.y) + line1.y)];

    
    for (let i = 0; i < grid_size/2; i++){
        sketch.stroke(255,200,0)
        sketch.line(wall_left[0].x - 2*i*square_dim, wall_left[0].y,
            wall_left[1].x - 2*i*square_dim, wall_left[1].y); // wall left
        
        sketch.stroke(255,0,255);
        sketch.line(wall_top[0].x, wall_top[0].y - 2*i*square_dim,
            wall_top[1].x, wall_top[1].y - 2*i*square_dim); // wall top

    }
    
    for (let i = 0; i < grid_size/2 + (grid_size+1) % 2; i++){
        sketch.stroke(0,255,255);
        sketch.line(wall_bottom[0].x, wall_bottom[0].y - 2*i*square_dim,
            wall_bottom[1].x, wall_bottom[1].y - 2*i*square_dim); // wall bottom
        
        sketch.stroke(100,100,100);  
        sketch.line(wall_right[0].x - 2*i*square_dim, wall_right[0].y,
            wall_right[1].x - 2*i*square_dim, wall_right[1].y); // wall right


    }
    
    //   Interactive boundaries
    
    if (wall_light.x < wall_left[0].x + 5) {
        wall_light.x = wall_left[0].x + 5
    }
    
    if (wall_light.x > wall_right[0].x - 5) {
        wall_light.x = wall_right[0].x - 5
    }
    
    if (wall_light.y < wall_top[0].y + 5) {
        wall_light.y = wall_top[0].y + 5
    }
    
    if (wall_light.y > wall_bottom[0].y - 5) {
        wall_light.y = wall_bottom[0].y - 5
    }

    
    if (wall_target.x < wall_left[0].x + 5) {
        wall_target.x = wall_left[0].x + 5
    }
    
    if (wall_target.x > wall_right[0].x - 5) {
        wall_target.x = wall_right[0].x - 5
    }
    
    if (wall_target.y < wall_top[0].y + 5) {
        wall_target.y = wall_top[0].y + 5
    }
    
    if (wall_target.y > wall_bottom[0].y - 5) {
        wall_target.y = wall_bottom[0].y - 5
    }
    
    
    //   Makes sure the interactive reflection point is contained in grid
    ref_coords.x = Math.min(ref_coords.x, grid_size-1);
    ref_coords.y = Math.min(ref_coords.y, grid_size-1);
    
    
    
    wallIntersect();


    
    wall_light.over();
    wall_light.update();
    wall_light.show();
    wall_target.over();
    wall_target.update();
    wall_target.show();
    reflected_target.show();
    reflected_target.over();
    reflected_target.update(); // Putting .update() last gives that "snapping into place" effect

    
    }

    sketch.mousePressed = function() {
    wall_light.pressed();
    wall_target.pressed();
    reflected_target.pressed();

    }

    sketch.mouseReleased = function() {
    wall_light.released();
    wall_target.released();
    reflected_target.released();
    }

}

let roomSevenWall = new p5(s6, 'roomSevenWall')