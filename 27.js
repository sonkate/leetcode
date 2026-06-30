/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let current = RomanNumerals[s[i]];
        let next = RomanNumerals[s[i + 1]];
        if (next > current) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
};

// dict of roman numerals and their integer values
const RomanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}