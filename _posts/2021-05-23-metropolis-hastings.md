---START_METADATA---
{
  "title": "Metropolis-Hastings and MCMC, Briefly",
  "author": "Adi Mittal",
  "summary": "How to guess mathematically",
  "tags":[
    "me"
  ]
}



---END_METADATA---

Today, I want to talk about a really powerful tool in math and statistics, that on its own may seem very niche, the concept behind it is something really—and I mean _really_—powerful and is how many other discoveries and tools are made and immortalized. In particular, I want to talk about the Metropolis-Hastings algorithm and Monte Carlo Markov Chain methods. But first, some review.

## Markov Chains
__Markov chains__, in essence, are a way to model a process that randomly jumps between different outputs, where each output is said to have some probability to jump to other outputs. They're sort of like rolling dice, but the likelihood you roll any number is only dependent on the number you rolled last. It might help to describe this with an example. Let's say you want to know what the weather will be in 5 days: will it be sunny or rainy? Fortunately, the weather doesn't vary too much, so if it's sunny one day, it's likely to be sunny again the next day with 80% chance. If it's rainy, it will likely be rainy again too, with, say, 60% chance. This can be shown quite succinctly in a little diagram:

<img src="/img/metropolis-hastings/markovChainExample.png">

This is our actual Markov chain, showing the two _transition states_, S(unny) and R(ainy) with their associated _transition probabilities_. However, we can't actually *do* much with just a picture alone. So, we can rewrite these probabilities and encode them in a matrix:

<center>
$
M =
\begin{bmatrix}
.8 & .2 \\\
.4 & .6
\end{bmatrix}
$
</center>

You can think of each row as a different state for current weather, and the columns as probabilities for different states of tomorrow's weather. In this case, I have written row 1 and column 1 to indicate sunny days, and row 2 and column 2 to be rainy days. That's why entry $a_{1,1}$ in row 1, column 1 shows 80%, because if it is sunny today (row 1), we expect an 80% chance for it to be sunny tomorrow (column 1). Similarly $a_{2,2}=.6$, as if it's rainy today, we expect a 60% chance for rain again. $a_{1,2}=.2$ means that if today is sunny, then there is a 20% chance of rain tomorrow, and for completeness sake, $a_{2,1}=.4$ indicates a 40% chance for it to be sunny given today is rainy.

What we've built here is known as a _transition matrix_, as, well, it's a matrix that shows transition probabilities; it's a matrix that shows how likely we are to jump from one state to another. In this case, our states are the different weathers: sunny or rainy. So, how does this help us answer our original question of the what the weather will be in 5 days? Well, let's first try to find the weather 2 days from now. We know how to model 1 day from now, and since these are probabilities, wouldn't it make sense just to multiply our matrix by itself?

<center>
$
M^2 =
\begin{bmatrix}
.72 & .28 \\\
.56 & .44
\end{bmatrix}
$
</center>

Our probabilities have changed a little bit. Now it's saying, if today is sunny, there is a 72% chance it will be sunny 2 days from now. The reason why multiplying our matrix itself to get this result makes sense is because of the mechanics of matrix multiplication essentially asks: "What is the probability from getting from one state to another in two steps?" If you work out the multiplication itself, it might be clearer, but the way I like to think about it is in terms of transformations of space. For those familiar with a bit of linear algebra, we can think of our matrix $M$ as a collection of basis vectors that scale space (where our vectors in space can be thought of as a collection of starting states, i.e. the initial observed proportion of sunny days to rainy days). So applying $M$ once transforms space, we can then take that as a new "default" or "unit". If we apply $M$ again to our basis vectors, it has the effect of transforming space once again. This can be thought of as our standard, independent probability multiplication, but instead of changing a singular probability (i.e. dice value), we are changing two (likelihood of sunny _and_ likelihood of rainy days).

With this in mind, our question is easy. It boils down to what $M^5$ is.

<center>
$
M^5 =
\begin{bmatrix}
.67008 & .32992 \\\
.65984 & .34016
\end{bmatrix}
$
</center>

So if today is sunny, we look at row 1 and can expect a 67.008% chance of sunny weather, and if it's rainy, row 2 shows a 65.984% chance for sunny weather. Nice! But you might be looking at that matrix and notice that row 1 and row 2 are _almost_ the same. Watch what happens if we don't check for any 5 days in the future, but if we look towards an infinite number of days ahead?

<center>
$
\lim\limits_{n\to\infty} M^n =
\begin{bmatrix}
.\overline{666} & .\overline{333} \\\
.\overline{666} & .\overline{333}
\end{bmatrix}
$
</center>

The rows *do* become the same. So, if we were to pick a random day far, far into the future, we can expect it to be twice as likely to be sunny than rainy regardless of today's weather. There's two important interpretations of this fact. 1) going back to our transformation of space idea, this _equilibrium state_ is our eigenvector (specifically for $\lambda=1$) of our transition matrix $M$. Meaning, it is the solution to the matrix equation $vM = v$ where $v$ is a row vector (here, $v=\begin{bmatrix} .\overline{666} & .\overline{333} \end{bmatrix}$). The second—and more important—way to think of this equilibrium state is that it is the final, or _stationary_ distribution of sunny and rainy days. That is, if you took the fraction of $\frac{\textrm{Sunny Days}}{\textrm{Total Days}}$, you'd expect it to approach $\frac{2}{3}$ as time went on, and $\frac{\textrm{Rainy Days}}{\textrm{Total Days}}$ to likewise approach $\frac{1}{3}$.

To summarize, here are a few important concepts about Markov chains:

1. A Markov chain is a random process that describes the ability to switch between multiple states.
2. A Markov chain's probability for any future state depends only on the current state (this is also known as the [Markov property](https://en.wikipedia.org/wiki/Markov_property)).
3. All Markov chains will eventually reach an equilibrium state that describes the final distribution of states over a long time.

Markov chains are extremely powerful tools to model dynamics with multiple states due to their above properties, but some of their uses from chaos to disease modeling deserve their own post another day.

----------

If you understood this so far, you've got the hardest part of Markov chain Monte Carlo methods under your belt. That being said, we are still missing second MC of MCMC.

## Monte Carlo Simulations
_Monte Carlo simulations_ are probably the closest you'll ever get to the scientific version of guess-and-check. The idea is if there is something that's too hard to calculate, you do a bunch of mini, random experiments to obtain data (called samples) that can give us numerical approximations. It's very akin to Bayesian thinking: the more data you give to your approximation, the better the approximation you can update to be more confident. As with all things, let's do a quick example.

If I hand you a coin, you probably would assume it's a fair coin: 50/50 chance for either heads or tails.


Reframing questions and asking them from a different perspective is so incredibly important, even if this might not inspire you. From Fourier asking about sums of sines (link to series) to why the Mandelbrot set has a cardioid, to even what 4-dimensional space means (encoding), there's so much to gain from just asking: "What if ____?"
