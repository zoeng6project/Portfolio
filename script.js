
var typed = new Typed(".auto-type",{
    strings: [" Zoe Ng"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});


const header = document.querySelector('section#nav > nav');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
