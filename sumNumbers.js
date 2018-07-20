//===================================== 
//      JavaScript 102 Exercises
// ===================================

//----------------------------
//    Sum the Numbers
//---------------------------

var sumNumbers = function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};

var numbers = [1, 4, 8];

console.log(sumNumbers(numbers));