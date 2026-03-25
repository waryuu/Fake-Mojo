const SkewedOne = document.querySelector('.SkewedOne');
const SkewedTwo = document.querySelector('.SkewedTwo');
window.addEventListener('scroll', function(){
    const value1 = -15 + window.scrollY/45;
    const value2 = 15 - window.scrollY/45;
    SkewedOne.style.transform = "skewY(" + value1 + "deg)";
    SkewedTwo.style.transform = "skewY(" + value2 + "deg)";
})


function toggleMenu(){
    const menuToggle = document.querySelector('nav');
    const navbar = document.querySelector('.nav-items');
    menuToggle.classList.toggle('active')
    navbar.classList.toggle('active')
}