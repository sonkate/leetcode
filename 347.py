# Top k frequent elements
from collections import Counter
from typing import List


def topKFrequent(nums: List[int], k: int) -> List[int]:
    count = Counter(nums)
    return [item for item, freq in count.most_common(k)]


# Example usage 1 Milion items
print(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2))
