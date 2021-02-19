// variable for object containing quiz questions, choices and answer
var Questions = [ 
  { title: "What percentage of scientific researchers worldwide are female?",
    choices: ["15%", "30%", "75%"],
    answer: "30%" },

  { title: "WHich one of these women in STEM helped develop one of the first high level programming language, COBOL?",
    choices: ["Grace Hopper", "Ada Lovelace", "Frances Spence"],
    answer: "Grace Hopper" },

  { title: "Who was the first American woman to fly in space?",
    choices: ["Jane Goodall", "Sally Ride", "Mae C Jemison"],
    answer: "Sally Ride"  },

  { title: "Jane Goodall, a British scientist, is considered the world's expert on:",
    choices: ["Cells", "Chimpanzees", "Mathematics"],
    answer: "Chimpanzees" },
    
  { title: "In 1946 six brilliant young women programmed the first all-electronic, programmable computer. What was it called?",
    choices: ["COBOL","ENIAC", "LISP"],
    answer: "ENIAC" },
];

// set variables for content
// global variables
var score = 0;
var questionIndex = 0;
// an array to store high scores
var newScore

//  variables for timer
//start time
var timeLeft = 60;
//time deducted for wrong answer
var timeDeducted = 10;

var timePaused;

// gets id type from button and adds the timer and questions when clicked
var startQuizButton = document.getElementById("startQuiz");

// displays the current time remaining in TIMER
var timeRemaining = document.getElementById("timeRemaining");

// where questions will be shown
var questionsAsked = document.getElementById("questionsAsked");

// created variable where elements created under ul will be stored and shown
seperateQuestions = document.createElement("ul");

/// button is waiting to be clicked to run the startQuiz function
startQuizButton.addEventListener("click", startQuiz);

// this function starts the timer and displays questions on screen
function startQuiz () {
  //the setInterval() method will continue calling the function until clearInterval() is called
    var timerInterval = setInterval(function() {
      // takes seconds away from var timeLeft = 60;
      timeLeft--;
      // then display the timeRemaining in the timeLeft variable
      timeRemaining.textContent = "Time:" + timeLeft;
      //if the timeLeft is equal to 0 or there are 0 questions left 
      if (timeLeft === 0 || questionIndex === questionsAsked.length){
        // then clear the interval and display times over
        clearInterval(timerInterval);
        timeRemaining.textContent = "Time is up!";
        // render displayQuestions
        
      }
    }, 1000); 
}; 
  //   if (timePaused === 0) {
  //     timePaused = setInterval(function() {
  //       timeLeft--; 
  //       timeRemaining.textContent = timeLeft; 

  //       if (timeLeft  <= 0) {
  //         clearInterval(timePaused);
  //         timeRemaining.textContent = "You're out of time!";

  //       }
        
  //     }, 1000 );
  //   }
  // }

// thats when timer starts and is shown on screen 
// function displayQuestions () {
//   }
//   //clears interval
//   clearInterval( );
//   render (questions)
// };

// use for loop
// for(var i = 0; i<quizQuestions.choices.length; i++) {
//   var choisesElement
// }
// // when question is answered then another question is asked



// if user picks wrong answer then 10 seconds is deducted from the timer


//else if answer is correct than add 10 points


// game ends when all questions are answered or when timer reaches 0


// when game ends then user can save their initials and score
