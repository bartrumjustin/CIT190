const modal1 = document.getElementById('Modal1');
const modal2 = document.getElementById('Modal2');
const menu = document.getElementById('menu');

// Get the button that opens the modal
var btn1 = document.getElementById("mBtn1");
var btn2 = document.getElementById("mBtn2");

// Get the <span> element that closes the modal
var exit1 = document.getElementsByClassName("exit")[0];
var exit2 = document.getElementsByClassName("exit")[1];

// When the user clicks the button, open the modal 
btn1.onclick = function () {
    modal1.style.display = "block";
    modal2.style.display = "none";
    menu.style.filter = "blur(10px)";
    
}
btn2.onclick = function () {
    modal2.style.display = "block";
    modal1.style.display = "none";
    menu.style.filter = "blur(10px)";
}

// When the user clicks on <span> (x), close the modal
exit1.onclick = function () {
    modal1.style.display = "none";
    menu.style.filter = "blur(0px)";
}
exit2.onclick = function () {
    modal2.style.display = "none";
    menu.style.filter = "blur(0px)";
}

