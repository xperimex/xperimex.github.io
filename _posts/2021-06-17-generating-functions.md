---START_METADATA---
{
  "title": "Fruitful Fractions and Delightful Dice",
  "author": "Adi Mittal",
  "summary": "A powerful tool to reimagine counting",
  "tags":[
    "me"
  ]
}



---END_METADATA---
<script src="https://www.desmos.com/api/v1.4/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>

Try typing the fraction $\frac{1}{98}$ into your calculator see what you get. Don't have one on hand? Here's a calculator ready and waiting for you.

<center>
  <div id="calculator" style="width: 610px; height: 375px;"></div>
  <script src="/js/scientificFraction.js"></script>
</center>


Next try $\frac{100}{9899}$. See if anything stands out to you. Even with the few amount of decimals this displays, you might notice some patterns appearing. $\frac{1}{98}$ expanded as a decimal appears to contain the powers of 2! The second fraction might require for a more robust calculator, but with enough decimals it's clear that it too has a hidden sequence: the Fibonacci numbers are in its decimal expansion!

You can try and guess at other fractions with unique expansions, but there is a systematic way to generate these fractions to show not just simple sequences like this, but any sequence you want! It's all a byproduct of one of the most powerful tools in discrete math and combinatorics: the generating function.

## Generating Functions and Recurrence Relations
First, some terminology and context. A **generating function** may look complicated, but its essence is actually very simple. If you have some sequence of numbers, say, $A = \\{ a_0, a_1, a_2, a_3, \cdots \\}$, it's corresponding generating function is the power series $A(x) = a_0 + a_1x^1 + a_2x^2 + a_3x^3 + \cdots$. That's all a generating function is! If you like fancy math notation, we can write this more concisely as $A(x) = \sum_{n=0}^{\infty} a_nx^n$. Something important to note, though, is that the powers of $x$ in the series don't actually _mean_ anything. We only really care about the coefficients, and we happen to be using the series to **encode** our sequence $A$. Herbet S. Wilf put this best in his aptly named book, [generatingfunctionology](https://www2.math.upenn.edu/~wilf/gfology2.pdf): "A generating function is a clothesline on which we hang up a sequence of numbers for display." Basically, our generating function is purely a convenient way to place all of our sequence terms into a singular object. That's why it's not just any power series, but a _formal power series_, where it extends on towards an infinite number of terms where we don't really care about convergence, but rather just the representation itself. What's great about generating functions too are that it turns questions about sequences and integers into one about functions, and over the course of centuries, we can do a _lot_ with functions. You'll see quickly why we use a power series specifically, as exponent properties play very nicely into the types of problems and tricks generating functions can help us out with. Knowing this, you shouldn't let the notation of a generating function ever scare you! They're truly a simple object obscured by harsh notation, so always focus what they represent instead of how they are written.

