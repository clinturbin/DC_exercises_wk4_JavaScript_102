//----------------------------
//    FACTOR A NUMBER
//---------------------------

var factors = function (number) {
    var result = [];
    for (var i = 1; i < number + 1; i++) {
        if (number % i === 0) {
            result.push(i)
        }
    }
    return result;
};

console.log(factors(40));