---START_METADATA---
{
  "title": "Constructive Proofs and Careful Practices",
  "author": "Adi Mittal",
  "summary": "Is this really math anymore?",
  "tags":[
    "me"
  ]
}


---END_METADATA---

Many who have dipped their toes in math for even a little bit will know that $\sqrt{2}$ is irrational. Like many other well known mathematical constants like $\pi$ and $e$, $\sqrt{2}$ can't be written out as a fraction, and its decimal expansion goes on forever without repeating. It's a novel fact, and comes with a fairly simple proof too.

**Claim: $\sqrt{2}$ is irrational.**

**Proof:** Suppose that $\sqrt{2}$ is not irrational. Therefore it is rational, and can be written as $\sqrt{2} = \frac{p}{q}$ where $p$ and $q$ are distinct coprime numbers (i.e. they don't share any factors in common; this is a way of sayiing that there is a unique way of writing $\sqrt{2}$ as a fraction in _lowest terms_). Squaring both sides and moving terms around, this equation becomes $2q^2 = p^2$. Therefore, $p^2$ is even, since it will always have a factor of 2 according to the lefthand-side of the equation. If $p^2$ is even, then $p$ is also even (if you're unsure of this fact, try some test cases and proving it!). Since $p$ is even, then let's rewrite it as $p=2n$. Plugging this into our equation yields: $2q^2 = p^2 = (2n)^2 = 4n^2$. Dividing both sides by 2 gives us $q^2 = 2n^2$. Similar to before, the equation implies that $q^2$ and hence $q$ is even due to that factor of 2 on the righthand-side. But this is a contradiction! $p$ and $q$ cannot simultaneously both be coprime and even (share a factor of 2). Hence, our initial assumption that the $\sqrt{2}$ is rational is wrong, and allows us to conclude that $\sqrt{2}$ is irrational. $\blacksquare$

It's not a long proof at all, and in the grand scheme of the history of math, pretty important, too. Supposedly, this was the first instance of irrationality being proven as a possible quality. More specifically, [legend](https://mathworld.wolfram.com/PythagorassConstant.html) has it that Hippasus of Metapontum was credited with showing that the $\sqrt{2}$ is _not rational_ (note the word choice) in the 5th century BCE while at sea, and upon sharing his amazing discovery, was instantly thrown overboard and left to drown. 

Arguably of more significance, the proof highlights a general technique we use not just in math, but everyday logic and reasoning: **proof by contradiction**. 

## Proof by Contradiction

I'm sure you have all heard someone say, "For the sake of argument…," at some point in your life before. The idea is to disprove any hypothetical argument by showing it leads to an impossibility. 

Let's say someone was arguing that Euclid was still alive today. Instead of remaining in utter shock at such a claim, here's a simple reply to show otherwise. For the sake of argument, let's assume Euclid <i>is</i> still alive. It is generall agreed that Euclid lived around 300 BCE, so if he is alive now, that would make him around 2300 years old now, which is crazy! Only a handful of people live past 100, let alone 1000 years. So it is safe to say, it is not the case that Euclid is still alive today.

In fact, the Latin phrase that describes proof by contradiction, "Reductio ad absurdum," literally means, "Reduced to the absurd/impossible".

Even if you haven't realized it before, you've probably used this same principle a lot in school. When taking a test, process of elimination can be an immensely helpful tactic to find the right answer to a question: if you can eliminate what you definitely know to be _false_, the rest of the options must include the _truth_.


At its core, we're using double negatives to prove a "positive" statement; we assume something to be false, show that it can't be, and therefore conclude, it's true since something that is not false must be true. If a number is not rational, it's irrational. If someone is not alive, they're dead. If someone's not guilty, they're innocent.

That last one feels weird, right? Just because there's no evidence to show someone is involved in a crime does not mean we always feel them to have been completely removed, right? In the previous examples, there's a strong sense of **complements**. "Rational" means "not irrational", so "not not irrational" is the same as "irrational". "Alive" and "not dead" are the same, so "not alive" is "not not dead" is "dead". But is "not guilty" really the same as "innocent"? Semantically, that's what it means. If you Google it, that's what you get. 

<img src="/img/constructive-proofs/notGuilty.png">
<center style="color: #666;">
<p>Of course, Google never lies.</p>
</center>

