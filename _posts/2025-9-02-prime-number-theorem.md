---START_METADATA---
{
  "title": "The Prime Number Theorem and Similar Mysteries",
  "author": "Adi Mittal",
  "summary": "Where modern number theory begins.",
  "tags":[
    "me"
  ]
}


---END_METADATA---

It's not unfair to call prime numbers the foundation for not just number theory and mathematics, but many mathematicians careers. At an early age, around 7 years old in 1st-2nd grade in the US, kids learn multiplication and division. From there, we learn that we can break down numbers into smaller numbers, we call factors or divisors. For example,

<center>
$2024 = 2 \cdot 2 \cdot 2 \cdot 11 \cdot 23$
</center>

There is no "simpler" way to break down the number 2024. But then there's a very natural next question to ask upon learning about prime numbers for the first time: how do we know which numbers are prime? Unfortunately, there is not that a good of an answer to give to anyone, from the elementary school to college students. The only strategy you really have until college is just to try and divide the number in question, and see if there are any factors. You can make small optimizations by checking numbers less than $\sqrt{n}$, and skipping even numbers obviously, but at the end of the day, primes seem kind of random with little to no patterns available. This is one of the first real mysteries young mathematicians encounter.

Though, math has come a long way, and now slowly but surely we are starting to unravel the primes, revealing much about the simple numbers we count with to much more.





