var theme = window.localStorage.getItem('theme');

function setLightMode(backgrounds = [], text = [], icons = []) {
    for (var i = 0; i < backgrounds.length; i++) {
        document.getElementById(backgrounds[i]).style.cssText = 'background-color: white';
    }
    for (var i = 0; i < text.length; i++) {
        document.getElementById(text[i]).style.cssText = 'color: black';
    }
    for (var i = 0; i < icons.length; i++) {
        var elements = document.getElementById(icons).getElementsByTagName("i"), i, len;
        for (i = 0, len = elements.length; i < len; i++) {
            elements[i].style.color = 'black';
        }
    }
    footer.style.cssText = 'background-color: white';
    document.getElementById("footer-button-light").style.cssText = 'display: none';
    document.getElementById("footer-button-dark").style.cssText = 'display: block';
    window.localStorage.setItem('theme', 'light');
}

function setDarkMode(backgrounds = [], text = [], icons = []) {
    for (var i = 0; i < backgrounds.length; i++) {
        document.getElementById(backgrounds[i]).style.cssText = 'background-color: black';
    }
    for (var i = 0; i < text.length; i++) {
        document.getElementById(text[i]).style.cssText = 'color: white';
    }
    for (var i = 0; i < icons.length; i++) {
        var elements = document.getElementById(icons).getElementsByTagName("i"), i, len;
        for (i = 0, len = elements.length; i < len; i++) {
            elements[i].style.color = 'white';
        }
    }
    footer.style.cssText = 'background-color: black';
    document.getElementById("footer-button-light").style.cssText = 'display: block';
    document.getElementById("footer-button-dark").style.cssText = 'display: none';
    window.localStorage.setItem('theme', 'dark');
}

function init(backgrounds = [], text = [], icons = []) {
    console.log(theme);
    if (theme == 'dark') {
        setDarkMode(backgrounds, text, icons);
    }
    else {
        setLightMode(backgrounds, text, icons);
    }
}
