// index.js

function printSquareStar(n) {
    let string = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printHollowSquareStar(n) {
    let string = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
          string += "*";
        } else {
          string += " ";
        }
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printRightTriangleStar(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < n - i; j++) {
        string += " ";
      }
      for (let k = 0; k < i; k++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printLeftTriangleStar(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printDownwardTriangleStar(n) {
    let string = "";
    for (let i = 0; i < n; i++) {
      for (let k = 0; k < n - i; k++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printHollowTriangleStar(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        if (i === n) {
          string += "*";
        } else {
          if (j == 0 || j == i - 1) {
            string += "*";
          } else {
            string += " ";
          }
        }
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printPyramidStar(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        string += " ";
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printReversePyramidStar(n) {
    let string = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      for (let k = 0; k < 2 * (n - i) - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printHollowPyramidStar(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        string += " ";
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1 || i === n) {
          string += "*";
        } else {
          if (k === 0 || k === 2 * i - 2) {
            string += "*";
          } else {
            string += " ";
          }
        }
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printDiamondStar(n) {
    let string = "";
    // Upside pyramid
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    // Downside pyramid
    for (let i = 1; i <= n - 1; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      // printing star
      for (let k = (n - i) * 2 - 1; k > 0; k--) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printHollowDiamondStar(n) {
    let string = "";
    // Upside pyramid
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        if (k === 0 || k === 2 * i - 2) {
          string += "*";
        } else {
          string += " ";
        }
      }
      string += "\n";
    }
    // Downside pyramid
    for (let i = 1; i <= n - 1; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      // printing star
      for (let k = (n - i) * 2 - 1; k >= 1; k--) {
        if (k === 1 || k === (n - i) * 2 - 1) {
          string += "*";
        } else {
          string += " ";
        }
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printHourglassStar(n) {
    let string = "";
    // Reversed pyramid pattern
    for (let i = 0; i < n; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < (n - i) * 2 - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    // Pyramid pattern
    for (let i = 2; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }
  
  function printRightPascalStar(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += "*";
      }
      string += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < n - i; j++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  }
  
  module.exports = {
    printSquareStar,
    printHollowSquareStar,
    printRightTriangleStar,
    printLeftTriangleStar,
    printDownwardTriangleStar,
    printHollowTriangleStar,
    printPyramidStar,
    printReversePyramidStar,
    printHollowPyramidStar,
    printDiamondStar,
    printHollowDiamondStar,
    printHourglassStar,
    printRightPascalStar,
  };
// index.js

function printSquareStar(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

function printHollowSquareStar(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
}

function printRightTriangleStar(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

function printLeftTriangleStar(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

function printDownwardTriangleStar(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n - i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

function printHollowTriangleStar(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (i === n) {
        string += "*";
      } else {
        if (j == 0 || j == i - 1) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  console.log(string);
}

function printPyramidStar(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

function printReversePyramidStar(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

function printHollowPyramidStar(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      if (i === 1 || i === n) {
        string += "*";
      } else {
        if (k === 0 || k === 2 * i - 2) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  console.log(string);
}

function printDiamondStar(n) {
  let string = "";
  // Upside pyramid
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  // Downside pyramid
  for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

function printHollowDiamondStar(n) {
  let string = "";
  // Upside pyramid
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  // Downside pyramid
  for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (n - i) * 2 - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
}

function printHourglassStar(n) {
  let string = "";
  // Reversed pyramid pattern
  for (let i = 0; i < n; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < (n - i) * 2 - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  // Pyramid pattern
  for (let i = 2; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

function printRightPascalStar(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

function printNumberedPascalTriangle(n) {
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result[i] = [];
      let row = '';
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          result[i][j] = 1;
        } else {
          result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        row += `${result[i][j]} `;
      }
      console.log(row);
    }
  }
  

module.exports = {
  printSquareStar,
  printHollowSquareStar,
  printRightTriangleStar,
  printLeftTriangleStar,
  printDownwardTriangleStar,
  printHollowTriangleStar,
  printPyramidStar,
  printReversePyramidStar,
  printHollowPyramidStar,
  printDiamondStar,
  printHollowDiamondStar,
  printHourglassStar,
  printRightPascalStar,
  printNumberedPascalTriangle,
};
  