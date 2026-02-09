
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
listening();
function listening() {
    window.addEventListener("load", realTime);
    real.addEventListener("click", realTime);
    dawn.addEventListener("click", Dawn);
    dusk.addEventListener("click", Dusk);
    spec.addEventListener("click", Spec);
}
//methods

function Spec() {
    const btn = document.getElementById("buttons");
    btn.style.visibility = 'hidden';
    display.style.visibility = 'hidden';
    real.removeEventListener("click", realTime);
    dawn.removeEventListener("click", Dawn);
    dusk.removeEventListener("click", Dusk);
    spec.removeEventListener("click", Spec);
    let o = 1;
    let int;
    const getSpec = document.getElementById("specialBG");
    const list = '../lesson5/media/arouraNight.mp4';
    clearInterval(running);
    //fade opacity to translucent bg
    bg.style.opacity = "1";
    let opac = setInterval(function () {
        if (o <= 0.05) {
            o = 0;
            bg.style.opacity = `${o}`;
            getSpec.play();
            clearInterval(opac);
        }
        else if (o > 0.95) {
            getSpec.src = list;
            getSpec.load();
            
            o -= 0.05;
        }
        else {
            o -= 0.02;
            bg.style.opacity = `${o}`;
            
        }
        stat = `Running Aroura Environment<br>style.opacity: ${o}` + "<br>Options hidden until complete";
        giveData();
    }, 100);
    //bring back bg opacity
    setTimeout(function () {
        bg.style.opacity = 0;
        let o = 0;
        running = setInterval(function () {
            if (o >= 0.95) {
                bg.style.opacity = 1;
                clearInterval(running);
                realTime();
            }
            else {
                o += 0.02;
                bg.style.opacity = `${o}`;
            }
            stat = `Returning to Real Time<br>style.opacity: ${o}`;
            giveData();
        }, 100);
        btn.style.visibility = 'visible';
        display.style.visibility = 'visible';
        listening();
}, 20000);
}


function Dusk() {
    clearInterval(running);
    real.removeEventListener("click", realTime);
    dawn.removeEventListener("click", Dawn);
    dusk.removeEventListener("click", Dusk);
    spec.removeEventListener("click", Spec);
    console.log(`stopped previous...disable listeners`);
    TOD = -1200;
    display.innerHTML = "Noon/Dusk";
    running = setInterval(function () {
        TOD += 5;
        bg.style.bottom = `${TOD}dvh`;
        stat = "Running Dusk Environment<br>style.bottom: " + TOD + "<br>Options disabled until complete";
        giveData();
        if (TOD === -300) {
            clearInterval(running);
            stat = "Noon/Dusk Environment Complete";
            giveData();
            listening();
        }
}, 100);
    
}

function Dawn() {
    clearInterval(running);
    real.removeEventListener("click", realTime);
    dawn.removeEventListener("click", Dawn);
    dusk.removeEventListener("click", Dusk);
    spec.removeEventListener("click", Spec);
        console.log(`stopped previous...running Dawn`);
    TOD = -300;
    display.innerHTML = "Dawn/Noon";
    running = setInterval(function () {
        TOD -= 2;
        bg.style.bottom = `${TOD}dvh`;
        stat = "Running Dawn Environment<br>style.bottom: " + TOD + "<br>Options disabled until complete";
        giveData();
        if (TOD == -1200) {
            clearInterval(running);
            stat = "Dawn/Noon Environment Complete";
            giveData();
            listening();
        }
}, 100);
    
}

    

function realTime() {
        clearInterval(running);
    running = setInterval(function () {
        console.log("checking...realTime is running");
        const d = new Date();
        let hour = d.getHours();
        let rawMinute = d.getMinutes();
        let minute = (rawMinute < 10 ? '0' : '') + rawMinute;
        clock = hour + ":" + minute;
        TOD = hour + minute;
        console.log(TOD);
        if (TOD > 1200) {
            let inv = (TOD - 1200) - 1159;
            console.log(inv);
            bg.style.bottom = `${inv}%`;
            stat = "Real Time Sync<br>style.bottom: " + inv;
        }
        else {
            bg.style.bottom = `${-1*TOD}%`;
            stat = "Real Time Sync<br>style.bottom: " + -TOD;
        }

        display.innerHTML = clock;

        giveData();
    }, 1000);
    

}

function giveData() {
    const p = "<p>";
    const pp = "</p>";
    const city = document.getElementById("cityscape");
    const data = document.getElementById("data");
    data.innerHTML = p+stat+pp;
    
}