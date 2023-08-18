var initialData = {
    
}


function render(data, ctx){


    function drawTree(tree, x0, y0, tree_width, spacing){
   
        var level = tree.length
        ctx.point(x0,y0)
            
        if (level == 0){ return }
    
    
        // for (let i = 1; i <= level; i++) {
            
        //     ctx.line(x0, y0,
        //              i * tree_width/(level + 1) + x0  - tree_width/2, y0 + spacing)
            
        //     drawTree(tree[i-1], i * tree_width/(level + 1) + x0  - tree_width/2, 
        //              y0 + spacing, 
        //              tree_width/(level + 1), 
        //              spacing)
        // }


        for (let i = 1; i <= level; i++) {
            
            // center of each level = ((level+1)*tree_width/level*.5)
            // each subtree in each level is naturally spaced out by a distance of tree_width/level

            ctx.line(x0, y0,
                     i * tree_width/(level) + x0 - ((level+1)*tree_width/level*.5), y0 + spacing)
            
            drawTree(tree[i-1], 
                     i * tree_width/(level) + x0 - (level+1)*tree_width/level*.5, 
                     y0 + spacing, 
                     tree_width/(level), 
                     spacing)
        }
    
    }
    
    function find_max_depth(array){
        
        var max_depth = 0

        if (array.length != 0) {
            for (i = 0; i < array.length; i++) {
                var depth = find_max_depth(array[i]) + 1
                if (depth > max_depth) {max_depth = depth}
            }
        } else {
            return 0
        }

        return max_depth

    }




    var padding = 10
    var tree_width = ctx.width - 2 * padding
    // var spacing = 100
    // var tree = [[[[],[]]], [[], []], [[]]]
    var tree = [[[],[[[]],[]]],
                [[],[[],[[],[]]],[],[[],[],[]],[]],
                [[[],[]],[[]],[[]]]]

    var max_depth = find_max_depth(tree)

    var spacing = (ctx.height - 2*padding)/(max_depth)


    drawTree(tree, 0, -ctx.height/2 + padding, tree_width, spacing)




}

var canvas = g9(initialData, render)
    .align('center', 'center')
    .insertInto('#example_tree')

canvas.node.style.height = '500px';
canvas.node.style.width = '100%';
canvas.resize();
// canvas.resize()
