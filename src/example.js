// This file has intentional linting errors to test the workflow
console.log("Hello world") // Missing semicolon, double quotes (violates quotes and semi rules)
let unusedVariable = 42; // Unused variable (violates no-unused-vars)
function testFunction() {
  return "test value" // Missing semicolon, double quotes
}