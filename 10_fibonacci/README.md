# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```

    - no negatives allowed
    
    - calculate the number that is that far in
    Keep adding the last two digits in the array in a loop until reaching the INPUT int
    (0) + 1 = 1
    1 + 1 = 2
    2 + 2 = 3
    2 + 3 = 5

    Iteration 1: So we start at 0, then add 1. =1
    Iteration 2: Then read the new array and take the last two items (1 + 1). =2
    Iteration 3: Then read the array and take the last two items (1 = 2). =3
    . . .
