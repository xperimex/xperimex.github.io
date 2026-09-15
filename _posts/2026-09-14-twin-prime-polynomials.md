
---START_METADATA---
{
  "title": "Parity, Polynomials, and Twin Primes: An Intro to Sieve Theory",
  "author": "Adi Mittal",
  "summary": "The boundary of modern number theory",
  "tags":[
    "me"
  ]
}

---END_METADATA---

Last year, I capped off my undergraduate education with my extended essay on [quantum elliptic curve cryptography](https://xperimex.com/blog/quantum-elliptic-curves/), teaching myself some computational group theory that hopefully will back the internet when (more like if at this point) large scale quantum computers become viable. The project was a nice chance to learn some geometry, group theory, and the basics of quantum information theory that lie beyond the standard curriculum.

To conclude my integrated master's, a similar project was available, but this time with a bit more theory. My 4th year dissertation was in analytic number theory, specifically combining two different aspects. 

The first is *sieve theory*, a topic we [briefly discussed last year](https://xperimex.com/blog/prime-number-theorem/#sieves-and-filters). The idea of sieve theory is quite simple: counting certain objects directly can be hard, but filtering out non-objects can be easy; it is sometimes easier to describe an object by what it *isn't* rather than what it is. The easiest example is *prime numbers*: they are numbers that cannot be factored i.e. they are not composite. So one way to count the number of prime numbers $\leq 100$, we can do so by instead counting the number of prime numbers and subtracting them from the total $100$. This count is relatively easy: there are $\lfloor 100/2 \rfloor$ even numbers, $\lfloor 100/3 \rfloor$ divisible by 3, $\lfloor 100/5 \rfloor$ by 5, and $\lfloor 100/7 \rfloor$. But some numbers are counted twice in this, for example 15 is divisible by 3 and 5, so we need to add back in the $\lfloor 100/15 \rfloor$ multiples of 15. By carefully keeping track of which numbers we take out, we can get that there are

<center>

$$ 100 - \left\lfloor \frac{100}{2} \right\rfloor - \left\lfloor \frac{100}{3} \right\rfloor - \left\lfloor \frac{100}{5} \right\rfloor - \left\lfloor \frac{100}{7} \right\rfloor + \left\lfloor \frac{100}{15} \right\rfloor + \left\lfloor \frac{100}{21} \right\rfloor + \cdots = 22$$

</center>

primes less than 100. Some of you may recognize this as [inclusion-exclusion counting](https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle). The careful additions and subtractions are "sifting" out the elements (composite numbers) we don't want to count, leaving behind just the primes. Sieve theory is all about optimizing this counting to get tight asymptotic estimates like the number of primes $\leq X$ as $X \to \infty$. By being creative with what set you "sift" over, you can get more interesting estimates, and in particular the quantity I wanted to investigate was the number of *twin primes*, that is primes $p$ such that $p+2$ is also prime. The famous Twin Prime Conjecture is that there are infinitely main such pairs, but we have yet to find proof (or disproof!). While simple to describe and relatively powerful a technique, sieve methods unfortunately do not have the nuance nor power to prove the strong results we want.

The second part of my dissertation is about polynomials. Something one may not have thought about is the fact that polynomials and integers are quite similar: you can add and multiply them; if $f(x)g(x)=0$ then $f(x) = 0$ or $g(x)=0$; you can also factor polynomials e.g. $x^2+7x+10 = (x+2)(x+5)$. Similarly, there are polynomials like $x^2+1$ that can't be factored (over its base field) just like prime numbers, and we call these *irreducible polynomials*. This shared behavior of the integers and polynomials is due to the fact they both have the structure of a [**unique factorization domain**](https://en.wikipedia.org/wiki/Unique_factorization_domain). Despite being so similar, polynomials and integers seem to have some fundamental differences. For instance, the Riemann Hypothesis *and* Twin Prime Conjecture is true for $\mathbb{F}_q[x]$. What makes polynomials special compared to the integers for us to have proven these?

The goal of my dissertation to explore the techniques and ideas in the literature that differentiates the two, in particular using sieves as the medium to compare what types of information we have access to in the integers vs. polynomials that makes the latter so much more conducive to our proofs than the former. Attached below is my written report and presentation slides. The slides are very terse and meant for high level ideas, while the report is where all the details live. If I find errors, I'll update the files with their most correct version.


* [Dissertation](/img/twin-prime-polynomials/CCD_Sieve_Methods.pdf)
* [Presentation Slides](/img/twin-prime-polynomials/CCD_Sieve_Methods_Final_Slides.pdf)