const { execSync } = require('child_process');

function runCalculator(operation, num1, num2) {
  try {
    const result = execSync(`docker run --rm public.ecr.aws/l4q9w4c5/loanpro-calculator-cli ${operation} ${num1} ${num2}`, { encoding: 'utf-8' });
    return result.trim();
  } catch (error) {
    return error.stdout.trim() || 'error';
  }
}

describe('Multiply Operation Tests', () => {
  test('multiply 2 * 3', () => {
    expect(runCalculator('multiply', 2, 3)).toBe('Result: 6');
  });

  test('multiply -2 * 3', () => {
    expect(runCalculator('multiply', -2, 3)).toBe('Result: -6');
  });

  test('multiply 2.5 * 4', () => {
    expect(runCalculator('multiply', 2.5, 4)).toBe('Result: 10');
  });

  test('multiply 1e10 * 1e-10', () => {
    expect(runCalculator('multiply', 1e10, 1e-10)).toBe('Result: 1');
  });

  test('multiply invalid operand type', () => {
    expect(runCalculator('multiply', 'two', 'three')).toBe('Invalid argument. Must be a numeric value.');
  });

  // Negative tests
  test('multiply missing second operand', () => {
    expect(runCalculator('multiply', 2, '')).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('multiply missing first operand', () => {
    expect(runCalculator('multiply', '', 3)).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('multiply non-numeric first operand', () => {
    expect(runCalculator('multiply', null, 3)).toBe('Invalid argument. Must be a numeric value.');
  });

  test('multiply non-numeric second operand', () => {
    expect(runCalculator('multiply', 2, undefined)).toBe('Invalid argument. Must be a numeric value.');
  });
});
