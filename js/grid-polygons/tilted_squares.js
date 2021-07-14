var initialData = {
    p1x: 30*-1,
    p1y: 30*-6,
    p2x: 30*6,
    p2y: 30*-2,
    p3x: 30*2,
    p3y: 30*5,
    p4x: 30*-5,
    p4y: 30*1
}


function render(data, ctx){
// Drawing grid
    var width = 10
    var height = 10
    var spacing = 30
    for(let i = -height; i < height; i++){
        for(let j = -width; j < width; j++){
            ctx.point(j*spacing, i*spacing, {affects:'none', fill:'black'})
        }
    }

// Drawing square
    p1 = [data.p1x, data.p1y] // Math.floor(data.p1x/spacing) * spacing nor bitwise operator ~~ doesn't work bruh moment
    p2 = [data.p2x, data.p2y]
    p3 = [data.p3x, data.p3y]
    p4 = [data.p4x, data.p4y]

    ctx.line(p1[0], p1[1], p2[0], p2[1], {affects:'none', 'stroke-width': 7, stroke:'red'})
    ctx.line(p2[0], p2[1], p3[0], p3[1], {affects:'none', 'stroke-width': 7, stroke:'red'})
    ctx.line(p3[0], p3[1], p4[0], p4[1], {affects:'none', 'stroke-width': 7, stroke:'red'})
    ctx.line(p4[0], p4[1], p1[0], p1[1], {affects:'none', 'stroke-width': 7, stroke:'red'})

    ctx.point(p1[0], p1[1], {affects:'none', fill:'red'})
    ctx.point(p2[0], p2[1], {affects:'none', fill:'red'})
    ctx.point(p3[0], p3[1], {affects:'none', fill:'red'})
    ctx.point(p4[0], p4[1], {affects:'none', fill:'red'})


}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#tilted_squares')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
