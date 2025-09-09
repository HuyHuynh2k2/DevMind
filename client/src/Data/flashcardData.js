const data = [
  {
    index: 0,
    question:
      "What is the difference between var, let, and const in JavaScript?",
    answer:
      "var is function-scoped and can be redeclared; let and const are block-scoped. const cannot be reassigned.",
  },
  {
    index: 1,
    question: "Explain the difference between == and === in JavaScript.",
    answer:
      "== checks for value equality with type coercion; === checks for both value and type equality without coercion.",
  },
  {
    index: 2,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is when a function retains access to variables from its lexical scope even after the outer function has returned.",
  },
  {
    index: 3,
    question: "What is the difference between stack and heap memory?",
    answer:
      "Stack stores primitive values and function calls, while heap stores objects and reference types.",
  },
  {
    index: 4,
    question: "What are HTTP status codes 200, 400, and 500 used for?",
    answer:
      "200 = OK, 400 = Bad Request (client error), 500 = Internal Server Error (server issue).",
  },
  {
    index: 5,
    question: "What is REST API?",
    answer:
      "An architectural style for designing APIs that use HTTP methods for CRUD operations.",
  },
  {
    index: 6,
    question: "What is the difference between SQL and NoSQL databases?",
    answer:
      "SQL databases are relational and use structured schemas; NoSQL databases are non-relational and flexible in structure.",
  },
  {
    index: 7,
    question: "What is a foreign key in SQL?",
    answer: "A column that establishes a relationship between two tables.",
  },
  {
    index: 8,
    question: "What is normalization in databases?",
    answer:
      "The process of organizing data to reduce redundancy and improve integrity.",
  },
  {
    index: 9,
    question: "Explain the difference between GET and POST requests.",
    answer:
      "GET retrieves data and is idempotent; POST sends data to create/update resources and is not idempotent.",
  },
  {
    index: 10,
    question:
      "What is the difference between an interface and an abstract class in Java?",
    answer:
      "Interfaces define contracts without implementation; abstract classes can have both abstract and concrete methods.",
  },
  {
    index: 11,
    question: "What is the difference between threads and processes?",
    answer:
      "Processes are independent execution units; threads are smaller units that share a process's memory space.",
  },
  {
    index: 12,
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code runs line by line; asynchronous code allows non-blocking execution via callbacks, promises, or async/await.",
  },
  {
    index: 13,
    question: "What is a promise in JavaScript?",
    answer:
      "An object representing the eventual completion or failure of an asynchronous operation.",
  },
  {
    index: 14,
    question: "What is Big-O notation?",
    answer:
      "A way to express the time or space complexity of an algorithm in terms of input size growth.",
  },
  {
    index: 15,
    question: "What is the difference between BFS and DFS in graph traversal?",
    answer:
      "BFS explores level by level using a queue; DFS explores depth-first using a stack or recursion.",
  },
  {
    index: 16,
    question: "What is memoization?",
    answer:
      "An optimization technique where results of expensive function calls are cached for reuse.",
  },
  {
    index: 17,
    question: "What is the difference between shallow copy and deep copy?",
    answer:
      "Shallow copy copies only top-level properties; deep copy duplicates nested objects as well.",
  },
  {
    index: 18,
    question: "What is CORS and why is it important?",
    answer:
      "Cross-Origin Resource Sharing controls how browsers allow resources to be requested from a different domain.",
  },
  {
    index: 19,
    question: "What is garbage collection in programming?",
    answer:
      "Automatic memory management that frees unused objects from memory.",
  },
  {
    index: 20,
    question: "What is the difference between TCP and UDP?",
    answer:
      "TCP is reliable and connection-oriented; UDP is faster but connectionless and less reliable.",
  },
  {
    index: 21,
    question: "What is the difference between an array and a linked list?",
    answer:
      "Arrays have fixed size and allow random access; linked lists have dynamic size but only sequential access.",
  },
  {
    index: 22,
    question: "What is a hash table?",
    answer:
      "A data structure that stores key-value pairs with fast lookups using hash functions.",
  },
  {
    index: 23,
    question: "What is an API gateway?",
    answer:
      "A server that acts as an entry point for multiple APIs, handling routing, authentication, and rate limiting.",
  },
  {
    index: 24,
    question: "What is JWT?",
    answer:
      "JSON Web Token, a compact token format used for authentication and secure data exchange.",
  },
  {
    index: 25,
    question: "Tell me about yourself.",
    answer:
      "Summarize your background, key skills, and what you're looking for in the role.",
  },
  {
    index: 26,
    question: "Describe a challenging project you worked on.",
    answer:
      "Explain the problem, your role, the actions you took, and the result.",
  },
  {
    index: 27,
    question: "Tell me about a time you disagreed with a team member.",
    answer:
      "Explain the situation, how you communicated respectfully, and the resolution.",
  },
  {
    index: 28,
    question: "What is your greatest strength?",
    answer:
      "Highlight a skill relevant to the role and give an example of how you've used it.",
  },
  {
    index: 29,
    question: "What is your biggest weakness?",
    answer:
      "Choose a real weakness and explain how you're working to improve it.",
  },
  {
    index: 30,
    question: "Tell me about a time you missed a deadline.",
    answer:
      "Be honest, explain the cause, and describe what you did to prevent recurrence.",
  },
  {
    index: 31,
    question: "How do you handle stress at work?",
    answer:
      "Explain strategies like prioritization, time management, and breaks.",
  },
  {
    index: 32,
    question: "Tell me about a time you worked in a diverse team.",
    answer: "Share an experience and how diversity improved team performance.",
  },
  {
    index: 33,
    question: "Describe a situation where you showed leadership.",
    answer:
      "Give an example of taking initiative or guiding others toward a goal.",
  },
  {
    index: 34,
    question: "Tell me about a time you learned a new skill quickly.",
    answer: "Explain how you approached the learning process and applied it.",
  },
  {
    index: 35,
    question: "How do you prioritize tasks when everything is urgent?",
    answer:
      "Describe prioritization techniques and communication with stakeholders.",
  },
  {
    index: 36,
    question: "Tell me about a mistake you made and what you learned.",
    answer: "Share the context, the impact, and the steps you took to improve.",
  },
  {
    index: 37,
    question: "How do you handle feedback from a manager?",
    answer:
      "Explain how you listen, process, and act on constructive feedback.",
  },
  {
    index: 38,
    question: "Describe a time you solved a problem creatively.",
    answer: "Give an example where you used out-of-the-box thinking.",
  },
  {
    index: 39,
    question: "Tell me about a project where you worked with tight deadlines.",
    answer: "Explain how you planned and executed effectively.",
  },
  {
    index: 40,
    question: "What motivates you at work?",
    answer:
      "Describe what drives you, such as learning, challenges, or impact.",
  },
  {
    index: 41,
    question: "Tell me about a time you worked with limited resources.",
    answer: "Explain how you adapted and still achieved the goal.",
  },
  {
    index: 42,
    question:
      "Describe a conflict you had with a client and how you handled it.",
    answer: "Focus on professionalism, communication, and resolution.",
  },
  {
    index: 43,
    question: "Tell me about a time you improved a process.",
    answer: "Share the problem, your solution, and measurable results.",
  },
  {
    index: 44,
    question: "How do you manage competing priorities?",
    answer: "Discuss tools and methods for balancing tasks effectively.",
  },
  {
    index: 45,
    question: "Tell me about a time you exceeded expectations.",
    answer: "Describe the situation and the extra effort you put in.",
  },
  {
    index: 46,
    question: "Describe a time you worked with a difficult team member.",
    answer: "Explain how you navigated the situation to maintain productivity.",
  },
  {
    index: 47,
    question: "Tell me about a time you took ownership of a problem.",
    answer: "Share an example where you proactively solved an issue.",
  },
  {
    index: 48,
    question: "What is your long-term career goal?",
    answer: "Be honest and align it with the company's opportunities.",
  },
  {
    index: 49,
    question: "Why do you want to work here?",
    answer:
      "Show you've researched the company and align your goals with theirs.",
  },
];

export default data;
