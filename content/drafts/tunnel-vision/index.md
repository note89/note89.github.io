---
title: "Tunnel Vision: How modularity lies beyond the code"
date: "2022-08-29"
description: "How Super Mario pipes can help you design better software"
---

# Tunnel Vision: How modularity lies beyond the code

![Dall-e super mario](super_mario.png)
_DALL-E : "Super Mario" using green pipes as sunglasses in stained glass art_

This will be a multi-part series where we will see how far we can drive the tunnel/pipe analogy in explaining the three levels of code and how the pre- and postconditions of code relate to modularity ( i will explain those terms later)

In this first section, we will focus on the **Specification**.

## Background

When we teach Hoare Logic in our Advanced Software Design course. It can be tricky with the limited time we spend on the topic for the students to develop intuition about how different types of pre- and postconditions affect the modularity of the program.  So we will here attempt to provide that intuition with the help of the humble tunnel. We won't go into Hoare logic in this post but will instead just focus on pre-and postconditions.

* A Precondition is a condition that must be fulfilled for other things to happen. 
* A post-condition is an assertion on what is true after a piece of code has run

```typescript
{x is a number}
y = prime_checker(x)
{if x is prime then y = "is_prime" else y = "is_not_prime"}
```
if this level of detail is not needed we can choose a weaker assertion (both pre and post-conditions are assertions, logical facts that are true at some point in time)

```typescript
1. {x is a number}
2. y = prime_checker(x)
3. {if x is prime then y = "is_prime" else y = "is_not_prime"}
4. {y = "is_prime" | "is_not_prime"}
5. {y is string}
6. y = toUpperCase(y)
7. { y is a upper case string}
8. { y is a string }
9. print(y)
10. {p has been printed}
```

On line 4 we just weaken the logical statement saying `y` is either `"is_prime"` or `"is_not_prime"`. 
We weaken it further and say it's just a string. 
Now all the information from the `prime_checker` is gone. 
This is a game we play on the logical level based on what we believe we will need for the rest of the program. 

if we later need to do some discrimination on the values of y and want to know it can only be those two values, then that information needs to be carried forward in the program. 

This type of assertion is what is happening and changing in your brain all the time when you are reading and writing code. 

This gives a good indicator of why code with a lot of conditionals is error-prone and difficult to keep in your head. 
the size of that assertion will double with every if statement. 

So at this point, it's enough to know that you can write or think about this type of specification surrounding each piece of code. You might also write it down in comments around your functions for example

```typescript
{c is a char, str is a string, amount is a number bigger or equal to zero}

const leftPad(c, str, amount) ...

{
1.  The length of the output is `max(n, len(str))`
2.  The prefix of the output is padding characters and nothing but padding characters
3.  The suffix of the output is the original string.
}
```

For see real formal proofs of leftpad check out this project
https://github.com/hwayne/lets-prove-leftpad

Even if the program does not throw any error if we now call `leftPad` with a number less then 0.
There is still a bug, a logical-level bug. Since we are not following the specification the post-condition is not guaranteed. 
And `leftPad` is allowed to change how it handles this at any time because it's not part of any specification how this should act.

It's totally fine to restrict Apis by specifying this kind of restrictions.
However the more that design can be embedded into the code the better. 

It's not a particularly good idea to allow any input to your [programs](https://www.wikiwand.com/en/Robustness_principle).
We will later get a visual understanding of how we can always make a API looser on input and stricter on output. But not the other way around so if you have allowed a very wide input space you will have to continue to support that or suffer the consequences. 

This is why browsers have such a hard time enforcing strict correct HTML. because they did not do that from the beginning and now literally millions of sites will break if they start being HTML spec-compliant. 

