setHtmlFontSize();
 function setHtmlFontSize(){
    var designWidth = 750;
    var designFontSize =200;
    var windowWidth = document.documentElement.offsetWidth;
    var nowFontSize = windowWidth/(750/200);
    document.documentElement.style.fontSize = nowFontSize + 'px';
 }
 window.addEventListener('resize',setHtmlFontSize);