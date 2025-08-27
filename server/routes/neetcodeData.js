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
    name: "Encode and Decode Strings",
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
        let forward = [...nums];
        let backward = [...nums];

        for (let i = 1; i < nums.length - 1; i++) {
          forward[i] = forward[i-1] * nums[i];
        }
        for (let j = nums.length - 2; j >= 0; j++) {
          backward[j] = backward[j + 1] * nums[j];
        }

        let res = [];
        for (let k = 0; k < nums.length; k++) {
          if (k === 0) {
            res[k] = backward[k + 1];
          } else if (k === nums.length - 1) {
            res[k] = forward[k -1];
          } else {
            res[k] = forward[k - 1] * backward[k + 1]; 
          }
        }
        
        return res;
      }
    }
    `,
    approach: `
      One things I want to notice that when we want to copy the entire element of the array in JS, make sure you do 
      "let forward = [...nums]" instead of "let forward = nums" because if we use the second way, it would create a 
      reference to the original array and both will be affacted but the first way is that you create the shalow copy
      and will not affact the original copy.

      For the approach to this question, we created two array forward (multiply foward) and backward (multiply backward)
    `,
  },
  {
    id: 8,
    difficulty: "Medium",
    name: "Valid Sudoku",
    topic: "Arrays & Hashing",
    question: `
    You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:    
    
    1. Each row must contain the digits 1-9 without duplicates.
    2. Each column must contain the digits 1-9 without duplicates.
    3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.

    Example 1:
    Input: board = 
    [["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","8",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]]

    Output: true


    Example 2:
    Input: board = 
    [["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","1",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]]

    Output: false

    `,
    solution: `
    isValidSudoku(board) {
        let map = new Map();

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let val = board[row][col];
                if (val !== ".") {
                    let rowKey = \`\${val} in row \${row}\`;
                    let colKey = \`\${val} in col \${col}\`;
                    let boxKey = \`\${val} in box \${Math.floor(row / 3)}-\${Math.floor(col / 3)}\`;

                    if (map.has(rowKey) || map.has(colKey) || map.has(boxKey)) {
                        return false;
                    }

                    map.set(rowKey, true);
                    map.set(colKey, true);
                    map.set(boxKey, true);
                }
            }
        }
        return true;
    }
`,
    approach: `
      The way to approach this problem is we store them in hashmap as string of row / col and table that element belongs to.
    `,
  },
  {
    id: 9,
    difficulty: "Medium",
    name: "Longest Consecutive Sequence",
    topic: "Arrays & Hashing",
    question: `
    Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.    
    
    A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.
    
    You must write an algorithm that runs in O(n) time.

    Example 1:
    Input: nums = [2,20,4,10,3,4,5]
    Output: 4

    Example 2:
    Input: nums = [0,3,2,5,4,6,1,1]
    Output: 7
    
    `,
    solution: `
    class Solution {
      longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 1;

        for (let num of nums) {
          if (!set.has(num - 1)) {
            let length = 1;
            while (set.has(num + length)) {
              length++;
            }
            
            longest = Math.max(longest, length);
          }
        }

        return longest;
      }
    }
    `,
    approach: `
      The brute tio solve this problem is loop through the array and at each element we find the max continuous part we could get and store it

      Instead do it for each element we only do it for the "start elment which is the one dont have num - 1" and find the continuous for those

      O(n)
    `,
  },
  {
    id: 10,
    difficulty: "Easy",
    name: "Valid Palindrome",
    topic: "Two Pointers",
    question: `
    Given a string s, return true if it is a palindrome, otherwise return false.    
        
    A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
    
    Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

    Example 1:
    Input: s = "Was it a car or a cat I saw?"
    Output: true

    Example 2:
    Input: s = "tab a cat"
    Output: false
    
    `,
    solution: `
    class Solution {
      isPalindrome(s) {
        s = s.toLowerCase();
        const arr = [...s].filter((char) => this.isAlphanumeric(char));

        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
          if (arr[left] !== arr[right]) {
            return false;
          }
          left++;
          right--;
        }
        return true;
      }
      isAlphanumeric(char) {
        const regex = /^[a-zA-Z0-9]*/;
        return regex.test(char);
      }
    }
    `,
    approach: `
      The only hard part of this problem is regex to eliminate white space and special characters.
    `,
  },
  {
    id: 11,
    difficulty: "Medium",
    name: "Valid Palindrome",
    topic: "Two Pointers",
    question: `
    Given an array of integers numbers that is sorted in non-decreasing order.

    Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

    There will always be exactly one valid solution.

    Your solution must use O(1) additional space.

    Example 1:
    Input: numbers = [1,2,3,4], target = 3
    Output: [1,2]
    
    `,
    solution: `
    class Solution {
      twoSum(numbers, target) {
        let left = 0;
        left right = numbers.length - 1;

        while (left < right) {
          let current = numbers[left] + numbers[right];

          if (current === target) {
            return [left+1, right+1];
          } else if (current < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
    `,
    approach: `
      Easy Easy lemon tree
    `,
  },
];

export default problems;
