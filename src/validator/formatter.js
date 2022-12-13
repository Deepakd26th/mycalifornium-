function text1(){let text = "     Hello World!     ";
let result = text.trim();

console.log(result);
}

function lowerCase(){let result2 = text.toLowerCase();

console.log(result2);
}

function upperCase(){let result3 = text.toUpperCase();

console.log(result3);
}

module.exports.text1 = text1
module.exports.lowerCase = lowerCase
module.exports.upperCase= upperCase
