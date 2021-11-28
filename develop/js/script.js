//global variables
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");

//timer variables
var sec = 75;
var totalScore = 0;
var end = false;

//scoring function
var points = function () {
    totalScore = totalScore + 10;
}

//timer function
var timer = function () {
    var timeInterval = setInterval(() => {
        if (end === false) {
            timerEl.textContent = sec;
            sec--;
            return sec;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);

    if (end === true) {
        timerEl.textContent = sec;
    }
}

//highscore function for leaderboard
var highScores = function () {

    var highScoreContainer = document.createElement("div");
    highScoreContainer.className = "hs-container";
    mainEl.appendChild(highScoreContainer);


    var title = document.createElement("h1");
    title.className = "high-score-title";
    title.textContent = "High Scores";
    highScoreContainer.appendChild(title);

    var initals = localStorage.getItem("initals");
    var score = localStorage.getItem("score");
    var leaderboardScore = document.createElement("p");
    leaderboardScore.className = "leaderboard-score";
    leaderboardScore.textContent = "1." + initals + " - " + score;
    highScoreContainer.appendChild(leaderboardScore);



    var leaderboard = document.createElement("div");
    leaderboard.className = "leaderboard";
    highScoreContainer.appendChild(leaderboard);

    var goBack = document.createElement("button");
    goBack.className = "go-back-btn";
    goBack.textContent = "Go Back";
    goBack.addEventListener("click", event => {
        totalScore = 0;
        end = false;
        sec = 75;
        highScoreContainer.remove();
        start();
    })
    leaderboard.appendChild(goBack);

    var clearHighScore = document.createElement("button");
    clearHighScore.className = "clear-highScore";
    clearHighScore.textContent = "Clear High Scores";
    clearHighScore.addEventListener("click", event => {

        localStorage.removeItem("initals")

        localStorage.removeItem("score")

        leaderboardScore.remove();
    })
    leaderboard.appendChild(clearHighScore);
}

//when game is done, enter intitials for high score save
var enterScore = function () {

    var doneContainer = document.createElement("div");
    doneContainer.className = "done-container";
    mainEl.appendChild(doneContainer);

    var done = document.createElement("h1");
    done.textContent = "All Done!";
    done.className = "done-title";
    doneContainer.appendChild(done);

    var score = document.createElement("h4");
    score.textContent = "Your final score is " + totalScore + ".";
    score.className = "score";
    doneContainer.appendChild(score);


    var inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    doneContainer.appendChild(inputContainer);


    var label = document.createElement("label");
    label.textContent = "Enter Initials:";
    label.className = "label";
    label.setAttribute("for", "input");
    inputContainer.appendChild(label);

    var initalInput = document.createElement("Input");
    initalInput.className = "score-input";
    initalInput.setAttribute("id", "input")
    initalInput.setAttribute("name", "input");
    initalInput.setAttribute("type", "text");
    inputContainer.appendChild(initalInput);

    var submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "submit-btn";
    submit.addEventListener("click", event => {

        var initals = document.getElementById("input").value;

        localStorage.setItem("initals", initals);

        localStorage.setItem("score", totalScore);

        doneContainer.remove();

        highScores();
    })
    inputContainer.appendChild(submit);
}

//question 5 with answers
var questionFive = function () {

    var removeWrong = function () {
        ;
        questionContainer.remove();
        enterScore();
        alert("Wrong!");
        end = true;
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. JavaScript";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. Terminal/Bash";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. For Loops";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
    })

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. Console.log";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        points();
        questionContainer.remove();
        enterScore();
        alert("Correct!");
        end = true;

    })
}

//question 4 with answers
var questionFour = function () {

    var removeWrong = function () {
        sec = sec - 10;
        questionContainer.remove();
        questionFive();
        alert("Wrong!");
        return sec;
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "String values must be enclosed within ___ when being assigned to variables.";
    questionContainer.appendChild(question);

    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. commas";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. curly brackets";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. quotes";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionFive();
        alert("Correct!");
        points();
    })

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. parenthesis";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
}

//question 3 with answers
var questionThree = function () {

    var removeWrong = function () {
        sec = sec - 10;
        questionContainer.remove();
        questionFour();
        alert("Wrong!");
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Arrays in JavaScript can be used to store __________.";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. numbers & strings";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. other arrays";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. booleans";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
    })

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. all of the above";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        questionContainer.remove();
        questionFour();
        alert("Correct!");
        points();
    })
}

//question 2 with answers
var questionTwo = function () {

    var removeWrong = function () {
        questionThree();
        questionContainer.remove();
        sec = sec - 10;
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "The condition in an if / else statement is enclosed with ________.";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. quotes";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    });

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. curly brackets";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    });

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. parenthesis";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionThree();
        alert("Correct!");
        points();
    });

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. square brackets";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    });
}

//question 1 with answers
var questionOne = function () {

    var removeWrong = function () {
        sec = sec - 10;
        questionContainer.remove();
        questionTwo();
        alert("Wrong!");
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);


    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Commonly Used data types DO Not Include:";
    questionContainer.appendChild(question);


    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. strings";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. booleans";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. alerts";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionTwo();
        alert("Correct!");;
        points();
    })

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. numbers";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
    console.log("Question One");
}

//start game 
var start = function () {

    var container = document.createElement("div");
    container.className = "home-container"
    mainEl.appendChild(container);


    var homeHeader = document.createElement("h1");
    homeHeader.className = "home-title";
    homeHeader.textContent = "Coding Quiz Challenge";
    container.appendChild(homeHeader);


    var homeParagraph = document.createElement("p");
    homeParagraph.className = "home-text-p";
    homeParagraph.textContent = "Try to answer the following code-related" +
        " questions within the time limit. Keep in mind that incorrect answer will" +
        " penalize your score/time by ten seconds!"
    container.appendChild(homeParagraph);


    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "home-btn";
    startQuizBtn.textContent = "Start Quiz";
    container.appendChild(startQuizBtn);

    startQuizBtn.addEventListener("click", event => {
        timer();
        startQuizBtn.remove();
        homeHeader.remove();
        homeParagraph.remove();
        questionOne();
    });
}
start();