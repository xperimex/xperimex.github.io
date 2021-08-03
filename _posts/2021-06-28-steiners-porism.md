---START_METADATA---
{
  "title": "Steiner's Porism and Incredible Inversions",
  "author": "Adi Mittal",
  "summary": "Time to flip circles inside out",
  "tags":[
    "me"
  ]
}


---END_METADATA---
<script src='https://cdnjs.cloudflare.com/ajax/libs/g9/1.0.16/g9.js'></script>
<script src="https://unpkg.com/mathjs/lib/browser/math.js"></script>

<img src="/img/steiners-porism/steinersAnimated.gif">

Today I want to talk about a type of geometry I think is grossly overlooked, especially when compared to the popularity of its Euclidean brother. In a world where linear transformations are the norm between translations, rotations, and dilations, sometimes it's hard to see anything but them as the workhorse geometric tools. However, there is an additional transformation that takes us from the solidarity of linear transforms to one of a type of circular transform that may seem novel at first, but is able to even extend complex analysis. Today I want to talk about **inversive geometry**. Inversive geometry takes the standard plane we know and quite literally flips it inside out. By the end of this post, you will be familiar with not only what in the world an inversion is, but a very cool theorem that results in the animation above that relates tangent circles to one another. But before we can get there, we first need to learn _how_ to flip our world inside out.

## Plane Inversions

As you can imagine, inversive geometry is geometry that relies on something called _inversions_. You can think of an inversion as a function that takes a point $P$ and spits out a transformed point $P'$. But, what exactly is our function? It's not a standard $f(x)$ as we're giving _two_ coordinates not one. So maybe it's a 2-by-2 matrix, as we're giving a 2D vector and outputting another 2D vector? Not a bad idea, but it will quickly become clear why we don't want to do that. So, what <i>is</i> our functional object? It's actually a _circle_. As weird as that sounds, just hear it out. Given a circle $Ø$ with center $O$ and radius $r$, the point $P$ is inverted to $P'$ based on the following equation: 

