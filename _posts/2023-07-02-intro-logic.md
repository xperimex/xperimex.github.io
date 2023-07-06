---START_METADATA---
{
  "title": "The Language of Logic and Metatheoretic Magic",
  "author": "Adi Mittal",
  "summary": "Why even mathematicians should care about history",
  "tags":[
    "me"
  ]
}


---END_METADATA---

<!-- 
1. L1
  1a. ND1
2. L2
  2a. ND2
3. L=
  ND=

This is basically all of math: symbol manipulation. We don't check every right triangle to verify the Pythagorean theorem, we instead use rules that are sound.

1. metatheorems
2. soundness
3. completeness
4. compactness -->


>> **Pythagorean Theorem**: the sum of the squares of the length of the legs of a right triangle is equal to the square of the hypotenuse.

The Pythagorean theorem is perhaps the most famous statement in all of mathematics. $a^2 + b^2 = c^2$ is practically drilled into the minds of everyone that went through any form of secondary school education. 

But let me ask you: how do you _know_ it is true? There are many, many proofs of the Pythagorean theorem, but what makes you know that those fancy symbol manipulation is really legit? This might seem like an inane question, for math follows strict, rigorous, logical argument. But what makes this logical argument _valid_? Why do we trust logic so readily? There are many ideas that are intuitive that are false, and unintutive that are true, yet logic seems to get a pass from everyone? Why?

----------

Over the past year, I took my university's introductory sequence for logic, which was probably the most enlightening class I took all year. It forced me to reflect on not only what mathematics meant to me, but also what knowledge and deduction as a whole does too. This post is a summary collecting the highlights of the courses, so to act as a checkpoint to refer back to from future posts when I explore some of the most powerful ideas that have eluded me in what feels like a forgotten field of study.

