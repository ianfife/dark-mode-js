var theme = window.localStorage.getItem('theme');

function setLightMode(backgrounds = [], text = [], icons = []) {
    //Sets all background elements to a white background color
    for (var i = 0; i < backgrounds.length; i++) {
        document.getElementById(backgrounds[i]).style.cssText = 'background-color: white';
    }
    //Sets all text elements to a black color
    for (var i = 0; i < text.length; i++) {
        document.getElementById(text[i]).style.cssText = 'color: black';
    }
    //Sets all icons to a black color
    for (var i = 0; i < icons.length; i++) {
        var elements = document.getElementById(icons).getElementsByTagName("i"), i, len;
        for (i = 0, len = elements.length; i < len; i++) {
            elements[i].style.color = 'black';
        }
    }
    //Your dark/light mode buttons should have the id "footer-button-light" and "footer-button-dark" respectively
    document.getElementById("footer-button-light").style.cssText = 'display: none';
    document.getElementById("footer-button-dark").style.cssText = 'display: block';
    //Saves the theme selection to local storage
    window.localStorage.setItem('theme', 'light');
}

function setDarkMode(backgrounds = [], text = [], icons = []) {
    //Sets all background elements to a black background color
    for (var i = 0; i < backgrounds.length; i++) {
        document.getElementById(backgrounds[i]).style.cssText = 'background-color: black';
    }
    //Sets all background elements to a white color
    for (var i = 0; i < text.length; i++) {
        document.getElementById(text[i]).style.cssText = 'color: white';
    }
    //Sets all icons to a white color
    for (var i = 0; i < icons.length; i++) {
        var elements = document.getElementById(icons).getElementsByTagName("i"), i, len;
        for (i = 0, len = elements.length; i < len; i++) {
            elements[i].style.color = 'white';
        }
    }
    //Your dark/light mode buttons should have the id "footer-button-light" and "footer-button-dark" respectively
    document.getElementById("footer-button-light").style.cssText = 'display: block';
    document.getElementById("footer-button-dark").style.cssText = 'display: none';
    //Saves the theme selection to local storage
    window.localStorage.setItem('theme', 'dark');
}

function init(backgrounds = [], text = [], icons = []) {
    //Call this method inside of a script in your html file to initialize the theme from local storage
    if (theme == 'dark') {
        setDarkMode(backgrounds, text, icons);
    }
    else {
        setLightMode(backgrounds, text, icons);
    }
}