<center>
$\large{|OP| \cdot |OP'| = r^2}$ 
</center>

...where $P'$ lies on the ray $\overrightarrow{OP}$. Try dragging the points below to get a handle on this idea.

<div id="inversionIntro" style="flex: 2; position: relative;"></div>
<script src="/js/steiners/inversionIntro.js"></script>

<center style="color: #666;">
<p>Here we have the green circle $Ø$ which we are inverting the point $P$ over. Try dragging $P$, $O$, and $R$ around to see where its image $P'$ goes under inversion.</p>
</center>

The numbers above each point represent their distance from $O$, so you can verify the distances satisfy the inversion equation. As a nice little double entendre, this mapping is called an inversion for both algebraic and geometric reasons. The equation itself is an inverse relationship between $|OP|$ and $|OP'|$ (this is why we can't use matrices [in the standard sense to represent the transform](https://math.stackexchange.com/questions/2626356/ill-known-original-interesting-investigations-on-applications-of-inversion-the?rq=1)), but better yet, I'm sure within just within a few seconds that you can much more intuitively see the geometric reason: every point $P$ on the inside of the circle gets mapped to the outside of the circle, and every point outside the circle gets mapped to the inside (and every point <i>on</i> the circle stays on the circle—we say the circle itself is _invariant_ under inversion). We're taking our plane and flipping it inside out centered around the circle. 

As such, this specific inversion is known as a **circle inversion** or **plane inversion**.

However, there might be a glaring issue to some of you: what if the point $P$ we're inverting is the center of the circle $O$ itself? Then we get $|OP|=0$, and how can 0 times anything equal anything but 0? To get around this issue, we have to formally introduce a _point at infinity_. That way, if we try to invert the center of our inverting circle, we have a place for it to go. 

## Circles Inverting Circles

Now that we can invert points, we can now easily invert _shapes_. All we have to do is invert the collection of points individually, and remember the order to connect them. We could try basic polygons like squares and triangles, but the one that is most interesting (and will be most helpful) is inverting other circles. Below, we'll again invert over the green circle with center $O$, but now instead of a point, we'll invert the blue circle with center $C$ to the red circle.

<div id="invertingCirclesFast" style="flex: 2; position: relative;"></div>
<script src="/js/steiners/invertingCirclesFast.js"></script>

<center style="color: #666;">
<p>Again, we have the green circle $Ø$ as our inversion circle, but instead of just a point $P$ that we'll invert, we'll invert the entire blue circle with center $C$. Drag the different points around to see where our blue circle inverts to along with its center $C$ to $C'$.</p>
</center>

A lot of our rules with inverting points can easily give us an intuition for how our circles might invert. Points on a circle that are _inside_ of our green inversion circle get flipped to be outside of it, and vice versa, and points <i>on</i> the inversion circle stay on the inversion circle (see how the red circle passes through the intersections of the green and blue circles). But, since we are looking at a group of points, some discrepancies between points obviously exist. For instance: distance. I have drawn both the center of our blue circle $C$ as well as its inversion $C'$. But just by looking at it, it's obvious that there's no way $C'$ can be the center of the blue circle's inversion! That's due to one key aspect of inversions: **they do not preserve distances**. 

That should be apparent due to the actual inversion equation $|OP| \cdot |OP'| = r^2$. This inverse relationship between the length of $OP$ and $OP'$ is what really exaggerates inversions with very small or very big values of $OP$. In fact, this is why inverting a circle is so interesting as even though the distances get all messed up, [a circle will still always invert into another circle](https://math.stackexchange.com/questions/2425789/purely-geometric-proof-that-circles-invert-to-circles). Try inverting a square and you'll almost definitely get something that doesn't look like a square (_almost_ definitely as if you align the center of the square with the center of the inversion circle, then that will result in another square; just try drawing it out and it will all fall into place). Even when it doesn't _look_ like a circle, it really is! Try dragging the blue circle such that it intersects the center of our green inverting circle. You'll get something that looks like a line. While it acts as a line, we formally say that this is a really really big circle. Specifically, a circle with an infinitely large radius. It's a lot like how in calculus they say if you zoom in super far in on a curve it looks like a line, if you have a super big curve it locally looks like a line from our perspective.

## Recap

Ok, that was a lot, but what does this tell us? Well, just experimenting with inverting one circle tells us much about inversions and some properties they have. Let's write them out.

1. Inversions do not preserve distances. We saw this with how a circle's center may not invert to the center of the inverted circle.
2. Every point $P$ has a unique inversion $P'$ for any given circle of inversion $Ø$ with center $O$ and radius $r$. This may seem obvious, but it's important to be aware of as it leads to the next very important characteristic...
3. **Intersections and tangency between two or more shapes are preserved during an inversion**. This fact is the one you want to hold onto the most for the upcoming sections. This should make sense as if two or more shapes share some point in common such as an intersection or tangent point $P$, that singular point has only one unique inverse $P'$ which they must also share. And if all the points need to be connected to that point after the inversion, then we should expect to see that intersection/tangent point remain after an inversion.
4. Lastly, just as a neat fact, performing the same inversion twice results in nothing changing (the identity). You can think of this sort of like what happens when turning a shirt inside out twice: the first time the seams come out, but the second time it just goes back to how it started. Just going back to our formula $OP \cdot OP' = r^2$, we know that $OP'$ has some length that corresponds with $OP$ to keep that product the same. So, if we let $P \rightarrow P'$ representing our first inversion, $P'$ needs to go back to $P$ to keep the formula the same for the second inversion. This makes the function of an inversion a special function called an <a href="https://en.wikipedia.org/wiki/Involution_(mathematics)">involution</a>.

----------
With the basics of inversion down, we are now ready to explore that animation from the very top of this post.

## Steiner's Porism
Steiner's Porism can sound a lot more complicated than it is, but I promise you the animation at the top explains everything. Let's break it down step by step. First, draw two non-intersecting circles with one inside the other. Second, draw a third circle that just touches the inside and outside circle (a.k.a. make them tangent). Third, draw as many circles as you can, each touching the inside, outside, and last circle you drew until no more can fit. **Steiner's Porism** states if the last circle touches the first circle you drew, then no matter _where_ you draw the first circle, the chain will always connect (and if the last circle doesn't touch/overlaps the first circle, then they will never touch nor be tangent). So in the GIF above, the black circles are free to rotate like ball bearings in between the outer blue and inner red bounding circles and the chain will always link up. It's pretty interesting, but how would someone ever prove this? That's where our friend inversion comes in.

Before we go any further though, let's quickly see if there's an easier version of this scenario. One of the main issues I first had when looking at this was the fact that the black circles rolling around didn't have to be the same size. Fortunately, there's an obvious case where we don't have to worry about that: when the two bounding circles are concentric.

<div id="concentricVariableSteinerChain" style="flex: 2; position: relative;"></div>
<script src="/js/steiners/concentricVariableSteinerChain.js"></script>

<center style="color: #666;">
<p>Try dragging the red point to change the red circle's radius, and try rotating the black point to see the symmetry in the chains of circles.</p>
</center>

When the circles share the same center, then Steiner's Porism becomes obvious: our set up now becomes symmetrical, so you can think of any starting point as a rotation of the original chain of circles. Since this is an easy fact to see, we can now use a key property of inversions to prove the general case for _any_ pair of bounding circles:

> Intersections and tangency between two or more shapes are preserved during an inversion

This is great for us, as then if we can find an inversion that turns our non-concentric circles into concentric circles, we can then use the fact that our tangents of the chain circles are preserved and use the obvious concentric circles case to close out the theorem. It may sound complicated, but think of it as a way to work backwards: if we can show we can turn any non-concentric circles into concentric ones, then the reverse is also true where there is some corresponding pair of concentric circles that invert to our original, non-concentric ones. Since the rules of tangency remain true between inversions, the rules for our circle chains remain as well (since they are only governed by tangents).

To find our desired circle of inversion, I'll present it as a series of steps that might not make sense immediately, but will definitely make sense retroactively. So, for now, I ask that you follow along with the steps and we'll discuss it at the end.

### Step 1: Find the radical axis
The **radical axis** of a pair of circles is the line (or axis, I guess) that every point $P$ along the line is the same distance away from the _tangents_ of the two circles. This sounds more complicated than it is and is much easier to see with a picture. Fortunately, it's not too hard to find [with some simple geometry](https://www.cut-the-knot.org/Curriculum/Geometry/GeoGebra/RadicalAxes.shtml). We'll draw the radical axis in green.

<div id="radicalAxis" style="flex: 2; position: relative;"></div>
<script src="/js/steiners/radicalAxis.js"></script>

<center style="color: #666;">
<p>Although we can drag the green point anywhere, it always allows us to find an purple orthogonal circle.</p>
</center>


Of course, the point $P$ in question has to be _outside_ the two circles to be able to find tangents, but that's only a worry for intersecting circles (which we don't care about). I drew a purple circle center around $P$ to show that the tangents are in fact equal in length. This purple circle, however, has one notable property due to the 4 tangent lines it has as its radii: it is **orthogonal** to the red and blue circles, meaning that it intersects the red and blue circles at right angles. This is a result from the fact that [a circle's radius is perpendicular to its tangent](https://en.wikipedia.org/wiki/Tangent_lines_to_circles#:~:text=The%20radius%20of%20a%20circle,the%20axis%20of%20the%20radius.). Hold up a corner of a piece of paper and you'll see the right angles clearly. Speaking of orthogonal circles, that brings us to our next step.

### Step 2: Draw two orthogonal circles and find their intersection
This step is easy enough since we've basically already done half of it. We just need to draw another purple orthogonal circle as we've done before, and then find their intersection. Our space will start to get cluttered quickly, so I'll remove the purple tangency lines, but just know that those are what determine our purple circles. We'll draw this intersection point in black.

<div id="intersection" style="flex: 2; position: relative;"></div>
<script src="/js/steiners/intersection.js"></script>

<center style="color: #666;">
<p>For any pair of red and blue circles, their orthogonal circles always intersect in the same two locations.</p>
</center>


Here I've selected the outermost intersection for clarity, but we'll see in just a second that either of the two intersections work just fine. First, it's worth noting that for a given configuration of outer blue and inner red bounding circles, the intersection points remain constant. No matter how you may slide those green points, the intersection point doesn't change. That should help cue you into its importance. 

As a separate, interesting fact (that I haven't looked into enough), the centers of the red and blue circles are collinear with the two intersection points of the purple circles. Quirk aside, though, we can move onto the third and final step of this inversion circle finding process.

### Step 3: Draw any circle at the chosen intersection point
Notice how I said "any" circle. A circle with any radius will suffice as our desired circle. This will be our circle to invert over! We're going to invert a total of four circles: of course, the red and blue ones, but we'll also invert the two helper, purple circles. The diagram might look a bit busy, but just remember that this building off the same diagrams from before; look for what's new in the graphic, and it will be less overwhelming.

<div id="concentricInversion" style="flex: 2; position: relative;"></div>
<script src="/js/steiners/concentricInversion.js"></script>

<center style="color: #666;">
<p>Finally, we are able to invert our red and blue circles into concentric ones based on the black intersection point.</p>
</center>


And just like that, we've obtained our concentric circles just as we desired! Just to reiterate, because tangencies are preserved through our inversion, we can then draw our chain of tangent circles in the original blue and red bounding circles and know for a fact that they'll remain tangent after our inversion as well. Moreover, since the inversion turns our circles into concentric ones which is the nice symmetric case from before, Steiner's Porism is nicely proved as we know, once again, tangencies are preserved during an inversion.

## Analysis

Ok, but why does this even work? I mean, yeah, it produces concentric circles, but our steps seemed so arbitrary. Why should it work? It has to do with our purple orthogonal circles. Remember, these circles are orthogonal meaning that they intersect our blue and red circles at right angles. Moreover, remember that by definition of our construction in **Step 2**, these orthogonal circles pass through the center of our black inversion circle. As we saw before, a circle passing through the center of the inversion circle means that these purple circles will invert into circles of infinitely-large radii (or lines, if you prefer). Lastly, we also know that, in addition to tangencies, intersections are preserved during an inversion. So, not only do we know that our inverted purple lines must intersect, but the intersections between the red and blue circles as well as the purple circles are also maintained. 

So, we have two lines that intersect that need to be orthogonal to two other circles. What configuration allows this? The only way that a pair of lines can be orthogonal to a circle is if those lines are the radial line of the circle! So, both circles must share the same center of the intersection of the lines which ensure the lines become radial, and by definition of sharing a center, they must be concentric! Isn't that neat?

One thing worth noting, though, is that we get a solution even when the two circles are _not_ contained within one another. If the two circles are non-intersecting and are completely separated from one another, we can still follow our procedure from before: we can find a radical axis of the two circles, which leads to our two purple orthogonal circles, that finally intersect at the center of our inversion circle. However, we now get a reversed solution with the red circle becoming the outer concentric circle instead of the inner one (this only happens as a result of the choice of intersection point of our orthogonal circles).

## Conclusion

Inversive geometry has all sorts of interesting quirks and facts to explore, and should be more well known than what it is. Maybe one day I'll touch on its connection to [polar curves](https://en.wikipedia.org/wiki/Inverse_curve). But anyways, this post wouldn't be complete if you couldn't build a Steiner chain of circles of your own, so below there is one last widget to experiment with tangent circles. I have left the special black inversion circle on the canvas just so you can see how all of our work to get concentric circles relates to any pair of nested, bounding circles. There's so much I had to gloss over to keep this short, such as the hidden conics in the path of the tangent circles, so I highly recommend skimming other articles such as [Wolfram MathWorld's](https://mathworld.wolfram.com/SteinerChain.html) and even [Wikipedia's](https://en.wikipedia.org/wiki/Steiner_chain) discussions on Steiner chains. With all things in math, this story is never over: Steiner's Porism has a projective geometry cousin known as [Poncelet's Porism](http://olivernash.org/2018/07/08/poring-over-poncelet/index.html), but that deserves its own post entirely some day. Inversive geometry is a simple yet powerful tool, and even just knowing the concept alone is useful to keep in your back pocket as you may come across [something that has an uncanny resemblence to it](https://en.wikipedia.org/wiki/M%C3%B6bius_transformation). Nevertheless, I hope you can at least leave this page with not just an appreciation of a cool bit of math, but a nice animation as well. As before, don't forget to try separating the circles to be outside of one another to get some strange, but special solutions to Steiner's Porism (if you're having trouble seeing the animation clearly, try reducing the radius of the black inversion circle).


<div id="steinersComplete" style="flex: 2; position: relative;"></div>
<script src="/js/steiners/steinersComplete.js"></script>