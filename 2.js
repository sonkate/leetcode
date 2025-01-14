/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            arr.push(s[i]);
        } else if (s[i] === ')' && arr[arr.length - 1] === '(') {
            arr.pop();
        } else if (s[i] === ']' && arr[arr.length - 1] === '[') {
            arr.pop();
        } else if (s[i] === '}' && arr[arr.length - 1] === '{') {
            arr.pop();
        } else {
            return false;
        }
    }
    return arr.length === 0;
};

console.log(isValid("()"));