---START_METADATA---
{
  "title": "Money Maker? From money?!",
  "author": "Adi Mittal",
  "summary": "Okay, you don't make that much...",
  "tags":[
    "me"
  ]
}
---END_METADATA---
![]()

Not much for an introduction this post. Found this problem when looking for interesting problems for myself. Shoutout to <a href = "https://www.physics.harvard.edu/academics/undergrad/problems">Harvard's Problem of the Week</a> (from 2002 to 2004). The problem at hand is:

<center>
	
Consider the following game: You flip a coin until you get tails, and the amount of money you win is equal to number of coins you end up flipping (i.e. If you flip a coin, and immediately get tails, you win one dollar. If it takes 2 flips to get tails, you get 2 dollars. 3 flips = 3 dollars. So on, and so on).
<br><br>
(a) What is your expected value you win when playing the game? 
<br><br>
(b) Play the same game, except let your earnings be $2^{n-1}$, where $n$ is the amount of flips. What do you expect to win now? Does it make sense?

</center>

<br><br><br>

<center>__SPOILER WARNING: SOLUTION INCOMING__</center>

<br><br><br>


__(a)__: Expected value is the amount you win, multiplied by the probability of it occuring, and adding up all the possible outcomes.
<br>
You have a 50% chance to win 1 dollar. 25% chance to win 2 dollars. 12.5% chance to win 3 dollars... 

<br>
<center>
	
$\large \frac{1}{2} + \frac{2}{4} + \frac{3}{8} + \frac{4}{16} + ...$ 

<br><br>

$= \large \sum \_{n=1}^{\infty }\: \frac{n}{2^n}$
<br><br>

$= \large 2$

<br><br>

__OR__

<br><br>
$\large \frac{1}{2} + \frac{2}{4} + \frac{3}{8} + \frac{4}{16} + ...$ 

<br><br>
$\large =(\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{6} + ...) + (\frac{1}{4} + \frac{1}{8} + \frac{1}{16} + ...) + (\frac{1}{8} + \frac{1}{16} + ...) + ...$

<br><br>

$= (1) + \large (\frac{1}{2}) + (\frac{1}{4}) + (\frac{1}{8}) + (\frac{1}{16}) +...$

<br><br>

$\large = 2$
</center>
<br>
So you can expect to win __2 dollars__ every time you play this game.

<br>
This is where the fun is at.

<br>
__(b)__: We have 50% chance to win 1 dollar. We have a 25% chance to win 2 dollars. We have a 12.5% chance to win 4 dollars...
<br>
<center>
	
$\large \frac{1}{2} + \frac{2}{4} + \frac{4}{8} + \frac{8}{16} +...$

<br><br>
If you don't mind, since I like to write things in sigma notation, I would like to write the simplified verison of this sum in sigma notation.
<br><br>

$=\large \sum \_{n=1}^{\infty}\: \frac{1}{2}$
<br><br>

$\large = \infty$

</center>
<br>
This is why I picked this problem. The first part is quite simple, but this part creates quite a dilemma. What can we do now? How should we interpret this for the expected value of our game? Now one would ever put up a game in which the player is expected to win an infinte amount of money, since no one has an infinite amount money!
<br>

The following explanation is a jumble between what I thought, and Harvard's. I recommend looking at what they <a href = "https://www.physics.harvard.edu/uploads/files/undergrad/probweek/sol6.pdf">said</a> specifically. 

<br>

The solution is that our game (would be known as the _experiment_ in our scenario) doesn't agree with the exact definition of __expected value__. Expected value is defined as an average over an _infinite_ amount of attempts/trials (this can be viewed at least as the limit towards an infinite number of attempts/trials). The thing is that, you'll never be able to play an infinite amount of games. Essentially, our experiment (game) doesn't agree with our calculated expected value, as the experiment has nothing to do whatsoever with the precise defintion of expected value. Just as an example, if you were to (somehow) play an infinite amount of games, your earnings would indeed average an infinite amount. This whole idea of this expecting to win an infinite amount, and it "not working/making sense/not being possible" arises when we try to make expected value, something it isn't.

<br> Okay, I like math, but from this point onward I didn't have much. And what I did wasn't cohesive, as 25% was written down, the other 75% was in my head. The problem is, that 75% _was_ in my head. I would try to go through and get my complete explanation, but I feel that Harvard's solution is already quite nice. So the rest is all Harvard's explanation. Only credit I get here is for the fact I formatted it for this page. Here you go.<br>

"*This might not be a very satisfying explanation, so let us get a better feeling for the problem by looking at a situation where someone plays $N = 2^n$ games. How much money would a “reasonable” person be willing to put up front for the opportunity to play these N games? Well, in about $2^{n−1}$ games he will win one dollar; in about 2^{n−2} he will win two dollars; in about $2^{n−3}$ games he will win four dollars; etc., until in about one game he will win $2^{n−1}$ dollars. In addition, there are the “fractional” numbers of games where he wins much larger quantities of money (for example, inhalf a game he will win $2^n$ dollars, etc.), and this is indeed where the infinite expectation value comes from, in the calculation above. But let us forget about these for the moment, in order to just get a lower bound on what a reasonable person should put on the table. Adding up the above cases gives the total winnings as: $2^{n−1}(1) + 2^{n−2}(2) + 2^{n−3}(4) +· · ·+ 1(2^{n−1}) = 2^{n−1}n$. The average value of these winnings in the $N = 2^n$ games is therefore $\frac{2^{n−1}n}{2^n} = \frac{n}{2} = \frac{(\log\_2 N)}{2}$. A reasonable person should therefore expect to win at least $\frac{(\log\_2 N)}{2}$ dollars per game. (By “expect”, we mean that if the player plays a very large number of sets of $N$ games, and then takes an average over these sets, he will win at least $2^{n−1}n$ dollars per set.) This clearly increases with $N$, and goes to infinity as $N$ goes to infinity. It is nice to see that we can obtain this infinite limit without having to worry about what happens in the infinite number of “fractional” games. Remember, though, that this quantity, $\frac{(\log\_2 N)}{2}$, has nothing to do with a true expectation value, which is only defined for $N → ∞$. Someone may still not be satisfied and want to ask, “But what if I play only $N$ games? I will never ever play another game. How much money do I expect to win?” The proper answer is that the question has no meaning. It is not possible to define how much one expects to win, if one is not willing to take an average over a arbitrarily large number of trials.*"



<br><br>

Neat little problem if I do say so myself. Some of my work, some of Harvard's, hope it was cohesive and clear who was writing what when. I wish I could of gotten my last piece of explanation, just would of taken a bit too long for something I need to redo. Moral of the story: Take complete notes.


<br><br>
If you have any questions or comments, send me an email or leave a comment!






