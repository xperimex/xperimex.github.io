var initialData = {
    time: 0
}

class Circle {
    constructor(x, y, radius, velocity, dir, color=null) {
        this.vx = velocity * Math.cos(dir);
        this.vy = velocity * Math.sin(dir);
        this.start_x = x;
        this.start_y = y;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
        this.dir = dir;
        this.color = 'blue'
        // this.color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    }

    update(dt) {
        this.x = this.x + this.vx * dt
        this.y = this.y + this.vy * dt

        if ((this.x + this.radius > canvas_width) || (this.x - this.radius < -canvas_width)){
            this.vx = -this.vx
        }
        if (this.y + this.radius > canvas_height || this.y - this.radius < -canvas_height){
            this.vy = -this.vy
        }
    }

    draw(ctx) {
        ctx.circle(this.x, this.y, this.radius, {affects: 'none', fill: 'none', stroke: this.color, 'stroke-width': 1.5 })
    }

  }
var print = console.log


var canvas_width = 327
var canvas_height = 245



var circles = []
for (var i = 0; i < 5; i += 1) {
    angle = Math.random() * 2 * Math.PI
    velocity = Math.random() * 200 + 50
    circles[i] = new Circle(Math.random() * 100, Math.random() * 100, Math.random() * 20 + 20, velocity, angle);
}



function f(x, y){
    var sum = 0
    for (let circle of circles){
        sum += (circle.radius**2)/((x - circle.x)**2 + (y - circle.y)**2 + .001)
    }
    return sum
}



function render(data, ctx) {

    
    var t = data.time
    var resolution = 75 + 1
    var increment = 2 * canvas_width/resolution 

// // Grid
//     for (let i = -canvas_width; i <= canvas_width + 1; i += increment){
//         ctx.line(-500, i, 500, i, {affects: 'none'})
//         ctx.line(i, -500, i, 500, {affects: 'none'})
//     }

    // ctx.point(0,0)
    // ctx.point(increment * (resolution-1)/2, 0)
    // ctx.point(0, increment * Math.round((resolution-1)/2 * canvas_height/canvas_width))
    // ctx.rect(0-increment/2,0-increment/2,increment,increment)

    for (let i = -increment * (resolution-1)/2; i <= increment * (resolution-1)/2; i += increment){
        for (let j = -increment * Math.round((resolution-1)/2 * canvas_height/canvas_width); j <= increment * Math.round((resolution-1)/2 * canvas_height/canvas_width); j += increment){
            // ctx.point(i,j)
            if (f(i, j) >= 1){
                ctx.rect(i - increment/2, j - increment/2, increment, increment, {affects:'none', fill:'green'})
            }
        }
    }



    for (let circle of circles) {
        circle.update(0.01)
        circle.draw(ctx)    
    }



}


var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#g9metatest')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();


setInterval(() => {
    initialData.time += .01
    canvas.setData(initialData)
}, 25)
