---START_METADATA---
{
  "title": "Golden Quartics",
  "author": "Adi Mittal",
  "summary": "The hidden relationship of quartics and phi",
  "tags":[
    "me"
  ]
}



---END_METADATA---
<meta name="viewport" content="width=device-width">

<script src="https://www.desmos.com/api/v1.5/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>

This post looks to describe an interesting property intrinsic to any and all quartic functions, and it has to do with the relationship between the functions' inflection points. Below is a Desmos graph, with labeled $f(x)=Ax^4+Bx^3+Cx^2+Dx+E$, the general quartic equation, as well as its 2 inflection points $P$ and $Q$. A third point $R$ is labeled, which is the point that intersects the line between $P$ and $Q$ and $f(x)$. What we are interested in today is the ratio $\frac{PR}{PQ}$. Play with the graph below to vary $f(x)$ and see what happens to that ratio.

<center>
  <div id="intro" style="width: 660px; height: 570px;"></div>

  <script src="/js/introGraph.js"></script>
</center>

Quickly you will notice that for (most) non-zero $A$ values, $\frac{PR}{PQ}$ always remains at the rather famous constant, $\varphi=1.61803...$, the golden ratio. This may seem coincidental, but there is a rather nice way of proving that this ratio is _exactly_ equal to the golden ratio.

## The Golden Ratio
The classic definition of $\varphi$ comes from a specific geometric construction of a rectangle.

<center>
<img src="/img/goldenRectangle.png" style="background-color: #fff;">
</center>

In this _golden rectangle_, there are two rectangles to focus on: the large one with aspect ratio $\frac{a+b}{a}$, and the smaller blue one with aspect ratio $\frac{a}{b}$. The golden ratio is given by $\frac{a}{b}$ when the small blue rectangle has the _same_ aspect ratio as the larger rectangle. Letting $\varphi=\frac{a}{b}$, and setting the ratios equal to each other nets us:

<center>
$\frac{a+b}{b}=\frac{a}{b}$
<br>
$1+\frac{b}{a}=\frac{a}{b}$
<br>
$1+\frac{1}{\varphi}=\varphi$
<br>
$\varphi+1=\varphi^2$
<br>
$\varphi^2-\varphi-1=0$
<br>
$\varphi=\large{ \frac{1 \pm \sqrt{5}}{2} }$
</center>

The positive solution to this quadratic is the more well known value $\varphi$. Taking some variations of the previous equations can net other interesting relationships that $\varphi$ pertains to. For example, taking the third line from the derivation of $\varphi$ nets a recursive, cyclic definition of the golden ratio. Expanding out the relation gives another famous definition of $\varphi$.

<center>
$\varphi = 1 + \large{ \frac{1}{1 + \frac{1}{1 + \frac{1}{1 + \frac{1}{\ddots}}}} }$
</center>

An infinite descending fraction solely containing 1s. Taking a variation of the fourth line also gives an interesting appearance of $\varphi$.

<center>
$\varphi = \sqrt{1 + \sqrt{1 + \sqrt{1 + \sqrt{1 + \ldots}}}}$
</center>

An infinitely nested radical solely containing 1s. Notice, however, that the solution to the golden ratio has a negative counter part as well: $1-\varphi=-.61803$. Although it may seem nonsensical to assign a negative value to many of the expressions we used in defining $\varphi$, this value holds many of the same properties that $\varphi$ holds on its own as well, and the reason we don't see it as often has to do with the volatility of the value in these iterated scenarios, but that's for another time.

## The Proof
First, let's look at how to find the inflection points of a quartic. Inflection points are given by the quality that it's the point along a function where its concavity changes. I.e. if you look at the tangent lines along a curve as you vary the input $x$, the tangent lines' slopes will change. The inflection points are found when the slopes' behavior alters. Take the function $x^3$, for example.


<center>
  <div id="exampleInflection" style="width: 660px; height: 300px;"></div>
  <script src="/js/exampleInflection.js"></script>
</center>


