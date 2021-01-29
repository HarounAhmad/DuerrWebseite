

/*
** toggles between light and darkmode
 */
function ToggleTheme() {
    var bodyClass = document.getElementById("body");
    var DarkIcon = document.getElementById("darkIcon");
    var LightIcon = document.getElementById("lightIcon");

    if (document.getElementById("body").classList.contains("dark")) {
        localStorage.setItem('isLight', 'true'); //Stores the mode state in localstorage
        localStorage.setItem('isDark', 'false');
        bodyClass.classList.remove("dark");
        bodyClass.classList.add("light");
        DarkIcon.setAttribute("display", "none")
        LightIcon.setAttribute("display", "inline")

    } else if (document.getElementById("body").classList.contains("light")) {
        localStorage.setItem('isDark', 'true'); //Stores the mode state in localstorage
        localStorage.setItem('isLight', 'false');
        bodyClass.classList.remove("light");
        bodyClass.classList.add("dark");
        DarkIcon.setAttribute("display", "inline")
        LightIcon.setAttribute("display", "none")
    }
    console.log(localStorage.getItem('isDark'), localStorage.getItem('isLight'));

}

//Checks theme mode in localstorage onload and applies that to the body
function checkMode() {
    var bodyClass = document.getElementById("body");
    var DarkIcon = document.getElementById("darkIcon");
    var LightIcon = document.getElementById("lightIcon");

    if(localStorage.getItem('isDark') == 'true')
    {
        bodyClass.classList.remove("light");
        bodyClass.classList.add("dark");
        DarkIcon.setAttribute("display", "none")
        LightIcon.setAttribute("display", "inline")
    }
    if(localStorage.getItem('isLight') == 'true')
    {
        bodyClass.classList.remove("dark");
        bodyClass.classList.add("light");
        DarkIcon.setAttribute("display", "inline")
        LightIcon.setAttribute("display", "none")
    }
}