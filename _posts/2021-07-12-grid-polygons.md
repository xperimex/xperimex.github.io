---START_METADATA---
{
  "title": "Rotating Regulars and Greedy Grids",
  "author": "Adi Mittal",
  "summary": "Why grids love squares so much",
  "tags":[
    "me"
  ]
}


---END_METADATA---
<script src='https://cdnjs.cloudflare.com/ajax/libs/g9/1.0.16/g9.js'></script>
<script src="https://unpkg.com/mathjs/lib/browser/math.js"></script>

We are all familiar with the idea of a grid. From making up the small pixels on our screen, to the compact city maps of New York, grids pop up everywhere due to the kind nature of the innate squares built into them; grids are extremely space efficient packing in squares above and below each other while still maintaining a sense of order. But, why do we grids love squares so much? Today, we'll look at a nice proof for why the square is the only regular polygon that can fit in a grid. 

## Tilted Thoughts and Grid Properties
First, let's define what a grid is for us. A **grid** is a set of lattice points whose cardinal neighbors (up, down, left, right) are all equidistant from the given point. That's a lot more complicated than it sounds, but all you need to think of is a generic, **square grid** like you would find on a piece of graph paper.

<!-- <div id="grid_example" style="flex: 2; position: relative;"></div>
<script src="/js/grid-polygons/grid_example.js"></script> -->

No need to worry about any triangular or hexagonal grids (thank you organic chemistry). Obviously, squares fit in our grid, but how can any other regular polygon possibly fit? Well, remember, we don't necessarily need to only draw horizontal or vertical lines: we can easily draw tilted squares too.

<div id="tilted_squares" style="flex: 2; position: relative;"></div>
<script src="/js/grid-polygons/tilted_squares.js"></script>

Now that you know about tilted squares, here's nice puzzle to think about: given an $n \times n$ square grid, how many different squares can you draw? Check the [footnote](#solution-to-squares-in-a-grid-puzzle) below if you want a solution, but just drawing it out will likely give you the intuition you need. Anyways, this tilted square reveals an important property of grids: rotating a lattice point by 90° around another point gives you a new, different lattice point. You can see this nicely with complex numbers. If you have a lattice point $a+bi$, a 90° rotation is equivalent to multiplying our number by $i\rightarrow i \cdot (a+bi) = -b + ai$. The coefficients remain integers, so if $(a,b)$ is a point, so is $(-b,a)$. 

Another (less relevant for us) property is that if you know a line segment defined by 2 lattice points, and you are given a 3rd lattice point, you can find a 4th one by drawing a second line segment from your 3rd point (think of it like vector addition: if we know a vector and a point, we can find a new point by adding that vector the point). For the purpose of this post, though, just remember the former property.

## Rotating Regular Polygons
The proof that only regular polygon that a grid can define is a square is very simple, but very clever. Just as an example, we'll use a pentagon for demonstrative purposes. Let's assume that our regular $p$-gon (in our case, pentagon; I use $p$-gon due to poor variable naming later) exists in the grid.

<div id="pentagon" style="flex: 2; position: relative;"></div>
<script src="/js/grid-polygons/pentagon.js"></script>

If these 5 points that define our pentagon exists in the grid, then we should be able to generate 5 new, totally valid grid points by rotating them 90° around their neighbor.

<div id="pentagon_rotate" style="flex: 2; position: relative;"></div>
<script src="/js/grid-polygons/pentagon_rotate.js"></script>

