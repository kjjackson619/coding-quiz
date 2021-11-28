var sec = 75;
var timeLeft = setInterval(timer, 1000);

//function timer() {
document.getElementById('timer').innerHTML = "Time: " + sec;
sec--;
if (sec == -1) {
    clearInterval(timeLeft);
    alert("Time is up!");
}
}

var startQuiz = function (start) {

}