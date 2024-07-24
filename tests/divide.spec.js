const { execSync } = require('child_process');

function runCalculator(operation, num1, num2) {
  try {
    const result = execSync(`docker run --rm public.ecr.aws/l4q9w4c5/loanpro-calculator-cli ${operation} ${num1} ${num2}`, { encoding: 'utf-8' });
    return result.trim();
  } catch (error) {
    return error.stdout.trim() || 'error';
  }
}

describe('Divide Operation Tests', () => {
  test('TC-012: Dividing 6 by 3 should yield 2', () => {
    expect(runCalculator('divide', 6, 3)).toBe('Result: 2');
  });

  test('TC-013: Dividing 5 by 2 should yield 2.5', () => {
    expect(runCalculator('divide', 5, 2)).toBe('Result: 2.5');
  });

  test('TC-014: Dividing 7 by 3 should yield 2.33333333', () => {
    expect(runCalculator('divide', 7, 3)).toBe('Result: 2.33333333');
  });

  test('TC-015: Dividing very small number 1e-10 by large number 1e10 should be rounded to 0', () => {
    expect(runCalculator('divide', 1e-10, 1e10)).toBe('Result: 0');
  });

  test('TC-016: Dividing large number 1e10 by 1e5 should yield 100000', () => {
    expect(runCalculator('divide', 1e10, 1e5)).toBe('Result: 100000');
  });

  test('TC-017: Dividing 1e-10 by 1e-10 should yield 1', () => {
    expect(runCalculator('divide', 1e-10, 1e-10)).toBe('Result: 1');
  });

  test('TC-018: Dividing 1e-10 by 1e-11 should yield 10', () => {
    expect(runCalculator('divide', 1e-10, 1e-11)).toBe('Result: 10');
  });

  // Negative tests
  test('TC-019: Dividing by zero should return an error indicating division by zero is not allowed', () => {
    expect(runCalculator('divide', 5, 0)).toBe('Error: Cannot divide by zero');
  });

  test('TC-020: Dividing with non-numeric operands should return an error about numeric values', () => {
    expect(runCalculator('divide', 'six', 'three')).toBe('Invalid argument. Must be a numeric value.');
  });

  test('TC-021: Dividing with a missing second operand should display usage instructions', () => {
    expect(runCalculator('divide', 6, '')).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('TC-022: Dividing with a missing first operand should display usage instructions', () => {
    expect(runCalculator('divide', '', 3)).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('TC-023: Dividing with a non-numeric second operand should return an error about numeric values', () => {
    expect(runCalculator('divide', 5, undefined)).toBe('Invalid argument. Must be a numeric value.');
  });
});
