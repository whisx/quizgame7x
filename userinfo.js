let username = sessionStorage.getItem("name");
let userpoint =sessionStorage.getItem("points");
let usertime = sessionStorage.getItem("time");

document.querySelector(".name").innerHTML=username;
document.querySelector(".points").innerHTML=userpoint;
document.querySelector(".time").innerHTML=usertime;