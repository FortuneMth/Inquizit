// Array of 15 soccer questions with options and the correct answer
const questions = [
    {
        question: "Who won the 2018 FIFA World Cup?",
        options: ["Germany", "Brazil", "France", "Argentina"],
        answer: "France"
    },
    {
        question: "Which country is known as the birthplace of football?",
        options: ["Brazil", "England", "Spain", "Italy"],
        answer: "England"
    },
    {
        question: "Who is known as the 'King of Football'?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Pelé", "Diego Maradona"],
        answer: "Pelé"
    },
    {
        question: "Which team has won the most UEFA Champions League titles?",
        options: ["Real Madrid", "Barcelona", "AC Milan", "Liverpool"],
        answer: "Real Madrid"
    },
    {
        question: "Which player has scored the most goals in a World Cup?",
        options: ["Marta", "Cristiano Ronaldo", "Miroslav Klose", "Pelé"],
        answer: "Miroslav Klose"
    },
    {
        question: "Which country hosted the 2010 FIFA World Cup?",
        options: ["Germany", "South Africa", "Brazil", "Russia"],
        answer: "South Africa"
    },
    {
        question: "Which team won the Premier League in the 2019/2020 season?",
        options: ["Manchester City", "Liverpool", "Manchester United", "Chelsea"],
        answer: "Liverpool"
    },
    {
        question: "Who is the all-time top scorer in the Champions League?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Raúl", "Zinedine Zidane"],
        answer: "Cristiano Ronaldo"
    },
    {
        question: "Which country has won the most Copa América titles?",
        options: ["Argentina", "Brazil", "Uruguay", "Chile"],
        answer: "Uruguay"
    },
    {
        question: "Who is the most expensive soccer player ever?",
        options: ["Cristiano Ronaldo", "Neymar", "Lionel Messi", "Kylian Mbappé"],
        answer: "Neymar"
    },
    {
        question: "Which club is known as the 'Red Devils'?",
        options: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"],
        answer: "Manchester United"
    },
    {
        question: "What is the maximum number of players a team can have on the field in a soccer match?",
        options: ["10", "12", "11", "9"],
        answer: "11"
    },
    {
        question: "Which country won the 2022 FIFA World Cup?",
        options: ["Argentina", "France", "Brazil", "Germany"],
        answer: "Argentina"
    },
    {
        question: "Which player has won the most Ballon d'Or titles?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"],
        answer: "Lionel Messi"
    },
    {
        question: "Which stadium is known as the 'Theatre of Dreams'?",
        options: ["Camp Nou", "Wembley", "Old Trafford", "Santiago Bernabéu"],
        answer: "Old Trafford"
    }
];


// Quiz variables
let currentQuestionIndex = 0;
let score = 0;
let timerValue = 300; // 5 minutes in seconds
let timerInterval;

// Function to start the quiz timer
function startTimer() {
    timerInterval = setInterval(() => {
        if (timerValue > 0) {
            timerValue--;
            const minutes = Math.floor(timerValue / 60);
            const seconds = timerValue % 60;
            document.getElementById("timer").textContent = `Time: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        } else {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

// Function to display a random question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("quiz-question").textContent = question.question;

    const optionsDiv = document.getElementById("quiz-options");
    optionsDiv.innerHTML = ''; // Clear previous options
    question.options.forEach(option => {
        const optionCard = document.createElement("div");
        optionCard.className = "option-card";
        optionCard.textContent = option;
        optionCard.onclick = () => selectOption(option);
        optionsDiv.appendChild(optionCard);
    });
}

// Function to handle option selection
function selectOption(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    // Disable options and show the 'Next' button
    const options = document.querySelectorAll(".option-card");
    options.forEach(option => option.style.pointerEvents = 'none');
    document.getElementById("next-btn").disabled = false;
}

// Function to move to the next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        document.getElementById("next-btn").disabled = true;
    } else {
        clearInterval(timerInterval);
        showResults();
    }
}

// Function to show the result
function showResults() {
    document.body.innerHTML = `<div class="results-container">
        <h1>Quiz Finished!</h1>
        <p>Your Score: ${score} out of 15</p>
        <button onclick="location.reload()">Try Again</button>
    </div>`;
}

// Initialize quiz
startTimer();
displayQuestion();


