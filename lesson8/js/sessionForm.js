const sub = document.getElementById('subBtn');
const f = document.getElementById('fName');
const l = document.getElementById('lName');
const N1 = document.getElementById('Num1');
const N2 = document.getElementById('Num2');

sub.addEventListener('click', function () {
    console.log("Submit clicked")
    //e.preventDefault();
    localStorage.firstName = f.value;
    localStorage.lastName = l.value;
    localStorage.Number1 = N1.value;
    localStorage.Number2 = N2.value;
    window.location.assign("localConfirm.html");
})

