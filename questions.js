// ============================================================
//  QUESTIONS.JS — Full Database (330 Questions)
// ============================================================

const questions = [
  // ✅ 1. Loop Detection in Linked List
  {
    topic: "Loop Detection in Linked List",
    question: "Which algorithm is most commonly used to detect a loop in a linked list?",
    options: ["Merge Sort", "Floyd’s Cycle Detection", "KMP", "Prim’s Algorithm"],
    answer: 1
  },
  {
    topic: "Loop Detection in Linked List",
    question: "Floyd’s algorithm uses which two pointers?",
    options: ["Start and End", "Top and Bottom", "Slow and Fast", "Head and Tail"],
    answer: 2
  },
  {
    topic: "Loop Detection in Linked List",
    question: "Time complexity of Floyd's Loop Detection method?",
    options: ["O(n²)", "O(log n)", "O(n)", "O(n log n)"],
    answer: 2
  },
  {
    topic: "Loop Detection in Linked List",
    question: "Space complexity of Floyd’s algorithm?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    answer: 2
  },
  {
    topic: "Loop Detection in Linked List",
    question: "Which condition indicates a loop while using slow/fast pointers?",
    options: ["fast == NULL", "slow == NULL", "slow == fast", "fast->next == NULL"],
    answer: 2
  },
  {
    topic: "Loop Detection in Linked List",
    question: "To find loop length, you must:",
    options: ["Reverse the list", "Count nodes until pointers meet again", "Delete nodes", "Apply binary search"],
    answer: 1
  },
  {
    topic: "Loop Detection in Linked List",
    question: "To remove loop, you first need to find:",
    options: ["Middle node", "Starting node of loop", "Tail", "Node before tail"],
    answer: 1
  },
  {
    topic: "Loop Detection in Linked List",
    question: "Which is NOT a method to detect a loop?",
    options: ["Hashing", "Slow-Fast pointer", "Recursion depth check", "Marking nodes"],
    answer: 2
  },
  {
    topic: "Loop Detection in Linked List",
    question: "When fast becomes NULL, it means:",
    options: ["Loop exists", "Loop does not exist", "List destroyed", "Memory leak"],
    answer: 1
  },
  {
    topic: "Loop Detection in Linked List",
    question: "Hashset-based detection has complexity:",
    options: ["O(1) time, O(1) space", "O(n) time, O(n) space", "O(n²) time, O(1) space", "O(n log n) time, O(1) space"],
    answer: 1
  },

  // ✅ 2. Sort the Bitonic Doubly Linked List
  {
    topic: "Sort the Bitonic Doubly Linked List",
    question: "A bitonic DLL is one that:",
    options: ["Only increases", "Only decreases", "First increases then decreases", "Is circular"],
    answer: 2
  },
  {
    topic: "Sort the Bitonic Doubly Linked List",
    question: "Sorting a bitonic DLL usually involves:",
    options: ["Splitting and merging", "Reversing entire list", "Using heaps", "Using BFS"],
    answer: 0
  },
  {
    topic: "Sort the Bitonic Doubly Linked List",
    question: "Time complexity of optimal bitonic DLL sort?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
    answer: 1
  },
  {
    topic: "Sort the Bitonic Doubly Linked List",
    question: "During sorting you first identify:",
    options: ["Minimum", "Peak node", "Last node", "Middle node"],
    answer: 1
  },
  {
    topic: "Sort the Bitonic Doubly Linked List",
    question: "After peak is found you generally:",
    options: ["Delete nodes", "Reverse second half", "Reverse first half", "Swap adjacent nodes"],
    answer: 1
  },
  {
    topic: "Sort the Bitonic Doubly Linked List",
    question: "Merging two sorted DLL halves costs:",
    options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
    answer: 1
  },
  {
    topic: "Sort the Bitonic Doubly Linked List",
    question: "Bitonic list sorting uses modified:",
    options: ["Merge sort", "Quick sort", "Heap sort", "Counting sort"],
    answer: 0
  },
  {
    topic: "Sort the Bitonic Doubly Linked List",
    question: "Which pointer allows reverse traversal?",
    options: ["next", "prev", "tail", "head"],
    answer: 1
  },
  {
    topic: "Sort the Bitonic Doubly Linked List",
    question: "Peak node satisfies:",
    options: ["prev->data > data", "next->data < data", "prev->data < data and next->data < data", "next = NULL"],
    answer: 2
  },
  {
    topic: "Sort the Bitonic Doubly Linked List",
    question: "Memory overhead during sorting:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answer: 0
  },

  // ✅ 3. Segregate Even & Odd Nodes
  {
    topic: "Segregate Even & Odd Nodes",
    question: "Segregating even/odd nodes usually means:",
    options: ["Sorting the list", "Rearranging based on data parity", "Deleting odd nodes", "Reversing list"],
    answer: 1
  },
  {
    topic: "Segregate Even & Odd Nodes",
    question: "The relative order of nodes is usually:",
    options: ["Lost", "Preserved", "Random", "Not defined"],
    answer: 1
  },
  {
    topic: "Segregate Even & Odd Nodes",
    question: "Ideal space complexity for segregation:",
    options: ["O(n)", "O(n²)", "O(1)", "O(log n)"],
    answer: 2
  },
  {
    topic: "Segregate Even & Odd Nodes",
    question: "The algorithm typically builds two lists:",
    options: ["Prime and Composite", "Even and Odd", "Small and Large", "First and Last"],
    answer: 1
  },
  {
    topic: "Segregate Even & Odd Nodes",
    question: "Time complexity of segregation:",
    options: ["O(log n)", "O(n²)", "O(n)", "O(1)"],
    answer: 2
  },
  {
    topic: "Segregate Even & Odd Nodes",
    question: "Which nodes appear first in output?",
    options: ["Odd", "Even", "Largest", "Smallest"],
    answer: 1
  },
  {
    topic: "Segregate Even & Odd Nodes",
    question: "The final list is formed by:",
    options: ["Merging odd-first then even", "Merging even-first then odd", "Reversing even list", "Rotating nodes"],
    answer: 1
  },
  {
    topic: "Segregate Even & Odd Nodes",
    question: "Which pointer is NOT required?",
    options: ["Even head", "Odd head", "Tail", "Mid"],
    answer: 3
  },
  {
    topic: "Segregate Even & Odd Nodes",
    question: "A node with value 0 is considered:",
    options: ["Odd", "Even", "Neither", "Invalid"],
    answer: 1
  },
  {
    topic: "Segregate Even & Odd Nodes",
    question: "Does segregation require modifying node data?",
    options: ["Yes", "No", "Sometimes", "Only if duplicates"],
    answer: 1
  },

  // ✅ 4. Merge Sort for Doubly Linked List
  {
    topic: "Merge Sort for Doubly Linked List",
    question: "Merge sort on DLL uses which strategy?",
    options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
    answer: 1
  },
  {
    topic: "Merge Sort for Doubly Linked List",
    question: "Time complexity of merge sort on DLL?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
    answer: 1
  },
  {
    topic: "Merge Sort for Doubly Linked List",
    question: "Splitting a DLL for merge sort uses:",
    options: ["Slow/Fast pointers", "Hashing", "BFS", "Stack"],
    answer: 0
  },
  {
    topic: "Merge Sort for Doubly Linked List",
    question: "Merge step complexity:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answer: 1
  },
  {
    topic: "Merge Sort for Doubly Linked List",
    question: "Merge sort is preferred for linked lists because:",
    options: ["Doesn’t require random access", "Fastest for arrays", "Uses less memory", "Performs swaps easily"],
    answer: 0
  },
  {
    topic: "Merge Sort for Doubly Linked List",
    question: "Space complexity of merge sort on DLL (recursive)?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    answer: 1
  },
  {
    topic: "Merge Sort for Doubly Linked List",
    question: "For DLL merge, adjusting which pointer is crucial?",
    options: ["head", "prev", "tail", "random"],
    answer: 1
  },
  {
    topic: "Merge Sort for Doubly Linked List",
    question: "Merge sort is:",
    options: ["In-place for DLL", "Not in-place", "Only works for arrays", "Non-stable"],
    answer: 0
  },
  {
    topic: "Merge Sort for Doubly Linked List",
    question: "Merge sort stability for DLL:",
    options: ["Stable", "Unstable", "Depends", "Not sure"],
    answer: 0
  },
  {
    topic: "Merge Sort for Doubly Linked List",
    question: "Merge sort worst case complexity?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
    answer: 2
  },

  // ✅ 5. Minimum Stack
  {
    topic: "Minimum Stack",
    question: "Min stack supports retrieving:",
    options: ["Maximum", "Minimum", "Sum", "Product"],
    answer: 1
  },
  {
    topic: "Minimum Stack",
    question: "Additional structure commonly used:",
    options: ["Queue", "Hash map", "Auxiliary stack", "Heap"],
    answer: 2
  },
  {
    topic: "Minimum Stack",
    question: "Time complexity of push/pop/min for optimized min-stack:",
    options: ["O(log n)", "O(n)", "O(1)", "O(n²)"],
    answer: 2
  },
  {
    topic: "Minimum Stack",
    question: "A popular technique uses:",
    options: ["Encoding values", "Binary search", "No extra memory", "Sorting"],
    answer: 0
  },
  {
    topic: "Minimum Stack",
    question: "getMin() returns:",
    options: ["Middle", "Top", "Minimum", "Second top"],
    answer: 2
  },
  {
    topic: "Minimum Stack",
    question: "In encoding method, when pushing a smaller value, push:",
    options: ["Real value", "Special encoded value", "Max of values", "NULL"],
    answer: 1
  },
  {
    topic: "Minimum Stack",
    question: "Auxiliary stack stores:",
    options: ["Max values", "Min values", "Middle values", "Previous pops only"],
    answer: 1
  },
  {
    topic: "Minimum Stack",
    question: "Space complexity with auxiliary stack:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answer: 1
  },
  {
    topic: "Minimum Stack",
    question: "Encoded-value method space complexity:",
    options: ["O(n)", "O(log n)", "O(1) extra", "O(n²)"],
    answer: 2
  },
  {
    topic: "Minimum Stack",
    question: "Min stack requires:",
    options: ["Array", "Stack", "Graph", "Tree"],
    answer: 1
  },

  // ✅ 6. The Celebrity Problem
  {
    topic: "The Celebrity Problem",
    question: "A celebrity at a party is a person who:",
    options: ["Knows everyone", "Is known by everyone but knows no one", "Knows no one but is unknown", "Knows exactly one person"],
    answer: 1
  },
  {
    topic: "The Celebrity Problem",
    question: "Typical input for celebrity problem:",
    options: ["Graph adjacency list", "Matrix of acquaintance", "Tree", "Array"],
    answer: 1
  },
  {
    topic: "The Celebrity Problem",
    question: "Optimal time complexity:",
    options: ["O(n²)", "O(log n)", "O(n)", "O(n log n)"],
    answer: 2
  },
  {
    topic: "The Celebrity Problem",
    question: "Key elimination rule:",
    options: ["If A knows B, A cannot be celebrity", "If A doesn’t know B, A is celebrity", "B is celebrity if A knows B", "Random elimination"],
    answer: 0
  },
  {
    topic: "The Celebrity Problem",
    question: "Stack-based solution time complexity:",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
    answer: 1
  },
  {
    topic: "The Celebrity Problem",
    question: "After elimination, last candidate must be:",
    options: ["Accepted without checks", "Fully verified", "Deleted", "Ignored"],
    answer: 1
  },
  {
    topic: "The Celebrity Problem",
    question: "Which matrix entry indicates A knows B?",
    options: ["M[B][A] = 1", "M[A][B] = 1", "M[A][A] = 1", "M[B][B] = 1"],
    answer: 1
  },
  {
    topic: "The Celebrity Problem",
    question: "Celebrity knows:",
    options: ["Everyone", "No one", "Only friends", "Only enemies"],
    answer: 1
  },
  {
    topic: "The Celebrity Problem",
    question: "If no celebrity exists, return:",
    options: ["-1", "0", "NULL", "n"],
    answer: 0
  },
  {
    topic: "The Celebrity Problem",
    question: "Method minimizing comparisons:",
    options: ["Greedy elimination", "BFS", "DFS", "Sorting"],
    answer: 0
  },

  // ✅ 7. Iterative Tower of Hanoi
  {
    topic: "Iterative Tower of Hanoi",
    question: "Tower of Hanoi moves count for n disks:",
    options: ["2ⁿ − 1", "n!", "n²", "n log n"],
    answer: 0
  },
  {
    topic: "Iterative Tower of Hanoi",
    question: "Iterative version uses:",
    options: ["Queue", "Stack", "Bit manipulation", "Array rotations"],
    answer: 2
  },
  {
    topic: "Iterative Tower of Hanoi",
    question: "If number of disks is even:",
    options: ["A→C is first move", "A→B is first move", "C→A is first", "No rule"],
    answer: 1
  },
  {
    topic: "Iterative Tower of Hanoi",
    question: "If number of disks is odd:",
    options: ["A→C is first move", "A→B is first move", "B→C is first", "Random move"],
    answer: 0
  },
  {
    topic: "Iterative Tower of Hanoi",
    question: "Iterative solution cycles through moves:",
    options: ["Smallest disk", "Largest disk", "Middle disk", "Random disk"],
    answer: 0
  },
  {
    topic: "Iterative Tower of Hanoi",
    question: "Number of rods used:",
    options: ["2", "3", "4", "n"],
    answer: 1
  },
  {
    topic: "Iterative Tower of Hanoi",
    question: "Disk movement rules include:",
    options: ["Larger disk over smaller", "Smaller over larger", "Ignore sizes", "Move only even disks"],
    answer: 1
  },
  {
    topic: "Iterative Tower of Hanoi",
    question: "Iterative solution uses modulo operations on move number to determine:",
    options: ["Destination rod", "Disk size", "Stack ordering", "None"],
    answer: 0
  },
  {
    topic: "Iterative Tower of Hanoi",
    question: "Tower of Hanoi is a classic example of:",
    options: ["Dynamic programming", "Recursion", "Divide & conquer", "Hashing"],
    answer: 2
  },
  {
    topic: "Iterative Tower of Hanoi",
    question: "Iterative solution is preferred because:",
    options: ["Faster than recursive", "Avoids recursion stack", "Uses less memory", "Both B & C"],
    answer: 3
  },

  // ✅ 8. Stock Span Problem
  {
    topic: "Stock Span Problem",
    question: "Stock span of a day is:",
    options: ["Number of future days with higher price", "Number of consecutive previous days ≤ price", "Difference between max and min", "Number of peaks"],
    answer: 1
  },
  {
    topic: "Stock Span Problem",
    question: "Ideal data structure:",
    options: ["Queue", "BFS Tree", "Stack", "Heap"],
    answer: 2
  },
  {
    topic: "Stock Span Problem",
    question: "Time complexity (optimized):",
    options: ["O(n²)", "O(log n)", "O(n)", "O(n log n)"],
    answer: 2
  },
  {
    topic: "Stock Span Problem",
    question: "Stack stores:",
    options: ["Prices only", "Indexes", "Sum of previous values", "Entire array"],
    answer: 1
  },
  {
    topic: "Stock Span Problem",
    question: "Span for first day:",
    options: ["0", "1", "Depends", "-1"],
    answer: 1
  },
  {
    topic: "Stock Span Problem",
    question: "Span becomes large when:",
    options: ["Prices fall continuously", "Prices rise continuously", "Prices alternate", "Prices random"],
    answer: 1
  },
  {
    topic: "Stock Span Problem",
    question: "Naive solution complexity:",
    options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
    answer: 2
  },
  {
    topic: "Stock Span Problem",
    question: "Idea of optimized approach:",
    options: ["Remove larger values from stack", "Remove smaller values from stack", "Reverse array", "Use binary search"],
    answer: 1
  },
  {
    topic: "Stock Span Problem",
    question: "Stack is used in:",
    options: ["Next greater element", "Stock span", "Histogram problems", "All above"],
    answer: 3
  },
  {
    topic: "Stock Span Problem",
    question: "Stock span output is an array of size:",
    options: ["n-1", "n", "n+1", "log(n)"],
    answer: 1
  },

  // ✅ 9. Priority Queue Using Doubly Linked List
  {
    topic: "Priority Queue Using Doubly Linked List",
    question: "Priority queue stores elements with:",
    options: ["Random priority", "Assigned priority", "No priority", "Sorted keys only"],
    answer: 1
  },
  {
    topic: "Priority Queue Using Doubly Linked List",
    question: "Using DLL, insertion is usually:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answer: 1
  },
  {
    topic: "Priority Queue Using Doubly Linked List",
    question: "Highest priority is commonly defined as:",
    options: ["Smallest value", "Largest value", "Random", "Middle value"],
    answer: 0
  },
  {
    topic: "Priority Queue Using Doubly Linked List",
    question: "Best position to insert value x is:",
    options: ["Beginning", "End", "According to priority order", "Random"],
    answer: 2
  },
  {
    topic: "Priority Queue Using Doubly Linked List",
    question: "Extract-min operation:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answer: 0
  },
  {
    topic: "Priority Queue Using Doubly Linked List",
    question: "DLL is used because:",
    options: ["Supports backward traversal", "Uses no memory", "Faster than heap", "Unique keys"],
    answer: 0
  },
  {
    topic: "Priority Queue Using Doubly Linked List",
    question: "Removal from DLL:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answer: 0
  },
  {
    topic: "Priority Queue Using Doubly Linked List",
    question: "Priority queue using DLL is:",
    options: ["Better than binary heap", "Worse in time complexity", "Always optimal", "BFS-based"],
    answer: 1
  },
  {
    topic: "Priority Queue Using Doubly Linked List",
    question: "Tail pointer helps to access:",
    options: ["Middle", "End", "Max/Min depending on order", "Random"],
    answer: 2
  },
  {
    topic: "Priority Queue Using Doubly Linked List",
    question: "DLL priority queue is useful when:",
    options: ["Random access needed", "Frequent insertions in sorted order", "Need O(log n) operations", "Memory limited"],
    answer: 1
  },

  // ✅ 10. Sort Without Extra Space (Linked List)
  {
    topic: "Sort Without Extra Space (Linked List)",
    question: "Sorting LL without extra space means:",
    options: ["No temp arrays", "No recursion", "No loops", "Using dynamic memory"],
    answer: 0
  },
  {
    topic: "Sort Without Extra Space (Linked List)",
    question: "Best suited algorithm:",
    options: ["Quick sort", "Selection sort", "Merge sort (in-place)", "Heap sort"],
    answer: 2
  },
  {
    topic: "Sort Without Extra Space (Linked List)",
    question: "Linked list quicksort is often:",
    options: ["Faster", "Slower", "Easier", "Impossible"],
    answer: 1
  },
  {
    topic: "Sort Without Extra Space (Linked List)",
    question: "In-place merge sort uses:",
    options: ["Random access", "Pointer manipulation", "Array indices", "Binary tree"],
    answer: 1
  },
  {
    topic: "Sort Without Extra Space (Linked List)",
    question: "Extra space allowed:",
    options: ["O(n)", "O(log n) (recursion)", "O(n²)", "None"],
    answer: 1
  },
  {
    topic: "Sort Without Extra Space (Linked List)",
    question: "Sorting without extra space avoids:",
    options: ["Recursion", "New node creation", "Temp arrays/dummy lists", "Pointers"],
    answer: 2
  },
  {
    topic: "Sort Without Extra Space (Linked List)",
    question: "Best time complexity achievable:",
    options: ["O(n²)", "O(log n)", "O(n log n)", "O(1)"],
    answer: 2
  },
  {
    topic: "Sort Without Extra Space (Linked List)",
    question: "Comparative sorts that work without extra space for LL:",
    options: ["Merge sort", "Heap sort", "Bucket sort", "Counting sort"],
    answer: 0
  },
  {
    topic: "Sort Without Extra Space (Linked List)",
    question: "Sorting without extra space focuses on optimizing:",
    options: ["Comparisons", "Swaps", "Pointer changes", "Memory allocation"],
    answer: 3
  },
  {
    topic: "Sort Without Extra Space (Linked List)",
    question: "Which operation is heavily used?",
    options: ["XOR tricks", "Node rearrangement", "Graph traversal", "Searching"],
    answer: 1
  },

  // ✅ 11. Max Sliding Window
  {
    topic: "Max Sliding Window",
    question: "Sliding window maximum finds maximum in every:",
    options: ["Window of size K", "Subtree", "Random subset", "Prefix"],
    answer: 0
  },
  {
    topic: "Max Sliding Window",
    question: "Optimal data structure:",
    options: ["Stack", "Deque", "Queue", "Set"],
    answer: 1
  },
  {
    topic: "Max Sliding Window",
    question: "Time complexity:",
    options: ["O(n²)", "O(log n)", "O(n)", "O(n log n)"],
    answer: 2
  },
  {
    topic: "Max Sliding Window",
    question: "Elements in deque are kept:",
    options: ["Arbitrarily", "Sorted", "In decreasing order", "In increasing order"],
    answer: 2
  },
  {
    topic: "Max Sliding Window",
    question: "Deque front stores:",
    options: ["Min element", "Max element", "Average", "Middle"],
    answer: 1
  },
  {
    topic: "Max Sliding Window",
    question: "When sliding window shifts, remove:",
    options: ["All elements", "Elements out of window", "Odd elements", "None"],
    answer: 1
  },
  {
    topic: "Max Sliding Window",
    question: "Which approach is worst?",
    options: ["Deque", "Naive brute force", "Tree map", "Heap queue"],
    answer: 1
  },
  {
    topic: "Max Sliding Window",
    question: "Brute force complexity:",
    options: ["O(n)", "O(n log n)", "O(n k)", "O(log n)"],
    answer: 2
  },
  {
    topic: "Max Sliding Window",
    question: "Sliding window is a technique for:",
    options: ["Subarray problems", "Graphs", "Trees", "Linked lists"],
    answer: 0
  },
  {
    topic: "Max Sliding Window",
    question: "If k = 1, output is:",
    options: ["Always 0", "Same array", "Max only", "None"],
    answer: 1
  },

  // ✅ 12. Stack Permutations
  {
    topic: "Stack Permutations",
    question: "Stack permutation checks if one permutation can be obtained using:",
    options: ["Queue", "Stack", "Linked list", "Heap"],
    answer: 1
  },
  {
    topic: "Stack Permutations",
    question: "Key operations allowed:",
    options: ["Only push", "Only pop", "Push & Pop", "Swap"],
    answer: 2
  },
  {
    topic: "Stack Permutations",
    question: "Stack permutation is valid if elements:",
    options: ["Can be reordered arbitrarily", "Respect push-pop constraints", "Are sorted", "Are reversed"],
    answer: 1
  },
  {
    topic: "Stack Permutations",
    question: "Data structure used for simulation:",
    options: ["Deque", "Stack", "Priority Queue", "Heap"],
    answer: 1
  },
  {
    topic: "Stack Permutations",
    question: "If target starts with 3, input starts with 1, 2, 3, first operation:",
    options: ["Pop", "Push", "Skip", "Swap"],
    answer: 1
  },
  {
    topic: "Stack Permutations",
    question: "A permutation is stackable if it avoids pattern:",
    options: ["231", "132", "123", "321"],
    answer: 0
  },
  {
    topic: "Stack Permutations",
    question: "Maximum stack height required:",
    options: ["n", "n/2", "2n", "log n"],
    answer: 0
  },
  {
    topic: "Stack Permutations",
    question: "If stack is empty and next output doesn’t match input:",
    options: ["Valid", "Invalid", "Continue", "Swap"],
    answer: 1
  },
  {
    topic: "Stack Permutations",
    question: "Stack permutation is mainly applied to:",
    options: ["Trees", "Compilers", "Sorting networks", "All above"],
    answer: 3
  },
  {
    topic: "Stack Permutations",
    question: "Time complexity of checking a stack permutation:",
    options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
    answer: 1
  },

  // ✅ 13. Types of Set in Java
  {
    topic: "Types of Set in Java",
    question: "Which Set implementation in Java does NOT maintain insertion order?",
    options: ["HashSet", "LinkedHashSet", "TreeSet", "EnumSet"],
    answer: 0
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set implementation maintains insertion order?",
    options: ["HashSet", "TreeSet", "EnumSet", "LinkedHashSet"],
    answer: 3
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set implementation stores elements in sorted (natural or custom) order?",
    options: ["HashSet", "LinkedHashSet", "TreeSet", "HashMap"],
    answer: 2
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set implementation provides the BEST performance for add(), remove(), and contains()?",
    options: ["HashSet", "TreeSet", "LinkedHashSet", "EnumSet"],
    answer: 0
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set implementation is internally backed by a Red-Black tree?",
    options: ["HashSet", "TreeSet", "LinkedHashSet", "EnumSet"],
    answer: 1
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set implementation is the most memory-efficient for storing enums?",
    options: ["HashSet", "TreeSet", "EnumSet", "LinkedHashSet"],
    answer: 2
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set allows null elements?",
    options: ["HashSet", "TreeSet", "EnumSet", "None of the above"],
    answer: 0
  },
  {
    topic: "Types of Set in Java",
    question: "What is the time complexity of contains() in HashSet?",
    options: ["O(n)", "O(log n)", "O(1) average case", "O(n²)"],
    answer: 2
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set should be used when both insertion order AND fast access are required?",
    options: ["HashSet", "LinkedHashSet", "TreeSet", "EnumSet"],
    answer: 1
  },
  {
    topic: "Types of Set in Java",
    question: "Which statement is TRUE about TreeSet?",
    options: ["Allows duplicate values", "Allows null values", "Does not allow custom comparator", "Automatically sorts elements"],
    answer: 3
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set implementation is the best when frequent floor(), ceiling(), higher(), lower() operations are needed?",
    options: ["HashSet", "LinkedHashSet", "TreeSet", "EnumSet"],
    answer: 2
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set implementation uses hashing + a linked list internally?",
    options: ["HashSet", "TreeSet", "EnumSet", "LinkedHashSet"],
    answer: 3
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set allows predictable iteration order based on element insertion?",
    options: ["HashSet", "LinkedHashSet", "TreeSet", "EnumSet"],
    answer: 1
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set is ideal for bitwise operations and compact storage of fixed ranges of integers?",
    options: ["LinkedHashSet", "EnumSet", "BitSet", "TreeSet"],
    answer: 2
  },
  {
    topic: "Types of Set in Java",
    question: "Which method creates an immutable Set in Java?",
    options: ["Set.freeze()", "Set.lock()", "Collections.unmodifiableSet()", "Set.makeImmutable()"],
    answer: 2
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set rejects duplicate elements by definition?",
    options: ["HashSet", "TreeSet", "EnumSet", "All of the above"],
    answer: 3
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set implementation offers the fastest iteration performance?",
    options: ["HashSet", "TreeSet", "EnumSet", "LinkedHashSet"],
    answer: 2
  },
  {
    topic: "Types of Set in Java",
    question: "If you need sorted order + custom comparator, which Set should you choose?",
    options: ["HashSet", "LinkedHashSet", "TreeSet", "CopyOnWriteArraySet"],
    answer: 2
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set internally uses HashMap for storage?",
    options: ["TreeSet", "HashSet", "EnumSet", "BitSet"],
    answer: 1
  },
  {
    topic: "Types of Set in Java",
    question: "Which Set is thread-safe?",
    options: ["HashSet", "TreeSet", "Collections.synchronizedSet(new HashSet<>())", "EnumSet"],
    answer: 2
  },

  // ✅ 14. Recover the BST
  {
    topic: "Recover the BST",
    question: "What is the primary purpose of recovering a Binary Search Tree (BST)?",
    options: ["To optimize search", "To ensure structural integrity after modifications", "To reduce memory", "To increase speed"],
    answer: 1
  },
  {
    topic: "Recover the BST",
    question: "Which of the following operations can lead to the need for recovering a BST?",
    options: ["Insertion", "Deletion", "Searching", "Traversal"],
    answer: 1
  },
  {
    topic: "Recover the BST",
    question: "In a Binary Search Tree, what property must be maintained after a node deletion?",
    options: ["In-order traversal property", "Pre-order property", "Post-order property", "Binary search property"],
    answer: 3
  },
  {
    topic: "Recover the BST",
    question: "Which algorithm can be used for recovering a BST after a deletion?",
    options: ["BFS", "DFS", "In-order traversal", "Dijkstra's"],
    answer: 2
  },
  {
    topic: "Recover the BST",
    question: "What does the in-order traversal of a BST produce?",
    options: ["Nodes in sorted order", "Nodes in reverse sorted order", "Random order", "Insertion order"],
    answer: 0
  },
  {
    topic: "Recover the BST",
    question: "When recovering a BST after a deletion, which case is the simplest to handle?",
    options: ["Node with no children", "Node with one child", "Node with two children", "Node with three children"],
    answer: 0
  },
  {
    topic: "Recover the BST",
    question: "Which of the following is NOT a step in recovering a BST after a deletion?",
    options: ["Finding the node", "Deleting the node", "Rebalancing the tree", "Reorganizing to maintain property"],
    answer: 2
  },
  {
    topic: "Recover the BST",
    question: "Which data structure is commonly used for tracking parent nodes during BST recovery?",
    options: ["Queue", "Stack", "Linked list", "Array"],
    answer: 1
  },
  {
    topic: "Recover the BST",
    question: "In the case of a node with two children being deleted, which node is typically chosen as its replacement?",
    options: ["Left child", "Right child", "Parent", "Random node"],
    answer: 1
  },
  {
    topic: "Recover the BST",
    question: "After recovering a BST following a deletion, what operation ensures the tree is balanced?",
    options: ["Rotate the tree", "Reorder the nodes", "Recalculate heights", "Perform AVL or Red-Black tree rotations"],
    answer: 3
  },

  // ✅ 15. Views of tree
  {
    topic: "Views of tree",
    question: "What is the view of a tree?",
    options: ["Screen display", "Total nodes", "Representation from a direction", "Height of tree"],
    answer: 2
  },
  {
    topic: "Views of tree",
    question: "Which of the following is NOT a type of tree view?",
    options: ["Level order view", "Pre-order view", "In-order view", "Post-order view"],
    answer: 1
  },
  {
    topic: "Views of tree",
    question: "What does the level order view of a tree display?",
    options: ["Odd levels", "Even levels", "Every level, from left to right", "Root level only"],
    answer: 2
  },
  {
    topic: "Views of tree",
    question: "Which view displays nodes as they are encountered during a depth-first traversal?",
    options: ["In-order view", "Pre-order view", "Post-order view", "Level order view"],
    answer: 1
  },
  {
    topic: "Views of tree",
    question: "In the post-order view of a binary tree, when is a node visited?",
    options: ["Before left child", "After left child", "Before right child", "After right child"],
    answer: 3
  },
  {
    topic: "Views of tree",
    question: "Which view of a tree is also known as the breadth-first traversal?",
    options: ["Pre-order view", "In-order view", "Level order view", "Post-order view"],
    answer: 2
  },
  {
    topic: "Views of tree",
    question: "Which view of a binary tree is used in the expression tree evaluation?",
    options: ["Pre-order view", "In-order view", "Post-order view", "Level order view"],
    answer: 1
  },
  {
    topic: "Views of tree",
    question: "What is the main advantage of the level order view of a tree?",
    options: ["Less memory", "Faster speed", "Displays structure clearly", "Easier to implement"],
    answer: 2
  },
  {
    topic: "Views of tree",
    question: "Which view of a binary tree is used to create a copy of the tree?",
    options: ["Pre-order view", "In-order view", "Post-order view", "Level order view"],
    answer: 0
  },
  {
    topic: "Views of tree",
    question: "In a binary tree, which view provides nodes in non-decreasing order when the tree is a BST?",
    options: ["Pre-order view", "In-order view", "Post-order view", "Level order view"],
    answer: 1
  },

  // ✅ 16. BFS
  {
    topic: "Breadth-First Search (BFS)",
    question: "What is Breadth-First Search (BFS) primarily used for?",
    options: ["Shortest path in weighted graph", "Traversing and searching trees/graphs", "Sorting arrays", "Longest path in DAG"],
    answer: 1
  },
  {
    topic: "Breadth-First Search (BFS)",
    question: "In BFS, which data structure is typically used?",
    options: ["Stack", "Queue", "Priority queue", "Linked list"],
    answer: 1
  },
  {
    topic: "Breadth-First Search (BFS)",
    question: "What is the time complexity of BFS with an adjacency matrix?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V log V)"],
    answer: 2
  },
  {
    topic: "Breadth-First Search (BFS)",
    question: "In BFS, which vertices are explored first?",
    options: ["Lower degree", "Higher degree", "Lowest value/discovery order", "Highest value"],
    answer: 2
  },
  {
    topic: "Breadth-First Search (BFS)",
    question: "What is the order of traversal in BFS?",
    options: ["Depth-first", "Pre-order", "Post-order", "Level-order"],
    answer: 3
  },
  {
    topic: "Breadth-First Search (BFS)",
    question: "Which traversal strategy is employed to visit neighboring vertices?",
    options: ["Depth-first", "In-order", "Level-order", "Post-order"],
    answer: 2
  },
  {
    topic: "Breadth-First Search (BFS)",
    question: "Which of the following statements about BFS is true?",
    options: ["Finds topological sort", "Cannot handle cycles", "Not optimal for unweighted shortest path", "Explores in order discovered"],
    answer: 3
  },
  {
    topic: "Breadth-First Search (BFS)",
    question: "Which of the following is NOT a step in BFS?",
    options: ["Enqueue starting vertex", "Dequeue starting vertex", "Enqueue neighbors", "Dequeue neighbors"],
    answer: 1
  },
  {
    topic: "Breadth-First Search (BFS)",
    question: "In BFS, when should a visited vertex be enqueued?",
    options: ["Before exploring neighbors", "After exploring neighbors", "Before dequeueing neighbors", "After dequeueing neighbors"],
    answer: 0
  },
  {
    topic: "Breadth-First Search (BFS)",
    question: "What is the space complexity of BFS?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V log V)"],
    answer: 0
  },

  // ✅ 17. DFS
  {
    topic: "Depth-First Search (DFS)",
    question: "What is Depth-First Search (DFS) primarily used for?",
    options: ["Shortest path in weighted graph", "Traversing and searching trees/graphs", "Sorting arrays", "Longest path in DAG"],
    answer: 1
  },
  {
    topic: "Depth-First Search (DFS)",
    question: "Which data structure is typically used for implementing DFS?",
    options: ["Queue", "Stack", "Priority queue", "Linked list"],
    answer: 1
  },
  {
    topic: "Depth-First Search (DFS)",
    question: "What is the time complexity of DFS with an adjacency list?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V log V)"],
    answer: 2
  },
  {
    topic: "Depth-First Search (DFS)",
    question: "In DFS, which strategy is employed to explore neighbors?",
    options: ["Depth-first traversal", "In-order traversal", "Level-order traversal", "Post-order traversal"],
    answer: 0
  },
  {
    topic: "Depth-First Search (DFS)",
    question: "What is the order of traversal in DFS?",
    options: ["Depth-first", "Pre-order", "Post-order", "Level-order"],
    answer: 0
  },
  {
    topic: "Depth-First Search (DFS)",
    question: "Which statement about DFS is true?",
    options: ["Always finds shortest path", "Uses FIFO", "May result in disconnected graph", "Explores in order discovered"],
    answer: 2
  },
  {
    topic: "Depth-First Search (DFS)",
    question: "What is the main disadvantage of using recursion for DFS?",
    options: ["Higher space complexity", "Slower than iterative", "Stack overflow for large graphs", "Cannot handle cycles"],
    answer: 2
  },
  {
    topic: "Depth-First Search (DFS)",
    question: "Which of the following is NOT a step in DFS?",
    options: ["Enqueue starting vertex", "Process current vertex", "Recursively explore neighbors", "Backtrack"],
    answer: 0
  },
  {
    topic: "Depth-First Search (DFS)",
    question: "In DFS, when should a visited vertex be marked?",
    options: ["Before exploring neighbors", "After exploring neighbors", "Before recursive call", "After recursive call"],
    answer: 1
  },
  {
    topic: "Depth-First Search (DFS)",
    question: "What is the space complexity of DFS?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V log V)"],
    answer: 0
  },

  // ✅ 18. Binomial heap
  {
    topic: "Binomial heap",
    question: "What is a binomial tree?",
    options: ["At most two children", "Exactly two children", "Specific ordering", "Used in binary search"],
    answer: 1
  },
  {
    topic: "Binomial heap",
    question: "Which operation is NOT supported efficiently by a binomial heap?",
    options: ["Insertion", "Deletion", "Union", "Search"],
    answer: 3
  },
  {
    topic: "Binomial heap",
    question: "In a binomial heap, what is the time complexity of inserting a new element?",
    options: ["O(log n)", "O(n)", "O(log² n)", "O(1)"],
    answer: 0
  },
  {
    topic: "Binomial heap",
    question: "What is the maximum height of a binomial tree with n nodes?",
    options: ["n", "2n", "log₂ n", "log₂ (n+1)"],
    answer: 3
  },
  {
    topic: "Binomial heap",
    question: "Which of the following is a property of a binomial tree of order k?",
    options: ["k children", "2^k nodes", "k+1 nodes", "2^{k+1} - 1 nodes"],
    answer: 1
  },
  {
    topic: "Binomial heap",
    question: "What operation is typically used to merge two binomial heaps?",
    options: ["Union", "Intersection", "Difference", "Addition"],
    answer: 0
  },
  {
    topic: "Binomial heap",
    question: "Which statement about binomial heaps is true?",
    options: ["Always balanced binary", "Constant time insertion/deletion", "Implemented with arrays", "O(log n) worst-case for most"],
    answer: 3
  },
  {
    topic: "Binomial heap",
    question: "In a binomial heap, what is the purpose of the 'merge' operation?",
    options: ["Combine same order trees", "Split tree", "Find minimum", "Delete element"],
    answer: 0
  },
  {
    topic: "Binomial heap",
    question: "Which of the following is NOT a common application of binomial heaps?",
    options: ["Priority queue", "Sorting algorithms", "Dijkstra's", "Prim's"],
    answer: 1
  },
  {
    topic: "Binomial heap",
    question: "What is the advantage of using a binomial heap over a binary heap?",
    options: ["Better worst-case complexity", "More space efficient", "Supports more operations", "Easier to implement"],
    answer: 0
  },

  // ✅ 19. Winner tree
  {
    topic: "Winner tree",
    question: "What is the purpose of a winner tree?",
    options: ["Sorted order", "Find max/min among set", "Balance BST", "Implement Priority Queue"],
    answer: 1
  },
  {
    topic: "Winner tree",
    question: "In a winner tree, what do the leaves represent?",
    options: ["Internal nodes", "Maximum element", "The elements themselves", "Minimum element"],
    answer: 2
  },
  {
    topic: "Winner tree",
    question: "How are winner trees commonly used in algorithms?",
    options: ["Graph traversal", "Heap sort", "Tournament-style algorithms", "Binary search"],
    answer: 2
  },
  {
    topic: "Winner tree",
    question: "Which node of a winner tree contains the overall winner?",
    options: ["Root node", "Leaf nodes", "Internal nodes", "None"],
    answer: 0
  },
  {
    topic: "Winner tree",
    question: "What operation is performed to construct a winner tree?",
    options: ["Merge", "Compare", "Split", "Rotate"],
    answer: 1
  },
  {
    topic: "Winner tree",
    question: "Which is NOT a step in using a winner tree to find the maximum element?",
    options: ["Initialize tree", "Insert elements in random order", "Construct tree", "Access root"],
    answer: 1
  },
  {
    topic: "Winner tree",
    question: "What type of elements can be compared using a winner tree?",
    options: ["Numbers only", "Strings only", "Any comparable elements", "Same type only"],
    answer: 2
  },
  {
    topic: "Winner tree",
    question: "How does a winner tree compare elements?",
    options: ["Hashing", "Iterating", "Comparing pairs recursively", "Binary search"],
    answer: 2
  },
  {
    topic: "Winner tree",
    question: "Which data structure is NOT commonly implemented using winner trees?",
    options: ["Priority queue", "Heap", "Hash table", "Tournament bracket"],
    answer: 2
  },
  {
    topic: "Winner tree",
    question: "In a winner tree with n elements, how many comparisons are needed for the maximum?",
    options: ["n", "log n", "2n - 1", "n - 1"],
    answer: 2
  },

  // ✅ 20. Bellman ford algorithm
  {
    topic: "Bellman ford algorithm",
    question: "What is the Bellman-Ford algorithm used for?",
    options: ["Shortest path with negative weights", "Sorting arrays", "Priority queues", "BST Search"],
    answer: 0
  },
  {
    topic: "Bellman ford algorithm",
    question: "Which data structure is commonly used to represent graphs in Bellman-Ford?",
    options: ["Arrays", "Linked lists", "Hash tables", "Adjacency matrices or lists"],
    answer: 3
  },
  {
    topic: "Bellman ford algorithm",
    question: "What is the time complexity of the Bellman-Ford algorithm?",
    options: ["O(V)", "O(V log V)", "O(V + E)", "O(V*E)"],
    answer: 2
  },
  {
    topic: "Bellman ford algorithm",
    question: "In the context of Bellman-Ford, what does 'V' represent?",
    options: ["Number of vertices", "Number of edges", "Max weight", "Source vertex"],
    answer: 0
  },
  {
    topic: "Bellman ford algorithm",
    question: "What does Bellman-Ford initialize the shortest distance to each vertex with?",
    options: ["Positive infinity", "Negative infinity", "Zero", "Source weight"],
    answer: 0
  },
  {
    topic: "Bellman ford algorithm",
    question: "What is the purpose of the relaxation step in Bellman-Ford?",
    options: ["Initialize", "Update distances if shorter path found", "Remove negative edges", "Reverse edges"],
    answer: 1
  },
  {
    topic: "Bellman ford algorithm",
    question: "What does a negative cycle indicate in Bellman-Ford?",
    options: ["No shortest paths", "Contains negative weights", "Multiple shortest paths", "Cycle total weight is negative"],
    answer: 3
  },
  {
    topic: "Bellman ford algorithm",
    question: "Which step in Bellman-Ford detects negative cycles?",
    options: ["Initialization", "Relaxation", "Shortest path determination", "Negative cycle detection"],
    answer: 3
  },
  {
    topic: "Bellman ford algorithm",
    question: "When does the Bellman-Ford algorithm terminate?",
    options: ["Fixed number of iterations", "All vertices visited", "No more relaxation possible", "Negative cycle detected"],
    answer: 2
  },
  {
    topic: "Bellman ford algorithm",
    question: "What does Bellman-Ford return if a negative cycle is detected?",
    options: ["Shortest paths", "Target path", "Error/Indicator of negative cycle", "Path length"],
    answer: 2
  },

  // ✅ 21. Dials algorithm
  {
    topic: "Dials algorithm",
    question: "What is Dial's Algorithm used for?",
    options: ["Max flow", "Sorting", "Shortest path with non-negative weights", "Detecting negative cycles"],
    answer: 2
  },
  {
    topic: "Dials algorithm",
    question: "Which data structure does the Dial's Algorithm utilize?",
    options: ["Arrays", "Linked lists", "Priority queues", "Stacks"],
    answer: 0
  },
  {
    topic: "Dials algorithm",
    question: "What does each bucket in the Dial's Algorithm contain?",
    options: ["Vertices", "Edges", "Distances", "Paths"],
    answer: 0
  },
  {
    topic: "Dials algorithm",
    question: "How are the buckets indexed in the Dial's Algorithm?",
    options: ["Vertex IDs", "Distances from source", "Edge weights", "Vertex degrees"],
    answer: 1
  },
  {
    topic: "Dials algorithm",
    question: "What is the time complexity of the Dial's Algorithm?",
    options: ["O(V)", "O(V log V)", "O(V + E)", "O(E log V)"],
    answer: 2
  },
  {
    topic: "Dials algorithm",
    question: "When does the Dial's Algorithm terminate?",
    options: ["All visited", "All buckets empty", "Negative cycle detected", "Max flow reached"],
    answer: 1
  },
  {
    topic: "Dials algorithm",
    question: "What operation is performed during each iteration of Dial's Algorithm?",
    options: ["Vertex relaxation", "Edge relaxation", "Bucket selection", "Bucket sort"],
    answer: 0
  },
  {
    topic: "Dials algorithm",
    question: "What does Dial's Algorithm prioritize during bucket selection?",
    options: ["Most vertices", "Fewest vertices", "Highest distances", "Lowest distances"],
    answer: 1
  },
  {
    topic: "Dials algorithm",
    question: "Which type of graphs is Dial's Algorithm most suitable for?",
    options: ["Negative weights", "Positive weights", "Non-negative with limited range", "Arbitrary weights"],
    answer: 2
  },
  {
    topic: "Dials algorithm",
    question: "What does the Dial's Algorithm return as output?",
    options: ["Max flow", "Shortest paths from source", "Error if negative cycle", "Visited vertices"],
    answer: 1
  },

  // ✅ 22. Topological sort
  {
    topic: "Topological sort",
    question: "What is topological sorting used for?",
    options: ["Shortest paths", "Detecting cycles", "Ordering tasks with dependencies", "MST Generation"],
    answer: 2
  },
  {
    topic: "Topological sort",
    question: "Which of the following data structures is used for topological sorting?",
    options: ["Queue", "Stack", "Array", "Heap"],
    answer: 1
  },
  {
    topic: "Topological sort",
    question: "In a directed acyclic graph (DAG), topological sorting results in:",
    options: ["Linear ordering", "MST", "Cyclic dependency graph", "BST"],
    answer: 0
  },
  {
    topic: "Topological sort",
    question: "Which algorithm is commonly used for topological sorting?",
    options: ["BFS", "DFS", "Dijkstra's", "Prim's"],
    answer: 1
  },
  {
    topic: "Topological sort",
    question: "In topological sorting, vertices with no incoming edges are processed:",
    options: ["First", "Last", "Randomly", "Any order"],
    answer: 0
  },
  {
    topic: "Topological sort",
    question: "If a graph has a cycle, what happens during topological sorting?",
    options: ["The algorithm fails", "Cycle ignored", "Cycle broken", "Indefinite continuation"],
    answer: 0
  },
  {
    topic: "Topological sort",
    question: "Topological sorting can be applied to which type of graphs?",
    options: ["Directed", "Undirected", "Weighted", "Bipartite"],
    answer: 0
  },
  {
    topic: "Topological sort",
    question: "Which of the following statements is true about topological sorting?",
    options: ["Unique ordering", "Single source/sink only", "Multiple valid orderings possible", "O(n log n) complexity"],
    answer: 2
  },
  {
    topic: "Topological sort",
    question: "If there are multiple vertices with no incoming edges, which is processed first?",
    options: ["Highest index", "Lowest index", "Any of them", "None"],
    answer: 2
  },
  {
    topic: "Topological sort",
    question: "In a DAG with edges ab, bc, cd, and de, what is the topological sort?",
    options: ["a, b, c, d, e", "e, d, c, b, a", "a, e, b, c, d", "a, b, c, e, d"],
    answer: 3
  },

  // ✅ 23. Vertical order traversal
  {
    topic: "Vertical order traversal",
    question: "What does vertical order traversal of a binary tree involve?",
    options: ["Level by level", "Left to right", "Top to bottom", "Grouping by horizontal distance"],
    answer: 3
  },
  {
    topic: "Vertical order traversal",
    question: "Which data structure is commonly used to perform vertical order traversal?",
    options: ["Array", "Queue", "Stack", "Linked list"],
    answer: 1
  },
  {
    topic: "Vertical order traversal",
    question: "In vertical order traversal, nodes at the same horizontal distance are visited in which order?",
    options: ["Random", "Pre-order", "Level-order", "Post-order"],
    answer: 2
  },
  {
    topic: "Vertical order traversal",
    question: "What is the time complexity of vertical order traversal?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
    answer: 0
  },
  {
    topic: "Vertical order traversal",
    question: "Which traversal technique is typically used for vertical order?",
    options: ["DFS", "BFS", "In-order", "Pre-order"],
    answer: 1
  },
  {
    topic: "Vertical order traversal",
    question: "Which node is visited first at a particular horizontal distance?",
    options: ["Left child", "Right child", "Root node", "Parent node"],
    answer: 2
  },
  {
    topic: "Vertical order traversal",
    question: "If two nodes have the same horizontal distance, which is visited first?",
    options: ["Left node", "Right node", "Depends on structure", "Simultaneously"],
    answer: 0
  },
  {
    topic: "Vertical order traversal",
    question: "Which of the following is true about vertical order traversal?",
    options: ["Only balanced trees", "Doesn't guarantee sorted order", "Preserves structure", "Binary only"],
    answer: 1
  },
  {
    topic: "Vertical order traversal",
    question: "What is the space complexity of vertical order traversal?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    answer: 0
  },
  {
    topic: "Vertical order traversal",
    question: "Which scenario might require additional handling in vertical traversal?",
    options: ["One child node", "Multiple nodes at same horizontal distance", "Unbalanced", "Height < 2"],
    answer: 1
  },

  // ✅ 24. Boundary traversal
  {
    topic: "Boundary traversal",
    question: "What does boundary traversal of a binary tree involve?",
    options: ["Left-to-right order", "Top-to-bottom", "Only boundary nodes", "Bottom-up"],
    answer: 2
  },
  {
    topic: "Boundary traversal",
    question: "Which of the following nodes is included in boundary traversal?",
    options: ["Leaf only", "Internal only", "Both leaf and internal", "Neither"],
    answer: 2
  },
  {
    topic: "Boundary traversal",
    question: "In boundary traversal, in what order are nodes visited?",
    options: ["Pre-order", "In-order", "Post-order", "Level-order"],
    answer: 0
  },
  {
    topic: "Boundary traversal",
    question: "What is the time complexity of boundary traversal?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
    answer: 0
  },
  {
    topic: "Boundary traversal",
    question: "Which traversal technique is typically used for boundary traversal?",
    options: ["DFS", "BFS", "In-order", "Pre-order"],
    answer: 0
  },
  {
    topic: "Boundary traversal",
    question: "In boundary traversal, which node is visited first?",
    options: ["Left child", "Right child", "Root node", "Leaf node"],
    answer: 2
  },
  {
    topic: "Boundary traversal",
    question: "Single node tree boundary traversal node count?",
    options: ["0", "1", "2", "Depends"],
    answer: 1
  },
  {
    topic: "Boundary traversal",
    question: "Which of the following is true about boundary traversal?",
    options: ["Starts from leftmost leaf", "Excludes leaves", "Preserves structure", "Anti-clockwise visit order"],
    answer: 3
  },
  {
    topic: "Boundary traversal",
    question: "What is the space complexity of boundary traversal?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    answer: 0
  },
  {
    topic: "Boundary traversal",
    question: "Which scenario might require extra handling during boundary traversal?",
    options: ["One child per node", "Multiple nodes same level", "Unbalanced branches", "Height < 2"],
    answer: 2
  },

  // ✅ 25. Heap sort
  {
    topic: "Heap sort",
    question: "What is heap sort primarily used for?",
    options: ["Sorting LL", "Sorting arrays", "Tree search", "Graph traversal"],
    answer: 1
  },
  {
    topic: "Heap sort",
    question: "Which data structure is used to implement heap sort?",
    options: ["Queue", "Stack", "Heap", "Linked list"],
    answer: 2
  },
  {
    topic: "Heap sort",
    question: "What type of heap is typically used in heap sort?",
    options: ["Max heap", "Min heap", "Binary tree", "AVL tree"],
    answer: 0
  },
  {
    topic: "Heap sort",
    question: "What is the worst-case time complexity of heap sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
    answer: 1
  },
  {
    topic: "Heap sort",
    question: "In heap sort, which operation ensures the heap property?",
    options: ["Insertion", "Deletion", "Heapify", "Merge"],
    answer: 2
  },
  {
    topic: "Heap sort",
    question: "Which statement is true about heap sort?",
    options: ["Stable algorithm", "Proportional extra storage", "Better than QuickSort", "In-place algorithm"],
    answer: 3
  },
  {
    topic: "Heap sort",
    question: "After building the heap, what is the root element?",
    options: ["Maximum", "Minimum", "Median", "Random"],
    answer: 0
  },
  {
    topic: "Heap sort",
    question: "Which of the following is a drawback of heap sort?",
    options: ["Not stable", "Large datasets", "Not comparison-based", "Not parallel-suitable"],
    answer: 0
  },
  {
    topic: "Heap sort",
    question: "What is the space complexity of heap sort?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    answer: 2
  },
  {
    topic: "Heap sort",
    question: "Heap sort shares complexity similarities with which algorithm?",
    options: ["Bubble", "Merge sort", "Quick sort", "Selection"],
    answer: 1
  },

  // ✅ 26. K-Array heap
  {
    topic: "K-Array heap",
    question: "What is a K-ary heap?",
    options: ["At most K children", "K elements per level", "Exactly K children", "K elements total"],
    answer: 0
  },
  {
    topic: "K-Array heap",
    question: "Max elements in the last level of a K-ary heap with N nodes?",
    options: ["K", "K - 1", "N % K", "K²"],
    answer: 2
  },
  {
    topic: "K-Array heap",
    question: "Which operation is O(log K) in a K-ary heap?",
    options: ["Insertion", "Deletion", "Building", "Finding min"],
    answer: 0
  },
  {
    topic: "K-Array heap",
    question: "How is a K-ary heap represented in memory?",
    options: ["Binary tree", "Array", "Linked list", "Balanced tree"],
    answer: 1
  },
  {
    topic: "K-Array heap",
    question: "What is the height of a K-ary heap with N elements?",
    options: ["log(N)", "log(K, N)", "N/K", "log(K) + log(N)"],
    answer: 1
  },
  {
    topic: "K-Array heap",
    question: "Most work when removing the root element in K-ary heap?",
    options: ["Parent node", "Children nodes", "Reorganizing heap", "Deleting root"],
    answer: 2
  },
  {
    topic: "K-Array heap",
    question: "Index relationship between parent node and children in K-ary heap?",
    options: ["Parent > children", "Parent = sum children", "Parent index divisible", "Parent < children"],
    answer: 2
  },
  {
    topic: "K-Array heap",
    question: "Which of the following is true about K-ary heap?",
    options: ["Constant time all", "Always balanced", "Complete binary tree", "No insertion"],
    answer: 2
  },
  {
    topic: "K-Array heap",
    question: "Worst-case comparisons for finding maximum in K-ary heap?",
    options: ["K", "log K", "K log K", "N"],
    answer: 0
  },
  {
    topic: "K-Array heap",
    question: "Disadvantage of using a large value of K?",
    options: ["Faster insertion", "Space efficiency", "Slower heapification", "Reduced comparisons"],
    answer: 2
  },

  // ✅ 27. FIBONACCI
  {
    topic: "Fibonacci Sequence (DP)",
    question: "Which Java data type should be used for large Fibonacci numbers?",
    options: ["int", "long", "double", "BigInteger"],
    answer: 3
  },
  {
    topic: "Fibonacci Sequence (DP)",
    question: "In context of Fibonacci, what is memoization used for?",
    options: ["Encryption", "Avoid stack overflow", "Storing intermediate results", "Reversing sequence"],
    answer: 2
  },
  {
    topic: "Fibonacci Sequence (DP)",
    question: "Primary disadvantage of naive recursion for Fibonacci?",
    options: ["Memory", "Implementation", "Exponential time complexity", "Inaccurate"],
    answer: 2
  },
  {
    topic: "Fibonacci Sequence (DP)",
    question: "Which is related to Fibonacci applications?",
    options: ["Largest element", "Sorting", "Sum of primes", "Steps counting nth step (1/2 steps)"],
    answer: 3
  },
  {
    topic: "Fibonacci Sequence (DP)",
    question: "Fibonacci term after 21?",
    options: ["34", "55", "89", "144"],
    answer: 0
  },
  {
    topic: "Fibonacci Sequence (DP)",
    question: "Output of fibonacci(6)?",
    options: ["5", "6", "8", "13"],
    answer: 2
  },
  {
    topic: "Fibonacci Sequence (DP)",
    question: "Correct base case for recursive Fibonacci:",
    options: ["fib(0)=1, fib(1)=1", "fib(0)=0, fib(1)=1", "fib(0)=1, fib(1)=2", "fib(0)=0, fib(1)=0"],
    answer: 1
  },
  {
    topic: "Fibonacci Sequence (DP)",
    question: "Time complexity of DP-based Fibonacci:",
    options: ["O(n)", "O(log n)", "O(2ⁿ)", "O(n²)"],
    answer: 0
  },
  {
    topic: "Fibonacci Sequence (DP)",
    question: "Data structure used in memoization:",
    options: ["Array", "Linked List", "Queue", "Stack"],
    answer: 0
  },
  {
    topic: "Fibonacci Sequence (DP)",
    question: "Closed-form for Fibonacci uses:",
    options: ["Exponential", "Geometric", "Golden ratio", "Taylor series"],
    answer: 2
  },

  // ✅ 28. HASHMAP → TREEMAP 
  {
    topic: "HashMap to TreeMap Conversion",
    question: "When convert HashMap → TreeMap?",
    options: ["Constant time", "Insertion order", "Sorted order", "Memory important"],
    answer: 2
  },
  {
    topic: "HashMap to TreeMap Conversion",
    question: "Comparator in TreeMap defines:",
    options: ["Ordering of keys", "Ordering of values", "Tree structure", "Hashing"],
    answer: 0
  },
  {
    topic: "HashMap to TreeMap Conversion",
    question: "Method to convert HashMap → TreeMap:",
    options: ["convertToTreeMap()", "treeMap.convertFromHashMap()", "TreeMap.fromHashMap()", "TreeMap constructor"],
    answer: 3
  },
  {
    topic: "HashMap to TreeMap Conversion",
    question: "Sorting studentGrades HashMap via TreeMap:",
    options: ["New TreeMap(studentGrades)", "Create TreeMap and putAll()", "Reverse order comparator", "Custom comparator"],
    answer: 1
  },
  {
    topic: "HashMap to TreeMap Conversion",
    question: "NPE occurs when converting if:",
    options: ["HashMap has null keys", "HashMap has null values", "HashMap empty", "Never"],
    answer: 0
  },
  {
    topic: "HashMap to TreeMap Conversion",
    question: "If duplicate keys exist in source:",
    options: ["Keeps last", "Keeps first", "Throws exception", "Keeps all"],
    answer: 1
  },
  {
    topic: "HashMap to TreeMap Conversion",
    question: "Add element to HashMap after conversion effect:",
    options: ["Auto added to TreeMap", "Throws exception", "TreeMap order changes", "Only added in HashMap"],
    answer: 3
  },
  {
    topic: "HashMap to TreeMap Conversion",
    question: "Sorting TreeMap by values:",
    options: ["TreeMap(wordCount)", "TreeMap with value comparator", "Put all values as keys in new TreeMap", "TreeMap<Integer, String>(wordCount)"],
    answer: 2
  },
  {
    topic: "HashMap to TreeMap Conversion",
    question: "Internal DS of TreeMap:",
    options: ["Hash table", "Linked list", "Red-black tree", "AVL"],
    answer: 2
  },
  {
    topic: "HashMap to TreeMap Conversion",
    question: "Time complexity of conversion:",
    options: ["O(n log n)", "O(n)", "O(log n)", "O(1)"],
    answer: 0
  },

  // ✅ 29. LONGEST INCREASING SUBSEQUENCE (LIS)
  {
    topic: "Longest Increasing Subsequence (LIS)",
    question: "DP LIS time complexity:",
    options: ["O(n)", "O(n²)", "O(n log n)", "O(2ⁿ)"],
    answer: 1
  },
  {
    topic: "Longest Increasing Subsequence (LIS)",
    question: "INCORRECT statement about LIS:",
    options: ["Multiple solutions", "Variant of LCS", "Non-contiguous", "Solved only by greedy"],
    answer: 3
  },
  {
    topic: "Longest Increasing Subsequence (LIS)",
    question: "O(n log n) LIS uses:",
    options: ["BFS", "DFS", "Binary Search", "QuickSort"],
    answer: 2
  },
  {
    topic: "Longest Increasing Subsequence (LIS)",
    question: "DP LIS space complexity:",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
    answer: 0
  },
  {
    topic: "Longest Increasing Subsequence (LIS)",
    question: "DS used for DP LIS:",
    options: ["Array", "Stack", "Queue", "Set"],
    answer: 0
  },
  {
    topic: "Longest Increasing Subsequence (LIS)",
    question: "True about LIS content:",
    options: ["Always contains 1st element", "Always contains last", "Always contains both", "None"],
    answer: 3
  },
  {
    topic: "Longest Increasing Subsequence (LIS)",
    question: "Algorithm commonly used for LIS:",
    options: ["DFS", "BFS", "DP", "Greedy"],
    answer: 2
  },
  {
    topic: "Longest Increasing Subsequence (LIS)",
    question: "Which statement is true?",
    options: ["Brute force possible", "Length > original", "Starts/ends min/max", "Must be adjacent"],
    answer: 0
  },
  {
    topic: "Longest Increasing Subsequence (LIS)",
    question: "“Increasing” in LIS means:",
    options: ["Non-decreasing", "Strictly increasing", "Positive difference", "Sum increasing"],
    answer: 1
  },
  {
    topic: "Longest Increasing Subsequence (LIS)",
    question: "LIS of {10, -10, 12, 9, 10, 15, 13, 14}:",
    options: ["{10,12,15}", "{10,12,13,14}", "{-10,12,13,14}", "{-10, 9, 10, 13, 14}"],
    answer: 3
  },

  // ✅ 30. LONGEST BITONIC SUBSEQUENCE
  {
    topic: "Longest Bitonic Subsequence (LBS)",
    question: "LBS finds a sequence that is:",
    options: ["Alternating", "Increasing then decreasing", "Decreasing then increasing", "Equal"],
    answer: 1
  },
  {
    topic: "Longest Bitonic Subsequence (LBS)",
    question: "Algorithm used for LBS:",
    options: ["BFS", "DFS", "DP", "Greedy"],
    answer: 2
  },
  {
    topic: "Longest Bitonic Subsequence (LBS)",
    question: "DP time complexity of LBS:",
    options: ["O(n)", "O(n log n)", "O(2ⁿ)", "O(n²)"],
    answer: 3
  },
  {
    topic: "Longest Bitonic Subsequence (LBS)",
    question: "DS used for LBS computation:",
    options: ["Array", "Stack", "Queue", "Set"],
    answer: 0
  },
  {
    topic: "Longest Bitonic Subsequence (LBS)",
    question: "Space complexity of LBS:",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
    answer: 0
  },
  {
    topic: "Longest Bitonic Subsequence (LBS)",
    question: "Sequence representation for LBS:",
    options: ["Array", "ArrayList", "LinkedList", "Set"],
    answer: 0
  },
  {
    topic: "Longest Bitonic Subsequence (LBS)",
    question: "“Longest” in LBS means:",
    options: ["Max sum", "Max length", "Max product", "Max distinct"],
    answer: 1
  },
  {
    topic: "Longest Bitonic Subsequence (LBS)",
    question: "LBS property:",
    options: ["Only recursion", "Single pass", "Greedy", "Multiple solutions possible"],
    answer: 3
  },
  {
    topic: "Longest Bitonic Subsequence (LBS)",
    question: "DP utilizes which concept for LBS?",
    options: ["Divide & Conquer", "Memoization", "Backtracking", "Greedy"],
    answer: 1
  },
  {
    topic: "Longest Bitonic Subsequence (LBS)",
    question: "Main DP idea for solving LBS:",
    options: ["All subsequences", "Break to subproblems/store results", "Sort sequence", "Greedy pick"],
    answer: 1
  },

  // ✅ 31. DISTRIBUTION
  {
    topic: "Distribution Constraints",
    question: "Max items per type per person in problem statement:",
    options: ["1", "2", "3", "Unlimited"],
    answer: 1
  },
  {
    topic: "Distribution Constraints",
    question: "Data structure used for items in distribution:",
    options: ["Array", "Stack", "Queue", "Graph"],
    answer: 0
  },
  {
    topic: "Distribution Constraints",
    question: "Time complexity of distribution checking:",
    options: ["O(n)", "O(n²)", "O(log n)", "O(2ⁿ)"],
    answer: 0
  },
  {
    topic: "Distribution Constraints",
    question: "To check the limit per type:",
    options: ["checkAvailability()", "takeItem()", "canTakeMore()", "getMaxItems()"],
    answer: 2
  },
  {
    topic: "Distribution Constraints",
    question: "Ensure fairness in item distribution:",
    options: ["Shuffle items randomly", "Sort alphabetically", "Ascending", "Descending"],
    answer: 0
  },
  {
    topic: "Distribution Constraints",
    question: "Collection used for shuffling in Java:",
    options: ["ArrayList", "HashSet", "TreeMap", "LinkedList"],
    answer: 3
  },
  {
    topic: "Distribution Constraints",
    question: "Meaning of the constraint 'Max 2 per type':",
    options: ["Total items max 2", "Max two of same type", "One of each type", "Unlimited"],
    answer: 1
  },
  {
    topic: "Distribution Constraints",
    question: "Algorithm approach for distribution constraints:",
    options: ["Divide & Conquer", "Backtracking", "Randomized", "Brute force"],
    answer: 1
  },
  {
    topic: "Distribution Constraints",
    question: "Are more than two items per type allowed?",
    options: ["Allowed", "Not allowed", "Depends", "None"],
    answer: 1
  },
  {
    topic: "Distribution Constraints",
    question: "Surplus items fair distribution method:",
    options: ["Random", "Round-robin", "Priority", "Weighted"],
    answer: 1
  },

  // ✅ 32. SUBSET SUM
  {
    topic: "Subset Sum Problem",
    question: "Base case for Subset Sum recursive:",
    options: ["sum!=0 → true", "sum==0 → true", "n==0 → true", "None"],
    answer: 1
  },
  {
    topic: "Subset Sum Problem",
    question: "Which statement is NOT true about Subset Sum?",
    options: ["Recursive = O(2ⁿ)", "No polynomial solution known", "Recursive slower than DP", "DP = O(n log n)"],
    answer: 3
  },
  {
    topic: "Subset Sum Problem",
    question: "DP is faster than recursive because of:",
    options: ["Time", "Space", "Both", "None"],
    answer: 0
  },
  {
    topic: "Subset Sum Problem",
    question: "Subset sum is categorized as:",
    options: ["LCS", "NP-complete", "LPS", "None"],
    answer: 1
  },
  {
    topic: "Subset Sum Problem",
    question: "DP worst time complexity for Subset Sum:",
    options: ["O(n)", "O(sum)", "O(n²)", "O(sum*n)"],
    answer: 3
  },
  {
    topic: "Subset Sum Problem",
    question: "Recursive time complexity of Subset Sum:",
    options: ["Exponential", "Linear", "Logarithmic", "Constant"],
    answer: 0
  },
  {
    topic: "Subset Sum Problem",
    question: "What is Subset Sum primarily checking?",
    options: ["Find subset sum", "Check if subset exists", "Sum of set", "Sum of all subsets"],
    answer: 1
  },
  {
    topic: "Subset Sum Problem",
    question: "Condition for Subset A ⊆ B:",
    options: ["All B in A", "All A in B", "A bigger", "B bigger"],
    answer: 1
  },
  {
    topic: "Subset Sum Problem",
    question: "Output of subset sum {3, 34, 4, 12, 5, 2} for sum 9?",
    options: ["TRUE", "FALSE", "0", "NULL"],
    answer: 0
  },
  {
    topic: "Subset Sum Problem",
    question: "Output of subset sum {3, 34, 4, 12, 5, 2} for sum 30?",
    options: ["TRUE", "FALSE", "1", "NULL"],
    answer: 1
  },

  // ✅ 33. LONGEST PALINDROMIC SUBSEQUENCE (LPS)
  {
    topic: "Longest Palindromic Subsequence (LPS)",
    question: "LPS of “abdgkagdjbccbba”?",
    options: ["9", "7", "8", "10"],
    answer: 0
  },
  {
    topic: "Longest Palindromic Subsequence (LPS)",
    question: "Brute force LPS complexity:",
    options: ["O(1)", "O(n²)", "O(n)", "O(2ⁿ)"],
    answer: 3
  },
  {
    topic: "Longest Palindromic Subsequence (LPS)",
    question: "LPS of “ababcdabba”?",
    options: ["6", "7", "8", "9"],
    answer: 1
  },
  {
    topic: "Longest Palindromic Subsequence (LPS)",
    question: "When is LPS != length of string?",
    options: ["Palindrome", "Length 1", "Same letters", "Some length-2 strings"],
    answer: 3
  },
  {
    topic: "Longest Palindromic Subsequence (LPS)",
    question: "LPS of “abcd”?",
    options: ["2", "1", "3", "4"],
    answer: 1
  },
  {
    topic: "Longest Palindromic Subsequence (LPS)",
    question: "Which is NOT palindromic subsequence of 'abcba'?",
    options: ["abcba", "abba", "abbbba", "adba"],
    answer: 3
  },
  {
    topic: "Longest Palindromic Subsequence (LPS)",
    question: "LPS is example of:",
    options: ["Greedy", "2D DP", "1D DP", "Divide & conquer"],
    answer: 1
  },
  {
    topic: "Longest Palindromic Subsequence (LPS)",
    question: "Methods to solve LPS:",
    options: ["DP", "Recursion", "Brute force", "All"],
    answer: 3
  },
  {
    topic: "Longest Palindromic Subsequence (LPS)",
    question: "LPS for any non-empty string is:",
    options: ["At most 1", "At least 1", "Exactly 1", "-1"],
    answer: 1
  },
  {
    topic: "Longest Palindromic Subsequence (LPS)",
    question: "LPS of “aeiou”?",
    options: ["0", "1", "2", "3"],
    answer: 1
  }
];