function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
      throw new Error("Both base and height must be positive numbers.");
    }
  
    return 0.5 * base * height;
  }
  
  function promptNumber(message) {
    let input;
    do {
      input = parseFloat(prompt(message));
    } while (isNaN(input) || input <= 0);
    return input;
  }
  
  function main() {
    const base = promptNumber("Enter the base length of the triangle: ");
    const height = promptNumber("Enter the height of the triangle: ");
  
    try {
      const area = calculateTriangleArea(base, height);
      console.log("The area of the triangle is:", area);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Call the main function to start the program
  main();
  