---START_METADATA---
{
  "title": "Pleasing Panormas and Matrix Multiplication",
  "author": "Adi Mittal",
  "summary": "Capture the world as it (almost) is",
  "tags":[
    "me"
  ]
}


---END_METADATA---

Out of all the apps on my phone, the camera is one that I can't see myself without anymore. Between being out with friends, or travelling with family, the camera rarely remains idle as I capture memories forever. Though, there is one particular feature of mobile photography I've come to especially love: the panorama.

<img src="/img/panorama-homography/grandCanyonEx.jpg">
<center style="color: #666;">
<p>Even this struggles to capture how well the Grand Canyon lives up to its name.</p>
</center>

If you have an Android phone, you can get even more incredible types of otherwise impossible photos with Google's staple Photo Spheres:

<img src="/img/panorama-homography/PHOTOSPHERE.jpg">
<center style="color: #666;">
<p>An "unwrapped" Photo Sphere; normally this would be an interactive literal sphere of the environment.</p>
</center>

While these are cool, it does beg the question: how are these made? How does your phone unite multiple images into a single cohesive one? We'll explore a little bit of linear algebra to manipulate our photos exactly how we want to.

## The Problem

Before anything else, let's first define what a panorama is. In computer graphics, a panorama is a type of **mosaic**, that is, a unification of two or more images. A panorama in particular, though, is a mosaic in which all the photos to be stitched together are all taken from the same camera position. When you take a panorama on your phone, all you're doing is spinning in place, so that's what we want to recreate.

<!-- inset image -->

So, if we're given two images from different angles, 

<img src="/img/panorama-homography/desk1.jpg">
<img src="/img/panorama-homography/desk2.jpg">

how do we combine them into a single unified image? Thinking about it this way is not super helpful, since, well, that's what we already know about panoramas. What do we want to get out of a panorama? If our panorama is done well, then objects in one image should overlap properly with the same objects in the other image.

For example, take a look at the top left of my computer monitor:

<img src="/img/panorama-homography/desk1Corner.jpg">
<img src="/img/panorama-homography/desk2Corner.jpg">


In our panorama, these two points should overlap, since we obviously recognize these to be the same object in the real world. But to the two pictures, they are wildly different! In the first picture, the corner of my monitor is closer to the left side of the frame, while in the second picture, it is almost on the top-right edge of the image. So, if we try to manually align these two corners so that they overlap, we get:

<img src="/img/panorama-homography/firstPanoAttempt.jpg">

While our single corner of the monitor is aligned between the two images, I don't think I have to try very hard to convince you that this isn't a great panorama. I mean, just look at the rest of the overlap.

<img src="/img/panorama-homography/firstOverlap.jpg">

The skew angles of the resting laptop and the monitor itself don't align at all, and while my cable management is bad, it's not _that_ bad. This is the real challenge at the heart of making panoramas: images are _flat_, while the motion of a panorama is _cylindrical_. Ideally we would take a "cylindrical" photo and unwrap that into a rectangle, but we can't. Undoubtedly, we will have to warp our images somehow to align.

How do we find the right way to warp our image? The first thing we will need to do is get more data! Having one point line up between the photos is not great, but, say, 10 different data points might not be bad.

<img src="/img/panorama-homography/desk1labels.jpg">
<img src="/img/panorama-homography/desk2labels.jpg">

So, our final panorama would like the same numbered red and blue points to overlap. With data to use, the second thing we will need is a way to actually warp our image; how do we actually make our point between photos line up? For that, we turn to linear algebra.

## Rethinking Coordinates

If you had a random ordinary point, how might you describe its position to someone?

<img src="/img/panorama-homography/point.png">
<center style="color: #666;">
<p>A lonely, solitary point living in the plane.</p>
</center>

A common choice we're all familiar with in some way is by using a **coordinate system**. That is, we define a place to be $(0,0)$ and locate every point relative to that **origin** in terms of its $x$ and $y$ coordinates $(x,y)$.

<img src="/img/panorama-homography/coordinateSpace.png">
<center style="color: #666;">
<p>A still lonely, solitary point living in the plane, but with more lines.</p>
</center>

In the above coordiante space choice, we might say the point is at $(3,2)$. But what exactly do we _mean_ by the point being at $(3,2)$? What this really implies is that the point is 3 steps to the right of the origin, and 2 steps above the origin.

