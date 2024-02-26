function DnQ(array_in){
    if (array_in.length == 0){
        return 0;
    } // check for zero condition
    else if (array_in.length == 1){
        return array_in[0];
    } // check for exit condition
    else{
        // array_in.length/3 gives us the 3rd slice 
        // that we can then scale accoring to length
        var leftSum = DnQ(array_in.slice(0,array_in.length/3));
        // recursively compute the sum of the left part of the array
        var middleSum = DnQ(array_in.slice(array_in.length/3, 2 * (array_in.length/3)));
        // recursively compute the sum of the middle part of the array
        var rightSum = DnQ(array_in.slice(2 * (array_in.length/3)));
        // recursively compute the sum of the right part of the array
        
        return  leftSum + middleSum + rightSum;
        
    }
}
// We can outline the complexity of the above using 
// the following To analyze the runtime of the algorithm implemented above, let's consider the recurrence relation:
// T(n)=3T(n/3) + 1 where 1 is some constant time to combine the results
// This can then be broken down into the following steps:

// T(n)​= 3* T(n/3) + 1
//     = 3[3* T(n/9) + 1] + 1
//     = 3^2 * T(n/9)+3*1) + 1
//     = 3^2 * [3T(n/27) + 1]+ 3*1 + 1
//     = 3^3 * (T(n/27)) + 3^2*1 + 3*1 + 1

// This gives the General Pattern:
//     = 3^k * T(n/3^k) + [summation (from i = 0 to k-1) of 3^i * 1]
// works till  n/(3^k) = 1  implying k = log_3(n)
// substituting in T(n) = 3^(log_3(n)) * T(1) + [summation (from i = 0 to log_3(n-1)) of 1]
// given each term in the sum is constant the summation simplifies to O(log n)
// combining this term with the original T(n):
// T(n) = n + O(log n) which gives a tight constraint of Θ(n).
// this is because the big O is a lower order term.
// Overall, The algorithm is linear with input n

// Test 1
// [Running] node "/home/tyson/Documents/Cosc3020/divide-and-conquer-sum-tlimato/code.test.js"
// [Done] exited with code=0 in 0.049 seconds

// chatGPT was used to format things in markdown and debug the right sum error, I thought i had to specify a slice to the end but it's unecessary.
function divideAndConquerSum(a) {
    return DnQ (a);
}