So, for our powers of 2, its sequence would be $P=\\{ 2^n \\}_{n=0}^{\infty}$ and corresponding generating function would be $P(x) = 1+2x+4x^2+8x^3+\cdots$. If you're familiar with your series, this is a geometric series and we can condense it into the following formula: $A(x) = 1+(2x)^1+(2x)^2+(2x)^3 + \cdots = \frac{1}{1-2x}$. Remember how I said the powers of $x$ don't really mean anything? This is a case where we can actually leverage the fact that our generating function is in fact a "function" (this is a specific use case as we normally don't treat them as standard functions). Consider the general generating function $A(x)=a_0+a_1x+a_2x^2+a_3x^3+\cdots$. Watch what happens if we plug in $A(.1) = a_0+a_1(.1)+a_2(.001)+a_3(.0001)+\cdots$. This may not look like much, but since we use a base 10 counting system, plugging in $.1$ is the same thing as moving a decimal point to the left one spot. So, we can rewrite that infinite sum as the nice float $a_0.a_1a_2a_3\ldots$ Each number in our sequence becomes a decimal in our final number! 

But, this can become a problem if a number in our sequence $a_n$ is more than one digit long, so we can change the value we plug in to get more precise decimals with more numbers from our sequence: $A(.01) = a_0.0a_10a_20a_3\ldots$ and just like that we have buffer 0s in between numbers. So, doing this for our generating function for the powers of 2, we get that $P(.01) = \frac{1}{1-2(.01)} = \frac{1}{.98} = 1.0204081632\ldots$ Just for aesthetic pleasure, I like to multiply the final fraction by the value of $x$ we plugged in to shift that initial $a_0$ after the decimal point, and get a nicer looking fraction at the end: $\frac{1}{.98}\cdot .01 = \frac{1}{98}$, giving the familiar fraction from the start and the nice decimal of $.010204081632\ldots$

As cool as this may be, this relied on the fact we recognized what kind of series the generating function was (for the powers of 2, it was geometric). Let's take a look at a slightly more complicated sequence: the Fibonacci sequence. Unlike the powers of 2 where we knew a nice closed formula off the bat for each term, we don't have one (shhh) for the Fibonacci numbers. Instead, we can define the sequence by relating it to other terms. We'll call the Fibonacci sequence $F = \\{ f_0, f_1, f_2, f_3, \cdots \\}$ and its associated generating function $F(x) = \sum_{n=0}^{\infty} f_nx^n$ where $f_n$ is the nth Fibonacci number. By definition of the Fibonacci numbers, we also know that

<center>
$f_{n+2} = f_{n+1} + f_n \hspace{.3cm} (f_0 = 0, f_1 = 1)$
</center>

This equation is known as a **recurrence relation**, as, well, it's a recursive relationship; any given term in the sequence can be expressed in some form related to other terms. What's useful about having an equation like this is that we can relate this to our generating function! If we can solve for the generating function, we might be able to get a function that can get us our cool fraction with the sequence embedded in the decimals again! If we multiply through by $x^n$, we get…

<center>
$f_{n+2}x^n = f_{n+1}x^n + f_nx^n$
</center>

…and then we sum over from $0$ to $\infty$ we end up with…

<center>
$\sum_{n=0}^{\infty} f_{n+2}x^n = \sum_{n=0}^{\infty} f_{n+1}x^n + \sum_{n=0}^{\infty} f_nx^n$
</center>

We're now starting to have a set of terms that awfully resemble our generating function $F(x)$. Let's look at the left-hand and see if we can make any sense of it. Just writing it out can tell us a lot, so let's do that.

<center>
$\sum_{n=0}^{\infty} f_{n+2}x^n = f_2 + f_3x + f_4x^2 + f_5x^3 + \cdots$
</center>

It looks like our original generating function, but offset! Remember, we want the subscript of the term coefficient to equal the power of the $x$ it is attached to. We can multiply through by $x^2$ to easily fix that.

<center>
$x^2 \cdot \sum_{n=0}^{\infty} f_{n+2}x^{n} = f_2x^2 + f_3x^3 + f_4x^4 + f_5x^5 + \cdots$
</center>

However, we don't want to actually change the value of our recurrence and add extra factors to both sides. To counter the effects of the multiplication, we just add a term of $\frac{1}{x^2}$ before it since $\frac{1}{x^2} \cdot x^2 = 1$, negating the effects of our multiplication.

<center>
$\sum_{n=0}^{\infty} f_{n+2}x^{n} = \frac{1}{x^2}(f_2x^2 + f_3x^3 + f_4x^4 + f_5x^5 + \cdots)$
</center>

Now look at that right-hand side: it's our generating function $F(x)$ missing the first two terms, $f_0$ and $f_1x$!

<center>
$F(x) = \color{red}{f_0 + f_1x} + f_2x^2 + f_3x^3 + f_4x^4 + f_5x^5 + \cdots$
<br>
$F(x) \color{red}{- f_0 - f_1x} = f_2x^2 + f_3x^3 + f_4x^4 + f_5x^5 + \cdots$
</center>

Finally, after plugging it all back in, we end up with

<center>
$\sum_{n=0}^{\infty} f_{n+2}x^{n} = \frac{1}{x^2}(F(x)-f_0-f_1x)$
</center>

You can do a similar process with the other terms on the right-hand side of our original equation to finally get an expression in terms of the generating function, instead of the recurrences.

<center>
$\frac{1}{x^2}(F(x)-f_0-f_1x) = \frac{1}{x}(F(x)-f_0) + F(x)$
</center>

Now we just need to turn the wheel and solve for $F(x)$!

<center>
$\begin{align}
\frac{1}{x^2}(F(x)-f_0-f_1x) & = \frac{1}{x}(F(x)-f_0) + F(x) \\
\newline
F(x)-f_0-f_1x & = F(x)x-f_0x + F(x)x^2 \\
\newline
F(x)-F(x)x-F(x)x^2 & = f_0 - f_0x + f_1x \\
\newline
F(x)(1-x-x^2) & = f_0 - f_0x + f_1x \\
\newline
F(x) & = \small{\frac{f_0 - f_0x + f_1x}{1-x-x^2}} \\
\end{align}$
</center>

Remember, we had initial values $f_0=0$ and $f_1=1$, so we can plug those in to further simplify our fraction.

<center>
$F(x) = \large{\frac{x}{1-x-x^2}}$
</center>

And sure enough, $F(.01) = \frac{100}{9899} = 0.0101020305081321 \ldots$

But why stop there? Although we just solved that $F(x) = \frac{x}{1-x-x^2}$, don't forget our original definition that $F(x) = \sum_{n=0}^{\infty}f_nx^n$. These equations imply that if we can find a power series $\sum_{n=0}^{\infty}f_nx^n = \frac{x}{1-x-x^2}$, we should get a closed form for the nth Fibonacci number!

First, we need to decompose our function into its [partial fractions](https://brilliant.org/wiki/partial-fractions/). Let $\phi = \frac{1+\sqrt{5}}{2}$ and $\varphi = \frac{1-\sqrt{5}}{2}$.

<center>
$\normalsize{ \frac{x}{1-x-x^2} = \frac{x}{(1-\phi x)(1-\varphi x)} = \frac{1}{\phi-\varphi}(\frac{1}{1-\phi x} - \frac{1}{1-\varphi x}) = \frac{1}{\sqrt{5}}(\frac{1}{1-\phi x} - \frac{1}{1-\varphi x}) }$
</center>

Note our final result mimics the closed form of two different geometric series!

<center>
$\frac{1}{\sqrt{5}}(\frac{1}{1-\phi x} - \frac{1}{1-\varphi x}) = \frac{1}{\sqrt{5}} ( \sum_{n=0}^{\infty}(\phi x)^n - \sum_{n=0}^{\infty}(\varphi x)^n) = \sum_{n=0}^{\infty}\frac{\phi^n-\varphi^n}{\sqrt{5}}x^n$
</center>

So, to wrap it all up:

<center>
$F(x) = \sum_{n=0}^{\infty}f_nx^n = \sum_{n=0}^{\infty}\frac{\phi^n-\varphi^n}{\sqrt{5}}x^n \rightarrow$ 
<br><br>
$\large{f_n = \frac{\phi^n-\varphi^n}{\sqrt{5}}}$
</center>

Just like that, we've found a formula for the nth Fibonacci number! This is only a _sliver_ of the power of generating functions: being able to turn a recurrence relation into a closed form solution, barely even interacting with the sequence at all! 

Now, let's try a different type of problem generating functions can help us out with.

## Counting Birds with Generating Functions
Say you're visiting an aviary with some friends. Well-respected, the aviary has a vast number of birds, but they've noticed some interesting patterns in the behavior of their avifauna: their hummingbirds always fly solo; blue jays tend to nest in fours; toucans perch in pairs; and cassowaries chill in fives. How many ways can you see a total of 20 birds? 

This may seeem like an odd spot for generating functions, but we'll see a nice property of exponents that allows us to use them. Here, a generating function $A(x) = \sum_{n=0}^{\infty}a_nx^n$ is an encoding such that each term $a_n$ denotes how many ways there are to see $n$ birds. Let's write the generating function for hummingbirds:

<center>
$H(x) = 1+x+x^2+x^3+x^4+\cdots$
</center>

So, if we want to see any number of birds, there is exactly one way we can see that many birds with only seeing hummingbirds. That makes sense! What about blue jays?

<center>
$B(x) = 1+x^3+x^6+x^9+\cdots$
</center>

Jays come in groups of 3, so it would make sense we could only see total birds in multiples of 3. If we want to see a group of 6 birds with only jays, there is one way we can do that (that is by seeing two groups of jays), but 0 ways to see 5 birds of only jays. Similar generating functions can be written for the other birds.

<center>
$\begin{align}
H(x) & = 1+x+x^2+x^3+x^4+\cdots
\newline
B(x) & = 1+x^3+x^6+x^9+x^{12}+\cdots
\newline
T(x) & = 1+x^2+x^4+x^6+x^8+\cdots
\newline
C(x) & = 1+x^5+x^{10}+x^{15}+x^{20}+\cdots
\end{align}$
</center>

The surprising thing is now, if we want to see the number of ways to see $n$ birds through a combination of different birds, all we have to do is multiply the generating functions together! But why would this ever work? Well, let's think of what our exponents mean in each function: they are the total number of birds we see from a group. So, if our giant product results in a term of, say, $x^{14}$, we know that is one way to see 14 birds. Why? Because exponents turn multiplication into addition: $x^a \cdot x^b = x^{a+b}$. So, if we get multiple copies of $x^{14}$, they'll all accumulate in the coefficient of that term, giving us the different ways to see a total of 14 birds! This is why using a power series specifically for generating functions are so helpful: not only do the exponents have a clear meaning when applied, they also carry over the nice exponent properties we can leverage in counting. In general, to count the number of ways to see $n$ birds, we look for the coefficient in front of $x^n$.

<center>
$H(x)B(x)T(x)C(x) = $
<br> 
$(1+x+x^2+\cdots)(1+x^3+x^6+\cdots)(1+x^2+x^4+\cdots)(1+x^5+x^{10}+\cdots)$
</center>

Expanding that out seems like a terrible idea, so we won't… We'll let Python do it instead! It's totally doable to do this by hand to systematically _extract the coefficient_ of $x^{20}$ (especially with the series we've selected, involving many binomial coefficients with its partial fraction decomposition), but the algebra along with it can get annoyingly tedious. I'm sure there are clever ways to go about keeping track of which terms you're multiplying, but that's out of the scope of this post. 

<center>
$H(x)B(x)T(x)C(x) = 1+1x+2x^2+3x^3+ \cdots + 80x^{19} + 91x^{20} + 101x^{21}+\cdots$
</center>

So, if you go to the aviary, we know there are 91 different ways to see a total of 20 birds. If you're interested in seeing the entire mathematical crank turn, great YouTuber Mathologer made an excellent video answering a similar question [counting the number of ways to make change for dollar](https://www.youtube.com/watch?v=VLbePGBOVeg) in which he spends much more time going into detail the algebra to solve such a problem analytically. Regardless, I hoped this gave insight into how great generating functions are as a combinatorial tool for counting, in addition to its utility as a discrete tool.

Before we end, I want to show you one more cool use case of generating functions that involve probability distributions.

## Delightful Dice and Probability Distributions
A staple of tabletop gaming has always been the pair of six-sided dice. Notably, it's respected for being a considerably fair distribution, with the most likely outcome being the middle value of 7 at $\frac{1}{6}$, and the two extreme values of 2 and 12 being the least likely, both at probability $\frac{1}{36}$. This makes it great for board games, with extraordinarily good, high values being just as likely as their low, unlucky counterparts. But, these dice are boring: for centuries our dice have remained a simple numbering from 1–6, but is there a different numbering that we can use to maintain our fair play?

If we use our familiar friend the generating function, we can find out with little thinking required! We can represent our die as a generating function $P(x) = \sum_{n=0}^{\infty}p_nx^n$ where $p_n$ is the probability of rolling a value $n$. So, for a standard die its generating function would be

<center>
$\normalsize{\frac{1}{6}x^1+\frac{1}{6}x^2+\frac{1}{6}x^3+\frac{1}{6}x^4+\frac{1}{6}x^5+\frac{1}{6}x^6}$
</center>

as you have an equal chance of rolling any number 1–6, and no other possible number (so all of their coefficients are 0 and get cancelled out). If we had a die with sides 1,2,2,7,7,7, it's generating function would look like

<center>
$\normalsize{\frac{1}{6}x^1+\frac{1}{3}x^2+\frac{1}{2}x^7}$
</center>

So, the generating function of the sum of _two_ dice are just it's product like last time (to see why this is true, think about what the product means: exponents multiply into a sum, and therefore count the number of ways to sum a number from rolling two dice. We then normalize it by $\frac{1}{36}$ to get final probabilities). So, if we had two new dice—we'll call them die A and die B—with new generating functions $A(x)$ and $B(x)$, their product should equal the product of the normal dice!

<center>
$A(x)B(x) = \frac{1}{36}(x^1+x^2+x^3+x^4+x^5+x^6)^2$
</center>

So, now what? The right-hand side is currently packaged as two factors: two copies of the normal die's generating function. That means that if we can find a way to re-factor that right-hand side into two new generating functions, we should get the labelling for two new dice that are still just as fair as our ordinary dice!

<center>
$\begin{align}
  \frac{1}{36}(x^1+x^2+x^3+x^4+x^5+x^6)^2 & = \frac{1}{36}x^2(1+x+x^2+x^3+x^4+x^5)^2 \\
  \newline
  & = \frac{1}{36}x^2(1+x+x^2)^2(1+x^3)^2
  \newline
  & = \frac{1}{36}x^2(1+x+x^2)^2(1+x)^2(1-x+x^2)^2
\end{align}$
</center>

Now, we just need to figure out how to repackage this into 2 terms and we should have our dice! Some things to note: 1) All the coefficients in $A(x)$ and $B(x)$ need to be nonnegative multiples of $\frac{1}{6}$, as they all should have positive probabilitiy of rolling something and each die has 6 sides. 2) A(x) and B(x) both need to have at least one factor of $x$ as if otherwise, we might end up with 0s on our dice (which can make for some very boring dice). So, right now we have $A(x) = \frac{1}{6}x$ and $B(x) = \frac{1}{6}x$. We now need to think about distributing the remaining factors $(1+x+x^2)^2(1+x)^2(1-x+x^2)^2$. Since we only have six sides on our dice, it follows that our coefficients of both $A(x)$ and $B(x)$ must sum to 6 (how can we put 7 numbers on a six sided die?). Since our factors' have coefficient sums of 3, 2, and 1 respectively, [it follows immediately that both $A(x)$ and $B(x)$ need at least one factor of $(1+x+x^2)$ and one factor of $(1+x)$](#footnote). So, what do we do with the two factors of $(1-x+x^2)^2$? We can either give both to die A (or B, whichever you like thanks to symmetry), or one to A and one to B. If we do the latter, we get:

