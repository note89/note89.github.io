---
title: Type level food choices
date: "2022-06-14"
description: "Reality is messy! what exactly is the subtyping between different food preferences?."
---

### Is Vegetarian a type of Vegan ?

My friend got me thinking about subtyping between food choices today.
He is playing a venue tonight (he is a drummer :drums:) and they send out the following message 

> ATTENTION! The vegeterian food is 100% *VEGAN*, that is
> it covers both "categories"


I first remarked that they should just offer Vegan food only because
Vegan food is Vegetarian, so Vegan food is a subtype of Vegetarian food.

But then it dawned on me that it might not be so simple. 

This is not your regular `Dog` is a type of `Animal` type of sub-typing.

### Note on notation
multiplication `*` represents a type that is always there. 

Example:
`int * string` is a type that contains two values of type `int`
for example:
`pair(33, "nils")` or `{age: 33, name: "nils" }`
or 

```python
class Person
    def __init__(self, age, name):
        self.age = age
        self.name = name
```

We use multiplication because that i how many inhabitiants of the type that exist. in our example all possible `int`'s combined with all possible `strings`

addition `+` represents a choice 

`int + string` is a type that is either int or string. 
`type Direction = Up | Down | Left | Right`

We use addition for the same reasons, as with multiplication. 
The number of inhabitants of the type is the sum of the members. 
so in the example above the number of inhabitants are `4`. 

The first type is called product types and the second is called 
sum types. Given we can preform regular mathematical operations on the type's
they are known as algebraic data types. 

This can be very useful for doing principled refactoring.


### Naive type hierarchy
If we start the most straightforward model.

```haskell
MeatDish          =  Base * EggsEtc * Meat
VegetarianDish    =  Base * EggsEtc 
VeganDish         =  Base
```

A `MeatDish` is a `VeganDish` with more stuff added. 
This means that `MeatDish` is a subtype of `VeganDish`.

So any place in our program where a `VeganDish` is needed we can provide 
a `MeatDish` instead and the program will continue working. 

This is called *Liskov's substitution principle*
> T is a subtype of U if every value of type U in a program can be replaced with T and the program will continue to function

The reason this works is that any code that requires a `VeganDish` 
will find all the necessary data in a `MeatDish` since it has all the 
fields of `VeganDish` plus some more. 

We are basically saying that we can just serve a `MeatDish` to 
anyone and they will just have to put aside the parts the don't like.

But in reality the subtyping goes the other way!

A MeatEater can eat Vegan and Vegetarian (Maybe at a protest).
And a Vegan would very much not like to have to remove the Meat from their Dish.

Let's make another and better attempt at trying to carve reality by
the joints.

### A second attempt

```haskell
MeatDish              =  (Base * (EggsEtc + 1) * (Meat + 1))
VegeterianDish        =  (Base * (EggsEtc + 1))
VeganDish             =  (Base)
```

`... + 1` means optional, there are many ways to represent that but for our purposes just think of as a field that might or might not be there.

Now `MeatEaters` can eat Vegan and Vegetarian! just make the extra fields `null`.

But what about the Vegans ? they still have to remove their meat...

### How would one go about having negatives in the type definition ?

What we would like todo here is only to specify what needs to be there
but also what is not allowed to be there.

Something like

```haskell
VeganDish = Base * Not(EggsEtc) * Not(Meat)
```


There is not direct way todo exactly this that i know of. 
But we can achieve the same thing in a multitude of ways. 


#### Nominal types

We could give up on the idea of the built in structural subtyping
that our language provides and instead turn to nominal types. 
nominal types are types where types are compared based on their name and not structure. 

They can be very useful when representing different units that should 
not be mixed but all use the same underlying data-type. 

```typescript
const a = seconds(10)
const b = minutes(12)
a + b // type error
```


We could construct three different types and the specialized transformation functions between them like this

```typescript
const vegan = veganDish("food");
const meat  = meatDish("meat");

giveToMeatEater(vegan.toMeatDish())
```

While this hinders the ablity of giving a meatDish to a vegan.
It also hinders us from giving a veganDish to a meateater and 
the special conversion function creates a coupling between all our types. 
When the number of categories increases this becomes very messy. 

A way around that would be to have Eaters accept either a nominal 
or non nominal version of each level. and then provide just a 

`vegan.toStructural()`

But there most be a better way no ? 

#### More types ! 

```haskell
type HasMeat = Meat | NoMeat

And discriminate on certain data Constructors

MeatDish =  (Base * (EggsEtc + 1) * (Mejat + 1))
VegeterianDish = (Base * (EggsEtc + 1)  *  NotMeat)
VeganDish        = (Base * NotEggs * NotMeat)


```

#### Why not use the terms directly in the type ?


### Conclusion

Reality is usually tricker then it first appears and modeling your data
as close as possible while remaining practical will help avoiding bugs (that in this case would be quite embarrassing)

This was all done just for fun, but if you would like to learn more about exact modelling and how to make illegal states unpresentable join the next 
cohort in the Advanced Software Design course. 
Where unit 3 is all about the representable/valid principle.

Have you ever thought about how many ways your concrete state in the application can be wrong ? That i will talk about in my next blog post. 
Stay tuned.