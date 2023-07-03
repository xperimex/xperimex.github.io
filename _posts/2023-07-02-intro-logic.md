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

Over the past year, I took my university's introductory sequence for logic, which was probably the most enlightening class I took all year. It forced me to reflect on not only what mathematics meant to me, but also what knowledge and deduction as a whole does too. This post is a summary collecting the highlights of the courses, so to act as a reference guide for the future when I explore some of the most powerful ideas that have eluded me in what feels like a forgotten field of study.

As this will be a bit of a longer post, the table of contents below will guide each section in the sequence they should be read, and all context needed for one section will be given in anything before it. I'll be following the conventions and terminology as per V. Halbach's [_The Logic Manual_](https://users.ox.ac.uk/~logicman/) and A. Eagle's [_Elements of Deductive Logic_](https://ora.ox.ac.uk/objects/uuid:269144a3-6ca2-434b-90fe-75dd579cdbc1/download_file?file_format=application/pdf&safe_filename=elements.pdf&type_of_work=Book).


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
\textrm{English} & \mathcal{L}_1 & \textrm{Truth Table} \\\ \hline
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
\textrm{…or…}              & \vee &   
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
P & Q & \textrm{If} \ P \ \textrm{then} \ Q) \\\ \hline
T & T & ?  \\\
T & F & F  \\\
F & T & ?  \\\
F & F & ?  \\\
\end{array}
$
</center>


<!-- "The baker offered cake or coffee and cookies to their customers" -->





So what makes the above a good argument? Well, if we assume the premises $P$ and "If $P$, then $Q$," as true, there is no real way to interpret the conclusion $Q$ as false. The premises seem to necessitate the conclusion. And that's more or less what you want a good claim to be. If something follows from a series of facts, then there can be no universe or subjective interpretation where those facts are true and the conclusion is not, since if that were the case, you would have no good reason to assumue they are linked in any way.


We can formalize this a little bit:

Given a set of sentences $\Gamma = \\{P, Q, R,…\\}$ and a conclusion $C$, we say that $\Gamma$ **entails** $C$ if and only if  