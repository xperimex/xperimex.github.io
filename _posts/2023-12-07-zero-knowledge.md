---START_METADATA---
{
  "title": "Privacy Protection and Zero-Knowledge Proofs",
  "author": "Adi Mittal",
  "summary": "Your password is probably protected perfectly, but it's good enough.",
  "tags":[
    "me"
  ]
}


---END_METADATA---


Proofs, to me, are the cornerstones of all science. What separates math, physics, chemistry, and all other fields of science is the level of rigor we expect for professionals to conduct themselves. We don't take anything for fact until we are convinced irrefutably to call it so. We can conjecture all we want, but it only holds so much sway until we can use it as a definitively true claim. Mathematics is even more strict in how it's a purely deductive field, where the notion of a proof accepts nothing but a direct chain of deductive, causal reasoning. Sure, even in math sometimes we use empirical data to guide our judgements, but ["proof by lack of a counterexample" isn't all that helpful](https://math.stackexchange.com/questions/514/conjectures-that-have-been-disproved-with-extremely-large-counterexamples).

But in the day-to-day, we rarely care for such rigor. If the weather man says it's going to rain today, I'm inclined to believe it since he's _mostly_ been right before, and that's good enough for me. "Proof", to most people, usually just refers to any kind of persuasive evidence, as opposed to air-tight arguments. You want to be _convinced_ with proof—nothing more, nothing less. If someone tells me they're a Michelin star chef, I won't need to see the certificate, but rather I'll probably be convinced if they even make one meal for me up to that standard.

Indirect proof to validate something, like with the case of the Michelin star chef, is what we usually rely on. We can't always provide hard evidence all the time, so convincing others with a demonstration of sorts is a nice alternative. But sometimes, it is the _only_ option. If you had to prove citizenship to a country, sending over all your legal documents in one package, to one person, seems like a risky idea. If that package is lost or intercepted, your identity is gone. Or perhaps you are voting in an election, and want to prove that you did in fact vote. But ideally you could do that without having to disclose exactly who you voted for.

In these higher-stake situations with more sensitive information, any type of "direct" proof is a bit of a terrifying idea, for if something goes wrong between you and who you are interacting with, the consequences can be devastating. We want some way to prove something, without necessarily having to reveal any information about the proof claim. 

## Zero-Knowledge Proofs

Think about what we are asking for a second. We want to prove something to someone, without giving any particular facts; we want to endow someone with new information, necesssarily without giving any new information. 

These **zero-knowledge proofs (ZKPs)** that validate a claim without imparting new knowledge sounds like an impossible feat. If someone has access to all the information already, and can't come to the conclusion themself, then how will they ever come to agree with the claim? Remarkably, there are strategies to create such a proof. An example does best here.

### The Colorblind Man

Say your friend is extremely red-green colorblind. You give them two balls, one red and one green. Besides their color, they are completely identical (size, weight, mass distribution, etc.) to each other. To your friend, the balls do in fact look identical (due to the colors), but you want to prove to them they are truly not. Here's how you do it:

1. Hand them a ball in each hand.
2. Tell them to put it behind their back and choose to either swap the balls or leave them in the same hands.
3. Have them reveal to the balls to you and ask if he swapped them or not.

You, who's not colorblind, can answer him no problem. Getting it right once may be a fluke, but the more times you get it right, the more confident your friend should become that there <i>is</i> something differentiating the balls, even if he can't see it. If you're friend thinks you're only guessing randomly, even just getting it right 10 times in a row has probability $(\frac{1}{2})^{10} = 0.00098$, or a less than .1% chance of happening. You can keep repeating the test as long as your friend wants, but soon enough, he'll have to accept that you aren't just guessing, but rather seeing something he cannot.

In this, clearly we didn't change our friend's perception in anyway—he's still colorblind. Moreover, we didn't do any additional tests, like using an RBG monitor to digitally record values for your friend to read. Yet, we were able to convince them with a probabilistic guarantee that he is lacking information, even if we can't give him that information directly. In essence, nothing was changed of the scenario—no new knowledge was given—yet we were still able to prove to the colorblind friend that he in fact holding two differently colored balls, even if he can't verify that directly. 

### Inequitable Income

You recently joined a small company—no more than 5 people including yourself—and have recently begun to feel unvalued. You think you might be paid less than average, and you bring this up to the others. They try to explain to you that you are being paid fairly, despite the amount of work you put in. They seem confident enough, but they won't tell you their salary. How can you prove to them that you are paid less than average, without getting the data from your colleagues?

Let's say you, as person $A$, have a monthly salary of $ \$ a$, and the other four have salaries of $ \$ b, \$ c, \$ d, \$ e $. Now this is what we do:

1. You give a random, placeholder number $x$.
2. Then person $B$ computes the sum $x + b$, and tells person $C$ this value.
3. Person $C$ then adds their own salary to the sum to get $x + b + c$, and tells $D$ this number
4. People $D$ and $E$ do the same thing, until $E$ tells you the final number $x + b + c + d + e$.
5. Finally, since you know the value $x$, you can subtract it and recompute the value of $a + b + c + d + e$
6. You can then announce the average to the group $\large{\frac{a + b + c + d + e}{5}}$

Then, without any other individual having to know any other person's salary, can confidently agree that this is the group average, and enjoy the ensuing chaos of wealth mismanagement. This all works because of the value $x$: no one except you knows the value, so at each step, no other person will have enough information to deduce others' salaries from just their own. So without the need for any specific piece of new information, we are still able to deduce averages from a set of secret numbers.


--------------------

These last two examples, particularly the former with the colorblind man, encapsulates the idea of zero-knowledge proofs. You, and possibly other parties, have secret information you want (or have) to keep secret, and somehow manipulate whatever knowledge you already have to deduce something meaningful. Even after I saw these two examples, it still was a surprising fact to me that not only such an concept exists, but also has super practical applications.

But we haven't actually specified _exactly_ what makes a zero-knowledge proof, well, zero-knowledge. If we (the **prover**) are trying to prove some statement to a **verifier** with a ZKP, there are 3 properties we'd want to satisfy:

1. **Completeness:** if the statement is true, then an honest verifier will be convinced of it by an honest prover
  * This ensures we _can_ prove the statement
2. **Soundness:** if the statement is false, then there is no proof that can convince the verifier (up to some small probability)
  * This ensures our proof method is trustworthy
3. **Zero-Knowledge:** if the statement is true, then no verifier learns anything _except_ that the statement is true
  * This protects our secret

<!-- So if we have a secret $x$, and a claim it satisfies $P(x)$, we want to convince the other person of just $P(x)$ without revealing $x$. -->

The first two qualities are that of a general **interactive proof system**, which is a type of proof that relies on a conversation-esque exchange between the prover and verifier (like in the colorblindness example). These interactive proofs follow a **protocol** that dictates the flow of conversation, and in the context of our qualities, someone is honest when they legitimately follow this protocol in good faith.

Let's do a more practical example. 

## The Discrete Logarithm Problem

You and your friends set-up your own little secret network to talk to each other privately. To make sure no one else can spy on you guys, you implement a password system: everyone picks a username that consists of 3 numbers, two integers $A$ and $B$ as well as a (usually large) prime $p$. Your password $x$ will be a number such that $B = A^{x} \bmod p$. Obviously, if you wanted to log-in, you could just give your password everytime, but that puts you at risk for eavesdroppers or anyone listening in. Ideally, we want to be able to prove to our network that we do actually know our password, _without having to give the password_. This way, if anyone wants to break into our account, they would have to brute force it, [which isn't the best use of one's time](https://sebastiaagramunt.medium.com/discrete-logarithm-problem-and-diffie-hellman-key-exchange-821a45202d26). 

One issue, for example, is that you could have multiple solutions to a modular arithmetic problem. The equation $13 = 3^x \bmod 17$. You can check that $x = 4$ is a solution. But, due to [Fermat's little theorem](https://en.wikipedia.org/wiki/Fermat%27s_little_theorem), we also know that $1 = 3^{16} \bmod 17$. Then for any integer $k$, we know that 

<center>
$3^{4 + 16k} \bmod 17 = 3^4 \cdot (3^{16})^k \bmod 17 = 13 \cdot 1^k \bmod 17 = 13 \bmod 17$
</center>

so even if you have a solution, it doesn't necessarily mean you found the particular solution that is our password.

Finding $x$ given $A,B,p$ is known as the **discrete logarithm problem**, and due to the difficulty of brute forcing, can actually be used as a method of identification (like a password). An additional thing to note, to maximize the search space for people brute forcing your $x$ value, we choose $A$ to be a **generator**, meaning that for every value $m = 1,2,\cdots,p-1$, there is a value $n$ such that $m = A^{n} \bmod p$. You tell everyone your $A,B,p$, and no one but you ever has to know your $x$. But you can still confidently prove to people that you do know it, and that you are in fact _actually you_. 

After we (the prover) have distributed our values of $A,B,p$ (to any potential verifier) such that $B = A^x \bmod p$, this will be our protocol:

<!-- 1. The prover picks a random number $r$ and calculates the value $C = A^r \bmod p$
2. The verifier now executes one of the following randomly:
  * They ask the prover for the value of $r$
  * They ask the prover for the value of $(x + r)$
3. The verifier now checks they get the expected value.
  * If they asked for $r$, they check that indeed $A^r \bmod p = C$
  * If they asked for $(x + r)$, they check that they get 
<center>
$A^{(x + r)} \bmod p = A^{x} \cdot A^{r} \bmod p = B \cdot C$
</center>
4. Verifier repeats steps 1–3 until they are satisfied.
 -->
<!-- any instance of (x+r) mod (p-1) in other notes is due to the order of the group; g^{x} = g^{x mod p-1} since it is an element that generates the whole group i.e. it is an element of order p-1 -->

1. The prover picks a random number $r$ and calculates the value $C = A^r \bmod p$
2. The verifier now flips a coin. If the coin is heads they give the prover $c = 0$, and if tails $c=1$.
3. The prover sends the verifier the value of $cx + r$
3. The verifier now checks they get the expected value:
<center>
$A^{(cx + r)} \bmod p = (A^{x})^c \cdot A^{r} \bmod p = B^c \cdot C$
</center>
4. Verifier repeats steps 1–3 until they are satisfied.

We see parts of our previous ZKPs appear here: 1) we let the verifier do a random action to test the prover's knowledge just like in the colorblind friend example, and 2) we do a pseudo-encryption of our password $x$ by adding a random number $r$ to obscure it in a sum.

Now we want to verify this acutally _works_, both as a password-method and a zero-knowledge proof.

So say someone was trying to hack into our account. If they knew what our verifier was going to give for $c$, then theoretically they could cheat their way into our account. There are two possibilities they could guess, being the value of $c$: 

* $c=0$. Then the attacker just pick a random value $r$ and the verification process works as normal.
* $c=1$. Then the attacker pick a random value $r'$ and instead of giving the value $C$ that the verifier requests, they instead give the value $C{'} = (A^{r{'}} \bmod p) \cdot B^{-1}$. Then when the verifier wants the value $x+r$, the attacker instead gives $r'$, so that 
<center>
$A^{r'} \bmod p = (A^{r'} \bmod p) \cdot B^{-1} \cdot B = C' \cdot B$
</center>
which would be match the swapped values the verifier would expect.

But, if the attacker is wrong, because of how difficult it is to compute the discrete logarithm, they would not be able to reverse any of the new values they need with the value of $c$ they did not expect. So someone who doesn't know the password $x$ would have a 50% chance of passing the test, so the verifier just does this enough times until they are convinced. So at the very least, this does work as an effective identity/password check. So, also, this shows our proof is both **sound** and **complete**: if we don't, then it's near impossible for someone to cheat, and if we do know our password, a verifier should be convinced eventually.

This proof is also **zero-knowledge** since, well, we only worked with the public information. You can imagine building a simulator—like a computer—that can mimic exchanges between a prover and verifier (as if following the procedure of an attacker in our proofs of soundness and completeness) that operates entirely on its own. And I don't know about you, but a computer program is only working with what it's given, so if this interactive proof works within the confines of a computer, no new information is ever given.

<center>
$\blacksquare$
</center>

While this is a good proof of concept, it does require a lot of work in practice. If you want to try and wrap your head around these types of proofs before moving on, here's another simple one about [proving knowledge of a vector](https://decentralizedthoughts.github.io/2020-12-08-a-simple-and-succinct-zero-knowledge-proof/). It's an interactive proof with a focus on succinctness, and I found it to be quite helpful to think about some of the related concepts in cryptography and zero-knowledge proofs. The important concept to take away from this article and our above example with the discrete logarithm, randomness is an extremely useful way to instantly bound the error of our proofs; we don't need the proof to be 100% confident, we just need it to be confident _enough_ such that the prover can't cheat if they tried.


# Non-Interactive Zero-Knowledge Proofs

Before, in the example with the discrete logarithm problem and the colorblind man, we had this verifier act as an arbiter: they make a random decision that should prevent hacks (i.e. swapping the balls, sending $c=0$ or $c=1$), and after some arbitrary number of successes, they accept that the prover is genuine. Now imagine that _you_ are the verifier, or are implementing this. Do you really want to sit through doing the _same_ test over and over again, until you feel convinced? Do you really want to have to rely on some random mechanism every time that you carry out? Even if you make a computer to do this for you, imagine how annoying that must be to work with every time you want to log in with a password. Seems like a pain.

What we would ideally use is a **non-interactive** protocol: something that removes our need to have to always make a random choice and carry it out until some subjective level of confidence. But again, we don't want to compromise on zero-knowledge; we like our privacy. Fortunately, others' have come to the same issues and have come up with **zero-knowledge succinct non-interactive arguments for knowledge (zk-SNARKs)** to solve many of our qualms. To keep it clear, let's go over exactly what each part of this obscenely long name actually means:

* _zero-knowledge_: this is the same as before; we leak no new information and only prove that we know a claim is true without divulging anything specific about it.
* _succinct_: our proof takes a **constant amount of space**, i.e. the proof takes the same amount of time every time you go through it; we don't need to do the protocol until we are (subjectively) confident as we did with the previous proofs.
* _non-interactive_: our verifier doesn't give any intermediate input, i.e. no need to decide swapping balls or picking $c=0$ or $c=1$.

So here's a super simple zk-SNARK:

-----------------

**Claim:** I want to prove to my friend that two entrances to a building are connected.

**Proof:** All I need to do is have my friend watch from outside that I can in fact enter the one door and exit the other. 

* This is zero-knowledge since all my friend gets is knowledge that my claim was true and nothing more; they don't actually get to see how they are connected or anything more about the buliding. 
* It's succinct since I only need to do it once, since there is no room for doubt once I've shown it once (how do you prove something like this by a fluke?). 
* Finally, it's non-interactive since my friend doesn't need to actually do anything but observe.

-----------------

That's the idea of zk-SNARK, at least. We'll build up to a pretty surprising zk-SNARK by the end of this, but to get there, we'll have to cover some more ground.

Now the remainder of this post will be pretty mathematically heavy in the worst way possible. The ideas are important and useful, and the overarching concept of a zero-knowledge proof is extremely interesting, but the mechanics behind them are fairly tedious—and that's just how it goes sometimes with cryptography. To ensure security, often times the best (and first thought about) ideas are to obscure the data with as many impossibly hard operations to undo. The notation might get dense, but hopefully we build up to it in a comprehensible manner.


## Honesty Checks

Our discrete logarithm example, while not only gave us a nice demonstration of zero-knowledge proofs, they also now have given us an additional encryption method. The entire problem hinged on the fact that calculating discrete logarithms **are hard** to begin with. So we can use exponents, actually, to hide and encrypt lots of other pieces of data. And moreoever, can act as a safeguard to make sure no one is cheating us.

<!-- For example, say we're working with some protocol where the verifier is testing our knowledge of something, say, a polynomial. One way to do that, is by picking a random number, and having us plug that into our polynomial, and giving it back to them. So let's say they pick a random number $s$, they can force us (the prover) to use $s$ by exponentiating it and picking an additional **encryption shift** $\alpha$. Then -->

For example, say we're a verifier, and want to make sure that our prover follows the protocol of multiplying a number we give them. They can multiply whatever they want, but they have to multiply the number we give them. We can force this with exponents because the discrete logarithm is hard. 

1. The verifier picks a generator $g$ (like from the discrete logarithm), our secret number $s$, and our **encrypted shift** $\alpha$.
2. the verifier gives the prover the values $g^s$ and $g^{\alpha \cdot s}$.
3. The prover with some number $c$, then gives back the values $(g^s)^c = g^{cs}$ and $(g^{\alpha \cdot s})^c = g^{c\alpha s}$.
4. The verifier checks that $(g^{cs})^\alpha = g^{c\alpha s}$.

Because of how hard it is to cheat this system by finding another exponent to get equal values that the verifier would expect, the prover is forced to use the encrypted value of $g^s$, and the shift of $g^{\alpha \cdot s}$ gives us insurance to check the prover's honesty at the end. And in the same way the prover doesn't learn the values of $s$ or $\alpha$, we don't learn the value of $c$ they want to multiply by. We only checked that they were honest.

## Polynomial Knowledge

Now the reason why that's important, is that exponents give us all the methods we need to check more complicated values, like that of **polynomials**. The question we'll aim to answer is:

<center>
**Can we prove to a verifier we know a polynomial $p(x)$ of degree $d$ has roots at $r_1, r_2, \cdots, r_n$ without revealing our polynomial?**
</center>

In other words, can we prove to a verifier that for some polynomial $h(x)$, we know that $p(x) = (x-r_1)(x-r_2)\cdots (x-r_n)\cdot h(x)$? For brevity and convenience, we'll call the **target polynomial** $t(x) = (x-r_1)(x-r_2)\cdots (x-r_n)$.

----------------

The reason why polynomials are interesting is because they are incredibly hard to cheat. Say the prover has a polynomial $f(x)$, and claims to know the _exact_ polynomial that the verifier has $g(x)$, that is the prover claims $f(x) \equiv g(x)$. If both polynomials are of degree $d$, then either $f(x)=g(x)$ has $d$ solutions by the Fundamental Theorem of Algebra, or has infinite solutions if and only if $f(x) \equiv g(x)$. So if the verifier picks a random value $s$ for the prover to evaluate, it is extremely unlikely that $f(s) = g(s)$ if they are not genuinely the same. If the prover does not know $g(x)$ and just guessed a random polynomial $f(x)$, if the verifier pick a random integer from the range $s \in [1,10000]$, there is _at most_ a $\frac{d}{10000}$ chance that $f(s) = g(s)$.

----------------

### First Attempt

Here's a naive way to prove to a verifier they know such a polynomial:


**Protocol Attempt 1:**
1. The verifier picks a random number $s$ and gives this to the prover along with $t(s)$.
2. The prover calculates $h(s) = \frac{p(s)}{t(s)}$ and passes that along to the verifier with $p(s)$.
3. The verifier checks that $h(s) \cdot t(s) = p(s)$.

<!-- The idea is that polynomials can only share a finite number of points if they are not identical. That's because for two polynomials $f(x),g(x)$ of degree $d$, $f(x) = g(x)$ must either have less than $d$ solutions or infinite solutions. That's because $f(x)-g(x)$ is at most a polynomial of degree $d$, and by the Fundamental Theorem of Algebra, $f(x)-g(x) = 0$ can have at most $d$ solutions, unless $f(x) \equiv g(x)$. So if our prover does not have a polynomial  -->

This, though, has the issues of:

* The prover can just pick an arbitrary number $h$ and calculate $p = h \cdot t(s)$ and that will satisfy the verifier.
* Since we give the prover access to the number $s$, the prover can just make a new polynomial that happens to have the value of $p(s) = t(s) \cdot h$.
* There's no verification of the degree of the polynomial.

The first two issues are purely because we don't encrypt anything; we just give the values of $s$ and $t(s)$. We need a way to obscure them so that computations with them are still feasible, but the prover can't use them to cheat the protocol. 

### Homomorphic Encryption

The way we can do this is in line with our honesty checks and the discrete logarithm, and exploiting the properties of exponents. Say our polynomial was a quadratic $f(x) = x^2 - 3x + 2$. We can encrypt $f(x)$ the same way we have been doing before by using a generator $g$ taken modulo $n$ (ideally a prime):

<center>
$g^{f(x)} \bmod n = g^{x^2 - 3x + 2} \bmod n = (g^{x^2})^1 \cdot (g^x)^{-3} \cdot (g^0)^2 \bmod n$
</center>

This type of encryption is known as **homomorphic encryption**, as our encryption method has a nice structure to it that allows us to do our arithmetic operations on them without having to decrypt it. In particular, if we let $E(s) = g^s \bmod n$ be our encryption as we have been, the structure we get is that $E(n + m) = E(n) \cdot E(m)$ by exponent rules.

---------------

One issue, though, is that we _cannot_ multiply two encrypted values together with this homomorphic encryption scheme. If you have two numbers $a,b$ that have been encrypted as $E(a) = g^a$ and $E(b) = g^b$, we can easily find $E(a + b) = E(a)E(b)$ as we stated above. But only given $E(a), E(b)$, you cannot find an expression for $E(ab)$. Similarly, we also can't find an expression for $E(a^b)$. We'll address this later.

---------------

As we've discussed, reverse engineering an exponent modulo a number is especially hard because of how the modulo operation cycles, leaving room for many options to satisfy the equation and thus making finding a specific solution hard. So we can update our protocol:

**Protocol Attempt 2:**
1. The verifier picks a random number $s$, and sends encrypted powers of $s$ to the prover $\\{g^{s^0}, g^{s^1}, g^{s^2}, \cdots, g^{s^d}\\}$.
2. The prover calculates $h(x) = \frac{p(x)}{t(x)}$. With the encrypted values, they calculate and send to the verifier $g^{p(s)}$ and $g^{h(s)}$.
  * i.e. $g^{p(s)} = g^{c_d s^d + \cdots c_1 s^1 + c_0 s^0} = (g^{s^d})^{c_d} \cdots (g^{s^1})^{c_1} \cdot (g^{s^0})^{c_0}$ for the coefficients $c_d, \cdots, c_0$
3. The verifier checks that $g^{p(s)} = (g^{h(s)})^{t(s)} = g^{h(s) \cdot t(s)}$.

Although I've left it out for convenience, remember that all these encrypted values $g^x$ are taken to mean $g^x \bmod n$. It's the discrete logarithm that is difficult, not the normal logarithm.

So by encrypting $s$ and just not giving the value of $t(s)$, we've fixed our issues, right? 

----------------

The first two are in fact fixed, but we still need a way to enforce the degree requirement. In a way, we already do have a type of restriction since the verifier only gives the prover powers of $s$ encrypted with $\\{g^{s^0}, g^{s^1}, g^{s^2}, \cdots, g^{s^d}\\}$. But this restriction is only in place if the prover uses these and only these values. There's nothing stopping the prover from just not using those encrypted values of $s$, and using their own constructed numbers to cheat. Here's a more concrete way of seeing this:

What the verifier wants at the end of the day is for the equation $g^{p(s)} = (g^{h(s)})^{t(s)}$ to hold, and is trusting that $g^{p(s)}$ and $g^{h(s)}$ are provided truthfully by the prover. But if we have a prover that _does not know_ a polynomial, all they need to do to fool the verifier is to give values $z_p = g^{p(s)}$ and $z_h = g^{h(s)}$. In other words, the prover just needs to find a solution to $z_p = (z_h)^{t(s)}$. Which, unfortunately for our protocol, is quite easy.

* Let $z_h = g^r$ for some chosen random $r$ 
* Then we just need $z_p = (g^r)^{t(s)} = (g^{t(s)})^r$
* Since the target polynomial $t(x)$ is public, the prover can solve $g^{t(s)}$ with the given values $\\{g^{s^0}, g^{s^1}, g^{s^2}, \cdots, g^{s^d}\\}$
* So finding $z_p$ is done

So finding a solution is no harder than essentially picking a random number. We want some way to ensure that the prover uses and only uses the values the verifier gives them from $\\{g^{s^0}, g^{s^1}, g^{s^2}, \cdots, g^{s^d}\\}$ in finding their $z_p,z_h$. If we can do that, the only way they'll be able to calculate $z_p,z_h$ is probably with a polynomial they have.

----------------

Readily enough, we have done this with our honesty checks above: we provide some arbitrary shift $\alpha$ only the verifier knows, to make sure the prover didn't leave anything out or cheat.


**Protocol Attempt 3:**
1. The verifier picks random number $s$ and $\alpha$. They send the encrypted powers of $s$ and the shifts to the prover: $\\{g^{s^0}, g^{s^1}, g^{s^2}, \cdots, g^{s^d}\\}$ and $\\{g^{\alpha s^0}, g^{\alpha s^1}, g^{\alpha s^2}, \cdots, g^{\alpha s^d}\\}$.
2. The prover calculates $h(x) = \frac{p(x)}{t(x)}$. With the encrypted values, they calculate and send to the verifier $g^{p(s)}$, $g^{\alpha p(s)}$, and $g^{h(s)}$.
3. The verifier checks that $g^{p(s)} = (g^{h(s)})^{t(s)} = g^{h(s) \cdot t(s)}$, and that $(g^{p(s)})^\alpha = g^{\alpha p(s)}$.

The first check the verifier does is to see the values match like before, and the second check is to make sure there was no cheating and only the encrypted values of $s$ were used; the prover had to give a polynomial of degree $d$ and had to evaluate it at the $s$ the verifier gives them, as that is the only way to preserve the $\alpha$ shift. 

For example, if the prover claimed they knew a quadratic with $d=2$, they claim they have a polynomial looking like $p(x)=c_2x^2+c_1x^1 + c_0$. But if they were really trying to sneak in that they had a cubic or quartic or any polynomial of degree higher than 2, they would not be able to calculate the terms needing $x^3$ or $x^4$ since the encrypted and shifted values could not be calculated and thus preserved. But that is only true if the prover used values from $\\{g^{s^0},g^{s^1},g^{s^2}\\}$. Now by using the $\alpha$ shift, the prover has no choice but to use these values since any deviation from them will appear comparing to the $\alpha$ values.

Further, we can do more than just ensure the degree of the polynomial we're checking, but also which _specific powers_ are used in the polynomial. If, say, the polynomial was claimed to be a cubic, but only used powers $x^3$ and $x^1$, the verifier can choose to only send in the encrypted and shifted values of $s^3$ and $s^1$. If the prover needed the other powers to evaluate their polynomial, they would be stuck since they can only evaluate the terms with power 3 and 1.

### Making It Zero-Knowledge

So far, our protocol has gone under a few iterations—and to be fair it's actually pretty robust. But we kind of forgot about making it _zero-knowledge_. I mean, yes we've encrypted the data to prevent any cheating from the prover, but the verifier can theoretically use the values the prover gives to brute force their way to finding the polynomial since they are the ones that generate the secret values $s$ and $\alpha$ from the beginning. For example, ideally our protocol should be secure for even a 1-degree polynomial, and even brute forcing that is just a matter of iterating through a series of numbers.

This is easily enough done in the same way that we've been doing before: we have the prover introduce a random parameter $\delta$ that obscures the data. 

**Zero-Knowledge Protocol:**
1. The verifier picks random number $s$ and $\alpha$. They send the encrypted powers of $s$ and the shifts to the prover: $\\{g^{s^0}, g^{s^1}, g^{s^2}, \cdots, g^{s^d}\\}$ and $\\{g^{\alpha s^0}, g^{\alpha s^1}, g^{\alpha s^2}, \cdots, g^{\alpha s^d}\\}$.
2. The prover calculates $h(x) = \frac{p(x)}{t(x)}$. With the encrypted values, they calculate $g^{p(s)}$, $g^{\alpha p(s)}$, and $g^{h(s)}$. With a random number $\delta$, they send the verifier $(g^{p(s)})^\delta$, $(g^{\alpha p(s)})^\delta$, and $(g^{h(s)})^\delta$
3. The verifier checks that $(g^{p(s)})^\delta = ((g^{h(s)})^\delta)^{t(s)} = g^{\delta \cdot h(s) \cdot t(s)}$, and that $((g^{p(s)})^\delta)^\alpha = (g^{\alpha p(s)})^\delta$.


### Making it Non-Interactive

Our protocol is very similar to our discrete logarithm problem. I mean, we based it off of what we did there, only generalizing what we did with polynomials instead of specific numbers. So this doesn't really show us anything we haven't already seen before. We want to try and make it non-interactive so our verifier doesn't have to constantly monitor our verification. And more importantly, so our protocol is _trustworthy_: due to the nature of the interactive parts, verifiers could collude with provers, making each protocol use a one-time check. Even better would be if we could make it also succinct, and have each call of the protocol takes a consistent amount of time. 

One way we can remove the need for interactivity is by, well, replacing the interactive parts with some constant, reliable parameters to always use as oppose to the ones suggested by the verifier. In this case, the verifier has to pick a value $t(s_0)$ (since the target polynomial $t(x)$ is known, really we just need to fix an $s_0$) as well as a fixed shift $\alpha_0$. But we need these to be trustworthy, and unable to be leaked.

We could just try encrypting these values like before by exponenitating modulo $n$ like before with $g^{t(s_0)}$ and $g^{\alpha_0}$. But the problem is, we've also encrypted the other values like $p(s_0)$ and $h(s_0)$, and as we said, we can't multiply two encrypted values together, which is exactly what the checks the verifier needs at the end of the protocol; with our encryption, if we have $E(\alpha_0)$ and $E(p(s_0))$, we have no way of getting $E(\alpha_0 p(s_0))$.

There's one extra piece of machinery we'll need: **elliptic curves**. Elliptic curves are a class of implicit functions of the form $y^2 = x^3 + ax + b$ and their relation to the whole of cryptography is a bit too wide to encapsulate in this post, so perhaps we'll come back to them another day. The important thing about them though is that we can establish **cryptographic pairings** with these curves that can get around our multiplication issue.

A **cryptographic pairing** is a function $e(\cdot, \cdot)$ that take two encrypted numbers, and outputs the product of those two numbers in a different representation (i.e. outputs the product of the numbers encrypted in a new way). Because the output space is a different "encryption scheme" from before, it makes it irreversible, and a "one-time operation"; you can't use the output of $e(\cdot, \cdot)$ in another cryptographic pairing in a meaningful way. The key properties of this pairing are:

<center>
$e(g^a, g^b) = e(g^b, g^a) = e(g^{ab}, g^1) = e(g^a, g^1)^b = e(g^1, g^b)^a = e(g^1,g^1)^{ab}$
</center>

I know this is a _very rough_ sketch as to how we are overcoming the problem of multiplying encrypted values, but for the sake of brevity, we'll come back to it sometime later (if you can't wait, [check this out](https://eprint.iacr.org/2004/064.pdf)). The important idea to keep in mind is that we have a way of multiplying encrypted values of $t(s)$ and $\alpha$ in a useable way.

So now, to make our proof non-interactive, we fix our values $\alpha, t(s)$, and then encrypt them $g^\alpha, g^{t(s)}$. These values will be the ones used by every prover and verifier moving forward, and to carry out our operations, we will use our cryptographic pairing function, which we'll see below.

----------------

Also, as an aside, we no longer need multiplicative group generators like we have used before. $g^n$ can now mean adding the _generator of the elliptic curve_ $g$ to itself $n$ times. It's essentially the same (and acts the same for our purposes), but removes an extra component from our process.

### The Final Protocol

We are now ready to put together our final protocol for knowledge of a polynomial of degree $d$ with the same roots as $t(x)$. The keys below are the necessary elements each party needs on their side of the proof beforehand. 

<!-- As before, encrypted values $g^x$ are taken to mean $g^x \bmod n$. -->

**Set-Up:**
* Fix random values $s$ and $\alpha$
* Establish a cryptographic pairing $e(\cdot,\cdot)$ and a generator $g$
* Find encryptions $g^\alpha$, $\\{g^{s^0}, g^{s^1}, g^{s^2}, \cdots, g^{s^d}\\}$, $\\{g^{\alpha s^0}, g^{\alpha s^1}, g^{\alpha s^2}, \cdots, g^{\alpha s^d}\\}$ 

Now we distribute to the prover and verifier their respective information they are allowed to work with:

* Proof key: $\left(\\{g^{s^0}, g^{s^1}, g^{s^2}, \cdots, g^{s^d}\\}, \\{g^{\alpha s^0}, g^{\alpha s^1}, g^{\alpha s^2}, \cdots, g^{\alpha s^d}\\}\right)$
* Verification key: $(g^\alpha, g^{t(s)})$

**Proof:**
* Wants to prove knowledge of $p(x) = t(x) \cdot h(x) = c_d x^d + \cdots + c_0 x^0$
* Let $h(x) = \frac{p(x)}{t(x)}$
* Calculate $g^{p(s)}, g^{h(s)}$ using $\\{g^{s^0}, g^{s^1}, g^{s^2}, \cdots, g^{s^d}\\}$
* Calculate $g^{\alpha p(s)}$ using shifted values $\\{g^{\alpha s^0}, g^{\alpha s^1}, g^{\alpha s^2}, \cdots, g^{\alpha s^d}\\}$
* Pick a random shift $\delta$
* Send to the verifier our proof $\pi = \left(g^{\delta p(s)}, g^{\delta h(s)}, g^{\delta \alpha p(s)} \right)$

**Verification:**

* With $\pi = \left(g^{\delta p(s)}, g^{\delta h(s)}, g^{\delta \alpha p(s)} \right)$, we do our two checks for satisfiability and degree of the polynomial
* Does the polynomial work? Check that $e(g^{\delta p(s)}, g) = e(g^{t(s)}, g^{\delta h(s)})$
* Did the prover cheat? Check that $e(g^{\delta \alpha p(s)}, g) = e(g^{\alpha}, g^{\delta p(s)})$

And that's our protocol from start to finish. Without ever needing to reveal what $p(x)$, we can confirm with high probability that our prover's polynomial has the desired roots matching $t(x)$. We can add other requirements to the polynomial, like only including certain powers as we discussed, or others such as it must be a square polynomial.


# General zk-SNARKs

So far, we've spent roughly 6000 words talking about polynomials and homomorphic encryption, and that's with skipping explanations of elliptic curve cryptography thrown in there too. But in practice, when was the last time you saw someone work with a polynomial directly? If I had to think of when someone would want to prove knowledge of something in practice, it would probably be something less direct, like knowing the output of a program, or a secret input (like a password). Those don't seem related to polynomials at all. For example, if I had a computer program and a given output, I'd like to show I have the corresponding input without revealing that input.

But of course, in the weirdest ways, polynomials are the current backbone of zk-SNARKs. And unfortunately, like with elliptic curves from before, require an already huge amount of literature to even crack the surface of how they work. Ultimately, the idea is that given any program, we can make the problem of proving knowledge-of-input into a question of knowledge-of-polynomial. Here are the rough steps (as outlined in this more in-depth [post](https://medium.com/@VitalikButerin/quadratic-arithmetic-programs-from-zero-to-hero-f6d558cea649)):

1. **Computation:** The actual code for the program itself.
2. **Flattening:** We turn the code into a combination involving expression only involving $=+,-,\times,\div$. These arithmetic operations essentially correspond to different types of gates in a circuit. This is probably the hardest, least obvious step, and even now it is not clear to me what are the restrictions for programs that can be converted to these _arithmetic circuits_. I'd recommend reading [this](https://people.cs.georgetown.edu/jthaler/firstcircuitlecture.pdf).
3. **R1CS:** With the arithmetic circuit, we now convert it to a _rank-1 constraint system_. An R1CS is a set of groups of 3 vectors $(a,b,c)$, that has a solution $x$ such that $(a \cdot x) \times (b\cdot x) = c\cdot x$ where $\cdot$ is the standard dot product. Each group of these 3 vectors $(a,b,c)$ represents some kind of constraint on our solution. In our case, we will have a triple of vectors $(a,b,c)$ for each gate/operation we have in our arithmetic circuit. So if our arithmetic circuit has 4 steps in it, we'll have 4 triplets of vectors constraining our solution $x$ that it must all satisfy. The length of the vectors will be equivalent to the number of variables needed in the circuit. Here's an example conversion of [an arithmetic gate to R1CS constraint vectors](https://crypto.stackexchange.com/questions/55963/converting-to-rank-one-constraint-system-r1cs). 
4. **QAP:** We do yet another conversion from R1CS to a _quadratic arithmetic program_. The idea is to encode our vector constraints in polynomials. If, for example, we had 5 constraints with vectors of length 7, we would have 5 pairs of $(a,b,c)$ constraints where $a,b,c$ are all length 7 vectors. Then, we could encode these in 3 groups of 7 polynomials (in this case, they would be of degree $5-1=4$). Each polynomial represents a coordinate in the vector, and each group represents whether that vector is the $a$, $b$, or $c$ vector in the constraint. Since we have 5 constraints, we then retrieve our each constraint vector by plugging in $x=1,2,3,4,5$ to each polynomial and read off the values by group and coordinate. We can create these polynomials via [Lagrange interpolation](https://en.wikipedia.org/wiki/Lagrange_polynomial), or your favorite way to fit polynomials to specific values. This is why the degree of the polynomials are 1 less than the number of constraints: you need exactly $d+1$ points to determine a polynomial of degree $d$.

The point of putting our program into a QAP is that we can now do our R1CS verification a lot more compactly. Instead of checking all the dot products individually between our solution vector $x$ and the constraint vectors, we can dot product the solution once with our polynomials. Dot products are just combinations of addition and multiplication, so the result of $(x \cdot A(t)) \times (x \cdot B(t)) - x\cdot C(t) = F(t)$ will just be another polynomial in $t$. Our solution vector is genuine if $F(t) = 0$ for $t=1,2,3,4,5$ in our above example, since plugging in those values corresponds to checking a different R1CS constraint (that represents one of our arithmetic logic gates).

But now, we're mostly at the point in which our zk-SNARK protocol for polynomials is starting to look like a more useable tool for general programs. There are a few additional steps outlined in some of the links above, but the core idea is here, of encoding the computation of the program in a polynomial that we later can check the knowledge of via a zk-SNARK.

# Conclusion

There are a lot of uses that zero-knowledge proofs can find themselves in. Basically, whenever you want any level of privacy. From passwords, to graphs, to polynomials, or to [nuclear disarmament](https://www.nature.com/articles/ncomms12890). And its most popular use, blockchains and cryptocurrencies (good way of checking valid transactions without needing to reveal people's currency balances). The underlying theory of zero-knowledge proofs, though, is simultaneously easy to understand, and difficult to implement. The theory is rich, but dense, so pehaps one of these days we'll fill in the gaps of elliptic curves (which definitely deserves its own post) and fully fleshing out how we can convert computer programs to polynomials.


For more reading and types of proofs, here's a nice simple example for proving knowledge of coloring a graph that can be found [here](https://resources.mpi-inf.mpg.de/departments/d1/teaching/ss13/gitcs/lecture9.pdf) or [here](https://www.cs.cmu.edu/~goyal/s18/15503/scribe_notes/lecture23.pdf) (and a nice little [demo to go with it](https://web.mit.edu/~ezyang/Public/graph/svg.html#:~:text=Zero%2Dknowledge%20proofs%20permit%20you,the%20game%20as%20a%20verifier.)). Interestingly, as an aside, we can since reduce any NP problem to the 3-coloring problem, this actually gives us a way of generating zero-knowledge proofs for any NP hard problem.

For even more details on zk-SNARKs and zero-knowledge ideas on the whole, see [this article](https://arxiv.org/pdf/1906.07221.pdf%EF%BC%9B#:~:text=Zero%2Dknowledge%20succinct%20non%2Dinteractive,useful%20in%20the%20first%20place%3F) that informed much of this post.