<img src="/img/panorama-homography/basis.png">

So, instead of thinking of this point in terms of separate coordinates, we can think of it in terms of these two **basis vectors**. Let's use $\color{blue}{i}$ to represent the blue, horizontal vector, and $\color{red}{j}$ to represent the red, vertical vector. So, our point is really the combination of $\color{blue}{3i}$ and $\color{red}{2j}$, or simply, $\color{blue}{3i} + \color{red}{2j}$, which itself repsents another vector (the one pointing from the origin to the point $(3,2)$).

This might seem extra and unnecessary, since we just rewrote a vector as the sum of its horizontal and vertical components, which is what coordinates literally do in the first place. But the useful insight here is that there is nothing that says our basis vectors have to be in the unit directions! We can now rewrite points in multiple ways depending on our choice of $\color{blue}{i}$ and $\color{red}{j}$.

<img src="/img/panorama-homography/basisNew.png">
<center style="color: #666;">
<p>A new, quirky choice of basis vectors.</p>
</center>

With a new choice of basis vectors, the vector $\color{blue}{3i} + \color{red}{2j}$ has a totally new position as that now encodes the coordinate $(5,3)$ since neither $\color{blue}{i}$ nor $\color{red}{j}$ represents horizontal or vertical steps anymore, but rather skew, diagonal steps. 

But look at that! We've basically accomplished our goal of warping points! We've managed to transform the point $(3,2) \rightarrow (5,3)$ by manipulating $\color{blue}{i}$ and $\color{red}{j}$; both points are techincally at $\color{blue}{3i} + \color{red}{2j}$, just for different basis vectors.

This is what linear algebra and matrices encode geometrically. If we write our basis vectors $\color{blue}{i}$ and $\color{red}{j}$ in a matrix and multiply that by the vector representing our initial point, we will get a new point representing our transformation (a.k.a., our warp). How do we write our basis vectors in a matrix? Each vector implicitly has coordinates associated with themselves! In the above picture, $\color{blue}{i}$ points at $(1,-1)$, since from its tail to its tip it moves one step to the right and one step down. $\color{red}{j}$, on the other hand, points at $(1,3)$, and these are precisely the vectors we see in our matrix.

For the unit basis vectors that point at $(1,0)$ and $(0,1)$, to differentiate them from any old pair of basis vectors, we call them $\color{blue}{\hat{\imath}}$ and $\color{red}{\hat{\jmath}}$ wearing a little hat, and their respective matrix the _identity matrix_.

<img src="/img/panorama-homography/matrixMult.png">
<center style="color: #666;">
<p>The underlying idea of linear transformations.</p>
</center>

These $2 \times 2$ matrices represent _linear transformations_. They're transformations in they way that they transform points from one coordinate to another, and they are linear in the sense that keep all grid lines parallel, evenly spaced and, well, linear after the transformation. This is best seen through [video](https://youtu.be/kYB8IZa5AuE?t=227) and not stills. For this post you don't need to understand the mechanics of matrix-vector multiplication, but just understand that it represents some transformation on a point.

## Warping Images

So why should we care? Why is this helpful in any way? If we think of each pixel on our images as a coordinate, we can just apply our transformation to all pixels on that image, find where they land and color them, and generate a new image. Let's take this picture as an example.

<img src="/img/panorama-homography/canyon.jpg">

We can scale it, rotate it, or even shear it by applying the same transformation matrix to every pixel.

<img src="/img/panorama-homography/warpImage.jpg">
<center style="color: #666;">
<p>An example transformation acting on our image.</p>
</center>

But we have a _big_ problem here: the typical linear transformation does not allow for translations. By the qualities of linear transformations, the origin cannot move, therefore forcing the bottom left corner of our images to always overlap! That's pretty restrictive in terms of the panoramas we can make—and for practical purposes—a complete nonstarter. If we want to continue through with making a panorama, we'll need to find a way around translations.

### Homogenous Coordinates and Affine Transformations

