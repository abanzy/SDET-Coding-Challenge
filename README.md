[![CI](https://github.com/abanzy/SDET-Coding-Challenge/actions/workflows/ci.yml/badge.svg)](https://github.com/abanzy/SDET-Coding-Challenge/actions/workflows/ci.yml)

# 🧪 Test Suite for CLI Calculator

Welcome to the **Test Suite for CLI Calculator**! This project ensures the accuracy and reliability of a command-line calculator through a comprehensive set of automated tests. The test suite is implemented using Jest and integrated with GitHub Actions for continuous integration.

# 🔎 Findings
The calculator application exhibits inconsistencies in error response formats across different operations. These inconsistencies can lead to confusion and misinterpretation of error messages. Uniformity in error responses is crucial for clarity and effective debugging.
<details>
  <summary>Click me for a expanded report</summary>

# 🐛 Bug Report: Inconsistencies in Error Response Uniformity

## Summary

The calculator application shows inconsistencies in error response formats across different operations. Uniform error responses are crucial for clarity and effective debugging.

---

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

---

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
git clone https://github.com/your-repo/calculator-cli-tests.git
cd calculator-cli-tests
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