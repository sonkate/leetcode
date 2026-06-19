// Top k frequent elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let counter = new Map();

    for (let num of nums) {
        counter.set(num, (counter.get(num) || 0) + 1);
    }
    // Sort the map by frequency and return the top k elements
    counter =  new Map([...counter.entries()].sort((a, b) => b[1] - a[1]).slice(0, k));
    return Array.from(counter.keys());
};

console.log(topKFrequent(nums = [1,2,1,2,1,2,3,1,3,2], k = 2));