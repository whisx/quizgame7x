window.onload = function() {
    show(question_count);
}

function submitform(e)
{
    e.preventDefault();
    let name=document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name",name);
    let category=document.forms["welcome_form"]["category"].value;
    if(category=="general")
    {
        sessionStorage.setItem("category",0);
    }
    else 
    {
        sessionStorage.setItem("category",10);
    }
    let previousscore = sessionStorage.getItem("points");
    if(previousscore==null)
    {
    sessionStorage.setItem("highscore",0);
    }
    else
    {
        let highscore = sessionStorage.getItem("highscore");
        if(previousscore>=highscore)
        {
        sessionStorage.setItem("highscore",previousscore);
        }
    }
    location.href="quiz.html";
}

let questions = [
    {
    id:1,
    question:"Q1. What is the full form of RAM ?",
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
        question:"Q2. What is the full form of CPU ?",
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
        question:"Q3. Question 3",
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
        question:"Q4. Question 4",
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
        question:"Q5. Question 5",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Optiion 4"
        ]
    },
    {
        id:6,
        question:"Q6. Question 6",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:7,
        question:"Q7. Question 7",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:8,
        question:"Q8. Question 8",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:9,
        question:"Q9. Question 9",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:10,
        question:"Q10. Question 10",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:11,
        question:"Q1. Question 11",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:12,
        question:"Q2. Question 12",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:13,
        question:"Q3. Question 13",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:14,
        question:"Q4. Question 14",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:15,
        question:"Q5. Question 15",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:16,
        question:"Q6. Question 16",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:17,
        question:"Q7. Question 17",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:18,
        question:"Q8. Question 18",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:19,
        question:"Q9. Question 19",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    },
    {
        id:20,
        question:"Q10. Question 20",
        answer:"Option 1",
        option: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ]
    }
];
  
let category_count=sessionStorage.getItem("category");
let question_count=category_count;
let point=0;

function next()
{

    let user_answer=document.querySelector("li.option.active").innerHTML;

    if(user_answer == questions[question_count].answer)
    {
        point += 10;
        sessionStorage.setItem("points",point);
    }
    else
    {
        sessionStorage.setItem("points",point);
    }

    if(question_count == questions.length - 1 || question_count == 9)
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
    <h2>${questions[count].question}</h2>
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