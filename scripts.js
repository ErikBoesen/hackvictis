var bg = document.getElementById('bg');
document.onscroll = function() {
    bg.style.transform = 'translateY(-' + document.documentElement.scrollTop*0.7 + 'px)';
};
