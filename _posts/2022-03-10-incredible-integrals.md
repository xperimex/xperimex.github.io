---START_METADATA---
{
  "title": "Incredible Integrals and Tactful Techniques",
  "author": "Adi Mittal",
  "summary": "Flexible? Maybe. Flex-able. Definitely",
  "tags":[
    "me"
  ]
}


---END_METADATA---

This will be a slightly more theoretical, conceptual post than the others, but these tricks have that mathematical and problem-solving elegance that is too good not to share. We'll go over a shortcut for some certain integration by parts problems, and one that allows us to make educated guesses of antiderivatives to find an answer.

<!-- Talk about IBP + C, ansatz, and maybe Feynmann's trick -->

First, let's take a loot at the integration by parts shortcut.

## IBP, but You Forgot +C

This is by far my new favorite trick to pull out of my back pocket whenever I can. It leverages the fact of the innate products built into integration by parts, and the nature of antiderivatives. Though, I'm sure some of us could use a refresher on integration by parts.

### To Undo the Product Rule

When given the product of two functions $f(x)g(x)$, the standard formula to compute its derivative is 

<center>
$\frac{\mathrm{d}}{\mathrm{d}x} \ f(x)g(x) = f'(x)g(x) + f(x)g'(x)$
</center>

Now if you integrate both sides and rearrange a little bit we can conclude that

<center>
$\int \frac{\mathrm{d}}{\mathrm{d}x} \ f(x)g(x) = \int f'(x)g(x) \ dx + \int f(x)g'(x) \ dx$
<br>
$\int f(x)g'(x) \ dx = f(x)g(x) - \int f'(x)g(x) \ dx$
</center>

Let $u = f(x)$ and $v = g(x)$ to get that

<center>
$\boxed{ \int u \ dv = uv - \int v \ du \hspace{.2cm} }$
</center>

…which is precisely the integration by parts formula we've come to know. It really just is the opposite of the product rule. The main reason why it's such a useful technique is because if you have a function that's really hard or you don't know how to integrate, you can use it as your function $u$ and express its integral purely in terms of its derivative. Let's try this with an example:

<center>
$\int \ln x \ dx$
</center>

This doesn't seem like a particularly product-y integral that can leverage integration by parts, but it really is!

<center>
$\int \ln x \ dx = \int 1 \cdot \ln x \ dx$
</center>

Since we don't want to deal with integrating $\ln x$ (besides, that's what we're trying to find anyway), we can set $u = \ln x$ and $dv = 1 \ dx$. Then working it through we get that

<center>
$\int 1 \cdot \ln x \ dx = x \ln x - \int x \cdot \frac{1}{x} \ dx = x \ln x - x + C$
</center>

That's pretty neat! We were able to reduce a relatively hard integral into one that was much simpler by thinking of it in terms of what product of functions when differentiated would include our original integral. 

However, this doesn't always work by itself, and this is where our integral trick comes into play.

## Now, Remember Your +C

Let's try a very similar integral from before: 

<center>
$\int \ln(x+1) \ dx$
</center>

This doesn't look too bad, right? It's basically the same as before. Let's try the same choice of $u = \ln(x+1)$ and $dv = 1 \ dx$ again and see where it takes us.

<center>
$\int 1 \cdot \ln(x+1) \ dx = x \ln(x+1) - \int x \cdot \frac{1}{x+1} \ dx$
</center>

Aaand there's our problem. Our supposed simplified integral of $\int v \ du$ ended up with something also annoying: $\int x \cdot \frac{1}{x+1} \ dx$. This isn't too bad if you're okay with polynomial division (with this one being relatively easy, too), but it isn't necessarily trivial. Since we want to avoid doing more work, we can do much better by realizing an overlooked aspect of integration by parts.

We rewrote our original integral in the form of $\int u \ dv$, and later found an antiderivative $v$ from that differential. In our case, we let $dv = 1 \ dx$ and deduced that $v = x$ by undoing the power rule of differentiation. This isn't _wrong_, per se, but it is incomplete. The antiderivative of $1\ dx$ isn't $x$, but $x \ \mathbf{+ \ C}$. Since, remember, the derivative of any constant goes to 0, we can add whatever constant we want to the end of our antiderivative and it'll still remain valid.

So how can this help us? Well, let's do the same integral with the same choice of $u$ and $dv$, but instead of letting $v = x$, let's make $v = x+1$.

<center>
$\int 1 \cdot \ln(x+1) \ dx = (x+1) \ln(x+1) - \int (x+1) \cdot \frac{1}{x+1} \ dx$
</center>

