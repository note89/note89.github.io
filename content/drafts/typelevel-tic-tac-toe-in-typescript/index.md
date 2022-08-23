---
title: Typelevel Tic-Tac-Toe Overkill edition in Typescript
date: "2022-08-23"
description: "Typescript typesystem is very powerful, powerful enough to build a full functioning, dynamic size Tic Tac Toe Game"
---


At Mirdin we help students to practice writing software. You might be familiar with how practicing guitar or some sport is very different from just playing/performing.

You will get better from just playing but it takes much longer and your understanding on what you have learnt is much worse. You will learn what to do but have a harder time explaining what you have learned.   

It's exactly how it's like for most software engineers, they practice by doing. Senior engineers that been through a lot gain intuition and they know that one design decision should be taken over another but they might have a hard time to explain why or justifying it except 'it feels better' or 'i have tried the other approach before and it never ends well'. But is there a more efficient way  ? Or do you have to spend 10 000 hours just reading and writing code to become enlightened and achieve the ranks of software wizard ?

At Mirdin we believe there is a more effective way, We give students a series of short design exercises that takes just a few hours to finish but will contain a lot of opportunity for things to go wrong. Then we give the students immediate feedback on how their earlier design choices affected later requirements. With smaller groups or private students we design specific requirements that are meant to specifically poke holes at inflexible designs. 

The Tic-Tac-Toe challenge is not exactly in this vain but instead gives students the challenge to write a Tic-Tac-Toe program that cannot go wrong, and produce compile time errors for as many incorrect uses as possible. Like playing with the same player twice for example. When i was a student at Mirdin a few years ago i decided to try to write Tic-Tac-Toe completely on the type-level in typescript. 

This proved to be very challenging but fun. I have a lot to thank the excellent Type-Challenges for helping me learn enough type level trickery to get it done. 
https://github.com/type-challenges/type-challenges

If you would like to have a stab at doing this yourself, here is the requirements. 

### Code
To play along,  here is a Typescript playground of the code.
https://tinyurl.com/typelevel-tic-tac-toe

The latest code can also be found on Github.
https://github.com/note89/typelevel-tic-tac-toe/blob/master/tic-tac-toe.ts

## First A Demo!

There is gonna be a lot of code so to peak you interest let me present you with the very rudimentary user interface for playing type-level Tic-Tac-Toe that is the end result. 

```typescript
// ##################################
// ##################################
// #          Play a Game           #
// #              of                #
// #          Tic-Tac-Toe           #
// ##################################
// ##################################
// 
// This is my attempt of a decent UX (hehe).
// 0. Select game board size (3x3, 4x4, 5x5, etc) 
// 1. Cross will be the first to move
// 2. Just enter coordinates.
// 
// The status checks below will turn RED 
// To show what state the game is in.
//
// Illegal moves will be compile-time errors
// with decent error messages.
```

![Tic-Tac-Toe Type-level demo](tic-tac-toe-demo.gif)


##  Requirements  

Design an API for a Tic-Tac-Toe board, consisting of types
representing states of the board, along with functions 
`move`, `takeMoveBack`, `whoWonOrDraw`, and `isPositionOccupied`.

* All functions must be pure
* All functions must return a sensible value and may not throw exceptions
* A move can only be made if
  - the game is not over
  - the player is the current player
  - the `move` is valid (i.e. not already played)
* Calling `TakeMoveBack` on a board with no moves is a compile time error
* Calling `WhoWonOrDraw` on a tic-tac-toe board but the game has not finished is a compile time error
* `IsPositionOccupied` works for in-play and completed games.

## Some extra design decisions
I wanted the game to be derived from Size so you would be able to play on different boards. 
To achieve this winning positions need to be calculated from Size instead of hard-coded. 
This is possible but a bit fiddly. I have not yet achieved the ability to have two games of different size in the same project. To do that i would have to parameterize the program a bit more, i will try to do this in the a later version (famous last words). 

