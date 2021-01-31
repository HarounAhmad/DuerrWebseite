/*
** toggles between light and darkmode
 */
console.log(localStorage.getItem("isDark"));

function ToggleTheme() {
    var bodyClass = document.getElementById("body");
    var DarkIcon = document.getElementById("darkIcon");
    var LightIcon = document.getElementById("lightIcon");
    var RTXVideoDark = document.getElementById("HeadingVideoDark");
    var RTXVideoLight = document.getElementById("HeadingVideoLight");

    if (document.getElementById("body").classList.contains("dark")) {
        localStorage.setItem('isLight', 'true'); //Stores the mode state in localstorage
        localStorage.setItem('isDark', 'false');
        bodyClass.classList.remove("dark");
        bodyClass.classList.add("light");
        DarkIcon.setAttribute("display", "none")
        LightIcon.setAttribute("display", "inline")
        RTXVideoDark.style.display = "none";
        RTXVideoLight.style.display = "inline";

    } else if (document.getElementById("body").classList.contains("light")) {
        localStorage.setItem('isDark', 'true'); //Stores the mode state in localstorage
        localStorage.setItem('isLight', 'false');
        bodyClass.classList.remove("light");
        bodyClass.classList.add("dark");
        DarkIcon.setAttribute("display", "inline")
        LightIcon.setAttribute("display", "none")
        RTXVideoDark.style.display = "inline";
        RTXVideoLight.style.display = "none";

    }
    console.log(localStorage.getItem('isDark'), localStorage.getItem('isLight'));

}

//Checks theme mode in localstorage onload and applies that to the body
window.addEventListener("load", function checkMode() {
    var bodyClass = document.getElementById("body");
    var DarkIcon = document.getElementById("darkIcon");
    var LightIcon = document.getElementById("lightIcon");
    var RTXVideoDark = document.getElementById("rtxVideoDark");
    var RTXVideoLight = document.getElementById("rtxVideoLight");

    if (localStorage.getItem('isDark') == 'true') {

        bodyClass.classList.remove("light");
        bodyClass.classList.add("dark");
        DarkIcon.setAttribute("display", "none")
        LightIcon.setAttribute("display", "inline")
        RTXVideoDark.style.display = "inline";
        RTXVideoLight.style.display = "none";
        console.log("yess")
    } else if (localStorage.getItem('isLight') == 'true') {

        bodyClass.classList.remove("dark");
        bodyClass.classList.add("light");
        DarkIcon.setAttribute("display", "inline")
        LightIcon.setAttribute("display", "none")
        RTXVideoDark.style.display = "none";
        RTXVideoLight.style.display = "inline";
    }


})

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btns");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}