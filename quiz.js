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
        if((previousscore>=highscore || previousscore==100) && highscore!=100)
        {
        sessionStorage.setItem("highscore",previousscore);
        }
    }
    let timed_quiz = document.forms["welcome_form"]["timedquiz"].value;
    sessionStorage.setItem("timedquiz",timed_quiz);
    location.href="quiz.html";
}

let questions = [
    {
    id:1,
    question:"Q1. Which crop is sown on the largest area in India?",
    answer:"Rice",
    option: [
        "Rice",
        "Wheat",
        "Sugarcane",
        "Maize"
    ]
    },
    {
        id:2,
        question:"Q2. Entomology is the science that studies",
        answer:"Insects",
        option: [
            "Behaviour of human beings",
            "Insects",
            "The origin and history of technical and scientific terms",
            "The formation of rocks"
        ]
    },
    {
        id:3,
        question:"Q3. Grand Central Terminal, Park Avenue, New York is the world's",
        answer:"largest railway station",
        option: [
            "highest railway station",
            "longest railway station",
            "largest railway station",
            "None of the above"
        ]
    },
    {
        id:4,
        question:"Q4. Galileo was an astronomer who",
        answer:"discovered four satellites of Jupiter",
        option: [
            "developed the telescope",
            "discovered four satellites of Jupiter",
            "discovered that the movement of pendulum produces a regular time measurement",
            "All the above"
        ]
    },
    {
        id:5,
        question:"Q5. Corey Anderson who has hit the fastest ODI century in 36 balls is from",
        answer:"New Zealand",
        option: [
            "England",
            "Australia",
            "West Indies",
            "New Zealand"
        ]
    },
    {
        id:6,
        question:"Q6. The world smallest country is",
        answer:"Vatican City",
        option: [
            "Canada",
            "Russia",
            "Maldives",
            "Vatican City"
        ]
    },
    {
        id:7,
        question:"Q7. In which year of First World War Germany declared war on Russia and France?",
        answer:"1914",
        option: [
            "1914",
            "1915",
            "1916",
            "1917"
        ]
    },
    {
        id:8,
        question:"Q8. Which one of the following was the first fort constructed by the British in India?",
        answer:"Fort St. George",
        option: [
            "Fort William",
            "Fort St. George",
            "Fort St. David",
            "Fort St. Angelo"
        ]
    },
    {
        id:9,
        question:"Q9. Novak Djokovic is a famous player associated with the game of",
        answer:"Lawn Tennis",
        option: [
            "Hockey",
            "Football",
            "Chess",
            "Lawn Tennis"
        ]
    },
    {
        id:10,
        question:"Q10. What is the second largest country(in size) in the world?",
        answer:"Canada",
        option: [
            "Canada",
            "USA",
            "China",
            "Russia"
        ]
    },
    {
        id:11,
        question:"Q1. India's first satellite Aryabhata was launched from",
        answer:"Soviet Union",
        option: [
            "Soviet Union",
            "America",
            "India",
            "Israel"
        ]
    },
    {
        id:12,
        question:"Q2. Google and NASA have joined hands to identify which two new planets around distant stars?",
        answer:"Kepler 80g, Kepler 90i",
        option: [
            "Kepler 80g, Kepler 90i",
            "Kepler 90g, Kepler 80i",
            "Kepler 81g, Kepler 90i",
            "Kepler 90i, Kepler 82g"
        ]
    },
    {
        id:13,
        question:"Q3. Ampere is a unit of measure?",
        answer:"Current",
        option: [
            "Current",
            "Resistance",
            "Power",
            "Voltage"
        ]
    },
    {
        id:14,
        question:"Q4. Which country developed Julang-2 ballistic missile?",
        answer:"China",
        option: [
            "UK",
            "Nepal",
            "China",
            "Malaysia"
        ]
    },
    {
        id:15,
        question:"Q5. Which country successfully launched a Long March 3B rocket, carrying two Beidou-3MEO satellites: Beidou-30 and Beidou-31?",
        answer:"China",
        option: [
            "Japan",
            "Canada",
            "Sweden",
            "China"
        ]
    },
    {
        id:16,
        question:"Q6. Pedology is the science related to the study of",
        answer:"Soil",
        option: [
            "Atmosphere",
            "Soil",
            "Pollutants",
            "Seeds"
        ]
    },
    {
        id:17,
        question:"Q7. Rate of change of distance is called as",
        answer:"Speed",
        option: [
            "Speed",
            "Velocity",
            "Volume",
            "Density"
        ]
    },
    {
        id:18,
        question:"Q8. The first Indian Satellite Aryabhatta was launched in",
        answer:"1975",
        option: [
            "1974",
            "1975",
            "1976",
            "1977"
        ]
    },
    {
        id:19,
        question:"Q9. The first high-level programming was",
        answer:"FORTRAN",
        option: [
            "COBOL",
            "FORTRAN",
            "LISP",
            "Pascal"
        ]
    },
    {
        id:20,
        question:"Q10. ISRO was formed in",
        answer:"1963",
        option: [
            "1963",
            "1969",
            "1972",
            "1985"
        ]
    }
];
  
let category_count=sessionStorage.getItem("category");
let question_count=category_count;
let point=0;
let nextbtn_count=0;

function next()
{
    nextbtn_count=1;

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