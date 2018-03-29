var bg = document.getElementById('bg');

if (window.innerWidth > 750) {
    document.onscroll = function() {
        bg.style.transform = 'translateY(-' + document.documentElement.scrollTop*0.7 + 'px)';
    };
}