## Show me the code ! 

So the reason i wrote this in Typescript is because it's the language i know best but also it has a bunch of type level feature that very few mainstream typed languages have. 

I will go through the code basically top to bottom, except the "UI" code, i will take that last.
There will be a lot of comments in the code ment for also explain the program, so i will reuse them here.

### Utils

Lets start with some utility functions that will be used in multiple other types.

```typescript
// CartesianProduct<X,Y>
// Example: 
// CartesianProduct<"a" | "b", "c" | "d"> = ["ac", "ad", "bc", "bd"]
type CartesianProductString<T extends ToStringableTypes, T2 extends ToStringableTypes > = `${T}${T2}`;

type ToStringableTypes = string | number | boolean | bigint;
```

The `CartesianProduct` function is used to produce coordinates between `Rows` and `Columns` i wanted as much as possible of the types to be derived from a more basic set of values. so this is who we will create a 
grid of possible coordinates for the board. 

```typescript
// UnionToIntersection<X>
// Takes a union like `A | B | C` and returns an intersection like `A & B & C`
type UnionToIntersection<U> = 
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never
```
This is a bit of a interesting trick that you can encounter if a few different type-level functions (`Equal` for example).
By using a a type as the parameter to a function the type that Typescript tries to find to reconcile `I` becomes a intersection of all the types in `U`. 

```typescript
// Example: ToUnion<[1,2,3]> = 1 | 2 | 3
type ToUnion<T extends any[]> = T[number]

// Zip two arrays together
// Example: Zip<[1,2,3],["a","b","c"]> = [[1,"a"],[2,"b"],[3,"c"]]
type Zip<T extends any[], U extends any[], Acc extends any[] = []> = 
  T extends [infer Head, ...infer Tail] ? 
  U extends [infer Head2, ...infer Tail2] ? 
  Zip<Tail, Tail2, [...Acc, [Head, Head2]]> : Acc  : Acc;

// Join tuples together to strings
// Example: StringConcatTuples<[[1,2],[3,4]]> = ["12","34"]
type StringConcatTuples<T extends [number, number][]> = {[Key in keyof T]: `${T[Key][0]}${T[Key][1]}`};
```
`ToUnion` is purely to have a nicer API that explains better what is being done.
Zip is a quite simple recursive function looking very much like the code version would, there is some neater ways where you would infer both heads and tails at once. 
https://github.com/type-challenges/type-challenges/issues/4495

But with that implementation Typescript fails to do type inferenceing later in the program.
`StringConcatTuples` is so we can use coordinates as keys, and do lookup from coordinate to a square.


#### Arithmetic 

To be able to derive the winning coordinates from  `Size` we need to be able to do some math. 
like for example in a `3x3` game, `11,22,33` form a diagonal that if any player has that diagonal they win. in a `4x4` game the diagonal is `11,22,33,44`. 
So we need the ability to do plus and minus, luckily that is very possible in typescript.
The comments from the code tells most of the story.


```typescript
// MinusOne<N>
// Defined between 1 and 1000
// Take a number N
// Check if length of empty array + 1 unknown element is equal to N
// If it is, return length of array which then is one less then N.
// If not, recursively call MinusOne with an array that is one element longer.
type MinusOne<N extends number, Arr extends any[] = []> = [
  ...Arr,
  unknown
]['length'] extends N
  ? Arr['length']
  : MinusOne<N, [...Arr, unknown]>

// PlusOne<N>
// Defined between 1 and 1000
// Same idea as above but when we hit our base case
// Add two extra elements to the array and return the length of the array.
// This way we get N + 1
type PlusOne<N extends number, Arr extends any[] = []> = 
  [...Arr, unknown]['length'] extends N
    ? [...Arr, unknown, unknown]['length']
    : PlusOne<N, [...Arr, unknown]>

// FromToInc<Lower,Higher>
// Gives back an Array of all numbers between Lower and Higher (inclusive)
// Example: FromToInc<1,3> = [1,2,3]
type FromToInc<From extends number, To extends number, acc extends any[] = []> = From extends PlusOne<To> ? acc : FromToInc<PlusOne<From>, To, [...acc, From]>;

// FromToDec<Higher,Lower>
// Gives back an Array of all numbers between Higher and Lower (inclusive)
// Example: FromToDec<3,1> = [3,2,1]
type FromToDec<From extends number, To extends number, acc extends any[] = []> = From extends MinusOne<To> ? acc : FromToDec<MinusOne<From>, To, [...acc, From]>;
```