<center>
$\begin{align}
A(x) & = \frac{1}{6}x(1+x+x^2)(1+x)(1-x+x^2) \\
\newline
& = \frac{1}{6}(x^1+x^2+x^3+x^4+x^5+x^6) \\
\newline
B(x) & = \frac{1}{6}x(1+x+x^2)(1+x)(1-x+x^2) \\
\newline
& = \frac{1}{6}(x^1+x^2+x^3+x^4+x^5+x^6)
\end{align}$
</center>

Which is just our normal dice from before, labellling both dice 1,2,3,4,5,6. But if we try the former option...

<center>
$\begin{align}
A(x) & = \frac{1}{6}x(1+x+x^2)(1+x)(1-x+x^2)^2 \\
\newline
& = \frac{1}{6}(x+x^3+x^4+x^5+x^6+x^8) \\
\newline
B(x) & = \frac{1}{6}x(1+x+x^2)(1+x) \\
\newline
& = \frac{1}{6}(x+2x^2+2x^3+x^4)
\end{align}$
</center>

Now we get two very unique dice: label die A 1,3,4,5,6,8 and die B 1,2,2,3,3,4. Of course, our multiplying these two generating functions will verify their fairness as we didn't actually change any of the factors that goes into it, but you can also draw these dice's summation table and verify that all the numbers 2–12 appear as much as they should. If you want to mess with your friends a bit, making a pair of these dice for your next occasion is definitely an easy project to do in a day.

