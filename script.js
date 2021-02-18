// set variables for content
// global variables
var score = 0;

//  variable for timer
var timeLeft = 60;
var timeDeducted = 10;
var timePaused;

// variable for object containing quiz questions, choices and answer
var quizQuestions = [ 
  { question: "What percentage of scientific researchers worldwide are female?",
    choices: ["15%", "30%", "75%"],
    answer: "30%" },

  { question: "WHich one of these women in STEM helped develop one of the first high level programming language, COBOL?",
    choices: ["Grace Hopper", "Ada Lovelace", "Frances Spence"],
    answer: "Grace Hopper" },

  { question: "Who was the first American woman to fly in space?",
    choices: ["Jane Goodall", "Sally Ride", "Mae C Jemison"],
    answer: "Sally Ride"  },

  { question: "Jane Goodall, a British scientist, is considered the world's expert on:",
    choices: ["Cells", "Chimpanzees", "Mathematics"],
    answer: "Chimpanzees" },
    
  { question: "In 1946 six brilliant young women programmed the first all-electronic, programmable computer. What was it called?",
    choices: ["COBOL","ENIAC", "LISP"],
    answer: "ENIAC" },
];


// gets id type from button and adds the timer and questions when clicked
var startQuizButton = document.getElementById("startQuiz");

// displays the current time remaining in timer
var timeRemaining = document.getElementById("timeRemaining");

// where questions will be shown
var questionsAsked = document.getElementById("questionsAsked");

// created variable where elements created under ul will be stored and shown
seperateQuestions = document.createElement("ul");

/// button is waiting to be clicked to run the startQuiz function
startQuizButton.addEventListener("click", startTimer);

//this function start the quiz and question is asked
//display questions by rendering questions from index
// function startTimer () {
//     if (timePaused === 0) {
//       timePaused = setInterval(function() {
//         timeLeft--; 
//         timeRemaining.textContent = timeLeft; 

//         if (timeLeft  <= 0) {
//           clearInterval(timePaused);
//           timeRemaining.textContent = "You're out of time!";

//         }
        
//       }, 1000 );
//     }
//   }

//thats when timer starts and is shown on screen 
// function startTimer () {
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