Look at that! That last, previously annoying integral, has become much simpler! Instead of getting two polynomials dividing each other, our new choice of $v$ reduces it to $\int (x+1) \cdot \frac{1}{x+1} \ dx = \int 1 \ dx = x + C$. So, finally, we can conclude that

<center>
$\int \ln(x+1) \ dx = (x+1) \ln(x+1) - x + C$
</center>

In fact, for any choice of a constant $\alpha$, we can see that

<center>
$\int \ln(x+\alpha) \ dx = (x+\alpha) \ln(x+\alpha) - x + C$
</center>

It's such a simple trick, but an important reminder to remember the basics and fundamentals when attempting a problem. Besides, $+C$ being more than a formality is at least a little bit satisfying.


## Polynomial Predictions

The last integral trick is a bit niche—it relies on that second integral when doing IBP to give a quotient two polynomials of matching degrees. This next shortcut, though, uses this idea of polynomial degree a bit more cleverly, but does not always work. When it does, though, it's certainly satisfying.

Let's find the following antiderivative:

<center>
$\int \large{\frac{x^3 + 2x^2 + 3}{\sqrt{x^2 + 3}}}$ $dx$
</center>

This doesn't look particularly friendly, but we can make some observations about this function. The numerator of our function is a cubic, or a polynomial of degree 3. Similarly, our denominator is the square root of a quadratic, or polynomial degree 2. In the very loose sense of "degree" we can say that asymptotically, the denominator is closer to a degree 1 or linear polynomial (yes, I know that that $\sqrt{x^2} = |x| \neq x$, but just play along for now). So, if we were to carry out all of the polynomial long division, we'd expect our original function to behave like a degree $3 - \frac{2}{2} = 2$ polynomial.

Ok, so what? With basic integration, antidifferentiating a polynomial increases its degree by one. This is just the power rule.

<center>
$\int x^{\color{red}{n}} \ dx = \frac{1}{n+1}x^{\color{red}{n+1}}$
</center>

This fact implies that if our polynomial is loosely of "degree" 2, then integrating it should give us a function of degree $2+1=3$. So, let's make a guess at what our integral might look like.

<center>
$\int \large{\frac{x^3 + 2x^2 + 3}{\sqrt{x^2 + 3}}}$ $dx = (ax^2 + bx + c)\sqrt{x^2+3}$
</center>

This guess should look somewhat reasonable, since we have a quadratic multiplied by square root of another quadratic, which we loosely said was degree 1. And a polynomial of degree 2 multiplied by a polynomial of degree 1 gives us a polynomial of degree 3, which we wanted. However, you might wonder why we even wrote this as a product; why not just write this out as a pure cubic of $ax^3 + bx^2 + cx + d$? The main reason is expecting the chain rule of some kind to occur. When composing functions, the derivative—and therefore the integral—tend to include the structure of these compositions, so it's not unreasonable to make a guess with the denominator in the result.

Now here's the trick: let's differentiate both sides.

<center>
$\large{\frac{x^3 + 2x^2 + 3}{\sqrt{x^2 + 3}}}$ $= (2ax + b)\sqrt{x^2+3} + (ax^2 + bx + c) \cdot \large{\frac{x}{\sqrt{x^2 + 3}}}$
</center>

If we simplify this expression and expand the right side…

<center>
$\large{\frac{x^3 + 2x^2 + 3}{\sqrt{x^2 + 3}}}$ $= (2ax + b)\sqrt{x^2+3} + (ax^2 + bx + c) \cdot \large{\frac{x}{\sqrt{x^2 + 3}}}$
<br>
$x^3 + 2x^2 + 3 = (2ax + b)(x^2+3) + (ax^2 + bx + c) \cdot x$
<br>
$x^3 + 2x^2 + 3 = 3ax^3 + 2bx^2 + (6a + c)x + 3b$
</center>

For this last equation to hold, we need the coefficients to match.

<center>
$\color{red}{x^3} + \color{blue}{2x^2} + \color{green}{0x} + \color{purple}{3} = \color{red}{3ax^3} + \color{blue}{2bx^2} + \color{green}{(6a + c)x} + \color{purple}{3b}$
</center>

Therefore,

<center>
$\begin{align}
a & = \frac{1}{3} \\
\newline
b & = 1 \\
\newline
c & = -2
\end{align}$
</center>

Putting it all together, we can go back to our original guess of the antiderivative and find that

<center>
$\int \large{\frac{x^3 + 2x^2 + 3}{\sqrt{x^2 + 3}}}$ $dx = \boxed{\ (\frac{1}{3}x^2 + x - 2)\sqrt{x^2+3} + C \ }$
</center>

There we go! A succcessful antiderivative found.

