const modal1 = document.getElementById('Modal1');
const modal2 = document.getElementById('Modal2')

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
}
btn2.onclick = function () {
    modal2.style.display = "block";
    modal1.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
exit1.onclick = function () {
    modal1.style.display = "none";
}
exit2.onclick = function () {
    modal2.style.display = "none";
}