Notice how as we let our value $a$ increase, the slope of our tangent line -- the first derivative of $f(x)$ -- decreases from $-1.5$ to $0$. But from $0$ to $1.5$, the slope begins to increase. This is all visualized in our graph $f'(x)$ which plots every point $x$ and the value of its slope at $f(x)$. One can clearly see $f'(x)$ tends in a downward manner initially, before rising again. And for $f'(x)$ to have a slope that's first negative (decreasing) then positive (increasing), it must have a slope of zero in between. So, our point where our concavity changes is when the slope of $f'(x)$ equals 0. In other words, when the second derivative $f''(x)=0$. Here we can see it clearly visualized at the solution $x=0$, which confirms all of our previous observations. Doing so for any general quartic nets us:

<center>
$f(x) = Ax^4+Bx^3+Cx^2+Dx+E$
<br>
$f'(x) = 4Ax^3+3Bx^2+2Cx+D$
<br>
$f''(x) = 12Ax^2+6Bx+2C = 0$
</center>

As this is a degree 2 polynomial, the quadratic formula quickly gives our two solutions for $x$ in general, which we will call $p$ and $q$.

<center>
$p = \large{ \frac{-3B-\sqrt{9B^2-24AC}}{12A} }$ &nbsp;&nbsp; $q = \large{ \frac{-3B+\sqrt{9B^2-24AC}}{12A} }$
</center>

Having solutions for our inflection points $P$ and $Q$ respectively, the line through them can quickly be written as:

<center>
$g(x)=\frac{f(q)-f(p)}{q-p}(x-p)+f(p)$
</center>

The intersection point $R$ can be found solving for when $f(x)=g(x)$, or in other words, when $f(x)-g(x)=0$

<center>
$f(x)-g(x)=0$
<br>
$Ax^4+Bx^3+Cx^2+Dx+E-\frac{f(q)-f(p)}{q-p}(x-p)-f(p) = 0$
</center>

One can try to factor and work this out, but there is a much nicer approach that avoids working with this messy equation.

## Transformations
If we limit our transformations to purely scaling and translating our graph, all of our ratios will remain equivalent. So if we can find a set of transformations to make our work easier, we will still be able to prove our initial proposition, but in a much easier way. To (re)start, we're going to define a new function $h(x)$ that takes $f(x)$, and scales and moves it around as follows:

<center>
$h(x) = \frac{1}{q-p}(f([q-p]x+p)-f(p))$
</center>

This may seem arbitrary, but keeping in mind what $p$ and $q$ mean, this transformation alters the graph in a rather specific and useful way. First notice how these two key components in our transformation:

<center>
$h(x) = \frac{1}{q-p}(f([q-p]x+{\bf p})-{\bf f(p)})$
</center>

This results in shifting the graph over to the left $p$ units and down $f(p)$ units. Or more clearly, it takes our first inflection point $(p,f(p)) \rightarrow (0,0)$, the origin. We'll refer to the origin as $P'$. Now, let's look at the remaining components of the transformation:

<center>
$h(x) = {\bf \frac{1}{q-p} }(f({\bf [q-p]}x+p)-f(p))$
</center>

Multiplying $x$ by $q-p$ results in _compressing_ the $x$-axis by a factor of $q-p$. So, the x coordinate distance between our inflection points is condensed from a length of $q-p$ to a length $\frac{q-p}{q-p} = 1$. Just to keep our scaling consistent throughout $f(x)$, we also scale the $y$-axis down by a factor $q-p$, so we add an extra factor of $\frac{1}{q-p}$. This factor is almost purely for aesthetic purposes, as you will see it will preserve the structure of our graphs and make it easier to see our scaled copy of $f(x)$ in $h(x)$. So, as the difference in $x$ coordinates between $P'$ and $Q'$ is 1, $Q'$ will be at $(1,h(1))$. $R'$ will retain its same definition as $R$, differing only in that it is on our newly transformed function.

<center>
  <div id="transformedGraph" style="width: 660px; height: 530px;"></div>
  <script src="/js/transformedGraph.js"></script>
</center>

Notice how the two inflection lines are parallel. That is due to that extra factor of $\frac{1}{q-p}$ in $h(x)$, but note that the math that follows is not dependent on it.

