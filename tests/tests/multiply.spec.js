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
});