There's a very sneaky workaround being confined to the origin. To do so, we'll need to do something that might seem a bit weird to do translations. Let's rewrite our 2D points with a _3rd_ coordinate. For a given $(x,y)$, let's rewrite that with a $z$-coordinate $(x,y,1)$. If $z \neq 1$, then we can just divide all the other coordinates by $z$ to make it equal to 1: $(x,y,w) \rightarrow (\frac{x}{w}, \frac{y}{w}, 1)$ (we generally use $w$ to represent the $z$-coordinate to indicate that there is no "real" $z$ value since everything is projected into 2D; we use $w$ as a "weight" to say how much we scale our projections down to). This means we have multiple coordinates represent the same point. In this way, $(2,5,1)$ and $(4,10,2)$ and $(-3,-7.5,-1.5)$ and $(2w,5w,w)$ all represent the same point (we don't include points when $z=0$ as it represents a point at infinity).

This might seem arbitrary, but what we're doing here is not too different than our original, 2-coordinate system. When we look at a cross-section of the $xyz$ coordinate space, it looks exactly like the $xy$ plane. What we are doing here is projecting all of $xyz$ space onto the plane $z=1$. 

<img src="/img/panorama-homography/homogeneousCoords.png">
<center style="color: #666;">
<p>The geometry of projecting points onto $z=1$ is equivalent to finding drawing line through the origin and the point, and finding where it intersects that plane.</p> 
</center>

In fact, many of you are already familiar with **homogeneous coordinates** (representing 2D points with a 3rd scalar coordinate) and **projective planes**! When you take a photo on your phone, how does the camera know what's drawn in its frame? How does it take a 3-dimensional world and put it into a 2-dimensional picture? The many light rays that enter the camera lens (the origin) will intersect a plane ($z=1$) based on its focal length, and colors the pixel based on the projection.

<img src="/img/panorama-homography/projectivePlane.png" style="width: 400px">
<center style="color: #666;">
<p>A photo is homogeneous coordinates in disguise. While there's many sides to the building, our camera only cares about what it sees in front of it (a.k.a., what gets projected onto the frame). Our worldview is contained to a small projection.</p>
</center>

Using this analogy with photos, clearly translations should be possible! If you've seen any cat videos on the internet, clearly it is possible for the cat to enter and exit the frame freely without the camera necessarily moving, and that is precisely possible due to the fact the origin $(0,0,0)$ is not contained in our projective plane $z=1$, since all of our basis vectors have to stem out of the origin! (For those interested a translation matrix is equivalent to a shear along the $z$-axis.)

Think about what we're doing here: we're turning a linear transformation in 3-dimensions to create special non-linear **affine transformations** in 2-dimensions! When I first learned this geometrically, awe can't encapsulate the total shock I felt. So, if we're given a point $p$, we can transform it with a matrix $M$ to get its image $p'$.

<center>
$
Mp =
\begin{bmatrix}
a & b & c \\\
d & e & f \\\
g & h & i 
\end{bmatrix}
\begin{bmatrix}
x \\\
y \\\
1 
\end{bmatrix}
=
\begin{bmatrix}
wx' \\\
wy' \\\
w \\\ 
\end{bmatrix}
=
\begin{bmatrix}
x' \\\
y' \\\
1 \\\ 
\end{bmatrix}
$
</center>

These projections with homogeneous coordinates are known as **homographies**. When we take one picture, and reproject it according to a matrix like this but _keeping the same camera center_ (like the origin), we call it a homography. Again, like homogeneous coordinates, people have been leveraging homographies artistically for a while now. That weird, perspective stree art you might have seen before? That's the most manual you can get to using homographies—literally warping images with the angle you look at them to make them appear at a normal proportion.

<img src="/img/panorama-homography/manual-homography.jpeg">
<center style="color: #666;">
<p>Street artists have used the power of perspective for a long time.</p>
</center>

What we're doing is computing a homography to build a **mosaic**. Just like the decorative tile art, we are taking tiles of photos that we transform to overlap, and them stitching them all together into one, broader image.

Moreover, our homographies have a really funny interpretation to them. Since we are reprojecting pictures, what it geometrically looks like is that we're taking two photos which should be rotated in space (as you would spin taking the panorama), and _taking a photo of the two photos_. Photo-ception.

<img src="/img/panorama-homography/photoception.png">
<center style="color: #666;">
<p>If you take a photo of two existing photos, you get one photo that unites the two together. If we can find out the right way to take the photo such that the overlap is correct, we get a panorama.</p>
</center>

There are other ways to reproject images to make other mosaics with the own benefits and downsides, but this is what we'll use for now. Benefits with this type of mosaics? They are (relatively) easy and fast(er) to compute. Downsides? We can only take panoramas up to 180° wide.

## One Slight Issue…

While it's great that we are able to transform points with matrices, let me remind us what our goal is.

<img src="/img/panorama-homography/desk1labels.jpg">
<img src="/img/panorama-homography/desk2labels.jpg">

We have these two photos, where we want to transform one image's points to overlap with the other's. In terms of our matrix arithmetic from before, we have $p$ and $p'$, but no matrix $M$... Up to this point we have been finding our image points using our own matrices, but how do we find that intermediate matrix given a point and its image?

## Regressions and 4-Dimensional Lines

Like homogeneous coordinates, many of you will already be familiar with solving for the intermediate matrix given a $p$ and $p'$. Let's do it with a simpler example.

If you had the points $(1,2)$ and $(6,4)$, and I needed you to find the line $y=mx+b$ that went through them, most of you would be able to do that. We'd set up a system of linear equations

<center>
$\begin{align}
2 & = m(1) + b \\
\newline
4 & = m(6) + b
\end{align}$
</center>

and solve for $m$ and $b$ respectively. In this case, $m=\frac{2}{5}$ and $b=\frac{8}{5}$. Simple algebra with little to worry about here. What is important to note here is that we _could_ solve for a unique $m$ and $b$, since two points define one unique line.

<img src="/img/panorama-homography/ordinaryLine.png">
<center style="color: #666;">
<p>An ordinary line going between two points.</p>
</center>

But what if I introduced a third point $(p_3,p_3')$? Or even a 4th point $(p_4,p_4')$? How do we draw a line through those 4 points? There might be a line that goes through all 4 points, but it's highly unlikely.

<img src="/img/panorama-homography/linRegression.png">
<center style="color: #666;">
<p>While there's no one line through all 4 points, what's the _closest_ to a line we can get?</p>
</center>

We may not have _exact_ values for $m$ and $b$, but what's the best value for both to get the _closest_ solution to this system of equations?

<center>
$\begin{align}
p_1' & = m(p_1) + b \\
\newline
p_2' & = m(p_2) + b \\
\newline
p_3' & = m(p_3) + b \\
\newline
p_4' & = m(p_4) + b
\end{align}$
</center>

That's a task as simple as plugging it into a spreadsheet and doing a **linear regression**. More specifically, we can use the common **least-squares regression** where we want to minimize not the sum of the errors, but the sum of the square of the errors (as the name would suggest). For those a little more comfortable working with matrices and linear algebra, here's a [more in-depth explanation](#aside-least-squares-with-linear-algebra) of what we're doing with our data when finding a regression.

To many, this might seem like an obvious thing to do; everyone from middle schoolers to office workers have been finding trend lines forever. But what we did here is pretty useful when we think more abstractly: given a system of linear equations that correlated independent data $p$ with their dependent data $p'$, we were able to solve for the best coefficients of that system of linear equations that most closely solved the system (in the previous case was $m$ and $b$). Finding a line was a nice byproduct, but what we're really doing here is solving that system of linear equations.

Now I promise this will be helpful. Let's look at our original expanded matrix equation of $Mp = p'$.

<center>
$
\begin{bmatrix}
a & b & c \\\
d & e & f \\\
g & h & 1 
\end{bmatrix}
\begin{bmatrix}
x \\\
y \\\
1 
\end{bmatrix}
=
\begin{bmatrix}
wx' \\\
wy' \\\
w \\\ 
\end{bmatrix}
$
</center>

Remember, we're working in homogeneous coordinates, so $p'$ might not land on the plane $z=1$, and we account for that with $w$ here. I also set $i=1$, since a) that corresponds with a certain scaling and is not necessarily unique vector, but more importantly b) gives us one less variable to solve for.