## Data types

We need to define our essential concepts like `Circle`, `Cross` `Player`, `Square` etc.

```typescript
// #####################
// ####  Data Types ####
// #####################

interface Circle { __type: "O";     }
interface Cross  { __type: "X";     }
interface Empty  { __type: "Empty"; }
interface Nil    { __type: "Nil";   }

type Player = Cross | Circle;
type Square = Player | Empty;

// ##############################################
type Size = GameSize;
// ##############################################
// (Size was here before i made the UI at the top therefore the redeclaration)
// In a future version of the game, types will 
// be parameterized by the size of the game.
// So multiple games of different sizes can 
// exist at the same time.
// 
// However even now everything is calculated from the Size
// So 4x4 games are possible
// ##############################################

// ###################################
// ####    Column/Row/Position    ####
// ###################################
// Column and Row can potentially be different sizes
// Though winning on the diagonal will have to change 
// If the game is not square.
type Column      = ToUnion<FromToInc<1,Size>>;
type Row         = ToUnion<FromToInc<1,Size>>;
type Coordinates = CartesianProductString<Column, Row>
```
We use interfaces instead of `type` to get the type-level information (when you hover) to show `Circle` or `Nil`  etc. instead  `{__type: "Circle"}` which it would do with `type`.
Makes it a bit more pretty, not much difference then that. 

The `GameSize` is set to `3` for this walk-though.
The type of `Column` and `Row` is in this case `1 | 2 | 3`. First we generate number between `1` and `Size` which gives us`[1,2,3]` then we turn that into a union with and end up with `1 | 2 | 3`.

`Coordiantes` has the type instance of  `"22" | "21" | "23" | "12" | "11" | "13" | "32" | "31" | "33"`. 

Actually the type of Column and Row is `2 | 1 | 3` and i don't really know why it's in that order, and that is why the order of `Coordinates` is like it is.  Maybe there is no guarantee that a union traversal is left to right in Typescript.


### Winning positions

```typescript
// ###################################
// ####     Winning Positions     ####
// ###################################
// The way we are going to see if a player has won yet
// is by using the fact that we know what combination of
// positions are winning, if a player has all of them they have won.
// Steps:
//
// 1. Create a union of all the winning positions
//    ["11", "12", "13"] | ["21", "22", "23"] | ... 
//
// 2. Check what the current state of all of them are
//    [Circle, Cross, Empty] | [Circle, Circle, Circle] ... 
//
// 3. Create an intersection those states, and remove the array/tuple
//    [Circle & Cross & Empty] | [Circle & Circle & Circle] | ... 
//    [never] | [Circle]
//    never | Circle
//    Circle
//
// Only time we get a value is when all three are the same
//
// Now we can check if the player is the winner, 
// by checking if the intersection contains a player.
//
// ###################################
// #### Winning Positions Helpers ####
// ###################################
type GetRowPositions<C extends Column, R extends Row> = 
    R extends Row 
      ? [CartesianProductString<C, R>] 
      : never;

type GetColumnPositions<C extends Column, R extends Row> = 
    C extends Column 
      ? [CartesianProductString<C, R>] 
      : never;


// Only first type parameter is allowed to be supplied
type Diagonals<Size extends number, 
               _FromToSize extends number[] = FromToInc<1,Size>, 
               _SizeToFrom extends number[] = FromToDec<Size, 1>, 
               > =  
  | Zip<_FromToSize, _FromToSize> 
  | Zip<_FromToSize, _SizeToFrom>

type GetDiagonalPositions<S extends Size> = StringConcatTuples<Diagonals<S>>

// WinningPositions
// Example
// ["11", "12", "13"] | ["21", "22", "23"] | ...
// All the winning positions for a Tic-Tac-Toe game.
type WinningPositions =
  // Rows
  | GetRowPositions<Column, Row>
  // Columns
  | GetColumnPositions<Column, Row>
  // Diagonals
  | GetDiagonalPositions<Size>
```

