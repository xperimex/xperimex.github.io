const s9 = ( sketch ) => {

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
    
   
    function drawReflections(iterations, ray, pillars) {
    let current = ray;
    let done = false;  
    
    for (let i = 0; i < iterations; i++){
        // Check if ray intersects any points first
        for (let P of pillars) {
        if (intersect(current, P)) {
            // Use dot product to find projection length (unsure why Math.abs() is needed)
            current.radius = Math.abs((P.x - current.px) * Math.cos(current.dir) + (P.y - current.py) * Math.sin(current.dir)) / 1;

            drawRay(current);
            done = true;
            break;
        }
        }
        if (done) {break;}

        // Check intersection with left, right, top, and bottom walls
        var t = [[(0 - current.px)/Math.cos(current.dir), Math.PI - current.dir],
                [(width - current.px)/Math.cos(current.dir), Math.PI - current.dir],
                [(0 - current.py)/Math.sin(current.dir), -current.dir],
                [(height - current.py)/Math.sin(current.dir), -current.dir]];
        
        t.sort(function(a,b) {return a[0]-b[0]});

        for (let j = 0; j < t.length; j++) {
            if (t[j][0] <= 0.01) {
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

    // If distance between point and ray is small enough, consider it intersecting
    function intersect(ray, P) {
    var translated = [P.x - ray.px, P.y - ray.py];
    // distance = cross(translated, ray)/ray.magnitude; Uses cross product to get vertical distance from point to line since cross(A,B) = |A||B|sinØ;
    // ray.magnitude = 1 since using sin and cos directions that lie on unit circle
    var dist = (translated[0] * Math.sin(ray.dir) - translated[1] * Math.cos(ray.dir)) / 1
    // The smaller the threshold for intersecting, the closer it is to actual point geometry
    // This dictates the radius of the circle around a dot to deem an acceptable hit
    return (Math.abs(dist) <= 1.5);
    }


    function reflectTop(P) {
    return new Point(P.x, 2 * height - P.y);
    }

    function reflectBottom(P) {
    return new Point(P.x, 2 * 0 - P.y);
    }

    function reflectRight(P) {
    return new Point(2 * width - P.x, P.y);
    }

    function reflectLeft(P) {
    return new Point(2 * 0 - P.x, P.y);
    }


    function computeOptimalPillars(){
    // 4 pillars per each possible hit of the target: bounce off the top/bottom/left/right
    // walls before hitting the target.
    var pillars = [];
    // Reflected with identity, top wall, right wall, and top+right walls
    var reflected = [ target, 
                        reflectTop(target), 
                        reflectRight(target), 
                        reflectTop(reflectRight(target)) ]
    var lattice_dist = 2 * width;
    
    for (let P of reflected) {
        pillars.push(new Point( (P.x + assassin.x)/2, (P.y + assassin.y)/2) );
        pillars.push(new Point( ((P.x - lattice_dist) + assassin.x)/2, (P.y + assassin.y)/2) );
        pillars.push(new Point( (P.x + assassin.x)/2, ((P.y - lattice_dist) + assassin.y)/2) );
        pillars.push(new Point( ((P.x - lattice_dist) + assassin.x)/2, ((P.y - lattice_dist) + assassin.y)/2) );
    }
    
    for (let i = 0; i < pillars.length; i++) {
        while (pillars[i].x > width || pillars[i].x < 0 || pillars[i].y > height || pillars[i].y < 0 ) {
        if (pillars[i].x > width) {pillars[i] = reflectRight(pillars[i]);}
        if (pillars[i].x < 0) {pillars[i] = reflectLeft(pillars[i]);}
        if (pillars[i].y > height) {pillars[i] = reflectTop(pillars[i]);}
        if (pillars[i].y < 0) {pillars[i] = reflectBottom(pillars[i]);}
        }
    }
    
    return pillars;
    
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
    
    sketch.strokeWeight(6);
    sketch.stroke(0,0,255);
    sketch.point(current.x, current.y);
    
    }


    let assassin;
    let target;

    sketch.setup = function() {
      sketch.createCanvas(width,height);
    // let c = createCanvas(width,height);
    // c.parent("secureSquareIntro");
    // background(255);
    // line(0,0,width,0);
    // line(0,0,0,height);
    // line(width,0,width,height);
    // line(0,height,width,height);

    assassin = new Draggable(186, 309, 6, [255,0,0]);
    target = new Draggable(457, 409, 6, [0,255,0]);
    
    }


    // Data indicating user interactivity
    var track_mouse4 = true;

    sketch.keyPressed = function() {
    if (keyCode == 51) {
        track_mouse4 = !track_mouse4;
    }
    
    }

    sketch.draw = function() {
    sketch.background(255);
    sketch.stroke(0);
    sketch.strokeWeight(1);
    sketch.line(0,0,width,0);
    sketch.line(0,0,0,height);
    sketch.line(width,0,width,height);
    sketch.line(0,height,width,height); 
    
    
    if (track_mouse4) {
        mouse_angle4 = Math.atan2(sketch.mouseY - assassin.y, sketch.mouseX - assassin.x);
    } else {
        mouse_angle4 = mouse_angle4;
    }
    
    
    var pillars = computeOptimalPillars();



    if (assassin.x < 5) {
        assassin.x = 5
    }
    
    if (assassin.x > 600 - 5) {
        assassin.x = 600 - 5
    }
  
    if (assassin.y < 5) {
        assassin.y = 5
    }
  
    if (assassin.y > 600 - 5) {
        assassin.y = 600 - 5
    }
  
  
    if (target.x < 5) {
        target.x = 5
    }
  
    if (target.x > 600 - 5) {
        target.x = 600 - 5
    }
  
    if (target.y < 5) {
        target.y = 5
    }
  
    if (target.y > 600 - 5) {
        target.y = 600 - 5
    }

    
    // Shot
    // Interactive shot
    // var shot = new Ray(assassin.x, assassin.y, mouse_angle4, 100);
    // drawReflections(500, shot, pillars);

      // Shot distributed equiangular-ly
      for (let angle = 0; angle < 2 * Math.PI; angle += 2 * Math.PI/50){
        var shot = new Ray(assassin.x, assassin.y, angle, 100);
          drawReflections(500, shot, pillars);
      }
    
    
    for (let P of pillars) {
        drawPoint(P);
    }
    
    assassin.over();
    assassin.update();
    assassin.show();
    target.over();
    target.update();
    target.show();

    
    }

    sketch.mousePressed = function() {
    assassin.pressed();
    target.pressed();
    }

    sketch.mouseReleased = function() {
    assassin.released();
    target.released();
    }

}

let secureSquare = new p5(s9, 'secureSquare')