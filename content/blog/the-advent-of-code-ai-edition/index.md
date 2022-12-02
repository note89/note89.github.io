---
title: "Ai solves Advent of Code 2022"
date: "2022-12-01"
description: "I will try to solve all of the advent of code with as little human input as possible"
---

# Intro
It feels like every week a new mindblowing Ai assistant pops up, tools like D-alle, Whisper, Copilot etc. 
Have all been amazing and useful to me. 


</div>
Yesterday I saw this tweet about using GPT chat.

![](day1/tweet.png)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">OMG WTF <a href="https://t.co/I2hE0e5ppq">pic.twitter.com/I2hE0e5ppq</a></p>&mdash; cts (@gf_256) <a href="https://twitter.com/gf_256/status/1598104835848798208?ref_src=twsrc%5Etfw">December 1, 2022</a></blockquote> 

I had never tried GPT chat and this got me very keen in doing so!
I quickly tried it on some of the code examples we use in our courses as examples of hard-to-find bugs or 
code in need of refactoring and I was more than amazed that one code challenge that 
1/100 engineers find was found 'easily' by GPT chat and it also provided the suggested refactor to remove it.

Today Advent Of Code started so I'm naturally curious how far I can come with minimal guidance of these code-writing Ais. 

If you want to do the challenges yourself or with your Ai friend visit [Advent Of Code](https://adventofcode.com/2022/). 


**Bots at my disposal**
* [CoPilot](https://github.com/features/copilot)
* [GPTchat](https://chat.openai.com/chat)

Let's Go!

```toc
# This code block gets replaced with the TOC
``` 

## Day 1
Times:
Challenge_1: 15 seconds
Challenge_2: 2 minutes

[Question](https://adventofcode.com/2022/day/1), [Input](https://adventofcode.com/2022/day/1/input), Ai used:[GPTchat](https://chat.openai.com/chat)

### Day 1: Challenge 1
I wrote a little instruction on where to find the question that needed to be answered, that I wanted the answer printed, and please don't use any libraries.

Then I just pasted the whole question in full to the GPT chat.

![](day1/inital-prompt.png)

And lo and behold, GPT produced the following program
![](day1/day_1_solution.png)


<details>
<summary>code</summary>

```python
# Read the input file and split it into lines
with open("input.txt") as f:
  lines = f.read().strip().split("\n")

# Initialize variables to store the maximum Calories and the current Elf's Calories
max_calories = 0
current_calories = 0

# Loop over the lines in the input
for line in lines:
  # If the line is empty, update the maximum Calories and reset the current Elf's Calories
  if not line:
    max_calories = max(max_calories, current_calories)
    current_calories = 0
  else:
    # Otherwise, add the Calories from the current line to the current Elf's Calories
    current_calories += int(line)

# Update the maximum Calories one final time
max_calories = max(max_calories, current_calories)

# Print the result
print(max_calories)

# This program reads the input file line by line, and keeps track of the maximum number of Calories and the current Elf's Calories. Whenever it encounters an empty line, it updates the maximum Calories and resets the current Elf's Calories. At the end, it prints the final value of the maximum Calories, which is the answer to the problem.
```

</details>
</br>

I copied the code and ran it on my machine, it produced a number!...
**I pasted the number into Advent Of Code as the answer and it was the correct answer!
Wow...**



### Day 1: Challenge 2

On the second part of the challenge I yet again just pasted the whole page of information, 
But this time I was way less precise in my instructions.

One of the features of GPT chat is that it remembers! So I wanted to use that 
and act as if I was basically talking to a human.

![](day1/remember.png)

I pasted this as my prompt
![](day1/my-promt-day-2.png)
... Drumroll!

The initial answer was this. 
![](day1/second_challange_first_answer.png)

I yet again took the code and ran it on my machine.
...
It gave me an answer and I was hopeful!
I pasted it into the website and... Wrong answer!
No...
What now ? do I just run it again and hope for a better result ?

That is not how I would have done it with a human programmer, let's try the same here. 
Advent Of Code gave me a hint that the answer was too low so I just told GPT chat the same thing.

![](day1/my_comment.png)
![](day1/second_part_correction.png)

This is pretty mindblowing, now only does the new solution work, but it also tells me 
what was wrong with the other one! 

I have not even understood the challenge myself, since I have not even read it.
But GPT3 chat was able to use my prompt to 'reason about' the previous answer and how to fix it.

Amazing. 

Day one complete! See you tomorrow!


## Day 2
Results:
* Challenge_1: 20 minutes
* Challenge_2: hours
* Tries: 30+ 


[Question](https://adventofcode.com/2022/day/2), [Input](https://adventofcode.com/2022/day/2/input), Ai used:[GPTchat](https://chat.openai.com/chat)


Today it was certainly not faster to use the AI than to code oneself.
It was hard to use the challenge text as is, I tried a few times.

I did have more success when telling the AI it was a story about a programmer
that got challenged by some elves.
The main issue seems to have been mixing up what is actually supposed to be calculated.

At first, I didn't want to understand the question myself, but it was hard to tell it what
to do without actually reading the text and understanding the challenge myself.

The mistakes the AI did, was to calculate the score for both players, and also
reversing how the scores were calculated.

When you have an ongoing conversation with ChatGPT, it seems it loses its memory after a few prompts, so I ended up restarting and reading the question myself. Then I only wrote down the relevant details of the challenge and skipped all the elf stuff.

I still was a bit too loose and ended up having to do one last correction as you can see in the images or GIF below. 

### Day 2: Challenge 1

![](day2/day_2.gif)
![](day2/my_prompt.png)
![](day2/first_answer.png)
![](day2/second_answer.png)

### Day 2: Challenge 2
I started with wishful thinking just adding the new requirements as is. 
that did not produce the correct results.

I then realized that I could use chatGTP to first summarize the challenge to only pick out the relevant details. 
I would then give it the solution for the first part and tell it to change it to incorporate the new requirements.

It became apparent that I probably would have to understand the problem myself so I could correct ChatGPT by either suggesting or expanding/contracting the original list of requirements.

Like with any tool one need's to practice to learn what works and what does not. 

So first summarize the new requirements. 


![](day2/bullet.png)

Then I cut them down a bit and made them much more specific before starting the dance 
with the AI.

At one point I asked GPT to create some functions to make it easier for me to point out where the changes should go and to hopefully get GPT to only change that part.
Since i had run into scenarios where it changes more than i like, aka fix one part and break the next.

![](day2/all.png)


In the end, we got there but took quite a few detours. 
Let's see how it goes tomorrow!


## Day 3 (stay tuned)