From a casual, conversational point, it might, but from a legal standpoint, there's a reason why we make a distinction. We don't live in a binary world. So, it's not totally clear that we can say "not guilty" is the same as "innocent", _even if that's what their definitions may mean_. Even if two things are definitionally polar opposites, we, as the humans behind the words' significance to begin with, add subtlety and nuance. 

"Not guilty" still insinuates that there's a feeling that there's something missing; we think they are guilty, but are unable to prove it. So even if we define "guilty" to be "not innocent", we might not want to say "not guilty" is the same as "innocent".

Which should come with a weird realization: if "guilty" is "not innocent", then "not guilty" is "not not innocent", which we said to not be equal to "innocent". **Double negatives don't always cancel out.**

Maybe our original definitions are wrong then? But it would be hard to define either "guilty" or "innocent" external to each other.

This may just seem like nitpicking, but it's important to consider this, since it puts into doubt such an intuitive, clear cut idea. If we can't use double negatives in one place, who's to say where else we can't use it? It might seem obvious at first that "not alive" must mean "dead", but have we really _shown_ that? Just because it's absurd to think about Euclid being alive right now, does our proof really _guarantee_ that? Is there something more to rational and irrational numbers that we might be missing? Just like with differentiating "not guilty" and "innocent", just because we have not been able to show someone guilty does not mean that they aren't.

Yet, **this is precisely the concept that proof by contradiction relies on**. We assume the opposite of what we actually want to prove, show it is impossible, then negate it to get to our original statement. But we don't _actually_ show anything directly about our claim, only that it is impossible that it _can't_ be true. If that's not valid—like it is the case between "guilty" and "innocent"—this no longer becomes a valid proof technique! 

Above, we've only demonstrated that $\sqrt{2}$ is not rational, when we wanted to show that it is irrational. Did we really do that?

## The Law of Excluded Middle

The easy answer to that is yes. We state a strict definition, and we can pretty clearly figure out when something is binary and when something has wiggle room. We can define a number to either strictly be rational or irrational. If it's not one, it has to be the other.

Technically, fine, yeah, we can do that. But that's kind of unsatisfying. But, there's a more fundamental question we should ask, since we're not just concerned with a number being rational or not, or someone's mortality, but proofs in general; we want to know if we can use proof by contradiction consistently. In general, we're trying to prove the _truth_ of claims, so what we really care about is the following question: if something is not true, is it false (and vice versa)?

Again, obviously yeah, right? What else could it be? All **declarative sentences** (sentences make a claim about something, i.e. not questions) have to be true or false. It's that simple. It either is or it isn't. "Cats are animals," is true, and, "The Earth is flat," is false. Easy. 

This is known as the **Law of Excluded Middle**, for, well, we exclude any type of middle value in between true or false. For those who like their logical formalities, if $\Phi$ is our claim about the world, then we say $(\Phi \lor \neg \Phi)$ is a **tautology** (that is, something that is always true). In natural language, this literally means "either our claim of the world is true or our claim of the world is not true", which just makes sense. 

----------

This forms one of the, and I can't make this up, **Three Laws of Thought** upon which "reasonable arguments" are based off of. These principles include:

1. The Law of Excluded Middle: every claim or its negation is true.
2. The Law of Non-Contradiction: nothing can simultaneously be true and false.
3. The Law of Identity: everything is identical to itself.

