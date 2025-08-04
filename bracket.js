   
var isValid = function(s) {
    let stack = [];  // Create an empty stack to store open brackets

    // Create a map of closing → opening brackets
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // Loop through every character in the string
    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char); // If it's an opening bracket, push to stack
        } else {
            // If it's a closing bracket, check top of the stack
            if (stack.pop() !== map[char]) {
                return false; // Mismatch, not valid
            }
        }
    }

    return stack.length === 0; // Stack should be empty if all matched
};

console.log(isValid("{}()"));
console.log(isValid("{}(]"));