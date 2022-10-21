// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

function longestCommonSubsequence(t1, t2){
    z = t1.length, q = t2.length, jz = Array.from(Array(z+1), () => new Array(q+1).fill(0))
   for(let ni=1;ni<=z;ni++){
       for(let no=1;no<=q;no++){
           if(t1[ni-1]===t2[no-1]) jz[ni][no] = jz[ni-1][no-1] + 1
           else jz[ni][no] = Math.max(jz[ni-1][no], jz[ni][no-1])
       }
   }
   return jz[z][q]
}