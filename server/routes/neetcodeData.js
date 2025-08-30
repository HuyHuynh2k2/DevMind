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
    name: "TWO SUM V2",
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
  {
    id: 12,
    difficulty: "Medium",
    name: "3SUM",
    topic: "Two Pointers",
    question: `
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

    The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

    Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]

    Example 2:
    Input: nums = [0,1,1]
    Output: []
    
    `,
    solution: `
    class Solution {
      threeSum(nums) {
        let res = [];
        nums = nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
          if (i > 0 && nums[i] === nums[i + 1]) continue;
          const target = nums[i];

          let left = i + 1;
          let right = nums.length - 1;

          while (left < right) {
            
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;

            const sum = nums[left] + nums[right];

            if (sum + target === 0) {
              res.push(taget, nums[left], nums[right]);

              left++;
              right--;
            } else if (sum + target < 0) {
              left++; 
            } else {
              right--;
            }
          }
        }
        return res;
      }
    }
    `,
    approach: `
      This is tricky question, we could go through every element of the array and split array from index + 1 to end, and set up two pointer
      that would work but that is really hard to remove dupplicated array at the end before we return, for example res = [[1, 1, -2], [1, 1, -2]] 
      if we put it to the set and like "const set = new Set(res)" that would not work instead we have to convert them to String before put it to the set
      "const set = new Set(arr.map((a) => JOSN.stringify(a))) return Array.from(set).map(str => JSON.parse(str))"

      The easy way to solve is eleminate the duplicated case on the way we solving, so we sort the original array, and use while loop to
      move on if we see the next number same as current, do the same logic when we choose left and right pointer. One last thing I we need to
      remember is when we found a pair that plus sum to be 0 we do not stop but keep increment both left and right
    `,
  },
  {
    id: 13,
    difficulty: "Medium",
    name: "CONTAIN WITH MOST WATER",
    topic: "Two Pointers",
    question: `
    You are given an integer array heights where heights[i] represents the height of the ith bar.

    You may choose any two bars to form a container. Return the maximum amount of water a container can store.

    Example 1:
    Input: height = [1,7,2,5,4,7,3,6]
    Output: 36

    Example 2:
    Input: height = [2,2,2]
    Output: 4
    
    `,
    solution: `
    class Solution {
      maxArea(heights) {
        let max = 0;
        let left = 0;
        let right = heights.length - 1

        while (left < right) {
          cosnt h = Math.min(heights[left], heights[right]);
          const w = right - left;
          const area = w * h;
          max = Math.max(max, area);

          if (heights[left] <= heights[right]) {
            left++;
          } else {
            right--;
          }
        }
        return max
      }
    }
    `,
    approach: `
      Move smaller pointer to get a chance to have chance to get bigger value.
    `,
  },
  {
    id: 14,
    difficulty: "Hard",
    name: "TRAPPING RAIN WATER",
    topic: "Two Pointers",
    question: `
    You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

    Return the maximum area of water that can be trapped between the bars.

    Example 1:
    Input: height = [0,2,0,3,1,0,1,3,2,1]
    Output: 9
    
    `,
    solution: `
    class Solution {
        public int trap(int[] height) {
            if (height == null || height.length == 0) {
                return 0;
            }

            int n = height.length;
            int[] maxLeft = new int[n];
            int[] maxRight = new int[n];

            // Fill maxLeft array
            maxLeft[0] = height[0];
            for (int i = 1; i < n; i++) {
                maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
            }

            // Fill maxRight array
            maxRight[n - 1] = height[n - 1];
            for (int i = n - 2; i >= 0; i--) {
                maxRight[i] = Math.max(maxRight[i + 1], height[i]);
            }

            // Calculate the trapped water
            int trappedWater = 0;
            for (int i = 0; i < n; i++) {
                trappedWater += Math.min(maxLeft[i], maxRight[i]) - height[i];
            }

            return trappedWater;
        }
    }
    `,
    approach: `
      Will go back
    `,
  },
  {
    id: 15,
    difficulty: "Medium",
    name: "MINIMUM STACK",
    topic: "Stack",
    question: `
    Design a stack class that supports the push, pop, top, and getMin operations.

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

    Each function should run in O(1)

    Example 1:

    Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

    Output: [null,null,null,null,0,null,2,1]

    Explanation:
    MinStack minStack = new MinStack();
    minStack.push(1);
    minStack.push(2);
    minStack.push(0);
    minStack.getMin(); // return 0
    minStack.pop();
    minStack.top();    // return 2
    minStack.getMin(); // return 1
    `,
    solution: `
      class MinStack {
      constructor() {
        this.stack = [];
        this.minStack = [];
      }

      /**
       * @param {number} val
       * @return {void}
       */
      push(val) {
        this.stack.push();
        val = Math.min(val, this.stack.length === 0 ? val : this.stack[this.stack.length - 1]);
        this.stack.push(val);
      }

      /**
       * @return {void}
       */
      pop() {
        this.stack.pop();
        this.minStack.pop();
      }

      /**
       * @return {number}
       */
      top() {
          return this.stack[this.stack.length - 1];
      }

      /**
       * @return {number}
       */
      getMin() {
        return this.minStack[this.minStack.length - 1];
      }
    }
    `,
    approach: `
      Every funtion is O(1) in term of time complexity, we use the minStack to make sure at every point of the stack
      we know the min value at the index.
    `,
  },
  {
    id: 16,
    difficulty: "Medium",
    name: "EVALUATE REVERSE POLISH NOTATION",
    topic: "Stack",
    question: `
    You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

    Return the integer that represents the evaluation of the expression.

    The operands may be integers or the results of other operations.
    The operators include '+', '-', '*', and '/'.
    Assume that division between integers always truncates toward zero.

    Example 1:

    Input: tokens = ["1","2","+","3","*","4","-"]
    Output: 5

    Explanation: ((1 + 2) * 3) - 4 = 5
    `,
    solution: `
      class Solution {
        evalRPN(tokens) {
          let arr = ["+", "-", "*", "/"];
          let stack = [];

          for (const t of tokens) {
            if (arr.includes(t)) {
              let num1 = Number(stack.pop());
              let num2 = Number(stack.pop());

              switch (t) {
                case "+":
                  stack.push(num2 + num1);
                  break;
                case "-": 
                  stack.push(num2 - num1);
                  break;
                case "*":
                  stack.push(num2 * num1);
                  break;
                case "/":
                  stack.push(Math.trunc(num2 / num1));
                  break;
              } else {
                stack.push(t);
              }
            }
          }
          
          return stack[0];
        }
      }

    `,
    approach: `
      Tips as soon as we encounter a operands pop 2 num out of stack and push the result back in until we done.
    `,
  },
  {
    id: 17,
    difficulty: "Medium",
    name: "GENTERATE PARENTHESES",
    topic: "Stack",
    question: `
    You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

    Example 1:

    Input: n = 1
    Output: ["()"]

    Example 2:

    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]
    `,
    solution: `
    class Solution {
        generateParenthesis(n) {
          let stack = [];
          let res = [];

          function backtrack(open, close) {
            if (open === n && close === n) {
              res.push(stack.join(""));
              return;
            }

            if (open < n) {
              stack.push("(");
              backtrack(open + 1, close);
              stack.pop();
            }

            if (close < open) {
              stack.push(")");
              backtrack(open, close + 1);
              stack.pop();
            }
          }
          backtrack(0, 0);

          return res;
        }
    }
    `,
    approach: `
      Rules:
      1. If open = close = n -> considered as res case
      2. We could add "(" as long as open < n
      3. We could add ")" as long as close < open
    `,
  },
];

export default problems;
