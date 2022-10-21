// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

function rob(n){
    const z = n.length
    if(!z) return 0
    if(z === 1) return n[0]
    const jz = Array(n+1).fill(0)
    jz[0]=n[0]
    jz[1]=Math.max(n[0], n[1])
    for(let ni=2;ni<z;ni++){
        jz[ni]=Math.max(n[ni]+jz[ni-2],jz[ni-1])
    }
    return jz[jz.length-1]
    
}