Notice, though, that we just made another, smaller regular pentagon! ...Or did we? We can prove this quite simply geometrically (trust me, drawing it out and symmetry will guide you all the way through), but I don't want to draw anything right now so instead I'll show you a much more needlessly complicated, linear algebra approach to it (this will, though, give us specific numbers at the end of it). If you can accept this red pentagon is in fact a regular pentagon, just [skip ahead](#skip), but for now I'll present the proof. 

If we can show that the new red pentagon lies on a parametric circle, we can then show that we our 5 angles to generate the original, black pentagon, maps to the new red pentagon. The way we generated our red pentagon was by taking a black point $v$, rotating it around its neighbor $t$ by 90° to land at $v'$ as seen above. We can write this transformation as a product of 3 matrices: translating by $-t$, rotating 90°, then translating back by $+t$ (in a linear transformation, the origin remains fixed so the translations are our way to rotate about any point we want). If $v$ is a point of the form $(\cos\frac{2\pi n}{5}, \sin\frac{2\pi n}{5})$, then $t$ is the point $(\cos\frac{2\pi (n-1)}{5}, \sin\frac{2\pi (n-1)}{5})$ just as definition of being a pentagon on the unit circle, and $v$ and $t$ being neighboring points. So, our matrix equation of going from $v\rightarrow v'$ is

<center>
$
\begin{bmatrix}
1 & 0 & \cos\frac{2\pi (n-1)}{5} \\\
0 & 1 & \sin\frac{2\pi (n-1)}{5} \\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
0 & -1 & 0 \\\
1 & 0 & 0 \\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & -\cos\frac{2\pi (n-1)}{5} \\\
0 & 1 & -\sin\frac{2\pi (n-1)}{5} \\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
\cos\frac{2\pi n}{5} \\\
\sin\frac{2\pi n}{5} \\\
1
\end{bmatrix}
= v'
$
</br></br>
$
\begin{bmatrix}
0 & -1 & \sin\frac{2\pi (n-1)}{5} + \cos\frac{2\pi (n-1)}{5}  \\\
1 & 0 & \sin\frac{2\pi (n-1)}{5} - \cos\frac{2\pi (n-1)}{5} \\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
\cos\frac{2\pi n}{5} \\\
\sin\frac{2\pi n}{5} \\\
1
\end{bmatrix}
= v'
$
</br></br>
$
\begin{bmatrix}
0 & -1 & \sqrt{2}\cos(\frac{2\pi (n-1)}{5} - \frac{\pi}{4})  \\\
1 & 0 & \sqrt{2}\sin(\frac{2\pi (n-1)}{5} - \frac{\pi}{4}) \\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
\cos\frac{2\pi n}{5} \\\
\sin\frac{2\pi n}{5} \\\
1
\end{bmatrix}
= v'
$
</center>

Unfortunately, this transformation matrix alone can't show us our net tranform is purely a rotation and scaling due to that third column (which indicates a translation). So, we will have to look at the individual components of $v'$.

<center>
$
\begin{bmatrix}
0 & -1 & \sqrt{2}\cos(\frac{2\pi (n-1)}{5} - \frac{\pi}{4})  \\\
1 & 0 & \sqrt{2}\sin(\frac{2\pi (n-1)}{5} - \frac{\pi}{4}) \\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
\cos\frac{2\pi n}{5} \\\
\sin\frac{2\pi n}{5} \\\
1
\end{bmatrix}
= v'
$
</br></br>
$
\begin{bmatrix}
-\sin\frac{2\pi n}{5} + \sqrt{2}\cos(\frac{2\pi (n-1)}{5} - \frac{\pi}{4}) \\\
\cos\frac{2\pi n}{5} + \sqrt{2}\sin(\frac{2\pi (n-1)}{5} - \frac{\pi}{4}) \\\
1
\end{bmatrix}
= v'
$
</center>

If $v'$ truly is just a rotated and scaled version of a vertex of our original pentagon, then it follows that any $v'$ should lie on a circle, just as $v$ does. So, we can use the Pythagorean identity that $(r\cos(\theta))^2 + (r\sin(\theta))^2 = r^2$ which implies that if we square the $x$ and $y$ components of $v'$ and add them together, we should get a constant. For simplicity in writing, we'll use $\alpha = \frac{2\pi (n-1)}{5} - \frac{\pi}{4}$.

<center>
$
(-\sin\frac{2\pi n}{5} + \sqrt{2}\cos \alpha)^2 + (\cos\frac{2\pi n}{5} + \sqrt{2}\sin \alpha)^2 =
$
</br>
$
\cos^2 \frac{2\pi n}{5} + \sin^2 \frac{2\pi n}{5} + 2\cos^2 \alpha + 2\sin^2 \alpha + 2\sqrt{2}(\cos\frac{2\pi n}{5}\sin \alpha - \sin\frac{2\pi n}{5}\cos \alpha)
$
</center>

This may look like a pain to work with, but just grouping like terms and trigonometric identities clean this up real fast.

<center>
$\begin{align}
1 + 2 + 2\sqrt{2}\sin(\alpha - \frac{2\pi n}{5}) & = \\
\newline
3 + 2\sqrt{2}\sin(-\frac{2\pi}{5} - \frac{\pi}{4}) & = \\
\newline
3 - 2\sqrt{2}\sin(\frac{2\pi}{5} + \frac{\pi}{4}) & \approx 0.479852979
\end{align}$
</center>

So it does simplify to a constant! This constant represents the radius$^2$ of the new circle the red pentagon lies on (based on the black pentagon's unit circle). Meaning, the radius of the circle the red pentagon lies on is $\sqrt{0.479852979} \approx 0.692714211$. To find the angle it is rotated by, we just find how far the first vertex ($n=0$) is rotated:

<center>
$\tan^{-1}(\frac{1 - \sqrt{2}\sin(\frac{2\pi}{5} + \frac{\pi}{4})}{\sqrt{2}\cos(\frac{2\pi}{5} + \frac{\pi}{4})}) + \pi \approx 3.526465492$
</center>

What's great about our linear algebra approach too is that it quickly generalizes for any regular $p$-gon! The only part of the result impacted by our choice of a pentagon is any appearance of $\frac{2\pi}{5}$. So if you wanted to do it for any regular $p$-gon, all you do is replace $\frac{2\pi}{5}$ with $\frac{2\pi}{p}$.
<div id="skip">


----------

To get back to the original point though, we have shown that a vertex $v$ on the unit circle under our specific transformation maps to a vertex $v'$ on a scaled, rotated circle (and because it was all linear transformations, the scalings and rotations are uniform around the origin), which implies that our black pentagon maps to another regular pentagon in red. Since those vertices in red are valid points in the grid since we found them with 90° rotations of other, valid lattice points, we can find yet _another_ set of 5 valid lattice points by doing the same operation again of rotating each vertex 90° around its neighbor.

<div id="pentagon_rotate2" style="flex: 2; position: relative;"></div>
<script src="/js/grid-polygons/pentagon_rotate2.js"></script>

With our previous logic, we know that this too is a regular pentagon, which again, allows us to find 5 _new_ lattice points in our grid by doing the same operation of rotating around a neighbor by 90°... And again... And again... For as many new lattice points and pentagons as we want.

<div id="pentagon_rotateF" style="flex: 2; position: relative;"></div>
<script src="/js/grid-polygons/pentagon_rotateF.js"></script>
<center style="color: #666;">
<p>Here are 15 nested pentagons; try dragging any of the vertices to zoom in and you can see they are just smaller, rotated regular pentagons.</p>
</center>

Ok, but why do we care? Remember, our grid is made up of a set of discrete points with some distance between each point. But, since we can always find 5 new lattice points that make a pentagon as small as we want by repeating the 90° rotation, that means that we can find a pentagon who's radius/sides are <i>smaller</i> than our grid point distances themselves. How do you draw a pentagon smaller than the space between points itself? It would be like trying to draw between the pixels of the screen you're reading this on, which is obviously impossible. So by contradiction, our initial assumption that a pentagon can exist in the grid must have been false. $\blacksquare$

While that shows it's impossible to have a pentagon in the grid, we still want to show that <i>only</i> the square can exist in the grid. Recall our formula for the radius of the bounding circle of our pentagon (if you skipped ahead originally go back to see where this comes from):

<center>
$r(p) = \sqrt{3 - 2\sqrt{2}\sin(\frac{2\pi}{p} + \frac{\pi}{4})}$
</center>

Since we were working with the example of a pentagon, originally $p=5$ for us. The reason why our pentagons kept shrinking is because $r < 1$ for $p=5$. We need to show all regular polygons except the square results in a shrinking radius. In other words, we need to show that $r<1$ for all $p>4$. First, let's note the value of $p=4$ to start:

<center>
$\begin{align}
r(4) & = \sqrt{3 - 2\sqrt{2}\sin(\frac{2\pi}{4} + \frac{\pi}{4})} \\
<!-- \newline -->
& = \sqrt{3 - 2\sqrt{2}\cdot\frac{\sqrt{2}}{2}} \\
<!-- \newline -->
& = \sqrt{3 - 2} \\
<!-- \newline -->
& = 1
\end{align}$
</center>

This is why the square works out as it never shrinks as a 90° rotation around neighbors just maps one vertex to another already existing one. Now, let's examine the term $\sin(\frac{2\pi}{p} + \frac{\pi}{4})$. As $p$ gets larger than 4, the angle we're taking the $\sin$ of is not only bounded to quadrant 1, but is also getting smaller and closer to $\frac{\pi}{4}$, but never quite equal. This results in a $\sin$ value slightly larger than $\frac{\sqrt{2}}{2}$, which makes the difference $3-2\sqrt{2}\sin(\frac{2\pi}{p} + \frac{\pi}{4}) < 1$. Here's the graph of $r(p)$ as well as the bound of $r=1$.

</br></br>
<img src="/img/grid-polygons/regPolygonVRad2.png">
</br>

Some might look at this graph and see an obvious flaw: what about the case of the equilateral triangle though ($p=3$)? Yes, technically it has an $r>1$ and this does actually result in it expanding out.

<div id="triangle_rotate" style="flex: 2; position: relative;"></div>
<script src="/js/grid-polygons/triangle_rotate.js"></script>

If the points expand out, we can't really say much about it existing in the grid or not since we only have a minimum bound on the distance between lattice points. But, there was a second property I glossed over regarding grids:

> If you know a line segment defined by 2 lattice points, and you are given a 3rd lattice point, you can find a 4th one by drawing a second line segment from your 3rd point.

This property allows the equilateral triangle to be turned into the equivalent case of a hexagon, leading it to a case where $p>4$ and hence an $r<1$, indicating that an equilateral triangle, too, is impossible to draw within the grid.

Another neat little fact is the bend at $p=8$; an octagon has the smallest bounding radius for the 90° neighbor rotations (since that makes the $\sin$ term go to 1). But after that, $r(p)$ starts to increase. How can we know it won't equal or exceed 1? Well, no matter how big $p$ is, $\frac{2\pi}{p} + \frac{\pi}{4}$ will always be greater than $\frac{\pi}{4}$. Just thinking about it though leads to an interesting thought: what about at the limit of $p\to\infty$?

<center>
$\lim\limits_{p\to\infty} \sin(\frac{2\pi}{p} + \frac{\pi}{4}) = \sin(0 + \frac{\pi}{4}) = \frac{\sqrt{2}}{2}$
</center>

Which as we saw, would lead to an $r$ value of 1. So, according to this limit, an infinite sided $p$-gon, better known as the circle, is possible... _at the limit_. You'll get better and better approximations of the circle the more sides you add, but this essentially turns our grid into lattice points that are infinitely close together, which ruins the point of the grid in my opinion. So, it's up to you if you think a circle can exist in a grid, but an interesting thought nonetheless.


## Other Grids?

Earlier I mentioned that we did't need to worry about triangular or hexagonal grids, but what if we did?

<div id="trihex_grid" style="flex: 2; position: relative;"></div>
<script src="/js/grid-polygons/trihex_grid.js"></script>
<center style="color: #666;">
<p>The triangular (left) and hexagonal (right) grids are less obvious for what other regular polygons they can fit.</p>
</center>

Fortunately, this just requires tweaking our matrix equation from before a little bit: instead of rotating by 90°, we now rotate by 60° and 120° for the triangular and hexagonal grids respectively. In general, if we want to rotate by $\theta$ radians (easy conversion from degrees) around a neighboring point for a regular $p$-gon, the vector for $v'$ in terms of $v$ is 

<center>
$
\begin{bmatrix}
x \\\
y \\\
1
\end{bmatrix}
=
\begin{bmatrix}
\cos(\theta + \frac{2\pi n}{p}) + 2\sin(\frac{2\pi (n-1)}{p} + \frac{\theta}{2})\sin(\frac{\theta}{2}) \\\
\sin(\theta + \frac{2\pi n}{p}) - 2\cos(\frac{2\pi (n-1)}{p} + \frac{\theta}{2})\sin(\frac{\theta}{2}) \\\
1
\end{bmatrix}
= v'
$
</center>

Finding $r=\sqrt{x^2 + y^2}$ again reveals that

<!-- Thanks WolframAlpha: https://www.wolframalpha.com/input/?i=%28cos%28theta+%2B+2pi*n%2Fp%29+%2B+2sin%282pi%28n-1%29%2Fp+%2B+theta%2F2%29sin%28theta%2F2%29%29%5E2+%2B+%28sin%28theta+%2B+2pi*n%2Fp%29+-+2cos%282pi%28n-1%29%2Fp+%2B+theta%2F2%29sin%28theta%2F2%29%29%5E2 -->
<center>
$r_\theta (p) = \sqrt{3+2\cos(\theta + \frac{2\pi}{p}) - 2\cos(\theta) - 2\cos(\frac{2\pi}{p})}$
</center>

...which is in fact a constant. So rotations of <i>any</i> angle around neighboring points output more regular polygons. 

<div id="pentagon_rotate_angle" style="flex: 2; position: relative;"></div>
<script src="/js/grid-polygons/pentagon_rotate_angle.js"></script>
<center style="color: #666;">
<p>Try rotating one of the red dots to watch the regular pentagon grow and shrink according to the angle you rotate around its neighbor.</p>
</center>

As before, we can plot this function to see what regular polygons have a bounding radius less than one for each grid:

<!-- </br></br> -->
<img src="/img/grid-polygons/hexTriCompare2.png">
<!-- </br> -->

Even though it would appear that no hexagons can be made in the triangular grid as they have a bounding radius $r_{\frac{\pi}{3}}(6)=0$. However, the point they actually collapse into is valid vertex of the triangular grid. This is because that's a type of definition of the triangular grid: draw a hexagonal grid and place extra points in the center of each hexagon. So again, the only apparent shapes in that can be contained in the triangular and hexagonal grids unfortunately appear to be none other than just the equilateral triangle and regular hexagon themselves.

----------

This post was inspired by a Mathologer video discussing an application of [shrinking polygons](https://youtu.be/sDfzCIWpS7Q) and this out-of-the-box thinking that is so cool. Part way through the video, he glosses over the reasoning behind why the shrinking polygons are similar, so this is my own take on that portion of the video.

### Solution to squares in a grid puzzle
As I said, drawing it out is your best bet. Let's start with how many $1 \times 1$ squares there can be in an $n \times n$ grid. Well, it's just $(n-1)^2$ by definition of the size of the grid (remember, $n$ refers to the number of dots, so there are only $(n-1) \times (n-1)$ squares). How about $2 \times 2$ squares? Well, we have eliminated a possible row and column from which we can place the square, so there are $(n-2)^2$ total $2 \times 2$ squares. You might be tempted to say that there are $\sum_{i=1}^{n-1} (n-i)^2$ total squares (where we are individually counting every $i\times i$ square up to $n-1$), but you can't forget that there are tilted squares too. The trick here is now that you have all the non-tilted squares, you just need to find how many possible tilted squares can be contained in a non-tilted square. In a $1 \times 1$ square, there is no room to tilt a square in it, so we move on. In a $2 \times 2$ square, there is exactly one extra lattice point to tilt on, so we add a factor of $2$ to our count of $2\times 2$ squares $\rightarrow 2(n-2)^2$. Similarly for a the $3 \times 3$ squares, we have 2 new lattice points we can tilt to, tripling our count $\rightarrow 3(n-3)^2$ squares. So finally, we can write it as a final sum of $\sum_{i=1}^{n-1} i(n-i)^2 = \frac{1}{12}(n^2)(n^2-1)$ total squares for an $n \times n$ grid.
