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
  test('add 2 + 3', () => {
    expect(runCalculator('add', 2, 3)).toBe('Result: 5');
  });

  test('add -2 + 3', () => {
    expect(runCalculator('add', -2, 3)).toBe('Result: 1');
  });

  test('add 2.5 + 3.2', () => {
    expect(runCalculator('add', 2.5, 3.2)).toBe('Result: 5.7');
  });

  test('add 1e-10 + 1e-10', () => {
    expect(runCalculator('add', 1e-10, 1e-10)).toBe('Result: 0');
  });

  test('add 1e10 + 1e10', () => {
    expect(runCalculator('add', 1e10, 1e10)).toBe('Result: 20000000000');
  });
  
  test('add 1e10 + -1e10', () => {
    expect(runCalculator('add', 1e10, -1e10)).toBe('Result: 0');
  });  

  // Negative tests
  test('add invalid operands', () => {
    expect(runCalculator('add', 'two', 'three')).toBe('Invalid argument. Must be a numeric value.');
  });

  test('add missing operand', () => {
    expect(runCalculator('add', 1, '')).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });
  
  test('add missing first operand', () => {
    expect(runCalculator('add', '', 2)).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('add non-numeric first operand', () => {
    expect(runCalculator('add', null, 2)).toBe('Invalid argument. Must be a numeric value.');
  });

  test('add non-numeric second operand', () => {
    expect(runCalculator('add', 2, undefined)).toBe('Invalid argument. Must be a numeric value.');
  });
});
