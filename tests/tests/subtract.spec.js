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
  test('subtract 5 - 3', () => {
    expect(runCalculator('subtract', 5, 3)).toBe('Result: 2');
  });

  test('subtract 3 - 5', () => {
    expect(runCalculator('subtract', 3, 5)).toBe('Result: -2');
  });

  test('subtract 5.5 - 3.2', () => {
    expect(runCalculator('subtract', 5.5, 3.2)).toBe('Result: 2.3');
  });

  test('subtract 1e-10 - 1e-10', () => {
    expect(runCalculator('subtract', 1e-10, 1e-10)).toBe('Result: 0');
  });

  // Negative tests
  test('subtract invalid operand', () => {
    expect(runCalculator('subtract', 2, 'three')).toBe('Invalid argument. Must be a numeric value.');
  });
});
