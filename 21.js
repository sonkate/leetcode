/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    lengthA = a.length;
    lengthB = b.length;
    let carry = 0;
    let result = '';
    i = Math.max(lengthA, lengthB);
    let j = -1;
    while (Math.abs(j) <= i) {
        aNum = parseInt(a.at(j)) || 0;
        bNum = parseInt(b.at(j)) || 0;
        temp = aNum + bNum + carry;
        if (temp == 3) {
            result = '1' + result;
            carry = 1;
        } else if (temp == 2) {
            result = '0' + result;
            carry = 1;
        } else {
            result = temp.toString() + result;
            carry = 0;
        }
        j--;
    }
    return carry == 1 ? '1' + result : result;
};
console.log(addBinary(a = "1111", b = "1111"));