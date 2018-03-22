var bg = document.getElementById('bg');
var main = document.getElementsByTagName('main')[0];
document.onscroll = function() {
    bg.style.transform = 'translateY(-' + document.documentElement.scrollTop*0.7 + 'px)';
    main.style.backgroundPosition = '0 -' + document.documentElement.scrollTop*0.1 + 'px';
};
