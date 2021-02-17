// set variables for content
//  variable for button click 







var score = 0;
var timeLeft = 60;
var timeInterval;
// gets timer element and replaces it with timer function
var startQuizButton = document.getElementById("startQuiz");
/// when user starts quiz by clicking start button
startQuizButton.addEventListener("click", startQuiz);
console.log(startQuiz);


//thats when timer starts and is shown on screen 
// function startQuiz ();



// when question is answered then another question is asked


// if user picks wrong answer then 10 seconds is deducted from the timer


//else if answer is correct than add 10 points


// game ends when all questions are answered or when timer reaches 0


// when game ends then user can save their initials and score

