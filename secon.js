function solution(S) {
    const MAX_VALUE = 1048575; // 2^20 - 1
    const operations = S.split(" ");
    let stack = [];
  
    for (let op of operations) {
      if (!isNaN(op)) {
        // If the operation is a number, push it onto the stack
        let num = parseInt(op);
        stack.push(num);
      } else if (op === "POP") {
        if (stack.length === 0) return -1;
        stack.pop();
      } else if (op === "DUP") {
        if (stack.length === 0) return -1;
        stack.push(stack[stack.length - 1]);
      } else if (op === "+") {
        if (stack.length < 2) return -1;
        let a = stack.pop();
        let b = stack.pop();
        let sum = a + b;
        if (sum > MAX_VALUE) return -1;
        stack.push(sum);
      } else if (op === "-") {
        if (stack.length < 2) return -1;
        let a = stack.pop();
        let b = stack.pop();
        let diff = a - b;
        if (diff < 0) return -1;
        stack.push(diff);
      } else {
        return -1; 
      }
    }
  
    if (stack.length === 0) return -1;
    return stack[stack.length - 1];
  }