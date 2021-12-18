$(document).ready(function() {
    
    //function to set Color Mode
    function setColorMode(theme) {
        if(theme.checked) {
            document.documentElement.style.cssText = '--bg-primary: #212429; --color-primary: #ffffff;';
            $(".logo-img").attr("src", "assets/images/logo/light.png");
            for(let i=0; i<themeSwitch.length; i++) {
                themeSwitch[i].checked = true;
            }
        } else {
            document.documentElement.style.cssText = '--bg-primary: #ecf0f3; --color-primary: #000000;';
            $(".logo-img").attr("src", "assets/images/logo/dark.png");
            for(let i=0; i<themeSwitch.length; i++) {
                themeSwitch[i].checked = false;
            }
        }
    }

    //Get all inputs to switch darkMode
    const themeSwitch = $('.switch-color-mode-checkbox-input');
    
    // Adding events to all darkmode Inputs
    for(let i=0; i<themeSwitch.length; i++) {
        themeSwitch[i].addEventListener('change', () => {
            setColorMode(themeSwitch[i]);
        });
        setColorMode(themeSwitch[i]);
    }
});

//HAMBURGAR
$(document).ready(function(){
	$('.media-right-nav-hamburgar').click(function(){
		$(this).toggleClass('open');
        $(".media-right-nav-list").toggleClass('d-none');
   });
});

