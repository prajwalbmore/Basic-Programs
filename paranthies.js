function isBalanced(str) {
    let stack = [];
    for (let char of str) {
      if (char === '('){
        stack.push(')');
      } 
      else if (char === '{') {
        stack.push('}');
      }
      else if (char === '[') {
        stack.push(']');
      }
      else if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
    return stack.length === 0;
  }
  
const str = '{([])}';
console.log(isBalanced(str) );
 