// 647. Palindromic Substrings
// Medium

// 8226

// 178

// Add to List

// Share
// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


function countSubstrings(s){
    var result = 0, z=s.length
    function helper(l1, l2){
        while (l1>=0&&l2< z&&s[l1]==s[l2]){  
            result++
            l1-- 
            l2++
        }
    }
    for (let ni=0;ni<z;ni++){ 
        helper(ni, ni)                           
        helper(ni, ni + 1)                  
    }
    return result
}