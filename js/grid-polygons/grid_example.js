var initialData = {
    
}


function render(data, ctx){
    var width = 10
    var height = 10
    var spacing = 30

    for(let i = -height; i < height; i++){
        for(let j = -width; j < width; j++){
            ctx.point(j*spacing, i*spacing, {affects:'none', fill:'black'})
        }
    }
}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#grid_example')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