`GetRowPositions` and `GetColumnPositions` itterates through either row or column and then creates the Cartesian product between those values. 
In code it would read something like 
```typescript
forEach(Row).map((r) => getCatesianProduct(Column, r))
```
So the output is `["11", "21", "31"] | ["21", "22", "23"] ...` for `Row` for example. 
When you do `R extends Row` in Typescript, that is "looping" over the union producing an output of type `Result1 | Result2 | Result3` etc. 

With `GetDiagonalPositions` i do a two tricks. 
First of i have two parameters that is not allowed to be used when calling the type-level function. This is so i can bind some values to those type parameters and reuse them in the body of the function. 

Here we are generating two arrays `[1,2,3]` and `[3,2,1]` and then we do two `Zip` operations
`Zip<[1,2,3],[1,2,3]>`  and `Zip<[1,2,3],[3,2,1]>` which produces `[[1,1],[2,2],[3,3]`
and `[[1,3],[2,2],[3,1]]` We then turn all the tuples into string. Resulting in
`["11", "22", "33"]` and `["13", "22", "31"]`.

`WinningPositions` is just the union of all the above, giving us a complete union of all positions that are winning. A position  for me is a combination of  of coordinates, that might be a bit dodgy naming. I'm thinking of a chess position not being a square but the combination of pieces on squares.  This however is just a combination of coordinates, so maybe `GetWinningCoordinateCombinations` is a much better name.

### Board

```typescript
// ###################################
// ####           Board           ####
// ###################################
//
// Fundamental data type of the game.
// Board contains a mapping from Coordinate to Square
// A Square is either Empty, Cross, or Circle.
//
type Board = { [s in Coordinates]: Square };

// ###################################
// ####        Get Winner         ####
// ###################################
// 
// LookupPosition returns the state of the squares at each position listed
// ["11", "12", "13"] | ... -> [Circle, Circle, Circle] | ...
type LookupCoordinates<Coords extends Array<Coordinates>, B extends Board> =
  { [Key in keyof Coords ]: B[Coords[Key]] }

// If there is any Array that contains only the same element
// then that element will be returned
type UniqueInSequence<P extends Array<unknown>> =
  P extends Array<unknown> ? UnionToIntersection<P[number]> : never

// If there is a winner in the Squares provided then the winner is returned.
type GetWinner<B extends Board> =
   UniqueInSequence<LookupCoordinates<WinningPositions,B>>
```

Here what we described in the previous section gets done. 
We use the `WinningPositions` together with a board to look up the state of all those squares.
We then see if any of those array of coordinates only contain one player

`GetWinner` might not be the perfect name, because it gives back whatever is unique in a winning set of squares so for example it would return `Empty` for the initial board. 
So the game starts out with `Empty` as a winner one could say. 

### Round

```typescript
// ###################################
// ####           Round           ####
// ###################################
// 
// A Round has a bunch of Squares and a Player that is next to move.
// It also has a previous Round or Nil, to be able to allow for undoing moves.
interface Round<
  S extends Board,
  P extends Player,
  R extends Round<any, any, any> | Nil
> extends HasPrevious<R> {
  __tag: "round";
  squares: S;
  nextToMove: P;
}

// We separate our HasPrevious interface from the Round interface
// To be able to use it in other interfaces.
// And have type level functions where the only constraint is that
// it has the HasPrevious interface.
interface HasPrevious<R> {
  previous: R;
}
```

