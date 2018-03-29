var bg = document.getElementById('bg');
var main = document.getElementsByTagName('main')[0];
console.log(window.innerWidth);
if (window.innerWidth > 750) {
    document.onscroll = function() {
        bg.style.transform = 'translateY(-' + document.documentElement.scrollTop*0.7 + 'px)';
        main.style.backgroundPosition = '0 -' + document.documentElement.scrollTop*0.1 + 'px';
    };
}
