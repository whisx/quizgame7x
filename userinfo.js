let username = sessionStorage.getItem("name");
let userpoint =sessionStorage.getItem("points");
let usertime = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML=username;
document.querySelector(".points").innerHTML=userpoint;
document.querySelector(".time").innerHTML=usertime;

let highscore=sessionStorage.getItem("highscore");

if((userpoint>=highscore || userpoint==100) && highscore!=100)
{
    highscore=userpoint;
}

function viewhighscore() {
    document.getElementById("view_highscore").innerHTML=highscore;
    document.getElementById("view_highscore").style.width="150px";
}

function startagain() {
    location.href="start.html";
}