Here, we will need to actually do the matrix-vector multiplication, and carrying it out nets a system of linear equations! (I know I said you won't need to know the mechanics of these operations, but it's hard to avoid it now. If you can accept this fact, that's great, but I'd recommend looking [here](https://youtu.be/XkY2DOUCWMU) if you are unfamiliar.) 

<center>
$\begin{align}
ax + by + c & = wx' \\
\newline
dx + ey + f & = wy' \\ 
\newline
gx + hy + 1 & = w
\end{align}$
</center>

Using the third equation in tandem with the first two…

<center>
$\begin{align}
ax + by + c & = (gx + hy + 1)x' \\
\newline
dx + ey + f & = (gx + hy + 1)y' 
\end{align}$
</center>

Just like before, we can solve for $a$, $b$, $c$, $d$, $e$, $f$, $g$, and $h$ with a least-squares regression! Since we have 8 variables, at minimum we need 8 equations or 4 pairs of $p$ and $p'$ (since each pair contains two equations: one for $x'$ and one for $y'$). Though, just like we have 10 points, generally it is better to have more data and overfit than less (we'd rather have an overall average fit, than just 4 points be _exatly_ where we want them to be). It's weird to think of this geometrically, since what we're doing here is not finding the line between one independent variable and one dependent variable, but rather _two_ independent variables $(x,y)$ with _two_ corresponding dependent variables $(x',y')$; our regression exists in 4-dimensions!

## Putting It All Together

Let's quickly reflect on what we've covered thus far.

1. We've redefined coordinates purely with vectors, allowing us to nicely compact our image-warping transformations in matrices.
2. Our original definition of coordinates failed to include translations—a key transformation. We described 2-dimensional points in 3-dimensions with homogeneous coordinates, resolving our worries.
3. We then ran into ANOTHER problem in that while we knew how to warp images _given_ the transformation matrix, we really wanted to be able to find the matrix given a starting point and an end point to map to.
4. Using a least-squares regression, we were able to turn our unknown matrix equation into a system of linear equations that were much easier to work with to compute our homography (sort of, see the [aside](#aside-least-squares-with-linear-algebra) below).

Let's use this first photo to give our list of points $p$.

<img src="/img/panorama-homography/desk1labels.jpg">

And we'll try to match those red points to these blue points on the second photo: our list of $p'$.

<img src="/img/panorama-homography/desk2labels.jpg">

Having the computer compute the transformation matrix, we take that matrix and multiply every pixel (remember, treating them as coordinates/vectors), and warping the first image. Then, we can overlay them to see how close our points line up! If our points were well selected, and our computed homography—with the least-squares regression—has minimal error, we should get a pretty decent attempt at a panorama.

<img src="/img/panorama-homography/firstPano.jpg">

Sure, the blending isn't great, and it didn't _completely_ fix the overlap issue, but the seams and photo stitching definitely is much nicer! And honestly, it's pretty cool seeing how the image was transformed and finding the outline of the images cross like that.

<img src="/img/panorama-homography/firstPanoOutline.jpg">

With some simple masking and basic filtering, suddenly it really begins to look clean.

<img src="/img/panorama-homography/panorama.jpg">

While this is cool, it does reveal another unfortunate downside of our choice of mosaic: if we want a uniform picture, we have to sacrifice a lot of data. 

<img src="/img/panorama-homography/panoramaCrop.jpg">

Even so, it doesn't even look that bad. All in all, though, not a bad first attempt at building a panorama.


## What Next?

While we have a working prototype, we can do signficantly better. For one, I used only 10 labelled points to compute our homography, but if you use even more, it's not hard to get a better, and closer fit. With algortihms like [LoFTR](https://zju3dv.github.io/loftr/), finding lots of corresponding labelled points is quick and easy.

<center>
<video width="85%" playsinline="" autoplay="autoplay" loop="loop" preload="" muted="">
      <source src="/img/panorama-homography/loftr-homepage-demo.mp4" type="video/mp4">
</center>
<center style="color: #666;">
<p>Some really smart people made an algorithm specifically to finding high quality object matching between multiple photos. Credit: LoFTR Team</p>
</center>

Also, since we are manually constructing our panorama, we can stitch and blend photos that have no right being together in a panorama.

<img src="/img/panorama-homography/lightdark2.jpg">
<center style="color: #666;">
<p>Going from a well-lit to a dark photo makes for some artsy renditions (even more if you blend it a little nicer).</p>
</center>

We never really touched on our homographies, either. When we decided 10 initial points $p$ and 10 warped points $p'$, our $p'$ was decided as a result of lining up 2 photos. What if we didn't want to line up multiple photos, but rather just creatively warp a single photo? 

<img src="/img/panorama-homography/rectification.jpeg">
<center style="color: #666;">
<p>Something not quite lined up? A simple homography can fix that for us.</p>
</center>

This is know as **rectification**, as it is a means to correct for mistakes we might have had in our photo.

Finally, the last improvement we can make to our mosaics is trying new projections and warpings. If we want something even as simple as just wider, up to 360°, full views, we'll need to find something more robust than our previous approach. Or what if we wanted to make something akin to a full photosphere like from before?

<img src="/img/panorama-homography/PHOTOSPHERE.jpg">

What we did today was simply **planar projection**, or just reprojection onto a plane. We did that with homogenous coordinates. For wider, more complete mosaics, we'll need either **cylindrical** or **spherical projection**, which is exactly what it sounds like. These have their own benefits like wider field of view, but because of the nature of projecting onto a curved surface, the images being stitched together do tend to, well, curve. The type of mosaic one uses comes down to preference and artistic need. For more on this, I recommend reading these [slides from UC Berkeley](https://inst.eecs.berkeley.edu/~cs194-26/fa21/Lectures/MoreMosaics.pdf)'s CS 194-26, their introductory computer vision and computational photography class.


I hope this gave an interesting peak at the intersection of linear algebra and photography, and more over, I hope this gave you an appreciation for the math your phone goes through every time you take a panorama. 

If you're interested, here's a link to a [Python notebook](https://colab.research.google.com/drive/1bgOaBnHTlKx-DYfLg2HmtsaFekWgwJFn?usp=sharing) where you can see some of my experiments during my struggle and exploration with panoramas and homographies.


----------

## Aside: Least-Squares with Linear Algebra

Okay, this previous section is really hard to describe without already knowing a fair amount of linear algebra, and it felt a little flat without having a more methodical procedure of solving a least-squares regression. I wasn't planning on including this section, but it felt incomplete otherwise. For those interested, feel free to peer over it, but this is not necessary within the scope of this post; all you need to understand is what our regression is accomplishing, thinking of that "line of best fit" idea.

Let's go back to when we were trying to find a line between two points. If you have 2 points, $(p_1, p_1')$ and $(p_2, p_2')$ being fit to the line $y=mx+b$, we have a system of linear equations like before.

<center>
$\begin{align}
p_1' & = m(p_1) + b \\
\newline
p_2' & = m(p_2) + b
\end{align}$
</center>

We can solve this just like we did before to find $m$ and $b$, but there's a secret matrix equation embedded into this system. 

<center>
$
\begin{bmatrix}
p_1' \\\
p_2'
\end{bmatrix}
=
\begin{bmatrix}
p_1 & 1 \\\
p_2 & 1
\end{bmatrix}
\begin{bmatrix}
m \\\
b
\end{bmatrix}$
</center>

In a sense, that's what a matrix is: a system of linear equations, and you can freely go between either a system of linear equations or a matrix via matrix multiplication. (I know I said you won't need to know the mechanics of these operations, but it's hard to avoid it now. If you can accept this fact, that's great, but I'd recommend looking [here](https://youtu.be/XkY2DOUCWMU) if you are unfamiliar.)

If we write this in general terms, we are basically solving the equation

<center>
$b = Ax$
</center>

where $A$ is a matrix, and $b$ and $x$ are vectors, and we are solving for the latter. It might seem pointless to rewrite it, but what we're actually solving is

<center>
$Ax - b = 0$
</center>

Since $Ax$ is _exactly_ equal to $b$; $Ax$ is the same vector as to $b$. We were able to find a unique line with $m$ and $b$ through them, no? Just as we were able to solve the system of linear equations before, we can easily solve this with matrix inverses:

<center>
$A^{-1}b = x$
</center>

Now, let's add more points.

<center>
$\begin{align}
p_1' & = m(p_1) + b \\
\newline
p_2' & = m(p_2) + b \\
\newline
p_3' & = m(p_3) + b \\
\newline
p_4' & = m(p_4) + b
\end{align}$
</center>

Now we turn this into a matrix equation like before.

<center>
$
\begin{bmatrix}
p_1' \\\
p_2' \\\
p_3' \\\
p_4
\end{bmatrix}
=
\begin{bmatrix}
p_1 & 1 \\\
p_2 & 1 \\\
p_3 & 1 \\\
p_4 & 1
\end{bmatrix}
\begin{bmatrix}
m \\\
b
\end{bmatrix}$
</center>

We know that there's a good chance our four points don't all lie on the same line. So it's unlikely that $Ax - b = 0$. We want to get a line that gets _as close_ to being a line. So our goal is to 

<center>
$\min||Ax-b||^2$
</center>

Also, now that $A$ is no longer a square matrix, so we can't simply take its inverse to solve our equation anymore, since it doesn't have an inverse. However, we can use the following facts to easily deduce a solution. I'll let [Georgia Tech](https://textbooks.math.gatech.edu/ila/least-squares.html) explain the conditions and proof succinctly:

----------

**Theorem.** Let $A$ be a $m \times n$ matrix and let $b$ be a vector in $\mathbb{R}^m$. The following are equivalent:

1. $Ax=b$ has a unique least-squares solution.
2. The columns of $A$ are linearly independent.
3. $A^TA$ is invertible.

In this case, the least-squares solution is

<center>
$x = (A^{T}A)^{-1}A^{T}b$
</center>

**Proof.** The set of least-squares solutions of $Ax = b$ is the solution set of the consistent equation $A^TAx = A^Tb$, which is a translate of the solution set of the homogeneous equation $A^TAx = 0$. Since $A^TAx$ is a square matrix, the equivalence of \[facts\] 1 and 3 follows from the invertible matrix theorem. The set of least squares-solutions is also the solution set of the consistent equation $Ax=b_{\textrm{Col}(A)}$, which has a unique solution if and only if the columns of A are linearly independent. 

----------

Basically, it says if our system of linear equations contain only unique equations (i.e. no one equation is a multiple of another), we can turn our non-square matrix $A$ into a square one by multiplying by its transpose $A^T$, and solve our least squares the way we'd solve it before with inverses. In other words, if our matrix follows the criteria listed above, our minimizing solution comes from creating an equivalent equation with an invertible matrix:

<center>
$\begin{align}
Ax & = b \\
\newline
A^TAx & = A^Tb \\
\newline
(A^TA)^{-1}A^TAx & = (A^TA)^{-1}A^TAb \\
\newline
x & = (A^TA)^{-1}A^TAb
\end{align}$
</center>

Now, let's recall the our matrix equation from before of the homography we wanted to solve. 

<center>
$
\begin{bmatrix}
a & b & c \\\
d & e & f \\\
g & h & 1 
\end{bmatrix}
\begin{bmatrix}
x \\\
y \\\
1 
\end{bmatrix}
=
\begin{bmatrix}
wx' \\\
wy' \\\
w \\\ 
\end{bmatrix}
$
</center>

Then, we expanded this into 3 linear equations, and further simplified them to the following two:

<center>
$\begin{align}
ax + by + c & = (gx + hy + 1)x' \\
\newline
dx + ey + f & = (gx + hy + 1)y' 
\end{align}$
</center>

This, can be rewritten as another, secret matrix equation:

<center>
$
\begin{bmatrix}
x & y & 1 & 0 & 0 & 0 & -x' \cdot x & -x' \cdot y \\\
0 & 0 & 0 & x & y & 1 & -y' \cdot x & -y' \cdot y
\end{bmatrix}
\begin{bmatrix}
a \\\
b \\\
c \\\
d \\\
e \\\
f \\\
g \\\
h 
\end{bmatrix}
=
\begin{bmatrix}
x' \\\
y'
\end{bmatrix}
$
</center>

Wait, we turned our original matrix equation into another one? As awful as that may look, this is much more useful than our original equation since now, all of our unknowns are in a vector instead of a matrix; it really is no different than our previous least-squares examples, and we're still solving for the vector $x$ in

<center>
$Ax = b$
</center>

So, we can still solve it like before finding 

<center>
$x = (A^{T}A)^{-1}A^{T}b$
</center>

And with that, we now have also gone through what our program is doing under the hood, and have gone through some of the tedium of justifying what a least-squares regression is from a linear algebra perspective.