These three are usually taken as "common sense" axioms, and along with a few other assumptions build the basis of inference and deduction. Some might note that the first two laws might mirror each other through [De Morgan's laws](https://brilliant.org/wiki/de-morgans-laws/), but remember these don't actually explicitly state De Morgan's laws and we have no way of inferring that with these three principles alone. These three laws come up in many contexts, and have been refomalized many times over across history. Even the last Law of Identity, which seems almost pointless, has been taken by none other than Leibniz (yes, the same one from calculus) and been turned into [two laws](https://plato.stanford.edu/entries/identity-indiscernible/). That's for another day, though, and we will continue to only focus on the first law.

----------

Ok, then how about the following claim?

<center>
<p style="font-size: 30px"><i>This sentence is false.</i></p>
</center>

Is this true or false? If it's true, then it declares itself to be false. If it's false, then it must be giving the wrong information, and therefore it actually is declaring itself to be true. And if it's true…

Suddenly binary truth values don't seem to be as reliable as they first seemed. This sentence doesn't neatly fit into one cateogry. If you consider one side, it flips to the other. It's been aptly named the Liar's paradox for its deceptive nature, and there are many [attempted solutions](https://en.wikipedia.org/wiki/Liar_paradox#Possible_resolutions), of my favorites being the [fuzzy logic](https://plato.stanford.edu/entries/logic-fuzzy/) answer for its clarity and funny name. The number of attempts at resolving such an annoying sentence, though, should highlight that binary truth values are not always the right approach.

<!-- Talk about law of excluded middle -->

At this point, it's time we might have to reconsider the Law of Excluded Middle. Maybe this is just a dumb paradox that should be ignored as an edge case, but if you leave it as it is, then are we really going to be happy with what we have, knowing that there are some problems out there we just can't address?

## Intuitionism

Perhaps, we don't have to reject the Law of Excluded Middle, but instead come up with a _stronger_ type of reasoning. As we saw, the Law of Excluded Middle lines up pretty well with most things we observe in general, so we shouldn't discount it for that. Though, we might find a way that can avoid this issue we ran into with "not guilty" versus "innocent" altogether, and that would be foolproof from the start. 

Our proof by contradiction is known as a **non-constructive proof**, in that it reasons about a claim without ever _demonstrating_ the claim itself; there's no actual evidence presented for the thing we want to show true, since we try to make it appear "obvious" that there is no other way for such a claim to exist. 

----------

Our proof by contradiction for $\sqrt{2}$ being irrational is one example, but here's another one of my favorites.

**Claim: There exists irrational numbers $a$ and $b$ such that $a^b$ is rational.**

**Proof:** We know (and continue later to show) that $\sqrt{2}$ is irrational, so consider the number $\sqrt{2}^\sqrt{2}$. If this is rational, we're done. If this is irrational, then consider the number $(\sqrt{2}^\sqrt{2})^\sqrt{2} = \sqrt{2}^2 = 2$, which is rational, and hence we are done.

Never once did we actually deduce the rationality of $\sqrt{2}^\sqrt{2}$, but by exhausting the possible cases, it doesn't matter since every possibility leads to a conclusion that proves our claim.

----------

If we can find a **constructive proof** and actually manifest our claim in some way, then we don't have to worry about double negatives or anything like that since we directly showed what we wanted to.

We're now dabbling along lines of **intuitionistic logic** where, ironically, we are breaking our natural sense of double negation and relying solely on these constructive proofs to validate truths. Since, in a way, non-constructive proofs are just left in abstraction and are no more than just a construct of our mind. Intuitionism tries to separate ourselves in the proof by showing an objective way of realizing a truth.

Let's go back to our original proof by contradiction above:

**Claim: $\sqrt{2}$ is irrational.**

Remember, we don't trust double negatives, so we want to avoid saying "irrational" is the same as "not rational". What does it really mean for a number to be irrational?

Well, even though we don't want to say "irrational" is "not rational", we can draw inspiration from what the latter to find a better definition. We say a number $x$ is rational if it can be written in the form $x=\frac{m}{n}$ where $m$ and $n$ are integers. Or, equivalently, $x$ is rational if there exists integers $m$ and $n$ such that $x - \frac{m}{n} = 0$. Since we're using subtraction here, there's a natural way to think of rationality in terms of distance; a number is rational if it is distance 0 away from some integer fraction. This gives us a nice way to think of irrationality.

**Definition:** A number $x$ **irrational** if for all integers $m$ and $n$, $|x-\frac{m}{n}| \neq 0$. In other words, a number $x$ is irrational if it is some distance away from every rational number.

We add the asbolute value signs since we're quanitifying distance, and we don't care if a number is less than or greater than any rational number, just that it is not exactly equal to one of them.

----------

Some of you may be skeptical of what I've just laid out, since if you're familiar with mathematical quantifiers, it does look like there is some negation work that is not explicit has been used under the cover of my words. Even so, the point is we have arrived at a distinct, specific definition of the property we set out to prove, allowing us to try and prove a _positive_ claim as opposed to a negative one (like in proof by contradiction).

## The New Proof

We can rewrite our claim now as such:

**Claim: $\forall m,n \in \mathbb{Z}, \ |\sqrt{2} - \frac{m}{n}| \neq 0$**

That first part just means $m$ and $n$ are integers. We can now do our proof fairly quickly.

**Proof:** Note that $1<2<\frac{9}{4}$, therefore $1<\sqrt{2}<3/2$. So the only rationals we care about comparing $\sqrt{2}$ are the ones in between $1$ and $\frac{3}{2}$, since it's apparent that any number outside this range will have a non-zero distance away from $\sqrt{2}$. Therefore, let's take our integers $m$ and $n$ such that they are positive, and $1<\frac{m}{n}<\frac{3}{2}$. Let's also take a second to note we can add these inequalities, giving us that $\sqrt{2} + \frac{m}{n} < 3 \rightarrow n\sqrt{2} + m < 3n$.

Now we can do some simple algebra on our claim to show it true.

<center>
$\large{\bigg |\sqrt{2} - \frac{m}{n} \bigg | = \frac{|n\sqrt{2} - m|}{n} \cdot \frac{n\sqrt{2} + m}{n\sqrt{2} + m} = \bigg |\frac{2n^2 - m^2}{n(n\sqrt{2} + m)} \bigg |}$
</center>

Let's examine the numerator. Every integer, $x$, has some number of factors of 2 in its prime factorization i.e. $x = 2^\alpha \cdot C$ where C is the rest of its factors. When you square that integer, the number of 2s in the denominator doubles $x^2 = 2^{2\alpha}\cdot C^2$. So, we can write $2n^2 = 2 \cdot 2^{2\alpha} \cdot C_1^2 = 2^{2\alpha + 1} \cdot C_1^2$. Similarly, $m^2 = 2^{2\beta} \cdot C_2^2$. The key detail here is that $2n^2$ has an _odd number_ of factors of 2, while $m^2$ has an _even number_ of factors of 2, and therefore cannot be the same number! And since they are integers, then $|2n^2 - m^2| \geq 1$.* Continuing on,

<center>
$\large{\bigg |\sqrt{2} - \frac{m}{n} \bigg | = \bigg |\frac{2n^2 - m^2}{n(n\sqrt{2} + m)} \bigg | \geq \frac{1}{n(3n)} = \frac{1}{3n^2} }$
</center>

We simplified the denominator with the inequality we found at the start. But look at what we have here!

<center>
$\large{\bigg |\sqrt{2} - \frac{m}{n} \bigg | \geq \frac{1}{3n^2} }$
</center>

This means for any rational number with denominator $n$, $\sqrt{2}$ is at least a distance $\frac{1}{3n^2}$ away from that rational! Therefore, $|\sqrt{2} - \frac{m}{n}|$ can never equal 0, and we have thus proved our claim and that $\sqrt{2}$ is irrational.

## Conclusion

A lot of this can seem like nitpicking definitions and being overly pedantic, and to a certain extent I agree. I mean, even in the proof above we sort of implicitly assume $\sqrt{2}$ is irrational at (*)! When we said $2n^2 \neq m^2$, you could rearrange that to get $\sqrt{2} \neq \frac{m}{n}$. In our definition above, this would only constitute as being "not rational" as opposed to "irrational", but the differences in practicality seem so minute for this to be helpful. We even turned to the definition of rationality to come up with a "better" definition of irrationality. 

Even so, it's a good exercise in thinking about how we arrive at "facts" or "knowledge". When can we prove something by contradiction, and even if we can, is there a more convincing argument? Are there possible cases we might be leaving out and forgetting? Are there some things that we cam _only_ prove directly or indirectly (answer is [yes](https://math.stackexchange.com/questions/243770/can-every-proof-by-contradiction-also-be-shown-without-contradiction))?

These questions are what underpin so much that we naturally gravitate towards, and there's a reason why they've been examined so harshly. These questions literally [uprooted math](https://en.wikipedia.org/wiki/Russell%27s_paradox) and led to some of the most famous, mind-blowing results the [field has ever seen](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems). So always ask yourself, "What can I )_assume_, and what do I _know_?"