### Initial board and round

```typescript
// ###################################
// ####   Initial board & round   ####
// ###################################
//
type InitialBoard = { [key in keyof Board]: Empty };
type InitialRound = Round<InitialBoard, Cross, Nil>;
```


### Game states

```typescript
// ###################################
// ####        Game States        ####
// ###################################
// The game can be in one of three states:
// 1. Round in progress
// 2. Won
// 3. Draw

interface Winner<
  S extends Player,
  PrevR extends Round<any, any, any>,
  Curr extends Board
> extends HasPrevious<PrevR> {
  __tag: "winner",
  winningPosition: Curr;
  winner: S;
}

interface Draw<R extends Round<any, any, any>> extends HasPrevious<R> {__tag: "draw";}
```

### Game actions

There is only one action, it's to make a move.
```typescript
// ###################################
// ####        Game Actions       ####
// ###################################
//
// ######################
// #######  Move  #######
// ######################
// 
// We check if the move is valid with the type constraint AvailableSquares
// Then we apply that move and see if the next Round has a Winner.
// If it does then we return the Winner.
// If Not we check if it's the end of the game with NoMoreSquares.
// If it is we return a Draw.
// If not we return the next Round.
//
// Last argument is not allowed to be passed in, but is used 
// to reduce duplication in the function body.
type Move<
  CurrentRound extends Round<Board, P, any>,
  P extends Player,
  Position extends AvailableSquares<CurrentRound["squares"]>,
  _NextBoard extends Board = SetSquare<CurrentRound["squares"], Position, P>
> = 
HasWon<P,Round<_NextBoard, GetNextPlayer<P>, CurrentRound>> extends true 
  ? Winner<P, CurrentRound, _NextBoard>
  : NoMoreSquares<_NextBoard> extends true
    ? Draw<CurrentRound>
    : Round<
        _NextBoard,
        GetNextPlayer<P>,
        CurrentRound
      >;
```
While there is a lot of code here,  the logic is pretty straightforward and expressed in the comment to the function.


### Game state functions
```typescript
// ###########################################
// ####        Game State Functions       ####
// ###########################################

// Squares that are possible to play on
type AvailableSquares<B extends Board> = {
  [Coordinate in keyof B]: B[Coordinate] extends Empty ? Coordinate : never;
}[keyof B];

type GetNextPlayer<P extends Player> = P extends Cross ? Circle : Cross;

// Sets a Square to a Player
type SetSquare<B extends Board, PositionToSet, Player> = {
  [Pos in keyof B]: Pos extends PositionToSet ? Player : B[Pos];
};

// Checks if there is no more squares to play on.
type NoMoreSquares<B extends Board> = AvailableSquares<B> extends never
  ? true
  : false;

// Checks if a player has won.
type HasWon<
  P extends Player,
  B extends Round<any, any, any>
> = P extends GetWinner<B["squares"]> ? true : false;
```

`AvailableSquares` loops through the coordinates replaces every square with either the `Coordinate` or `never`
```typescript
{
 "11": never, 
 "12": "12",
 ...
}
```
We then lookup all values for all keys with `[keyof B]` this produces an union like 
`never | "12" | ... ` and `never` gets removed leaving only the squares that are possible to play.

