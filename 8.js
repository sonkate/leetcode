/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    start = 0;
    end = nums.length - 1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};

console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 11)));