[link to don't break you apis]

To not have to break you api think about how little you can get away at the start. The 'build what you need' mantra. Aslong as future possible changes are easy to add.

Okey let's get to the TUNNELS !


## The concept of a tunnel

If i could i would use this cool super mario tunnel for all my illustrations. But my drawing skills are a bit to crappy at this time. 

![Super mario pipe](pixel_pipe.png)

The important part of a pipe/tunnel is that you can stack them along as one tunnel fits into the other.

![Stacked pipes](painted_strait_pipes.png)

We will stretch this analogy of tunnels and pipes pretty far in this discussion, and it's just ment as a mental aid in starting to think about the logical level of the code. 

![](painted_weaker_stronger.png)


### Specing out the spec

Let's start of the level of logic and then at the end of the article mix in code to think about extensiblity and contraction of software. 

A specification expresses what needs to be true before a piece of code is called and what is true after.

The details are very important. 

Even for a humble `toUppercase` function  there is probably a lot of implied details. like the string needs to have the exact same characters but uppercase. 

There recently was a serious bug in a piece of software where a function had this spec
```
The record has x amount of y in it's record.
```

But what was actually needed was 

```
The record has x amount y in in it's record AND nothing else!
```

In this case it was a serious bug because the code checked that the right amount of the wanted values where present but it was possible to add an arbitrary amount of extra values of non checked keys that could be used for exploits later down the line. 

This is the case everytime one works with records, because a record with extra fields is a subtype of the wanted type. 


### How specs compose. 


#### Base spec
![normal spec](normal.gif)

#### Accept more inputs and allow less outputs
![spec that is more constrained](constrained.gif)

#### Accept less inputs, allow more outputs
![spec that don't compose](leaky.gif)


### Are the types the spec ?

Sometimes but not most times. 

For example the `toUpperCase` function has the type 
`string -> string`

We can think a hugh amount of other string manipulation function that has that signature. `toLowerCase` for example. so clearly the types are not the spec. 

But i did say sometimes. So there are cases where we can capture the the spec in the type

In typescript for example we can write this type 
`string -> Uppercase<string>` . 

While we are closer, but who says it's the same string or that the string has not been doubled in length. 

`<S extends string>(s: S): Uppercase<S>`

This is closer :) 

The spec is all the details that 'matter' other details can be said to be implementation details. (people will depend on you implementation details so be warned)

A fun example we have in the course is that the free function could look like this 
```c
{x is a piece of alocated memory}
free(x){ /* Do NOTHING !*/}
{x cannot be used anymore}
```
if you now use `x` you are breaking the spec. 
Even with a implementation that marks the memory to be free for the OS to use, it could be a good idea to scramble the memory aswell, so code that does break the spec and use the memory will crash early. To avoid the simcity situation where a new version of windows had to ship with fallback mode to a old memory allocator to make up for a bug in simcity. 



```

```

### The shape of tunnels

You probably have just thought about tunnels that are symetrical. for our needs think more of a tunnel like this 

[Tunnel with smaller entrance then exit]

This analogy will take us pretty far but in reality (if anything is real) the shape a tunnel takes in is multidimensional. We will take it a bit further in the end to see a bit of this, but thinking in the simple 2D/3D plane is good enough for our needs. 


### What travels through the tunnels ?

Here is where it gets funky... The Code!
The Tunnels represents the "state space" you code is allowed to operate in. 

If your specification expresses that you will let out numbers less then 5 and your code only let's out numbers less then 3 then that implementation is still valid. 






A argument can take many shapes. 
What is the shape of this statement ?
```
x = 5
```

Well it depends! we could say that 
```
{ x = 5 }
```
and our state space would be very small.

or we could say that 
```
{ x is a number }
```
and the size of the state space will be much larger. 

if we now have a function 

```
{true}
x = 5
{x = 5 }
print("number is 5")
{x = 5, 5 has been printed to the screen}
```

This line of code is only correct if we have the stricter requirement on x. 
that means that we cannot change x to another number and the program would still be correct, instead we would also have to change the print statement. 

if the specification instead looked like
```
x = 5
{x = 5}
{x is a number}
print("number is " + x)
{x = 5, a number has been printed to the screen}

```