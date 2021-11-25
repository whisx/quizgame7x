let dt = new Date(new Date(0).setTime(0));
let time = dt.getTime();
let seconds = Math.floor((time%(100*60))/1000);
let minutes = Math.floor((time%(1000*60*60))/1000*60);

let timex = 0;

let mytime = setInterval(function() {
    if(seconds<59) {
        seconds++;
    } else {
        minutes++;
        seconds = 0;
    }
    let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`;
    document.querySelector(".time").innerHTML=`${formatted_min} : ${formatted_sec}`;
    if(timer_quiz=="1" && formatted_min=="01" && formatted_sec=="40")
    {
        if(nextbtn_count==0)
        {
            let point=0;
            sessionStorage.setItem("points",point);
        }
        sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
       clearInterval(mytime);
        location.href="end.html";
        return;
    }
}, 1000)
let timer_quiz = sessionStorage.getItem("timedquiz");