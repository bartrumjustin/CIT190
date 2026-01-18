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
            log[1] = date;
            log[2] = myMood;
            document.getElementById("moodDetail").style.zIndex = "2";
            break;
    }

}
pos.addEventListener("click", function () { myMood = "positive"; moodCheck(); });
neu.addEventListener("click", function () { myMood = "neutral"; });
neg.addEventListener("click", function () { myMood = "negative"; })
