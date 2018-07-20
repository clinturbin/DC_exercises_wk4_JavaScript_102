//===================================== 
//      JavaScript 102 Exercises
// ===================================

//----------------------------
//    CAESAR CIPHER
//---------------------------

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var cipher = function (message, offset) {
    var lowerMessage = message.toLowerCase();
    var newString = '';
    var caesarIndex;
    for (var i = 0; i < lowerMessage.length; i++) {
        if (lowerLetters.includes(lowerMessage[i])) {
            for (var j = 0; j < lowerLetters.length; j++) {
                if (lowerMessage[i] === lowerLetters[j]) {
                    if (j + offset >= lowerLetters.length) {
                        caesarIndex = j - offset;
                    } else {
                        caesarIndex = j + offset;
                    }
                    newString += lowerLetters[caesarIndex];
                }
            }
        } else {
            newString += lowerMessage[i];
        }
    }
    return newString;
}

var message = 'Genius without education is like silver in the mine';
var offset = 13;

console.log(cipher(message, offset));


//----------------------------
//    CAESAR CIPHER 2
//---------------------------

// var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var cipher = function (message, offset) {
//     var lowerMessage = message.toLowerCase();
//     var newString = '';
//     var caesarIndex;
//     for (var i = 0; i < lowerMessage.length; i++) {
//         if (lowerLetters.includes(lowerMessage[i])) {
//             for (var j = 0; j < lowerLetters.length; j++) {
//                 if (lowerMessage[i] === lowerLetters[j]) {
//                     if (j - offset < 0) {
//                         caesarIndex = j + offset;
//                     } else {
//                         caesarIndex = j - offset;
//                     }
//                     newString += lowerLetters[caesarIndex];
//                 }
//             }
//         } else {
//             newString += lowerMessage[i];
//         }
//     }
//     return newString;
// }

// var message = 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar';
// var offset = 13;

// console.log(cipher(message, offset));