As this will be a bit of a longer post, the table of contents below will guide each section in the sequence they should be read, and all context needed for one section will be given in anything before it. I'll be following the conventions and terminology as per V. Halbach's [_The Logic Manual_](https://users.ox.ac.uk/~logicman/) and A. Eagle's [_Elements of Deductive Logic_](https://ora.ox.ac.uk/objects/uuid:269144a3-6ca2-434b-90fe-75dd579cdbc1/download_file?file_format=application/pdf&safe_filename=elements.pdf&type_of_work=Book). Brief examples will be given, but for more examples and exercises, see the texts above.


1. [What even is logic?](#what-even-is-logic)
2. $\mathcal{L}_1$: A First Attempt
3. $\mathcal{L}_2$: Quantifiers Broaden Our View
4. $\mathcal{L}_=$: Now We Are Closer to Math
5. Principle of Mathematical Induction and Metatheorems
  1. Duality
  2. Expressive Adequacy and Functional Completeness
6. Revisiting Proof Systems
  1. Soundness
  2. Completeness
7. Compactness
8. Grice, natural language, and the flaws of formalisms


## What Even is Logic?

<!-- This seems like a broad question to open with, but it's an important one to make clear. -->

English is bad. Notoriously so. Try interpreting the following sentence: "The old man the boat." This might not even read as a correct sentence to some of you. The **lexical ambiguity** in that "man" is being used as a verb, even if it is more commonly a noun, is what makes this sentence lead one astray. Or, what about, "The professor said there would be an exam on Monday." Does the professor mean there will be an exam to be taken on the upcoming Monday, or was it that this past Monday he claimed there would be an exam in the indeterminate future? The **structural ambiguity** inherent to what "on Monday" qualifies makes the sentence on its own unclear.


English—and **natural language** as a whole—relies on expectations being met by both the speaker and listener for effective communication. We'll touch on this more later, but the inherent vagueness of our language, while gives it the nuance that we praise in art and literature, makes it really hard to analyze the truth of what people claim when they talk, especially in writing. Inflection and tone may give cues to what is precisely being said, but sometimes we want the content of our statement to be independent of any necessary human interpretation or judgement.

Take the following claim: "If Socrates is a man, then he is mortal. Socrates is a man. Therefore, Socrates is mortal." Few would dispute this argument, but there is very little content we needed to be okay with this argument. We don't care who Socrates is, or what it means to be a mortal or a man; there is something embedded into the nature of the argument that makes it good. "The Earth is flat if 2+2=5. 2+2=5. Thus the Earth is flat," is a perfectly good argument _assuming_ that 2+2=5, so while it might not be true, it certainly is still a good inference given those facts. "If $P$, then $Q$. $P$. Therefore, $Q$," seems to always be a sound claim.  

**Logic, in this way, is the study of valid arguments.** Given a set of **premises**, what **conclusions** can we deduce?

## $\mathcal{L}_1$: A First Attempt

Above we already were able to begin generalizing a little bit. We came up with the general form, "If $P$, then $Q$. $P$. Therefore, $Q$." $P$ and $Q$ could be _almost_ any sentence, and that argument would always hold. Almost any sentence, in that our sentences have to be **truth evaluable**; parsing questions or exclamations does not elicit any new information for our claims, so it does not really make sense to consider them. Even if we do not know if $P$ and $Q$ are actually true or false, we can still consider the different cases to check our argument structure. 

Here we have the beginning of our first formal language: the logic of $\mathcal{L}_1$. We have already been able to characterize sentences in the form of **sentence letters** i.e. $P$ and $Q$, but if we need more we can add $R$, $P_2$, $Q_{3984}$, and others if we need more basic sentences. But this is a bit primitive. 

### Connectives

What makes arguments in English interesting is not the basic sentences, but how we are able to link them together via "If… then…", "…and…", "…or…", and other conjunctions. Can we formalize these in any way?

Let's think about a simple one: "…and…". Just like before, we can only care about sentences that are true or false, so a natural question will be when is " $P$ and $Q$ " true or false? "…and…" unifies two disparate sentences, so if the whole sentence was true, we would expect what ever is on either side of the "and" to also be true. To say that, "Grass is green and the Earth is flat," is a true sentence seems to ignore what the sentence is claiming. "…and…" states both subsentences "Grass is green" and "The Earth is flat" together at once, so if we think it is true, then both necessarily seem to have to be true, too. We can represent this as a **truth table**. 

<center>
$
\begin{array}{c|c|c}
P & Q & (P \wedge Q) \\\ \hline
T & T & T  \\\
T & F & F  \\\
F & T & F  \\\
F & F & F  \\\
\end{array}
$
</center>

where $T$ means the sentence is true and $F$ false. Whenever $P$ and $Q$ are not both true, there conjunction is not either. As seen in the table above, we don't write "…and…" in $\mathcal{L}_1$, but rather use the symbol $\wedge$. 

We call $\wedge$ a _connective_, for it connects two sentence letters together. Below are some other commonly used English connectives formalized in $\mathcal{L}_1$ with their corresponding truth tables.

<center>
$
\begin{array}{c|c|c}
\textbf{English} & \mathcal{L}_1 & \textbf{Truth Table} \\\ \hline
\textrm{…and…}             & \wedge &  
          \begin{array}{c|c|c}
          P & Q & (P \wedge Q) \\\ \hline
          T & T & T  \\\
          T & F & F  \\\
          F & T & F  \\\
          F & F & F  \\\
          \end{array} 
  \\\ 
\hline
\textrm{…or…}              & \ \vee \ \ &   
          \begin{array}{c|c|c}
          P & Q & (P \vee Q) \\\ \hline
          T & T & T  \\\
          T & F & T  \\\
          F & T & T  \\\
          F & F & F  \\\
          \end{array}
  \\\
\hline
\textrm{It is not the case that…}          & \neg &   
          \begin{array}{c|c}
          P & \neg P \\\ \hline
          T & F \\\
          F & T  \\\
          \end{array}
\\\
\hline
\textrm{If…then…}          & \rightarrow &  
          \begin{array}{c|c|c}
          P & Q & (P \rightarrow Q) \\\ \hline
          T & T & T  \\\
          T & F & F  \\\
          F & T & T  \\\
          F & F & T  \\\
          \end{array}
\\\
\hline
\textrm{…if and only if…}  & \leftrightarrow &   
          \begin{array}{c|c|c}
          P & Q & (P \leftrightarrow Q) \\\ \hline
          T & T & F  \\\
          T & F & T  \\\
          F & T & T  \\\
          F & F & F  \\\
          \end{array}
\\\
\end{array}
$
</center>

It's worth taking a second to make sure you can get behind that these formalizations are reasonable. I won't go through all of them as we did with "…and…", but there are some things to take note of that do differ a bit in English.

* $\vee$ is specifically the truth table of **inclusive or**. In English, if one says "I'll either buy a pair of sneakers or sandals," we expect that person to usually just buy one option or the other, not both. $\vee$ allows the option for both, but does not require it to be true.
* $\rightarrow$ is technically different from "If…then…", even though I put them in the same row in the table. When we say, "If a butterfly lands in North America, then there will be a earthquake in Australia tomorrow", we can definitely say that is false if the butterfly does land in North America and no earthquake occurs, since they are definitely not causally related then. But if the butterfly does NOT land in North America, then we are in no position to say whether or not there is a relationship then since we have nothing to observe. Similarly, if an earthquake happens, we can't say if that was because of the butterfly or not regardless of what happens since correlation and causation are different. So really, the truth table for "If…then…" is
<center>
$
\begin{array}{c|c|c}
P & Q & \textrm{If} \ P \ \textrm{then} \ Q \\\ \hline
T & T & ?  \\\
T & F & F  \\\
F & T & ?  \\\
F & F & ?  \\\
\end{array}
$
</center>
We say it is not **truth functional** for those question marks there since we cannot evaluate whether that sentence is true or not, but for the sake of convenience, we use $\rightarrow$ with the completed table.

<!-- Talk about material implication vs. counterfactual later -->


### The Syntax of $\mathcal{L}_1$

Now, we can upgrade from sentence letters to complex sentences in our logic. We will define a sentence in $\mathcal{L}_1$ as follows:

<ol type="i">
<li> All sentence letters $P, Q, R, P_1,…$ are sentences. </li>
<li> If $\Phi$ and $\Psi$ are sentences, then $\neg\Phi$, $(\Phi \wedge \Psi)$, $(\Phi \vee \Psi)$, $(\Phi \rightarrow \Psi)$, and $(\Phi \leftrightarrow \Psi)$ are sentences. </li>
<li> Nothing else is a sentence. </li>
</ol>

Note the use of parantheses to bracket the sentences. This is our way to remove all structural ambiguity; there is no question that $(P \wedge (Q \vee R))$ is different from $((P \wedge Q) \vee R)$ as the parantheses explicitly denote the **scope** of the connectives to what subsentences they are linking together. There are conventions to remove these brackets for convenience, which I may default to later, but as a whole, are not important. 

The last detail we are missing are **interpretations**. Before, we were talking about how logic does not care about human judgement, but we can consider the judgement of the _universe_. What is the truth value of the sentence $\neg(P \wedge Q \rightarrow P \vee R)$? We could make a truth table, but clearly the truth of the sentence depends on the truth values of $P$, $Q$, and $R$. So under an **$\mathcal{L}_1$-interpretation** or **$\mathcal{L}_1$-structure** that assigns a truth value to every sentence letter, we can assign truth values to sentences. For example, if we let a structure $A$ be such that $|P|_A = T$, $|Q|_A = T$, and $|R|_A = F$, then $|\neg(P \wedge Q \rightarrow P \vee R)|_A = F$ by its truth table. The idea of a structure is that it is a **model of a universe**, where we designate certain sentences/facts to be true or false, and see how the rest of the other complex facts (that are linked by connectives) change in accordance to that possible universe.

**Notation:** $|\cdot|_A$ will stnad for the **meaning** or **semantics** under a structure $A$.

Now most logical sentences one encounters will be true sometimes, and false sometimes depending on the structure its evaluated in. But consider the sentence $(P \vee \neg P)$. Looking at its truth table,

<center>
$
\begin{array}{c|c}
P & P \vee \neg P \\\ \hline
T & T \\\
F & T  \\\
\end{array}
$
</center>

Every structure assigns a truth value to every sentence letter, so $P$ must be true or false in every structure, but regardless, $(P \vee \neg P)$ is always true. **Tautologies** or **logical truths** are in a sense, facts of nature, for no matter what universe we are looking at, "Either the sky is blue or it is not" will be true. [At least, usually](http://xperimex.com/blog/constructive-proofs/).

On the other hand, **contradictions** like  $(P \wedge \neg P)$ are false in every structure.

For future reference, the following notation will be helpful. For a given structure $A$ and sentences $\Phi$ and $\Psi$ :

* If $|\Phi|_A = T$, we say $A$ **satisfies** $\Phi$, written $A \vDash \Phi$
* If $|\Phi|_A = F$, we say $A$ _does not satisfy_ $\Phi$, written $A \nvDash \Phi$
* If $\Phi$ is a tautology, i.e. $A \vDash \Phi$ for all structures $A$, we just write $\vDash \Phi$
* If $\Phi$ is a contradiction, i.e. $A \nvDash \Phi$ for all structures $A$, we just write $\Phi \vDash$
* If $|\Phi|_A = |\Psi|_A$ for all strucutres $A$, we say $\Phi$ and $\Psi$ are **logically equivalent**, written $\Phi \equiv \Psi$

The last bullet point is just to say that there are lots of sentences that express the exact same truth value despite being written differently. For example, $P \wedge Q \equiv \neg(\neg P \vee \neg Q)$, so it's useful to say when to sentences are actually essentially the same.


### Sets of Sentences

In addition to the semantics of individual sentences, we can discuss _sets of sentences_ too. Consider $\Gamma = \\{\Phi, \Psi,…\\}$. 

* A structure $A$ satisfies $\Gamma$ if and only if $|\gamma|_A = T \ \ \ \forall \gamma \in \Gamma$, written $A \vDash \Gamma$
* We say $\Gamma$ is **consistent** if and only if there is a structure $A$ such that $A \vDash \Gamma$.


### Validity

We are finally in a position to start talking concretely and specifically what makes a good argument. 

When someone has argued a claim (conclusion) from a series of facts and assumptions (premises), we want there to be a substantive connection between their premises and the conclusion. Just like with our truth table for "If…then…", we know there is no connection if there is a scenario in which our premises are true and our conclusion isn't. **So if an argument is valid, then whenever the premises are true, the conclusion must also be true**.

We can formalize this a little bit with the notion of semantic entailment:

**Definition:** Given a set of sentences (premises) $\Gamma = \\{\Phi, \Psi,…\\}$ and a single sentence $\varphi$ (conclusion), we say that $\Gamma$ **semantically entails** $\varphi$ if and only if for all structures $A$, if $A \vDash \Gamma$, then $A \vDash \varphi$.

In other words, whenever all of our premises are true, our conclusion is true.

When $\Gamma$ semantically entails a sentence $\varphi$, denoted $\Gamma \vDash \varphi$, then $\varphi$ is a valid conclusion from premises $\Gamma$. It's called semantic entailment since we are working with the semantics of the individual sentences, namely their truth values. In the language of consistency, we can also say that $\Gamma \vDash \varphi$ if and only if $\Gamma \cup \\{\neg \varphi\\}$ is inconsistent.

**PROOF:** Suppose that $\Gamma \vDash \varphi$. Say that $A$ is a structure that satisfies $\Gamma$ i.e. $|\gamma|_A = T \ \ \ \forall \gamma \in \Gamma$. Then by our assumption, $|\varphi|_A = T$. By the rules for $\neg$, then $|\neg \varphi|_A = F$. For any structure $B$ that does not satisfy $\Gamma$, $\exists \gamma \in \Gamma \ \ \ |\gamma|_B = F$. So, for all structures, at least one sentence in $\Gamma \cup \\{\neg \varphi\\}$ is false, so it is inconsistent.

It's worth pointing out that we have two uses for the symbol $\vDash$, one relating structures to sentences, and another relating sentences to other sentences. The context will specify which use we mean, but it is useful to keep in mind that we might double up on symbols when their related meanings are so similar.

Let's look at the example we've been holding this whole time: "If $P$, then $Q$. $P$. Therefore, $Q$." If this is a valid argument, then the formalization would say that $P \rightarrow Q, P \vDash Q$ is correct. We can verify this just by truth tables:

<center>
$
\begin{array}{c|c||c}
(P \rightarrow Q) & P & \vDash & Q \\\ \hline
\color{blue}{T} & \color{blue}{T} & & \color{blue}{T}  \\\
F & T & & F  \\\
T & F & & T  \\\
T & F & & F  \\\
\end{array}
$
</center>

Whenever the premises are true, so is the conclusion. While technically an okay way to check, it is inefficient, since for every additional sentence letter in our premises, it doubles the number of rows in our truth table to check. Instead, we can show it just as easily with a proof by contradiction. Suppose our argument is invalid i.e. there is a structure where our premises are true and our conclusion is false.

<center>
$
\begin{array}{c|c||c}
(P \rightarrow Q) & P & \vDash & Q \\\ \hline
T & T & & F  \\\
\end{array}
$
</center>

But, if $P$ is true and $Q$ is false, then by the rules for $\rightarrow$, $P\rightarrow Q$ is false.

<center>
$
\begin{array}{c|c||c}
(P \rightarrow Q) & P & \vDash & Q \\\ \hline
T & T & & F  \\\
F &   & & 
\end{array}
$
</center>

That contradicts our assumption that $P\rightarrow Q$ was true as a premise. So, it can't be the case that our argument is invalid.

#### Quicks of Validity

Keep in mind our definition of a valid argument: $\Gamma \vDash \varphi$ if and only if whenever $\Gamma$ is satisfied, so is $\varphi$. Now consider the argument $P \wedge \neg P \vDash Q$. Is this valid? Even though the premises have nothing to do with the conclusion, surprisingly, **this is valid**. $P \wedge \neg P$ technically satisfies the condition that whenever it <i>is</i> true (never), so is $Q$; it never has the chance to fail our definition. For this we can write $P \wedge \neg P \vDash$ since it will entail everything by our definition, and anything can go on the right hand side of the turnstile, and this is why we shorten all contradicitions accordingly.

Similarly, we can do the same for tautologies, $\vDash P \vee \neg P$ since they will always be true, so certainly whenever whatever on the left is true, so is the tautology.

So we can have weird technically valid arguments like, "The sky is blue and not blue, therefore the Earth is flat," or similarly that "Squares have 5 corners, so either it will rain today or it won't." These both read as absurd, but they are technnically valid with our definition. These might seem like a flaw for our definition, but for the convenience of all the other arguments, I think it is worth accepting as an oddity of the system. You can also think of them as just sort of fact-of-the-matter statements; tautologies are entailed by everything since they don't care what makes you think they are true, they just are. Similarly with contradictions, your starting set of premises are just inconsistent, and it is just a bad argument; if you're willing to accept bad premises, you can deduce bad conclusions.



## Proof Systems and Natural Deduction

We have established quite a bit already in $\mathcal{L}_1$, but it is still not that elegant of a system. We now have a way to formalize English arguments, but our ways to validate them are still unwieldy. The only two ways we really have to verify statements is, in essence, brute force checking $\mathcal{L}_1$-structures to see if the argument fails anywhere. This is no better than checking every right-angled triangle to see if it satisfies the Pythagorean theorem. We want a systematic way to go about our arguments.

We want a **proof system**: given a set of premises $\Gamma$, we want to be able to manipulate them in some way to conclude $\varphi$. 

For example, consider the argument $P \wedge Q, R \vDash P \wedge R$. Without checking any structures and evaluating truth tables, this argument should make sense. If we know $P \wedge Q$, i.e. $P$ _and_ $Q$, we certainly know both $P$ and $Q$ are true individually, so we know $P$. Since we also know $R$ is true, then again it seems obvious we know $P$ _and_ $R$ is also true together i.e. $P \wedge R$. We did not touch any semantics at all of our premises or conclusion (I used the word "true" as a means for accepting a premise), but rather just moved our sentence letters around in a sensible way to get the conclusion.

We just found two rules that make sense to have in our proof system: $\wedge$-Introduction and $\wedge$-Elimination.

<center>
$
\begin{array}{ccc}
& \wedge\textrm{-Intro} & \\\
\Phi &   & \Psi \\\ \hline 
 & \Phi \wedge \Psi &   \\\ 
\end{array}
\ \ \ \
\begin{array}{c}
\wedge\textrm{-Elim1} \\\
\Phi \wedge \Psi   \\\ \hline 
 \Phi  \\\ 
\end{array}
\ \ \ \
\begin{array}{c}
\wedge\textrm{-Elim2} \\\
\Phi \wedge \Psi   \\\ \hline 
 \Psi  \\\ 
\end{array}
$
</center>

So our above proof of $P \wedge Q, R \vdash P \wedge R$ would look like

<center>
$
\begin{array}{ccc}
\underline{P \wedge Q} &   &  \\\
P &  & R  \\\ \hline
  & P \wedge R &   \\\ 
\end{array}
$
</center>

Thinking through what the other connectives mean can give some intuitive rules for them too:

<center>
$
\begin{array}{c|c|c}
\textbf{Connective} & \textbf{Introduction} & \textbf{Elimination} \\\ \hline
\wedge &  \begin{array}{c}
          \begin{array}{cc}
          \Phi & \Psi \\\
          \end{array} \\\ \hline
          \Phi \wedge \Psi
          \end{array}     
        & \begin{array}{c}
          \Phi \wedge \Psi   \\\ \hline 
          \Phi  \\\ 
          \end{array}
          \ \ \ \
          \begin{array}{c}
          \Phi \wedge \Psi   \\\ \hline 
          \Psi  \\\ 
          \end{array}          \\\  \hline
\vee &  \begin{array}{c}
          \Phi   \\\ \hline 
          \Phi \vee \Psi  \\\ 
          \end{array}
          \ \ \ \
          \begin{array}{c}
          \Psi   \\\ \hline 
          \Phi \vee \Psi  \\\ 
          \end{array}
          &   \begin{array}{c}
        \begin{array}{ccc}
                      & [\Phi] & [\Psi] \\\
                      & \vdots & \vdots \\\
        \Phi \vee \Psi & \Delta & \Delta \\\
        \end{array} \\\ \hline
        \Delta
        \end{array}  \\\  \hline
\neg &  \begin{array}{c}
        \begin{array}{cc}
        [\Phi] & [\Phi] \\\
        \vdots & \vdots \\\
        \Psi & \neg\Psi \\\
        \end{array} \\\ \hline
        \neg \Phi
        \end{array}   
     &  \begin{array}{c}
        \begin{array}{cc}
        [\neg\Phi] & [\neg\Phi] \\\
        \vdots & \vdots \\\
        \Psi & \neg\Psi \\\
        \end{array} \\\ \hline
        \Phi
        \end{array}  \\\  \hline
\rightarrow &   \begin{array}{c}
                [\Phi] \\\
                \vdots \\\
                \Psi   \\\ \hline 
                \Phi \rightarrow \Psi  \\\ 
          \end{array}  
            &  \begin{array}{c}
                \begin{array}{cc}
                \Phi & \Phi\rightarrow\Psi \\\
                \end{array} \\\ \hline
                \Psi
                \end{array}   \\\  \hline
\leftrightarrow &  \begin{array}{c}
                    \begin{array}{cc}
                    [\Psi] & [\Phi] \\\
                    \vdots & \vdots \\\
                    \Phi & \Psi \\\
                    \end{array} \\\ \hline
                    \Phi\leftrightarrow\Psi
                    \end{array}  
                 &  \begin{array}{c}
                    \begin{array}{cc}
                    \Phi & \Phi\leftrightarrow\Psi \\\
                    \end{array} \\\ \hline
                    \Psi
                    \end{array}  
                    \ \ \ \
                    \begin{array}{c}
                    \begin{array}{cc}
                    \Psi & \Phi\leftrightarrow\Psi \\\
                    \end{array} \\\ \hline
                    \Phi
                    \end{array} 
                     \\\ 
\end{array}
$
</center>

The square brackets are _assumed premises_. They are not explicitly given, but, for the sake of argument, you can take a "fake" premise to demonstrate a rule, and discard that assumption after you've shown your rule. Some other comments on the rules:

* $\vee$-Intro basically says if you know one sentence, appending any other sentence via $\vee$ is certainly fine since you already have a known fact. $\vee$-Elim says if you know one or the other (or both) of $\Phi$ and $\Psi$ is true, but do not know which, you can deduce a new sentence $\Delta$ if it follows from either of the sentences.
* $\neg$-Rules are basically proofs by contradiction. If $\Phi$ results in both $\Psi$ and $\neg\Psi$, $\Phi$ can't be held true since it would prove a contradiction. Similarly with assuming $\neg\Phi$.
* $\rightarrow$-Intro follows in line with for-the-sake-of-argument. If we _assume_ $\Phi$, and can deduce $\Psi$, then regardless if we know $\Phi$ or not, we can say that it would logically imply $\Psi$ as well. 

This specific proof system is known as **natural deduction**. These proof trees give us a direct way to interact with our premises in a way that we might normally do in English. However, some of these proofs do become huge quite quickly. Consider the proof of $P\rightarrow (Q\leftrightarrow R) \vdash P \wedge Q \leftrightarrow P \wedge R$:

<img src="/img/intro-logic/sample_proof.png">

Some of you might have noticed a small change in notation; I've been using $\vdash$ as opposed to $\vDash$. In proofs, since we are not considering structures and the truth values of our sentences, semantic entailment does not seem like the right way to describe the relationship between our premises and the conclusion. We now say $\Gamma \vdash \varphi$ if $\Gamma$ **syntactically entails**, or simply **proves** via our proof system, $\varphi$, since we are strictly only concerned with the symbols and the actual writing of the sentence as opposed to its truth.

But we should not forget our original goal of logic: to demonstrate arguments are valid, which involves $\Gamma \vDash \varphi$, which seems to have a very different meaning to $\Gamma \vdash \varphi$. It happens that our choice of rules above was not random. As we will see later, natural deduction is a **sound system**:

**Soundness Theorem:** If $\Gamma \vdash \varphi$, then $\Gamma \vDash \varphi$.

Soundness can be thought of as the quality of _preserving truth_; we can rely on our proofs to deduce meaningful, accurate sentences in our formal language. Given our rules, we would hope that these are sound, since they are based on how people typically argue in real life, too. You might come across other proof systems, but I can guarantee you, they are designed to be sound and useful. 

<!-- ### Completeness

It's worth noting the direction that the Soundness Theorem argues: if something is provable, then it makes a valid argument. -->

## $\mathcal{L}_2$: The Logical Quantifiers

Let's go back to our very first argument we discussed: "If Socrates is a man, then he is mortal. Socrates is a man. Therefore, Socrates is mortal." We were able to show it is valid in $\mathcal{L}_1$ by formalizing it, and either checking its truth table or with our proof system. Let's look at a very similar argument. "All men are mortal. Socrates is a man. Therefore, Socrates is mortal." Perfectly reasonable. If we formalize this with our current logic, though, we end up with $P, Q \vDash R$, where $P$ is "All men are mortal," $Q$ is "Socrates is a man", and $R$ is "Socrates is mortal". Clearly this is not a logical argument in $\mathcal{L}_1$, since we can just specify a structure where $|P|_A = |Q|_A = T$ and $|R|_A = F$ since they are separate sentence letters.

### Predicates and Constants

$\mathcal{L}_1$ is good for keeping sentences simple, but it lacks the nuance of the **predicates** English has; we will never be able to show the relation of men and mortality, as we can't express "…are mortal" nicely; relations between simpler sentences are covered by connectives, but relations between objects are not. We need something to convey **properties** somehow. Ideally, we want to be able to say Socrates is mortal, by first saying he is a man, and to further show that anything that _has the property of being a man_ also _has the property of being mortal_.

To formalize "Socrates is a man", we can introduce predicates kind of like connectives. Let's have $P^1$ stand for "…is a man", and for convenience, we'll let the letter $|a|_A$ stand for the **constant** Socrates (remember, $|\cdot|_A$ denotes meaning). Then $P^1a$ is a nice compact way to write out "Socrates is a man".

Now how do we formalize that this is a true sentence? We don't want to have to explicitly say $|P^1a|_A = T$, since then we would have to specify that for _everything_ that is a man, there is a constant associated with that human and that when put together with $P^1$ forms a true statement.

Let's take a step back for a moment. If you had to explain to an alien precisely what a human is, how would you do it? You might describe some key traits for them, but the easiest way, in a universal sense, is just to show them by example. Give them a list of humans and have them extrapolate on their own. So perhaps a good semantics for predicates is to exactly that: we will let $|P^1|_A = \\{\textrm{Socrates}, \textrm{Feynman}, \textrm{Noether},…\\}$.

Then a natural way of defining truth would be that $|P^1a|_A = T$ if and only if $|a|_A \in |P^1|_A$. That sentence makes sense, since $|a|_A$ is an object/noun, and $|P^1|_A$ is a set of objects, so we can evaluate that, and since $|P^1|_A$ explicitly states all the objects that have that property, seeing if something has that property (like being a man) is a matter of being in the list of objects said to have it. "Socrates is a man" is true iff "Socrates" has the property "is a man" iff Socrates is in the set of all men.

I've been putting a small superscript in our predicate $P^{\color{red}{1}}$. This is the <span style="color:red">arity index</span>, and basically says how many objects the predicate takes as an input. So, naturally we can have indices greater than 1 as well.

The predicate "…like…" is a perfectly good predicate, but it now qualifies _two_ objects and relates them to each other. So if Alice likes Bob, we can write this as $P^2ab$ with the relevant meanings for $P^2$ as "…likes…" and the constants referring to Alice and Bob respectively. But note here, **order matters**. Just because Alice likes Bob, that does not necessarily mean Bob likes Alice and so for some structures it might be the case that $|P^2ab|_A \neq |P^2ba|_A$.

Just as arity 1 predicates had a set of objects as its semantics, arity 2 has a set of **ordered pairs** i.e. $|P^2|_A = \\{\langle \textrm{Alice}, \textrm{Bob}\rangle, \langle \textrm{Davis}, \textrm{Edward} \rangle, \langle \textrm{Jack}, \textrm{Jack} \rangle \\}$ would be a reasonable way to denote the predicate. And similarly, we say $|P^2ab|_A = T$ if and only if $\langle |a|_A, |b|_A \rangle \in |P^2|_A$. So 2-ary predicates define **binary relations**. 


<center>
$
\begin{array}{c|c|c}
\textbf{Expression} & \textbf{Formalization} & \textbf{Semantic Value} \\\ \hline
\textrm{constants} & a,b,c,… & \textrm{objects}   \\\ 
\textrm{sentence letter} & P,Q,R,… & \textrm{truth value} \ (T,F)  \\\ 
\textrm{unary predicate} & P^1,Q^1,R^1,… & \textrm{set of objects}  \\\ 
\textrm{binary predicate} & P^2,Q^2,R^2,… & \textrm{set of ordered pairs}  \\\ 
\textrm{ternary predicate} & P^3,Q^3,R^3,… & \textrm{set of ordered triples} \\\ 
\textrm{n-ary predicate} & P^n,Q^n,R^n,… & \textrm{set of n-tuples} \\\ 
\end{array}
$
</center>

In practice, the arity index usually doesn't need to be written, as it will be implied by the number of constants attached to the predicate i.e. $Pabc$ is clearly a ternary predicate, as if it wasn't, it would either be incomplete ("a hates b and c, but likes ?"), or it would accept too many arguments ("If a then b"; where does c go?). So in sentences like $Pa \wedge Pab$, each $P$ stands for a different predicate as implied by their arity.

This is the start of the more robust logic $\mathcal{L}_2$. Just for the formalities, here are some things we need to keep in mind over $\mathcal{L}_1$.

* Sentence letters are the same as 0-ary predicates; they accept no arguments.
* In an $\mathcal{L_2}$-structure, we assign semantics to every predicate (either truth values or sets to predicates), as well as an object to every constant
* Connectives work the same as they have done before
* Truth for predicates are equivalent to membership of a set

### Quantifiers

So we now have a good way of storing properties of objects via the predicates they satisfy, so we have a good way of saying "Socrates is a man". But now we need a way of saying, "All men are mortal". It's that "all" that makes this difficult, since it does not refer to a specific man, but a _generic_ one. 

Let's generalize the sentence a bit more. What it really is saying, "If one is a man, then they are mortal." Now we have this nice "one" acting a **placeholder** name for our generic man. Actually, for a generic _anything_. If we are talking about a turtle, we cannot say if they are mortal by this sentence since they have nothing to do with that claim. 

In an even more mathematical way of looking at the sentence, it could read as, "For all $x$: if $x$ is a man, then $x$ is mortal." That "for all" appears enough, we have formalize it as $\forall$, the **universal quantifier**. You might have seen this appear in math, and if not, I've already been abusing its convenience in some previous proofs on this post.

So our sentence would look like $\forall x(Px \rightarrow Qx)$ where $P$ and $Q$ are predicates for being a person and mortal respectively.

$x$ is clearly not a constant, since, well, it is not constant; it does not have a fixed meaning. We then aptly call it a **variable**. But clearly, variables _can_ take on certain meanings, so we also have **variable assignments** $\alpha, \beta,…$ that allow us to arbitrarily assign variables meanings in a formal way. For example, if we let $x$ mean Socrates in our structures, i.e. $|x|_A^\alpha = \textrm{Socrates} = |a|_A$, then our argument works by the truth rules for $\rightarrow$.

The "opposite" of the universal quantifier is the **existential quantifier** $\exists$, which instead of saying our sentence applies to all possible objects, $\exists x \Phi$ only claims that there is at least one object that satisfies the sentence $\Phi$. 

---------

The duality of the quantifiers can be found even in natural language. "Everything is not a cow," as in $\forall x \neg Px$, is the same as saying, "There does not exist a cow", or $\neg \exists x Px$. Similarly, "There is something that is not a cow," or $\exists x \neg Px$, is equivalent to saying "Not everything is a cow" or $\forall x \neg Px$.

---------

However, not every **formula** with variables and quantifiers make a sentence. Consider $\forall x \exists y(Px \vee \neg Qxy \rightarrow Rz)$. This doesn't make that much sense since $z$ is just hanging out as a **free variable** as there is no quantifier claiming anything about $z$. And since $z$ is a variable, it's not like it has any semantic meaning, either. So we wouldn't call this a sentence, but a formula. Variables that are not free are **bound**.

**Definition:** A formula is a sentence if and only if it has no free variables.

Similarly, $\forall y Qy \rightarrow Py$ wouldn't be called a sentence either, as depite how it looks, there is a free variable in $Py$ even though there is a $\forall y$ in the formula. You usually need parantheses to specify what the quantifiers bind. $\forall y(Qy \rightarrow Py)$ is a sentence, while the previous expression is not.

### Domains

The final extra detail we need is to specify _what_ meanings our variables are allowed to be assigned. So in an $\mathcal{L}_2$-structure, we also specify a **domain** that specifies all the possible objects in the "universe" that we are discussing. All constants are assigned meanings from the domain, and our quantifiers use variable assignments that range over the domain.

### Satisfaction and Truth in $\mathcal{L}_2$

Suppose $\Phi$ and $\Psi$ are $\mathcal{L}_2$ formulas, $v$ is a variable, $A$ is a structure, and $\alpha$ is a variable assignment. We say **$\alpha$ satisfies $\varphi$ under $A$**, or $|\varphi|_A^\alpha = T$, in the following way: 

* $|\Phi v_1v_2…v_n|_A^\alpha = T$ iff $\langle |v_1|_A^\alpha, |v_2|_A^\alpha,…, |v_n|_A^\alpha  \rangle \in |\Phi|_A^\alpha$ where $\Phi$ is an n-ary predicate and each $v_i$ is a variable or constant
* $|\neg\Phi|_A^\alpha = T$ iff $|\Phi|_A^\alpha = F$
* $|\Phi \wedge \Psi|_A^\alpha = T$ iff $|\Phi|_A^\alpha = T$ and $|\Psi|_A^\alpha = T$
* $|\Phi \vee \Psi|_A^\alpha = T$ iff $|\Phi|_A^\alpha = T$ or $|\Psi|_A^\alpha = T$
* $|\Phi \rightarrow \Psi|_A^\alpha = T$ iff $|\Phi|_A^\alpha = F$ or $|\Psi|_A^\alpha = T$
* $|\Phi \leftrightarrow \Psi|_A^\alpha = T$ iff $|\Phi|_A^\alpha = |\Psi|_A^\alpha$
* $|\forall v \Phi|_A^\alpha = T$ iff for every variable assignment $\beta$ that differs from $\alpha$ in at most $v$, $|\Phi|_A^\beta = T$; in other words, $|\forall v \Phi|_A^\alpha = T$ iff $\Phi$ is satisfied when every thing except $v$ is fixed
* $|\exists v \Phi|_A^\alpha = T$ iff there is at least one variable assignment $\beta$ that differs from $\alpha$ in at most $v$ where $|\Phi|_A^\beta = T$; in other words, $|\exists v \Phi|_A^\alpha = T$ iff $\Phi$ is satisfied for some value of $v$

The normal connective satisfaction come from the standard truth tables we did before, and the quantifiers are exactly what you would imagine them to mean, just formalized in the new terminology we have to make it precise.

The truth of an $\mathcal{L}_2$ sentence is now easy given the above satisfaction rules:

**Definition:** An $\mathcal{L}_2$ sentence $\varphi$ is true $|\varphi|_A = T$ iff $|\varphi|_A^\alpha = T$ for every variable assignment $\alpha$ over $A$.

Validity remains the same in $\mathcal{L}_2$, just with our updated definitions for structures and truth:

**Definition:** Given a set of $\mathcal{L}_2$ sentences $\Gamma = \\{\Phi, \Psi,…\\}$ and a single sentence $\varphi$, we say that $\Gamma$ semantically entails $\varphi$ if and only if for all $\mathcal{L}_2$-structures $A$, if $A \vDash \Gamma$, then $A \vDash \varphi$.

## Natural Deduction 2.0

Rules for our original connectives $\wedge, \vee, \neg, \rightarrow, \leftrightarrow$ remain the same. We only need to add the rules for $\forall$ and $\exists$. It will be easier to write them out then explain them afterwards.

<center>
$
\begin{array}{c|c|c}
\textbf{} & \textbf{Introduction} & \textbf{Elimination} \\\ \hline
\forall &   \begin{array}{c}
              \Phi[t/v]   \\\ \hline 
              \forall v \Phi  \\\ 
              \end{array} \ 
            { \textrm{for generic constant} \ t}
      &  \begin{array}{c}
          \forall v \Phi   \\\ \hline 
          \Phi[t/v]  \\\ 
          \end{array}  \\\  \hline
\exists &  \begin{array}{c}
          \Phi[t/v]   \\\ \hline 
          \exists v \Phi  \\\ 
          \end{array}
          &   \begin{array}{c}
        \begin{array}{cc}
                      & [\Phi[t/v]] \\\
                      & \vdots \\\
        \exists v \Phi & \Psi \\\
        \end{array} \\\ \hline
        \Psi
        \end{array}  \ 
            { \textrm{for generic constant} \ t} \\\
\end{array}
$
</center>

The notation of $\Phi[t/v]$ is to highlight **substitution**: $\Phi[t/v]$ is the formula $\Phi$ with all occurrences of $v$ in it replaced with $t$. For example, if $\Phi = Px \wedge \forall y (Qxy \rightarrow Rx)$, then $\Phi[t/x] = Pt \wedge \forall y (Qty \rightarrow Rt)$.

Here is the intuition behind the new rules:

* $\forall$-Intro basically says if $t$ is a constant that does not appear anywhere else in our proof, it is in practice a "dummy variable", and allows us to introduce a proper variable bound by $\forall$.
* $\forall$-Elim says we if we know $\Phi$ is satisfied by possible $v$, it is certainly true if $v$ is replaced by $t$; if all men are mortal, certainly Socrates is mortal too
* $\exists$-Intro is the formal way of saying if we see an occurence of $\Phi$, then there is some $v$ that satisfies $\Phi$; if you see a cow, you know there is at least one animal
* $\exists$-Elim is a for-the-sake-of-argument style proof. While we may not know exactly _what_ satisfies $\exists v \Phi$, if we can deduce some claim independent of the specific thing that satisfies it, we know that claim must also be true as it only relies on the existence of something. If we know there is at least one plant-eating animal—call it Bob—we can conclude that there are plants, since Bob eats plants, and that's true for all "Bob"s (a.k.a. plant-eating animals).

With these added rules, we can now prove a lot of the things we already knew, such as:

* The mortality argument of $\forall x(Px \rightarrow Qx), Pa \vdash Qa$
* The quantifier interplay $\neg \forall x Px \dashv\vdash \exists x \neg Px$
* Standard tautologies and contradictions; $\vdash \forall x Px \vee \neg \forall x Px$, and $\forall x Px \wedge \neg \forall x Px \vdash$

Similarly, we will see that these rules are also sound.

## $\mathcal{L}_=$: Identity and Definite Descriptions

$\mathcal{L}_2$ gets us most of the way for what we want but there's one slight inconvenience: we don't have a notion of identity. Say we have a constant $a$  with semantic value $|a|_A = \textrm{Socrates}$. Then, if we have another constant $b$ such that $|b|_A = \textrm{Socrates}$, we have no good way of showing these constants are really "the same"; they might look different, but they function in the same way as both standing in for Socrates.

And in a philosophical, sense, the identity is an important concept in ontologies and metaphysics, so it's worthwhile having a notion of it we can refer to when formalizing arguments.

We could just specify the predicate, "…is identical to…" as a binary predicate letter in $\mathcal{L}_2$, but that means that the predicate might receive arbitrary meanings in different structures, and identity seems like a pretty unshakeable concept. It also might mean that we use different predicate letters in different formalizations, and we want this to be consistent for it to be useful.

This is what $\mathcal{L}_=$ is for. $\mathcal{L}_=$

<!-- is _exactly_ like $\mathcal{L}_2$ in terms of structures and truth, but it has the one difference of having an extra predicate of $=$ to refer to identity. -->