# Table of Contents
- [What is a Prime Number?](#what-is-a-prime-number-)
- [Some Foundational Results](#some-foundational-results)
- [Don't Take These For Granted](#dont-take-these-for-granted)
  - [Rings and Algebraic Abstractions](#rings-and-algebraic-abstractions)
  - [Integral Domains and Zero Divisors](#integral-domains-and-zero-divisors)
  - [Classifying Elements](#classifying-elements)
- [Some Simple Patterns and Useful Facts](#some-simple-patterns-and-useful-facts)
- [Finding Primes](#finding-primes)
- [Primality Tests](#primality-tests)
  - [Trial Division](#trial-division)
  - [Wilson's Theorem](#wilsons-theorem)
  - [Fermat's Test](#fermats-test)
  - [Other Tests](#other-tests)
  - [Different Types of Primes](#different-types-of-primes)
  - [Prime Generating Formula](#prime-generating-formula)
- [Sieves and Filters](#sieves-and-filters)
  - [Probability of Being Prime](#probability-of-being-prime)
- [Distributions and the Prime Gap](#distributions-and-the-prime-gap)
  - [Bertrand's Postulate](#bertrands-postulate)
- [Prime Number Theorems](#prime-number-theorems)
  - [Proof of the Prime Number Theorem](#proof-of-the-prime-number-theorem)
  - [Do We Need the Primes Above n?](#do-we-need-the-primes-above-n)
- [Consequences of the Prime Number Theorem](#consequences-of-the-prime-number-theorem)
  - [Analyzing the nth Prime](#analyzing-the-nth-prime)
  - [Revisiting Bertrand's Postulate](#revisiting-bertrands-postulate)
  - [A Quick Application of the PNT](#a-quick-application-of-the-pnt)
- [An Analogue to the Prime Number Theorem](#an-analogue-to-the-prime-number-theorem)
- [Conclusion](#conclusion)


## What is a Prime Number?

This isn't a trick question. Primes are still exactly what you (probably) think they are:

----------------

**Definition 1:** A positive integer is said to be **prime** if it is not the product of two smaller natural numbers (excluding 1), i.e. $p \neq ab$ with both $a, b \neq 1$. 

----------------

We cannot factor primes. This is partly why finding primes is so tricky—we define them not by what they are, but what they are not. This also gives a nice reason for why we should not consider $1$ prime: it just cannot be factored into smaller numbers. 

It turns out, there is another, equivalent notion of being a prime number though.

<!-- Good reason why 1 isn't prime: 1 = 1*1 and 1 is not less than 1. -->

----------------

**Definition 2:** A positive integer (excluding 1) $p$ is **prime** if when $p \mid ab$, then $p \mid a$ or $p \mid b$.

----------------

Here we are using $x \mid y$ to mean $x$ divides $y$. This notion of primality is kind of similar to the definition we are already familiar with: it basically characterizes the idea of prime $p$ being unable to be "split up" into smaller parts that can be distributed between $a$ and $b$. The factor must have contributed wholly to either $a$ or $b$, and did not magically appear by multiplying the two.

**Theorem:** Definition 1 and Definition 2 are equivalent.

**Proof:** Although these definitions do look and feel similar, actually arguing the equivalence rigorously is kind of difficult (as it turns out for much of math). 

<!-- idea: if p | a, then can factor out p and show that b * other factors = 1 -->

**(Definition 2 $\Rightarrow$ Definition 1):** Let's say $p \in \mathbb{N}$ satisfies Definition 2. Now suppose for contradiction that $p = ab$ with $a, b \neq 1$. Then, since all numbers divide themselves, $p \mid p = ab$. By the property in Definition 2, $p \mid a$ or $p \mid b$. Let's say $p \mid a$, so $a = pn$ for some $n$. Combining our equalities, we get $p = ab = pnb$. Rearranging, $p(1-nb) = 0$. Since $p \neq 0$, we get $1 = nb$. The only way this can happen is if $n = b = 1$ since they have to be positive integers, giving us our contradiction. Therefore, it must be the case that $p$ also satisfies Definition 1. A similar argument can be used for when $p \mid b$.

**(Definition 1 $\Rightarrow$ Definition 2):** This is also known as [Euclid's Lemma](https://en.wikipedia.org/wiki/Euclid%27s_lemma). Say $p$ is prime according to Definition 1. Now suppose that $p \mid ab$, but $p \nmid a$. We'll show that $p \mid b$. The simplest proof I've seen (without presupposing some results we'll later discuss) uses [Bézout's Lemma](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity). Since $p \nmid a$ and $p$ has no factors itself, $\gcd(a,p) = 1$. By Bézout's, there are integers, $n$ and $m$ such that


<center>
$np + ma = 1$
</center>

Multiplying both sides by $b$, we get

<center>
$npb + mab = b$
</center>

Clearly, $p \mid npb$. By our assumption, $p \mid ab$ so $p \mid mab$. Therefore, $p \mid npb + mab = b$, giving us our conclusion.

<center>
$\blacksquare$
</center>





## Some Foundational Results

Even with just these definitions and basic results, we can already start to make some headway. The following of which, is probably the most important theorem regarding the integers.


<!-- need to prove: every number has a factorization -> unique factorization -> infinitely many primes -->

**The Fundamental Theorem of Arithmetic:** Every integer has a unique* prime factorization.

**Proof:** We'll prove this in two steps.

**(Existence)** Showing every integer has a prime factorization is exactly as you'd expect intuitively: we'll break up a number into its factors as many times as possible until we hit its prime factorization. We'll do this by induction. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Base Case:** $2 = 1\cdot 2$ has a trivial prime factorization being prime itself.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Inductive Step:** Say every number greater than 1 and less than $n$ has a prime factorization. If $n$ is prime, we're done. If $n$ is not prime, then it is possible to write $n=ab$ with $1<a\leq b<n$. By the inductive hypothesis, 

<center>
$a = p_1 p_2 \cdots p_k$ 
<br/>
$b = q_1 q_2 \cdots q_\ell$ 
</center>

have prime factorizations. Combining these, we see that

<center>
$n = p_1 p_2 \cdots p_k q_1 q_2 \cdots q_\ell$ 
</center>

is also a product of primes.

**(Uniqueness)** Say there are integers that don't have a unique prime factorization. Let 

<center>
$n = p_1 p_2 \cdots p_k = q_1 q_2 \cdots q_\ell$
</center>

be the _least_ integer with two such factorizations. Therefore, $p_1 \mid q_1 q_2 \cdots q_\ell$. By Definition 2 and Euclid's Lemma, that means $p_1 \mid q_i$ for some $i=1,\cdots,\ell$. Let's suppose (without loss for generality) that $p_1 \mid q_1$. Since $q_1$ is prime, we must have $p_1 = q_1$. That means we can divide both of these out and get that

<center>
$m = p_2 \cdots p_k = q_2 \cdots q_\ell$
</center>

But then we have found some integer $m < n$ that has two distinct prime factorizations, contradicting the minimality of $n$.

<br/>

Proving factorization for the negative integers is essentially the same, just noting the extra inclusion of $-1$ as a factor.

----------------

*the uniqueness of factorization seems like a proper fact now that we've proved it, but there are a few hiccups we need to address. For one, this factorization is unique up to reordering of the primes; $10 = 2 \cdot 5 = 5 \cdot 2$. This is not that problematic, and can be pretty well understood since we're working with integers and know multiplication is commutative. However, only that we haven't fully explained one small bit away: we can include extra factors of $1$. This seems kind of redundant since we have already said $1$ isn't prime, and it's just kind of obvious to ignore the fact that $2 = 1\cdot 2 = 1\cdot 1 \cdot 2 = \cdots$. But this is an issue if we're going to allow $-1$ in the factorizations of negative numbers. After all, $6 = 2 \cdot 3 = (-2) \cdot (-3)$. So what we can do is combine and push to the front all these extra factors of $1$ and $-1$, and make that sign-determining factor included as a non-prime unique divisor. **Let this reinforce that 1 is not a prime number**.

<center>
$\blacksquare$
</center>

[Last post](https://xperimex.com/blog/pi-irrational/#completeness-and-the-variety-of-irrationals), we discussed how the irrational numbers were the key to the real numbers; the irrationals are what give the distinguishing properties of the reals. Even if the names are suggestive, it really should be noted how important the irrationals are to separating the reals and the rationals. 

The prime numbers serve a similar purpose to the integers. In fact, because of the above theorem and unique factorization, primes are basically _all_ you need to discuss results about the integers (and that is reflected in many theorems, which we'll mention later).

From this we immediately get another major, fundamental result about the primes.

**Theorem:** There are infinitely many prime numbers.

**Proof (Euclid):** Say there were only finitely many primes $p_1, p_2, \cdots, p_n$. Consider the following number:

<center>
$\begin{align} p_1 p_2 \cdots p_n = \prod_{i=1}^n p_i \end{align}$
</center>

So all of our primes divide this number. Now consider the number $P = p_1 p_2 \cdots p_n + 1$. We know $P$ has a unique prime factorization by the above. Since all of our primes come from the list $p_1, p_2, \cdots, p_n$, some $p_i \mid P$. But then

<center>
$p_i \mid P - p_1 p_2 \cdots p_n = 1$
</center>

So $p_i = 1$, which is impossible given $p_i$ is prime. So in reality, $P$ must have a prime divisor _not_ in our original list, giving us the contradiction that there were only finitely many primes.

<center>
$\blacksquare$
</center>

Note exactly what this proof is saying: this doesn't say that $p_1 p_2 \cdots p_n + 1$ is prime, it only says that it contains a _new_ prime divisor not found in the list $\\{p_1, p_2, \cdots, p_n \\}$.

This is a great result, but at the same time, this only widens the mystery and makes finding a pattern—if there is one—all the more unlikely. There is definitely something interesting to be said if there were only finitely many primes, but I think there being so many with such simple-to-state questions about them being unanswered kind of annoying.



## Don't Take These For Granted

Before delving further into common tools and patterns found in the primes, it is worth taking a second to note just how nice some of the properties they have—even though everyone likes to make they seem super mysterious.

### Rings and Algebraic Abstractions

The integers, in the broad perspective of higher math, is the simplest example of what is known as a **ring**.

**Definition:** A **ring** $(R,+,\times,0,1)$ is a set $R$ given the following structure:

* $(R,+)$ is an _abelian group_ with identity 0. In other words, $(R,+)$ has the properties 
  * Commutativity: $a+b = b+a$
  * Associativity: $a + (b + c) = (a + b) + c$
  * Identity: $ a + 0 = 0 + a = a$
  * Inverses: $\forall a \ \exists b \ (a + b = 0)$
* $\times: R\times R\rightarrow R$ has the following properties:
  * Associativity: $a \times (b \times c) = (a \times b) \times c$
  * Identity: $a \times 1 = 1 \times a = a$
  * (Left) Distributivity: $a\times (b+c) = (a\times b) + (a\times c)$ 
  * (Right) Distributivity: $(b+c) \times a = (b\times a) + (c\times a)$

This definition does look arbitrary and pretty complicated at first glance—and to be honest, it kind of is—but there's no denying its resemblance to the properties of addition and multiplication of the integers. In fact, you could just let $R = \mathbb{Z}$ and interpret $+$ and $\times$ as normal, and you would just get all of our normal arithmetic. As long as you keep those in mind, the definition should become more tractable. The hope is essentially to take some results and intuitions from the integers and extend them to other mathematical objects.

It turns out, with such a broad definition, a lot of algebraic work gets done that has seemingly nothing to do with the "structure of the integers". Some major theorems include:

* The Chinese Remainder Theorem: existence of unique solution to system of modulo remainders
* Eisenstein's Criterion: a sufficient condition on when integer polynomials can be factored
* The classification of finitely generated abelian groups
* Proving the existence of Jordan and Rational Canonical Forms for linear maps

Rings are kind of magical in that way in that they are by far one of the least-obvious tools to employ, but when used correctly, the generality of the theory can lead to a lot. They are unsurprisingly the basis for lots of higher level algebra, especially number theory.

### Integral Domains and Zero-Divisors

But not all rings act as nicely as $\mathbb{Z}$. For example, we tend to overlook how convenient it is that $\mathbb{Z}$ is an **integral domain**. That is,

<center>
$ab = 0 \Rightarrow a = 0 \ \textrm{or} \ b = 0$
</center>

This is a trick we use when solving for roots of polynomials (which is another ring). If you wanted to solve the quadratic,

<center>

$\begin{align}
x^2 - 5x + 6 = 0 & \Rightarrow \\\
(x-2)(x-3) = 0 & \Rightarrow \\\ \hline
\end{align}$
</br>
$x-2 = 0 \ \textrm{or} \ x-3=0$
</center>

That last step is only justified in integral domains. If you're working in the ring, say, the integers modulo 10 

<center>
$\mathbb{Z}_{10} = \\{\bar{0},\bar{1},\bar{2},\cdots,\bar{9}\\}$
</center>

then we can very much have **zero divisors that break the integral domain property**. 

<center>
$\bar{2} \times \bar{5} = \bar{10} = \bar{0}$
</center>

If you look back at some of our proofs, like in showing the equivalence of Definitions 1 and 2 of prime numbers, having zero divisors would not allow us to conclude our results.

### Classifying Elements

In the same way we classify integers as prime or not, we can do a similar organization of ring elements:

* **Unit:** $x \in R$ is a unit if it has a multiplicative inverse i.e. $\exists y \ \textrm{s.t.} \ xy=1$
* **Irreducible:** A (non-unit) $x \in R$ is irreducible if it cannot be factored into non-units
* **Prime:**  A (non-unit) $x \in R$ is prime if when $x \mid ab$, then $x \mid a$ or $x \mid b$

This is partly why I said there were 2 definitions of prime numbers at the top of this post: they are _truly separate definitions_ of two different types of elements in a general ring. It just happens that the notion of being prime and irreducible are the same in the integers. Even though we think of these notions as intertwined by our intuitions of the prime, they can turn out separate.

If every element in the ring (except 0) is a unit, then we have a **special type of ring called a field**, which give us especially nice properties that we see most commonnly used for vector spaces. And although we haven't mentioned them yet by name, we've run into units already in the form of $1$ and $-1$: they're the reason we need to clarify the Fundamental Theorem of Arithmetic, since _everything_ is a multiple of a unit and made it unclear if we actually had unique prime factorization.

In some rings, though, we **might genuinely lose unique factorization**. Consider the ring

<center>
$\mathbb{Z}\left[ \sqrt{-5} \right] = \\{a+b\sqrt{-5} \ | \ a,b \in \mathbb{{Z}} \\}$
</center>

Then, in this ring, we get that

<center>
$6 = 2 \cdot 3 = (1 + \sqrt{-5})(1-\sqrt{-5})$
</center>

As such, the integers are known as a **unique factorization domain (UFD)** since it doesn't suffer from such a problem.

--------------

Those are some examples and a peak into abstract algebra. Hopefully it gives some appreciation for why the integers and primes numbers are special in their own way, but we've covered enough ring theory for today and perhaps will revisit it later down the road.

<!-- maybe talk about field -> ED -> PID -> UFD ? -->


## Some Simple Patterns and Uses of the Primes

To build up a bit more familiarity with the primes, its worth perusing some of the simple patterns and ways the primes can be leveraged. Here's a simple one that isn't too hard to notice.

**Claim:** Every prime is of the form $6n \pm 1$.

**Proof:** Just check the other cases:

* $6n \pm 2 = 2(6n \pm 1)$ so these can't be prime
* $6n \pm 3 = 3(6n \pm 1)$ so these can't be prime

Another simple pattern.

**Claim:** For $p > 2$ prime, $24 \mid p^2 - 1$.

**Proof:** $p^2 - 1 = (p-1)(p+1)$. Now $p$ is odd, so $(p-1)$ and $(p+1)$ are even. Moreover, these are consecutive even numbers, so while one is only divisble by 2 the other is actually divisble by 4. Finally, $p$ being prime means it isn't a multiple of 3, but $(p-1),p,(p+1)$ are 3 consecutive numbers. So again, one of $(p-1)$ and $(p+1)$ is divisible by 3. All together, we have collected that $p^2 - 1 = (p-1)(p+1)$ has at least the factors of $2 \cdot 4 \cdot 3 = 24$. $\blacksquare$

Here's a much more famous one.

**Fermat's Little Theorem:** For any integer $a$ and $p$ prime, $a^{p} \equiv a \bmod p$.

**Proof:** Note if $a \equiv 0 \bmod p$, then the result follows. So we just need to show $a^{p-1} \equiv 1 \bmod p$ for $a \neq kp$. Consider the set of numbers $\\{a,2a,3a,\cdots,(p-1)a\\}$. Note that these are all distinct residues modulo $p$; consider when two residues of this type are equal $ia \equiv ja \bmod p$. So $(i-j)a \equiv 0 \bmod p$. Since $p$ is prime and doesn't divide $a$, by Euclid's Lemma, $p \mid i-j$ i.e. $i \equiv j \bmod p$. So, the set $\\{a,2a,3a,\cdots,(p-1)a\\}$ is really just a reshuffling of the $p-1$ residues $\\{1,2,3,\cdots,p-1\\}$ (since there are $p-1$ numbers in the set, and they are all distinct modulo $p$). Therefore,

<center>
$\begin{align} 
a \cdot 2a \cdot 3a \cdots (p-1)a \equiv 1 \cdot 2 \cdot 3 \cdots (p-1) \bmod p 
\end{align}$
</center>

Since $p \nmid (p-1)!$, we can divide this out with Euclid's Lemma, and we arrive at $a^{p-1} \equiv 1 \bmod p$.

<center>
$\blacksquare$
</center>

--------------------

Just as we talked about how ring theory fits into number theory briefly, it might not be surprising to see that its cousin group theory plays a big role as well. The proof of Fermat's Little Theorem simplifies quite a bit with the tools of groups, and much of what we bothered proving above is group theory in disguise.

**Proof with Groups:** Note that $\\{1,2,\cdots,p-1\\} = (\mathbb{Z}/p\mathbb{Z})^{\times}$ is a group under multiplication. Consider some $a \in (\mathbb{Z}/p\mathbb{Z})^{\times}$, and its cyclic subgroup $A = \\{1,a,a^2,\cdots,a^{k-1}\\}$. $|A| = k$, and by Lagrange's Theorem, $|A|$ divides $|(\mathbb{Z}/p\mathbb{Z})^{\times}| = p-1$. So $p-1 = k \ell$ for some $\ell$, and $a^{p-1} = a^{k \ell} = (a^k)^\ell = 1^\ell = 1$. $\blacksquare$

--------------------

Given how much interest there is in them, it shouldn't be surprising that there are so many number theory results about the primes.

**Wilson's Theorem:** For $p$ prime, $(p-1)! \equiv -1 \bmod p$.

**Proof:** Note for all numbers $x \in \\{1,2,3,\cdots,p-1\\}$, they each have a multiplicative inverse i.e. $\exists y \ \textrm{s.t.} \ xy = 1$. This is best seen by using Bézout's Lemma: since $\gcd(x,p)=1$ as $p$ is prime, there exists $n,m$ such that $nx+mp=1$. Thus this reduces to $nx \equiv 1 \bmod p$, showing the existence of a multiplicative inverse $n$. 

Further, note that $1$ and $p-1$ are the only numbers to be their own inverse. To see this, we essentially want to solve $a \equiv a^{-1} \bmod p$ or equivalently $a^2 \equiv 1 \bmod p$. Further, we're solving $a^2 - 1 = (a-1)(a+1) \equiv 0 \bmod p$. So $p \mid (a-1)(a+1)$, and since $p$ is prime, $p \mid (a-1)$ or $p \mid (a+1)$. In the language of residues, this means that $a \equiv \pm 1 \bmod p$ which reduces to either $1$ or $p-1$.

Now back to the theorem at hand, if we consider $(p-1)! = 1 \cdot 2 \cdot 3 \cdots (p-1)$, all the numbers except $1$ and $p-1$ pair off with their inverses, cancelling each other out. Thus $(p-1)! \equiv 1 \cdot (p-1) \equiv -1 \bmod p$.

<center>
$\blacksquare$
</center>

Here's another result that illustrates in particular how useful unique factorization of the primes is.

**Theorem:** A countable product of countable sets is countable.

**Proof:** We'll show this for the case of infinitely countable sets, since 1) the product of finite sets is obvious, and 2) the definition of countability relies on injections from a set to $\mathbb{N}$, so countability of products of sets will follow if we can show $\mathbb{N}^{k}$ is countable. If we have countable sets $A_1, A_2, \cdots, A_k$, we then have injections $f_i : A_i \rightarrow \mathbb{N}$. Then we have the injection $g: A_1 \times \cdots \times A_k \rightarrow \mathbb{N}^k$

<center>
$g(a_1, a_2, \cdots, a_k) = (f_1(a_1), f_2(a_2), \cdots, f_k(a_k))$
</center>

So the countability of $A_1 \times \cdots \times A_k$ will follow from the countability of $\mathbb{N}^k$. So consider the injection $F: \mathbb{N}^k \rightarrow \mathbb{N}$.

<center>
$F(n_1, n_2, \cdots, n_k) = 2^{n_1} 3^{n_2} 5^{n_3} \cdots p_k^{n_k}$
</center>

where $p_i$ is the $i^\textrm{th}$ prime number. By the Uniqueness of Factorization, $F$ is injective. For completeness, $F \circ g : A_1 \times \cdots \times A_k \rightarrow \mathbb{N}$ shows $A_1 \times \cdots \times A_k$ is countable.

<center>
$\blacksquare$
</center>

This ability to uniquely encode integers by their prime factorization is a nice trick to hold onto, especially for problems that involve _all_ the natural numbers, giving us a path to break the problems up into the more "fundamental", smaller parts.

**Euler's Product Formula:** $\begin{align} \sum_{n=1}^\infty \frac{1}{n^s} = \prod_{p \ \textrm{prime}} \frac{1}{1-p^{-s}} \end{align}$

**Proof:** The trick is essentially just the use of the Fundametal Theorem of Arithmetic in a generating function-style way. If you write the sum out with prime factors, the relation becomes clear:

<center>
$\begin{align}
\sum_{n=1}^\infty \frac{1}{n^s} & = 1 + \frac{1}{2^s} + \frac{1}{3^s} + \frac{1}{4^s} + \frac{1}{5^s} + \frac{1}{6^s} + \frac{1}{7^s} + \cdots \\\
& = 1 + \frac{1}{2^s} + \frac{1}{3^s} + \frac{1}{2^s \cdot 2^s} + \frac{1}{5^s} + \frac{1}{2^s \cdot 3^s} + \frac{1}{7^s} + \cdots \\\ 
& = \left(1 + \frac{1}{2^s} + \frac{1}{2^{2s}} + \frac{1}{2^{3s}} + \cdots \right)\left(1 + \frac{1}{3^s} + \frac{1}{3^{2s}} + \frac{1}{3^{3s}} + \cdots \right)\cdots \\\
& = \left(\frac{1}{1 - \frac{1}{2^s}} \right)\left(\frac{1}{1 - \frac{1}{3^s}} \right)\left(\frac{1}{1 - \frac{1}{5^s}} \right)\left(\frac{1}{1 - \frac{1}{7^s}} \right) \cdots \\\
& = \prod_{p \ \textrm{prime}} \frac{1}{1-p^{-s}} 
\end{align}$
</center>

The 4th and 5th equalities follow from being products of geometric series. The key step is the 3rd equality. If you consider any term generated by that infinite product, you're essentially picking out which prime factors the denominator gets; when you consider each factor, you're asking, "How many of this prime factor does my denominator get?" By the Fundamental Theorem of Arithmetic, prime factorizations are unique and thus this process of choosing prime factors means each term $\frac{1}{n^s}$ appears once and only once. At least, that's the idea for why this formula _should_ work. To actually prove the sum and product are the same, you have to give a bit more effort using the absolute convergence of that sum on the left. $\blacksquare$

-----------------

The sum we discussed above is famously known as the **Riemann zeta function** $\zeta(s)$, the center of the even more famously open million-dollar **Riemann Hypothesis** problem. Even without name, you probably have seen individual instances of the zeta function before, as individual instances of the function have been studied for hundreds of years.

* $\zeta(1) = \sum_{n=1}^\infty \frac{1}{n}$ is the divergernt **harmonic series**
* $\zeta(2) = \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}$ is the **Basel problem**
* $\zeta(3) = \sum_{n=1}^\infty \frac{1}{n^3} \approx 1.2020578$ is **Apéry's constant**, named after the man who proved it irrational

The most useful of which to keep in mind for most people is probably the harmonic series $\zeta(1)$, as it appears as an incredibly useful example in bounding series and proving contradictions, being one of the simplest divergent series there is. Here's a neat example proving a fact we already know.

**Theorem:** There are infinitely many primes.

**Proof (Euler):** Say there were only finitely many primes $p_1,p_2,\cdots,p_n$. Then consider the product

<center>
$\begin{align} \prod_{i=1}^n \left( 1 + \frac{1}{p_i} + \frac{1}{p_i^2} + \frac{1}{p_i^3} + \cdots \right) = \prod_{i=1}^n \left( \frac{1}{1 - \frac{1}{p_i}} \right) \end{align}$
</center>

The righthand side is obtained since each $p_i > 1$ i.e. $\frac{1}{p_i} < 1$, thus making each geometric series converge. So this finite product of geometric series converges to some value.

Note, however, that since every integer has a unique prime factorization, we can see that this product is equivalent to 

<center>
$\begin{align} 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \cdots = \sum_{k=0}^\infty \frac{1}{k} \end{align}$
</center>


(think Euler's Product Formula). But we know that the harmonic series diverges, giving us our contradiction. So there must be infinitely many primes.

<center>
$\blacksquare$
</center>

The nice thing about this proof for me is that it begins to illustrate some of the more calculus-y tools we have at our disposal to prove facts about the integers. The field of _analytic number theory_ and using results commonly associated with continuous functions or the real numbers to show facts of the integers always feels a bit surprsing to me, but this proof is a nice introduction to the topic.


## Finding Primes

The above results are interesting and actually quite useful, but to be used in practice requires actually _knowing a number is prime_. If you don't mind just having existence of a solution or proof, like we did in the countability proofs, then you have most of what you want already. But having an actual list of prime numbers, or at least knowing _where_ to find prime numbers is often needed to apply some of our powerful results on primes. If we didn't look for them, cryptography, for one, would completely break down along side all of online security.

## Primality Tests

### Trial Division

One way we can find primes is by having some criterion $\Phi(n)$ that can tell us if $n$ is prime or not. The simplest test is to just check a number satisfies one of our definitions of being prime. This is probably the original test we all tried at some point: sitting down and just manually checking if a number has any divisors besides itself. Of course, we can do some simple optimizations to avoid needless division.

* If the number is even, it's not prime
* If the number ends in 0 or 5, then it's divisible by 5 and not prime
* We only need to check numbers of the form $6k \pm 1$
* We only need to check the prime divisors up to $\sqrt{n}$

and a whole host of other simple division rules that we can use to simplify this process. Though, as I'm sure we've all felt doing this process, it's not great and there must be a better way. In fact, we should be glad that trial division and factoring directly is hard, as again, much of modern cryptography relies on the assumption that determining prime factorization is difficult.

### Wilson's Theorem

You may not have realized it yet, but we've already seen a more sophisticated primality test with **Wilson's Theorem**. If $n$ is _not_ prime, then there are two cases:

1. $n$ can be written as $n=ab$ with $a \neq b$. Since $a,b<n$, it must be that $a,b$ appear somewhere in the list $\\{1,2,\cdots,(n-1)\\}$, meaning that $(n-1)! = 1 \cdot 2 \cdots (n-1)$ is a multiple of $n$ i.e. $(n-1)! \equiv 0 \bmod n$.
2. If $n$ cannot be written like in Case 1, then $n = p^2$ for some prime $p$ (if $n$ had 2+ distinct prime factors, we can find $a,b$ to be in Case 1). But $2p < p^2 = n$ for $p>2$. So the numbers $p, 2p$ appear somewhere in $1 \cdot 2 \cdots (n-1)$ i.e. $n = p^2 \mid (n-1)!$ and thus $(n-1)! \equiv 0 \bmod n$.

So if $n$ is composite, $(n-1)! \equiv 0 \bmod n$. The only exception is for $n = 4$ where $(4-1)! = 6 \equiv 2 \bmod 4$, but that's fine since $2 \not\equiv -1 \bmod 4$.

**Wilson's Theorem:** $n$ is prime if and only if $(n-1)! \equiv -1 \bmod n$.

But this test is not great, as you can imagine it grows exponentially worse to evaluate $(n-1)!$ as $n$ grows larger, even despite [advances in multiplication](https://www.quantamagazine.org/mathematicians-discover-the-perfect-way-to-multiply-20190411/).


### Fermat's Test

Inspired by Wilson's Theorem, we might be inclined to see if our other theorems about prime numbers are sufficient tests. How about Fermat's Little Theorem? While we have only shown it's a necessary condition to being prime, there is a formulation for it being sufficient as well.

**Fermat's Little Theorem:** $p$ is prime if and only if $a^{p-1} \equiv 1 \bmod p$ for all $a \in \\{1,2,\cdots,n-1\\}$.

**Proof of Converse:** We'll show the contrapositive. Say $n$ is composite i.e. $n$ has a divisor $\exists d \ \textrm{s.t.} \ d \mid n$. Suppose that $d^{n-1} \equiv 1 \bmod n$ i.e. $d^{n-1} = 1 + kn$ for some $k$, or more helpfully, $d^{n-1} - kn = 1$. $d$ divides $n$, so $d \mid d^{n-1} - kn = 1$, so $d = 1$, giving us our contradiction. Hence if $n$ is composite, we have found a number such that $d^{n-1} \not\equiv 1 \bmod n$. $\blacksquare$

There are a couple reasons why using FLT as a criterion so much better than what Wilson's theorem provides.

**1) Exponentiation:** Computing multiplication—especially factorials—is slow, but exponentiation is relatively easy due it being _repeated_ multiplication of the same number. For example, here's a common trick using repeated squaring to compute exponents $a^n \bmod p$.

1. Write $n$ in binary i.e. $n = c_0 2^0 + c_1 2^1 + \cdots + c_k 2^k$ where $c_i \in \\{0,1 \\}$
2. Iteratively compute $a^{2^i} = (a^{2^{i-1}})^2 \bmod p$ i.e. Find $a^{2}$, then $a^{2^2} = (a^2)^2$, then $a^{2^3} = (a^{2^3})^2$ reduced $\textrm{mod} \ p$
3. Calculate $a^n = a^{c_0 2^0 + c_1 2^1 + \cdots + c_k 2^k} = (a^{2^0})^{c_0} \cdot (a^{2^1})^{c_1}  \cdots (a^{2^k})^{c_k} \bmod p$

Expanding $n$ into binary caps the size of the total number of multiplications and divisions we compute to be proportional to $\log(n)$ as opposed to $n$, making this fairly efficient to compute $\textrm{mod} \ p$.

**2) Multiple Computations:** While if we want a _definitive_ proof that a number is prime, we will have to compute $a^{p-1} \bmod p$ for every value of $a$, we can stop our test whenever we want. We can only check some values, even just a single one if we wanted, and expedite the calculations. These sped up tests aren't definitive, but they can give us **probable prime numbers**.

The second benefit is what leads us to make this prime-testing algorithm:

**Fermat Primality Test:** To check if $p$ is prime, repeat the following $k$ times:

1. Pick a number uniformly $a \in \\{2,\cdots,p-1\\}$
2. Compute $a^{p-1} \bmod p$
  * If $a^{p-1} \not\equiv 1 \bmod p$, return "$p$ is composite"

Here, we let $k$ be a type of threshold if we accept $p$ to be prime if we're okay not being 100% certain with our test result to cut down computational cost. It must be reiterated, this really is a **probable test** if we don't check every number. For example,

<center>
$2^{340} \equiv 1 \bmod 341$
</center>

but $341 = 11 \cdot 31$. We can have false positives if we rely on this criterion. But if we do another test,

<center>
$3^{340} \equiv 56 \bmod 341$
</center>
 
we can find a **Fermat witness** to show 341 is composite. False positives might seem to preclude us from using this test, but there's a nice property that gives us reason to use this as an efficient test.

-------------------

**Claim:** If a composite number $n$ has a Fermat witness $a$ with $\gcd(a,n)=1$, then at least half of the numbers $\\{1,2,3,\cdots, n-1\\}$ are Fermat witnesses.

**Proof:** Let's call $S = \\{1,2,3,\cdots, n-1\\}$, and we'll consider the following 3 sets:

<center>
$\begin{align}
A & = \\{a \in S \ : \ a^{n-1} \equiv 1 \bmod n \textrm{ & } \gcd(a,n) = 1 \\} & | \ \textrm{Numbers that pass the test} \\\
B & = \\{b \in S \ : \ b^{n-1} \not\equiv 1 \bmod n \textrm{ & } \gcd(b,n) = 1 \\} & | \ \textrm{Non-trivial Fermat witnesses} \\\
% C & = \\{c \in S \ : \ c^{n-1} \equiv 1 \bmod n \textrm{ & } \gcd(c,n) > 1 \\} & | \ \textrm{Empty set} \ \varnothing \\\
C & = \\{c \in S \ : \ \gcd(c,n) > 1 \\} & | \ \textrm{Trivial Fermat witnesses} \\\
\end{align}$
</center>

Clearly all these sets are disjoint.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Claim:** $C$ is the trivial Fermat witnesses.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Proof:** Essentially the same proof why divisors are Fermat witnesses. Say $x \in S$ with $\gcd(x,n) = d > 1$. Suppose that $x^{n-1} \equiv 1 \bmod n$, so $x^{n-1} = 1 + kn$. $d \mid x$ and $d \mid n$, so $d \mid x^{n-1} - kn = 1$, contradicting $d>1$. So $x^{n-1} \not\equiv 1 \bmod n$. $\blacksquare$

<!-- By showing all the non-coprime integers are Fermat witnesses, we have also shown that $C = \varnothing$.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Corollary:** $C = \varnothing$ -->

<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Proof:** Essentially the same proof why divisors are Fermat witnesses. Say $c \in C$ with $\gcd(c,n) = d > 1$. $c^{n-1} \equiv 1 \bmod n$ means $c^{n-1} = 1 + kn$. $d \mid c$ and $d \mid n$, so $d \mid c^{n-1} - kn = 1$, contradicting $d>1$. So $C = \varnothing$. -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Claim:** $A,B,C \neq \varnothing$

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Proof:** $1 \in A$ so $A\neq \varnothing$. $B \neq \varnothing$ by assumption. $C \neq \varnothing$ since $n$ is composite and its divisors are in $D$.

What we are interested in showing is that $B$, the non-trivial Fermat witnesses, has a lot of elements. What we'll show is that $|B| + |C| \geq \frac{1}{2} S$, and we'll do this in a similar way we proved Fermat's Little Theorem by "permuting" elements with multiplication.

Pick any $b \in B$, and consider the set $Ab = \\{ab \bmod n \ : \ a \in A\\}$.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Claim:** $Ab \subseteq B$, and $|Ab| = |A|$

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Proof:** Pick any $a \in A$, and consider $ab \in Ab$. Since $\gcd(a,n) = \gcd(b,n) = 1$, we get that $\gcd(ab,n) = 1$. Also, note that $(ab)^{n-1} \equiv a^{n-1} b^{n-1} \equiv b^{n-1} \not\equiv 1 \bmod n$. Hence $ab \in B$ for all $a \in A$, i.e. $Ab \subseteq B$. For the second half, note that since $\gcd(b,n) = 1$, we can imply that $(a_1 b \equiv a_2 b \bmod n \Rightarrow a_1 \equiv a_2 \bmod n)$. So the elements of $Ab$ are distinct, and hence $|Ab| = |A|$. $\blacksquare$

So we have that $|A| = |Ab| \leq |B|$. Therefore, since $A \cup B \cup C = \\{1,2,\cdots,n-1\\}$ and they are distinct, as well as $|A|,|B|,|C| > 0$ by being non-empty, we have

<center>
$|S| = n-1 = |A| + |B| + |C| \geq |A| + |A| + 1 > 2|A|$
</center>

Hence, $|A| < \frac{1}{2} (n-1)$, and so its complement $|A^c| = |B| + |C| > \frac{1}{2}(n-1)$. 

<center>
$\blacksquare$
</center>

<br/>

It's worth mentioning, like with Fermat's Little Theorem, there is a group theoretic proof of this. If you're familiar with groups, the above looks a lot like we're working with cosets indirectly. The idea is that we look at the group $G = (\mathbb{Z}/n\mathbb{Z})^{\times}$ (since $n$ is composite, we look only at the invertible elements), and note that $A$ above as the set of numbers that pass the test form a subgroup. If there is a non-trivial Fermat witness i.e. $B \neq \varnothing$, then $A$ is a proper subgroup so $|G/A| \geq 2$, and hence $|A|$ can only contain at most half of the elements of $G$ (Lagrange's Theorem), and hence further that $|A|$ contains less than half of the full set $\\{1,2,\cdots,n-1\\}$.

-------------------

So if over half the numbers $\\{1,2,\cdots,n-1\\}$ are Fermat witnesses for composite $n$, we can say that the chance of $n$ being returned prime after $k$ Fermat Primality Tests is usually at most $\left(\frac{1}{2}\right)^k \rightarrow 0$ as we increase $k$. Or better, $n$ is returned accurately composite with probability at least $1 - \left(\frac{1}{2}\right)^k \rightarrow 1$. 

Some things to note here:

1. We're using the phrase "...with probability..." loosely here, since either a number is composite or not; primality is deterministic. Probability might be better replaced with "confidence" or "our belief that...". After $k$ tests, _we believe with confidence_ $1 -\left(\frac{1}{2}\right)^k$ that $n$ is prime. If a number is actually prime, it will always pass Fermat's test, no matter how many times you run it, but we don't have that knowledge beforehand when running the tests.
2. Our bound on the number of Fermat witnesses relied on there being at least 1 Fermat witness $a$ with $\gcd(a,n) = 1$. There are unfortunately numbers that are not prime that also do not have Fermat witnesses. These are called [**Carmichael numbers**](https://en.wikipedia.org/wiki/Carmichael_number), and gives us either a need to supplement this test further, or just leave a bit of room for doubt with these strong false positives.

### Other Tests

We've gone in-depth on one test, but it's worth mentioning that primality tests are still important and relevant topics in number theory. A more updated version of a Fermat-type test is found in the [**Miller-Rabin test**](https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test) which uses theories of [quadratic reciprocity](https://en.wikipedia.org/wiki/Quadratic_reciprocity), and a polynomial-time algorithm was found a little while ago with the [**AKS primality test**](https://en.wikipedia.org/wiki/AKS_primality_test).

### Different Types of Primes

Another approach that is perhaps the most common one today is instead of checking and calculating _every_ odd number's primality, we check only certain **forms of primes**. This is usually not an exhaustive method and will skip over some primes, but we get the benefit of finding the primes much quicker with specialized tests. Some types of primes include:

* **Mersenne primes** are of the form $2^n - 1$ for an integer $n$
* **Fermat primes** are of the form $2^{2^n} - 1$ for an integer $n$
* $p$ is a **Sophie Germain prime** if $2p+1$ is also prime.

Mersenne primes have been of particular interest throughout history, with odd [facts about them even involving perfect numbers](https://www.youtube.com/watch?v=T0xKHwQH-4I&t=346s). There of modern interest because we can efficiently test their primality, and as such this class of primes has held many records for being the largest known prime (contrasted with the faster growing Fermat primes, of which only 5 are known).

One of the faster tests available for Mersenne primes appears in a bit of a surprising way.

**Lucas-Lehmer Primality Test:** Let $M_p = 2^p - 1$ be the Mersenne number we want to test, with $p$ an odd prime*. Define the sequence $s_n = s_{n-1}^2 - 2$ with $s_1 = 4$. Then $M_p$ is prime if and only if $s_{p-1} \equiv 0 \bmod M_p$.

**Proof:** Many proofs of the correctness of this test are fairly lengthy and tedious. So, I'm going to default to linking the [group-theoretic proof](https://fermatslibrary.com/s/a-really-trivial-proof-of-the-lucas-lehmer-test) which I find more enlightening than the others (a proof, I might add, which uses group theory in the loosest sense, using results which can be learned in 5-10 minutes from scratch).

*we let $p$ be an odd prime since if $p=ab$ is composite, then $2^p - 1$ is composite:

<center>
$2^p - 1 = (2^{a})^b - 1 = (2^a - 1)\left(1 + 2^a + (2^a)^2 + \cdots + (2^a)^{b-1} \right)$
</center>

### Prime Generating Formula

In fact, it is possible to write a closed formula for such a prime test $\Phi(n)$ using some of our criteria above. Here's one using Wilson's theorem:

<center>

$\begin{align} \Phi(n) = \left\lfloor \frac{(n-1)! \bmod n }{n-1} \right\rfloor \cdot n \end{align}$

</center>

This isn't anything we haven't talked about: the floor of that division is essentially just using our inefficient Wilson's theorem based test to return 1 or 0 if $n$ is prime or not, then multiplying by $n$ so that the function actually returns $n$ if it is prime.

But we can do a bit better. We can remove the modular arithmetic, and make it such that instead of $\Phi(n)$ checking if $n$ is prime, make it such that $\Phi(n)$ returns the $n^\textrm{th}$ prime. The below is called **Willans' Formula**:

<center>

$\begin{align} \Phi(n) = 1 + \sum_{i=1}^{2^n} \left\lfloor \left( \frac{n}{\sum_{j=0}^{i} \left\lfloor \cos^2 \left( \frac{(j-1)! + 1}{j} \pi \right) \right\rfloor }  \right)^{1/n} \right\rfloor \end{align}$

</center>

As you can probably guess just by looking at it, this isn't all that much more efficient, and the instance of $\frac{(j-1)! + 1}{j}$ should tell you that this is still just Wilson's theorem doing the work under the hood. There's a few more tricks invovled that we'll discuss later, but if you want the whole explanation of the mechanisms behind the formula, see [this video](https://www.youtube.com/watch?v=j5s0h42GfvM).


## Sieves and Filters

So far, we've gone through and talked about simultaneously very interesting yet shallow results on prime numbers. We've barely scratched the surface in just how important primes are, as we've mostly stuck to readily calculable, number theory results, even of which we've only touched a handful. Even in this post, I've tried avoiding group theory for the sake of accessibility. But I hope all so far has illuminated that we shouldn't shy away from the mysteries of the primes, for there is much we can say about them.

But that's isn't to say that these problems and questions are easily solved (if they _can_ be solved at all). I mean, just take a look at some of our previous prime tests. You would never come up with some of these tests just by investigating numbers—I wouldn't have. They all managed to be byproducts of more dense, abstract results that hide their applications unless one to be studying the right things at the right time. Even now, the Lucas-Lehmer test's group theory proof is merely a verification of correctness; the proof I like and understand best gives no insight into how one might have actually discovered that test for Mersenee primes.

So, let's take a step back in our quest to discover more prime numbers, and begin from the very start. How would you, say in elementary or middle school, **try to test if a number is prime?**

It's exactly as we suggested first: let's just try and divide the number and see if we can factorize it; we take a big number and see if we can reduce it to a product of smaller numbers. But what if we instead did the reverse? What if instead of checking big numbers, why don't we instead _build up_ from smaller numbers, and eliminate composite numbers that way? We know that 2 is prime, but anything that is a multiple of 2 definitely isn't prime. Same with 3. 4 is a multiple of 2, so we can skip that.

This inspires a nice little algorithm to filter primes from a list:

**Sieve of Eratosthenes:** To find the prime numbers less than $n$, do the following:
1. Keep track of 3 different list of numbers: `prime`, `composite`, `unmarked`. Everything (except 1) starts as `unmarked`.
2. Find the least `unmarked` number $p$.
3. Add every multiple of $p$ less than $n$ to the `composite` list, and remove them from `unmarked`.
4. Add $p$ to `prime` and remove it from `unmarked`.
5. Repeat Steps 2–4 until `unmarked` is empty.

<!-- ![Sieve of Eratosthenes Animation](/img/prime-number-theorem/sieve_eratosthenes.svg) -->


<iframe src="/img/prime-number-theorem/sieve_eratosthenes.svg" width="760" height="760" frameborder="0"></iframe>


This can sound more complicated than it actually is, but it really is just the reverse idea of our trial divsion primality check. If a number $p$ is not a multiple of some prime less than it, it must be prime. We then can use that prime $p$ to find its multiples $pn$ and eliminate those as prime candidates. So first we find 2, and mark it prime, and then eliminate all the even numbers. The next number we find is 3, and eliminate all the multiples of 3. We eliminated 4 earlier with the evens, but then find 5 and remove the multiples of 5. We eliminated 6 with the evens (and again with the 3s), but get the chance to add 7 and remove the multiples of 7. (It turns out to eliminate all the composite numbers less than 100, we only need to eliminate all the multiples of $2,3,5,7$ since $11^2 > 100$)


<!-- add more on sieves -->

Using **sieves** is a pretty common idea in number theory and combinatorics, since they give a concrete method to count, or at the very least _give an upper bound_ for sizes of sets. They don't necessarily need to count primes like we did before, since they just need to be able to "sift out" or "filter" the elements we don't care, and this forms the basis for many proofs. But we'll come back to this point later.


For now, what the old Sieve of Eratosthenes should help visualize is why it's so hard to find primes. Only 25 numbers between 1–100 are prime. Only 168 are prime between 1–1000. As we increase the amount of numbers we look at, it becomes increasingly harder for a given $n$ to be prime; $n$ has to be able to dodge being a multiple of so many previous primes before it. Even just 2 being a prime reduces our potential candidate list in half. 3 being prime removes another sixth of our candidates, and so on. Primes just naturally get rarer, and so it shouldn't be that strange searching for larger and larger primes become incerasingly challenging. Can we quantify this rarity in primes?

### Probability of Being Prime

One intuitive notion I think the Sieve of Eratosthenes shows really well is the idea of how divisibility translates to "probability". What is the probability a number is even? Well, every other number is divisible by 2, and we eliminate those in our sieve. How about being divisble by 3? Well, that seems like that should be with probability $\frac{1}{3}$. What about being divisble by 7789, for **large enough $n$**, you'd expect $\frac{1}{7789}$ to be divisible.

This thought can give us a way to think about the probability of being prime too. What does it mean for $n$ to be prime? Well, as our sieve describes, $n$ being prime should be equivalent to $n$ not being divisible by any prime less than it. We'll let $f(n) = \mathbb{P}(n \ \textrm{is prime})$, so we want to find

<center>

$\displaystyle f(n) = \mathbb{P}(n \ \textrm{is prime}) \approx \prod_{p<n \ \textrm{prime}} \mathbb{P}(p \ \textrm{not dividing} \ n)$

</center>

If the probability of being divisible by $p$ is $\frac{1}{p}$, then being not divisible by $p$ should have probability $1-\frac{1}{p}$.

<center>

$\displaystyle f(n) \approx \prod_{p<n \ \textrm{prime}} \left( 1 - \frac{1}{p} \right) $

</center>

This estimate is nice enough, but what we care more about this function is how it changes; can we relate the primality of $n$ to $n+1$? Well, since our product only includes primes, the only way the product changes is if $n$ is prime or not. If $n$ is prime, well that's a new prime to consider $n+1$ not being divisible by, and if $n$ is not prime, then that doesn't affect our product (ignore the fact that $n \nmid n+1$, we're only looking for a heuristic argument right now).

<center>

$$
\begin{align}
f(n+1) & \approx \prod_{p<n+1 \ \textrm{prime}} \left( 1 - \frac{1}{p} \right) \\\
% & = \prod_{p<n \ \textrm{prime}} \left( 1 - \frac{1}{p} \right) \cdot \begin{cases} 1-\frac{1}{n} & \textrm{if} \ n \ \textrm{is prime} \\\ 1 & \textrm{if} \ n \ \textrm{is not prime} \end{cases}
& = \prod_{p<n \ \textrm{prime}} \left( 1 - \frac{1}{p} \right) \cdot \mathbb{P}(n \ \textrm{is not a prime divisor of} \ n+1) \\\
& = f(n) \cdot (1 - \mathbb{P}(n \ \textrm{is a prime divisor of} \ n+1)) \\\
& = f(n) \cdot \left(1 - \mathbb{P}(n \ \textrm{is a prime}) \cdot \mathbb{P}(n \ \textrm{divides} \ n+1) \right) \\\
& = f(n) \cdot \left(1 - f(n) \cdot \frac{1}{n} \right) \\\
\end{align}
$$

</center>

Rearranging a little bit, we get that

<center>

$\displaystyle f(n+1) - f(n) \approx -\frac{(f(n))^2}{n}$

</center>

If $f(n)$ is a nice enough function, we can approximate further that 

<center>

$\displaystyle f'(n) \approx f(n+1) - f(n) \approx -\frac{(f(n))^2}{n}$

</center>

We can solve this differentiable equation, giving us

<center>

$\displaystyle -\frac{f'(n)}{(f(n))^2} = \frac{1}{n} \Rightarrow f(n) = \frac{1}{\ln(cn)}$

</center>

------------------------

Tying things together, note by our Euler Product Formula for the Riemann zeta function, we could also have done this rough derivation with


<center>

$\displaystyle \frac{1}{f(n)} \approx \prod_{p<n \ \textrm{prime}} \left(\frac{1}{1 - \frac{1}{p}} \right) \approx \sum_{k=1}^{n} \frac{1}{k} \approx \ln(n)$

</center>


------------------------

Perhaps to make it clearer, if the probability of being prime is roughly $\frac{1}{\ln(n)}$, then there are roughly $\pi(n) \approx \frac{n}{\ln(n)}$ many primes less than $n$ ($\pi(n)$ is often used to denote the **prime-counting function**, and give the number of primes less than $n$).

Although we only used rough estimates, we ended up with a result that formalizes our intuition that it becomes more difficult and unlikely for larger numbers to be prime. But also note that by our treatment of what "the probability of being prime" means,

<center>

$\displaystyle f(n) = \mathbb{P}(n \ \textrm{is prime}) = \mathbb{P}(\textrm{has no prime divisor} \ p<n)$

</center>

all numbers less than $n$ should have the same probability of not having a prime divisor less than $p<n$—after all, we treated our probability of not having a divisor $p$ as $\frac{1}{p}$ which only depends on $p$, not $n$, formalizing the idea of "dodging" being in the fraction of numbers that are a multiple of $p$. So a more accurate statement is that the _fraction of numbers that are prime from 1–$n$ is proportional_ to $\frac{1}{\ln(n)}$. If this is unclear why we specify this, just imagine we include prime divisors $p>n$. Even though it's impossible for $p \mid n$ with $p>n$, our intuition of not being in the fraction of numbers that are mulitiples of $p$ would have us include an additional factor of $1-\frac{1}{p}$ in our product. This obviously lowers our probability just by considering a wider range of numbers that "miss" dividng $n$, but in actuality have no impact on the actual prime-ness of $n$ (what we've stumbled upon for formalizing probability is known as [natural density](https://en.wikipedia.org/wiki/Natural_density)).

With this in mind, let's keep moving forward where we'll later do this with the rigor it deserves.

---------------------

It should be noted that weirdly enough, as nice as this intuitive argument is, it is actually just techincally, barely wrong. In reality,  the asymptotics we've been studying actually look like

<center>

$\displaystyle f(n) \approx \prod_{p<n \ \textrm{prime}} \left(1 - \frac{1}{p} \right) \approx \frac{1}{e^{\gamma} \ln(n)}$

</center>

where $\gamma$ is the [Euler–Mascheroni constant](https://en.wikipedia.org/wiki/Euler%27s_constant). I don't have a good answer why this is the case and what our argument misses besides the fact that we worked with estimates and assumed independence of of divisibility.


<!-- But let's clear up exactly what we meant by "probability of being prime". Using our Sieve of Eratosthenes, we are considering how many integers in 1–$n$ dodge being a multiple of all the primes less than $n$. So in our loose definition of what the probability of being prime means, we are saying that approximately the fraction of numbers that are prime in the range 1–$n$ is $\frac{1}{\ln(n)}$. -->

## Distributions and the Prime Number Theorem

With our first little idea in the works that primes are approximately logarithmically distributed, we now look for some more precise results on how the primes are distributed.  

### Bertrand's Postulate

Perhaps one of the earliest and most well-known distribution results we have is Bertrand's Postulate. Due to the logarithmic nature we've found, it shouldn't be surprising that this result involves a multiplicative range instead of an arithmetic one:

**Bertrand's Postulate:** $\forall n \geq 2,  \ \exists p \ \textrm{prime s.t.} \ n<p<2n$

This doesn't necessarily say this is the smallest guaranteed interval to find a prime, nor does it say this interval generates a unique prime (for example, 7 satisfies the Postulate for both $n=4,5$). Nonetheless, it characterizes that feeling of having to expand our search for primes to greater ranges of integers. But what about the range $[n,2n]$ necessitates a prime being there?

---------------------------------

**Proof (Erdős):** Before we get into the proof, we are first going to want to play around with what will become our key guide towards the proof. Consider

<center>

$\displaystyle {2n \choose n} = \frac{(2n)!}{(n!)^2}$

</center>

If you try factoring this for a few values of $n$, something apparent appears. For example, here's the factorization for $n=22$.


<center>

$\displaystyle {2\cdot 22 \choose 22} = 2^3\cdot 3 \cdot5 \cdot 13 \cdot \color{red}{23} \cdot \color{red}{29} \cdot \color{red}{31} \cdot \color{red}{37} \cdot \color{red}{41} \cdot \color{red}{43}$

</center>

It seems that $2n \choose n$ contains all prime factors between $n$ and $2n$ once, and no prime factor greater $2n$. We're going to try and use that fact to bound $2n \choose n$ appropriately to show that there needs to be at least one prime factor in $[n,2n]$ for it to be not too small and not too large. If we're going to talk about its factorization via how large it is, let's start to find some inequalities. 

**Lemma 1:** $ \ \displaystyle \frac{4^n}{2n} \leq {2n \choose n}$ 

**Proof:** $4^n = (1+1)^{2n} = \sum_{k=0}^{2n} {2n \choose k} = 2 + \sum_{k=1}^{2n-1} {2n \choose k} \leq 2n \cdot {2n \choose n}$. The last inequality comes from the middle binomial coefficient being the greatest. $\ \blacksquare$

Next, it seems natural we should understand the prime factorization of factorials. Let $R_p(n)$ be the largest exponent such that for a prime $p$, $p^R \mid n$ (note for _any_ prime $p$; it might be that $R_p(n) = 0$). We are interested in $R_p({2n \choose n})$.

**Lemma 2:** For any prime $p$ and $R = R_p({2n \choose n})$, $ \ \displaystyle p^R \leq 2n$.

**Proof:** There's a nice [formula](https://en.wikipedia.org/wiki/Legendre%27s_formula) (due to Legendre) that gives 

<center>

$\displaystyle R_p(n!) = \sum_{i=1}^{\infty} \left\lfloor \frac{n}{p^i} \right\rfloor$

</center>

If this is not obvious, the idea is that you count how many multiples of $p,p^2,p^3,\cdots$ appear from $1$ to $n$, and each occurrence contributes 1 to the exponent $R$ (it's only one contribution even for $p^2,p^3,\cdots$ since we already count each of the factors previously i.e. $p^2$ is a multiple of $p$ as well). Further, if $p^i > n$, then the $\left\lfloor \frac{n}{p^i} \right\rfloor$ reduces to 0 so we don't count powers of primes that don't divide $n!$.

Back to the problem at hand, since we're considering the division of two factorials, $R = R_p({2n \choose n})$ gains contributions from powers of $p$ in $(2n)!$ and loses powers from the division of powers of $p$ in $(n!)^2$. Hence,

<center>

$\displaystyle R = \sum_{i=1}^{\infty} \left\lfloor \frac{2n}{p^i} \right\rfloor - 2\sum_{i=1}^{\infty} \left\lfloor \frac{n}{p^i} \right\rfloor = \sum_{i=1}^{\infty} \left( \left\lfloor \frac{2n}{p^i} \right\rfloor - 2\left\lfloor \frac{n}{p^i} \right\rfloor \right)$

</center>

It's not hard to see (if you want, just graph it) that the only values of this final sum's terms are

<center>

$\displaystyle \left\lfloor \frac{2n}{p^i} \right\rfloor - 2\left\lfloor \frac{n}{p^i} \right\rfloor = \begin{cases} 0 & \textrm{if} \ \left\lfloor \frac{n}{p^i} \right\rfloor \bmod 1 < \frac{1}{2} \\\ 1 & \textrm{if} \ \left\lfloor \frac{n}{p^i} \right\rfloor \bmod 1 \geq \frac{1}{2} \end{cases}$

</center>

(This essentially checks if doubling $n$ to $2n$ has room for another multiple of $p^i$ beyond the expected contributions in the ranges of length $n$). Alternatively, notice that each term is an integer, and

<center>

$\displaystyle \left\lfloor \frac{2n}{p^i} \right\rfloor - 2\left\lfloor \frac{n}{p^i} \right\rfloor < \frac{2n}{p^i} - 2\left( \frac{n}{p^i} - 1 \right) = 2$

</center>

Further, this term is all 0 when $p^i > 2n$ i.e. $i > \log_p(2n)$ by the floor function. So, $R \leq \log_p(2n)$ and thus $p^R \leq p^{\log_p(2n)} = 2n$. $ \ \blacksquare$

-------------------------------

Already, we can deduce quite a lot of information about the number of primes that divide $2n \choose n$. Using our two lemmas, let $p_1,\cdots,p_\ell$ be the primes dividing $2n \choose n$. Then

<center>

$\displaystyle \frac{4^n}{2n} \leq {2n \choose n} = \prod_{i = 1}^\ell p_i^{R_p({2n \choose n})} \leq \prod_{i = 1}^\ell 2n = (2n)^\ell$

</center>

Taking logarithms, we get that $\ell \geq \frac{2n \log(2)}{\log(2n)} - 1$, giving a lower bound on _how many_ primes must divide $2n \choose n$. Also, it is clear that no prime dividing ${2n \choose n}$ can be greater than $2n$ (check Legendre's formula if needed) and so in particular this gives us an upper bound on $\pi(2n)$ the number of primes less than or equal to $2n$.

-------------------------------

**Lemma 3:** If $p$ is an odd prime and $\frac{2n}{3} < p \leq n$, then $R_p({2n \choose n}) = 0$.

**Proof:** $(2n)!$ contains two factors of $p$ via $p$ and $2p$. $(n!)^2$ also contains two factors of $p$. These factors cancel in ${2n \choose n}$. The bound ensures that $3p > 2n$ cannot appear in the numerator to contribute more factors (and it being odd makes it so that $2p$ doesn't contribute more than expected). $\blacksquare$

It's also easy to see by similar reasoning that for prime $p$:

* if $n<p\leq 2n$, then $R_p({2n \choose n}) = 1$
* if $p > 2n$, then $R_p({2n \choose n}) = 0$


These will be useful later. Finally, we need one more simpler bound before proving the Postulate. We'll introduce one last piece of notation for the **primorial**.

<center>

$\displaystyle n\\# = \prod_{p \leq n \ \textrm{prime}} p$

</center>

It's essentially $n!$ but only looking at primes less than $n$ as opposed to all integers less than $n$.

**Lemma 4:** For $n\geq 1$, $n\\# < 4^n$.

**Proof:** We'll do this by induction, checking even and odd cases (the base cases are easy to check). Supoose this holds for up to $n-1$.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **(Even)** Say $n$ is even i.e. $n=2k$. Since $2k$ is composite, then by the inductive hypothesis,

<center>
$(2k)\\# = (2k-1)\\# < 4^{2k-1} < 4^{2k}$
</center>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **(Odd)** Say $n$ is odd i.e. $n=2k+1$, and consider 


<center>

<!-- $\displaystyle {2k+1 \choose k} = \frac{(2k+1)!}{k!(k+1)!} > \prod_{i=k}^{2k} i > \prod_{\textrm{prime} \ k+2 \leq p \leq 2k+1} p = \frac{(2k+1)\\#}{(k+1)\\#}$  -->
$\displaystyle {2k+1 \choose k} = \frac{(2k+1)!}{k!(k+1)!} > \prod_{\textrm{prime} \ k+2 \leq p \leq 2k+1} p = \frac{(2k+1)\\#}{(k+1)\\#}$ 

</center>

We get the inequality since the binomial coefficient is an integer, with all the prime factors between $k+2$ and $2k+1$ dividing it since they divide the numerator but not the denominator. These relations get us close to allowing use of our inductive hypothesis.

<center>

$\begin{align} 
(2k+1)\\# & = (k+1)\\# \cdot \frac{(2k+1)\\#}{(k+1)\\#} \\\
& < 4^{k+1} \cdot {2k+1 \choose k} \\\
& < 4^{k+1} \cdot 2^{2k} \\\
& = 4^{2k+1}
\end{align}$ 

</center>

We get the last inequality by noting that $\sum_{i=0}^{2k+1} {2k+1 \choose i} = 2^{2k+1}$ and ${2k+1 \choose k} = {2k+1 \choose k+1}$ since $2k+1$ is odd. So ${2k+1 \choose k} < \frac{1}{2} 2^{2k+1} = 2^{2k}$. $\ \blacksquare$


**Proof of Bertrand's Postulate:** Say this is false, and let $n \geq 3$ be such a counterexample with no prime $p$ in the interval $n < p < 2n$. Note by our lemmas, there are no prime factors $p$ of $2n \choose n$ such that:

* $2n < p$ as such a factor must divide $(2n)!$
* $p = 2n$ since $2n$ is even
* $n<p<2n$ by assumption
* $\frac{2n}{3} < p \leq n$ by **Lemma 3**

So all prime factors of $2n \choose n$ must be $p \leq \frac{2n}{3}$. So we can simplify the prime factorization to be

<center>

$\displaystyle {2n \choose n} =  \prod_{\textrm{prime } p} p^{R} = \prod_{p \leq \frac{2n}{3}} p^{R}$

</center>

But also, if $p > \sqrt{2n}$, then ${2n \choose n}$ has at most one factor of $p$ (since $p^2 > 2n$ and can't divide $(2n)!$ i.e. see Lemma 2). So, if we can further simplify our prime factorization for that interval

<center>

$\displaystyle {2n \choose n} = \prod_{p \leq \frac{2n}{3}} p^{R} = \left( \prod_{p \leq \sqrt{2n}} p^{R} \right) \left(\prod_{\sqrt{2n} < p \leq \frac{2n}{3}} p^{R} \right) \leq \left( \prod_{p \leq \sqrt{2n}} p^{R} \right) \left(\prod_{\sqrt{2n} < p \leq \frac{2n}{3}} p^{1} \right)$$

</center>

Using **Lemma 2**, we can bound $p^R \leq 2n$. Also, obviously, there can only be at most $\sqrt{2n} - 1$ distinct prime numbers less than or equal to $\sqrt{2n}$ (there are only that many integers less than $\sqrt{2n}$ excluding 1, after all). Starting with **Lemma 1** and ending with **Lemma 4**, we can combine all of this into one final inequality.

<center>

$\begin{align} 
\frac{4^n}{2n} \leq {2n \choose n} & \leq \left( \prod_{p \leq \sqrt{2n}} p^{R} \right) \left(\prod_{\sqrt{2n} < p \leq \frac{2n}{3}} p \right) \\\
& \leq (2n)^{\sqrt{2n} - 1} \prod_{p \leq \frac{2n}{3}} p \\\
& < (2n)^{\sqrt{2n} - 1} 4^{2n/3} \\\
\end{align}$

</center>

Rearranging a little bit more, we end with the inequality

<center>

$\displaystyle 4^{n/3} \leq (2n)^{\sqrt{2n}} \Rightarrow 2^{\sqrt{2n}} \leq (2n)^3$

</center>

This inequality fails for $n>427$, giving us our contradiction that we needed. Hence, we have shown Bertrand's Postulate is true for $n>427$. 

To show it for $n\leq 426$, this is small enough that we don't need to do anything hard; we can just find a set of primes that work for all desired intervals. Consider the list

<center>

$3,5,7,13,23,43,83,163,317,631$

</center>

This sequence of primes are chosen to be such that the next prime in the sequence is the largest prime less than twice the previous. We don't need to know all the primes less than 427 and check every case of $(n,2n)$, since these give us all the examples we need!


<center>
$\blacksquare$
</center>

---------------------------------

Despite its simplicity, the impact of Bertrand's Postulate can be found in many results. For example, it gives a simple bound on prime gaps: if you have a prime $p$, you know you only have to search up to $2p$ before you find your next prime. However, these types of bounds are rarely obvious.

**Legendre's Conjecture (Unsolved):** $\forall n \geq 2,  \ \exists p \ \textrm{prime s.t.} \ n^2<p<(n+1)^2$.

Note that $(n+1)^2 \leq 2n^2$ for $n>2$, so we can't solve this using Bertrand's postulate. This is not to say there have not been improvements, however:

**Nagura (1952):** $\forall n \geq 25,  \ \exists p \ \textrm{prime s.t.} \ n<p<\frac{6}{5}n$

Getting hard, concrete bounds like this are rarely tangible, as the insight necessary to get an object to analyze is quite demanding. Even for the above proof, it is not totally obvious that the point of investigation begins at binomial coefficients. With the major result of the Prime Number Theorem at the end, we will obtain asymptotic bounds to shrink this interval as much as we want.

Here's another interesting consequence of Bertrand's postulate:

<!-- https://www3.nd.edu/~dgalvin1/pdf/bertrand.pdf -->

**Claim:** The set $\\{1,2,3,\cdots,2n\\}$ can be partitioned into pairs $\\{a_1,b_1\\}$, $\\{a_2,b_2\\}$, $\cdots$, $\\{a_n,b_n\\}$ so that for all pairs $a_i + b_i$ is prime.

**Proof:** We use induction.


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Base Case:** $n = 1$ works as $1+2=3$ is prime. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Inductive Step:** Say we can find such a partitioning for any set of even size less than $2n$. By Bertrand's Postulate, there is a prime $2n < p < 4n$, i.e. there is a prime of the form $p = 2n + m$ for $1 \leq m < 2n$ (note $m$ must be odd). We can now pair off some numbers in the set by

<center>

$\displaystyle \left\\{2n,m \right \\},\\{2n-1,m+1\\},\\{2n-2,m+2\\},\cdots,\left \\{n + \left\lceil \frac{m}{2} \right\rceil, n + \left\lfloor \frac{m}{2} \right\rfloor \right \\}$

</center>

with every pair summing to $p$. These pairs take care of the numbers $\\{m,m+1,\cdots,2n\\}$. The remaining set of $\\{1,2,\cdots,m-1\\}$ can be partitioned by the inductive hypothesis (since $m-1 < 2n$ is even). $\ \blacksquare$

Also, we can chain intervals together if we want to find lots of distinct primes. I.e. if we look in the intervals $[1,2]$, $[2,4]$, $[4,8]$, etc., because each interval picks up exactly where the last one left off, we can find as many distinct primes as intervals we're willing to check. In fact, we've already briefly seen this trick used once in Willan's formula:

<center>

$\begin{align} \Phi(n) = 1 + \sum_{i=1}^{\color{red}{2^n}} \left\lfloor \left( \frac{n}{\sum_{j=0}^{i} \left\lfloor \cos^2 \left( \frac{(j-1)! + 1}{j} \pi \right) \right\rfloor }  \right)^{1/n} \right\rfloor \end{align}$

</center>

The $2^n$ ensures we find _at least_ $n$ distinct primes as we check the intervals $[1,2]$, $[2,4]$, $[4,8]$, etc. This guarantee of finding new primes in these intervals lends itself quite nicely to prime generation, even if in unexpected ways:

**Wright's Prime Generating Formula:** There's a value of $\alpha \in (1,2)$ such that 

<center>

$\displaystyle \left\lfloor 2^\alpha \right\rfloor, \left\lfloor 2^{2^\alpha} \right\rfloor, \left\lfloor 2^{2^{2^\alpha}} \right\rfloor, \cdots$

</center>

are all prime. (The value [Wright originally gave](https://www.jstor.org/stable/2306356) was $\alpha \approx 1.929$)

**Proof:** Just to be clear, what we're exactly saying is that there's a value $\alpha$ such that for the recurrence

<center>

$\displaystyle g_0 = \alpha, \ \ \ g_{n+1} = 2^{g_n}$

</center>

we have $\left\lfloor g_n \right\rfloor$ is prime. The idea is that we want to bound $p_n < g_n < p_n + 1$, which leads naturally to trying to find our constant $\alpha$ in between the repeated _logarithms_ of $p_n$ and $p_n + 1$. We can ensure such a constant exists by picking primes that are spaced far enough away—hence Bertrand's Postulate—that will help create a sequence that converges to $\alpha$. 

So, first we choose a sequence of primes $p_n$ such that

* $p_1 = 2$ or $3$,
* $2^{p_n} < p_{n+1} < p_{n+1} + 1 < 2^{p_{n} + 1}$ 

We know we can choose such a sequence of primes thanks to Bertrand's Postulate. These will be the primes our magic sequence $\lfloor g_n \rfloor$ will generate. Taking the $\log_2$ (from here on, $\log$ will refer to $\log_2$) of this inequality, we find that

<center>

$\displaystyle p_n < \log(p_{n+1}) < \log(p_{n+1} + 1) < p_{n} + 1$

</center>

Now we define two more sequences:

<center>

$\displaystyle u_n = \log^{(n)} (p_n) \ \ \ \ \ \ \ \ \  v_n = \log^{(n)}(p_n + 1)$

</center>

where $\log^{(n)} (x) = \overset{\textrm{n times}}{\overline{\log(\log(\cdots \log}}(x) \cdots ))$ i.e. the $n$-fold composition of $\log$ with itself. By taking further $\log$ of our inequalities $n$ times, we get that

<center>

$\displaystyle u_{n} < u_{n+1} < v_{n+1} < v_{n}$

</center>

$u_{n}$ is a bounded (by $v_1$) monotonically increasing sequence, and so it converges $u_n \rightarrow \alpha$. So we obtain that $u_n < \alpha < v_n$ ($v_n$ might converge to something else, but we know at least that all terms of $v_n$ must be greater than $\alpha$ or else it'd contradict our inequalities above).

By letting $g_0 = \alpha$, and $g_{n+1} = 2^{g_n}$ as described, and repeatedly raising our inequalities to the power 2, we then get

<center>

$\displaystyle u_{n} < \alpha < v_{n} \Rightarrow p_n < g_n < p_n + 1$

</center>

Therefore, $\lfloor g_n \rfloor = p_n$ and follows our sequence of primes. $\ \blacksquare$

----------------------

Actually _computing_ such an $\alpha$ is not easy though. We've shown the existence of such a number as the limit of a sequence, but finding that limit is quite hard. Even calculating approximations of $\alpha$ via $u_n$ is hard, since we need to _already have a sequence of primes_ $p_n$ predetermined (so unfortunately, this isn't that useful for actually _generating_ more primes, but at best generating numbers close to primes outside of our seqeuence). 

But because it's sequence dependent, there are many such constants that serve our purpose. For instance, if we let


<center>

$\displaystyle p_1 = 3, p_2 = 13, p_3 = 16381$

</center>

we can find that it's corresponding $\alpha$ (which is also maximal) is about

<center>

$\begin{align} 

\log(3) & \approx 1.5849625 \\\
\log(\log(13)) & \approx 1.8876967 \\\
\log(\log(\log(16381))) & \approx 1.9287787 \\\

\end{align}$

</center>

If we instead choose a different sequence, like

<center>

$\displaystyle p_1 = 2, p_2 = 5, p_3 = 37$

</center>

we can find a different approximation:

<center>

$\begin{align} 

\log(2) & = 1 \\\
\log(\log(5)) & \approx 1.2153233 \\\
\log(\log(\log(37))) & \approx 1.2516476 \\\

\end{align}$

</center>

Also, if you like these power-towers and primes, we're quite lucky Bertrand's postulate finds a prime in $n < p < 2n$, as that also immediately means we can find primes in $n < p < 3n$, or in any range $n < p < Bn$. So really, we can generalize our theorem and proof quite easily to instead say:

**Claim:** For all $B \geq 2$, there's a value of $\alpha$ such that 

<center>

$\displaystyle \left\lfloor B^\alpha \right\rfloor, \left\lfloor B^{B^\alpha} \right\rfloor, \left\lfloor B^{B^{B^\alpha}} \right\rfloor, \cdots$

</center>

are all prime.

<!-- can improve this B value to any (1+epsilon) with PNT -->


## Prime Number Theorem

Bertrand's Postulate gave us a nice first step towards making precise how primes are distributed by giving us an upper bound on how frequently primes arise. Bringing things back around, Bertrand's Postulate also suggests that the number of primes grows at least logarithmically. Again, consider the intervals


<center>

$\displaystyle (1,2]$, $(2,4]$, $(4,8],\cdots$

</center>

We know there is at least 1 prime in each of these disjoint intervals, so we know that $p_n \leq 2^n$ where $p_n$ is the nth prime. Thus, if we let $\pi(x)$ be the prime-counting function from before, then we have that $\pi(x) \geq \log_2(x)$. Of course, this is not that close to our previous estimate with $\pi(x) \approx \frac{x}{\ln(x)}$, but it is an initial, definitive start beyond our heuristics to precisely describe the distribution of primes.

We can, however, bound $\pi(x)$ with just Bertrand's postulate in a promising way. From here on, $\log$ refers to the natural logarithm $\ln$. Recall from before that we found that 

<center>
$\displaystyle \pi(2n) \geq \frac{2n \log(2)}{\log(2n)} - 1 = \frac{2n}{\log(2n)}\left(\log(2) - \frac{\log(2n)}{2n} \right)$
</center>

This, however, suffers from the fact that our proof only makes sense for integers $n$. If we want to extend this to all real numbers $x\geq 2$, we will need to work around it a bit more. Let $n=\lfloor x/2 \rfloor$, so $2n \leq x < 2n+2$ and in particular $x - 2 < 2n$.

<center>
$\displaystyle \pi(x) \geq \pi(2n) \geq \frac{2n}{\log(2n)}\left(\log(2) - \frac{\log(2n)}{2n} \right) \geq \frac{x-2}{\log(x)}\left(\log(2) - \frac{\log(2n)}{2n} \right)$
</center>

The function $\frac{\log(x)}{x}$ is maximized at $x=e$ with value $\frac{1}{e}$. Also, for $x\geq 4$, $x-2 \geq \frac{x}{2}$

<center>
$\displaystyle \pi(x) \geq \frac{x-2}{\log(x)}\left(\log(2) - \frac{\log(2n)}{2n} \right) \geq \frac{x}{\log(x)} \cdot \frac{1}{2}\left(\log(2) - \frac{1}{e} \right)$
</center>

So we have bounded from below $\pi(x)$ by $\frac{x}{\log(x)}$ up to a positive constant (one can just check that this also holds for $4 > x\geq 2$). This bound is nowhere near optimal, but I tried giving a constant that was most readily calculable with less additional verification needed; we could give better bounds but have to check for smaller values manually, and or have seemingly arbitrary constants pop out of nowhere to verify later. We can also give a similar upper bound, but it will take a bit more work. First notice that

<center>
$\displaystyle 4^n = \sum_{k=0}^{2n} {2n \choose k} \geq {2n \choose n} \geq \prod_{n \leq p \ \textrm{prime} \leq 2n} p \geq \prod_{n \leq p \ \textrm{prime} \leq 2n} n = n^{\pi(2n) - \pi(n)}$
</center>

Again taking logarithms, we have

<center>
$\displaystyle \pi(2n) - \pi(n) \leq \frac{n\log (4)}{\log (n)}$
</center>

This is close to what we want, in that $\pi(2n) - \pi(n)$ counts the number of primes in the interval $(n,2n]$ of length $n$, but we want the number of primes in the interval $(0,n]$. And as before, to make this work for real numbers, our bounds have to a be a bit more careful. Let $n = \lfloor x \rfloor$ i.e. $n \leq x < n+1$.

<center>

$\begin{align}

\pi(2x)-\pi(x) & \leq \pi(2(n+1)) - \pi(n) \\\
& = \big(\pi(2n+2) - \pi(2n) \big) + \big(\pi(2n) - \pi(n) \big) \\\
& \leq 2 + \frac{n \log(4)}{\log(n)} \\\
& = \frac{n}{\log(n)} \left( 2 \cdot \frac{\log(n)}{n} + \log(4)  \right) \\\
& \leq \frac{n}{\log(n)} \left( 2 \cdot \frac{1}{e} + \log(4)  \right) \\\
& \leq \frac{x}{\log(\sqrt{x})} \left(\frac{2}{e} + \log(4)  \right) \\\
& = \frac{x}{\log(x)} \cdot 2 \left(\frac{2}{e} + \log(4)  \right) \\\

\end{align}$

</center>

The only main point of interest is to recall that for $x\geq 3$, we have $n \geq x - 1 \geq \sqrt{x}$. We can now chain together exponentially decreasing intervals with a suitable cut-off to bound $\pi(x)$. Let $\ell$ be the greatest integer such that $x/2^\ell > \sqrt{x}$. 

<center>

$\begin{align}

% \pi(x) = \left( \pi(x) - \pi \left(\frac{x}{2} \right) \right) + \left( \pi\left(\frac{x}{2^{2}} \right) - \pi\left(\frac{x}{2^{3}} \right) \right) + \cdots + \left( \pi\left(\frac{x}{2^{\ell}} \right) - \pi\left(\frac{x}{2^{\ell + 1}} \right) \right) + \pi\left(\frac{x}{2^{\ell + 1}} \right)

\pi(x) & = \left( \pi(x) - \pi \left(\frac{x}{2} \right) \right) + \pi\left(\frac{x}{2} \right) \\\
& = \sum_{k=0}^{\ell} \left( \pi \left( \frac{x}{2^{k}} \right) - \pi \left( \frac{x}{2^{k+1}} \right)  \right) + \pi \left( \frac{x}{2^{\ell+1}} \right) \\\
& \leq \sum_{k=0}^{\ell} \left(  \frac{x/2^{k+1}}{\log\left(x/2^{k+1} \right)} \cdot c  \right) + \pi \left( \frac{x}{2^{\ell+1}} \right)


\end{align}$

</center>

where $c$ is the constant found before. Now for all $k \leq \ell$, we have $x/2^k > \sqrt{x}$ i.e. $\log\left(x/2^k \right) > \frac{1}{2} \log(x)$.


<center>

$\begin{align}

\pi(x) & \leq \sum_{k=0}^{\ell} \left(  \frac{x/2^{k+1}}{\log\left(x/2^{k+1} \right)} \cdot c \right) + \pi \left( \frac{x}{2^{\ell+1}} \right) \\\
& \leq \sum_{k=0}^{\ell} \left(  \frac{x/2^{k+1}}{\frac{1}{2}\log(x)} \cdot c \right) + \pi \left( \frac{x}{2^{\ell+1}} \right) \\\
& = \frac{x}{\log(x)} \cdot c \cdot \sum_{k=0}^{\ell} \left(  \frac{1}{2^{k}} \right) + \pi \left( \frac{x}{2^{\ell+1}} \right) \\\
& \leq \frac{x}{\log(x)} \cdot c \cdot 1 + \pi \left( \frac{x}{2^{\ell+1}} \right) \\\
& \leq \frac{x}{\log(x)} \cdot c + \sqrt{x} \\\
& \leq \frac{x}{\log(x)} \cdot c + \frac{x}{\log(x)} \\\
& = \frac{x}{\log(x)}\left(c + 1 \right) \\\
& = \frac{x}{\log(x)}\left(\frac{4}{e} + 2\log(4) + 1 \right)

\end{align}$

</center>

Recalling by construction that $x/2^{\ell+1} \leq \sqrt{x}$, and the trivial bound $\pi\left(x/2^{\ell+1}\right) \leq x/2^{\ell+1}$. We also used that $\log(x) \leq \sqrt{x}$ i.e. $\sqrt{x} \leq x/\log(x)$. All together, we have 

<center>

$\displaystyle \frac{x}{\log(x)} \left(\frac{1}{2}\log(2) - \frac{1}{2e} \right) \leq \pi(x) \leq \frac{x}{\log(x)}\left(\frac{4}{e} + 2\log(4) + 1 \right)$

</center>

This gives some real, concrete motivation to pursue the Prime Number Theorem.

------------------------------

### Proof of the Prime Number Theorem

For the sake of time, we give up some elementary-ness for concision in the following proof of the Prime Number Theorem. In the spirit of analytic number theory as we tasted before with Euler's proof of the infinitude of primes, we will borrow some (in the grand scheme simple) tools from complex analysis, investigating the properties of some specific functions to get at the result we want. The original paper can be found [here](https://people.mpim-bonn.mpg.de/zagier/files/doi/10.2307/2975232/fulltext.pdf). If you aren't already familiar with holomorphic functions, types of convergence, complex integrals, and the like, here's a good time to catch up on it. Not much is totally needed, but we need to be careful of the details.

The ultimate idea of the proof is to analyze analytic properties of some functions to deduce results about their asymptotics.

**Prime Number Theorem:** $\pi(x) \sim \frac{x}{\log(x)}$, that is, $\lim_{x \to \infty} \frac{\pi(x)}{x/\log(x)} = 1$.

From here on out, to simplify notation, $p$ will always refer to indexing primes, and as often as possible I'll try to keep $s \in \mathbb{C}$ reserved for complex variables and $x \in \mathbb{R}$ for real ones. The three functions of interest to us for this proof are:

* $\displaystyle \zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s}$ (the Riemann Zeta Function)
* $\displaystyle \vartheta(x) = \sum_{p \leq x} \log p$ (the first Chebyshev function)
* $\displaystyle \Phi(s) = \sum_{p} \frac{\log p}{p^s}$ (I couldn't find a name for this one)

The main goal of this proof is to prove the following equivalent statement.

**Theorem:** The Prime Number Theorem is equivalent to $\vartheta(x) \sim x$.

This shouldn't be too surprising given that $π(x) = \sum_{p \leq x} 1$, so the logarithmic factor might be expected.

**Proof:** We will appropriately bound the limits by each other to determine equality. First, note 

<center>

$\displaystyle \vartheta(x) = \sum_{p \leq x} \log p \leq \sum_{p \leq x} \log x = \pi(x) \log(x)$.

</center>

<!-- Dividing by $x$, and letting $x \rightarrow \infty$, -->
Dividing by $x$,

<center>

<!-- $\displaystyle \frac{\vartheta(x)}{x} \leq \frac{\pi(x) \log(x)}{x}$. -->
<!-- $\displaystyle \lim \limits_{x \rightarrow \infty} \frac{\vartheta(x)}{x} \leq \liminf\limits_{x\rightarrow \infty} \frac{\pi(x) \log(x)}{x}$ -->
$\displaystyle \frac{\vartheta(x)}{x} \leq \frac{\pi(x) \log(x)}{x}$

</center>

<!-- To get the corresponding lower bound, let $\alpha \in (0,1)$. -->
To get the corresponding lower bound, let $\epsilon \in (0,1)$.

<center>

<!-- $\displaystyle \vartheta(x) = \sum_{p \leq x} \log p \geq \sum_{x^\alpha \leq p \leq x} \log p \geq \left(\pi(x) - \pi(x^\alpha) \right) \log(x^\alpha) \geq \alpha \left(\pi(x) - x^\alpha \right)  \log(x)$ -->
$\begin{align} 

\vartheta(x) = \sum_{p \leq x} \log p \geq \sum_{x^{1-\epsilon} \leq p \leq x} \log p & \geq \left(\pi(x) - \pi(x^{1-\epsilon}) \right) \log(x^{1-\epsilon}) \\\ 
& \geq (1-\epsilon) \left(\pi(x) - x^{1-\epsilon} \right)  \log(x)


\end{align}$


</center>

<!-- Again dividing by $x$ and letting $x \to \infty$: -->
Again dividing by $x$,

<center>

<!-- $\displaystyle 1 \geq \alpha \limsup\limits_{x\rightarrow \infty} \frac{\left(\pi(x) - x^\alpha \right) \log(x)}{x} = \alpha \limsup\limits_{x\rightarrow \infty} \frac{\pi(x) \log(x)}{x}$ -->
$\displaystyle \frac{\vartheta(x)}{x} \geq (1 - \epsilon) \frac{\left(\pi(x) - x^{1- \epsilon} \right) \log(x)}{x}$

</center>

Combining everything,

<center>

<!-- $\displaystyle 1 \leq \liminf\limits_{x\rightarrow \infty} \frac{\pi(x) \log(x)}{x} \leq \limsup\limits_{x\rightarrow \infty} \frac{\pi(x) \log(x)}{x} \leq \frac{1}{\alpha}$ -->
$\displaystyle (1 - \epsilon) \frac{\left(\pi(x) - x^{1- \epsilon} \right) \log(x)}{x} \leq \frac{\vartheta(x)}{x} \leq \frac{\pi(x) \log(x)}{x} $


</center>

<!-- Letting $\alpha \to 1^-$, we get $\lim\limits_{x\rightarrow \infty} \frac{\pi(x)}{x/\log x} = 1$. For the purposes of this proof, we do not need the other direction, so we leave it as is. $\blacksquare$ -->

Since we can take $\epsilon \rightarrow 0$ and the term $x^{-\epsilon} \log(x) \rightarrow 0$ as $x \rightarrow \infty$, we get the sandwiched bounds (this can be explicitly written assuming either limit exists and taking limits and limit inferior/superior). $\blacksquare$


----------------------------


We'll consider this equivalent statement with $\vartheta(x)$ since the "jumps" at each prime $p$ of $\log(p)$ instead of 1 as in $\pi(x)$ makes it slightly nicer to work with. We have already met the Riemann zeta function before and seen how it relates to primes directly with its product form. Let's now justify it a bit more concretely.

**Proposition (I):** $\zeta(s)$ absolutely converges for $\Re(s)>1$.

*Proof:* $\displaystyle \sum_{n=1}^{\infty} \left| \frac{1}{n^s} \right| = \sum_{n=1}^{\infty} \left| \frac{1}{n^{\Re(s)}} \right| \left| \frac{1}{e^{i \Im(s) \log(n)}} \right| = \sum_{n=1}^{\infty} \frac{1}{n^{\Re(s)}}$. This converges since $\Re(s)>1$. $\blacksquare$

**Corollary (Euler's Product Form):** $\zeta(s) = \prod_{p}\left(1-p^{-s}\right)^{-1}$ for $\Re(s) > 1$.

*Proof:* We derived the above earlier assuming we could rearrange terms however we wanted, and absolute convergence gives us that prerequisite to do it safely (see [Riemann's rearrangment theorem](https://en.wikipedia.org/wiki/Riemann_series_theorem)). $\blacksquare$

**Proposition (II):** $\zeta(s) - \frac{1}{s-1}$ extends holomorphically to $\Re(s)>0$.

*Proof:* The idea of looking at this function is to note that the right term $\frac{1}{s-1}$ is the integral of the infinite sum that defines $\zeta(s)$. While neither may be defined for $\Re(s) > 0$ individually, their difference will cancel out just right to give us the extension we want. If this isn't clear, think about how the harmonic series and its related integral both diverge, but their difference gives rise to the [Euler-Mascheroni Constant](https://en.wikipedia.org/wiki/Euler%27s_constant). So, with this in mind, we use a clever rewriting of this difference, and bound it appropriately to show it converges uniformly (on compact sets) via the Weierstrass M-test, hence showing such a limiting function exists and by uniform convergence is also holomorphic. First, note

<center>

$\displaystyle \zeta(s) - \frac{1}{s-1} = \sum_{n=1}^{\infty} \frac{1}{n^s} - \int_1^\infty \frac{1}{x^s} \mathrm{d}x = \sum_{n=1}^{\infty} \int_n^\{n+1} \left( \frac{1}{n^s} - \frac{1}{x^s} \right) \mathrm{d}x$

</center>

with the Fundamental Theorem of Calculus, we can further rewrite the integral terms: 

<center>

$\displaystyle \int_n^\{n+1} \left( \frac{1}{n^s} - \frac{1}{x^s} \right) \mathrm{d}x = \int_n^\{n+1} \left( \int_{x}^{n} \frac{\mathrm{d}}{\mathrm{d}u}\left( \frac{1}{u^s} \right) \mathrm{d}u \right) \mathrm{d}x = \int_n^\{n+1}  \int_{x}^{n} \frac{-s}{u^{s+1}} \mathrm{d}u \ \mathrm{d}x$

</center>

Now let's see if we can bound this to apply the M-test:

<center>

$\displaystyle \left| \int_n^\{n+1}  \int_{x}^{n} \frac{-s}{u^{s+1}} \mathrm{d}u \ \mathrm{d}x \right| \leq  \frac{1}{2} \max_{n \leq u \leq n+1} \left| \frac{s}{u^{s+1}} \right| \leq \frac{\left| s \right|}{n^{\Re(s)+1}} \leq \frac{C}{n^{\delta+1}} := M_n$

</center>

We evaluate the modulus as we did before, and the maximum is given since the fraction is decreasing in $u$. Now for any compact i.e. closed and bounded set $K \subseteq \\{ s \in \mathbb{C} \ : \ \Re(s) > 0 \\}$, since $|s|$ and $\Re(s)$ are continuous, they achieve their bounds so there are constants $C = \max \\{ |s| \ : \ s \in K \\}$ and $\delta = \min \\{ \Re(s) \ : \ s \in K \\}$. Since $\delta > 0$, the sum of $M_n$ converge and so by the M-test get that our sum defining the function converges uniformly and absolutely giving us existence of such a function. Since it also converges uniformly on compacts in the region $\Re(s)>0$ and the finite sums $f_k(s) = \sum_{n=1}^{k} \int_n^\{n+1} \left( \frac{1}{n^s} - \frac{1}{x^s} \right) \mathrm{d}x$ are holomorphic, the limit $\zeta(s) - \frac{1}{s-1}$ is holomorphic as well. $\blacksquare$

**Proposition (III):** $\vartheta(x) = O(x)$ i.e. there are constants $C,x_0$ such that for all $x\geq x_0$, we have  $\left| \vartheta(x) \right| \leq C \left| x \right| $.

*Proof:* Using similar methods from before,

<center>

$\displaystyle 2^{2n} = (1+1)^{2n} = \sum_{k=0}^{2n} {2n \choose k} \geq {2n \choose n} \geq \prod_{n \leq p \leq 2n} p = e^{\sum_{n \leq p \leq 2n} \log p} = e^{\vartheta(2n) - \vartheta(n)}$

</center>

Hence $\vartheta(2n) - \vartheta(n) \leq 2n \log(2)$. We can now extend this to all $x$ instead of just even $x = 2n$ also in a similar method from before. Let $n = \lfloor x/2 \rfloor$:

<center>

$\begin{align}

\vartheta(x) - \vartheta(x/2) & =  \big( \vartheta(x) - \vartheta(2n) \big) + \big( \vartheta(2n) - \vartheta(n) \big) + \big( \vartheta(n) - \vartheta(x/2) \big) \\\
& \leq \sum_{2n < p \leq x} \log p + 2n\log(2) - \sum_{n \leq p \leq x/2} \log p \\\
& \leq 2 \log(x) + 2n\log(2) \\\
& \leq 2x + x\log(2)\\\
& \leq (2+\log(2))x


\end{align}$

</center>

The first few inequalties are just writing out the sums and checking indices correctly. We obtain the second-to-last inequality by noting by choice $2n \leq x$ and $\log(x) \leq x$. Let $C = 2+\log(2)$. Now let $r$ be the least integer such that $1>x/2^r$.

<center>

$\begin{align}

\vartheta(x) & = \left(\vartheta(x) - \vartheta(x/2) \right) + \cdots + \left(\vartheta(x/2^{r-1}) - \vartheta(x/2^{r}) \right) + \vartheta(x/2^{r}) \\\
& \leq Cx + C(x/2) + \cdots C(x/2^{r-1}) + 0 \\\
& \leq 2Cx

\end{align}$

</center>

This works for all $x>1$, hence showing $\vartheta(x) = O(x)$. (Note: this bound is quite bad, but we used it to get concrete values to see clearly $\vartheta(x) = O(x) $. In particular, if you use the fact that $\log(x) = o(x)$, you can make $C$ as close to $\log(2)$ as you want for sufficiently large $x \geq x_0$, and this is what the original proof does) $\blacksquare$



**Proposition (IV):** For $\Re(s)\geq 1$, $\zeta(s) \neq 0$ and $\Phi(s) - \frac{1}{s-1}$ is holomorphic.

<!-- https://rtullydo.github.io/complex-analysis-411-notes/section-14.html -->

*Proof:* By **Proposition (I)** and the Euler Product Form, we can show $\zeta(s) \neq 0$. It might seem intuitively obvious that $\zeta(s) \neq 0$ since $1-p^{-s} \neq 0$ and so we are taking the product of non-zero terms, but since our product is infinite, we have to check that the product doesn't shrink too fast. For example, even though $\frac{n}{n+1} \neq 0$, the product

<center>

$\displaystyle \prod_{n=1}^\infty \frac{n}{n+1} = \lim_{n\to\infty} \frac{1}{n+1} = 0$

</center>

Note that $\left(1-p^{-s} \right)^{-1} - 1 = \left( p^s - 1 \right)^{-1}$ is absolutely convergent for $\Re(s) > 1$ since $\left| \left( p^s - 1 \right)^{-1} \right| = \left| p^{-s} / \left( 1 - p^{-s} \right) \right| =  p^{-\Re(s)} / \left| 1 - p^{-s} \right| \leq p^{-\Re(s)}/2$. So in particular, this means that $\left(1-p^{-s} \right)^{-1} \rightarrow 1$ as we run through increasing primes. Let $N$ be the integer such that $\left(1-p^{-s} \right)^{-1} \in B(1,1/2)$ for $p \geq N$, so we can write the product

<!-- $\left| \left( p^s - 1 \right)^{-1} \right| \leq \left| \left( p^{\Re(s)} - 1 \right)^{-1} \right| \leq p^{-\Re(s)}$. -->

<center>

$\displaystyle \prod_p \frac{1}{1-p^{-s}} = \prod_{2\leq p < N} \frac{1}{1-p^{-s}} \ \cdot \ \prod_{N \leq p} \frac{1}{1-p^{-s}}$

</center>

Since the second product's terms are bounded away from 0, we can use the (standard branch of the) complex logarithm $\log(z) = \ln(|z|) + i\arg(z)$.


<center>

$\displaystyle \log \left( \prod_{N \leq p} \frac{1}{1-p^{-s}} \right) = \sum_{N \leq p} \log\left( \frac{1}{1-p^{-s}} \right) \leq \sum_{N \leq p} 2 \left| \frac{1}{1-p^{-s}}  - 1 \right|$

</center>

getting the last inequality via the Taylor series for $\log(z+1)$. We showed above this last sum converges, so the $\log$ sum converges, and in particular by the continuity of $e^x$ the product converges:

<center>

$\displaystyle \prod_{N \leq p} \frac{1}{1-p^{-s}} = \exp \left( \sum_{N \leq p} \log\left( \frac{1}{1-p^{-s}} \right) \right) \neq 0$.

</center>

Since the individual terms $\frac{1}{1-p^{-s}}$ are non-zero, we get on the whole that for $\Re(s) > 1$,

<center>

$\displaystyle \zeta(s) = \prod_p \frac{1}{1-p^{-s}} \neq 0$

</center>

To start on the second part, we build off a bit of what we just talked about noting that $\log(\zeta(s)) = -\sum_p \log\left(1-p^{-s} \right)$. Differentiating,

<!-- -\sum_p \frac{\mathrm{d}}{\mathrm{d}s}\log\left( 1-p^{-s} \right) -->


<center>

$\displaystyle -\frac{\zeta'(s)}{\zeta(s)} = \sum_p \frac{p^{-s}\log(p)}{1-p^{-s} } = \sum_p \frac{\log(p)}{p^{s} - 1 } = \Phi(s) + \sum_p \frac{\log(p)}{p^s \left( p^{s} - 1 \right) }$

</center>

So in particular,

<center>

$\displaystyle \Phi(s) = -\frac{\zeta'(s)}{\zeta(s)} - \sum_p \frac{\log(p)}{p^s \left( p^{s} - 1 \right) }$

</center>


The sum on the right converges for $\Re(s) > \frac{1}{2}$. So the only possibilities for problematic poles for $\Phi(s)$ come from the term $-\zeta'(s)/\zeta(s)$. By **Proposition (II)**, we can extend $\zeta(s)$ to a meromorphic function on $\Re(s)>0$ with a simple pole at $s=1$. Thus, $-\zeta'(s)/\zeta(s)$ has simple poles at $s=1$ and the zeroes of $\zeta(s)$. We already showed $\zeta(s) \neq 0$ for $\Re(s) > 1$, so if we want to show there are no problems for $\Phi(s)$, we just need to show that there are no zeroes for $\zeta(s)$ on $\Re(s)=1$. We will do so by contradiction by considering multiple zeroes on the line $\Re(s)=1$.



<!-- All together, we can extend $\Phi(s)$ meromorphically to $\Re(s)>\frac{1}{2}$ with the same simple poles as $-\zeta'(s)/\zeta(s)$. -->



Suppose that $\zeta(s)$ has a zero of order $\mu$ at $s=1+i\alpha$ and a zero of order $\nu$ at $s=1+2i\alpha$ for $\alpha \in \mathbb{R} \setminus \\{ 0 \\}$. Since $\Phi$ has a simple pole at $s=1$, it has associated residue $1$ (note the sign is flipped since we have $-\zeta'(s)/\zeta(s)$ instead of $\zeta'(s)/\zeta(s)$), and for a zero of $\zeta(s)$ of order $k$ it also has residue $-k$.

<center>

$\displaystyle \lim_{\epsilon \to 0^+} \epsilon \Phi(1+\epsilon) = 1, \ \lim_{\epsilon \to 0^+} \epsilon \Phi(1+\epsilon \pm i\alpha) = -\mu, \ \lim_{\epsilon \to 0^+} \epsilon \Phi(1+\epsilon \pm 2i\alpha) = -\nu$

</center>

We include both zeroes $1 \pm i\alpha$ since $\zeta(\bar{s}) = \overline{\zeta(s)}$. Now, consider the sum

<!-- <center>

$\displaystyle \zeta(\bar{s}) = \sum_{n} \frac{1}{n^{\bar{s}}} = \sum_{n} \frac{1}{n^{\Re(s)} \cdot e^{-\Im(s) \log n}}  = \overline{\sum_{n} \frac{1}{n^{\Re(s)} \cdot e^{\Im(s) \log n}}} = \overline(\zeta(s))$

</center> -->

<center>

$\displaystyle \sum_{r=-2}^2 {4 \choose 2+r} \Phi(1+\epsilon+ri\alpha) = \sum_p \frac{\log p}{p^{1+\epsilon}}\left( p^{i\alpha/2} + p^{-i\alpha/2} \right)^4 \geq 0$

</center>

The first equality is by direct computation, and we get the inequality since sums of conjugates are real and hence their 4th powers are non-negative real numbers. Now mulitplying through by $\epsilon>0$ and taking the limit $\epsilon \to 0$:

<center>

$\displaystyle 0 \leq \lim_{\epsilon \to 0} \sum_{r=-2}^2 {4 \choose 2+r} \epsilon \Phi(1+\epsilon+ri\alpha) = 6 - 2\nu - 8\mu$

</center>

Since the only pole of $\zeta(s)$ for $\Re(s)>0$ is at $s=1$, $1+\epsilon+ri\alpha$ must be zeroes of positive order i.e. $\mu, \nu \geq 0$. Therefore, $2\nu + 8\mu \leq 6$ can only hold if $\mu=0$ i.e. $\zeta(1+i\alpha) \neq 0$. 

Hence $\Phi(s)$ only has the simple pole at $s=1$ for $\Re(s) \geq 1$, and hence $\Phi(s) - \frac{1}{s-1}$ is holomorphic on that half-plane. $\blacksquare$

Next we strengthen our result from **(III)** to show that $\vartheta(x) \sim x$. 

**Proposition (V):** $\displaystyle \int_1^\infty \frac{\vartheta(x) - x}{x^2} \ \mathrm{d}x$ is a convergent integral.

The idea is that if $\vartheta(x) \approx \lambda x$ for $\lambda > 1$, then the integral would be approximately $\int_1^\infty \frac{\lambda x - x}{x^2} \ \mathrm{d}x = \int_1^\infty (\lambda-1) \frac{1}{x} \ \mathrm{d}x$, which 
would diverge; the convergence of the integral forces the integrand to decay at the rate we want. We will do this with what Newman calls the *Analytic Theorem*.

**Analytic Theorem.** Let $f(t)$ $(t \geq 0)$ be a bounded and locally integrable function and suppose that the function $g(z) = \int_0^{\infty} f(t) e^{-zt} \ \mathrm{d}t$ $(\Re(z) > 0)$ extends holomorphically to $\Re(z) \geq 0$. Then $\int_0^{\infty} f(t) \ \mathrm{d}t$ exists (and equals $g(0)$).

The idea of this theorem is to take the Laplace transform of $f(t)$ analyze its "spectrum". If the spectrum analysis is nice and differentiable, it means that around $s=0$, $g$ can't have singularities that blow up and so make the integral of $f$ blow up; the behavior of $g$ limits the behavior of $f$. I'll leave the proof of the theorem to the original paper, but the idea above is enough (especially if you have seen the Laplace transform before).


*Proof of V:* The function $\Phi(s)$ looks a lot like $\vartheta(x)$. For $\Re(s)>1$, we can interchange the sum in $\Phi(s)$ with an integral:

<center>

<!-- $\displaystyle \Phi(s) = \sum_p \frac{\log p}{p^s} = \int_1^\infty \frac{\mathrm{d}\vartheta(x)}{x^s} = s \int_{1}^{\infty} \frac{\vartheta(x)}{x^{s+1}} \ \mathrm{d}x = s \int_{0}^{\infty} e^{-st}\vartheta(e^t) \ \mathrm{d}t$  -->
$\displaystyle \Phi(s) = \sum_p \frac{\log p}{p^s} = \int_1^\infty \frac{1}{x^s} \ \mathrm{d}\vartheta(x)$ 

</center>

Note the differential is with respect to $\mathrm{d}\vartheta(x)$ as opposed to just $\mathrm{d}x$. If you aren't familiar with measure theory and the Lebesgue integral, the idea is that we are "stretching" the x-axis according to $\vartheta(x)$, giving weights to the intervals we're integrating over with respect to $\vartheta(x)$. If $g(x)$ was differentiable, it might be more familiar to write this transformed interval as $\mathrm{d}g(x) = g'(x) \ \mathrm{d}x$. [Here are more details on the specific case we're working with](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). We get the sum equivalence since $\vartheta(x)$ is a step function, so we only evaluate at the step discontinuities at the primes. Most usefully for us, these types of integrals admit a type of integration by parts. 


<!-- In particular, $\mathrm{d} \vartheta(x)$ means take integral with measure $\mu_{\vartheta}(E) = \sum_{p \in E} \log p$ -->

<center>

<!-- $\displaystyle \Phi(s) = \sum_p \frac{\log p}{p^s} = \int_1^\infty \frac{\mathrm{d}\vartheta(x)}{x^s} = s \int_{1}^{\infty} \frac{\vartheta(x)}{x^{s+1}} \ \mathrm{d}x = s \int_{0}^{\infty} e^{-st}\vartheta(e^t) \ \mathrm{d}t$  -->
$\begin{align} 

\int_1^\infty \frac{1}{x^s} \ \mathrm{d}\vartheta(x) & = \left[ \frac{1}{x^s} \cdot \vartheta(x) \right]_{1}^{\infty} - \int_1^\infty \vartheta(x) \ \mathrm{d} \left( \frac{1}{x^s} \right) \\\
& = \left[ \frac{1}{x^s} \cdot \vartheta(x) \right]_{1}^{\infty} - \int_1^\infty \vartheta(x) \frac{-s}{x^{s+1}} \ \mathrm{d}x \\\
& = 0 + s \int_1^\infty \frac{\vartheta(x)}{x^{s+1}} \ \mathrm{d}x \\\
& = s \int_0^\infty \frac{\vartheta(e^t)}{e^{ts}} \ \mathrm{d}t

\end{align}$

</center>

Note since $\vartheta(x) = O(x)$ and $\Re(s)>1$, we have $\left| \vartheta(x)/x^s \right| \leq C/x^{\Re(s)-1} \rightarrow 0$ as $x\to\infty$. With the exact same bounding, we see the integral term is also convergent. We get the last equality substituting $x=e^t$. Now we apply the Analytic Theorem to $f(t) = \vartheta(e^t)e^{-t} - 1$ and $g(z) = \Phi(z+1)/(z+1) - 1/z$. To verify, note that from the above derivation we have

<center>

$\begin{align} 

\frac{\Phi(z+1)}{z+1} & = \int_0^\infty \vartheta(e^t)e^{-t(z+1)} \ \mathrm{d}t \\\
& = \int_0^\infty \vartheta(e^t)e^{-t}e^{-zt} \ \mathrm{d}t \\\
& = \int_0^\infty \left(f(t) + 1 \right)e^{-zt} \ \mathrm{d}t \\\
& = \int_0^\infty f(t) e^{-zt} \ \mathrm{d}t + \frac{1}{z} \\\

\end{align}$

</center>

Note by **(III)**, $\vartheta(e^t) = O(e^t)$, so $f(t) = \vartheta(e^t)e^{-t} - 1 = O(1)$ and so is bounded, and only has countably many discontinuities at $\log p$ for primes $p$ where $\vartheta(x)$ has its jump discontinuities at the primes and thus is locally integrable (i.e. integrable on every closed subinterval of $(0,\infty)$). By **(IV)**, $g(z) = \frac{\Phi(z+1)}{z+1} - \frac{1}{z} = \frac{\Phi(z+1) - 1/z - 1}{z+1}$ extends holomorphically to $\Re(z) \geq 0$ since $z+1 \neq 0$ and $\Phi(z+1) - 1/z$ is holomorphic for $\Re(z) \geq 0$. So we use the **Analaytic Theorem** and conclude that 

<center>

$\displaystyle g(0) = \int_0^\infty f(t) \ \mathrm{d}t = \int_0^\infty \vartheta(e^t)e^{-t} - 1 \ \mathrm{d}t = \int_0^\infty \frac{\vartheta(x) - x}{x^2} \ \mathrm{d}x$

</center>

is a convergent integral. $\blacksquare$


**Prime Number Theorem:** $\vartheta(x) \sim x$.

*Proof:* For contradiction, assume that $\lim\limits_{x \to \infty} \vartheta(x)/x \neq 1$. We check two cases. First, say for some $\lambda > 1$, $\limsup\limits_{x\rightarrow \infty} \vartheta(x)/x \geq \lambda$ i.e. there are arbitrarily large $x_n$ such that $\vartheta(x_n) \geq \lambda x_n$ (we drift too far above $x$). Also, since $\vartheta(x)$ is non-decreasing, we have $\min\limits_{t \in [x_n, \lambda x_n]} \vartheta(t) = \vartheta(x_n) \geq \lambda x_n$. Hence integrating over this interval,


<!-- For contradiction, assume that $\limits_{x\limsup\rightarrow \infty} \vartheta(x)/x \geq 1$. -->



<center>

$\displaystyle \int_{x_n}^{\lambda x_n} \frac{\vartheta(t) - t}{t^2} \ \mathrm{d}t \geq \int_{x_n}^{\lambda x_n} \frac{\lambda x_n - t}{t^2} \ \mathrm{d}t = \int_1^{\lambda} \frac{\lambda - t}{t^2} \ \mathrm{d}t = \lambda - 1 - \log \lambda > 0$

</center>

Picking the $x_n$ such that the intervals $[x_n, \lambda x_n]$ are disjoint, we get

<center>

$\displaystyle \int_1^\infty \frac{\vartheta(t) - t}{t^2} \ \mathrm{d}t \geq \sum_{n=0}^\infty \int_{x_n}^{\lambda x_n} \frac{\vartheta(t) - t}{t^2} \ \mathrm{d}t \geq \sum_{n=0}^\infty \lambda - 1 - \log \lambda = \infty$

</center>

This contradicts the convergence established in **(V)**, and so $\limsup\limits_{x\rightarrow \infty} \vartheta(x)/x \leq 1$. Similarly, if we assume $\liminf\limits_{x\rightarrow \infty} \vartheta(x)/x \leq \lambda < 1$, i.e. there are abitrarily large $x_n$ such that $\vartheta(x_n) \leq \lambda x_n$, we get a similar divergence looking at the interval $[\lambda x_n, x_n]$. 


<center>

$\displaystyle \int_{\lambda x_n}^{x_n} \frac{\vartheta(t) - t}{t^2} \ \mathrm{d}t \leq \int_{\lambda x_n}^{x_n} \frac{\lambda x_n - t}{t^2} \ \mathrm{d}t = \int_\lambda^{1} \frac{\lambda - t}{t^2} \ \mathrm{d}t =\log\lambda - (\lambda - 1) < 0$

</center>

Therefore $1 \leq \liminf\limits_{x\rightarrow \infty} \vartheta(x)/x \leq \limsup\limits_{x\rightarrow \infty} \vartheta(x)/x \leq 1$ and so $\lim\limits_{x\to\infty} \vartheta(x)/x=1$. $\blacksquare$


---------------------------------------------

Thus, we have proven one of the most fundamental results in analytic number theory.

### Do We Need the Primes At All?

I want to note not much of this proof actually used any key properties of the primes. The only time we ever actually used "primeness" was in deducing the Euler product form to show that $\zeta(s) \neq 0$ for $\Re(s) \geq 1$. The rest followed from analytic properties of the functions $\pi(x)$, $\Phi(s)$, and $\vartheta(x)$. If you can find another subset of $\mathbb{N}$ that implied similar non-vanishing properties, this proof could be easily adapted. For instance, for any subset $S \subseteq \mathbb{N}$, we can let $\pi_S(x) = \left| S \cap \mathbb{N}_{\leq x} \right| = \\# \\{ n \leq x \ : \ n \in S \\}$ i.e. $\pi_S(x)$ is the $S$ counting function instead of prime counting function. Similarly let $\vartheta_S(x) = \sum_{s \in S, s \leq x} \log s$, we have the equivalence from before with the same proof.

**Theorem:** $\pi_S(x) \sim \frac{x}{\log x}$ if and only if $\vartheta_S(x) \sim x$.

What was hard was establishing either of these asymptotics, which is where the analytic properties became important, and in particular needed the primes and fundamental theorem of arithmetic to establish the non-vanishing of $\zeta(s)$.


## Consequences of the Prime Number Theorem

The Prime Number Theorem allows us to extend and strengthen many of the results we have already spent time combing through. Quite possibly the most immediate allows us to estimate the number of primes less than or equal to $n$.

**Corollary:** $\displaystyle \pi(n) \approx \frac{n}{\log n}$.

Of course, this is only useful for large $n$ as we approach the asymptotics. The actual estimate given by $n/\log n$ isn't great, and often in practice it is better to use the **Logarithmic integral**.

**Proposition:** The PNT is equivalent to $\pi(x) \sim \mathrm{Li}(x) = \int_2^x \frac{\mathrm{d}t}{\log t}$.

**Proof:** This follows from the fact that $\mathrm{Li}(x) \sim \frac{x}{\log x}$ as well, and that can be obtained with integration by parts. [If interested, you can read the whole induction to obtain the asymptotics here](https://willhoffer.com/2021-11-14/asymptotics-of-the-logarithmic-integral/). $\blacksquare$

<!-- f(x)~g(x) and h(x)~g(x), then f(x)~h(x) -->

This roughly makes sense to be a better estimate of $\pi(n)$, as it is a more "dynamic" estimate by integrating over the "density" of the primes suggested by the PNT. For a small interval $(t, t + \epsilon]$ around $t$, the number of primes in that interval is approximately 

<center>

$\displaystyle \mathrm{d \pi} \approx \frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{t}{\log t} \right) \ \mathrm{d}t = \frac{\log t - 1}{(\log t)^2} \ \mathrm{d}t \approx \frac{\mathrm{d}t}{\log t}$

</center>

More crudely, just consider $\pi(t+dt) - \pi(t) = \frac{t+dt}{\log(t+dt)} - \frac{t}{\log t} \approx \frac{t+dt}{\log t} - \frac{t}{\log t} \approx \frac{dt}{\log t}$. The point is that this integral uses the estimate of the PNT to create tighter bounds in accordance to how far along we have counted, as opposed to uniformly treating the number of primes in an interval the same everywhere. [You can read more on this specific estimate here](https://arxiv.org/pdf/1311.1093).

This estimate should hopefully look familiar, as it and the Prime Number Theorem affirm one of our big suspicians originally! Remember we found heuristically, by considering the Sieve of Eratosthenes, that the probability of $n$ being prime should be about the probability of $n$ not being divisible by any number $x<n$ which resulted in a probability of $1/\log n$. The derivative should make this even more concrete, and even more simply, the number of primes less than $n$ is $\pi(n)$, so the probability of a number up to $n$ being prime should be about $\pi(n)/n \approx 1/\log n$. This also then gives the interpretation that the average gap between primes less than or equal to $n$ is about $\log n$.

So, if you need a prime, let's say around $2^{512}$ for cryptographic purposes, the odds of a number around there being prime is about $1/\log(2^{512}) \approx 1/356$. Since even numbers are obviously not prime, we need to check on average about $356/2 = 178$ numbers to find a prime of that magnitude (and this is without any optimizations, or fault tolerances in allowing probable primes like before).

<!-- Mauerer's probable prime generating algorithm: https://link.springer.com/article/10.1007/BF00202269 -->

### Estimating the nth Prime Number

The Prime Number Theorem also implies a similar type of inverse relation. As before, let $p_n$ be the $n^\textrm{th}$ prime number.

**Proposition:** $p_n \sim n \log n$.

*Proof:* This follows since $n = \pi(p_n) \sim \frac{p_n}{\log p_n}$ i.e. $p_n \sim n \log p_n$. This is almost what we want, so resubstituting the relation back into itself one more time gives 
<center>

$\displaystyle p_n \sim n \log p_n \sim n \log (n \log p_n) \sim n\log n + n\log \log p_n \sim n \log n$

</center>

This works in particular because logarithms preserve asymptotics for functions increasing to $\infty$, and the PNT implies $\log p_n \sim \log n$. So we can rewrite these substitutions of $p_n$ as substitutions of $\log p_n$. $\blacksquare$

<!-- From f/g = 1, then log(f)/log(g) = [log(g) + log(f/g)]/log (g) = 1 + log(f/g)/log(g) = 1 + 0/infty = 1 -->

<!-- Using similar logic and taking logarithms of the actual limit statement of the PNT can add more rigor to the above if wanted. $\blacksquare$  -->

<!-- https://www.quora.com/How-does-the-Prime-Number-Theorem-imply-that-the-nth-prime-number-is-very-close-to-n-log-n-as-n-grows-very-large -->

<!-- https://proofwiki.org/wiki/Approximate_Value_of_Nth_Prime_Number -->


Like the original Prime Number Theorem estimate, this isn't that great of an approximation. Since $n = \pi(p_n) \sim \mathrm{Li(p_n)}$, we get the better approximation that $p_n \sim \mathrm{Li}^{-1}(n)$ (note this works due to monotonicity). A better second order estimation given by analyzing the Logarithmic integral is 

<center>

$\displaystyle p_n \sim n\log n + n\log \log n - n$

</center>

It seems we get close to something like this directly from our asymptotics above, but we need more careful analysis to get here. Cipolla found this originally in 1902 (of reference I cannot find), but there have been more elaborate methods that result from looking at $\mathrm{Li}^{-1}$. One such developed for more general inversion problems can be found [here (helpfully, also in English)](https://inria.hal.science/inria-00076983/document). Here is one possible, more numeric idea to get this better approximation. We start with the better estimate of $n = \pi(p_n) = \mathrm{Li}(p_n)$. By using the asymptotic expansion given by the integration by parts, we obtain the better estimate

<center>

$\displaystyle \mathrm{Li}(x) \sim \frac{x}{\log x} \sum_{n=0}^\infty \frac{n!}{\left(\log x \right)^n} \sim \frac{x}{\log x} \sum_{n=0}^\infty \frac{1}{\left(\log x \right)^n} = \frac{x}{\log x} \cdot \frac{1}{1 - \frac{1}{\log x}} = \frac{x}{\log x - 1}$

</center>

Again using $\pi(p_n) = n$, we get

<center>

<!-- $\displaystyle n \sim \frac{p_n}{\log p_n - 1}$ -->
$\displaystyle p_n \sim n \left( \log p_n  - 1 \right) = f(p_n)$

</center>

Hence, we want to approximate solutions to $f(x) = x$. Now, note that $f'(x) = \frac{n}{x} < 1$ since $p_n > n$. Hence, by the Contraction Mapping Theorem, this equation has a (stable) fixed point which we know to be $p_n$, so we can iteratively give guesses to get better and better approximations of the fixed point $p_n$. We start with our initial guess we got before of $p_n \approx n \log n$.

<center>

$\displaystyle p_n \approx n \left( \log \left( n \log n \right)  - 1 \right) = n \left( \log n + \log \log n   - 1 \right) = n \log n + n \log \log n - n$

</center>

which was the better estimate from before! We can plug this in again to get one more estimate, but since we are adding terms together, it won't simplify as cleanly.

<center>

$\displaystyle p_n \approx n \log \left( n \log n + n \log \log n - n \right) - n$

</center>

Heuristically, though, this approximation performs worse, likely due to the accumulated errors ignored in our estimations and asymptotics; what we really want to solve is $\pi(p_n) = n$, but we can only estimate $\pi(n)$. This results in a fixed point solution that may be close to $p_n$, but not exactly.

<!-- One way to understand this is through the [relative condition number](https://en.wikipedia.org/wiki/Condition_number#One_variable) that quantifies the relative sensitivity of our solutions (the nth prime number $p_n$) to small changes and errors in the input ($n$). Since we are effectively solving $p_n = \pi^{-1}(n)$, we get that

<center>

$\displaystyle \left| \frac{n \cdot \left(\pi^{-1} \right)'(n)}{\pi^{-1}(n)} \right| = \left| \frac{n \cdot \frac{1}{\pi' \left( \pi^{-1}(n) \right)}}{\pi^{-1}(n)}  \right| = \left| \frac{n \cdot \frac{1}{\frac{1}{\log \left( \pi^{-1}(n) \right)}}}{\pi^{-1}(n)}  \right| = \left| \frac{n \log p_n}{p_n}  \right| $

</center> -->



### Revisiting Bertrand's Postulate

The Prime Number Theorem allows us to strengthen and show some of the results we have already discussed. For instance, Bertrand's postulate falls out almost immediately from the estimates given by the PNT.

<center>

$\displaystyle \pi(2n) - \pi(n) \sim \frac{2n}{\log(2n)} - \frac{n}{\log n} \sim \frac{n}{\log n}$

</center>

So for large $n$, there is not only at least one prime, but many primes in the interval $(n, 2n]$. Of course, our original proof of Bertrand's Postulate has its benefits, one being that its concrete and establishes at least one prime for *all* intervals like this, rather than the slightly more vague asymptotic notion. Perhaps a bit more interestingly is that this shows that there are roughly the same number of primes in the interval $(0,n]$ as there is from $(n,2n]$, which is a bit surprising given that $\pi(n)$ isn't linear. But because $\log n$ grows slow enough, the asymptotics balance out. Similarly, we can strengthen Bertrand's Postulate to any non-zero interval $(n, (1+\epsilon)n]$.


<center>

$\displaystyle \pi((1+\epsilon)n) - \pi(n) \sim \frac{(1+\epsilon)n}{\log((1+\epsilon)n)} - \frac{n}{\log n} \sim \frac{\epsilon n}{\log n}$

</center>

So all we need is $n$ to be large enough to overcome the scaling of $\epsilon$; we can take a "small" enough interval given that $n$ is big enough to make that interval have enough room for primes to occur. How big that $n$ must be is not super easy to get given that we haven't done any of the (also difficult) error analysis of the Prime Number Theorem, but a good estimate might just start with getting this asymptotic term greater than 1.

### A Quick Application of the Prime Number Theorem

To round things off, here's a quick application of the PNT. While it is nonetheless an interesting and key result about the behavior and distribution of primes, the PNT is not just a novelty and can be used to give bounds on other prime related problems. In particular because it tells us that the average gap of primes around $n$ is $\log n$, they occur just frequently enough for their harmonic style sum to grow logarithmically slower, and so still diverge.

**Proposition:** $\sum_{p \textrm{ prime}} \frac{1}{p}$ diverges.

**Proof:** We can use a Riemann-Stieltjes style integral rewriting like we did before, and use integration by parts.

<center>

$\displaystyle \sum_{p \leq t} \frac{1}{p} = \int_{2}^{t} \frac{1}{x} \ \mathrm{d}\pi(x) = \left[ \frac{\pi(x)}{x} \right]_2^t - \int_2^t \frac{-\pi(x)}{x^2} \ \mathrm{d}x = \frac{\pi(t)}{t} - \frac{\pi(2)}{2} + \int_2^t \frac{\pi(x)}{x^2} \ \mathrm{d}x$

</center>

Applying the PNT, we get

<center>

$\displaystyle \sum_{p \leq t} \frac{1}{p} \sim \frac{1}{\log t} + \int_2^t \frac{1}{x \log x} \ \mathrm{d}x \sim \frac{1}{\log t} + \log\log t - \log \log 2$

</center>

$\log \log t \to \infty$ as $t \to \infty$, hence the sum $\sum_p \frac{1}{p}$ diverges. $\blacksquare$

## An Analogue to the Prime Number Theorem in $K[x]$

Before finshing this post off, I want to remind us where we started. Before treating primes in this abstract, removed way, we started with how we all learned what a prime number is: a number that has no other factors other than 1 and itself. We then recalled the slighlty more useful, still simple and well-known fact that every natural number can be factored as a product of primes, a fact which we summarized with the **natural numbers are a unique factorization domain (UFD)**. But since the natural numbers aren't the only UFD, this leads to the obvious question: is there a Prime Number Theorem for *other* UFDs? It turns out, there is.

One of the most common and useful UFDs is the ring of polynomials over a field $K[x]$. That is, if $K$ is a field, then the set $K[x]$ of one-variable polynomials in $x$ with coefficients in $K$ is a UFD. For a quick refresher for why if you know some ring theory, $K[x]$ is a principal ideal domain (PID) due to the division algorithm (which works since $K$ is a field), and every PID is a UFD. Our "primes" in $K[x]$ are not numbers, but rather *irreducible polynomials* i.e. polynomials that cannot be factored into a product of non-constant polynomials.

**Example:** In $\mathbb{R}[x]$, $x^2 + 1$ is irreducible since it has no roots, but in $\mathbb{C}[x]$ factors into irreducibles as $x^2+1 = (x-i)(x+i)$.

For any infinite field, there are an infinite number of irreducible polynomials: just take the linear polynomials $f(x) = x - \alpha$ for $\alpha \in K$, just like how there are an infinite number of primes in $\mathbb{N}$. Since there is no obvious ordering on polynomials, we can't make a prime counting style function $\pi(x)$ easily for $K[x]$. 

However, if we let $K = \mathbb{F}_q$ be the finite field of (prime power) order $q$, and $P_n$ denote the set of monic irreducible polynomials of degree $n$, then it turns out

<center>

$\displaystyle \| P_n \| = \\# \\{ \textrm{monic irreducible polynomials of degree } n \\} \sim \frac{q^n}{n} = \frac{x}{\log_q x}$

</center>

where we make the substitution $x = q^n$ to highlight the analogy. [The proof is not super long](https://arxiv.org/pdf/1001.0409), but requires knowing some field/Galois theory. On the whole, it is not difficult and the prerequisites can be learned relatively quickly, but are still necessary. In particular for finite fields, [this is a great refresher](https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf).

**Theorem:** The number of monic irreducible polynomials of degree $n$ over the finite field $\mathbb{F}\_q$ is $P\_n = \frac{1}{n} \sum\_{d \mid n} \mu(n/d) q^d$ where $\mu$ is the Möbius function.

*Proof:* We proceed combinatorially, counting the number of elements of finite fields in two different ways that relate to the size of the set $P_n$. The case for $n=1$ is clear since $\| P\_1 \| = q = \frac{1}{1} \sum\_{d \mid 1} \mu(1/d) q^1$ since there are $q$ monic linear polynomials (that are all irreducible) and the only divisor of 1 is 1 itself. So for the remainder of the proof, we assume $n>1$.

Let $R_n = \bigcup \\{\textrm{roots of } f(x) \ \mid \ f(x) \in P\_n \\}$ be the collection of all the roots in $\overline{\mathbb{F}\_q}$ of polynomials in $P_n$. Since these irreducible polynomials are of degree $n$, the splitting field for all of these polynomials are $\mathbb{F}\_{q^n}$, so we can restrict our attention there. Since irreducible polynomials are minimal polynomials of their roots, we can make use of two properties to characterize $R\_n$.

* **Roots of minimal (and so irreducible) polynomials are distinct**: This can be seen by $\mathbb{F}\_q$ being the splitting field of the separable polynomial $x^q - x$ and so Galois. More directly since every element satisfies $x^q - x$ by Lagrange's theorem, take irreducible $f$ with root $\alpha \in \mathbb{F}\_q$, so $f(x) \mid x^q - x$ and so is separable.
* **Distinct irreducible polynomial have distinct roots:** Since each irreducible $f$ is the minimal polynomials of its roots, and minimal polynomials are unique, distinct irreducibles have distinct roots.


<!-- Also, note that all roots of irreducible polynomials are distinct (since $\mathbb{F}\_q$ is the splitting field of the separable polynomial $x^q - x$; alternatively, take any irreducible and hence minimal polynomial $f$ with root $\alpha \in \mathbb{F}\_q$, so $f(x) \mid x^q - x$ and so is separable). -->

So $R\_n$ is actually the union of disjoint $n$-element sets, one for each polynomial $f(x) \in P\_n$ i.e. $\left| R\_n \right| = n \left| P\_n \right|$. Therefore it is sufficient to count $R\_n$ to count $P\_n$. Building off the definition of $R\_n$:

<center>

$\begin{align}

R_n & = \\{ \alpha \in \mathbb{F}\_{q^n} \ \mid \ \exists f(x) \in P\_n \textrm{ s.t. } f(\alpha) = 0  \\} \\\
& = \\{ \alpha \in \mathbb{F}\_{q^n} \ \mid \ \left[ \mathbb{F}\_q(\alpha) : \mathbb{F}\_q \right] = n \\} \\\
& = \\{ \alpha \in \mathbb{F}\_{q^n} \ \mid \ \alpha \textrm{ not contained in any proper subfield of } \mathbb{F}\_{q^n} \\} \\\
& = \\{ \alpha \in \mathbb{F}\_{q^n} \ \mid \ \alpha \textrm{ not contained in any maximal proper subfield of } \mathbb{F}\_{q^n} \\} \\\

\end{align}$

</center>

The second equality comes from the degree of simple field extensions. The third is for degree reasons from the Tower Law. The fourth follows from $\mathbb{F}\_{q^n}/\mathbb{F}\_q$ having a finite number of subfields (or more generally from an application of Zorn's lemma that allows us to extend subfields to maximal ones; also, as [a result of the Primitive Element Theorem](https://proofwiki.org/wiki/Steinitz%27s_Theorem) or Fundamental Theorem of Galois Theory, a finite separable field extension can only have finitely many intermediate fields). Note the subfields of $\mathbb{F}\_{q^n}$ are $\mathbb{F}\_{q^k}$ such that $k \mid n$ (most quickly seen by the Fundamental Theorem of Galois Theory). So writing $n = p\_1^{e_1}p\_2^{e\_2}p\_3^{e\_3}\cdots p\_r^{e\_r}$ as its prime factorization, we find that the maximal subfields of $\mathbb{F}\_{q^n}$ are

<center>

$\displaystyle F\_{p\_1} = \mathbb{F}\_{q^{n/p\_1}} \ , \ \ F\_{p\_2} = \mathbb{F}\_{q^{n/p\_2}} \ , \ \ \cdots \ \ , \ \  F\_{p\_r} = \mathbb{F}\_{q^{n/p\_r}}$

</center>

Hence, by our final equivalence above, $\| R\_n \| = \left| \mathbb{F}\_{q^n} \setminus \left( F\_{p\_1} \cup F\_{p\_2} \cup \cdots \cup F\_{p\_r} \right) \right|$. Also, the lattice of subfields of $\mathbb{F}\_{q^n}$ correspond to the lattice of divisors of $n$ (again by the Fundamental Theorem of Galois Theory), so we get the intersections of fields as we would expect with $F\_{p\_i} \cap F\_{p\_j} = \mathbb{F}\_{q^{n/p\_i p\_j}}$ (and similarly for intersections of more than 2 fields). So using inclusion-exclusion counting,

<center>

$\begin{align}

\left| \bigcup\_{i=1}^r F\_{p\_i} \right| & = \left( \sum\_{i=1}^r \| F\_{p\_i} \| \right) - \left( \sum\_{1\leq i < j \leq r} \| F\_{p\_i} \cap F\_{p\_j} \| \right) + \cdots + (-1)^{r+1} \left| \bigcap\_{i=1}^r F\_{p\_i} \right| \\\
& = \left( \sum\_{i=1}^r q^\frac{n}{p\_i} \right) - \left( \sum\_{1 \leq i < j \leq r} q^\frac{n}{p\_i p\_j} \right) + \cdots + (-1)^{r+1} q^\frac{n}{p\_1 p\_2 \cdots p\_r}

\end{align}$

<!-- \| F\_{p\_1} \cup F\_{p\_2} \cup \cdots \cup F\_{p\_r} \| 

(-1)^{r+1} \left| F\_{p\_1} \cap F\_{p\_2} \cap \cdots \cap F\_{p\_r} \right|

\| F\_{p\_1} \| \cup \| F\_{p\_2} \| \cup \| \cdots \| \cup \| F\_{p\_r} \| -->


</center>

And so in particular,

<center>

$\displaystyle \|R\_n \| = q^n - \left( \sum\_{i=1}^r q^\frac{n}{p\_i} \right) + \left( \sum\_{1 \leq i < j \leq r} q^\frac{n}{p\_i p\_j} \right) - \cdots + (-1)^{r} q^\frac{n}{p\_1 p\_2 \cdots p\_r}$

</center>

So dividing by $n$ and applying the Möbius function (noting that $\mu(d) = 0$ for divisors for non square-free divisors), we have

<center>

$\displaystyle \|P\_n \| = \frac{1}{n} \sum\_{d \mid n} \mu(d) q^{n/d} = \frac{1}{n} \sum\_{d \mid n} \mu(n/d) q^{d}$

</center>

We get the last equality since as $d$ runs over all divisors of $n$, so does $n/d$. $\blacksquare$

**Corollary:** $\|P\_n\| \sim \frac{q^n}{n}$.

*Proof:* The dominant term in the expression is $q^n/n$, since the largest power of $q$ in the formula is at most $q^{n/2}$ since the smallest non-trivial divisor of $n$ is at least 2, and thus bound the remaining terms by $o(q^n/n)$. $\blacksquare$

## Conclusion

This post, while dense, has only scratched the surface of what primes and the Prime Number Theorem actually has to offer. From other bounds in combinatorics and analysis, to important computational heuristics in cryptography, primes, while random, find their ways into many facets of math. There's always more to revisit, but that's all for another day.


<!-- give cool corollary of Bertrand's
generalizations with Sylvester's thm: https://www.renyi.hu/~p_erdos/1934-01.pdf
maybe talk a bit about Chebyshev's proof of Bertrand's postulate to get initial estimates on PNT
show later PNT gives better bounds: always a prime between n and (1+epsilon)n 
PNT shows there are roughly n/log n primes between n and 2n -->



<!-- simple patterns -->
<!-- show cartesian products of N is countable -->
<!-- encoding all the numbers via prime products -> i.e. riemann zeta function -->
   <!-- maybe euler proof of infinite primes -->


<!-- 

* euclid's lemma:
  * basically shows irreducible -> prime -> Z is a UFD
  * in general ring theory, easier to show irreducible <-> prime assuming UFD

* infinitude of primes
* euπ¸clid's lemma
* fundamental theorem of arithmetic
  * elaborate a bit on ring theory and abstract algebra
  * the integers are a UFD, but not Z[√-5]
  * let's us talk about objects with unique decomposition (show Riemann zeta function decomposition)
    * maybe introduce Euler's proof of infinite primes to bring in Riemann zeta function
  * this fundamental encoding shapes a lot (gives proof of N is countable, Gödel's thms, etc)
    * extends naturally to rationals
* build a bit more on relevance of primes and modern results that are easier to understand breaking things down into smaller parts
  * i.e. group theory results, chinese remainder theorem, structure theorem, lagrange's theorem (useful since if we know prime divisors, can infer more probably), characteristic of a field is prime
* Even though the primes look random, we can say a lot about them still
  * simple results: p = 6k ± 1, 24 | p^2 - 1, goldbach's conjecture, idk find more, mersenne primes and perfect numbers, we even have a formula for them
  * there's a dedicated search to finding the next largest prime number (maybe give current record)
    * maybe talk about types of primes (mersenee, fermat, probable, etc)
* Finding Primes and Primality Tests
* We have facts about how the primes are distributed too
* Bertrand's postulate
  * not obvious always: Legendre's conjecture
* Dirichlet's theorem on arithmetic progressions
  * Green-Tao thm: there exist arbitrarily long arithmetic progressions in the primes
  * Extension -> too hard
* Prime number theorem
  * seems hard to think about
  * introduce sieves for some intuition
 -->
