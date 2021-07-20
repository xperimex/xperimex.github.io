var initialData = {
    
}


function render(data, ctx){
    var width = 10
    var height = 20
    var spacing = 30
    ctx.line(0,500,0,-500,{affects:'none', stroke:'grey'})

    for(let i = -height; i < height; i++){
        for(let j = -(width+1); j < -1; j++){
            if (i % 2 == 0){
                var offset = 0 + 15
            }
            else {
                var offset = spacing/2 + 15
            }
            ctx.point(j*spacing + offset + 10, i*spacing*Math.sqrt(3)/2, {affects:'none', fill:'black'})
            if (j > -width + 1){
                ctx.line(j*spacing + offset + 10, i*spacing*Math.sqrt(3)/2, spacing * Math.cos(2 * Math.PI/3) + j*spacing + offset + 10, spacing * Math.sin(2 * Math.PI/3) + i*spacing*Math.sqrt(3)/2, {affects:'none'})
                ctx.line(j*spacing + offset + 10, i*spacing*Math.sqrt(3)/2, spacing * Math.cos(3 * Math.PI/3) + j*spacing + offset + 10, spacing * Math.sin(3 * Math.PI/3) + i*spacing*Math.sqrt(3)/2, {affects:'none'})
                ctx.line(j*spacing + offset + 10, i*spacing*Math.sqrt(3)/2, spacing * Math.cos(4 * Math.PI/3) + j*spacing + offset + 10, spacing * Math.sin(4 * Math.PI/3) + i*spacing*Math.sqrt(3)/2, {affects:'none'})
            }
            if (j<-2){
                ctx.line(j*spacing + offset + 10, i*spacing*Math.sqrt(3)/2, spacing * Math.cos(1 * Math.PI/3) + j*spacing + offset + 10, spacing * Math.sin(1 * Math.PI/3) + i*spacing*Math.sqrt(3)/2, {affects:'none'})
                ctx.line(j*spacing + offset + 10, i*spacing*Math.sqrt(3)/2, spacing * Math.cos(5 * Math.PI/3) + j*spacing + offset + 10, spacing * Math.sin(5 * Math.PI/3) + i*spacing*Math.sqrt(3)/2, {affects:'none'})
                ctx.line(j*spacing + offset + 10, i*spacing*Math.sqrt(3)/2, spacing * Math.cos(6 * Math.PI/3) + j*spacing + offset + 10, spacing * Math.sin(6 * Math.PI/3) + i*spacing*Math.sqrt(3)/2, {affects:'none'})
            }


        }
    }

    var hex_spacing = 30
    var x_space = Math.sqrt(2 * Math.pow(hex_spacing, 2) * (1-Math.cos(2/3 * Math.PI)))
    var total_x_off = -13
    var total_y_off = 6
    for(let i = -height; i < height; i++){
        for(let j = 1; j < width; j++){
            if (Math.abs(i) % 4 == 0) {
                var x_offset = -x_space/2
                var y_offset = hex_spacing/2
                ctx.line(j*x_space + x_offset + total_x_off + 8, -height*hex_spacing + y_offset + total_y_off, hex_spacing*Math.cos(Math.PI/2 + 1 * 4 * Math.PI/3)+j*x_space + x_offset + total_x_off + 8, hex_spacing*Math.sin(Math.PI/2 + 1 * 4 * Math.PI/3) -height*hex_spacing + y_offset + total_y_off, {affects:'none'})
                ctx.line(j*x_space + x_offset + total_x_off + 8, -height*hex_spacing + y_offset + total_y_off, hex_spacing*Math.cos(Math.PI/2 + 3 * 4 * Math.PI/3)+j*x_space + x_offset + total_x_off + 8, hex_spacing*Math.sin(Math.PI/2 + 3 * 4 * Math.PI/3) -height*hex_spacing + y_offset + total_y_off, {affects:'none'})
                if (j>1 && j<7){
                    ctx.line(j*x_space + x_offset + total_x_off + 8, -height*hex_spacing + y_offset + total_y_off, hex_spacing*Math.cos(Math.PI/2 + 2 * 4 * Math.PI/3)+j*x_space + x_offset + total_x_off + 8, hex_spacing*Math.sin(Math.PI/2 + 2 * 4 * Math.PI/3) -height*hex_spacing + y_offset + total_y_off, {affects:'none'})
                }
            }
            else if (Math.abs(i) % 2 == 0){
                var x_offset = x_space/2
                var y_offset = hex_spacing/2
                if (j<6){
                    ctx.line(j*x_space + x_offset + total_x_off + 8, -height*hex_spacing + y_offset + total_y_off, hex_spacing*Math.cos(Math.PI/2 + 1 * 4 * Math.PI/3)+j*x_space + x_offset + total_x_off + 8, hex_spacing*Math.sin(Math.PI/2 + 1 * 4 * Math.PI/3) -height*hex_spacing + y_offset + total_y_off, {affects:'none'})
                }    
                ctx.line(j*x_space + x_offset + total_x_off + 8, -height*hex_spacing + y_offset + total_y_off, hex_spacing*Math.cos(Math.PI/2 + 2 * 4 * Math.PI/3)+j*x_space + x_offset + total_x_off + 8, hex_spacing*Math.sin(Math.PI/2 + 2 * 4 * Math.PI/3) -height*hex_spacing + y_offset + total_y_off, {affects:'none'})
                ctx.line(j*x_space + x_offset + total_x_off + 8, -height*hex_spacing + y_offset + total_y_off, hex_spacing*Math.cos(Math.PI/2 + 3 * 4 * Math.PI/3)+j*x_space + x_offset + total_x_off + 8, hex_spacing*Math.sin(Math.PI/2 + 3 * 4 * Math.PI/3) -height*hex_spacing + y_offset + total_y_off, {affects:'none'})
            }
            else{
                var x_offset = 0
                var y_offset = hex_spacing

            }
            ctx.point(j*x_space + x_offset + total_x_off + 8, -height*hex_spacing + y_offset + total_y_off, {affects:'none', fill:'black'})
        }
        total_x_off += x_offset
        total_y_off += y_offset
    }
}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#trihex_grid')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
