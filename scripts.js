var bg = document.getElementById('bg');

console.log(window.innerWidth);
if (window.innerWidth > 750) {
    document.onscroll = function() {
        bg.style.transform = 'translateY(-' + document.documentElement.scrollTop*0.7 + 'px)';
    };
}
