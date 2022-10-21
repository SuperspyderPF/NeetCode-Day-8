// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


function maxProduct(sol=[]){
    var z = sol.length
    if(!z) return 0
    var m1 = sol[0],m = sol[0],solution=sol[0]
    for(let ni=1;ni<=z-1;ni++){
        let t = m1 * sol[ni]
        m1 = Math.max(sol[ni], Math.max(m * sol[ni], m1 * sol[ni]))
        m = Math.min(sol[ni], Math.min(m * sol[ni], t))
        solution = Math.max(solution, m1)
    }
    return solution
}