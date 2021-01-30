
/*
** toggles between light and darkmode
 */
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

    if(localStorage.getItem('isDark') == 'true')
    {
        bodyClass.classList.remove("light");
        bodyClass.classList.add("dark");
        DarkIcon.setAttribute("display", "none")
        LightIcon.setAttribute("display", "inline")
        RTXVideoDark.style.display = "inline";
        RTXVideoLight.style.display = "none";
        console.log("yess")
    }else if(localStorage.getItem('isLight') == 'true')
    {
        bodyClass.classList.remove("dark");
        bodyClass.classList.add("light");
        DarkIcon.setAttribute("display", "inline")
        LightIcon.setAttribute("display", "none")
        RTXVideoDark.style.display = "none";
        RTXVideoLight.style.display = "inline";
    }

})
