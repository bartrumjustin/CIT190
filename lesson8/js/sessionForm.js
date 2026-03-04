const sub = document.getElementById('subBtn');
const f = document.getElementById('fName');
const l = document.getElementById('lName');
const N1 = document.getElementById('Num1');
const N2 = document.getElementById('Num2');

sub.addEventListener('click', function () {
    console.log("Submit clicked")
    
    sessionStorage.firstName = f.value;
    sessionStorage.lastName = l.value;
    sessionStorage.Number1 = N1.value;
    sessionStorage.Number2 = N2.value;
    window.location.assign("sessionConfirm.html");
})

