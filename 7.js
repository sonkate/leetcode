/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    for (var i = 0; i < s.length; i++) {
        if (t.includes(s[i])) {
            t = t.replace(s[i], '');
        }
    }
    return t.length === 0;
};

console.log(isAnagram((s = 'anagram'), (t = 'nagaram')));
console.log(isAnagram((s = 'rat'), (t = 'car')));

var isAnagramV2 = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counter = new Map();

    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!counter.has(char) || counter.get(char) === 0) {
            return false;
        }
        counter.set(char, counter.get(char) - 1);
    }

    return true;
};
