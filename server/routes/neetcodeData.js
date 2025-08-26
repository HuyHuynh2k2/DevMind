const problems = [
  {
    id: 1,
    difficulty: "Easy",
    name: "Contains Duplicate",
    topic: "Arrays & Hashing",
    question: `
    Given an integer array nums, return true if any value appears more than once in the array, otherwise return false

    Example 1:
    Input: nums = [1, 2, 3, 3]
    Output: true

    Example 2:
    Input: nums = [1, 2, 3, 4]
    Output: false
    `,
    solution: `
    class Solution {
      hasDuplicate(nums) {
        let map = new Map();

        for (const num of nums) {
          if (map.has(num)) {
            return true;
          } else {
            map.set(num, 1)
          }
        }
        return false;
      }
    }
    `,
    approach: `
    For this question we used Map to store the frequency of each number if this number already existed return true otherwise set it to 1
    `,
  },
  {
    id: 2,
    difficulty: "Easy",
    name: "Valid Diagram",
    topic: "Arrays & Hashing",
    question: `
    Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false,

    An anagram is a string that contains the exact same characters as another string, but the order of the characters can be differnet.

    Example 1:
    Input: s = "racecar", t = "carrace"
    Output: true

    Example 2:
    Input: s = "jar", t = "jam"
    Output: false
    `,
    solution: `
    class Solution {
      isAnagram(s, t) {
        let mapS = new Map();
        let mapT = new Map();

        for (let i = 0; i < s.length; i++) {
          mapS.set(s[i], mapS.get(s[i]) ? mapS.get(s[i]) + 1 : 1);
          mapT.set(t[i], mapT.get(t[i]) ? mapT.get(t[i]) + 1 : 1);
        }
        
        if (s.length !== t.length) return false;

        for (const ch of mapS.keys()) {
          if (!(mapT.has(ch) &&  mapT.get(ch) === mapS.get(ch))) {
            return false;
          }
        }

        return true;
      }
    }
    `,
    approach: `
      We could compare the frequncy of each characters in the string using HashMap
    `,
  },
  {
    id: 3,
    difficulty: "Easy",
    name: "Two Sum",
    topic: "Arrays & Hashing",
    question: `
    Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + num[j] == target and i != j.

    You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

    Example 1:
    Input: nums = [4,5,6], target = 10
    Output: [0, 1]

    Example 2:
    Input: nums = [4, 5, 6], target = 10
    Output: [0, 2]
    `,
    solution: `
    class Solution {
      twoSum(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
          let current = nums[left] + nums[right];

          if (current === target) {
            return [left, right];
          } else if(current < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
    `,
    approach: `
      We could use HashMap way, which we store key as "target - current" and value as its index and loop until we found a pair
      
      In other hands we could use two pointer to find a pairs 
    `,
  },
  {
    id: 4,
    difficulty: "Medium",
    name: "Group Anagram",
    topic: "Arrays & Hashing",
    question: `
    Given an array of string strs, group all anagrams together into sublists. You may return the output in any order.

    An anagram is a string that contains the next same characters as another string, but the order of the characters can be different

    Example 1:
    Input: strs = ["act","pots","tops","cat","stop","hat"]
    Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

    Example 2:
    Input: nums = ["x"]
    Output: [["x"]]
    `,
    solution: `
    class Solution {
      groupAnagrams(strs) {
        let map = new Map();
        
        for (const str of strs) {
          const sortedStr = str.split("").sort().join("");

          if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
          } else {
            let arr = [str];
            map.set(sortedStr, arr);
          }
        }
        
        let res = [];

        for (const array of map.values()) {
          res.push(array);
        } 
        
        return res;
      }
    }
    `,
    approach: `
      For this problem we for each character we should sort them and store in the Map as key and values would be the array of original words
    `,
  },
  {
    id: 5,
    difficulty: "Medium",
    name: "Top K Frequent Elements",
    topic: "Arrays & Hashing",
    question: `
    Given an integer array nums and an integer k, return the k most frequent elements within the array.

    The test cases are generated such that the answer is always unique.

    Example 1:
    Input: nums = [1,2,2,3,3,3], k = 2
    Output: [2,3]

    Example 2:
    Input: nums = [7,7], k = 1
    Output: [7]
    `,
    solution: `
    class Solution {
      topKFrequency(nums, k) {
        let map = new Map();
        
        for (const num of nums) {
          map.set(num, map.get(num) ? map.get(num) + 1 : 1);
        }
        
        let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
        let res = [];
        let count = 0;
        for (const [key, value] of sortedMap.entries()) {
          if (count < k) {
            res.push(key);
          } else {
            break; 
          }
          count++;
        }

        return res;
      }
    }
    `,
    approach: `
    For this problem we could use map to store the frequency of each number, and store them in the Queue/Array and pop k element out
    `,
  },
  {
    id: 6,
    difficulty: "Medium",
    name: "Top K Frequent Elements",
    topic: "Arrays & Hashing",
    question: `
    Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

    Example 1:
    Input: ["neet","code","love","you"]
    Output:["neet","code","love","you"]

    Example 2:
    Input: ["we","say",":","yes"]
    Output: ["we","say",":","yes"]
    `,
    solution: `
    class Solution {
      encode(strs) {
        let res = "";

        for (const str of strs) {
          res += (str.length + "#" + str);
        }

        return res;
      }

      encode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
          let j = i;

          while (str[i] !== "#") {
            j++;
          }

          let len = parseInt(str.slice(i, j));

          res.push(str.slice(j + 1, j + len + 1));

          i = j + 1 + len;
        }

        return res;
      }
    }
    `,
    approach: `
      No Hints
    `,
  },
  {
    id: 7,
    difficulty: "Medium",
    name: "Products of Array Except Self",
    topic: "Arrays & Hashing",
    question: `
    Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
    
    Example 1:
    Input: nums = [1,2,4,6]
    Output: [48,24,12,8]

    Example 2:
    Input: nums = [-1,0,1,2,3]
    Output: [0,-6,0,0,0]
    `,
    solution: `
    class Solution {
      productExceptSelf(nums) {
        let forward = [nums[0]];
        let backward = [];

        for (let i = 1; i < nums.length - 1; i++) {
          forward.push();
        }
      }
    }
    `,
    approach: `
      For this problem we set up forward and backward array 
    `,
  },
];

export default problems;
