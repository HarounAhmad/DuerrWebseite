/**
 * Light/DarkMode Toggle
 **/
var isDark = true;
var isLight = false;

function toggleTheme() {
    var bodyClass = document.getElementById("body");
    if (isDark) { //Sets theme to Light if isDark is true
        bodyClass.classList.remove("dark");
        bodyClass.classList.add("light");
        document.getElementById('themeButton').setAttribute('d', "M 279.135 512 c 78.756 0 150.982 -35.804 198.844 -94.775 c 28.27 -34.831 -2.558 -85.722 -46.249 -77.401 c -82.348 15.683 -158.272 -47.268 -158.272 -130.792 c 0 -48.424 26.06 -92.292 67.434 -115.836 c 38.745 -22.05 28.999 -80.788 -15.022 -88.919 A 257.936 257.936 0 0 0 279.135 0 c -141.36 0 -256 114.575 -256 256 c 0 141.36 114.576 256 256 256 Z m 0 -464 c 12.985 0 25.689 1.201 38.016 3.478 c -54.76 31.163 -91.693 90.042 -91.693 157.554 c 0 113.848 103.641 199.2 215.252 177.944 C 402.574 433.964 344.366 464 279.135 464 c -114.875 0 -208 -93.125 -208 -208 s 93.125 -208 208 -208 Z");
        console.log(document.getElementById("themeButton").getAttribute('d'));
        isDark = false;
        isLight = true;
    }else if (isLight) { //Sets theme to dark if isLight is true
        bodyClass.classList.remove("light");
        bodyClass.classList.add("dark");
        document.getElementById('themeButton').setAttribute('d', "M 256 160 c -52.9 0 -96 43.1 -96 96 s 43.1 96 96 96 s 96 -43.1 96 -96 s -43.1 -96 -96 -96 Z m 246.4 80.5 l -94.7 -47.3 l 33.5 -100.4 c 4.5 -13.6 -8.4 -26.5 -21.9 -21.9 l -100.4 33.5 l -47.4 -94.8 c -6.4 -12.8 -24.6 -12.8 -31 0 l -47.3 94.7 L 92.7 70.8 c -13.6 -4.5 -26.5 8.4 -21.9 21.9 l 33.5 100.4 l -94.7 47.4 c -12.8 6.4 -12.8 24.6 0 31 l 94.7 47.3 l -33.5 100.5 c -4.5 13.6 8.4 26.5 21.9 21.9 l 100.4 -33.5 l 47.3 94.7 c 6.4 12.8 24.6 12.8 31 0 l 47.3 -94.7 l 100.4 33.5 c 13.6 4.5 26.5 -8.4 21.9 -21.9 l -33.5 -100.4 l 94.7 -47.3 c 13 -6.5 13 -24.7 0.2 -31.1 Z m -155.9 106 c -49.9 49.9 -131.1 49.9 -181 0 c -49.9 -49.9 -49.9 -131.1 0 -181 c 49.9 -49.9 131.1 -49.9 181 0 c 49.9 49.9 49.9 131.1 0 181 Z");
        console.log(document.getElementById("themeButton").getAttribute('d'));
        isDark = true;
        isLight = false;
    }
}




