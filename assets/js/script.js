const themeSwitch = document.getElementById('switch-color-mode-checkbox-input');

function setColorMode() {
    if(themeSwitch.checked) {
        document.documentElement.style.cssText = '--bg-primary: #212429; --color-primary: #ffffff;';
        $(".logo-img").attr("src", "assets/images/logo/light.png");
    } else {
        document.documentElement.style.cssText = '--bg-primary: #ecf0f3; --color-primary: #000000;';
        $(".logo-img").attr("src", "assets/images/logo/dark.png");
    }
}

themeSwitch.addEventListener('change', () => {
    setColorMode();
});
