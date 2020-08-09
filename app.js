window.onload = function () {
    show(0);
}


//===== QUESTIONS ======//

var questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Randomely Access Memory",
            "Random Access Memory",
            "Read Accept Memory",
            "None Of These"
        ]
    },
    {
        id: 2,
        question: "What does Au stand for in the periodic table ?",
        answer: "Gold",
        options: [
            "Potassium",
            "Carbon",
            "Gold",
            "None Of These"
        ]
    },
    {
        id: 3,
        question: "Who is the CEO of Twitter ?",
        answer: "Jack Dorsey",
        options: [
            "Jack Dorsey",
            "Steve Jobs",
            "Mark Zuckerberg",
            "None Of These"
        ]
    },
    {
        id: 4,
        question: "Who invented first Computer ?",
        answer: "Charles Babbage",
        options: [
            "Bill Gates",
            "Jack Dorsey",
            "Charles Babbage",
            "None Of These"
        ]
    },
    {
        id: 5,
        question: "Who is the CEO of Microsoft ?",
        answer: "Satya Narayana Nadella",
        options: [
            "Bill Gates",
            "Satya Narayana Nadella",
            "Mark Zuckerberg",
            "None Of These"
        ]
    }
];

var question_count = 0;
var quiz_number = 0;

function next() {

    var user_answer = document.querySelector("li.option.active").innerHTML;

    if (user_answer == questions[question_count].answer) {
        quiz_number = quiz_number + 10;
        sessionStorage.setItem("Score", quiz_number);
    }


    if (question_count == questions.length - 1) {
        location.href = "last.html"
        return;
    }


    question_count++;
    show(question_count);
}

function show(count) {
    var question = document.getElementById("question");

    question.innerHTML = `<h2>Q${question_count + 1}.${questions[count].question}</h2> 
    
    <ul class="option-group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul>`;

    option_Active();
}

function option_Active() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}