## Conclusion
Hopefully this has shown you just how powerful generating functions and how wide of an application they have in discrete problems. From sequences, to counting, to probability, these are just a fraction of the potential generating functions have, and should always be kept in the back of your mind as not just a tool, but really as a symbol of an ongoing theme in problem solving: always look for out-of-the-box perspectives. I've spoken about duality a bit before (and it definitely warrants its own post), but just how powerful alternative representations can be can't be understated. Generating functions took seemingly impossible questions about discrete sequences and indistinguishable counting to questions about functions and series and required at most a bit of high school algebra to manipulate some of the equations.

### Footnote
While I left links to resources for relevant techniques and tools that I didn't explain, I do want to talk briefly on how I determined distributing factors for our polynomial coefficients in the dice problem as it's not completely obvious if you haven't seen it before. In the dice problem, I said that we need our final polynomial's coefficients to sum to 6. To ensure they summed to 6, I said that they both must be the product of a polynomial with coefficient sum of 3 and a polynomial with a coefficient sum of 2. This is because of the nice property that the product of two polynomials' coefficient sum is equal to the coefficient sum of their polynomial product. In other words: let $C$ be a function that takes a polynomial $f(x)$ as an argument, $C(f(x))$ returns the sum of the coefficients of $f(x)$. I want to show you that $C(f(x)) \cdot C(g(x)) = C(f(x)g(x))$. 

