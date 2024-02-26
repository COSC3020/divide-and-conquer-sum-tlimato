[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Solution
We can outline the complexity of the above using the following To analyze the runtime of the algorithm implemented above, let's consider the recurrence relation:

T(n) = 3T(n/3) + 1

where 1 is some constant time to combine the results. This can then be broken down into the following steps:

T(n)​ = 3 * T(n/3) + 1
       = 3[3 * T(n/9) + 1] + 1
       = 3^2 * T(n/9) + 3 * 1 + 1
       = 3^2 * [3 * T(n/27) + 1] + 3 * 1 + 1
       = 3^3 * (T(n/27)) + 3^2 * 1 + 3 * 1 + 1

This gives the General Pattern:

       = 3^k * T(n/3^k) + [summation (from i = 0 to k-1) of 3^i * 1]

Works till n/(3^k) = 1 implying k = log_3(n). Substituting in T(n) = 3^(log_3(n)) * T(1) + [summation (from i = 0 to log_3(n-1)) of 1]. Given each term in the sum is constant, the summation simplifies to O(log n).

Combining this term with the original T(n):

T(n) = n + O(log n)

which gives a tight constraint of Θ(n). This is because the big O is a lower order term. Overall, the algorithm is linear with input n.
