document.write("<h1>Mini-Golf</h1>");
console.log ("Welcome to Mini-Golf!");
var username = prompt("Welcome to GC mini golf! what is your name?");
if (username == ""){
    username = "Please enter your username";
    console.log (username);
};

var holes = prompt("Hi,  "+ username +"! Would you like to play 3 or 6 holes today?");

var putts = 0;
if (holes == "3"){
    var par = 9;
    var totalScore = 0;
    console.log ("You've selected 3 holes today!");
    for (var i = 1; i < 4; i++){
        var holes = prompt("How many putts for hole " + i +"? (par is 3)");
        intHoles = parseInt(holes);
        totalScore += intHoles;
    }

    var userScore = totalScore - par;
    if (userScore === 0) {
        console.log ("Good game, "+ username + ". Your total par was: "+ userScore );
    } else if (totalScore > par) {
        console.log ("Nice try, "+ username + ". Your total par was: "+ userScore);
    } else {
        console.log ("Great job, "+ username +"! Your total par was: " + userScore);
    }
}
if (holes == "6"){
    var par = 18;
    var totalScore = 0;
    console.log ("You've selected 6 holes today!");
    for (var i = 1; i < 7; i++) {
        var holes = prompt("How many putts for hole " + i + "? (par is 3)");
        intHoles = parseInt(holes);
        totalScore += intHoles;
    }
    var userScore = totalScore - par;
    if (userScore === 0) {
        console.log ("Good game, "+ username + ". Your total par was: "+ userScore );
    } else if (totalScore > par) {
        console.log ("Nice try, "+ username + ". Your total par was: "+ userScore);
    } else {
        console.log ("Great job, "+ username +"! Your total par was: " + userScore);
    }
}






