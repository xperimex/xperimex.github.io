const s4 = ( sketch2 ) => {

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
            if ((sketch2.mouseX - this.x)**2 + (sketch2.mouseY - this.y)**2 < 2 * (this.r / 2)**2) {
            this.rollover = true;
            } else {
            this.rollover = false;
            }
        }

        update() {
            // Adjust location if being dragged
            if (this.dragging) {
            this.x = sketch2.mouseX + this.offsetX;
            this.y = sketch2.mouseY + this.offsetY;
            }
        }

        show() {
            // stroke(0);
            sketch2.strokeWeight(this.r);
            // Different fill based on state
            if (this.dragging) {
            sketch2.stroke(this.color[0] - 100, this.color[1] - 100, this.color[2] - 100);
            } else if (this.rollover) {
            sketch2.stroke(this.color[0] - 50, this.color[1] - 50, this.color[2] - 50);
            } else {
            sketch2.stroke(this.color[0], this.color[1], this.color[2]);
            }
            sketch2.point(this.x, this.y);
        }

        pressed() {
            // Did I click on the rectangle?
            if ((sketch2.mouseX - this.x)**2 + (sketch2.mouseY - this.y)**2 <= 2 * (this.r / 2)**2) {
            this.dragging = true;
            // If so, keep track of relative location of click to corner of rectangle
            this.offsetX = this.x - sketch2.mouseX;
            this.offsetY = this.y - sketch2.mouseY;
            }
        }

        released() {
            // Quit dragging
            this.dragging = false;
        }
    }

    function drawRay(ray) {
        sketch2.stroke(0,0,0);
        sketch2.strokeWeight(1.3);
        sketch2.line(ray.px, ray.py, ray.px + ray.radius * Math.cos(ray.dir), ray.py + ray.radius * Math.sin(ray.dir));
    }




    function drawPoint(P) {
        // Reflect back in if out-of-bounds
        var current = P;
  
        sketch2.strokeWeight(6);
        sketch2.stroke(0,255,0);
        sketch2.point(current.x, current.y);
    
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
        
        // // t1 is for collisions INSIDE the circle, t2 is for collisions OUTSIDE the circle; inside the circle t2 is negative, choosing points behind our line
        
        // if ((P.x - Q.x)**2 + (P.y - Q.y)**2 < cradius**2) {
        //     t = t1;
        // } else {
        //     t = t2;
        // }
            
        // current.radius = t;
        
        
        // drawRay(current);
        
        
        var reflectPoint1 = new Point(current.px + t1 * Math.cos(current.dir), 
                                    current.py + t1 * Math.sin(current.dir));
        var reflectPoint2 = new Point(current.px + t2 * Math.cos(current.dir), 
                                    current.py + t2 * Math.sin(current.dir));


        drawPoint(reflectPoint1);
        drawPoint(reflectPoint2);


            
        // if (t != 1000) {
        //     var center_to_reflection = new Point(reflectPoint.x - Q.x, reflectPoint.y - Q.y);

        //     // Perpendicular to radial line/tangent to circle
        //     var reflectLine = new Point(-center_to_reflection.y, center_to_reflection.x);

        //     var reflectScalar = 2 * (V.x * reflectLine.x + V.y * reflectLine.y)/(reflectLine.x ** 2 + reflectLine.y ** 2);

        //     var reflectedVector = new Point(reflectScalar * reflectLine.x - V.x, reflectScalar * reflectLine.y - V.y);

        //     var reflectedRay = new Ray(reflectPoint.x, reflectPoint.y, Math.atan2(reflectedVector.y, reflectedVector.x), 10000);

        //     if (intersect(reflectedRay, new Point(target.x, target.y))) {
        //     reflectedRay.radius = current.radius = Math.abs((target.x - reflectedRay.px) * Math.cos(reflectedRay.dir) + (target.y - reflectedRay.py) * Math.sin(reflectedRay.dir)) / 1;
        //     }
            
        //     drawRay(reflectedRay);

        // }

    }


    let light;
    let target;
    let mirror_center;
    let mirror_rad;

    sketch2.setup = function() {
        sketch2.createCanvas(width,height);
        // background(255);
        // line(0,0,width,0);
        // line(0,0,0,height);
        // line(width,0,width,height);
        // line(0,height,width,height);

        light = new Draggable(160, 350, 6, [255,0,0]);
        target = new Draggable(485, 485, 6, [100,100,100]);
        mirror_center = new Draggable(300, 140, 6, [0,0,200]);
        mirror_rad = new Draggable(180, 140, 6, [0,0,200]);
        
    }

    var track_mouse = true;

    sketch2.keyPressed = function() {
        if (sketch2.keyCode == 50) {
            track_mouse = !track_mouse;
        }
    }


    sketch2.draw = function() {
        sketch2.background(255);
        sketch2.stroke(0);
        sketch2.strokeWeight(1);
        sketch2.line(0,0,width,0);
        sketch2.line(0,0,0,height);
        sketch2.line(width,0,width,height);
        sketch2.line(0,height,width,height); 
        
        var mradius = Math.sqrt((mirror_center.x - mirror_rad.x)**2 + (mirror_center.y - mirror_rad.y)**2)
        
        sketch2.strokeWeight(2.5);
        sketch2.stroke(0,0,200)
        sketch2.circle(mirror_center.x, 
                mirror_center.y, 
                2*mradius);

        if (mirror_center.dragging) {
            var dX = mirror_center.x - mirror_center.prevX
            var dY = mirror_center.y - mirror_center.prevY
            mirror_center.prevX = mirror_center.x
            mirror_center.prevY = mirror_center.y
            mirror_rad.x += dX
            mirror_rad.y += dY
        }
        
        if (track_mouse) {
            mouse_angle4 = Math.atan2(sketch2.mouseY - light.y, sketch2.mouseX - light.x);
        } else {
            mouse_angle4 = mouse_angle4;
        }

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
        
    
        if (mirror_center.x < 5) {
            mirror_center.x = 5
        }
        
        if (mirror_center.x > 600 - 5) {
            mirror_center.x = 600 - 5
        }
        
        if (mirror_center.y < 5) {
            mirror_center.y = 5
        }
        
        if (mirror_center.y > 600 - 5) {
            mirror_center.y = 600 - 5
        }
    
        
        if (mirror_rad.x < 5) {
            mirror_rad.x = 5
        }
        
        if (mirror_rad.x > 600 - 5) {
            mirror_rad.x = 600 - 5
        }
        
        if (mirror_rad.y < 5) {
            mirror_rad.y = 5
        }
        
        if (mirror_rad.y > 600 - 5) {
            mirror_rad.y = 600 - 5
        }
      
    
        sketch2.strokeWeight(1);
        sketch2.stroke(0,0,0)
        sketch2.line(light.x - 1000*Math.cos(mouse_angle4), light.y - 1000*Math.sin(mouse_angle4),
                     light.x + 1000*Math.cos(mouse_angle4), light.y + 1000*Math.sin(mouse_angle4))
 

        // var proj = (mirror_center.x - light.x) * Math.cos(mouse_angle4) + (mirror_center.y - light.y) * Math.sin(mouse_angle4);
        // proj = new Point(light.x + proj*Math.cos(mouse_angle4), light.y + proj*Math.sin(mouse_angle4))
        // // sketch2.stroke(0,0,255);
        // // sketch2.line(light.x,light.y,proj.x,proj.y);

        // var cross = (mirror_center.x - light.x) * Math.sin(mouse_angle4) - Math.cos(mouse_angle4) * (mirror_center.y - light.y);


        // if (Math.abs(cross) <= mradius) {
        //     sketch2.stroke(0,255,0);
        // } else {
        //     sketch2.stroke(255,0,0);
        // }
        // sketch2.line(mirror_center.x, mirror_center.y, proj.x, proj.y);

        circleIntersection(mirror_center.x, mirror_center.y, mradius, new Ray(light.x, light.y, mouse_angle4, 1000));


        
        light.over();
        light.update();
        light.show();
        mirror_rad.over();
        mirror_rad.update();
        mirror_rad.show();
        mirror_center.over();
        mirror_center.update();
        mirror_center.show();

    
    }

    sketch2.mousePressed = function() {
        light.pressed();
        mirror_rad.pressed();
        mirror_center.pressed();
    }

    sketch2.mouseReleased = function() {
        light.released();
        mirror_rad.released();
        mirror_center.released();
    }
}

let basicRaytrace = new p5(s4, 'basicRaytrace')