### Extra functions from requirements
```typescript
// ###########################################
// ####        Extra Functions from       ####
// ####             Requirements          ####
// ###########################################

type WhoWonOrDraw<A extends Draw<any> | Winner<Player, any, any>> = (
  state: A
) => A extends Winner<infer P, any, any>
  ? PlayerWinnerString<P>
  : "The game was a draw";

// Util
type PlayerWinnerString<P extends Player> = P extends Circle
  ? "Circle Won the game"
  : "Cross Won the game";

type TakeMoveBack<B extends HasPrevious<Round<any, any, any>>> = B["previous"];

//  
// We check if there if the Square is Empty in the Position provided. 
// Depending on the game state we look at different fields. 
// We return a boolean to indicate if the square is occupied or not.
// We don't allow the function to be called with Draw, because a Draw game
// has by definition no squares to play on.
type IsPositionOccupied<
  RW extends Winner<any, any, any> | Round<any, any, any>,
  Pos extends Coordinates
> = (
  RW extends Winner<any, any, any>
    ? RW["winningPosition"][Pos]
    : RW extends Round<any, any, any>
    ? RW["squares"][Pos]
    : never
) extends Empty
  ? false
  : true;
```


That is all the code related to the fundamentals of the game. I did add some extra code for producing that 'Game UI' to play the game in that is a bit nicer then the tests you will see.
I will show that code last.


### Test Cases


```typescript
// ###################################
// ####         TEST Cases        ####
// ###################################
//
// Note, since these are type-level tests 
// we want to check for type errors while we want the program to compile
// Typescript gives us this handy comment we can use to check for type errors.
// \@ts-expect-error 
// This allows us to get errors if we don't get type errors.

// ######################
// ####  Test Utils  ####
// ######################
// 
// We need some type-level utility functions to help us with the game.
// Equal and Expect functions have been taken from the excellent type-challenges repo.
// https://github.com/type-challenges/type-challenges/blob/master/utils/index.d.ts
// 

//  Equal<X,Y> 
//  Check if two types are equal.
//  ------------------------------------------------------------
//  For full discussion around this type, see:
//  https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
// 
// > ...It relies on conditional types being deferred when T is not known. 
// > Assignability of deferred conditional types relies on an internal isTypeIdenticalTo check, 
// > which is only true for two conditional types if:
// > 
// >   * Both conditional types have the same constraint
// >   * The true and false branches of both conditions are the same type
// > - https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-510924206
// 

type Equal<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends 
  (<T>() => T extends Y ? 1 : 2) ? true : false;

// Expect<T>
// Give type-level error if T is not true
type Expect<T extends true> = T;

// ##################################
// #              TEST              #
// ##################################
// #         Correct strings        #
// ##################################
type CircleWonStringTest = Expect<Equal<ReturnType<WhoWonOrDraw<WinCircleFinal>>, CircleWonString>>;
type CrossWonStringTest = 
Expect<Equal<ReturnType<WhoWonOrDraw<WinCrossFinal>>,  CrossWonString>>;
type DrawStringTest = 
Expect<Equal<ReturnType<WhoWonOrDraw<DrawFinal>>,      DrawString>>;

// ##################################
// #              TEST              #
// ##################################
// #         No double moves        #
// ##################################
// @ts-expect-error
type NoDoubleMove = Move<Move<InitialRound, Cross, "33">, Cross, "13" >;

// ##################################
// #              TEST              #
// ##################################
// #      No start with Circle      #
// ##################################
// @ts-expect-error
type NoStartWithCircle = Move<InitialRound, Circle, "33">;


// ##################################
// #              TEST              #
// ##################################
// #      No taking a used square   #
// ##################################
// @ts-expect-error
type NoTakingAUsedSquare = Move<Move<InitialRound, Cross, "33">,Circle, "33">

// ##################################
// #              TEST              #
// ##################################
// #  InitialRound has no previous  #
// #  Don't allow to take too many  #
// #           moves back           #
// ##################################
// @ts-expect-error
type NotToManyMovesBack = TakeMoveBack<InitialRound>;


// ##################################
// #              TEST              #
// ##################################
// #         Making a move          #
// #       and taking it back       #
// #   Gives back the start state   #
// ##################################
type MoveOne      = Move<InitialRound, Cross, "33">;
type BackToNormal = TakeMoveBack<MoveOne>;
type Outcome      = Expect<Equal<InitialRound, BackToNormal>>;

type BackFromDraw = Expect<Equal<TakeMoveBack<DrawFinal>, DrawStep8>>;
type BackFromWin = Expect<Equal<TakeMoveBack<WinCrossFinal>, WinCrossStep4>>;

// ##################################
// #              TEST              #
// ##################################
// #       IsPositionOccupied       #
// ##################################
type Test = Expect<
  Equal<IsPositionOccupied<WinCrossFinal, "12">, false>
>;
type Test2 = Expect<Equal<IsPositionOccupied<WinCrossFinal, "33">, true>>;
type Test3 = Expect<Equal<IsPositionOccupied<InitialRound, "33">, false>>;
// @ts-expect-error
type Test4 = Expect<Equal<IsPositionOccupied<InitialRound, "33">, true>>;


// ##################################
// #              TEST              #
// ##################################
// #    GAME That ends in a draw    #
// ##################################
type DrawStep1 = Move<InitialRound, Cross, "13">;
type DrawStep2 = Move<DrawStep1, Circle, "23">;
type DrawStep3 = Move<DrawStep2, Cross, "33">;
type DrawStep4 = Move<DrawStep3, Circle, "12">;
type DrawStep5 = Move<DrawStep4, Cross, "22">;
type DrawStep6 = Move<DrawStep5, Circle, "11">;
type DrawStep7 = Move<DrawStep6, Cross, "32">;
type DrawStep8 = Move<DrawStep7, Circle, "31">;
type DrawFinal = Move<DrawStep8, Cross, "21">;
type DrawOutcome = Expect<Draw<any> extends DrawFinal ? true : false>;

// ##################################
// #              TEST              #
// ##################################
// #     GAME That Cross Wins       #
// ##################################
type WinCrossStep1 = Move<InitialRound, Cross, "13">;
type WinCrossStep2 = Move<WinCrossStep1, Circle, "11">;
type WinCrossStep3 = Move<WinCrossStep2, Cross, "33">;
type WinCrossStep4 = Move<WinCrossStep3, Circle, "21">;
type WinCrossFinal = Move<WinCrossStep4, Cross, "23">;
type WinCrossOutcome = Expect<Equal<
   WinCrossFinal["winner"], Cross
>>;

// ##################################
// #              TEST              #
// ##################################
// #     GAME That Circle Wins      #
// ##################################
type WinCircleStep1 = Move<InitialRound, Cross, "13">;
type WinCircleStep2 = Move<WinCircleStep1, Circle, "11">;
type WinCircleStep3 = Move<WinCircleStep2, Cross, "33">;
type WinCircleStep4 = Move<WinCircleStep3, Circle, "21">;
type WinCircleStep5 = Move<WinCircleStep4, Cross, "22">;
type WinCircleFinal = Move<WinCircleStep5, Circle, "31">;
type WinCircleOutcome = Expect<Equal<
   WinCircleFinal["winner"], Circle
>>;

```


