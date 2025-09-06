---START_METADATA---
{
  "title": "Introductory Quantum Elliptic Curve Cryptography",
  "author": "Adi Mittal",
  "summary": "Actually important online doomsday prepping",
  "tags":[
    "me"
  ]
}

---END_METADATA---



Previously, I had the opportunity [to cap off my high school math career to write and present a topic of my choosing](https://xperimex.com/blog/variational-calculus/). In that case, I spent a couple weeks looking at the basics of the calculus of variations and its physics-inspired methods. To round off my undergraduate curriculum, I was given a similar opportunity on a much larger scale. Spanning across 2.5 quarters and 55 pages, I spent this past year learning the math that justifies online security for the present and hopefully future. In particular, I spent the time learning the math behind elliptic curve cryptography, and the quantum threats and safeguards that people hope to use once quantum computing becomes powerful enough to break classical methods. This project was mostly motivated by the ever well-known Shor's algorithm that kicked off this quantum arms race. I was curious what made it so clever and so dangerous, and while the latter is true, I found out it was ultimately a type of Fourier transform and not much more (which makes sense in hindsight for its goal is to detect "periodicities" in the hidden [subgroup problem](https://en.wikipedia.org/wiki/Hidden_subgroup_problem)). I have spent a few [other posts talking about cryptography and the motivating math before](https://xperimex.com/blog/zero-knowledge/), but I'm glad to have put in the time to go to the depth of something like a project like this. In the future, I do want to revisit this topic to some extent, for I took a very computational route to the group theory to make the implementation and calculations clear. However, the abstract algebra approaches that I was dodging for time provided the much stronger results I needed towards the end. Now that I'm more equipped to understand it, there is a lot to properly absorb and unpack, but that's for later. Below you will find my written report and accompanying slideshow. As I find errors retroactively, I'll update the files accordingly.


* [Written Report](/img/quantum-elliptic-curves/BSP_Pre_and_Post_Quantum_Elliptic_Curve_Cryptography.pdf)
* [Presentation Slides](/img/quantum-elliptic-curves/BSP_Final_Slides.pdf)