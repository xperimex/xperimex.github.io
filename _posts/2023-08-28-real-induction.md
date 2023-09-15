---START_METADATA---
{
  "title": "Your Induction to Induction",
  "author": "Adi Mittal",
  "summary": "Everything you need for discrete and continuous induction.",
  "tags":[
    "me"
  ]
}


---END_METADATA---

<script src='https://cdnjs.cloudflare.com/ajax/libs/g9/1.0.16/g9.js'></script>
<script src="https://unpkg.com/mathjs/lib/browser/math.js"></script>


I've been on a kick for mathematical foundations recently. Maybe it's all that [logic I've been looking at](http://xperimex.com/blog/compactness/). One of those key ideas that finds its way into math is the **Principle of Mathematical Induction**. It's likely even if you've only taken high school math classes, you've encountered induction in one way or another. The importance of induction stems all the way back to the all-important, characterizing Peano axioms of arithmetic. In fact, any formal system that can perform induction is a critical indicator of not just the strength, but flaws of the system, as induction is the "simplest" cause of a logical system being incomplete (as in [Gödel's incompleteness theorems](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems)).

# Principle of Mathematical Induction

The usual idea of induction is proof by "climbing a ladder", or "knocking over mathematical dominoes". Let's have $\Phi(n)$ stand for "the theorem $\Phi$ for the case of natural number $$n$$". Then if you can show that

* (PMI 1) $\Phi(0)$ is true
* (PMI 2) $\forall k \geq 0$, if $\Phi(k)$ is true, then $\Phi(k+1)$ is true

Then you can conclude that $\Phi(n)$ is true for all natural numbers $n \geq 0$. The idea is that in property (PMI 2), the theorem $\Phi$ is self-fulfilling; there is an inherent quality to our theorem $\Phi$ that has it proves many cases for itself. If we know $\Phi(0)$ is true, then by (PMI 2) we know $\Phi(1)$ is true. Similarly, from $\Phi(1)$ we then know $\Phi(2)$ is true, and then from $\Phi(2)$ we know $\Phi(3)$ and so on. We climb the mathematical ladder starting with a simple case $\Phi(0)$ we know for a fact is true.

This is best seen with an example. 

-----------------

We will show the formula for the sum of the first $n$ integers is $\sum_{k=1}^n k = \frac{n(n+1)}{2}$.

**Base Case (PMI 1):** The formula holds for $n=1$ since $\sum_{k=1}^1 k = 1 = \frac{1(1+1)}{2}$.

**Inductive Hypothesis (PMI 2):** Let's assume our formula works for the first $n$ integers. We want to show that it holds for case $n+1$: $\sum_{k=1}^{n+1} k = \frac{(n+1)(n+2)}{2}$. We will show this by first rewriting our sum: $\sum_{k=1}^{n+1} k = \sum_{k=1}^{n} k + (n+1)$. By our assumption, we can reduce this to $\frac{n(n+1)}{2} + n+1$. Simplifying further, 

<center>
$
\begin{align}
\frac{n(n+1)}{2} + n+1 & = \frac{n(n+1) + 2(n+1)}{2}
\newline
& = \frac{(n+1)(n+2)}{2}
\end{align}
$
</center>

Which is precisely the formula our hypothesis predicted. So by the PMI, for all $n$, $\sum_{k=1}^n k = \frac{n(n+1)}{2}$.

<center>
$\blacksquare$
</center>

-----------------

Here, we took a statement that can naturally be indexed by the natural numbers—in this case, a formula—and using the **method** of induction, proved our claim that the statement held. Note here that we didn't show $\Phi(0)$ is true, but rather $\Phi(1)$. This minor change isn't a big deal, since what we really want to show is a **base case** to build our inductive claim off of; we don't care where our ladder starts, so long as we can show there is _some_ ground for it to stand on.

Induction is a very strong tool, as it does can usually be applied to any claim that can be indexed by the integers; if there is a natural way to "count" the cases of your hypothesis, odds are induction could be useful.

However, note that induction didn't give us the arithmetic sum formula to begin with, but rather only a method to verify it. Some amount of intuition or case work needs to be done beforehand to get a hypothesis to follow through with induction.

Let's do a few more examples. Here's a simple one from set theory.

-----------------

**De Morgan's Laws:** For sets $A_1, A_2, \cdots, A_n$, we have

<center>
$(A_1 \cap A_2 \cap \cdots \cap A_n)^c = A_1^c \cup A_2^c \cup \cdots \cup A_n^c$
$(A_1 \cup A_2 \cup \cdots \cup A_n)^c = A_1^c \cap A_2^c \cap \cdots \cap A_n^c$
</center>

Just as a reminder, for sets $A$ and $B$,

* $A \cup B = \\{x \ | \ x \in A \textrm{ or } x \in B\\}$ 
* $A \cap B = \\{x \ | \ x \in A \textrm{ and } x \in B\\}$ 
* $A^c = \\{x \ | \ x \notin A\\}$

Notice how we're not working with integers directly, but rather integer amounts of sets. So, we'll then induct on the number of sets as our natural division of cases.

**Base Case:** We'll show this for $n = 2$. Let $x \in (A \cap B)^c$ be an arbitrary element. Then $x \notin A \cap B$, so we have either $x \notin A$ or $x \notin B$ by the rules for $\cap$. Equivalently, $x \in A^c$ or $x \in B^c$, so regardless of which set $x$ is in, it must be the case that $x \in A^c \cup B^c$. Hence, since every element of $(A \cap B)^c$ is an element of $A^c \cup B^c$, so $(A \cap B)^c \subseteq A^c \cup B^c$. To summarize,

<center>
$\begin{array}{ccc|cc}
& x \in (A \cap B)^c & & & \textrm{Assumption} \\
\newline
& x \notin A \cap B & & & \textrm{Definition of set complement} \\
\newline
& x \notin A \textrm{ or } x \notin B & & & \textrm{Rules for } \cap \\
\newline
& x \in A^c \textrm{ or } x \in B^c & & & \textrm{Definition of set complement} \\
\newline
& x \in A^c \cup B^c & & & \textrm{Rules for } \cup \\
\newline \hline
\therefore & (A \cap B)^c \subseteq A^c \cup B^c & & & \textrm{Definition of subset}
\end{array}$
</center>

Going the other way, suppose we have an arbitrary element $x \in A^c \cup B^c$. For the sake of contradiction, assume $x \notin (A \cap B)^c$. The rest of the proof is very similar to above.

<center>
$\begin{array}{ccc|cc}
& x \in A^c \cup B^c & & & \textrm{Assumption} \\
\newline
& x \notin (A \cap B)^c & & & \textrm{Assumption} \\
\newline
& x \in A \cap B & & & \textrm{Definition of set complement} \\
\newline
& x \in A \textrm{ and } x \in B & & & \textrm{Rules for } \cap \\
\newline
& x \notin A^c \textrm{ and } x \notin B^c & & & \textrm{Definition of set complement} \\
\newline
& x \notin A^c \cup B^c & & & \textrm{Rules for } \cup \\
\newline
& x \in (A \cap B)^c & & & \textrm{Proof by contradiction} \\
\newline \hline
\therefore & A^c \cup B^c \subseteq (A \cap B)^c & & & \textrm{Definition of subset}
\end{array}$
</center>

The only way to sets can both be subsets of each other is if there equal to each other. So by **double containment**, $(A \cap B)^c = A^c \cup B^c$.

**Inductive Hypothesis:** Let's assume our formula works for some number of $n$ sets. We want to show this works for $n+1$ sets. Fortunately most of our work was already done in the base case.

<center>
$
\begin{align}
(A_1 \cap \cdots \cap A_n \cap A_{n+1})^c = ((A_1 \cap \cdots \cap A_n) \cap A_{n+1})^c & = (A_1 \cap \cdots \cap A_n)^c \cup A_{n+1}^c \\\
& = A_1^c \cup \cdots \cup A_n^c \cup A_{n+1}^c
\end{align}
$
</center>

Since $(A_1 \cap \cdots \cap A_n)$ is just another set, we can first use the case for 2 sets in the 2nd equality, and the case for $n$ sets in the last equality.

The proof for the second of De Morgan's Law is proved almost identically. 

<center>
$\blacksquare$
</center>

------------------

Let's pull one final example from linear algebra.

------------------

**Claim:** Let $A$ be a square matrix. The eigenvectors of distinct eigenvalues of $A$ are linearly independent. 

As a reminder:

* An **eigenvector** is a non-zero vector $\textbf{v}$ with corresponding **eigenvalue** $\lambda$ of matrix $A$ such that $A \textbf{v} = \lambda v$
* We call  set of vectors $\\{\textbf{v}_1, \cdots, \textbf{v}_k \\}$ **linearly independent** when $a_1 \textbf{v}_1 + \cdots + a_k \textbf{v}_k = 0$ if and only if $a_1 = a_2 = \cdots = a_k = 0$ for scalars $a_1, \cdots, a_k$

We'll induct on the number of eigenvectors.

**Base Case:** For one eigenvector, it's clearly true, as $\textbf{v}_1 \neq 0$ by definition. So $a_1 \textbf{v}_1 = 0$ if and only if $a_1 = 0$.

**Inductive Hypothesis:** Now suppose that the claim is true for fewer than $n$ eigenvectors of distinct eigenvalues. So suppose that

<center>
$a_1 \textbf{v}_1 + a_2 \textbf{v}_2 + \cdots + a_n \textbf{v}_n = 0 \ \ \ \ (*)$
</center>

We want to show $a_1 = a_2 = \cdots = a_n = 0$. Let's apply $A$ to both sides of $(*)$:

<center>
$\begin{align}
A(a_1 \textbf{v}_1 + a_2 \textbf{v}_2 + \cdots + a_n \textbf{v}_n) & = A(0) \\\
a_1 \lambda_1 \textbf{v}_1 + a_2 \lambda_2 \textbf{v}_2 + \cdots + a_n \lambda_n \textbf{v}_n & = 0 \ \ \ \ (1)
\end{align}$
</center>

where each $\lambda_i$ are the associated eigenvalues. Now let's also multiply $(*)$ by $\lambda_1$:

<center>
$a_1 \lambda_1 \textbf{v}_1 + a_2 \lambda_1 \textbf{v}_2 + \cdots + a_n \lambda_1 \textbf{v}_n = 0 \ \ \ \ (2)$
</center>

Now let's subtract equation (2) from (1).

<center>
$
\begin{array}{ccccccccc}
  & a_1 \lambda_1 \textbf{v}_1 & + & a_2 \lambda_2 \textbf{v}_2 & + & \cdots & + & a_n \lambda_n \textbf{v}_n & = 0 \\\ 
- & a_1 \lambda_1 \textbf{v}_1 & + & a_2 \lambda_1 \textbf{v}_2 & + & \cdots & + & a_n \lambda_1 \textbf{v}_n & = 0 \\\ \hline
  & & & a_2(\lambda_2 - \lambda_1)\textbf{v}_2 & + & \cdots & + & a_n(\lambda_n - \lambda_1)\textbf{v}_n & = 0 
\end{array}
$
</center>

By the inductive hypothesis, we know the $n-1$ eigenvectors $\textbf{v}_2,\textbf{v}_3,\cdots,\textbf{v}_n$ are linearly independent, so all the coefficients $a_i(\lambda_i - \lambda_1) = 0$. But also remember, each $\lambda_i$ are distinct eigenvalues, so $\lambda_i - \lambda_1 \neq 0$ for $i=2,\cdots,n$. So the only way $a_i(\lambda_i - \lambda_1) = 0$ is if $a_i = 0$ for $i = 2,\cdots, n$. Plugging this back into $(*)$, we get that $a_1 \textbf{v}_1 = 0$, and since $\textbf{v}_1 \neq 0$, it must be that $a_1 = 0$. 

Thus, all coefficients $a_1 = a_2 = \cdots = a_n = 0$, so the eigenvectors are linearly independent, having proven the inductive hypothesis.

<center>
$\blacksquare$
</center>


## Choosing a Base Case

In our formulation of induction, we said in particular:

* (PMI 1) $\Phi(0)$ is true

We specified our base case to be $n=0$. But if you look at our example proofs, we used $n=1$ and $n=2$ as base cases sometimes, such as in the proof of De Morgan's Laws. Usually the base case doesn't matter, as induction would just say that for a base case $k$, a claim holds for all $n \geq k$. But we have to be careful of our choice of base case. For example, here's a _false_ inductive proof.

**Claim:** All horses are the same color.

**Base Case:** For $n=1$, obviously a horse is the same color as itself.

**Inductive Hypothesis:** Suppose all sets of $n$ horses are the same color. Suppose we have $n+1$ horses, enumerated in some way (we assign each horse a number $1$ through $n+1$ to identify them). By the inductive hypothesis, the horses $1$ through $n$ are the same color. By the same inductive hypothesis again, horses $2$ through $n+1$ are the same color too. So all the horses are the same color as horses $2$ through $n$, thus showing that all $n+1$ horses are the same color. $\ \blacksquare$

Clearly this proof is wrong. Clearly some horses are brown, some are black, some are white, and some are patterned. Yet our "proof" would suggest otherwise. The issue lies in our base case, since it cannot be used to prove the case for $n=2$ horses. The key idea in the "proof" was to use the set of "intermediary" horses $2$ through $n$ to give some way of comparing horse $1$ with horse $n+1$ indirectly. But if there are only 2 horses, there is no middle horse to compare them to. If you want to prove that all horses are the same color in this way, you'd have to show it initially for 2 horses to have any chance of a real argument (which of course, isn't true).

## Weak Induction vs. Strong Induction

There's something else weird in our inductive proof of De Morgan's Laws. Again, let's look at our specific outline of induction:

* (PMI 2) $\forall k \geq 0$, if $\Phi(k)$ is true, then $\Phi(k+1)$ is true

The inductive step says to show $\Phi(k)$ implies $\Phi(k+1)$. Yet, if you look at our proof of De Morgan's Laws, we had to use not only the case that $\Phi(k)$ was true, but also $\Phi(2)$ was true; we needed to assume that the law holds for not only $n$ sets, but for 2 sets as well. I mean, clearly if we assume that $\Phi(k)$ is true and $k \geq 2$, then $\Phi(2)$ should be true, but that's not what we explicitly allowed in our Principle of Mathematical Induction.

This is an instance of **strong induction**. The formulation of mathematical induction we gave before was **weak induction**, but the difference between them is minimal. If you can show that a theorem $\Phi$ holds for:

* (SPMI 1) $\Phi(0)$ is true
* (SPMI 2) $\forall k \geq 0$, if $\Phi(0)\wedge\Phi(1)\wedge\cdots\wedge\Phi(k)$ is true, then $\Phi(k+1)$ is true

then you can conclude that $\Phi(n)$ is true for all $n$. The difference between strong induction and weak induction is just that strong induction allows you to use multiple cases in your proof, while weak induction only specifies the previous case. 

Here's a nice example of strong induction:

---------------

**Claim:** A country has $n$ cities. Suppose that any two cities are connected by a one-way road. Then there is a route that passes through every city.

**Base Case:** Clearly it is true for $n=2$: just take the one-way road that leads out from one city and into the other.

**Inductive Hypothesis:** Now suppose this holds up to and for $n$ cities. We want to show this holds for $n+1$ cities. Let's take the $(n+1)^{\textrm{th}}$ city, and divide the remaining cities into two groups: cities that have a road _into_ city $n+1$ (call this group $A$) and cities that have roads _coming out of_ city $n+1$ (group $B$). 

Now obviously group $A$ has $n$ or fewer cities, so by the inductive hypothesis, there is a route that passes through all of the cities in group $A$. Similarly, for the same reason, there is a route that passes through all the cities in group $B$.

Now, take a route that passes through all the cities in $A$, then stop at the $(n+1)^{\textrm{th}}$ city, then finally go to a city in $B$ and complete a route that passes through all those cities. We can do that since every city in $A$ has a road to $n+1$, and every city in $B$ has a road from $n+1$. 

Hence, the inductive hypothesis holds, and proves our claim. $\ \blacksquare$

---------------

We needed strong induction above since we have no idea how many cities are in groups $A$ and $B$, so we need the claim to hold for _all_ values up to $n$, not just $n$ itself, in the inductive hypothesis. The renewed inductive hypothesis given in strong induction is—obviously so—much more applicable than its weaker counterpart, just by sheer introduction of additional inductive instances. 

<!-- For example, recall that the Fibonacci numbers are defined by $F_{n+2} = F_{n+1} + F_n$ with $F_0 = 0$ and $F_1 = 1$. We can then prove that all Fibonacci numbers satisfy the explicit formula:

<center>

$\large{F_n = \frac{1}{\sqrt{5}} \left( \left(\frac{1+\sqrt{5}}{2} \right)^n - \left(\frac{1-\sqrt{5}}{2} \right)^n \right)}$

</center>

You could prove this with a modified induction principle: 

* Showing it holds for $n=0,1$, and then
* For all $k \geq 0$, if the formula holds for both $n$ and $n+1$, it will hold for $n+2$ -->


Despite the naming, though, they are actually **equal in strength**; anything you can prove with weak induction you can prove with strong induction, and anything you can prove with strong induction you can prove with weak induction. 

---------------

**Strong Induction Implies Weak Induction:** It shouldn't be much of a surprise that if strong induction holds, then weak induction also holds, since weak induction is just like strong induction but looser requirements. Let's prove it anyway. Suppose that strong induction is a valid proof technique. We want to show that weak induction is also valid. That is, from assumptions

* (WPMI 1) for some base case $k$ we know $\Phi(k)$ is true, and
* (WPMI 2) $\forall m \geq k$, $\Phi(m)$ is true $\Rightarrow$ $\Phi(m+1)$ is true,

we want to show that $\Phi(n)$ is true for all $n \geq k$. Obviously, whenever (WPMI 1) is true, then so is (SPMI 1) since they are both the same clause. However, let's also note that whenever (WPMI 2) is true, so is (SPMI 2). To see this, let's suppose (WPMI 1) is true. For any $m \geq k$, if $\Phi(k)\wedge\Phi(k+1)\wedge\cdots\wedge\Phi(m)$ is true, then certainly $\Phi(m)$ alone is true. By (WPMI 2), then we also know $\Phi(m+1)$, thus showing (SPMI 2) holds.

Having this fact in hand, we can complete the proof. Let's assume strong induction holds. Then, if the assumptions (WPMI 1) and (WPMI 2) for weak induction are true, we also know the assumptions (SPMI 1) and (SPMI 2) for strong induction are also true. Then by the conclusion for strong induction, we know $\Phi(n)$ holds for all $n$. But this is the exact same conclusion that we would get from weak induction. Hence weak induction holds whenever strong induction does. 

<center>
$\blacksquare$
</center>

Again, this shouldn't be that surprising, as every instance of weak induction is just an instance of strong induction with weaker hypotheses.


**Weak Induction Implies Strong Induction:** This direction will require a bit more work. Let's assume that weak induction is a valid proof technique. We want to show that strong induction is valid. That is, from the assumptions 

* (SPMI 1) for some base case $k$ we know $\Phi(k)$ is true, and 
* (SPMI 2) $\forall m \geq k$, $\Phi(k)\wedge\Phi(k+1)\wedge\cdots\wedge\Phi(m)$ is true $\Rightarrow$ $\Phi(m+1)$ is true, 

we want to show that $\Phi(n)$ is true for all $n \geq k$. What we will do is _induct on a meta-statement_ of $\Phi$. Let $S(m)$ be the statement "$$\Phi(n)$$ is true for all $$k \leq n \leq m$$". If we can show $S(n)$ is true for all $n$ (with regular induction), then we would also show $\Phi(n)$ is true for all $n$ as well.

From (SPMI 1), we get $\Phi(k)$ is true, and thus $S(k)$ is also true (this will be our base case). From (SPMI 2), we get that for all $m \geq k$, if $S(m)$ is true, then $\Phi(m+1)$ is true (since $S(m)$ is equivalent to the hypothesis of the conditional). But, if $\Phi(m+1)$ is true and $S(m)$ is true, then we also get that $S(m+1)$ is true by definition. Combining these two conditionals, we get that if $S(m)$ is true, then $S(m+1)$ is true (this is our inductive step).

Combining our base case and inductive hypothesis for $S(n)$, we can deduce via weak induction, that $S(n)$ is true for all $n \geq k$. And as described before, it must be the case that $\Phi(n)$ is also true for all $n \geq k$, which is precisely the conclusion that strong induction wants.

Here's a more [intuitive version of this proof](https://math.stackexchange.com/questions/1184541/what-exactly-is-the-difference-between-weak-and-strong-induction), but relies on knowing some basic logic to justify a direct argument. The idea is the same, but the above is more "contained" in my opinion, while the link is more readily understandable.

<center>
$\blacksquare$
</center>

----------------------

So whenever, one proof looks like it requires strong induction, it could also be done with weak induction. For example, with De Morgan's Laws, you could imagine having shown the case for $n=2$, you could use weak induction to show $n=3$. Similarly, 

So, perhaps a more appropriate name would just to say "mathematical induction", for weak and strong induction are both cut from the same cloth.

## "Proving" Induction

We showed that weak and strong induction are equivalent, meaning if one holds so does the other. But, we never showed that either form of _induction actually holds_. Intuitively, I think the analogy of dominos or climbing a ladder makes induction only seem natural, but with all things in math, we do need to justify using induction rigorously somehow. Fortunately, a lot of the work in the proof is given by the axioms that define the natural numbers. We'll first prove weak induction.

**Weak Induction:** Let $S$ be a set of natural numbers with the following properties:

1. $0 \in S$
2. If $k \in S$, then $k+1 \in S$

Then $S$ is the set of all natural numbers.

If you wanted to apply this to our above applications of induction, you could define it such that $S = \\{ n \in \mathbb{N} \ | \ \Phi(n) \textrm{ is true} \\}$.

**Proof:** We will [prove this by contradiction](https://xperimex.com/blog/constructive-proofs/). So suppose that there are some set of natural numbers $T \neq \varnothing$ that are not in $S$. By the [**well-ordering principle**](https://en.wikipedia.org/wiki/Well-ordering_principle), $T$ has a smallest element—any two distinct natural numbers  has a lesser one among them two. Let's call this least element $\alpha$.

* Since $0 \in S$ by $(1)$, we have $0 < \alpha \notin S$
* By (the contrapositive) of $(2)$, we also have $\alpha - 1 \notin S$
* Since $\alpha$ is the least element of $T$, we have $\alpha - 1 \notin T$, or in other words, $\alpha - 1 \in S$
* This is a contradiction!

So, our initial assumption that such a non-empty set $T$ exists must be false, and thus it must be that $S$ contains all natural numbers. $ \ \blacksquare$

Even though we've proven the equivalence of weak and strong induction already, we can also prove the validity of strong strong induction independently in an almost identical fashion.

**Strong Induction:** Let $S$ be a set of natural numbers with the following properties:

1. $0 \in S$
2. If $0,1,\cdots,k \in S$, then $k+1 \in S$

Then $S$ is the set of all natural numbers.

**Proof:** We'll also prove this by contradiction. Suppose $T$ is the set of integers not in $S$, so $T$—by well-ordering—must have a least element $\alpha$.

* Since $0 \in S$ by $(1)$, we have $0 < \alpha \notin S$.
* By $(2)$, we have $0,1,\cdots,\alpha -1 \notin S$
* But since $\alpha$ is the least element, $0,1,\cdots,\alpha -1 \in T$ and so $0,1,\cdots,\alpha -1 \in S$
* Contradiction!

Since the only assumption we made was $T$ was non-empty, it must be wrong, and thus $S$ is the set of all natural numbers. $ \ \blacksquare$

### Well-Ordering Principle

In both proofs, we relied on the **well-ordering of the natural numbers**. A well-order is a relation $\leq$ on a set $X$ with the following properties:

1. **Reflexivity:** $\forall x \in X \ x \leq x$
2. **Antisymmetry:** $\forall x,y \in X \ (x \leq y \wedge y \leq x \Rightarrow x = y)$
3. **Transitivity:** $\forall x,y \in X \ (x \leq y \wedge y \leq z \Rightarrow x \leq z)$
4. **Connectedness:** $\forall x,y \in X \ (x \leq y \vee y \leq x)$
5. **Minimums:** Every non-empty subset $\varnothing \neq S \subseteq X$ contains a least element, i.e., $\exists \alpha \in S$ such that $\forall x \in X \ \alpha \leq x$


The set of natural numbers $\mathbb{N}$ is well-ordered under the relation "less than" $\leq$. This is something that is just an intuitive fact that we take for granted when working with the natural numbers, but it is a very special property given by the axioms of the natural numbers, and it will become important to us later on. This simple fact, though, is actually **equivalent to the principle of mathematical induction** itself!

**Induction Implies Well-Ordering:** Suppose for contradiction that $\mathbb{N}$ is not well-ordered. That is, there is a subset $\varnothing \neq S \subseteq \mathbb{N}$ with no least element. Then $0 \notin S$ as it would be then be minimal. Then $1 \notin S$ as $1$ would be minimal as $0 \notin S$. Suppose $0,1,\cdots,n \notin S$. Then $n+1 \notin S$ as it would be minimal. By induction, $\forall n \in \mathbb{N} \ n \notin S$. That is, $S = \varnothing$, which is a contradiction. Thus $\mathbb{N}$ is well-ordered. $ \ \blacksquare$


**Well-Ordering Implies Induction:** Assume $\mathbb{N}$ is well-ordered. We want to show that if a subset $S\subseteq \mathbb{N}$ with the properties that

1. $0 \in S$
2. If $k \in S$, then $k+1 \in S$

then $S = \mathbb{N}$. 

So for a contradiction, suppose $S \neq \mathbb{N}$. That is, there is a set of natural numbers $\varnothing \notin T \subseteq \mathbb{N}$ not in $S$. By well-ordering, $T$ has a least element $\alpha$. From assumption $(1)$, we're saying $0 \in S$, so $0 \notin T$. Therefore, $\alpha = k + 1$ for some $k \in \mathbb{N}$. But if $\alpha = k + 1 \in T$, $k + 1 \notin S$. And by assumption $(2)$, if $k + 1 \notin S$, then $k \notin S$ and further $k \in T$. But $k < k+1 = \alpha$, contradicting the minimality of $\alpha$. 

So if $T \neq \varnothing$, it contains no minimal element, contradicting the well-ordering of $\mathbb{N}$. Therefore, it must be that $T = \varnothing$, or in other words, $S = \mathbb{N}$, validating induction. $ \ \blacksquare$


-----------------

That's enough metatheory. Let's get back to some applications.



# Variations on Induction

The simple idea of induction is far more flexible than our statement of it may seem. With some clever combinations of inductive arguments, we can prove many things in much simpler ways than typical induction may suggest.

## Forward-Backward Induction

Induction hopefully should clearly work in an "forward" direction at this point; we can climb the integer ladder up and up so long as we have one rung to start on. Similarly we can have a "backward" inductive (BI) argument: if you can show that for some claim $\Phi$ that

* (BI 1) For some base case $k$ we know $\Phi(k)$ is true
* (BI 2) $\forall m \geq k$, $\Phi(m)$ is true $\Rightarrow$ $\Phi(m-1)$ is true

then, naturally, we should be able to conclude that $\Phi(n)$ is true for all $n \leq k$. But we can use this idea in tandem with our normal form of induction to get a nice combined approach with **forward-backward induction**. If you can show that

* (F-B 1) $\Phi(n)$ is true for infinitely many $n$
* (F-B 2) For all $k$, if $\Phi(k)$ is true, then $\Phi(k-1)$ is true

then you can conclude that $\Phi(n)$ is true for all positive $n$. The idea is that you only need to show that $\Phi$ is true for an infinite amount of $n$, not necessarily _all_ $n$. Then using (F-B 2), we can fill in the gaps between our infinite $\Phi(n)$ by working backwards from the proven cases in (F-B 1). Here's a more specific, but common example of forward-backward induction.

* For some base case $k$ we know $\Phi(k)$ is true
* $\forall m \geq k$, $\Phi(m)$ is true $\Rightarrow$ $\Phi(2m)$ is true
* $\forall m \geq k$, $\Phi(m)$ is true $\Rightarrow$ $\Phi(m-1)$ is true

Here we show that all the powers of 2 (scaled by our base case) satisfy $\Phi(n)$, and then fill in all the gaps with our third condition that works backwards.

So really, forward-backward induction is just two inductive arguments being put together, which is more common than it may seem. For example, if you can show that 

* $\Phi(0)$ and $\Phi(1)$ are true
* For all $k \geq 0$, $\Phi(k)$ is true $\Rightarrow$ $\Phi(k+2)$ is true

then $\Phi(n)$ is true for all $n$ as we just showed that $\Phi(n)$ is true for all even numbers and odd numbers separately; $\Phi(0)$ with the inductive step gets you the evens, while $\Phi(1)$ gets the odds. Forward-backward induction is the same idea, only combining two other inductive proofs to "fill in the gaps".

Let's put it to practice.

--------------------

**Arithmetic Mean-Geometric Mean (AM-GM) Inequality:** For non-negative real numbers $a_1,a_2,\cdots,a_n$,

<center>

$\sqrt[n]{a_1 a_2 \cdots a_n} \leq \large{\frac{a_1 + a_2 + \cdots + a_n}{n}}$

</center>

with equality given if and only if $a_1 = a_2 = \cdots = a_n$.

**Base Case:** Clearly $n=1$ holds, so we'll also show it for $n=2$. Note that $\left(\sqrt{a_1} - \sqrt{a_2} \right)^2 \geq 0$. So by simple algebra,

<center>
$
\begin{align}
\left(\sqrt{a_1} - \sqrt{a_2} \right)^2 & \geq 0
\newline
a_1 - 2\sqrt{a_1 a_2} + a_2 & \geq 0
\newline
a_1 + a_2 & \geq 2\sqrt{a_1 a_2}
\newline
\frac{1}{2}(a_1 + a_2) & \geq \sqrt{a_1 a_2}
\end{align}
$
</center>

**Forward-Inductive Hypothesis:** Let's assume the AM-GM inequality holds for some $n$. We'll show it also holds for $2n$.

<center>
$
\begin{align}
\frac{a_1 + a_2 + \cdots + a_{2n}}{2n} & = \frac{\frac{a_1 + a_2 + \cdots + a_{n}}{n} + \frac{a_{n+1} + a_{n+2} + \cdots + a_{2n}}{n}}{2}
\newline
 & \geq \frac{\sqrt[k]{a_1 a_2 \cdots a_n} + \sqrt[k]{a_{n+1} a_{n+2} \cdots a_{2n}}}{2}
\newline
 & \geq \sqrt{\sqrt[k]{a_1 a_2 \cdots a_n} \sqrt[k]{a_{n+1} a_{n+2} \cdots a_{2n}}}
\newline
 & = \sqrt[2k]{a_1 a_2 \cdots a_n a_{n+1} a_{n+2} \cdots a_{2n}}
\end{align}
$
</center>

Hence proving the forward inductive claim using cases for $2$ and $n$ non-negative numbers.

**Backward-Inductive Hypothesis:** Again we suppose AM-GM inequality holds for $n$ numbers. We will show it holds for $n-1$ numbers. First, though, since AM-GM holds for $n$ numbers, it will also hold when we let $a_n = \frac{a_1 + \cdots + a_{n-1}}{n-1}$ the average of the previous $n-1$ numbers.

<center>
$
\begin{align}
\frac{a_1 + a_2 + \cdots + a_{n}}{n} & \geq \sqrt[n]{a_1 a_2 \cdots a_n}
\newline
\frac{a_1 + a_2 + \cdots + \frac{a_1 + a_2 + \cdots + a_{n-1}}{n-1}}{n} & \geq \sqrt[n]{a_1 a_2 \cdots a_{n-1} \frac{a_1 + a_2 + \cdots + a_{n-1}}{n-1}}
\newline
\frac{a_1 + a_2 + \cdots + a_{n-1}}{n-1} & \geq \sqrt[n]{a_1 a_2 \cdots a_{n-1} \frac{a_1 + a_2 + \cdots + a_{n-1}}{n-1}}
\newline
\left(\frac{a_1 + a_2 + \cdots + a_{n-1}}{n-1} \right)^n & \geq a_1 a_2 \cdots a_{n-1} \frac{a_1 + a_2 + \cdots + a_{n-1}}{n-1}
\newline
\left(\frac{a_1 + a_2 + \cdots + a_{n-1}}{n-1} \right)^{n-1} & \geq a_1 a_2 \cdots a_{n-1}
\newline
\frac{a_1 + a_2 + \cdots + a_{n-1}}{n-1} & \geq \sqrt[n-1]{a_1 a_2 \cdots a_{n-1}}
\end{align}
$
</center>

Thus proving the backward-inductive hypothesis.

By forward-backward induction, we've shown that AM-GM holds any number of non-negative real numbers. 

<center>
$\blacksquare$
</center>

## Proof by Infinite Descent

Building on this idea of using backwards induction, Fermat used backward induction in a very neat way. Because, well, there's something weird going on in our forward-backward induction, notably the backwards step:

* (F-B 2) For all $k$, if $\Phi(k)$ is true, then $\Phi(k-1)$ is true

This doesn't seem all that problematic, but while the natural numbers are unbounded upwards, they are bounded _downwards_ by 0. From $\Phi(k)$, we get $\Phi(k-1)$, then further $\Phi(k-2)$, and so on until we get $\Phi(0)$. But from $\Phi(0)$ can we conclude $\Phi(-1)$? The backwards inductive step would certainly suggest so, but that's not how natural numbers work. In the AM-GM inequality above, what would it mean for it to hold for "-1 numbers"? It just doesn't make sense.

The difference here is that we _do_ have an understanding that backwards induction terminates eventually at 0. In particular, what our backwards inductive statement really _should_ say is that

* (F-B 2) For all $k$, if $\Phi(k+1)$ is true, then $\Phi(k)$ is true

We first assume that $k \in \mathbb{N}$ before we apply it to our claim we're proving. But what if we didn't assume that?

**Proof by infinite descent** exploits this assumption to make a very nice proof by contradiction. If we remove this condition assuming that one of our numbers is already a natural number, we could prove things by contradiction by showing that is a consequence. That is,

* (Suppose for contradiction that) $\Phi$ is true
* If $m \in \mathbb{N}$ and $\Psi(m)$ is true, then $m-1 \in \mathbb{N}$ and $\Psi(m-1)$ is true 

Then you could conclude that $\Phi(n)$ **is false** for all $n \in \mathbb{N}$ since there is no infinitely descending sequence of natural numbers. $\Psi(n)$ here could be any consequence that would imply an infinitely decreasing sequence of natural numbers.

This is best done with an example.

------------------

**Claim:** If $\sqrt{k}$ is not an integer, then it is irrational.

**Proof:** Suppose for a contradiction that there is a positive integer $k$ such that $\sqrt{k}$ is not an integer and not irrational, i.e. $\sqrt{k}$ is rational. So there are natural numbers $m,n \in \mathbb{N}$ such that $\sqrt{k} = \frac{m}{n}$. Now we can do some algebra on this expression:

<center>
$
\begin{align}
\sqrt{k} & = \frac{m}{n}
\newline
& = \frac{m(\sqrt{k} - \lfloor \sqrt{k} \rfloor)}{n(\sqrt{k} - \lfloor \sqrt{k} \rfloor)}
\newline
& = \frac{m\sqrt{k} - m\lfloor \sqrt{k} \rfloor}{n\sqrt{k} - n\lfloor \sqrt{k} \rfloor}
\newline
& = \frac{(n\sqrt{k})\sqrt{k} - m\lfloor \sqrt{k} \rfloor}{n(\frac{m}{n}) - n\lfloor \sqrt{k} \rfloor}
\newline
\sqrt{k} & = \frac{nk - m\lfloor \sqrt{k} \rfloor}{m - n\lfloor \sqrt{k} \rfloor}
\end{align}
$
</center>

By multiplying by $\frac{\sqrt{k} - \lfloor \sqrt{k} \rfloor}{\sqrt{k} - \lfloor \sqrt{k} \rfloor} = 1$, we ended up with a new rational expression for $\sqrt{k}$. But notice, by definition of the floor function $\lfloor \cdot \rfloor$, we multiplied the numerator and denominator by $\sqrt{k} - \lfloor \sqrt{k} \rfloor < 1$. So $m > m(\sqrt{k} - \lfloor \sqrt{k} \rfloor) = nk - m\lfloor \sqrt{k} \rfloor$ and similarly for the denominator. But the numerator and denominator are both still natural numbers, since $m$, $n$, $k$, and $\lfloor k \rfloor$ are all natural numbers, so their sums and products are too!

So from a rational expression for $\sqrt{k} = \frac{m}{n}$, we found another equivalent rational expression with a strictly smaller numerator and denominator. So we could repeat this process again multiplying through by $\frac{\sqrt{k} - \lfloor \sqrt{k} \rfloor}{\sqrt{k} - \lfloor \sqrt{k} \rfloor}$ to find another smaller rational expression _ad infinitum_. But there are no infinitely decreasing sequences of natural numbers for the numerator and denominator to be a part of, giving us a contradiction.

So it must be that our initial assumption was wrong that there is a $\sqrt{k}$ that is neither and integer nor irrational. In other words, it for all natural numbers $k$, either $\sqrt{k}$ is an integer or it is irrational.

<center>
$\blacksquare$
</center>

Here's a [geometric application of infinite descent](http://xperimex.com/blog/grid-polygons/) applied not to natural numbers directly, but rather integral multiples of a length of a line.


## Multi-Induction

Let's revisit the very first inductive proof we gave. We showed that the formula for the sum of the first $n$ natural numbers is 

<center>

$\sum_{i=1}^n i = \large{\frac{n(n+1)}{2}}$

</center>

There's a similar formula for a related double sum:

<center>

$\sum_{j=1}^m \sum_{i=1}^n (i + j) = \large{\frac{mn(m+n+2)}{2}}$

</center>

You might try to prove this with induction, but there's a sizeable difference between our original problems and this one: it's a formula of **multiple variables**.

As such, there is also a natural extension to what we've been doing in **multi-induction**. A way to think of it is like the "product" of inductive arguments; if we were "inducting linearly" before, we'll now "induct in a grid".

For our case of double induction, we'll represent our formula is true with $\Phi(m,n)$—just like what we did before with one variable. We'll then use the following formulation for double induction (DI): we'll show that

* (DI 1) $\Phi(1,1)$ is true
* (DI 2) For all $m \geq 1$, show $\Phi(m,1)$ is true
* (DI 3) For each fixed $m_0$ and for all $n \geq 1$, show that $\Phi(m_0, n)$ is true

to prove that $\Phi(m,n)$ is true for all integers $m,n \geq 1$. If you think of $(m,n)$ as coordinates in space, (DI 2) is the "horizontal" induction, proving the claim along the $x$-axis and giving us the base cases for (DI 3), which fills in the columns along the $y$-axis.

And as you can probably guess, we'll show (DI 2) and (DI 3) with induction.

----------------

**Claim:** $\sum_{j=1}^m \sum_{i=1}^n (i + j) = \large{\frac{mn(m+n+2)}{2}}$
 
**Base Case:** We'll check it for the case $m = n = 1$. $\sum_{j=1}^1 \sum_{i=1}^1 (i + j) = 2 = \frac{1 \cdot 1(1+1+2)}{2}$.

**Horizontal Inductive Hypothesis:** We'll induct on $m$ and prove that the formula holds for all $m \geq 1$ while fixing $n=1$. So suppose the formula holds for some $m$, that is, $\sum_{j=1}^{m} \sum_{i=1}^1 (i + j) = \frac{m(m+3)}{2}$. We'll show that it also holds for $m+1$:

<center>
$
\begin{align}
\sum_{j=1}^{m+1} \sum_{i=1}^1 (i + j) = \sum_{j=1}^{m+1} (1 + j) & = \sum_{j=1}^{m} (1 + j) + (1 + m + 1)
\newline
& = \frac{m(m+3)}{2} + (m + 2)
\newline
& = \frac{m^2 + 5m + 4}{2}
\newline
& = \frac{(m+1)(m+4)}{2}
\newline
& = \frac{(m+1)((m+1) + 3)}{2}
\end{align}
$
</center>

Since $\Phi(m,1) \Rightarrow \Phi(m+1,1)$, by induction, $\Phi(m,1)$ is true for all $m \geq 1$.

**Vertical Inductive Hypothesis:** Horizontal induction now gives us the base cases we need to induct on $n$. We now know that for a fixed $m_0$, $\Phi(m_0, 1)$ is true, so that will act as our base case. Now assume that $\Phi(m_0,n)$ is true for some $n$. That is,


<center>

$\sum_{j=1}^{m_0} \sum_{i=1}^n (i + j) = \large{\frac{m_{0} n(m_0+n+2)}{2}}$

</center>

We will show that $\Phi(m_0, n+1)$ is also true. 

<center>
$
\begin{align}
\sum_{j=1}^{m_0} \sum_{i=1}^{n+1} (i + j) & = \sum_{j=1}^{m_0}  \left( \sum_{i=1}^{n} (i + j) + (n+1 + j) \right)
\newline
& = \sum_{j=1}^{m_0}  \sum_{i=1}^{n} (i + j) + \sum_{j=1}^{m_0} (n+1 + j)
\newline
& = \frac{m_{0} n(m_0+n+2)}{2} + \sum_{j=1}^{m_0} (n+1 + j)
\newline
& = \frac{m_{0} n(m_0+n+2)}{2} + \frac{m_0(m_0 + 1)}{2} + m_0(n+1)
\newline
& = \frac{m_{0}(m_0 n + n^2 + 2n)}{2} + \frac{m_0(m_0 + 1 + 2(n + 1))}{2}
\newline
& = \frac{m_{0}(m_0 n + n^2 + 2n + m_0 + 1 + 2(n + 1))}{2}
\newline
& = \frac{m_0 (n + 1)(m_0 + (n+1) + 2)}{2}
\end{align}
$
</center>

We get the 3rd line equality by the inductive hypothesis, the 4th line is just an arithmetic series, and the rest follow from algebra. Thus, $\Phi(m_0, n) \Rightarrow \Phi(m_0, n+1)$, and by induction, $\Phi(m_0,n)$ is true for a fixed $m_0$ and all $n \geq 1$.

But $m_0$ was arbitrary. So $\Phi(m,n)$ is true for all $m,n \geq 1$. In other words, for all $m,n \geq 1$,

<center>

$\sum_{j=1}^m \sum_{i=1}^n (i + j) = \large{\frac{mn(m+n+2)}{2}}$

</br></br>

$\blacksquare$

</center>

## Transfinite Induction

In our original proofs of weak and strong induction, we relied primarily on the well-ordering of the natural numbers. Actually, that's really about all we cared about. Let's look again at our statement of (strong) induction from that proof:

----------------

**Strong Induction:** Let $S$ be a set of natural numbers with the following properties:

1. $0 \in S$
2. If $0,1,\cdots,k \in S$, then $k+1 \in S$

Then $S$ is the set of all natural numbers.

----------------

Let's rewrite this with a bit more notation.

----------------

**Strong Induction Again:** Let $S \subseteq \mathbb{N}$ be a subset with the following properties:

1. $0 \in S$
2. If $\forall m \leq k \ \ m \in S$, then $k+1 \in S$

Then $S = \mathbb{N}$.

----------------

If all that really mattered was the idea of $\mathbb{N}$ being well-ordered—this idea that there's a lesser element, or a "next" element in the set—what's stopping us from changing $\mathbb{N}$ with _any_ set $A$ that is well-ordered under a relation $\leq$ (that is not necessarily "less than or equal")? There is one issue though, that comes in the second clause for strong induction:

1. If $\forall m \leq k \ \ m \in S$, then $k+1 \in S$

Sometimes we can have well-ordered sets–that is have this concept of a "next" element—but have it such that there is no "good" definition of having a next, or $+1$ element. I know this sounds contradictory, but this will help if we talk it out from the start. So far we've been working with the natural numbers, so that seems like a good place to work out of. But first, we need to understand what the natural numbers _are_. 

### Finite Ordinals

In general, we use the the natural numbers to _count_ things, like the sizes of sets. So oftentimes, we do just that! Let's look at a construction of the natural numbers via sets that do exactly that (due to von Neumann):

**von Neumann's Construction of $\mathbb{N}$:** We will define them recursively. 

* $0 = \varnothing$
* $n+1 = n \cup \\{n\\}$ (this is the **successor** of a number)

So the first few natural numbers with this definition would be

<center>
$
\begin{align}
0 & = \varnothing
\newline
1 & = 0 \cup \\{0\\} = \varnothing \cup \\{\varnothing\\} = \\{\varnothing\\}
\newline
2 & = 1 \cup \\{1\\} = \\{\varnothing\\} \cup \\{\\{\varnothing\\}\\} = \\{\varnothing, \\{\varnothing\\}\\}
\newline
3 & = 2 \cup \\{2\\} = \\{\varnothing, \\{\varnothing\\}\\} \cup \\{\\{\varnothing, \\{\varnothing\\}\\}\\} = \\{\varnothing, \\{\varnothing\\}, \\{\varnothing, \\{\varnothing\\}\\} \\}
\end{align}
$
</center>

If it's easier, you can also think of each number being defined as the set of all previous numbers, meaning that $n+1 = \\{0, 1, \cdots, n\\}$. So the number, say $4$, could be thought of as how many numbers are in the set $\\{0,1,2,3\\}$. If you're interested, you can look into how to do all the [standard arithmetic with these set operations](https://math.stackexchange.com/questions/1135354/how-to-perform-arithmetic-4-functions-on-von-neumann-numbers), but the only point that we care about is how we can compare them. 

Since we're working with sets, the idea of "less than or equal" doesn't really make sense, but fortunately, we built into our definition a nice counterpart to represent "less than or equal". Our well-ordering relation is "contains" $\in$: for two numbers, if $a \in b$, then we have $a < b$. This can be seen easiest with the second definition of a number being the set of all previous numbers. We call these numbers that relate to each other in this set-theoretic way as **ordinals**. In particular,

* Ordinals are well-ordered under the relation $\in$, and
* Ordinals also have the property that whenever $x \in S$, it's also the case that $x \subseteq S$ as well. 

Ordinals generalize the way we would normally count things to infinite sizes. The natural numbers are also known as the **finite ordinals**.

So every natural number can be identified with the set of all natural numbers before it. And the set of all these finite ordinals are well-ordered, and we can do induction on them like we have been doing before. Great!

### Infinite Ordinals

But look at our definition of an ordinal. We're defining them in this recursive manner, but there's nothing saying that they have to be of finite size. So what happens if we just make an infinite ordinal? So far all of our ordinals have been of finite natural numbers, what's stopping us from extending one of these sets to infinity?

Well, suppose we did take the limit of the set of natural numbers. That is the set, let's call $\omega$, defined as

<center>

$\omega = \\{0,1,2,3,4,\cdots\\}$

</center>

This set is certainly greater than any other natural number under the relation $\in$—in fact, it is the **supremum** of the natural numbers, being the smallest ordinal greater than all of the natural numbers. Also, certainly by the way we defined the natural numbers, every element of $\omega$ is also a subset of $\omega$, so $\omega$ fits the definition of an ordinal too.

But think about that for a second. If we take the set of all natural numbers alongside this **infinite ordinal** in the set $\mathbb{N} \cup \\{\omega\\}$, we definitely have a well-ordered set, but how could we ever do induction on this set? Because $\omega$ is greater than all natural numbers, it definitely does not have the form of $k+1$ for some natural number $k$. Yet, according to our definition of induction

* (SPMI 2) If $\forall m \leq k \ \ m \in S$, then $k+1 \in S$

those are the only statements we could build off of. No matter how long you let our induction go for, it will never be able to prove a statement is true for the ordinal $\omega$, while still being in a well-ordered set.

This is the purpose of **transfinite induction**. When working to prove things for any well-ordered set, we can run into these **limiting cases** ($\omega$ is aptly called a **limiting ordinal**) that don't work completely well with the notion of having a "next element" at infinity; you can imagine labelling elements in a well-ordered set as with 0, 1, 2, etc. as we have been doing before, and then eventually running into $\omega$ to throw your induction off. It's always infinity that makes things a little more difficult.

### The Principle of Transfinite Induction

The principle of transfinite induction will look extremely familiar to what we've already been doing.

**Transfinite Induction:** Let $A$ be a well-ordered set, and $\Phi(x)$ be a proposition that has domain $A$ with the following properties:

* (TI 1) $\Phi(0)$ is true
* (TI 2) $\Phi(b)$ is true for all $b < a$, then $\Phi(a)$ is true

Then you can conclude that $\Phi(x)$ is true $\forall x \in A$.

$0$ just means the least element of $A$. The only real difference again is in the inductive step. In (TI 2), we replace the idea of having $k+1$ with just a notion of "greater than" as to deal with possible limiting cases. In fact, transfinite induction is presented _as normal induction_ with an additional condition:


-----------------

**Transfinite Induction:** Let $A$ be a well-ordered set, and $\Phi(x)$ be a proposition that has domain $A$ with the following properties:

* (TI 1: **Base Case**) $\Phi(0)$ is true
* (TI 2a: **Successor Case**) If $\Phi(\beta)$ is true for all $\beta \leq \alpha$, then $\Phi(\alpha+1)$ is true
* (TI 2b: **Limiting Case**) $\Phi(\beta)$ is true for all $\beta < \alpha$, then $\Phi(\alpha)$ is true

Then you can conclude that $\Phi(x)$ is true $\forall x \in A$.

-----------------

(TI 2a) is essentially just the normal form of induction we've come to know and love, with the only difference being that we can have successor ordinals that are not natural numbers, like $\omega + 1$. So it really is just the limiting cases that can throw a wrench into our proofs.


Let's now put it to work.


### Examples

[**Claim:**](https://math.wvu.edu/~kciesiel/Other/ElectronicReprints/B2IntSetThe.pdf) There is a subset $A \subset \mathbb{R}^2$ that intersects _every_ line in exactly two points.

This is not clear to me at all. I mean, just by literally the sheer number of lines there are, it seems hard to make it so that you can nudge points around so that no three are ever collinear, while still somehow covering every line. We can uniquely identify every line with an equation $y = ax + b$, so we can identify every line with an ordered pair $(a,b)$. Thinking of this as coordinates, it should be clear that the number of lines is equivalent to the size of $\mathbb{R}^2$, which is more than the number of natural numbers. So if we want to prove this via induction, we'll need to do so with transfinite induction.

**Proof:** Let $\\{ L_\alpha \\}$ be a labelling of every line (i.e. assign every line an ordinal $\alpha$). We'll inductively construct a sequence $\\{A_\alpha\\}$ of subsets of $\mathbb{R}^2$ with the following properties for each $\alpha$:

* (Instantiation) $A_\alpha$ has at most two points
* (Preservation) $\bigcup_{\beta \leq \alpha} A_\beta$ contains no three points collinear
* (Diagonal) $\bigcup_{\beta \leq \alpha} A_\beta$ contains exactly two points of $L_\alpha$

Then $A = \bigcup A_\alpha$ over all ordinals $\alpha$ will have the desired property. This is because the _preservation property_ will ensure every line has at most two points in $A$, while the _diagonal property_ will ensure that every line has at most two points in $A$.

**Base Case:** $\alpha = 0$. $L_0$ would be our first line, and all we need to do to satisfy those 3 properties above is let $A_0$ be any two points in $L_0$.

**Successor Case:** Suppose for any ordinal $\alpha$, the sequence $\\{A_\beta\\}\_{\beta \leq \alpha}$ satisfies the 3 properties above. We'll show that we can construct a satisfactory $A\_{\alpha + 1}$ to extend the sequence.

Let $B = \bigcup\_{\beta \leq \alpha} A\_{\beta}$, and $C$ be the set of all lines that contain two points from $B$. By the inductive hypothesis, $B$ has the preservation property, so line $L\_{\alpha + 1}$ has at most 2 points in $B$, i.e. $L\_{\alpha + 1} \cap B$ has at most 2 points. Now we have two cases to consider.

_Case 1:_ If $L\_{\alpha + 1} \cap B$ has exactly 2 points, we just let $A\_{\alpha+1} = \varnothing$ to immediately satisfy the 3 properties.

_Case 2:_ If $L\_{\alpha + 1} \cap B$ has less than 2 points, then line $L\_{\alpha+1}$ intersects every line in $C$ in at most 1 point (if it intersected a line in more than 1 point, it would be that line itself), i.e. for all lines $L \in C \ \ |L\_{\alpha+1} \cap L| \leq 1$. To satisfy the preservation and diagonal property, we obviously want to pick a point in $L\_{\alpha + 1} \backslash \bigcup C$ (i.e. a point on our new line but not on any of the previous lines). We can do this for sure since we can show $L\_{\alpha + 1} \backslash \bigcup C \neq \varnothing$.

* The set of all points in a line has equivalent cardinality to the reals (it's just a tilted number line, after all). So $|L\_{\alpha + 1}| = |\mathbb{R}| = 2^{\aleph_0}$.
* Every line can be uniquely written as $y = ax+b$, and thus also be identified by the ordered pair $(a,b)$. So the number of lines is equivalent to $|\mathbb{R}^2| = 2^{\aleph_0}$
* $C$ is the set of all lines with two points from $B$, which by definition, does not include all lines yet. So $|C| < 2^{\aleph_0}$
* Using the fact that for all lines $L \in C \ \ |L\_{\alpha+1} \cap L| \leq 1$:
<center>
$|L\_{\alpha + 1} \cap \bigcup C| = |\bigcup_{L \in C} L\_{\alpha + 1} \cap L| \leq |C| < 2^{\aleph_0}$
</center>
* So $L\_{\alpha + 1}$ and $\bigcup C$ share fewer than $2^{\aleph_0}$ elements, together, meaning that $L\_{\alpha + 1} \backslash \bigcup C \neq \varnothing$.

Now we're free to pick a subset from $A\_{\alpha + 1} \subset L\_{\alpha + 1} \backslash \bigcup C$. If $L\_{\alpha + 1} \cap B$ has one point, just pick 1 point for $A\_{\alpha + 1}$, and if $L\_{\alpha + 1} \cap B$ has no points, then let $A_{\alpha + 1}$ 2 points. This will satisfy our preservation and diagonal properties.

**Limit Case:** Suppose for any ordinal $\alpha$, and for all $\gamma < \alpha$, the sequence $\\{A_\gamma\\}\_{\beta \leq \gamma}$ satisfies the 3 properties above. We want to show that we can construct a $A\_{\alpha}$ to extend the sequence. Notice in our successor argument, we never really needed the fact that we were proving it for $A\_{\alpha + 1}$, but just the fact that we had a series of already constructed previous cases of $A_\beta$ with $\beta < \alpha + 1$. This makes our limit case almost identical to the successor case. Here's the outline:

* Let $B = \bigcup_{\gamma < \alpha} A_\gamma$, and $C$ be the set of all lines that contain two points from $B$
* Now consider the set $L_\alpha \cap B$
* $L_\alpha \cap B$ contains at most 2 points because $\\{A_\gamma\\}\_{\beta \leq \gamma}$ has the preservation property
* _Case 1:_ If $L_\alpha \cap B$ contains 2 points, let $A\_{\alpha} = \varnothing$
* _Case 2:_ If $L_\alpha \cap B$ contains less than 2 points, then $L_{\alpha}$ intersects with every line in $C$ at most once
  * By the same reasoning as before we can pick a subset $A_{\alpha} \subset L\_{\alpha} \backslash \bigcup C \neq \varnothing$
  * If $L_\alpha \cap B$ has 1 point, let $A\_{\alpha}$ be 1 point
  * If $L_\alpha \cap B$ has 0 points, let $A\_{\alpha}$ be 2 points


Now again let $A = \bigcup A_\alpha$ over all ordinals $\alpha$. By transfinite induction, we've shown there is a subset $A \subset \mathbb{R}^2$ that intersects every line exactly twice.

<center>
$\blacksquare$
</center>

Outside of set theory, because there are more reals than natural numbers, transfinite induction lends itself to these types of weird geometry problems.

Though, I have to admit I did lie a little bit here. We technically used **transfinite recursion** as opposed to transfinite induction. We didn't necessarily prove a claim for all ordinals $\alpha$, but rather **constructed** something inductively/recursively over the ordinals that satisfied some properties. The difference is subtle, but they are technically different methods from one another. Maybe you could argue that we were proving the claim that _"there is something constructible"_ for all ordinals, so I find the difference nitpicky.

Examples of transfinite induction can be tedious (especially if uncomfortable with ordinals and working with infinities), but you can find some in [this book](https://math.wvu.edu/~kciesiel/Other/ElectronicReprints/B2IntSetThe.pdf) for more. Some interesting examples include:

* There is a countable partition of $\mathbb{R^2}$ so that the distance between any two different points in the same set is irrational 
* $\mathbb{R^2}$ _is not_ a union of disjoint circles
* $\mathbb{R^3}$ <i>is</i> a union of disjoint circles

## Structural Induction

The idea of well-ordering—a key idea in "climbing a ladder"—naturally led us to generalize induction to transfinite induction. But there's something else in our idea of induction that, to me at least, seems more characteristic to the proof technique: **recursion**.

We've already seen recursion a little bit, but this idea of **defining things within themselves** is what induction really screams to me. In that second clause of our principle,

* (PMI 2) $\forall k \geq 0$, if $\Phi(k)$ is true, then $\Phi(k+1)$ is true

we rely on proving the validity of $\Phi(k+1)$ by already assuming the "simpler" idea $\Phi(k)$. How do we know $\Phi(k)$ is valid? We show it from the "simpler" $\Phi(k-1)$. And we keep going until we hit the simplest version of our claim with our base case $\Phi(0)$.

Building up examples from a simplest case is what I think of when I use induction. But, there are many other times we build something from a base or simple case, too. **Trees**, in computer science and graph theory, follow this exact pattern of construction. 

<div id="example_tree" style="flex: 2; position: relative;"></div>
<script src="/js/compactness/example_tree.js"></script>

We have a **root** at the top that brances out into different leaves and paths. While we may not have a definite "next" element going down a tree, we certainly have this recursive nature where at each step going down a tree, we have a smaller, "simpler", subtree. So perhaps, if we wanted to prove somthing about trees, there's a type of inductive argument we could use that modifies our original idea. For a propsition (like a property) $\Phi$ about a recursively defined structure like a tree, we could have somthing like

* Show $\Phi$ is true for the base case of the structure
* If $\Phi$ holds for all substructures, then $\Phi$ also holds for the recursively defined structure

then we should be able to conclude that $\Phi$ holds for the entire structure. This type of **structural induction** is something that should make sense based on our previous, regular versions of induction, but it's something so general we'll have to adapt it to our structures.

Here's a simple example building on trees. First, we need some definitions.

* A **vertex** is a dot in our tree.
* An **edge** is a line that connects two vertices

We define a **tree** recursively:

* (Base Case) A tree has a root vertex with no edges, or
* (Recursive Definition) A tree has a root vertex with edges connecting to some number of other trees

------------------

**Claim:** For our tree, let $V$ be the set of vertices and $E$ the set of edges. Then $|V| = |E| + 1$.

**Base Case:** Our base case is a tree is a root vertex with no edges. So $|V| = 1$, and $|E| = 0$, so the claim holds.

**Inductive Hypothesis:** Suppose that we have a tree with $n$ subtrees, and the claim holds for all subtrees. We will use $V\_i$ and $E\_i$ to denote the set of vertices and edges respectively for tree $i=1,\cdots,n$.

Then by definition, the number of vertices of the whole tree 

<center>
$|V| = 1 + |V_1| + |V_2| + \cdots + |V_n|$
</center>

as the tree is built from a root vertex connected to the subtrees. Similarly, 

<center>
$|E| = n + |E_1| + |E_2| + \cdots + |E_n|$ 
</center>

as the number of edges would be the sum of the edges of the subtrees plus the additional $n$ edges that connect the subtrees to the root. Now it's just a matter of algebra with the inductive hypothesis.

<center>
$
\begin{align}
|V| & = 1 + |V_1| + |V_2| + \cdots + |V_n|
\newline
& = 1 + (|E_1| + 1) + (|E_2| + 1) + \cdots (|E_n| + 1)
\newline
& = 1 + (n + |E_1| + |E_2| + \cdots + |E_n|)
\newline
& = 1 + |E|
\end{align}
$
</center>


<center>
$\blacksquare$
</center>

---------------

Here's another one with recursively defined sets.


**Claim:** Define the set $S$ as follows:

* (Base) $6,21 \in S$
* (Recursive) If $x,y \in S$, then $x + y \in S$

Show that every element in $S$ is a multiple of 3.

**Base Case:** Clearly $6 = 3 \cdot 2$ and $21 = 3 \cdot 7$ are both multiples of 3

**Inductive Hypothesis:** Assume that $x,y \in S$ and both are multiples of 3 i.e. $x = 3n$ and $y = 3m$ for integers $n,m \in \mathbb{Z}$. Then $x + y = 3(n + m)$ which is also a multiple of 3. So clearly all elements are multiples of 3. $\ \blacksquare$

---------------

Finally, one more from [propositional logic](http://xperimex.com/blog/intro-logic/#-mathcal-l-_1-a-first-attempt). In propositional logic, we define sentences recursively with connectives. These and only these are sentences:

* (Base) Sentence letters $P, Q, R, \cdots$ are sentences
* (Recursive) If $\phi$ and $\psi$ are sentences then the following are also sentences:
  * $\neg \phi$ (negation)
  * $(\phi \wedge \psi)$ (and)
  * $(\phi \vee \psi)$ (or)
  * $(\phi \rightarrow \psi)$ (material implication)
  * $(\phi \leftrightarrow \psi)$ (biconditional)

**Claim:** All sentences have an equal number of left and right parantheses.

**Base Case:** Sentence letters have no parantheses, and $0=0$, so they have an equal number of left and right parantheses.

**Inductive Step:** Suppose $\phi$ and $\psi$ are sentences with an equal number of left and right parantheses. We check the claim for each connective:

* $\neg \phi$: Since we add no new parantheses and $\phi$ has an equal amount of left and right, the claim holds.
* $(\phi \wedge \psi)$: If $\phi$ has $n$ left and right parantheses, and $\psi$ has $m$, then $\phi \wedge \psi$ has $n+m$ left and right parantheses, still being equal. Adding parantheses around it keeps the equality, just adding 1 to each side.
* The remaining connectives are identical to the $\wedge$ case

<center>
$\blacksquare$
</center>

---------------

Structural induction is a fairly straightforward adaptation of induction, and, as a proof technique, is helpful to formalize what might otherwise just be obvious facts (like the above). 


Induction was something we only limited to well-ordered sets. Structural induction allows us to use it on **well-founded partial orderings** too. Well-founded is similar to well-ordered, meaning that given a relation $R$ on a set $X$, every non-empty subset has a minimal element. A partial order is a relation $R$ on a set $X$ that relates elements in a set $X$ to one another, but without necessarily comparing all elements to each other. Going back to the example of trees, we can relate elements by being in the same chain of edges, so different branches would be uncomparable to one another.


# Continuous Induction

Up until now, we've treated induction as an inherently **discrete method**. I mean, how can it not be? We started by first describing a method that is iterating over the natural numbers, and then further generalized them to any well-ordered set. But nonetheless, we only applied induction to inherently _discrete_ casees. What would it even mean to climb a "continuous" ladder? What would a "next step" look like? For any real number $x$ and some incremental value $\delta$, there's always a number $y$ in between $x < y < x + \delta$, so the real numbers don't give us this nice "next step" to prove (with this, it shouldn't be hard to see that the real numbers aren't even well-ordered).

Let's think about what we're doing when we use induction. It sort of feels like an almost constructive method, right? We first show there is at least one element in our set with our base case. Then from our base case, we _add_ another element through the inductive step. From that new element, we _add_ another element with another inductive step. And so on and so on. We treat induction like a _method_ in which we add more and more elements to our set.

This is inherently rooted in thinking in terms of an **indexed** claim $\Phi(n)$. If we want to continue this analogy, we really need a way of thinking that gives us a new "next step". Let's revisit our definition of induction when we were proving it from well-ordering:

-------------------

**Principle of Mathematical Induction:** Let $S \subseteq \mathbb{N}$ be a subset with the following properties:

1. $0 \in S$
2. If $k \in S$, then $k+1 \in S$

Then $S = \mathbb{N}$.

-------------------

<!-- Again, we could define $S = \\{ n \in \mathbb{N} \ | \ \Phi(n) \  \textrm{is true} \\}$, but the key point is to think in terms of these **properties**. If $S$ satisfies those two properties, then $S$ isn't a subset of $\mathbb{N}$, but rather $S = \mathbb{N}$. It's not that we're adding elements to $S$, but rather all those _elements were already in_ $S$, by having those properties. -->

Again, we could define $S = \\{ n \in \mathbb{N} \ | \ \Phi(n) \  \textrm{is true} \\}$, but the clear issue is still our inductive step. What will be our "next step", or $k+1$? Well, if there's no good indexing of the reals and we can't include any particular one inductive step, why don't we just include a bunch? As in, why don't we just include a new **subset** of numbers at each inductive step? What could be wrong with that? Our induction then would be that if we can show that some number $x \in S$, then we can show that some _further interval_ is also in $S$, as opposed to just a single other number. That way we can just keep adding more and more interval until we reach as many reals as we want!

-------------------

**Real Induction Attempt 1:** Let $S \subseteq \mathbb{R}\_{\geq 0}$ be a subset with the following properties:

1. $0 \in S$
2. For any $x \geq 0$, if $x \in S$ then $[x, z) \subseteq S$ for some $z > x$

Then $S = \mathbb{R}\_{\geq 0}$.

-------------------

Instead of dominoes, our analogy would be like improvising a rope: so long as you have smaller threads that have some length, you can eventually tie a rope as long as you want.

There is one problem with our formulation, though: it doesn't ensure a certain size for our intervals. So if our intervals are shrinking in length, they might converge onto only some smaller part of the real line. Say we start at 0, but at each step $n$ only add an interval of length $(\frac{1}{2})^n$. Then we'll only cover the reals from $[0,1)$. So we need at least one more requirement for this to work.

And actually, we have run into this issue before. Recall for transfinite induction, we had limit ordinals that blocked our path, and had to prove the limiting cases in addition to the inductive step. We will do the same here.

-------------------

[**Real Induction:**](https://arxiv.org/pdf/1208.0973.pdf) Let $S \subseteq \mathbb{R}\_{\geq 0}$ be a subset with the following properties:

* (RI 1) $0 \in S$
* (RI 2) For any $x \geq 0$, if $[0,x] \subseteq S$ then $[x, z] \subseteq S$ for some $z > x$
* (RI 3) For any $x \geq 0$, if $[0,x) \subseteq S$ then $x \in S$
 

Then $S = \mathbb{R}\_{\geq 0}$.

-------------------

So now if we run into a limit case like before, we say it must be in our set, and that gives us a new case to continue performing real induction on. One other thing to note is that I tweaked our second condition (RI 2) to be closer to the strong form of induction from before to highlight there is an equivalent analogy in real induction. I also changed (RI 2) to be a closed interval, as our new (RI 3) allows us to do that. If a set $S$ satisfies (RI 1–3), we say $S$ is **inductive**.

So **real induction isn't all that different from what we're used to already**. Instead of natural numbers being our cases, intervals are. We start with a base case, and slowly show our claim holds on new intervals until we end up showing that from combining all those intervals, the claim actually holds for all real numbers.

Earlier I pointed out how we might run into the "issue" of only proving a claim for the interval $[0,1)$, but sometimes that's exactly what we want as opposed to showing something for all reals. We can slightly modify our method of induction just by limiting our choices of possible elements:

-------------------

**Interval Induction:** Let $S \subseteq [a,b]$ be a subset with the following properties:

* (RI 1) $a \in S$
* (RI 2) For any $a \leq x < b$, if $[a,x] \subseteq S$ then $[x, z] \subseteq S$ for some $z > x$
* (RI 3) For any $a < x \leq b$, if $[a,x) \subseteq S$ then $x \in S$
 

Then $S = [a,b]$.

-------------------

All we did is change our base case, and add a cap to our inductive step.

While we're here, we might as well check beyond our intuition that this should work.

**Proof of Real Induction:** Suppose a set $S \subseteq [a,b]$ is inductive, and (RI 1–3) hold. We want to show that $S = [a,b]$. So—just like in our proof of regular induction—suppose for contradiction, $S \neq [a,b]$, so there is a non-empty set $T = [a,b] \backslash S \neq \varnothing$. Since $T$ is bounded, and by the completeness of the reals, $T$ has an infimum (greatest lower bound).

* **Case 1:** $\mathbf{\inf (T) = a}$. By (RI 1), $a \in S$. By (RI 2), there is a $z > a$ such that $[a,z] \subseteq S$. So $z$ is a lower bound for $T$ (the elements not in $S$). But $z > a = \inf (T)$, contradicting the definition of an infimum.
* **Case 2:** $\mathbf{a < \inf(T) \in S}$. $\inf(T) \neq b$, since we declared $T$ non-empty. Then by (RI 2), there is a $z > \inf(T)$ such that $[\inf(T), z] \subseteq S$. Like before, this would suggest $z > \inf(T)$ is a lower bound for $T$, contradicting the definition of an infimum.
* **Case 3:** $\mathbf{a < \inf(T) \in T}$. Then by definition of $T$, we would have $[a,\inf(T)) \in S$. By (RI 3), then $\inf(T) \in S$, which is again a contradiction by definition of $T$.

Since these 3 cases are exhaustive for the infimum of $T$, and all lead to a contradiction, it must be the case that our initial assumption is wrong. That is, that $S \neq [a,b]$. In other words, if (RI 1–3) hold on our desired interval, it must be that $S = [a,b]$.

<center>
$\blacksquare$
</center>

So now we have this method of showing a claim holds for more and more subintervals that build on each other, until it completes _the whole interval_, allowing us to prove theorems in a now more familar way than before.

Here's a nice intuitive example.

**Intermediate Value Theorem:** Suppose $f:[a,b] \rightarrow \mathbb{R} \backslash \\{0\\}$ is continuous, and $f(a) > 0$. Then $f(b) > 0$.

If $f(x)$ is continuous and only maps numbers to non-zero real numbers, then it should make sense that if we have a point $a$ where $f(a) > 0$, then we should not have _any_ number where $f(x) \leq 0$ without "lifting up our pen"; since $f(x) \neq 0$, we have this barrier where either our function is continuous and positive, or it is not continuous and negative too. 

The idea of this proof is to use continuity to inductively string together intervals that are positive on $f$ until we cover the whole length of $[a,b]$. Just for consistency, the set we're secretely working with (as from our statement of real induction) is $S = \\{x \in [a,b] \ | \ f(x) > 0\\}$.

**Base Case:** From our assumption, we're already given that $f(a) > 0$.

**Inductive Hypothesis:** Say that for some $a \leq x < b$ that $f(t) > 0$ for all $t \in [a,x]$. We want to show that there is a further interval $z > x$ where $f(t) > 0$ for all $t \in [x,z]$.

Since $f$ is continuous at $x$, there is a small neighborhood centered at $x$ with also positive outputs i.e. $\exists \delta > 0$ such that for all $t \in (x-\delta, x+\delta)$ we have $f(t)>0$. You can just check this with the definition of continuity. A function $f:E \rightarrow \mathbb{R}$ is continuous at $x$ if:

<center>
$\forall \epsilon > 0 \ \exists \delta > 0 \ \forall p \in E \ \ \left( |x-p| < \delta \Rightarrow |f(x) - f(p)| < \epsilon \right)$
</center>

So if we let $\epsilon < f(x)$, we get some corresponding $\delta$ so that $f(p)>0$ for $p$ in that neighborhood. Thus, if we let $z = x + \delta$, we've proven our inductive step that there is a number $z > x$ such that $f(t) > 0$ for all $t \in [x,z]$. It might be a small interval, but good enough nonetheless.

**Limit Case:** Now say for for some $a < x \leq b$, we have that $f(t) > 0$ for all $t \in [a,x)$. We need to show that $f(x) > 0$ as well. Suppose it wasn't, i.e. $f(x) \leq 0$. By definition of our function, $f(x) \neq 0$, so the only remaining case is $f(x) < 0$. But by continuity—like in the inductive step—there would be a neighborhood such that $f(t) < 0$ for all $t \in (x - \delta, x + \delta)$. But that contradicts our assumption that $f(t) > 0$ for all $t \in [a,x)$ as $x - \delta < x$. So it must be the case that $f(x) > 0$.

By real induction, we have proven that if $f:[a,b] \rightarrow \mathbb{R} \backslash \\{0\\}$ is continuous and $f(a) > 0$, then $f(x) > 0$ for all $x \in [a,b]$. And in particular, $f(b) > 0$. 

<center>
$\blacksquare$
</center>

For more examples, I'd read the [instructional paper](https://arxiv.org/pdf/1208.0973.pdf) I linked above that goes quite in-depth in proving many famous theorems with real induction. Most of the proofs are relatively straightforward once you figure out how to state your set in a good way to induct on it.

Real induction is one of those tools that just doesn't seem like it should work by the way we treat normal induction. It's not a method one would probably think of, and given how little it's used, it's not surprising it's not even that well-known.

# Conclusion

Induction is one of the most fundamental tools in math. It's inextricably linked to our modern conception of the natural numbers, and in many ways, is what sets apart our contemporary understanding of math from other logical systems. So, I'm not surprised it's as powerful a proof tool as it is, but there is so much more to it than the typical weak and strong induction that is primarily taught. How we apply induction gives us so many new and creative ways to prove claims, but more importantly how thinking inductively naturally guides our intuition for alternate approaches. We saw it first with transfinite induction, then real induction, but who knows what other powerful variations on induction there may be.



