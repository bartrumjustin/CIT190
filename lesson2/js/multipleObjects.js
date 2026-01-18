const date = new Date();
const log = [];
const pos = document.getElementById("positive");
const neu = document.getElementById("neutral");
const neg = document.getElementById("negative");
const surveyDetail = document.getElementById("moodDetail");
const surveyMood = document.getElementById("mood")
var myMood = "";
var myDetails = "";
var iter = 0;
function moodCheck() {
   
        switch (myMood) {
            case "positive":
                log[iter] = date;
                iter++;
                log[iter] = myMood;
                iter++;
                surveyDetail.style.display = "block";
                surveyMood.style.display = "none";
                break;
            case "neutral":
                log[iter] = date;
                iter++;
                log[iter] = myMood;
                iter++;
                surveyDetail.style.display = "block";
                surveyMood.style.display = "none";
                break;
            case "negative":
                log[iter] = date;
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
    revealLog();
    
}

function revealLog() {
    
    surveyDetail.style.display = "none";
    surveyMood.style.display = "flex";
}