### UI Code

I know it's a bit silly to call this a UI, but it gives you indications on how the game is going 
and tells you when you are doing illegal things with red text so that is basically a UI for me. 

```typescript
//
// To play along
// here is a Typescript playground of the code.
// https://tinyurl.com/typelevel-tic-tac-toe
//
// ##################################
// ##################################
// #          Play a Game           #
// #              of                #
// #          Tic-Tac-Toe           #
// ##################################
// ##################################
// 
// This is my attempt of a decent UX (hehe).
// 0. Select game board size (3x3, 4x4, 5x5, etc) 
// 1. Cross will be the first to move
// 2. Just enter coordinates.
// 
// The status checks below will turn RED 
// To show what state the game is in.
//
// Illegal moves will be compile-time errors
// with decent error messages.
//
type GameSize = 3;
type GameStatus =  CrashOrPass<SetError<
  GameLoop<[

  //  Ongoing game
  // "11"

  //  Play a taken position
  //  "11", "11"

  //  Malformed move
  //  "11", "Hello"

  //  Play moves after game is won
  //  "11", "32", "22", "12", "33" "13"

  //  Cross Win
  //  "11", "32", "22", "12", "33" 

  //  Circle Win
  //  "13", "11", "23", "22", "12", "33"

  // Draw 
  // "13", "23", "33", "12", "22", "11", "32", "31", "21"
  ]
>>>
// ################################
// ###### GAME YET TO START #######
// ################################
// @ts-expect-error
type C5 = GameYetToStart<GameStatus>

// ################################
// ######  GAME IS ONGOING  #######
// ################################
// @ts-expect-error
type C0 = GameIsOngoing<GameStatus>

// ################################
// ######    GAME A DRAW    #######
// ################################
//@ts-expect-error
type C1 = TheGameIsADraw<GameStatus>

// ################################
// ####  GAME A WIN FOR CROSS  ####
// ################################
//@ts-expect-error
type C2 = CrossHasWon<GameStatus>

// ################################
// ####  GAME A WIN FOR CIRCLE ####
// ################################
//@ts-expect-error
type C3 = CircleHasWon<GameStatus>


// ################################
// ####       UI Helpers       ####
// ################################
type TheGameIsADraw<T extends Draw<any>> = T
type CrossHasWon<T extends Winner<Cross, any, any>>= T
type CircleHasWon<T extends Winner<Circle, any, any>> = T
type GameIsOngoing<T extends Round<any, any, Round<any,any,any>>> = T
type GameYetToStart<T extends InitialRound> = T

type GameLoop<A extends Array<Coordinates>, 
			  R extends Round<any,any,any> = InitialRound, 
			  P extends Player = Cross> = 
 A extends [infer Head, ...infer Tail] ?
  Tail extends Array<Coordinates> ?
  Head extends AvailableSquares<R["squares"]> ?
    Move<R,P,Head> extends Round<any,any,any> ?
      GameLoop<Tail, Move<R,P,Head>, GetNextPlayer<P>> : 
      Tail extends [] ? Move<R,P,Head> 
     : `${ERROR_ID} No more moves allowed, game is over`
	 : `${ERROR_ID} Square '${Head extends string ? Head : never}' already taken` 
     : `${ERROR_ID} Tail of Coordinate array is malformatted`
     : R

type ERROR_ID = "__ERROR__:"

type SetError<T> = [T, T extends `${ERROR_ID}${string}` ? "error" : "noError"]
type CrashOrPass<T extends [unknown, "noError"]> = T[0];
```