This is trick is a great first attempt at integrating rational functions, but it is also extremely sensitive to minute changes in the integrand. For example, if we change our integral to

<center>
$\int \large{\frac{x^3 + 2x^2 + \color{red}{3}}{\sqrt{x^2 + 3}}}$ $dx \rightarrow \int \large{\frac{x^3 + 2x^2 + \color{red}{2}}{\sqrt{x^2 + 3}}}$ $dx$
</center>

our algorithm breaks. It's the cost associated with what makes this algorithm so convenient: we don't touch the numerator of the integrand at all. Our antiderivative guess only depended on the denominator, and as a result, the coefficients we tried to match at the end had no intrinsic tie to the numerator and thus polynomial we were matching. 

This integral shortcut's convenience is definitely a double-edged sword, but the method behind making these educated guesses is a useful idea in its own right to take away. For more on this type of integration, I recommend reading up on the [Risch algorithm](https://en.wikipedia.org/wiki/Risch_algorithm), a standard in computing indefinite integrals. Here's also [a very thorough synopsis](https://blog.wolfram.com/2021/08/18/new-methods-for-computing-algebraic-integrals/) on evaluating integrals on the Wolfram Blog.

## Feynman's At It Again

This last integration stratagem comes from none other than the celebrated Richard Feynman of physics fame, and thus has been aptly coined as Feynman's Intregral Trick.

…as it has been popularized. What I'm about to show has historically been known as the [Leibniz Integral Rule](https://en.wikipedia.org/wiki/Leibniz_integral_rule), or differentiation under the integral sign. Not quite the same ring to it, but nonetheless good to know for accuracy.

Let's try the following integral:

<center>
$\int_{0}^{1} \large{\frac{x^2 - 1}{\ln x}}$ $dx$
</center>

What we're about to do might seem insane, but it will be immensely helpful in a second. What we're going to do is _generalize_ this integral. Let

<center>
$f(\color{red}{t}) = \int_{0}^{1} \large{\frac{x^\color{red}{t} - 1}{\ln x}}$ $dx$
</center>

We've replaced the exponent of 2 with a $t$. So, in our new, generalized problem, we want to find $f(2)$. A useful fact also to note is that we know some values of $f(t)$. For example, we know that $f(0)=0$. How does this help? Well, now we can what the name of this trick alludes to—moreso outright says: we'll differentiate under the integral sign. Let's take the derivative of $f(t)$ with respect to $t$. 

<center>
$\large{\frac{\partial f}{\partial t}}$ $= \large{\frac{\partial}{\partial t}}$ $\int_{0}^{1} \large{\frac{x^{t} - 1}{\ln x}}$ $dx = \int_{0}^{1} \large{\frac{\partial}{\partial t} \frac{x^{t} - 1}{\ln x}}$ $dx = \int_{0}^{1} x^t \ dx$
</center>

That last integral is super easy, only reversing the power rule to calculate.

<center>
$\large{\frac{\partial f}{\partial t}}$ $= \int_{0}^{1} x^t \ dx = \large{\frac{x^{t+1}}{t+1}}$ $|_{0}^{1} = \large{\frac{1}{t+1}}$
</center>

Now that we know the derivative of $f(t)$, we can now integrate this simpler function in terms of known values and use the Fundamental Theorem of Calculus to find $f(2)$. 

<center>
$\int_{0}^{2} \partial f = f(2) - f(0) = f(2) = \int_{0}^{2} \large{\frac{1}{t+1}}$ $\partial t = \ln3 - \ln 1 = \boxed{\ln 3 \}$
</center>

Note how I used the Fundamental Theorem of Calculus with clever bounds for our integral. You could instead solve the differential equation generally, but the FTC skips shortcuts a few steps. So, after all of that, we can conclude 

<center>
$\int_{0}^{1} \large{\frac{x^2 - 1}{\ln x}}$ $dx = \ln 3$
</center>

As counterintuitive as it may seem, solving a general problem can sometimes actually be easier to solve than its individual cases. The best part about this technique, though, is that we haven't just solved one integral, but a whole _family_ of integrals. For any exponent $\alpha$, we can conclude that

<center>
$\int_{0}^{1} \large{\frac{x^\alpha - 1}{\ln x}}$ $dx = \ln (\alpha + 1)$
</center>

You might have noticed something different with this integral compared to our previous approaches: this applies to _definite_ integrals as opposed to _indefinite_ integrals (or antiderivatives). Namely, because of the fact we have to integrate not once but twice in this method. So, at the following step,

<center>
$\large{\frac{\partial f}{\partial t}}$ $= \int_{0}^{1} x^t \ dx = \large{\frac{x^{t+1}}{t+1}}$ $|_{0}^{1} = \large{\frac{1}{t+1}}$
</center>

if this was not a definite integral, we would end up with a $+C$ attached to the end of it that we would not be able to solve for. 

Here's another application of Feynman's trick:

<center>
$\int_{0}^{1} \large{\frac{\ln (x+1)}{x^2 + 1}}$ $dx$
</center>

Knowing Feynman's trick wins you the battle, but knowing _how_ to use it wins you the war. Many times, you have to be creative in your choice of parameter when wanting to differentiate under the integral sign, so don't be discouraged if it doesn't work the first time. For this particular integral, we'll want to consider

<center>
$f(t) = \int_{0}^{1} \large{\frac{\ln (tx+1)}{x^2 + 1}}$ $dx$
</center>

Now, we want to find $f(1)$, and we know that $f(0)=0$. Now let's differentiate both sides with respect to $t$.

<center>
$\large{\frac{\partial f}{\partial t}}$ $= \int_{0}^{1} \large{\frac{\partial}{\partial t} \frac{\ln (tx+1)}{x^2 + 1}}$ $dx = \int_{0}^{1} \large{\frac{x}{(tx+1)(x^2 + 1)}}$ $dx$
</center>

Decomposing that last integral into its partial fractions yields

<center>
$\large{\frac{\partial f}{\partial t}}$ $= \int_{0}^{1} \large{\frac{x}{(tx+1)(x^2 + 1)}}$ $dx = \large{\frac{1}{t^2 + 1}}$ $\int_{0}^{1} \large{\frac{-t}{tx+1}}$ $+ \large{\frac{x}{x^2+1}}$ $+ \large{\frac{t}{x^2 + 1}}$ $dx$
</center>

Now, with more elementary calculus, we can evaluate that integral.

<center>
$\int_{0}^{1} \large{\frac{-t}{tx+1}}$ $+ \large{\frac{x}{x^2+1}}$ $+ \large{\frac{t}{x^2 + 1}}$ $dx = -\ln(tx+1) + \frac{1}{2}\ln(x^2+1) + t\tan^{-1}(x) |_{0}^{1}$
<br><br>
$\large{\frac{\partial f}{\partial t}}$ $=\large{\frac{-4\ln(t+1) + 2\ln(2) + t\pi}{4(t^2 + 1)}}$
</center>

Now, we want $f(1)$, and know that $f(0)=0$, so let's integrate this function of $t$ from 0 to 1.

<center>
$f(1) = \int_{0}^{1} \large{\frac{-4\ln(t+1) + 2\ln(2) + t\pi}{4(t^2 + 1)}}$ $\partial t = \int_{0}^{1} \large{\frac{2\ln(2) + t\pi}{4(t^2 + 1)}}$ $\partial t + \int_{0}^{1} \large{\frac{-4\ln(t+1)}{4(t^2 + 1)}}$ $\partial t$
<br><br>
$f(1) = \int_{0}^{1} \large{\frac{2\ln(2) + t\pi}{4(t^2 + 1)}}$ $\partial t - \int_{0}^{1} \large{\frac{\ln(t+1)}{t^2 + 1}}$ $\partial t = \int_{0}^{1} \large{\frac{2\ln(2) + t\pi}{4(t^2 + 1)}}$ $\partial t - f(1)$
<br><br>
$f(1) = \large{\frac{1}{2}}$ $\int_{0}^{1} \large{\frac{2\ln(2) + t\pi}{4(t^2 + 1)}}$ $\partial t = \large{\frac{\pi \ln 2}{8}}$
</center>

Again, almost magically, by generalizing a hard integral, it became a much easier one to tackle.

<center>
$\int_{0}^{1} \large{\frac{\ln (x+1)}{x^2 + 1}}$ $dx = \large{\frac{\pi \ln 2}{8}}$
</center>

To give you an idea how powerful this technique is, the above integral comes from the [2005 Putnam Exam](https://kskedlaya.org/putnam-archive/2005.pdf). Not only does it come from one of the most difficult math tests, it's also the 5th problem of the first set of problems (with problem 1 being the "easiest" and 6 being near impossible). And, in only a few lines, Feynman and Leibniz had it beat.


## Conclusion

These are the three most recent integration techniques I have picked up and tucked away in my problem solving toolbox, but if you're interested in more advanced integral shortcuts and tricks, take a look at this [MathStackExchange post](https://math.stackexchange.com/questions/942263/really-advanced-techniques-of-integration-definite-or-indefinite/943212) I came across while doing this write-up. There are some genuinely mesmerizing ideas showcased there that just are out of the scope of my ability to explain, so do browse the forum if you're interested.