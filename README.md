[![CI](https://github.com/abanzy/SDET-Coding-Challenge/actions/workflows/ci.yml/badge.svg)](https://github.com/abanzy/SDET-Coding-Challenge/actions/workflows/ci.yml)
# 🧪 Test Suite for CLI Calculator

Welcome to the **Test Suite for CLI Calculator**! This project ensures the accuracy and reliability of a command-line calculator through a comprehensive set of automated tests. The test suite is implemented using Jest and integrated with GitHub Actions for continuous integration.

# 🔎 Findings
The calculator application exhibits inconsistencies in error response formats across different operations. These inconsistencies can lead to confusion and misinterpretation of error messages. Uniformity in error responses is crucial for clarity and effective debugging.

<details>
  <summary>Click me for a expanded Test results table</summary>
  
 | Test Case ID | Description                                      | Operation | Input 1  | Input 2  | Expected Result                      | Actual Result                      | Status  |                                                         |
|--------------|--------------------------------------------------|-----------|----------|----------|-------------------------------------|------------------------------------|---------|--------------------------------------------------------------|
| TC-001       | Adding 2 and 3 should yield 5                                      | Add       | 2        | 3        | Result: 5                           | Result: 5                          | Pass    |                                                              |
| TC-002       | Adding -2 and 3 should yield 1                                     | Add       | -2       | 3        | Result: 1                           | Result: 1                          | Pass    |                                                              |
| TC-003       | ding 2.5 and 3.2 should yield 5.7                                 | Add       | 2.5      | 3.2      | Result: 5.7                         | Result: 5.7                        | Pass    |                                                              |
| TC-004       | Adding very small numbers 1e-10 and 1e-10 should be rounded to 0                            | Add       | 1e-10    | 1e-10    | Result: 0                           | Result: 0                          | Pass    |                                                              |
| TC-005       | Adding large numbers 1e10 and 1e10 should yield 20000000000                              | Add       | 1e10     | 1e10     | Result: 20000000000                 | Result: 20000000000                | Pass    |                                                              |
| TC-006       | Adding 1e10 and -1e10 should yield 0                             | Add       | 1e10     | -1e10    | Result: 0                           | Result: 3133                       | Fail    |                                                              |
| TC-007       | Adding non-numeric values should return an error about numeric values                          | Add       | 'two'    | 'three'  | Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
| TC-008       | Adding with a missing second operand should display usage instructions                       | Add       | 1        | ''       | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Pass    |                                                              |
| TC-009       | Adding with a missing first operand should display usage instructions                       | Add       | ''       | 2        | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Pass    |                                                              |
| TC-010       | Adding with a non-numeric first operand should return an error about numeric values                                 | Add       | null     | 2        | Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
| TC-011       | Adding with a non-numeric second operand should return an error about numeric values                             | Add       | 2        | undefined| Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
| TC-012       | Dividing 6 by 3 should yield 2                                  | Divide    | 6        | 3        | Result: 2                           | Result: 2                          | Pass    |                                                              |
| TC-013       | Dividing 5 by 2 should yield 2.5                                  | Divide    | 5        | 2        | Result: 2.5                         | Result: 2.5                        | Pass    |                                                              |
| TC-014       | Dividing 7 by 3 should yield 2.33333333                                  | Divide    | 7        | 3        | Result: 2.33333333                  | Result: 2.33333333                 | Pass    |                                                              |
| TC-015       | Dividing very small number 1e-10 by large number 1e10 should be rounded to 0                           | Divide    | 1e-10    | 1e10     | Result: 0                           | Result: 0                          | Pass    |                                                              |
| TC-016       | Dividing large number 1e10 by 1e5 should yield 100000                            | Divide    | 1e10     | 1e5      | Result: 100000                      | Result: 100000                     | Pass    |                                                              |
| TC-017       | Dividing 1e-10 by 1e-10 should yield 1                          | Divide    | 1e-10    | 1e-10    | Result: 1                           | Result: 1                          | Pass    |                                                              |
| TC-018       | Dividing 1e-10 by 1e-11 should yield 10                          | Divide    | 1e-10    | 1e-11    | Result: 10                          | Result: 10                         | Pass    |                                                              |
| TC-019       | Dividing by zero should return an error indicating division by zero is not allowed                                  | Divide    | 5        | 0        | Error: Cannot divide by zero         | Error: Cannot divide by zero       | Pass    |                                                              |
| TC-020       | Dividing with non-numeric operands should return an error about numeric values                        | Divide    | 'six'    | 'three'  | Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
| TC-021       | Dividing with a missing second operand should display usage instructions                     | Divide    | 6        | ''       | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Pass    |                                                              |
| TC-022       | Dividing with a missing first operand should display usage instructions                     | Divide    | ''       | 3        | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Pass    |                                                              |
| TC-023       | Dividing with a non-numeric second operand should return an error about numeric values                           | Divide    | 5        | undefined| Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
| TC-024       | Multiplying 2 by 3 should yield 6                               | Multiply  | 2        | 3        | Result: 6                           | Result: 6                          | Pass    |                                                              |
| TC-025       | Multiplying -2 by 3 should yield -6                              | Multiply  | -2       | 3        | Result: -6                          | Result: -6                         | Pass    |                                                              |
| TC-026       | Multiplying 2.5 by 4 should yield 10                             | Multiply  | 2.5      | 4        | Result: 10                          | Result: 10                         | Pass    |                                                              |
| TC-027       | Multiplying large number 1e10 by very small number 1e-10 should yield 1                        | Multiply  | 1e10     | 1e-10    | Result: 1                           | Result: 1                          | Pass    |                                                              |
| TC-028       | Multiplying 1e5 by 1e5 should yield 10000000000                           | Multiply  | 1e5      | 1e5      | Result: 10000000000                 | Result: 10000000000                | Pass    |                                                              |
| TC-029       | Multiplying very small numbers 1e-5 by 1e-5 should be rounded to 0                         | Multiply  | 1e-5     | 1e-5     | Result: 0                           | Result: 0                          | Pass    |                                                              |
| TC-030       | Multiply 'two' and 'three' should display usage instructions                     | Multiply  | 'two'    | 'three'  | Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
| TC-031       | Multiplying with a missing second operand should display usage instructions                   | Multiply  | 2        | ''       | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Pass    |                                                              |
| TC-032       | Multiplying with a missing first operand should display usage instructions                   | Multiply  | ''       | 3        | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Pass    |                                                              |
| TC-033       | Multiplying with a non-numeric first operand should return an error about numeric values                            | Multiply  | null     | 3        | Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
| TC-034       | Multiplying with a non-numeric second operand should return an error about numeric values                       | Multiply  | 2        | undefined| Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
| TC-035       | Subtracting 3 from 5 should yield 2                              | Subtract  | 5        | 3        | Result: 2                           | Result: 2                          | Pass    |                                                              |
| TC-036       | Subtracting 5 from 3 should yield -2                              | Subtract  | 3        | 5        | Result: -2                          | Result: -2                         | Pass    |                                                              |
| TC-037       | Subtracting 3.2 from 5.5 should yield 2.3                          | Subtract  | 5.5      | 3.2      | Result: 2.3                         | Result: 2.3                        | Pass    |                                                              |
| TC-038       | Subtracting very small numbers 1e-10 from 1e-10 should yield 0                      | Subtract  | 1e-10    | 1e-10    | Result: 0                           | Result: 0                          | Pass    |                                                              |
| TC-039       | Subtracting large number 1e10 from 1e10 should yield 0                        | Subtract  | 1e10     | 1e10     | Result: 0                           | Result: 0                          | Pass    |                                                              |
| TC-040       | Subtracting 1e-11 from 1e-10 should yield 0                      | Subtract  | 1e-10    | 1e-11    | Result: 0                           | Result: 0                          | Pass    |                                                              |
| TC-041       | Subtracting with an invalid second operand should return an error about numeric values                        | Subtract  | 2        | 'three'  | Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
| TC-042       | Subtracting with a missing second operand should display usage instructions                 | Subtract  | 5        | ''       | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Pass    |                                                              |
| TC-043       | Subtracting with a missing first operand should display usage instructions                 | Subtract  | ''       | 3        | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide | Pass    |                                                              |
| TC-044       | Subtracting with a non-numeric first operand should return an error about numeric values                           | Subtract  | null     | 3        | Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
| TC-045       | Subtracting with a non-numeric second operand should return an error about numeric values                      | Subtract  | 5        | undefined| Invalid argument. Must be a numeric value. | Invalid argument. Must be a numeric value. | Pass    |                                                              |
 </details>
</details>

<details>
  <summary>Click me for a expanded text report</summary>

## 🐛  Bug Report: Addition Operation Failure

## Summary

The test for adding very large numbers (`1e10 + -1e10`) isn't working as expected! It should give us zero, but instead it's showing a strange result: `"Result: 31337"`.

It can be recreated by running the command

```sh
 docker run --rm public.ecr.aws/l4q9w4c5/loanpro-calculator-cli add 1e10 -1e10
```

**Where's the culprit hiding?**

The test case is in the file `tests/tests/add.spec.js` on line 34.
 Here's the test code snippet:

```javascript
test('add 1e10 + -1e10', () => {
  expect(runCalculator('add', 1e10, -1e10)).toBe('Result: 0');
});

```
## 🐛 Bug Report: Inconsistencies in Error Response Uniformity

## Summary

The calculator application shows inconsistencies in error response formats across different operations. Uniform error responses are crucial for clarity and effective debugging.

## Detailed Report
# User-Friendly Error Messages for Calculator Operations 🧮

## Addition Operation (`calculator.spec.js`)

1. **Test Case: `add invalid operands`**
   - **🔍 Current Response:** `'Invalid argument. Must be a numeric value.'`
   - **🚀 Ideal Response:** `'Error: Both numbers you entered must be valid numbers. Please check and try again.'`
     - **💡 Best Practice:** Clearly explain that both inputs should be numbers. Offer a simple and understandable error message.

2. **Test Case: `add missing operand`**
   - **🔍 Current Response:** `'Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide'`
   - **🚀 Ideal Response:** `'Error: You need to enter two numbers to add. Please use the format: operation operand1 operand2'`
     - **💡 Best Practice:** Inform the user that they need to provide two numbers and offer a brief guide on usage.

3. **Test Case: `add missing first operand`**
   - **🔍 Current Response:** `'Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide'`
   - **🚀 Ideal Response:** `'Error: You missed entering the first number. Please use the format: operation operand1 operand2'`
     - **💡 Best Practice:** Clearly state which number is missing and provide instructions on how to use the tool.

4. **Test Case: `add non-numeric first operand`**
   - **🔍 Current Response:** `'Invalid argument. Must be a numeric value.'`
   - **🚀 Ideal Response:** `'Error: The first number you entered is not valid. Please enter a proper number.'`
     - **💡 Best Practice:** Specify that the first number is incorrect and guide the user to enter a valid number.

5. **Test Case: `add non-numeric second operand`**
   - **🔍 Current Response:** `'Invalid argument. Must be a numeric value.'`
   - **🚀 Ideal Response:** `'Error: The second number you entered is not valid. Please enter a proper number.'`
     - **💡 Best Practice:** Indicate which number is incorrect and provide guidance to correct it.

## Subtraction Operation (`calculator.spec.js`)

1. **Test Case: `subtract invalid operand type`**
   - **🔍 Current Response:** `'Invalid argument. Must be a numeric value.'`
   - **🚀 Ideal Response:** `'Error: Both numbers you entered must be valid numbers. Please check and try again.'`
     - **💡 Best Practice:** Clearly state that both inputs need to be numbers and offer a simple error message.

2. **Test Case: `subtract missing second operand`**
   - **🔍 Current Response:** `'Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide'`
   - **🚀 Ideal Response:** `'Error: You need to enter two numbers to subtract. Please use the format: operation operand1 operand2'`
     - **💡 Best Practice:** Inform the user that both numbers are required and offer usage instructions.

3. **Test Case: `subtract missing first operand`**
   - **🔍 Current Response:** `'Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide'`
   - **🚀 Ideal Response:** `'Error: You missed entering the first number. Please use the format: operation operand1 operand2'`
     - **💡 Best Practice:** Clearly indicate which number is missing and provide instructions on how to use the tool.

4. **Test Case: `subtract non-numeric first operand`**
   - **🔍 Current Response:** `'Invalid argument. Must be a numeric value.'`
   - **🚀 Ideal Response:** `'Error: The first number you entered is not valid. Please enter a proper number.'`
     - **💡 Best Practice:** Specify that the first number is incorrect and guide the user to enter a valid number.

5. **Test Case: `subtract non-numeric second operand`**
   - **🔍 Current Response:** `'Invalid argument. Must be a numeric value.'`
   - **🚀 Ideal Response:** `'Error: The second number you entered is not valid. Please enter a proper number.'`
     - **💡 Best Practice:** Indicate which number is incorrect and provide guidance to correct it.

## Multiplication Operation (`calculator.spec.js`)

1. **Test Case: `multiply missing second operand`**
   - **🔍 Current Response:** `'Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide'`
   - **🚀 Ideal Response:** `'Error: You need to enter two numbers to multiply. Please use the format: operation operand1 operand2'`
     - **💡 Best Practice:** Inform the user that both numbers are required and provide clear instructions.

2. **Test Case: `multiply missing first operand`**
   - **🔍 Current Response:** `'Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide'`
   - **🚀 Ideal Response:** `'Error: You missed entering the first number.Please use the format: operation operand1 operand2'`
     - **💡 Best Practice:** Clearly state which number is missing and provide usage instructions.

3. **Test Case: `multiply non-numeric first operand`**
   - **🔍 Current Response:** `'Invalid argument. Must be a numeric value.'`
   - **🚀 Ideal Response:** `'Error: The first number you entered is not valid. Please enter a proper number.'`
     - **💡 Best Practice:** Clearly indicate which number is incorrect and ensure the message is specific.

4. **Test Case: `multiply non-numeric second operand`**
   - **🔍 Current Response:** `'Invalid argument. Must be a numeric value.'`
   - **🚀 Ideal Response:** `'Error: The second number you entered is not valid. Please enter a proper number.'`
     - **💡 Best Practice:** Maintain consistency by specifying which number is problematic.

## Division Operation (`calculator.spec.js`)

1. **Test Case: `divide by zero`**
   - **🔍 Current Response:** `'Error: Cannot divide by zero'`
   - **🚀 Ideal Response:** `'Error: You cannot divide by zero. Please enter a different number.'`
     - **💡 Best Practice:** Clearly explain why dividing by zero isn’t allowed and guide users to enter a different number.

2. **Test Case: `divide invalid operand type`**
   - **🔍 Current Response:** `'Invalid argument. Must be a numeric value.'`
   - **🚀 Ideal Response:** `'Error: Both numbers you entered must be valid numbers. Please check and try again.'`
     - **💡 Best Practice:** Clarify that both inputs need to be numbers and specify the type of error.

3. **Test Case: `divide missing second operand`**
   - **🔍 Current Response:** `'Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide'`
   - **🚀 Ideal Response:** `'Error: You need to enter two numbers to divide. Please use the format: operation operand1 operand2'`
     - **💡 Best Practice:** Inform the user that both numbers are required and offer clear instructions.

4. **Test Case: `divide missing first operand`**
   - **🔍 Current Response:** `'Usage: cli-calculator operation operand1 operand2\nSupported operations: add, subtract, multiply, divide'`
   - **🚀 Ideal Response:** `'Error: You missed entering the first number. Please use the format: operation operand1 operand2'`
     - **💡 Best Practice:** Include a message about the missing number and provide clear usage instructions.

5. **Test Case: `divide non-numeric second operand`**
   - **🔍 Current Response:** `'Invalid argument. Must be a numeric value.'`
   - **🚀 Ideal Response:** `'Error: The second number you entered is not valid. Please enter a proper number.'`
     - **💡 Best Practice:** Clearly specify which number is incorrect and guide users to correct their input.


## Recommendations

- **🎯 Standardize Error Messages:** Use consistent and clear error messages across all operations.
- **🔄 Implement Consistent Logging Practices:** Ensure all error messages are user-friendly and easy to understand.
- **🛠️ User-Friendly Errors:** Make sure error messages provide clear guidance to help users correct their mistakes.
- **🔍 Regular Review:** Continuously review and update error messages based on user feedback to improve clarity.

---

</details>

## 🚀 Features

- **Automated Testing**: Validates arithmetic operations and error handling.
- **Parallel Execution**: Efficient test execution with parallel jobs.
- **HTML Report**: Detailed test results in an HTML report.
- **CI Integration**: Automated testing and reporting with GitHub Actions.

## 📦 Installation

To run the test suite locally, you'll need Node.js and Docker installed on your machine. Follow these steps to set up your environment and run the tests.

### 🛠️ Prerequisites

- **Node.js**: Ensure Node.js is installed. Download it from [Node.js official website](https://nodejs.org/).
- **Docker**: Ensure Docker is installed and running. Download Docker from [Docker's official website](https://www.docker.com/get-started).

### 📥 Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/abanzy/SDET-Coding-Challenge.git
cd SDET-Coding-Challenge
```

### 📦 Install Dependencies

Install the required Node.js dependencies using npm:

```sh
npm install
```

### 🖥️ Download and Run Docker Image

Pull the Docker image for the CLI calculator:

```sh
docker pull public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest
```

### 🧪 Run Tests Locally

Execute the tests using npm:

```sh
npm test
```

This command runs the test suite against the Dockerized CLI calculator and generates an HTML report.

## 🧑‍💻 Continuous Integration

The CI process is managed using GitHub Actions. The workflow automates the following steps:

1. **Checkout and Setup**: Checks out the code, sets up Node.js, and installs dependencies.
2. **Docker Image Handling**: Pulls the Docker image for the CLI calculator.
3. **Run Tests**: Executes the test suite.
4. **Upload Report**: Uploads the HTML test report as an artifact.


## 📄 Report

Test results are compiled into an HTML report. You can access the report from the GitHub Actions artifacts section after the workflow run.
 
---
Reach out to me if any information found in this project should be removed or turned confidential
---
