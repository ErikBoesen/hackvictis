var bg = document.getElementById('bg');
document.onscroll = function() {
    bg.style.transform = 'translateY(-' + document.body.scrollTop*1.5 + 'px)';
};
