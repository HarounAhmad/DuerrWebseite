/**
 * Light/DarkMode Toggle
 **/
var isDark = true;
var isLight = false;

function toggleTheme() {
    console.log(isDark, isLight)
    var element = document.getElementById("body");
    if (isDark) { //Sets theme to Light if isDark is true
        element.classList.remove("dark");
        element.classList.add("light");
        isDark = false;
        isLight = true;
    }else if (isLight) { //Sets theme to dark if isLight is true
        element.classList.remove("light");
        element.classList.add("dark");
        isDark = true;
        isLight = false;
    }
}