var chessSize = 15;
module.exports.chessleft = function(y){
    return y - 4 <= 0 ? y : 4;
}

module.exports.chessright = function(y){
    return y + 4 >= chessSize ? chessSize-y-1 : 4;
}

module.exports.chessup = function(x){
    return x - 4 <= 0 ? x : 4;
}

module.exports.chessbottom = function(x){
    return x + 4 >= chessSize ? chessSize-x-1 : 4;
}

module.exports.chessleftup = function(x, y){
    var step = 0;
    for(var i = 1; i < 5; i++)
        if(x - i > 0 && y - i > 0)
            step++;

    return step;
}

module.exports.chessrightbottom = function (x, y){
    var step = 0;
    for(var i = 1; i < 5; i++)
        if(x + i < chessSize && y + i < chessSize)
            step++;

    return step;
}

module.exports.chessleftbottom = function (x, y){
    var step = 0;
    for(var i = 1; i < 5; i++)
        if(y - i > 0 && x + i < chessSize)
            step++;

    return step;
}

module.exports.chessrightup = function (x, y){
    var step = 0;
    for(var i = 1; i < 5; i++)
        if(y + i < chessSize && x - i > 0)
            step++;

    return step;
}