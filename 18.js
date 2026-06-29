/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const counter = new Map();

    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    // Count even occurrences and one odd occurrence if available
    let length = 0;
    let hasOdd = false;

    for (let count of counter.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1; // Add the even part
            hasOdd = true; // Mark that we have an odd occurrence
        }
    }

    // If there's at least one odd occurrence, we can place one in the center
    if (hasOdd) {
        length += 1;
    }
    return length;
}