Let's first do an example. Let $f(x) = x^2 - 3x + 2$ and $g(x) = 2x - 4$. The coefficient sum of $f(x)$ is $C(f(x)) = 1-3+2 = 0$. Similarly, for $C(g(x)) = 2-4 = -2$. Therefore, $C(f(x))\cdot C(g(x)) = 0\cdot -2 = 0$. So, we'd then expect $C(f(x)g(x)) = 0$ as well.

Now, let's see what the product of the two functions is and what its coefficient sum is. Let $h(x) = f(x)g(x) = 2x^3 - 10x^2 + 16x - 8$. Then, $C(h(x)) = 2-10+16-8 = 0$, just as we foresaw.

Why is this true? It comes down to a clever way of viewing the coefficient sums. Note that for any polynomial $f(x)$, $C(f(x)) = f(1)$. This fact is because plugging in 1 to any polynomial completely removes the powers of $x$, as $1^n = 1$ and $m\cdot 1 = m$, leaving us only with the coefficients. This allows us to rewrite $C(f(x)) \cdot C(g(x)) = f(1)\cdot g(1)$. Now, what about $C(f(x)g(x))$? Well, remember we defined $h(x) = f(x)g(x)$, so that means $C(f(x)g(x)) = C(h(x)) = h(1) = f(1)\cdot g(1)$, which is exactly what we got before! So this means that for any polynomial with coefficient $n$, it can be written as the product of two smaller polynomials with coefficient sums $a$ and $b$ with the only requirement that $ab = n$. That's how I knew in the dice problem that each die's generating function needed a factor with coefficient sums 3 and 2, since $3\cdot 2 = 6$.