---START_METADATA---
{
  "title": "Trial and Eventual-Success",
  "author": "Adi Mittal",
  "summary": "This triangle though...",
  "tags":[
    "me"
  ]
}
---END_METADATA---
![]()


__How do you... How do you even...__ This is when you know the problem you are about to be shown, will be annoying. When a friend of mine first introduced this problem, I thought this would be very, VERY simple, to solve. Use some angle properties, use the given similar triangles, and soon enough, a solution will be found. Of course this didn't work. I tried a few other things, same result. Showed it to my family, not much help was gained. They tried what I did. Then it hit me. The goal is to find a specific __measure__ of the __triangle__s. __Trigonometry__ $=$ The __Measurement of Triangles__. The solution quickly followed using a specific property, and I was like, "Meh. That was quite obvious." Enough ranting, it's time you got a look at the problem itself.

<br>
_In the diagram below,_ $\angle ABC = \angle ACB = \angle DEC = \angle CDE$, $\,\overline {BC} = 8$, _and_ $\,\overline {DB} = 2$. _Find_ $\,\overline {AB}$
![](/img/trollTriangle.png)


<br>
When drawing everyting out...

![](/img/trollTriangleGiven.png)

<center>
*SPOILER ALERT*
<br>
Before you continue reading, I highly encourage you attempt this geometry problem. It's an interesting problem, and once you found the concept you need to use to solve it, it's all an easy ride down from there. Following this warning will be the full solution and my thoughts on how I solved this myself. I know I already talked about my thoughts and how I solved this a little in the beginning of this post, but from here on will be _everything_ I thought about.
<br>
__You have been warned...__
</center>
<br><br>

The property I thought of (after my 45 minutes of trial-and-error) that we can use to solve for $\,\overline {AB}$ is the __The Law of Sines__, which states:
<center>
$\large \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$
<br><br>
Where $A$ is the angle oposite of $a$, $\,B$ is the angle oposite of $b$, and $C$ is the angle oposite of $c$.
</center>

We can rewrite this using the diagram:

<center>
	
$\large \frac{\overline{BC}}{\sin \angle BAC} = \frac{\overline{AC}}{\sin \angle ABC} = \frac{\overline{AB}}{\sin \angle ACB}$

</center>

<br>
So now that we have this written out, we can start solving for $\,\overline {AB}$. For convenience, I'm going to refer to the angles equivalent to $\,\angle ABC$ as $\,\theta$.

Using the __Angle Sum Theorem__, $\,\angle BAC = 180 - 2 \theta$. Using this, we can find an expression equal to $\,\overline {AB}$.

<center>
	
$\large \frac{\overline {BC}}{\sin \angle BAC} = \frac{\overline {AB}}{\sin \angle ACB}$

<br><br>Doing some substitution...<br><br>

$\large \frac{8}{\sin 2 \theta} = \frac{\overline {AB}}{\sin \theta}$


</center>


For where the $\sin 2 \theta$ came from, $\sin 180 - 2 \theta$ when evaluated, is the same as $\sin 2 \theta$. Now for some expansion and evaluation...

<center>
	
$\large \frac{8}{2 \sin \theta \cos \theta} = \frac{\overline {AB}}{\sin \theta}$

<br><br>

$\overline {AB} \sin \theta \cos \theta = 4 \sin \theta$

<br><br>

$\overline {AB} = \large \frac{4}{\cos \theta}$

</center>

