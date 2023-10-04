# calculator

# Simple Web Calculator

A basic web-based calculator implemented with JavaScript, HTML, and CSS.

## Description

This web calculator allows basic arithmetic operations (addition, subtraction, multiplication, division) on two operands. The application ensures a straightforward and user-friendly interface for interactions and calculations, avoiding the usage of `eval()` for expressions evaluation due to its potential risks and vulnerabilities.

### Key Features:
- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Interactive UI with buttons for digits 0-9, operations (+, -, *, /), equals (=), and clear (C).
- Handling operations and updates dynamically on the display screen.
- Ability to continue calculations using the result of the last operation.

## How to Use

1. **Input Numbers:**
   - Click on number buttons (0-9) to input numbers.
   
2. **Perform Operations:**
   - Click on an operator button (+, -, *, /) after entering the first operand.
   - Then, input the second operand and click the equals button (=) to get the result.
   
3. **Clear the Display:**
   - To reset or clear the calculations, click the "C" button.
   
4. **Continuous Calculations:**
   - After a result is displayed, you can perform further operations on it by selecting another operator and operand.

## Code Structure

Here’s a succinct breakdown of the JavaScript code functionality:

- **Number Input:**
  - The `buttons` event listeners manage the input of numbers and update the display accordingly.

- **Operation Input:**
  - The `operators` event listeners enable the selection of an arithmetic operator (+, -, *, /) and prepare the calculator for the second operand.

- **Calculation and Result Display:**
  - The `equal` event listener evaluates the expression when the equals button (=) is clicked, displays the result, and sets up the calculator for further calculations.

- **Reset/Clear Calculator:**
  - The `clear` event listener resets the display and all stored operand/operator values.

## Known Limitations

- Does not handle floating-point precision issues.
- Limited to single-digit operations.
- No handling of successive operator click events.
- No visual feedback for button clicks or error states.
  
## Future Enhancements

- Handling complex expressions and multiple operations.
- Implementing keyboard support for input.
- Improving the UI and providing responsive design for mobile and tablet views.
- Managing and displaying errors to users (e.g., division by zero).

Feel free to explore the code, suggest improvements, or add new features to enhance the functionality and user experience of the calculator!
