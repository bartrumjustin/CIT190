document.getElementById("li1").addEventListener("click", function (e) {
    openTab(e, "listitem1");
});
document.getElementById("li2").addEventListener("click", function (e) {
    openTab(e, "listitem2");
});


function openTab(e, section) {
    // Declare all variables
    var i, tabContext, tabLink;

    // Get all elements with class="tabcontent" and hide them
    tabContext = document.getElementsByClassName("tabContext");
    for (i = 0; i < tabContext.length; i++) {
        tabContext[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabLink = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(section).style.display = "block";
    e.currentTarget.className += " active";
}