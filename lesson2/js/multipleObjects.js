const date = new Date();
const log = [];
const log2 = [];
const pos = document.getElementById("positive");
const neu = document.getElementById("neutral");
const neg = document.getElementById("negative");
var myMood = "";
var myDetails = "";

function moodCheck() {
    switch (myMood) {
        case "positive":
            log[0] = date;
            log[1] = myMood;
            console.log(log);
            document.getElementById("moodDetail").style.zIndex = "2";
            break;
        case "neutral":
            log[0] = date;
            log[1] = myMood;
    }

}
pos.addEventListener("click", function () { myMood = "positive"; moodCheck(); });
neu.addEventListener("click", function () { myMood = "neutral"; });
neg.addEventListener("click", function () { myMood = "negative"; })
