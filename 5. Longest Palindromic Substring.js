function longestPalindrome(s) {
    let jz = '', z = s.length
    
    for(let i=0;i<z;i++) {
        let char = s[i],l1 = i,l2 = i
        while(l1 > 0 && s[l1 - 1] === char) {
            l1--;
        }
        while(l2 < s.length && s[l2 + 1] === char) {
            l2++;
            i++;
        }
        while(l1 >=0 && l2 < s.length - 1 && s[l1 - 1] === s[l2 + 1]) {
            l1--;
            l2++;
        }
        if(jz.length < (l2 - l1 + 1)) jz = s.slice(l1, right + 1);
    }
    return jz;
};