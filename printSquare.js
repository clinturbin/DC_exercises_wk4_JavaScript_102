//===================================== 
//      JavaScript 102 Exercises
// ===================================

//----------------------------
//    PRINT A SQUARE
//---------------------------

var printSquare = function (size) {
    for (var i = 0; i < size; i++) {
        var str = '';
        for (var j = 0; j < size; j++) {
            str += '*';
        }
        console.log(str);
    }
};

printSquare(10);