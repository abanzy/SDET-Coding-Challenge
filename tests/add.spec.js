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
  test('TC-001: Adding 2 and 3 should yield 5', () => {
    expect(runCalculator('add', 2, 3)).toBe('Result: 5');
  });

  test('TC-002: Adding -2 and 3 should yield 1', () => {
    expect(runCalculator('add', -2, 3)).toBe('Result: 1');
  });

  test('TC-003: Adding 2.5 and 3.2 should yield 5.7', () => {
    expect(runCalculator('add', 2.5, 3.2)).toBe('Result: 5.7');
  });

  test('TC-004: Adding very small numbers 1e-10 and 1e-10 should be rounded to 0', () => {
    expect(runCalculator('add', 1e-10, 1e-10)).toBe('Result: 0');
  });

  test('TC-005: Adding large numbers 1e10 and 1e10 should yield 20000000000', () => {
    expect(runCalculator('add', 1e10, 1e10)).toBe('Result: 20000000000');
  });

  test('TC-006: Adding 1e10 and -1e10 should yield 0', () => {
    expect(runCalculator('add', 1e10, -1e10)).toBe('Result: 0');
  });

  // Negative tests
  test('TC-007: Adding non-numeric values should return an error about numeric values', () => {
    expect(runCalculator('add', 'two', 'three')).toBe('Invalid argument. Must be a numeric value.');
  });

  test('TC-008: Adding with a missing second operand should display usage instructions', () => {
    expect(runCalculator('add', 1, '')).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('TC-009: Adding with a missing first operand should display usage instructions', () => {
    expect(runCalculator('add', '', 2)).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('TC-010: Adding with a non-numeric first operand should return an error about numeric values', () => {
    expect(runCalculator('add', null, 2)).toBe('Invalid argument. Must be a numeric value.');
  });

  test('TC-011: Adding with a non-numeric second operand should return an error about numeric values', () => {
    expect(runCalculator('add', 2, undefined)).toBe('Invalid argument. Must be a numeric value.');
  });
});
