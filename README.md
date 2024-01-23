# ihatepatternprinting

`ihatepatternprinting` is an npm package that provides a collection of functions to print various patterns. It's designed for developers who want to explore or practice different pattern printing techniques commonly used in interviews.

## Installation

```bash
npm install ihatepatternprinting
```

## Why ihatepatternprinting?

As a developer, I've always found pattern printing questions in interviews to be a source of frustration. They often don't reflect real-world programming challenges and may not be the best indicator of one's coding skills. This package is my humorous take on expressing that frustration. While I may not hate patterns in general, I certainly don't enjoy seeing them in interviews.

## Usage

```javascript
const patterns = require('ihatepatternprinting');

const n = 5; // You can change this value as needed

console.log("Square Star:");
patterns.printSquareStar(n);

console.log("\nHollow Square Star:");
patterns.printHollowSquareStar(n);

// and so on !!!
```
## Note:

In all pattern printing functions, the parameter `n` represents the height of the pattern. Adjust the value of `n` to control the size of the patterns. Experiment with different values to achieve the desired visual effect.

Feel free to explore and have fun creating various patterns!


## Available Patterns

- `printSquareStar(n)`
- `printHollowSquareStar(n)`
- `printRightTriangleStar(n)`
- `printLeftTriangleStar(n)`
- `printDownwardTriangleStar(n)`
- `printHollowTriangleStar(n)`
- `printPyramidStar(n)`
- `printReversePyramidStar(n)`
- `printHollowPyramidStar(n)`
- `printDiamondStar(n)`
- `printHollowDiamondStar(n)`
- `printHourglassStar(n)`
- `printRightPascalStar(n)`
- `printNumberedPascalTriangle(n)`
