const { execSync } = require('child_process');

function runCalculator(operation, num1, num2) {
  try {
    const result = execSync(`docker run --rm public.ecr.aws/l4q9w4c5/loanpro-calculator-cli ${operation} ${num1} ${num2}`, { encoding: 'utf-8' });
    return result.trim();
  } catch (error) {
    return error.stdout.trim() || 'error';
  }
}

describe('Subtract Operation Tests', () => {
  test('TC-001: Subtracting 3 from 5 should yield 2', () => {
    expect(runCalculator('subtract', 5, 3)).toBe('Result: 2');
  });

  test('TC-002: Subtracting 5 from 3 should yield -2', () => {
    expect(runCalculator('subtract', 3, 5)).toBe('Result: -2');
  });

  test('TC-003: Subtracting 3.2 from 5.5 should yield 2.3', () => {
    expect(runCalculator('subtract', 5.5, 3.2)).toBe('Result: 2.3');
  });

  test('TC-004: Subtracting very small numbers 1e-10 from 1e-10 should yield 0', () => {
    expect(runCalculator('subtract', 1e-10, 1e-10)).toBe('Result: 0');
  });

  test('TC-005: Subtracting large number 1e10 from 1e10 should yield 0', () => {
    expect(runCalculator('subtract', 1e10, 1e10)).toBe('Result: 0');
  });

  test('TC-006: Subtracting 1e-11 from 1e-10 should yield 0', () => {
    expect(runCalculator('subtract', 1e-10, 1e-11)).toBe('Result: 0');
  });

  // Negative tests
  test('TC-007: Subtracting with an invalid second operand should return an error about numeric values', () => {
    expect(runCalculator('subtract', 2, 'three')).toBe('Invalid argument. Must be a numeric value.');
  });

  test('TC-008: Subtracting with a missing second operand should display usage instructions', () => {
    expect(runCalculator('subtract', 5, '')).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('TC-009: Subtracting with a missing first operand should display usage instructions', () => {
    expect(runCalculator('subtract', '', 3)).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('TC-010: Subtracting with a non-numeric first operand should return an error about numeric values', () => {
    expect(runCalculator('subtract', null, 3)).toBe('Invalid argument. Must be a numeric value.');
  });

  test('TC-011: Subtracting with a non-numeric second operand should return an error about numeric values', () => {
    expect(runCalculator('subtract', 5, undefined)).toBe('Invalid argument. Must be a numeric value.');
  });
});
