---START_METADATA---
{
  "title": "Linear Programming and Laudable Polytopes",
  "author": "Adi Mittal",
  "summary": "Monopolize the world with mx+b",
  "tags":[
    "me"
  ]
}


---END_METADATA---

You're a business tycoon. You have ideas in mind but no products on hand. You need to make a quick buck now and all you have is some needlework on your belt to carry you. If you wanted to maximize profit between making hats and shirts, what combination of the two should you make? Well, let's look at what our goal is. If I make \$15 per shirt, and \$10 per hat, we can have a simple goal of

<center>
$\max(15s + 10h)$
</center>

Obviously, we can't just make infinite of each wearable. We have some constraints between available cloth, printing, and effort. If you have 20 sheets of cloth, and each shirt requires $\frac{1}{2}$ of one and the hats only require $\frac{1}{5}$ of one. For printing, maybe you only have enough ink for 100 prints total. Finally, hats are hard to make, so you cap yourself at only making 70 and no more. We have a list of constraints which can be nicely added as a set of inequalities:

<center>
$\max(15s + 10h)$ </br>
$\begin{align}
\frac{1}{2}s + \frac{1}{5}h & \leq 35 \\
\newline
s + h & \leq 100 \\
\newline
h & \leq 70
\end{align}$
</center>

This isn't an easy system to solve as, well, we're not solving anything in the traditional sense by plugging in equations to one another, nor is it a standard maximization problem where we can take some form of a gradient since every equation here is a line, so we would only get constants that give us no new information. 

This type of problem where we want to maximize a linear equation that is also bound by a set of linear restraints is called a **linear program**. These types of problems are called specifically programs as you'll see that we have analytic ways to find solutions, but to find the _best_ solution requires some well-crafted algorithms to make solving them faster and more efficient. Before we can understand the 2, and later the general $n$, variable set up, let's try an easier case.

## 1D Linear Program

As with all problems, let's try and cut back on degrees of freedom so we can really focus on what's going on here. Instead of maximizing a function of 2 variables, let's do a function of 1 variable.

<center>
$\max(3x)$</br>
$\begin{align}
5x & \leq 50 \\
\newline
x & \geq 6
\end{align}$
</center>

This isn't all that interesting, as I'm sure the answer is popping out almost immediately: $\max(3x)=30$ from since we can only have at most 10 of variable $x$.

