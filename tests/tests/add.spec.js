const { execSync } = require('child_process');

function runCalculator(operation, num1, num2) {
  try {
    const result = execSync(`docker run --rm public.ecr.aws/l4q9w4c5/loanpro-calculator-cli ${operation} ${num1} ${num2}`, { encoding: 'utf-8' });
    return result.trim();
  } catch (error) {
    return error.stdout.trim() || 'error';
  }
}

describe('Add Operation Tests', () => {
  test.concurrent('add 2 + 3', () => {
    expect(runCalculator('add', 2, 3)).toBe('Result: 5');
  });

  test.concurrent('add -2 + 3', () => {
    expect(runCalculator('add', -2, 3)).toBe('Result: 1');
  });

  test.concurrent('add 2.5 + 3.2', () => {
    expect(runCalculator('add', 2.5, 3.2)).toBe('Result: 5.7');
  });

  test.concurrent('add 1e10 + 1e10', () => {
    expect(runCalculator('add', 1e10, 1e10)).toBe('Result: 20000000000');
  });

  // Negative tests
  test.concurrent('add invalid operands', () => {
    expect(runCalculator('add', 'two', 'three')).toBe('Invalid argument. Must be a numeric value.');
  });

  test.concurrent('add missing operand', () => {
    expect(runCalculator('add', 1, '')).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });
});
