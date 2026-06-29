var majorityElement = function(nums) {
    const counter = new Map();

    for (let num of nums) {
        counter.set(num, (counter.get(num) || 0) + 1);
    }
    let result = 0;
    for (let [key, value] of counter.entries()) {
        if (value > nums.length / 2) {
            result = key;
            break;
        }
    }
    return result;
};


console.log(majorityElement([2,2,1,1,1,1,2,2]));