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
// index for questions
var questionIndex = 0;
// an array to store high scores
var newScore;

//  variables for timer
//start time
var timeLeft = 60;
//time deducted for wrong answer
var timeDeducted = 10;
// time when quiz is done 
var timePaused;

// gets id type from button and adds the timer and questions when clicked
var startQuizButton = document.getElementById("startQuiz");

// displays the current time remaining in TIMER
var timeRemaining = document.getElementById("timeRemaining");

// where questions will be shown
var questionsAsked = document.getElementById("questionsAsked");

/// button is waiting to be clicked to run the startQuiz function
startQuizButton.addEventListener("click", startQuiz);

// created variable where elements created under ul will be stored and shown
seperateQuestions = document.createElement("ul");


// this function starts the timer and renders questions and choices to the screen
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
      }
    }, 1000); 
    //after displaying timer call on the render function to display questions 
    render(questionIndex);
}; 

// render is a funtion that let’s you pass in a template and the element to render it into
function render(questionIndex) {
  //we'll use innerHTML, a property that lets you set the inner html of an element
  


// // when question is answered then another question is asked
// use for loop
// for(var i = 0; i<quizQuestions.choices.length; i++) {
//   var choisesElement
// }
}



// if user picks wrong answer then 10 seconds is deducted from the timer


//else if answer is correct than add 10 points


// game ends when all questions are answered or when timer reaches 0


// when game ends then user can save their initials and score
