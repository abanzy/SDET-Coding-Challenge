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
  test('divide 6 / 3', () => {
    expect(runCalculator('divide', 6, 3)).toBe('Result: 2');
  });

  test('divide 5 / 2', () => {
    expect(runCalculator('divide', 5, 2)).toBe('Result: 2.5');
  });

  test('divide 7 / 3', () => {
    expect(runCalculator('divide', 7, 3)).toBe('Result: 2.33333333');
  });

  test('divide 1e-10 / 1e10', () => {
    expect(runCalculator('divide', 1e-10, 1e10)).toBe('Result: 0');
  });

  // Negative tests
  test('divide by zero', () => {
    expect(runCalculator('divide', 5, 0)).toBe('Error: Cannot divide by zero');
  });
});
