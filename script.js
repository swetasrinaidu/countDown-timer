const main = document.getElementById("main");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const targetDay = "1 Jan 2023";

setInterval(startTimer,1000);
startTimer();
function startTimer(){
    const date = new Date(targetDay);
    const currentDate = new Date();
    const totSeconds = (date-currentDate)/1000;
    const totalDays = Math.floor(totSeconds/86400);
    const totalHours = Math.floor((totSeconds/3600)%24);
    const totalMinutes = Math.floor((totSeconds/60)%60);
    const totalSeconds = Math.floor((totSeconds%60))
    days.innerText = formatTime(totalDays)+" "+"days"+ " "+":";
    hours.innerText = formatTime(totalHours)+" "+"hrs"+" "+ ":";
    minutes.innerText = formatTime(totalMinutes)+" "+"min"+" "+":";
    seconds.innerText = formatTime(totalSeconds) + " "+ "sec";

}

function formatTime(time){
    return (time<10 ? "0"+time : time);
}

