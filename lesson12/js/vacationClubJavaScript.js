document.getElementById("sub").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("lastnameError").innerHTML = "";
    document.getElementById("firstnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("seasonError").innerHTML = "";
    document.getElementById("accomodationError").innerHTML = "";
    var fName = document.getElementById("firstname").value;
    var lName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var season = document.getElementById("seasonInput").value;
    var star = document.getElementById("star5").checked;
    var rental = document.getElementById("rentalhouse").checked;
    var pool = document.getElementById("pool").checked;
    var fitness = document.getElementById("fitness").checked;
    var dining = document.getElementById("dining").checked;
    var golf = document.getElementById("golf").checked;
    var roomAmm = document.getElementById("roomammenities").checked;
    var beach = document.getElementById("beach").checked;
    var errorFlag = 'n';
    if (fName == "") {
        document.getElementById("firstnameError").innerHTML = "You must fill in the first name";
        errorFlag = 'y';
    }
    if (lName == "") {
        document.getElementById("lastnameError").innerHTML = "You must fill in the last name";
        errorFlag = 'y';
    }
    
    if (email == "") {
        document.getElementById("emailError").innerHTML = "You must fill in the email address";
        errorFlag = 'y';
    }
    if (email) {
        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
            document.getElementById("emailError").innerHTML = "The email address you entered is invalid.";
            errorFlag = 'y';
        }
    }
    if (!season) {
        console.log(season);
        document.getElementById('seasonError').innerHTML = "Please select a season or no preference";
        errorFlag = 'y';
    }
    if (!star && !rental && !pool && !fitness && !golf && !beach && !roomAmm && !dining) {
        document.getElementById("accomodationError").innerHTML = "Select at least one accomodation feature you prefer";
        errorFlag = "y";
    }

    if (errorFlag == 'n') {
        window.location.assign("vacationConfirmation.html");
    }
});