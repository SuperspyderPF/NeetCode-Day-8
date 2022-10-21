// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0


function coinChange(c, a) {
    var jz = Array(a+1).fill(Infinity)
    jz[0] = 0
    for(let ni=1;ni<=a;ni++){
        for(const cz of c){
            if(ni-cz>=0) jz[ni] = Math.min(jz[ni],1+jz[ni-cz])
        }
    }
    return jz[a] > a ? -1 : jz[a]
    
};