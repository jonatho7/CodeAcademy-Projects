var score1 = 23;
var score2 = 25;
var score3 = 21;
var sum = score1 + score2 + score3;
var average = sum / 3;
var range = score2 - score3;
var fraction = 23 / 30;
var percentage = fraction * 100;


var myName = "Jordan";
var status = "";
if( myName.length >= 7 ) {
    status = "You have a long name!";
}
else {
    status = "You have a short name!";
}

var percentage = function(num, denom) {
    var result = (num / denom) * 100;
    return result;
}