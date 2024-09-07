window.onscroll = function() {
    var navbar = document.querySelector('.nav-bar');
    var footer = document.querySelector('footer');
    var navbarHeight = navbar.offsetHeight;
    var sticky = navbar.offsetTop;
    var footerOffsetTop = footer.offsetTop;

    if (window.pageYOffset + navbarHeight >= footerOffsetTop) {
        navbar.style.position = 'absolute';
        navbar.style.top = (footerOffsetTop - navbarHeight) + 'px';
    } else {
        navbar.style.position = 'sticky';
        navbar.style.top = '0';
    }
};

function redirect() {
    window.location.href ="scan.html";
}