It's worth noting that we don't actually know any of the constants that shape our new quartic $h(x)=ax^4+bx^3+cx^2+dx+e$ as they don't change according to our scaling factors. However, we do know the solutions to $h''(x)=0$. Instead of using our function to find its second derivative like we did in our original approach, we are working backwards from our second derivative to narrow in on our function. Since we know where our inflection points are at, we can rewrite our $h''(x)$ as a product of factors.

<center>
$h''(x)=0 \rightarrow x=P',Q' \rightarrow x=0,1 \rightarrow h''(x)=12ax(x-1)$
</center>

The factor of $12a$ comes from the leading term when taking the second derivative of any general quartic, as we saw in the original attempt to prove this. Expanding this expression and integrating twice gives us:

<center>
$h''(x)=12ax(x-1)=12ax^2-12ax$
<br>
$h'(x)=4ax^3-6ax^2+b$
<br>
$h(x)=ax^4-2ax^3+bx$
</center>

Notice I didn't add a new constant after the second integration, as that is equivalent to the $y$-intercept, which we know to be at $(0,0)$. Now that we have $h(x)$ in terms of itself, separated from $f(x)$, we can easily find the coordinates of $Q'$ and find $h(1)$.

<center>
$h(1)=a(1)^4-2a(1)^3+b(1)=b-a \rightarrow Q':(1,b-a)$
</center>

Now we can create a new secant line $g(x)$ to pass through our two inflection points, $P':(0,0)$ and $Q':(1,b-a)$.

<center>
$g(x)=\frac{b-a-0}{1-0}(x-0)+0=(b-a)x$
</center>

Now we can continue using our original method, which is to find all solutions to $h(x)-g(x)=0$. Only this time, our transformations should net a cleaner equation.

<center>
$h(x)-g(x)=0$
<br>
$ax^4-2ax^3+bx-(b-a)x=0$
<br>
$ax^4-2ax^3+bx-bx-ax=0$
<br>
$ax^4-2ax^3-ax=0$
<br>
$ax(x^3-2x^2-1)=0$
</center>

That $ax$ we factored out is our solution at $x=0$, or $P'$, which we used to construct the line in the first place. Similarly, because we used Q' to construct the line as well at $x=1$, we can factor out an $x-1$ as well.

<center>
$ax(x^3-2x^2-1)=0$
<br>
$ax(x-1)(x^2-x-1)=0$
</center>

That last factor is the exact quadratic that we derived to define the golden ratio. Knowing that, we now have all of our solutions to the intersection points between our quartic and secant line.

<center>
$x=0,1,\large{ \frac{1 \pm \sqrt{5}}{2} }$
</center>

The negative solution to the golden ratio here is the fourth point of intersection at $S:(s,h(s))$ with $s<0$. Now the last thing to note is that our 3 points of interest, $P'$, $Q'$, and $R'$, are all collinear. So, they can be thought of as a projection of the $x$-axis to a sloped line that scales how far they are spaced apart. However, since this is multiplicative, the ratios will be the same, so we only need to look at the ratios between their $x$ coordinates.

<center>
$\large{ \frac{PR}{PQ} = \large{ \frac{P'R'}{P'Q'} } = \frac{\frac{1 + \sqrt{5}}{2} - 0}{1 - 0} = \varphi }$
</center>

You can also quickly find other ratios of different lengths and find other interesting connections. Take $\frac{PQ}{QR}$, for example.

<center>
$\large{ \frac{PQ}{QR} = \large{ \frac{P'Q'}{Q'R'} } = \frac{1 - 0}{\frac{1 + \sqrt{5}}{2} - 1} = \frac{1}{\varphi-1} }$
</center>

If you look at our defining quadratic $\varphi^2-\varphi-1=0$, it can be rewritten as $\varphi(\varphi-1)=1 \rightarrow \varphi=\frac{1}{1-\varphi}$. Completing our expression gives us:


<center>
$\large{ \frac{PQ}{QR} = \large{ \frac{P'Q'}{Q'R'} } = \frac{1 - 0}{\frac{1 + \sqrt{5}}{2} - 1} = \frac{1}{\varphi-1} = \varphi}$
</center>

Just as our golden rectangle previously foretold.
