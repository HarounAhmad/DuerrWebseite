var isDark = JSON.parse(localStorage.getItem("isDark"));
var isLight = JSON.parse(localStorage.getItem("isLight"));


$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

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
    var RTXVideoDark = document.getElementById("HeadingVideoDark");
    var RTXVideoLight = document.getElementById("HeadingVideoLight");



    if (localStorage.getItem('isDark') == 'true') {

        bodyClass.classList.remove("light");
        bodyClass.classList.add("dark");
        DarkIcon.setAttribute("display", "none"); //these 4 lines don't do anything
        LightIcon.setAttribute("display", "inline"); //these 4 lines don't do anything
        RTXVideoDark.style.display = "inline"; //these 4 lines don't do anything
        RTXVideoLight.style.display = "none"; //these 4 lines don't do anything
        console.log("isDark")
    } else if (localStorage.getItem('isLight') == 'true') {
        bodyClass.classList.remove("dark");
        bodyClass.classList.add("light");
        DarkIcon.setAttribute("display", "inline");//these 4 lines don't do anything
        LightIcon.setAttribute("display", "none");//these 4 lines don't do anything
        RTXVideoDark.style.display = "none";//these 4 lines don't do anything
        RTXVideoLight.style.display = "inline";//these 4 lines don't do anything
        console.log("isLight");

    }


})

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

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