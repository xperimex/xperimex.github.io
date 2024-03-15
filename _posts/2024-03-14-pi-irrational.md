---START_METADATA---
{
  "title": "e, π, and Irrational Numbers",
  "author": "Adi Mittal",
  "summary": "Your password is not protected perfectly, but it's good enough.",
  "tags":[
    "me"
  ]
}


---END_METADATA---

Irrational numbers are a bit strange to think about. In the sense, they were the first "new" type of number to really challenge early and young mathematicians. We have the natural numbers $\mathbb{N}$ like $\\{0,1,2,3,\cdots\\}$. From there, we then include the negative numbers $\\{ \cdots,-2,-1,0,1,2,\cdots \\}$ to have the integers $\mathbb{Z}$, that can be used to represent absences of quantities and additive inverses. From there, we can consider the in-between quantities of fractions, also known as the rationals $\mathbb{Q}$. For a while, this is what we thought all there was to numbers. Pythagoras and the Ancient Greeks famously thought there was no number that wasn't rational. They had this notion of increasing inclusion of numbers $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}$, and that was the upper limit.

As we now know, this clearly isn't the case. We've talked about irrational numbers a little bit before, specifically on how [$\sqrt{2}$ is irrational](http://xperimex.com/blog/constructive-proofs/). It might be worthwhile going over the proof again:

**Claim: $\sqrt{2}$ is irrational.**

**Proof:** Suppose that $\sqrt{2}$ is not irrational. Therefore it is rational, and can be written as $\sqrt{2} = \frac{p}{q}$ where $p$ and $q$ are distinct coprime numbers (i.e. they don't share any factors in common; this is a way of sayiing that there is a unique way of writing $\sqrt{2}$ as a fraction in _lowest terms_). Squaring both sides and moving terms around, this equation becomes $2q^2 = p^2$. Therefore, $p^2$ is even, since it will always have a factor of 2 according to the lefthand-side of the equation. If $p^2$ is even, then $p$ is also even (if you're unsure of this fact, try some test cases and proving it!). Since $p$ is even, then let's rewrite it as $p=2n$. Plugging this into our equation yields: $2q^2 = p^2 = (2n)^2 = 4n^2$. Dividing both sides by 2 gives us $q^2 = 2n^2$. Similar to before, the equation implies that $q^2$ and hence $q$ is even due to that factor of 2 on the righthand-side. But this is a contradiction! $p$ and $q$ cannot simultaneously both be coprime and even (share a factor of 2). Hence, our initial assumption that the $\sqrt{2}$ is rational is wrong, and allows us to conclude that $\sqrt{2}$ is irrational. $\blacksquare$

The existence of irrational numbers actually implies a lot. For one, there are infinitely many more irrational numbers than rationals. With the classic diagonal argument, we can see that there are not any "more" rationals than integers or naturals. The irrationals are what make the real numbers uncountable. A way we can see that is through decimal expansions: all irrational numbers have non-repeating decimal expansions. So now if you imagine constructing a random number $0.142346\dots$ by picking a random number 0–9 at each digit, the chance of landing a repeating decimal is extremely unlikely.

**Claim:** A number is rational if and only if it has a terminating or repeating decimal expansion.

**Proof:** $(\Rightarrow)$ The easiest way to see this is through long division. If we have a rational number $\frac{p}{q}$ with $q \neq 0$, then at every step in the long division, we have $q$ possible remainders (being $0,1,2,\cdots,q-1$). If the remainder is 0 at any point, then we are done with the divison algorithm and the decimal expansion terminates (this it the case of 0 being the repeating portion of the decimal). If the remainder is never 0, after $q+1$ steps in the division algorithm, we will get a remainder we have already seen before, and so the division algorithm will keep producing the same digits in order we have seen before from that remainder. Hence the decimal expansion repeats. 

$(\Leftarrow)$ Say we have a number $x = a.d_{1}d_{2}\cdots d_{n} \overline{d_{n+1} \cdots d_{n+m}}$ that has integer part $a$, $n$ pre-repeating decimals (each $d_i$ is a digit of the number), and $m$ repeating decimals (indicated by the overline). Then we can left-shift the non-repeating number by multiplying by a power of 10:

<center>

$10^n x = 10^n a + d_{1}d_{2}\cdots d_{n}.\overline{d_{n+1} \cdots d_{n+m}}  \ \ \ \ (1)$

</center>

Since the decimals repeat after an additional $m$ digits, we can shift it further to get another similar looking number:

<center>

$10^{n + m} x = 10^{n + m} a + d_{1}d_{2}\cdots d_{n}d_{n+1} \cdots d_{n+m}.\overline{d_{n+1} \cdots d_{n+m}}  \ \ \ \ (2)$

</center>

Now we can subtract equation $(1)$ from $(2)$ to eliminate the repeating decimal portion:

<center>

$10^{n + m} x - 10^n x = (10^{n + m} a + d_{1}d_{2}\cdots d_{n}d_{n+1} \cdots d_{n+m}) - (10^n a + d_{1}d_{2}\cdots d_{n})$

</center>

Now, see that since we have removed the decimal/fractional part of the numbers in that subtraction, the righthand side of the equation is an integer, call it $N$. Then we can solve for $x$ and see that

<center>

$x = \large{\frac{N}{10^{n+m} - 10^n}}$ $=$ $\large{\frac{N}{(10^m - 1)10^n}}$

</center>

it is a quotient of two integers, and so rational.

<center> $\blacksquare$ </center>



So if we want to use real numbers with decimals as we normally do, we need our non-repeating decimals to correspond to something. These are our of course our irrationals. But let's be clear exactly what non-repeating means. It's frequently unjustifiably said that since $\pi$ is irrational, it contains every single string of numbers ever conceived, and hence contains exactly the time and date you were born, you will die, and a copy of every book ever written. This is **unknown**. Just consider the non-repeating decimal that only contains 0s and 1s

<center>

$0.10110011100011110000\cdots \overset{\textrm{n 1s}}{\overline{111\cdots 1}}\overset{\textrm{n 0s}}{\overline{000\cdots 0}}$

</center>

$\overset{a}{2}$

In a sense, too