I use `@ts-expect-error` to turn the type errors around. So it shows a error when it's actually type checks. that is useful because what i really would want is something like .
So you would get a type error when the type does match but otherwise it lets it though.
```typescript
type CrossHasWon<T doesNotExtend Winner<Cross,any,any>> = T
```

I kind of was able to simulate that a bit with with `SetError` and `CrashOrPass` which needs to be used together, i don't know how to put them together into one type-level function or even better get `GameLoop` to have this constraint by itself.

So what i have basically done is that `GameLoop` is a recursive function that ends when the game ends or gives custom errors like 
`__ERROR__: Square '${Head extends string ? Head : never}' already taken` 
It's really cool that you can just inject our `Head` into a string like that and get type errors like 
![[Pasted image 20220823182016.png]]
![](custom-error.png)

But i don't just want to have this be the return type of the function i also want a compile time error. So the way i do that is in two steps
```typescript
type SetError<T> = [T, T extends `${ERROR_ID}${string}` ? "error" : "noError"]
```
If the return type starts with `__Error__` then set the second value in the tuple to "crash".

the next type-level function
```typescript
type CrashOrPass<T extends [unknown, "noError"]> = T[0];
```
Gives a compile time error if the second argument is not `"pass"`. 
So when we have `"crash"` we get a compile time error just like we want. 


### Summary 


 