/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // remove all non-alphanumeric characters from the string
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for ( let i = 0; i < s.length/2; i ++){
        if (s[i]!== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));