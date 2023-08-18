---START_METADATA---
{
  "title": "The Hidden Universes of the Compactness Theorem",
  "author": "Adi Mittal",
  "summary": "No introduction. Just cool.",
  "tags":[
    "me"
  ]
}


---END_METADATA---
<script src='https://cdnjs.cloudflare.com/ajax/libs/g9/1.0.16/g9.js'></script>
<script src="https://unpkg.com/mathjs/lib/browser/math.js"></script>

Last post, [I summarized the basics of formal logic](http://xperimex.com/blog/intro-logic/), starting from a philosophical context before building up to more broad and involved results, coming closer to what just looks like math by the end of it. One of those results which was briefly thrown into the conclusion was the **Compactness Theorem**. You won't need to know a lot of logic to appreciate the power of this theorem, but it would help to either skim that last blog post or brush up on how to read mathematical logic and its symbols. If the following talk of abstract logic seems confusing, don't worry, skip ahead to the [Applications of Compactness](#applications-of-compactness) to see why this theorem is so much more than just abstract logic.

------------------

Here a quick review of some concepts from **propositional logic** (that is, predicate calculus without quantifiers and predicates) we'll be using and discussing:

* **Sentence:** a string of logical characters, built from sentence letters $\\{P, Q, R, \cdots \\}$ that are either true or false, and connectives $\\{\wedge, \vee, \neg, \rightarrow, \leftrightarrow\\}$
* **Structure:** a "model universe"; a total function that assigns every sentence letter a truth value. Complex sentences are assigned truth values according to the rules of the connectives they use.
* **Satisfiability:** a set of sentences $\Gamma$ is satisfiable if and only if there is a structure that makes every sentence in $\Gamma$ true
* **Finite Satisfiability:** a set $\Gamma$ is finitely satisfiable if and only if every finite subset of $\Gamma$ is satisfiable
* **Entailment:** We say a set $\Gamma$ entails a sentence $\Phi$, written $\Gamma \vDash \Phi$, for whenever a structure satisfies $\Gamma$, then $\Phi$ is also true

------------------

**Compactness Theorem:** If $\Gamma$ is finitely satisfiable, then the whole set $\Gamma$ is satisfiable.

Roughly speaking, this says that if you have a set of logical statements, you can claim your set logical statements $\Gamma$ are not contradictory if every finite subset of logical statements are not contradictory themselves (we call the property of being non-contradictory _satisfiability_). If $\Gamma$ is already a finite collection of sentences, then Compactness trivially holds since $\Gamma \subseteq \Gamma$ is a finite subset of itself. 

This becomes interesting when $\Gamma$ is _infinite_, since then this gives us a sufficient method for deducing a set of logical sentences is satisfiable. This should sort of make sense since if you can find a "problem set" within $\Gamma$ that are not satisfiable, then of course you can say $\Gamma$ is not satisfiable since if you try to make every sentence in $\Gamma$ not contradict each other, you'll have to find a way around the problem child set. This is essentially the contrapositive of the above formulation:

**Compactness Theorem:** If $\Gamma$ is unsatisfiable, then there exists a finite subset of $\Gamma$ that is unsatisfiable.

To see the strength of compactness, we can use this final formulation of compactness along with the definition of entailment to get one more that shows a compact logics are able to reduce arguments to only some number of "key" premises:

**Compactness Theorem:** [If $\Gamma \vDash \Phi$, then $\Gamma^{\textrm{fin}} \vDash \Phi$.](https://xperimex.com/blog/intro-logic/#alternatecompact)

This follows from an equivalent statement of entailment: $\Gamma \vDash \Phi$ if and only if $\Gamma \cup \\{\neg\Phi\\}$ is inconsistent (i.e. contradictory/unsatisfiable).

Even if an argument appears to need infinite premises $\Gamma$, there's an equivalent formulation that only requires a finite subset $\Gamma^{\textrm{fin}} \subseteq \Gamma$ that is what really matters to our argument. This relation between finite satisfiability and actual satisfiability, in a sense, states that there are certain "pseudo-finite" sets of sentences; they may look infinite, but for what you can deduce from them, they are no better than being a finite set of sentences.

We'll first cover some examples on why I think this theorem needs to be more known, where it gets its name from, and finally a proof of the Compactness Theorem for propositional logic.

# Applications of Compactness

I've been going on a bit about this random theorem in a very abstract way—as logic tends to do. So, hopefully some examples will show just how useful this idea is; it gives us a way to extend results _to infinity_, which is not something that is all that common in math. Take _proof by induction_, for example: that gives us a way of showing a result holds for an arbitrary natural number, even as it approaches infinity. But to say the result holds at infinity is usually meaningless, even though we describe infinity or approaching infinity as that of the concept of an arbitrarily large number or similar.

## Graph Theory

Due to the nature of graphs being readily characterized by a set of vertices and edges, they are surprisingly easy to formalize them and their properties in logic, making results fall out much quicker than you might expect.

### Graph Coloring

Let's start with a concrete example: graph coloring. We say a graph $G$ of vertices $V$ and edges $E$ (we define a graph as the object $G=(V,E)$ to clearly define its vertices and edges) is $4$-colorable if every vertex can be assigned one of four colors (say, red, blue, green, and purple) where no two vertices of the same color are neighbors (that is, share an edge). We say a graph is $k$-colorable if we can assign every vertex one of $k$ colors with no two of the same color neighboring each other.

<img src="/img/compactness/Four_Colour_Map_Example.png">
<center style="color: #666;">
<p>We assign every region a vertex, and connect two vertices if the two regions they represent share a border. Despite looking as complicated as it does, the above map is still 4-colorable. Credit: Wikipedia</p>
</center>


**Theorem:** A graph is $k$-colorable if and only if all of its finite subgraphs are $k$-colorable.

**Proof:** $(\Rightarrow)$ Clearly if the whole graph is $k$-colorable, then all of its finite subgraphs are $k$-colorable.

$(\Leftarrow)$ For the other direction, we can write some logical sentences that describe the behavior of our graph. For a (undirected) graph $G=(V,E)$ with
* $V = \\{1,2,\cdots, m\\}$ as a set of verteices (we'll just label with numbers for convenience),
* $E \subseteq V \times V$ as set of edges (that is an irreflexive and symmetric relation),
  * I.e. if the pair $(1,2) \in E$, we mean there is an edge connecting vertices 1 and 2
* $C = \\{1,2,\cdots, k\\}$ as a set of colors, 

we'll define a set of sentence letters $P_{v,c}$ to represent $\textrm{"vertex} \ v \ \textrm{has color} \ c \textrm{"}$. With these simple sentences, we can write more complex descriptions of our graphs.

* **Vertex $v$ has at least one color:** $F_v := \bigvee\_{c=1}^{k} P\_{v,c}$
  * Either vertex $v$ has color 1, or color 2, or…, or color $k$
<!-- * **Vertex $v$ has at most one color:** $G_v := \bigwedge\_{1 \leq c\_1 < c\_2 \leq k} \neg(P\_{v,c\_1} \wedge P\_{v,c\_2})$ -->
* **Vertex $v$ has at most one color:** $G_v := \bigwedge\_{c\_1 = 1}^{k} \bigwedge\_{c\_2 = c\_1 + 1}^{k} \neg(P\_{v,c\_1} \wedge P\_{v,c\_2})$
  * For any two different colors $c\_1$ and $c\_2$, it is not the case that vertex $v$ has both colors
* **Vertices $u$ and $v$ don't have the same color:** $H\_{u,v} := \bigwedge\_{c = 1}^{k} \neg(P\_{u,c} \wedge P\_{v,c})$

Now let $\Gamma = \\{F_v \ | \ v \in V\\} \cup \\{G_v \ | \ v \in V\\} \cup \\{H\_{u,v} \ | \ (u,v) \in E\\}$. Now it should be fairly clear that $\Gamma$ is satisfiable and not contradictory if and only if $G$ is $k$-colorable. 

* The first two sets of sentences $\\{F_v \ | \ v \in V\\} \cup \\{G_v \ | \ v \in V\\}$ says that every vertex has at at least one color and at most one color, that is, every vertex has exactly one color.
* The last set $\\{H\_{u,v} \ | \ (u,v) \in E\\}$ says that no neighboring vertices share the same color. If $G$ is $k$-colorable, then by definition, no two adjacent vertices have the same color.

So an easy structure $A$ to define that satisfies $\Gamma$ is $A(P\_{v,c}) = T$; i.e. let $P\_{v,c}$ be true if and only if vertex $v$ has color $c$ (exactly as it denotes).

By assumption, every finite subgraph of $G$ is $k$-colorable, so every finite subset of $\Gamma$ is satisfiable. By the Compactness Theorem, then $\Gamma$ must be satisfiable, and hence all of $G$ is $k$-colorable. 

<center>
$\blacksquare$
</center>

We can then combine this with the famous Four Color Theorem:

**Four Color Theorem:** Every _finite_ graph is 4-colorable.

And by the above, we can extend this to the

**Infinite Four Color Theorem:** Every _infinite_ graph is 4-colorable.

**Proof:** Let $G$ be an infinte graph. Every finite subgraph of $G$ is 4-colorable, so by the above theorem, $G$ itself must also be 4-colorable. $\ \blacksquare$

The above method of formalizing and encoding behavior and relationships in math—and graph theory especially—alongside the Compactness Theorem gives us a nice, relatively straightforward strategy to extending finite results to the infinite.

### Kőnig's Lemma

Here's another result from graph theory that has its own handful of applications.

**Kőnig's Lemma:** Every locally-finite infinite tree contains an infinite branch.

Just to be clear, here are some definitions: 

* A **tree** is a special type of (undirected) graph characterized by being **connected** (there's a path between any two vertices) and that it is **acyclic** (there is no path from a vertex to itself without passing through a vertex more than once)
* A **locally-finite** graph is one where every vertex only has a finite number of edges/neighbors (known as the **degree of the vertex**)
* An **infinite graph** is a graph with an infinite number of vertices

So a tree can look something like

<!-- using the same graphics library from the Steiner porism blog draw a tree -->

<div id="example_tree" style="flex: 2; position: relative;"></div>
<script src="/js/compactness/example_tree.js"></script>

Doesn't that sort of look like a tree growing downward? Here are some useful terms to describe trees:

* The very top vertex is called the **root**
* A vertex is at **level $n$** if it takes $n$ edges to get to that vertex from the root. So the root can be defined by being the vertex at level 0.
* A vertex $x$ is the **parent** of another vertex $y$ (the **child**) if they share an edge, and $x$ is a level lower than $y$
* $x$ is the **ancestor** of $y$ if there is a path (i.e. a chain of parents) connecting $x$ and $y$, which we denote $x \preceq y$

So Kőnig's Lemma says every infinite tree either has an infinite-degree vertex or an infinite path. This should seem somewhat obvious, but as with anything involving infinity, it needs to be dealt with carefully. Since we can imagine building a tree where we carefully terminate every path to be finite. Sure, there may be arbitrarily long paths, but to show that there is an endless path as opposed to it being a very long finite path is a careful distinction. Moreover, Kőnig's Lemma, has ties to the axiom of choice, which should never be treated carelessly.

**Proof of Kőnig's Lemma:** As before, we'll do this with the Compactness Theorem. For a tree $T$, we'll define a series of sentence letters $P\_{x}$ to denote "we select vertex $x$ in our path". The idea will be that—as the sentence suggests—to find a structure that enumerates specific $P\_{x}$ at each level to tell us what our vertices will be in our path. The more complex sentences we will use and satisfy are:

* **We use at least one vertex at level $n$:** $F\_n := \bigvee\_{i=1}^k P\_{n\_i}$ where $\\{n\_1, \cdots, n\_k \\}$ is the set of vertices at level $n$
  * At level $n$, it must be the case we select either $n\_1$, or $n\_2$, or…, or $n\_k$.
* **We pick at most one vertex at level $n$:** $G\_n := \bigwedge\_{i = 1}^{k} \bigwedge\_{j = i + 1}^{k} \neg(P\_{n\_i} \wedge P\_{n\_j})$
  * For two different vertices $n\_i$ and $n\_j$ on level $n$, we do not pick both of them in our path
* **If we pick a vertex at some level, then we have to pick its ancestors:** $H\_{xy} := (P\_{y} \rightarrow P\_{x})$ where $x \preceq y$
  * Since every vertex (except the root) has one parent, there's only one path from the root to that vertex, so naturally a line of ancestors forms our path

Now let $\Gamma = \\{F\_n \ | \ n \in \mathbb{N} \\} \cup \\{G\_n \ | \ n \in \mathbb{N} \\} \cup \\{H\_{xy} \ | \ x \preceq y \ \forall x,y \in T\\}$. Now say there is a structure $A$ that satisfies $\Gamma$. Then it should be clear that the sequence of vertices $B = \\{x \in T \ | \ A(P_x) = T\\}$ would form an infinite path through our tree $T$:

* The set $\\{F\_n \ | \ n \in \mathbb{N} \\} \cup \\{G\_n \ | \ n \in \mathbb{N} \\}$ specifies we use exactly one vertex at each level, so there's this natural descent we can follow in our tree
* The last set $\\{H\_{xy} \ | \ x \preceq y \ \forall x,y \in T\\}$ says that if we pick one vertex in our tree to form our path, we also pick its ancestors, so we know there is this path of edges that we can actually follow

To show that there is such a structure, we'll use Compactness. Take any finite subset $\Gamma^\textrm{fin} \subseteq \Gamma$. Let $\\{x\_1, x\_2, \cdots, x\_k\\}$ be the set of vertices that have a corresponding sentence letter $P\_{x\_i}$ occurs in some element of $\Gamma^\textrm{fin}$. Since $\Gamma^\textrm{fin}$ only talks about a finite number of sentence letters and thus a finite number of vertices, it is also talking about a finite tree of height $n = \max\\{\textrm{Lev}(x_1), \cdots, \textrm{Lev}(x_k)\\}$ where $\textrm{Lev}(x_i)$ gives the level of vertex $x_i$. So let's pick some vertex at level $n$, and call it $\alpha$. Now the structure

<center>

$$ A(P_x) = \begin{cases} T \ \textrm{iff} \ x \preceq \alpha  \\\ F  \ \textrm{otherwise} \end{cases} $$

</center>

should satisfy $\Gamma^\textrm{fin}$. Since every vertex has exactly one ancestor per level (i.e. its parent, the parent of the parent, etc.), this structure only satisfies one vertex per level as we'd want, and by construction, obviously ensures we select a chain of ancestors to have a path. Even if our subset of our tree is disconnected, this structure would still satisfy $\Gamma^\textrm{fin}$ as if a vertex $x$ has no ancestors, it would vacuously satisfy $H\_{xy}$.

Since $\Gamma^\textrm{fin}$ was an arbitrary finite subset of $\Gamma$ and was satisfiable, by the Compactness Theorem, $\Gamma$ is satisfiable, and so for any locally-finite infinite tree, there is an infinite path through it.

<center>

$\blacksquare$

</center>

There are direct proofs, too, but Kőnig's Lemma itself can be seen as a weaker version of Compactness, so I think proving it both ways is informative.

## Order-Extension Principle

As the previous two examples with graphs have shown, results with Compactness are all about extending results in some way. Here's another one that doesn't necessarily rely on infinity like our previous ones, but first we'll need some definitions.

A **partial order** on a set $X$ is a relation $\preceq$ satisfying:

* **Reflexivity:** $\forall x \in X \ x \preceq x$
* **Antisymmetry:** $\forall x,y \in X \ (x \preceq y \wedge y \preceq x \Rightarrow x = y)$
* **Transitivity:** $\forall x,y \in X \ (x \preceq y \wedge y \preceq z \Rightarrow x \preceq z)$

A **total order** is a partial order with the additional restriction of

* **Connectedness:** $\forall x,y \in X \ (x \preceq y \vee y \preceq x)$

So a total order is something in which _all_ elements are able to be compared with one another, while in a partial order some may not be. So all total orders are partial orders, but not all partial orders are total orders. We denote an a **partially ordered set** as a pair of a set and a partial order defined on the set: $(X, \preceq)$.

An easy example of a total order is $\leq$ on the set of integers $\mathbb{Z}$: every pair of integers contains a greater element. An example of a partial order would be the relation "divides" on $\mathbb{Z}$: 2 does not divide 3, and 3 does not divide 2, so under the relation of divides, 2 and 3 would be incomparable.

It's worth mentioning that there are also **strict partial/total orders** that remove the reflexivity requirement (think the difference between $$<$$ and $\leq$ on the integers).

Now there is a natural question of whether or not we can remedy partial orders; is there a way we can maintain the structure of a partial order, but find a way to "fix" the incomparable elements. It turns out, we can do just that.

**Order-Extension Principle:** Any partial order may be extended to a total order.

For any partial order $\preceq$ on a set $X$, we can find a total order $\leq$ on $X$ such that $\forall x,y \in X \ (x \preceq y \Rightarrow x \leq y)$; we can preserve all the original relationships from the partial order, while adding all the missing relations to make a total order without contradicting the criteria above. This isn't completely obvious to me, specifically for the transitivity rule, since it is totally possible to imagine accidentally creating a chain that circles on itself, coming to the conclusion that $x \preceq y \preceq z \preceq \cdots \preceq x$, getting us that distinct elements should be equal to each other by antisymmetry.

Until now, we've been using the Compactness Theorem for propositional logic. For the following proof, we will use the Compactness Theorem for **first-order logic**, as this will allow us to talk about binary relations—which partial and total orders are. A relation $R$ on a set $X$ is a subset of $X \times X$, so we say that $xRy$ (or $x \preceq y$ in our case) is true iff the ordered pair $\langle x, y \rangle \in R$. The theorem is the exact same statement, just applies to a broader logic.

**Proof:** Let $X$ be a set, and $\preceq$ be a partial order on $X$. We then add the binary relation $\leq$ to represent our partial order, and $\forall x \in X$, we add a constant $c\_x$ to denote it. The following set of sentences will make up our $\Gamma$ that we'll show satisfiable:

1. $\leq$ is a partial order
  * This just specifies the content of $\leq$ so that it behaves how we want it to
2. Whenever $p \preceq q$, we add the sentence $c\_p \leq c\_q$ 
  * Similar to sentences of form 1), this keeps the structure between our original partially ordered set and our formalization
3. For every pair $p, q \in X$, we add the sentence $c\_p \leq c\_q \vee c\_q \leq c\_p$
  * This is how we'll extend our partial order to a total order by ensuring every pair of elements is compared

Now we'll show that $\Gamma$ is satisfiable. Take some finite subset $\Gamma^\textrm{fin} \subseteq \Gamma$. If $\Gamma^\textrm{fin}$ only contains sentences from rules (1) and (2), then we know $\Gamma^{\textrm{fin}}$ is satisfiable, since $\preceq$ on $X$—which $\leq$ is based on—is a non-contradictory object (I mean, it exists), so that gives us a valid guide to make our structure. So $\Gamma^\textrm{fin}$ is satisfiable in this case.

Otherwise, $\Gamma^\textrm{fin}$ has a finite number of sentences from rule (3). To satisfy these sentences, we will extend our partial order $\preceq$ to another one $\preceq^{\*}$. We can construct $\preceq^{\*}$ by induction:

* If there is only 1 sentence from rule (3) which isn't already satisfied by $\preceq$, then, say, $p$ and $q$ are incomparable. So let's just state that $p \leq q$, and add this to our relation. So we let 
<center>
$\preceq^{\*} \, = \,\, \preceq \cup \, \\{\langle p, q' \rangle \ | \ q \preceq q' \ \forall q' \in X \\} \cup \\{\langle p', q \rangle \ | \ p \preceq p' \ \forall p' \in X \\}$ 
</center>
We can't just add $\langle p, q \rangle$ alone to our relation $\leq$, since we need to ensure transitivity. That's why we add these sets of ordered pairs as opposed to just the incomparable pair.
* Now we do this exact same extension as before for the finite amount of sentences from rule (3), and we're done (we have no issue with the Axiom of Choice since we only need to consider finite numbers of sentences).

So $\preceq^{\*}$ gives us the precise model to show that $\Gamma^{\textrm{fin}}$ is satisfiable in this case. So in all cases, $\Gamma^{\textrm{fin}}$ is satisfiable, and by Compactness, $\Gamma$ is satisfiable too. (Note this isn't our total order, since it only acts on finite subsets of $\Gamma$, where we want our total order to act on all of $\Gamma$; $\leq$ is our total order)

So there is a structure in which $\Gamma$ is satisfied, which specifies that there is such a binary relation $\leq$ that acts as like a total order on $X$. We can define this total order $\leq^{\*}$ specifically by: $p \leq^{\*} q \Leftrightarrow (X, \leq^{\*}) \vDash c\_p \leq c\_q$ (we have to distinguish $\leq$ and $\leq^{\*}$ because one acts on our set, and the other acts as a binary relation in our language). 

<center>
$\blacksquare$
</center>

## Logical Results

I hope the above gives some more concrete examples of how the Compactness Theorem applies to useful mathematics, despite it being a purely logical result. That being said, it being from logic should make it no surprise there are a number of purely theoretic results that are just interesting to consider.

### Weakness of Infinity

First-order logic can readily [express the size of a model/structure](https://xperimex.com/blog/intro-logic/#numerical-claims) fairly easily with quantification. The simple sentence $\varphi\_{\geq 1} = \exists x (x=x)$ is satisfied if and only if the structure it is implemented in contains at least 1 element. $\varphi\_{\geq 2} = \exists x \exists y (\neg x = y)$ is satisfied iff the structure contains at least 2 distinct elements. In general, $\varphi\_{\geq n} = \exists x\_1 \exists x\_2 \cdots \exists x\_n (\bigwedge_{1 \leq i < j \leq n} \neg x_i = x_j)$ expresses the size of a structure to be at least of size $n$ elements.

Similarly, we can come up with upper bounds on the size of a structure with $\forall$: $\varphi\_{\leq n} = \forall x_1 \forall x_2 \cdots \forall x_{n+1}(\bigvee_{1\leq i < j \leq n+1} x_i = x_j)$. 

Combining these can then get us exact sizes of structures: $\varphi\_{= n} = \varphi\_{\leq n} \wedge \varphi\_{\geq n}$.

However, note that these only allow us to express _specific_ finite sizes of structures. As it turns out, it is **impossible** to express in general the finitude of a model.

--------------

**Claim:** There is no sentence $\Phi$ that can be satisfied in and only in finite models.

**Proof:** Suppose for a contradiction there was such a $\Phi$. Now consider the following set of sentences:

<center>

$\Delta\_{\infty} = \\{\varphi\_{\geq 1}, \varphi\_{\geq 2}, \varphi\_{\geq 3}, \cdots\\} = \\{\varphi\_{\geq n} \ | \ n \in \mathbb{N} \\}$

</center>

It should be clear that $\Delta\_{\infty}$ is only satisfied in an infinite model, since if the model was finite, then there would be some minimum element $\varphi\_i$ that would not be satisfied by expressing the finitude of a structure greater than the finite one in question. 

Now take $\\{\Phi \\} \cup \Delta_{\infty}$. This set of sentences should now be _unsatisfiable_, since $\Phi$ is only satisfied in finite models by assumption, while $\Delta_{\infty}$ is only satisfied in infinite ones. By the Compactness Theorem, there is a finite subset $\Gamma^{\textrm{fin}} \subseteq \\{\Phi \\} \cup \Delta_{\infty}$ that is unsatisfiable. If $\Gamma^{\textrm{fin}} \subseteq \Delta\_{\infty}$, then let $n$ denote the greatest $\varphi\_n \in \Gamma^{\textrm{fin}}$. Any model of size equal to or greater than $n$ clearly then satisfies $\Gamma^{\textrm{fin}}$. But since $\Gamma^{\textrm{fin}}$ is unsatisfiable, it must be the case that $\Phi \in \Gamma^{\textrm{fin}}$ as otherwise it would be satisfiable for the reason just listed. 

But then in any such structure of size greater than $n$ that satisfies the finite component of $\Delta\_{\infty}$, $\Phi$ must be unsatisfied to keep $\Gamma^{\textrm{fin}}$ unsatisfied. But then we have found a finite structure in which $\Phi$ is not satisfied, contradicting our assumption. $\ \blacksquare$

--------------

As it turns out, it is **also impossible** to express the _infinitude_ of a structure. 

--------------

**Claim:** There is no sentence $\Phi$ that cannot be satisfied in and only in infinite models.

**Proof:** Suppose for contradiction there was such a $\Phi$. Then for all finite structures $A$, it is the case that $A \nvDash \Phi$. Thus also in all such structures, $A \vDash \neg \Phi$. Now take the set of sentences $\Gamma = \\{\neg \Phi\\} \cup \Delta\_{\infty}$ (same $\Delta\_{\infty}$ as before). Any finite subset of $\Gamma$ is satisfiable, since any finite subset of $\Delta\_{\infty}$ is satisfiable for some finite structure, and $\neg \Phi$ is satisfiable in all finite structures. By the Compactness Theorem, $\Gamma$ is satisfiable, so there is some structure $A^+$ such that $A^+ \vDash \Gamma$ i.e. $A^+ \vDash \neg \Phi$ and $A^+ \vDash \Delta\_{\infty}$. Since $A^+ \vDash \Delta\_{\infty}$, we must have $A^+$ be an infinite structure. But by assumption, $A^+ \vDash \neg \Phi$ if and only if it is finite. Thus there cannot be any such sentence $\Phi$ that is satisfied in and only in infinite structures. $\ \blacksquare$

--------------

Just as propositional logic had the weakness of being able to not use quantifiers, we remedy it in strengthened first-order logic. In this way, this inability to express certain statements like the above might be seen as a flaw in first-order logic that needs some fix as well.

### Extending Arithmetic and the Hyperreals

The above proofs on the in-expressability of infinity are not all that interesting on their own, but they highlight a proof strategy using that specific set of $\Delta\_{\infty}$ to force certain properties to arise out of satisfying $\Gamma$; by its simple construction, $\Delta\_{\infty}$ does not usually affect finite satisfiability and hence satisfiability by Compactness, but forces our set $\Gamma$ to behave in a certain way. Here are some weirder consequence these types of proofs can result in.

We all know the **standard model of arithmetic**: that's just the natural numbers $\mathbb{N}$ with our normal understanding of addition, multiplication, etc. No more than the basic math we learned in elementary school. More formally, this is the standard model of the [Peano axioms](https://en.wikipedia.org/wiki/Peano_axioms), as $\mathbb{N}$ satisfies the axioms in the most "obvious" way that we are most familiar with.

But there are also **non-standard models** containing other numbers that are less commonly seen.

**Claim:** There is a non-standard model of arithmetic.

**Proof:** Let $P$ denote the Peano axioms. Now consider the set of sentences

<center>

$\Gamma = P \cup \\{x > 0, x > 1, \cdots\\} = P \cup \\{x > n \ | \ n \in \mathbb{N}\\}$

</center>

for some new symbol $x$. If we can show $\Gamma$ is satisfiable, then we'll have shown that there is a model that not only satisfies the Peano axioms, but also includes a "number" $x$ that is greater than all other natural numbers.

If we take any finite subset $\Gamma^{\textrm{fin}} \subseteq \Gamma$, then it is satisfiable by the standard model of arithmetic (as those satisfy the Peano axioms), with the addition that $x$ is a number greater than any number mentioned in $\Gamma^{\textrm{fin}}$ (since it'll only have finitely many sentences of the form $x > n$). By Compactness, since all finite subsets $\Gamma^{\textrm{fin}}$ are satisfiable, $\Gamma$ is satisfiable and has a model. 

Since a model of $\Gamma$ is a model of $P$ (as it is just a susbet of $\Gamma$), it will be some model of arithmetic. But also, any model of $\Gamma$ that corresponds to $x$ cannot be any typical natural number, since $\Gamma$ states that it is greater than any natural number. So there is a non-standard model of arithmetic. $ \ \blacksquare$

In other words, there is a way to interpret our standard rules and axioms for finite numbers, and somehow apply them to infinite quantities. I don't know about you, but I was taught _never_ to treat infinity like a number, but always as a concept or a process. Yet clearly it's not always contradictory or even bad logic to use them just like normal numbers.

Other non-standard models can have more complicated properties, like certain theorems failing that would be true in the standard model, but nonetheless it is interesting that Compactness implies that even such a model can exist and justifies our use of otherwise strange concepts.

For example, we can also show there is a **non-standard model of analysis**.

**Claim:** There is a non-standard model of (real) analysis.

**Proof:** Real analysis concerns itself with the ordered field of real numbers, so let's have $T$ be the set of sentences that all hold in this field. Now let's have 

<center>

$\Gamma = T \cup \\{0 < \epsilon < 1, 0 < \epsilon < \frac{1}{2}, \cdots\\} = T \cup \\{0 < \epsilon < \frac{1}{n} \ | \ n \in \mathbb{N\_{>0}}\\}$

</center>

Like before, if we can show that $\Gamma$ is satisfiable, we'll find a model that satisfies all everything we would expect of the real numbers (from $T$) while also showing that we can introduce a new positive number $\epsilon$ that is smaller than any other number. Again like before, any finite subset $\Gamma^{\textrm{fin}}$ is satisfiable, since any finite subset of $T$ holds in the original model of the real numbers, and for any finite subset of $\\{0 < \epsilon < \frac{1}{n} \ | \ n \in \mathbb{N\_{>0}}\\}$, we just let $\epsilon$ be a number smaller than $\frac{1}{n}$ for the largest $n$ that appears in that set. Since any finite subset $\Gamma^{\textrm{fin}}$ is satisfiable and has a model, by Compactness, $\Gamma$ also is satisfiable and has a model. But clearly this model is non-standard for $\epsilon$ is a positive number that is not identical to any other positive real number, as it is smaller than all other positive reals. $\ \blacksquare \ $ (This also shows the existence of a [non-Archimedean ordered field](https://en.wikipedia.org/wiki/Non-Archimedean_ordered_field))

We are often reminded in math that we cannot treat the infinitely large and the infinitely small however we want, but there is a rigorous sense in which we _can_ treat them familiarly as with all the other numbers. There is a sense in which you can do calculus and functional analysis without the need for limits, and just use these **hyperreal** or **non-standard real numbers**. If $h$ is one of these infintessimal hyperreal numbers (like $\epsilon$ from above), then we can define the derivative of a function $f$ at a point $x$ as

<center>

$\large{f'(x) = \textrm{st}(\frac{f(x + h) - f(x)}{h})}$ 

</center>

This looks just like the standard definition of the derivative, but instead of having a limit attached to it, we have this new function $\textrm{st}(\cdot)$ that acts as a "rounding function", of sorts, that turns our hyperreal fraction into a real number we can work with. If this interests you, here are some [nice notes on the topic](https://www.math.uci.edu/~isaac/NSA%20notes.pdf).

# Topology and the Axiom of Choice

If it isn't clear by all the proofs we've covered, the Compactness Theorem can lend its hand in many places of mathematics. To see just how powerful this is, we will need to explore its connections to other ideas we already briefly touched on. But, it's worth already pointing out, the name is a bit misleading, isn't it?

## Topological Compactness

**Compactness**, as it stands as a property, is more often found in **topology** than anything, as a way of generalzing the notion of "having no holes". For example, the set $(0,1)$ is not compact as it is missing its endpoints of 0 and 1. But, the closed interval $[0,1]$ is compact. The set of rational numbers $\mathbb{Q}$ is not compact as there are infinite holes in the _irrational numbers_: you can get as close as you want to any irrational number $r$ with a finite approximation in $\mathbb{Q}$, but clearly $r \notin \mathbb{Q}$, creating a "hole" of sorts.

**Definition 1:** A subset $S$ of Euclidean space $\mathbb{R}^n$ is **compact** if $S$ is closed and bounded.

* Closed, meaning that $S$ contains all of its _limit points_ (like the irrationals in the case of $\mathbb{Q}$: you can always get as close as you want to any irrational in $\mathbb{Q}$, but since they are not in $\mathbb{Q}$, it is not closed)
* Bounded, meaning that every point in $S$ is a finite distance away from each other (so even $\mathbb{R} = (-\infty, \infty)$ is not compact as it is unbounded)

In a way, compactness is the next best generalization of being _finite_; lots of the properties we'd expect of finite sets generalize to compact ones, even though compact sets can be infinite like $[0,1]$. In fact, a finite set is just a discrete and compact set. For example, if a set $S$ is finite, then any continuous function $f: S \rightarrow \mathbb{R}$ is bounded. This trivially holds since if $S$ is finite, then $f(S)$ is also finite and we can just find its maximum and minimum to bound it. However, if $S$ is compact, this still remains true [(Boundedness Theorem)](https://en.wikipedia.org/wiki/Extreme_value_theorem#Proof_of_the_boundedness_theorem).

This should ring a bell, as this sort of sounds like the talk of pseudo-finite sets of sentences from the start: 

**Compactness Theorem:** [If $\Gamma \vDash \Phi$, then $\Gamma^{\textrm{fin}} \vDash \Phi$.](https://xperimex.com/blog/intro-logic/#alternatecompact)

If a logic is compact, all infinite sets of sentences mimic the behavior of finite subset of themselves. If a space is compact, then a set from that space acts a lot like a finite set. As it turns out, there is a definition that is much definition of topological compactness that even more closely resembles this idea:

**Definition 2:** A set $S$ is **compact** if $S$ every _open cover_ of $S$ has a finite subcover.

* An open cover is a collection of open sets $C$ such that $S = \bigcup\_{X \in C} X$; an open cover is a collection of open sets in which every element of $S$ is in one of the open sets. For example, the collection of open intervals $\\{(-n,n) \ | \ n \in \mathbb{N}\\}$ is an open cover of $\mathbb{R}$.
* According to the [Heine-Borel theorem](https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem), Definitions 1 and 2 are equivalent
* We usually say _topologies/metric spaces_ are compact, as opposed to generic sets
* This definition applies to general topologies, not just Euclidean space $\mathbb{R}^n$

But this isn't the "real" idea of the Compactness Theorem; in all of our proofs, the version of Compactness we really cared about was with finite satisfiability:

**Compactness Theorem:** If $\Gamma$ is finitely satisfiable, then the whole set $\Gamma$ is satisfiable.

What we really liked was the ability to turn a problem of an infinite set into a more tractable, arbitrary finite one; we could take a **local property and make it a global property**. Topological compactness has a similar property:

**Finite Intersection Property:** Given a collection of sets $X$ in a compact space, if every finite subset of $X$ has a non-empty intersection, then the whole set has a non-empty intersection.
* If we wanted to show a collection of sets shared a common element, the finite intersection property would give us a way to demonstrate that like the Compactness Theorem

Referencing the Boundedness Theorem from above, we can think of it as if a function is locally bounded on a compact set, then it is also globally bounded.

There is, however, an even _tighter_ [connection between topology and propositional logic](https://iep.utm.edu/wp-content/media/CompactnessTheorem2.pdf).

**Claim:** The Compactness Theorem (of propositional logic) is equivalent to the claim that its associated valuation space is compact.
* A _valuation_ is an assignment of True or False to every sentence letter (equivalent to a structure for propostional logic)

Just as a reminder, here are the characteristics that determine a topology over a set $X$.

**Definition:** A **topological space** $(X, \mathcal{T})$ consists of a non-empty set $X$ and a family $\mathcal{T}$ of subsets of $X$ with the following properties:
* $X, \emptyset \in \mathcal{T}$
* $U,V \in \mathcal{T} \Rightarrow U \cap V \in \mathcal{T}$
* If $U_i \in \mathcal{T}$ for $i = 1,2,\cdots$, then $\bigcup U_i \in T$


**Proof:** Let $V$ be the set of all valuations of our propositional logic. For every sentence $\phi$, we will assign it a set of valuations in which it's true: $U(\phi) = \\{v \in V \ | \ v(\phi) = 1\\}$. Now notice that for sentences $\phi\_1$ and $\phi\_2$,

* $V = \bigcup U(\phi)$ ranging over all sentences $\phi$
  * This is easier seen by $V = U(P) \cup U(\neg P)$ for a sentence letter $P$
  * So the set $\\{U(\phi) \ | \ \phi \textrm{ is a sentence}\\}$ is a cover of $V$
* $U(\phi\_1) \cap U(\phi\_2) = \\{v \in V \ | \ v(\phi\_1) = 1\\} \cap \\{v \in V \ | \ v(\phi\_2) = 1\\} = U(\phi\_1 \wedge \phi\_2)$
  * This is by definition of the truth table for $\wedge$
  * So $U(\cdot)$ is stable under intersection (we got another $U(\cdot)$ after intersection)

These two properties implies that $\\{U(\phi) \ | \ \phi \textrm{ is a sentence}\\}$ forms a **basis of a topology** over $V$.

* A basis of a topology $\mathcal{B}$ is a family of open sets such that for a topology $\mathcal{T}$, every set in $\mathcal{T}$ can be expressed as a union of sets from $\mathcal{B}$
* The set $\\{(a,b) \ | \ a,b \in \mathbb{R}\\}$ is a basis for a (the standard) topology on $\mathbb{R}$

So we are interested in the topological space $(V, \mathcal{T})$ where $\mathcal{T}$ is the topology generated by the basis $\\{U(\phi) \ | \ \phi \textrm{ is a sentence}\\}$.

Now lets consider some set of sentences $\Gamma$. $\Gamma$ is unsatisfiable if and only if for all valuations, at least one sentence in $\Gamma$ is false. Or equivalently, $\Gamma$ is unsatisfiable if and only if for all valuations, at least one sentence's negation $\neg \varphi$ is true. In terms of our $U(\cdot)$ function, we can also say $\Gamma$ is unsatisfiable if and only if each valuation is in one of the open sets (i.e. members of the topology) of the form $U(\neg \varphi)$ for $\varphi \in \Gamma$ (since $U(\neg\varphi)$ is precisely the set of valuations that make $\neg\varphi$ true). Equivalently, this also means that $\Gamma$ is unsatisfiable if $\\{U(\neg\varphi) \ | \ \varphi \in \Gamma\\}$ is an open cover of our topological space $V$ (recall what an open cover is from above if this isn't clear). So this shows the equivalence that 

<center>

$\Gamma \textrm{ is unsatisfiable} \Leftrightarrow \\{U(\neg\varphi) \ | \ \varphi \in \Gamma\\} \textrm{ is an open cover of } V$ 

</center>

Now recall the Compactness Theorem: if $\Gamma$ is unsatisfiable, then there exists a finite subset $\Gamma^{\textrm{fin}}$ of $\Gamma$ that is unsatisfiable. So this gives us the equivalence:

<center>

$\Gamma \textrm{ is unsatisfiable} \Leftrightarrow \exists \Gamma^\{\textrm{fin}} \subseteq \Gamma \textrm{ that is unsatisfiable}$

</center>

We can make this an if and only if since the Compactness Theorem gives us the $(\Rightarrow)$ direction, and the $(\Leftarrow)$ direction comes trivially by definition of unsatisfiability: if there is an unsatisfiable subset of $\Gamma$, then of course all of $\Gamma$ is unsatisfiable.

So, given the Compactness of propositional logic, we can combine these biconditionals to deduce that the Compactness Theorem is equivalent to the claim:

<center>

If $\\{U(\neg\varphi) \ | \ \varphi \in \Gamma\\}$ is an open cover of the valuation space $V$, then there is a finite subset $\Gamma^{\textrm{fin}}$ of $\Gamma$ such that $\\{U(\neg\varphi) \ | \ \varphi \in \Gamma^{\textrm{fin}}\\}$ is an open cover of $V$.

</center>

And that is precisely the definition of a compact space (see Definition 2 above).

<center>
$\blacksquare$
</center>

We were working with normal propositional logic above, but note that we didn't really assume anything about our logic in the proof. If we are working with an arbitrary logic with its own rules, symbols, connectives, etc., we could show that the Compactness Theorem holds if $V$ is compact. If you're interested in further reading the connection between logic and topology, [Tychonoff's theorem](https://en.wikipedia.org/wiki/Tychonoff%27s_theorem) is actually the broader theorem that has the consequence of implying the Compactness Theorem (of propositional logic).

## The Axiom of Choice

The above shows, in my opinion, a fairly strong and fundamental use connection between logical compactness, to some more concrete math; it not only gives reason to its name, but also puts it into context of its broader origins.

There is an arguably EVEN MORE FUNDAMENTAL connection to math that the Compactness Theorem appeals to: the Axiom of Choice. We unwittingly saw this earlier when we proved König's Lemma, a weaker form of the Axiom of Choice.

To see this, it's worth considering a non-Compactenss proof of König's lemma. Here's a quick sketch:

**Alternative Sketch of König's Lemma:** Let $v_0$ be the root of our finitely-branching tree $T$ with children $\\{c_1, \cdots, c_k \\}$. Now let's define $S_i = \\{v \in T \ | \ c_i \textrm{ is the ancestor of } v \\}$. These sets encapsulate possible vertices we can reach from a given child of $v_0$. Since each vertex has precisely one parent, it follows that $T \ \backslash \\{v_0\\} = S_1 \cup \cdots \cup S_k$ (we trivially take each vertex to be one of its own ancestors; you are related to yourself, no?). Since $T$ is an infinite tree, at least one of the $S_i$ has to be infinite, too (if they were all finite, then there would only be a finite number of vertices in our tree; think [Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_principle)). So we pick a child $c_i$ with an infinite associated $S_i$, and let $v_1 = c_i$. Now we list the children of $v_1$ and simlarly construct there associated descendant sets $S_i$. At least one of the children of $v_1$ must have an infinite set of descendants, so we select that child and let it be $v_2$. We repeat this process over and over again, at each step, looking at the children of our previously selected vertex, and see which one has an infinite set of descendants, and let that be our next step in our infinite path $v_0, v_1, v_2, \cdots$ and so on. $\ \blacksquare$

There's a certain level of _choice_ necessary here. At each step, we're picking a vertex with a certain property (infinite descendants), which is fine since we were able to show that there is at least one vertex at each step with that property. However, if there are _more_ than one vertex, then which vertex do you choose? The need for the **axiom of dependent choice**, while weaker than the full axiom of choice, is nonetheless a choice principle that König's lemma depends on. In turn, you can also use [König's lemma to prove Compactness](https://tellerprimer.ucdavis.edu/pdf/2ch14.pdf/@@download/file/2ch14.pdf), giving the connection we want. 

Spelled out a bit more, the idea is that the Compactness Theorem can be thought of as finding an infinite path in a tree of sentence letters and their negations: say $\Gamma = \\{\Phi_1, \Phi_2, \cdots \\}$ using sentence letters $\\{P_1, P_2, \cdots\\}$, and we let our tree be a **binary tree**, with each vertex containing exactly two children. We will let then find a path through the tree, where each step at level $n$, we can either take $P_n$ or $\neg P_n$ to be true (this can be seen as going on either the left or right branch of the tree). Any finite path of this tree defines a valuation, and in combination with the finite satisfiability of $\Gamma$ and König's lemma, you can find an infinite path that determines a structure that satisfies all of $\Gamma$.

But again, there's a level of _choice_ necessary in picking a sentence letter or its negation. The Compactness Theorem can be seen as that specific choice principle. 

Some other choice principles that Compactness is equivalent to the [ultrafilter lemma](https://en.wikipedia.org/wiki/Ultrafilter_on_a_set), and the Completeness Theorem, and some others, all of which are strictly weaker than the full axiom of choice. But again, this should not be that surprising given what we've proven with Compactness, and the general nature of infinity itself. The [Order-Extension Principle](#order-extension-principle) (which strongly resembles the ultrafilter lemma in form), while weaker than the axiom of choice, cannot be proven without it. I sort of even led you astray earlier, as Tychonoff's theorem from topology—that implies the Compactness Theorem—is actually just equivalent to the full axiom of choice.

Something so controversial and so important (literally makes up an entire letter in ZFC—Zermelo-Frankel set theory with the axiom of choice) is inextricably tied to the Compactness Theorem.

# Proof of the Compactness Theorem

This last section is to offer a proof of the Compactness Theorem for propositional logic to close. Since this will be a proof of a logical result, this section would definitely benefit from [knowing some basic logic](http://xperimex.com/blog/intro-logic/), just at the very least to more easily read notation. 

Remember, propositional logic does not include the first-order quantifiers $\forall$ and $\exists$. To show Compactness holds in first-order logic (like we used in the Order-Extension Principle), we'll have to amend our proof.

We'll prove the following form of the Compactness Theorem:

**Compactness Theorem:** If $\Gamma$ is finitely satisfiable, then the whole set $\Gamma$ is satisfiable.

**Proof of Compactess:** The idea of the proof is we'll extend $\Gamma$ by squeezing in sentence letters in such a way that maintains finite satisfiability. By doing so, that will allow us to determine a structure that will satisfy $\Gamma$ by essentially finding what sentence letters we have to make true from our extended $\Gamma$, allowing us to carry out all the finite "comparisons" that force a structure to converge to one that will satisfy $\Gamma$. We'll break it down step-by-step.

**1) Definition of $\Gamma_i$:** By our hypothesis, say that $\Gamma$ is finitely satisfiable. The set of sentence letters occurring in $\Gamma$ are enumerable, so let's do that with $P_1, P_2, \cdots$. Now let's define the following series of supersets. Let $\Gamma_0 = \Gamma$ and

<center>

$$ \Gamma_{n+1} = \begin{cases} \Gamma_n \cup \\{P_{n+1}\\} \ \textrm{if it is finitely satisfiable}  \\\ \Gamma_n \cup \\{\neg P_{n+1}\\} \ \textrm{otherwise} \end{cases} $$

</center>

**2) Each $\Gamma_i$ is finitely satisfiable:** We'll prove this by induction. $\Gamma_0 = \Gamma$ is finitely satisfiable by assumption. Now suppose $\Gamma_i$ is satisfiable for $i \leq n$. For the sake of contradiction, assume $\Gamma\_{n+1}$ is not i.e. neither $\Gamma_n \cup \\{P_{n+1}\\}$ or $\Gamma_n \cup \\{\neg P_{n+1}\\}$ are finitely satisfiable. So there are finite subsets $\Delta$ and $\Sigma$ of $\Gamma\_{n}$ such that $\Delta \cup \\{P\_{n+1}\\}$ and $\Sigma \cup \\{\neg P\_{n+1}\\}$ are unsatisfiable. Each of these sets must include $P\_{n+1}$ and $\neg P\_{n+1}$ since both $\Delta, \Sigma \subseteq \Gamma\_{n+1}$ which is finitely satisfiable, so every finite subset of $\Gamma\_{n}$ is satisfiable. 

Further, clearly if $\Delta \cup \\{P\_{n+1}\\}$ is unsatisfiable, clearly $\Delta \cup \Sigma \cup \\{P\_{n+1}\\}$ is unsatisfiable (adding elements to a contradictory set won't make it less contradictory). Similarly, if $\Sigma \cup \\{\neg P\_{n+1}\\}$ is unsatisfiable, then so is $\Delta \cup \Sigma \cup \\{\neg P\_{n+1}\\}$. Since $\Delta \cup \Sigma \subseteq \Gamma\_{n}$ is a finite subset from a finite satisfiable set, $\Delta \cup \Sigma$ is satisfiable. So in any structure/valuation in which $\Delta \cup \Sigma$ is true, it must be the case that either the sentence letter $P\_{n+1}$ or its negation $\neg P\_{n+1}$ is true. But we just said that both the sets $\Delta \cup \Sigma \cup \\{P\_{n+1}\\}$ and $\Delta \cup \Sigma \cup \\{\neg P\_{n+1}\\}$ are unsatisfiable. 

This is a contradiction, so our initial assumption must be wrong, and $\Gamma\_{n+1}$ must be finitely satisfiable.

**3) Defining a structure from the $\Gamma\_i \textrm{s}:$** For every sentence letter $P_i$, we will define a structure $A$ as follows:

<center>

$$ A(P_i) = \begin{cases} T \ \textrm{if} \ P\_i \in \Gamma\_i  \\\ F \ \textrm{otherwise; i.e.} \ \neg P_i \in \Gamma_i \end{cases} $$

</center>

In step 2, we showed that for all $n$, $\Gamma_n$ is finitely satisfiable. Since

<center>
$\Phi_n = \\{P_i \in \Gamma_n \ | \ i \leq n\\} \cup \\{\neg P_i \in \Gamma_n \ | \ i \leq n\\} \subseteq \Gamma_n$ 
</center>

is a finite subset of $\Gamma_n$, the set $\Phi_n$ (just the set of sentence letters or their negations in $\Gamma_n$) is also satisfiable. By construction of our structure $A$, for every $n$, every sentence letter or its negation $\alpha \in \Phi_n$ is true in $A$. In particular, though, $\Phi_n$ is a finite subset, so we only need a finite amount of sentence letters to be assigned specific truth values to satisfy $\Phi_n$. So any structure which agrees (i.e. assigns the same truth value) to the members of $\Phi_n$ as $A$ does will also make satisfy $\Phi_n$ (this might seem obvious—if we give the same sentence letter values that satisfy $\Phi_n$ to those sentence letters, of course $\Phi_n$ will be satisfied—but this will be important in defining a full structure later).

**4) Showing $A$ satisfies $\Gamma$:** Suppose for contradiction $A$ does not satisfy $\Gamma$. That is, for some sentence $\psi \in \Gamma$, $|\psi|_A = F$. By definition of a logical sentence, $\psi$ must be of finite length, and hence only have finitely many sentence letters occuring in it. Let $P_k$ be the highest numbered sentence letter (from our previous ordering in step 2) that occurs in $\psi$. As we discued in step 3, every $\alpha \in \Phi_k$ is true in a structure that agrees with $A$. Hence, $\psi$ must be false in every such structure too (since such a structure would fully determine the truth value of $\psi$ in the exact same way as $A$ did).

So we can conclude that $\Phi_k \cup \\{\psi \\}$ must be unsatisfiable. But $\Phi_k \cup \\{\psi \\} \subseteq \Gamma_k$ by construction of $\Gamma_k$. So by the finite satisfiability of $\Gamma_k$, it must be that $\Phi_k \cup \\{\psi \\}$ is also satisfiable. Contradiction. Therefore, our structure $A$ must satisfy $\Gamma$.

Since we found a structure that satisfies $\Gamma$, obviously it is satisfiable. So we've shown that if $\Gamma$ is finitely satisfiable, then itself is satisfiable.

<center>
$\blacksquare$
</center>

# Conclusion

In a way, Compactness should sort of seem obvious. This idea of finite satisfiability basically allows us to make a bunch of finite comparisons of a property within a set, slowly but surely forcing the entire set to also conform to that property. In this case, it was satisfiability, but, say, if it was the property that every finite collection of numbers is prime, you'd expect your whole set to also be prime. Yet, obviously this is still a theorem, and in fact is not always true for all logics. [Second-order logic does is not a compact logic](https://builds.openlogicproject.org/content/second-order-logic/metatheory/compactness.pdfhttps://builds.openlogicproject.org/content/second-order-logic/metatheory/compactness.pdf). But when it is true, it is an immensely powerful tool, allowing us to extend seemingly local properties to global ones. Compactness has made a name for itself in analysis and topology, but logic has given us a method to take that beyond simple set theory to graphs, computability, and all the way to the foundational axioms that make up modern math.



