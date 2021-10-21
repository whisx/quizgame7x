window.onload = function() {
    show(question_count);
}

function submitform(e)
{
    e.preventDefault();
    let name=document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name",name);
    location.href="quiz.html";
}

let questions = [
    {
    id:1,
    question:"What is the full form of RAM ?",
    answer:"Random Access Memory",
    option: [
        "Random Access Memory",
        "Randomly Access Memory",
        "Run Accept Memory",
        "None of these"
    ]
    },
    {
        id:2,
        question:"What is the full form of CPU ?",
        answer:"Central Processing Unit",
        option: [
            "Central Processing Unit",
            "Control Processing Unit",
            "Central Process Unit",
            "Control Processed unit"
        ]
    },
    {
        id:3,
        question:"",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ]
    },
    {
        id:4,
        question:"",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ]
    },
    {
        id:5,
        question:"",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Optiion 4"
        ]
    }
];
                     
let question_count=0;
let point=0;

function next()
{

    let user_answer=document.querySelector("li.option.active").innerHTML;

    if(user_answer == questions[question_count].answer)
    {
        point += 10;
        sessionStorage.setItem("points",point);
    }

    if(question_count == questions.length - 1)
    {
        sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
       clearInterval(mytime);
        location.href="end.html";
        return;
    }

    question_count++;
    show(question_count);
}

function show(count)
{
    let question=document.getElementById("questions");
    question.innerHTML=`
    <h2> Q${question_count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${questions[count].option[0]}</li>
    <li class="option">${questions[count].option[1]}</li>
    <li class="option">${questions[count].option[2]}</li>
    <li class="option">${questions[count].option[3]}</li>
    </ul>
    `;
    toggleactive();
}

function toggleactive()
{
    let option=document.querySelectorAll("li.option");

    for(let i=0;i<option.length;i++)
    {
        option[i].onclick=function() {
            for(let j=0;j<option.length;j++)
            {

                if(option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function opennav() {
    document.getElementById("sidenav").style.width="200px";
}
function closenav() {
    document.getElementById("sidenav").style.width="0";
}