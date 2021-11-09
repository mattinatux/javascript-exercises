# Exercise 09 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```


acaramanamaraca

Input: word or phrase
1. remove all punctuation and spaces from input
2. convert input to lowercase and store as variable
3. reverse the order and store in a new variable
4. compare variables -- if ===, then return true; if !==, then return false