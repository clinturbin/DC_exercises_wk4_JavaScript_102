//===================================== 
//      JavaScript 102 Exercises
// ===================================

//----------------------------
//    Just the Positives
//---------------------------

var positiveNumbers = function (numbers) {
    var positives = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            positives.push(numbers[i]);
        } 
    }
    return positives;
};

var numbers = [-1, -2, -3];

console.log (positiveNumbers(numbers));