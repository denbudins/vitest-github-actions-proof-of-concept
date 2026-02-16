// ESLint warning examples:
var unusedVar = 42; // 'var' instead of 'let' or 'const', and unused variable
console.log("Debug info"); // console.log warning

export const divTwoNumbers = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return a / b;
};
