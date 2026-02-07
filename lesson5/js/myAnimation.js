
const display = document.getElementById("displayT");
const real = document.getElementById("realTime");
const dawn = document.getElementById("dawn");
const dusk = document.getElementById("dusk");
const spec = document.getElementById("special");
const bg = document.getElementById("bg");
let running;
let TOD = 0;
let clock;
let stat;
let i = -1;


//defaults

window.addEventListener("load", realTime);
real.addEventListener("click", realTime);
dawn.addEventListener("click", Dawn);
dusk.addEventListener("click", Dusk);
spec.addEventListener("click", Spec);
//methods
function traffic(a) {
    if (a === "real" && running != "RealId") {
        if (running != null) {
            clearInterval(running);
        }
        console.log("Clock started");
        realTime();
        const RealId = setInterval(realTime, 25000);
        running = RealId;
    }
    else if (a === "dawn") {
        
        clearInterval(running);
        console.log(`stopped ${running}`);
        TOD = -300;
        display.innerHTML = "Dawn/Noon";
        const DawnId = setInterval(Dawn, 100);
        running = DawnId;
    }
    else if (a === "dusk") {
        clearInterval(running);
        console.log(`stopped ${running}`);
        TOD = -1200;
        display.innerHTML = "Noon/Dusk";
        const DuskId = setInterval(Dusk, 100);
        running = DuskId;
    }

    else if (a === "spec") {
        clearInterval(running);
        display.innerHTML = "Special Event";
        i++;
        
        Spec();
        
    }
}
function Spec() {
    real.removeEventListener("click", realTime);
    dawn.removeEventListener("click", Dawn);
    dusk.removeEventListener("click", Dusk);
    spec.removeEventListener("click", Spec);
    let o = 1;
    let int;
    const getSpec = document.getElementById("specialBG");
    const list = '../lesson5/media/arouraNight.mp4';
    
    const night = setInterval(function () {
        if (TOD > 1200) {
            int = (TOD - 1200) - 1159;
        }
        else { int = -TOD };
            if (int > -5) {
                clearInterval(night);
            }
        
        else {
            
            int += 5;
            bg.style.bottom = `${int}%`;
            stat = "Running Aroura Environment<br>style.bottom: " + int;
            giveData();
        }
    }, 100);
    
    bg.style.opacity = "1";
    const opac = setInterval(function () {
        if (o <= 0.05) {
            bg.style.opacity = 0;
            clearInterval(opac);
        }
        else if (o > 0.95) {
            getSpec.src = list;
            getSpec.load();
            getSpec.play();
            o -= 0.05;
        }
        else {
            o -= 0.05;
            bg.style.opacity = `${o}`;
        }
    }, 500);
    setTimeout(function () {
        bg.style.opacity = 0;
        let o = 0;
        const opac = setInterval(function () {
            if (o >= 0.95) {
                bg.style.opacity = 1;
                clearInterval(opac);
            }
            else {
                o += 0.05;
                bg.style.opacity = `${o}`;
            }
        }, 500);
        
}, 15000);
    
    traffic("real");
}


function Dusk() {
    clearInterval(running);
    console.log(`stopped ${running}`);
    TOD = -1200;
    display.innerHTML = "Noon/Dusk";
    const DuskId = setInterval(Dusk, 100);
    running = DuskId;
    TOD += 5;
    bg.style.bottom = `${TOD}dvh`;
    stat = "Running Dusk Environment<br>style.bottom: " + TOD;
    giveData();
    if (TOD === -300) {
        clearInterval(running);
        stat = "Noon/Dusk Environment Complete";
        giveData();
        

    }
}

function Dawn() {
    clearInterval(running);
    console.log(`stopped ${running}`);
    TOD = -300;
    display.innerHTML = "Dawn/Noon";
    const DawnId = setInterval(Dawn, 100);
    running = DawnId;
    TOD -= 2;
    bg.style.bottom = `${TOD}dvh`;
    stat = "Running Dawn Environment<br>style.bottom: " +TOD;
    giveData();
    if (TOD == -1200) {
        clearInterval(running);
        stat = "Dawn/Noon Environment Complete";
        giveData();
         
            
    }

}

    

function realTime() {
    const RealId = setInterval(realTime, 25000);
    running = RealId;
    console.log("checking...");
    const d = new Date();
    let hour = d.getHours();
    let rawMinute = d.getMinutes();
    let minute = (rawMinute < 10 ? '0' : '') + rawMinute;
    clock = hour + ":" + minute;
    TOD = hour + minute;
    console.log(TOD);
    if (TOD > 1200) {
        let inv = (TOD - 1200)-1159;
        console.log(inv);
        bg.style.bottom = `${inv}dvh`;
        stat = "Real Time Sync<br>style.bottom: " + inv;
    }
    else {
        bg.style.bottom = -TOD;
        stat = "Real Time Sync<br>style.bottom: " + -TOD;
    }
    
    display.innerHTML = clock;
    
    giveData();

}

function giveData() {
    const p = "<p>";
    const pp = "</p>";
    const city = document.getElementById("cityscape");
    const data = document.getElementById("data");
    data.innerHTML = p+stat+pp;
    
}