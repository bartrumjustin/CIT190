const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const format = `${month+1}-${day}-${year} @ ${hour}:${minute}`;
const log = [];
const pos = document.getElementById("positive");
const neu = document.getElementById("neutral");
const neg = document.getElementById("negative");
const surveyDetail = document.getElementById("moodDetail");
const surveyMood = document.getElementById("mood")
const respondcont = document.getElementById("responding");
var myMood = "";
var myDetails = "";
var iter = 0;
function moodCheck() {
   
        switch (myMood) {
            case "positive":
                log[iter] = format;
                iter++;
                log[iter] = myMood;
                iter++;
                surveyDetail.style.display = "block";
                surveyMood.style.display = "none";
                break;
            case "neutral":
                log[iter] = format;
                iter++;
                log[iter] = myMood;
                iter++;
                surveyDetail.style.display = "block";
                surveyMood.style.display = "none";
                break;
            case "negative":
                log[iter] = format;
                iter++;
                log[iter] = myMood;
                iter++;
                surveyDetail.style.display = "block";
                surveyMood.style.display = "none";
                break;
    }

    
}
pos.addEventListener("click", function () { myMood = "positive"; moodCheck(); });
neu.addEventListener("click", function () { myMood = "neutral"; moodCheck()});
neg.addEventListener("click", function () { myMood = "negative"; moodCheck() })

function getText(myDetails) {
    
    const textInput = document.getElementById("userText");
    let inputValue = textInput.value;
    myDetails = inputValue;
    log[iter] = myDetails;
    iter++
    console.log(log);
    textInput.value = '';
    surveyDetail.style.display = "none";
    surveyMood.style.display = "none";
    responding(myDetails);
}

function responding() {
    var rand = Math.floor(Math.random() * 4);
    const posArr = [`"Wake up every morning with the thought that something wonderful is about to happen." - Unknown`,
        `"Opportunities don't happen, you create them." - Unknown`,
        `"Attitude is a little thing that makes a big difference." - Winston Churchill`,
        `"Once you replace negative thoughts with positive ones, you'll start having positive results." - Willie Nelson`
    ];
    const neuArr = [`"When you realize there is nothing lacking, the whole world belongs to you." - Lao Tzu`,
        `"It is not the man who has too little, but the man who craves more, that is poor." - Seneca`,
        `"Most folks are about as happy as they make up their minds to be." - Abraham Lincoln`,
        `"To be content doesn't mean you don't desire more, it means you're thankful for what you have and patient for what's to come." - Tony Gaskins`
    ];
    const negArr = [`"You have power over your mind -not outside events. Realize this, and you will find strength." - Marcus Aurelius`,
        `"Talk to yourself like you would someone you love." - Brené Brown`,
        `"The comeback is always stronger than the setback." - Catherine Plano`,
        `"Don't get stuck reliving yesterday's disappointments. Give yourself permission to wipe the slate clean each day." - Tyler Joseph`
    ];
    const respond = document.getElementById("response");
    
    switch (myMood) {
        case "positive":
            respond.textContent = posArr[rand];
            console.log(posArr[rand]);
            break;
        case "neutral":
            respond.textContent = neuArr[rand];
            break;
        case "negative":
            respond.textContent = negArr[rand];
            break;
    }
    respondcont.style.display = "block";
}

function backToSurvey() {
    respondcont.style.display = "none";
    surveyDetail.style.display = "none";
    surveyMood.style.display = "flex";
}

function revealLog() {
    respondcont.style.display = "none";
    surveyDetail.style.display = "none";
    surveyMood.style.display = "none";
    const logCont = document.getElementById("loggedAnswers");
    const newLog = document.createElement("section");
    const newDate = document.createElement("h3");
    const newMood = document.createElement("h4");
    const newDetail = document.createElement("details");
    const newDetSummary = document.createElement("summary");
    const article = document.querySelector(".article2");
    const special = document.querySelector(".special");
    var logAmount = log.length / 3;
    article.style.gridArea = "art1";
    article.style.height = "100%";
    console.log(logAmount);
    for (let i = 0; i < logAmount; i++){
        let x = i * 3;
        newLog.id = `log${i}`;
        logCont.append(newLog.cloneNode(true));
        newDate.textContent = log[x];
        document.getElementById(`log${i}`).append(newDate.cloneNode(true));
        newMood.textContent = `Mood: ${log[x+1]}`;
        document.getElementById(`log${i}`).append(newMood.cloneNode(true));
        newDetail.textContent = log[x + 2];
        newDetail.id = `detail${i}`;
        document.getElementById(`log${i}`).append(newDetail.cloneNode(true));
        newDetSummary.textContent = "Open for Details";
        document.getElementById(`detail${i}`).append(newDetSummary.cloneNode(true));
        if (logAmount > 1) {
            special.style.display = "none";
        }
    }
}