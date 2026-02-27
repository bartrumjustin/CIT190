const btn = document.getElementById("XML");
let txt = "";
btn.addEventListener('click', function () {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            xmlDoc = http.responseXML;
            let a = xmlDoc.getElementsByTagName("Name")[0];
            let b = xmlDoc.getElementsByTagName("q");
            for (let i = 0; i < b.length; i++) {
                let txt = b[i].textContent;
                document.getElementById(`${i+1}`).innerHTML = txt;
            }
            document.getElementById("name").innerHTML = a.textContent;
            btn.style.visibility = 'hidden';
        }
    }
    http.open("GET", "Task5.xml", true);
    http.send();
})

const btn2 = document.getElementById("JSON");
btn2.addEventListener('click', function () {
    let xjson = new XMLHttpRequest();
    xjson.onload = function () {
        if (xjson.readyState == 4 && xjson.status == 200) {
            jsonObj = JSON.parse(xjson.responseText);
            let a = jsonObj.Philospher;
                document.getElementById("name").innerHTML = a.Name;
            for (let i = 0; i < a.quotes.length; i++) {
                let x = document.getElementById(`${i+1}`);
                x.innerHTML = a.quotes[i];
            }
            
            btn2.style.visibility = 'hidden';
        }
    }
    xjson.open("GET", "Task5.json", true);
    xjson.send();
})
const btn3 = document.getElementById("HTML");
btn3.addEventListener('click', function () {
    let xhtml = new XMLHttpRequest();
    xhtml.responseType = "document";
    xhtml.onload = function () {
        if (xhtml.readyState == 4 && xhtml.status == 200) {
            let dataHtml = xhtml.response;
            document.getElementById("name").innerHTML = dataHtml.getElementById("name").textContent;
            for (i = 1; i < 6; i++) {
                let a = dataHtml.getElementById(`${i}`);
                let b = document.getElementById(`${i}`);
                b.innerHTML = a.textContent;
            }
            btn3.style.visibility = 'hidden';
        }
    }
    xhtml.open("GET", "Task5AJAX.html", true);
    xhtml.send();
})