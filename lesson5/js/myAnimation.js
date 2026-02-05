const d = new Date();
let hour = d.getHours();
let rawMinute = d.getMinutes();
let minute = (rawMinute < 10 ? '0' : '') + rawMinute;
let clock = hour + ":" + minute;
const display = document.getElementById("displayT");

function realTime() {
    display.innerHTML = clock;   
    
}