Now that we have an __expression__ for $\overline {AB}$, we just need to find a value of $\cos \theta$, and that will give us the length of $\overline {AB}$! So now, what can we do? What I first thought (based on the information we were given), if we find two expressions representing the value of the __same side length__, we can set those two expressions to equal one another, to find a value that makes that equation true. That equation will mostly likely output a value of a function of an angle, as we know very few side lengths, and know no angles (we're hoping it would output a value of $\cos \theta$). Again, this is only what I was thinking when solving this problem at the time. The only reason I thought this, is that I noticed two triangles, that were similar to $\triangle ABC$, contained within $\triangle ABC$. 

![](/img/trollTriangleSimilars.png)

<br>

We have similar triangles $\triangle DEC$ and $\triangle BEC$. And we know that they are similar as the both triangles share the same angles ($\theta, \theta, and \,180 - \theta$) as the original triangle $\triangle ABC$. And rememeber that side length I mentioned earlier that we could find two expressions for, and use those to solve for its length (that's a mouthful)? That length is $\overline {CE}$! It shares a side length with $\triangle DEC$ and $\triangle BEC$, and we can find our two expressions, by solving for the length of $\overline {CE}$ once, in $\triangle DEC$, and again in $\triangle BEC$. Agian, we're hoping for a value of $\cos \theta$. Starting by solving for $\triangle BEC$...

We are given the length of $\overline {BC} = 8$, which simplifies our job quite a bit. We can do the same thing we did to find an expression for $\overline {AB}$: Use the __Law of Sines__!

<center>
	
$\large \frac{8}{\sin \theta} = \frac{\overline {CE}}{\sin 2 \theta}$

<br><br>

$\large \frac{8}{\sin \theta} = \frac{\overline {CE}}{2 \sin \theta \cos \theta}$

<br><br>

$\overline {CE} \sin \theta = 16 \sin \theta \cos \theta$

<br><br>

$\overline {CE} = 16 \cos \theta$


</center>


<br>

We now have a value of $\overline {CE}$ from $\triangle BEC$, time to solve $\overline {CE}$ for $\triangle DEC$...

<br>
First off, all though it's not stated, we know the length of $\overline {DE}$. $\triangle BEC$ is an isosceles, where $\angle BEC = \angle ECB$, which also means $\overline {BC} = \overline {BE}$. As $\overline {BC} = 8$, therfore $\overline {BE} = 8$. Since we were told $\overline {DB} = 2$, we can solve $\overline {BE} - \overline {BD} = \overline {DE} = 6$. Now back to the all-mighty, __Law of Sines__...

<center>
	
$\large \frac{\overline {DE}}{\sin 2 \theta} = \frac{\overline {CE}}{\sin \theta}$

<br><br>

Substitution and expansion...

<br><br>

$\large \frac{3}{\sin \theta \cos \theta} = \frac{\overline {CE}}{\sin \theta}$

<br><br>

$\overline {CE} \sin \theta \cos \theta = 3 \sin \theta$

<br><br>

$\overline {CE} = \large \frac{3}{\cos \theta}$

</center>

<br>

Great! We're lucky that it came out as a value of $\cos \theta$, but anyways, we have our two expressions, now just to set them equal to one another...

<center>
	

$16 \cos \theta = \large \frac{3}{\cos \theta}$

<br><br>

$16 \cos^2 \theta = 3$

<br><br>


$cos^2 \theta = \large \frac{3}{16}$

<br><br>

$\cos \theta = \large \frac{\sqrt{3}}{4}$


</center>

<br>

Now that we have our value of $\cos \theta$, we can just substitute this into our original expression for $\overline {AB}$...

<center>
	
$\overline {AB} = \large \frac{4}{\cos \theta}$

<br><br>

$= \large \frac{4}{(\frac{\sqrt{3}}{4})}$

<br><br>

$ = \large \frac{16}{\sqrt{3}}$
</center>


<br>

And there it would be, our solution! Although it might of seemed quite lengthy to get to $\frac{16}{\sqrt{3}}$, it all just revolved around the one concept of the __Law of Sines__, so not to bad.

<br>

Although this is one way to obtain the solution, I'm sure there are other ways to tackle this problem, and I found another way which completely negates our first step, to find an expression for $\overline {AB}$, but adds an extra step to the end.

<br>
With our value of $\cos \theta = \frac{\sqrt{3}}{4}$, we can draw a right triangle with this as one of our angles with a bit moving around.

<center>
	
$\theta = \arccos \large \frac {\sqrt{3}}{4}$

</center>

![](/img/trollTriangleRight.png)

<br>

We can do this, because as we stated earlier $\theta = any\,angle\,equivalent\,to\, \angle ABC$ (and that's the exact angle we're working with). With this, we can state $\alpha = 90 - \arccos \large \frac {\sqrt{3}}{4}$ using the __Angle Sum Theorem__. Since we __bisected__ $\overline {BC}$ at $F$ to form the 2 right triangles within our isosceles triangle, the length of $\overline {BF} = 4$. We can then use some basic trigonometry to solve for $\overline {AB}$

<br>
<center>
	
$\alpha = 90 - \arccos \frac{\sqrt{3}}{4}$
<br><br>

$\sin \alpha = \large \frac{4}{\overline {AB}}$

<br><br>

$\sin (90 - \arccos \frac{\sqrt{3}}{4}) = \large \frac{4}{\overline {AB}}$

<br><br>

$\overline {AB} = \large \frac{4}{\sin (90 - \arccos \frac{\sqrt{3}}{4})}$


</center>
<br>
Just believe me this is equivalent to our original $\frac{16}{\sqrt{3}}$. You can check on a calculator if you want. Now this completes the same thing our first solution did, but I think we can all agree, that's not very clean, and not nice to look at. But hey, it works.


<br>

If you have any questions or comments, send me an email or leave a comment!


