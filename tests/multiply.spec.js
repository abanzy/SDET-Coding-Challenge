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
  test('TC-024: Multiplying 2 by 3 should yield 6', () => {
    expect(runCalculator('multiply', 2, 3)).toBe('Result: 6');
  });

  test('TC-025: Multiplying -2 by 3 should yield -6', () => {
    expect(runCalculator('multiply', -2, 3)).toBe('Result: -6');
  });

  test('TC-026: Multiplying 2.5 by 4 should yield 10', () => {
    expect(runCalculator('multiply', 2.5, 4)).toBe('Result: 10');
  });

  test('TC-027: Multiplying large number 1e10 by very small number 1e-10 should yield 1', () => {
    expect(runCalculator('multiply', 1e10, 1e-10)).toBe('Result: 1');
  });

  test('TC-028: Multiplying 1e5 by 1e5 should yield 10000000000', () => {
    expect(runCalculator('multiply', 1e5, 1e5)).toBe('Result: 10000000000');
  });

  test('TC-029: Multiplying very small numbers 1e-5 by 1e-5 should be rounded to 0', () => {
    expect(runCalculator('multiply', 1e-5, 1e-5)).toBe('Result: 0');
  });

  // Negative tests
  test('TC-030: Multiplying with a missing second operand should display usage instructions', () => {
    expect(runCalculator('multiply', 'two', 'three')).toBe('Invalid argument. Must be a numeric value.');
  });

  test('TC-030: Multiplying with a missing second operand should display usage instructions', () => {
    expect(runCalculator('multiply', 2, '')).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('TC-031: Multiplying with a missing first operand should display usage instructions', () => {
    expect(runCalculator('multiply', '', 3)).toBe('Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide');
  });

  test('TC-032: Multiplying with a non-numeric first operand should return an error about numeric values', () => {
    expect(runCalculator('multiply', null, 3)).toBe('Invalid argument. Must be a numeric value.');
  });

  test('TC-033: Multiplying with a non-numeric second operand should return an error about numeric values', () => {
    expect(runCalculator('multiply', 2, undefined)).toBe('Invalid argument. Must be a numeric value.');
  });
});
