/* === Menu Navigation & Scrolling === */
const navMenu = document.querySelector('.menu-nav');
const navTitle = document.getElementById('nav-title-front');
const mainLogo = document.getElementById('main-logo');
const pages = document.querySelectorAll('.page');

navMenu.addEventListener('click', e => {
    var target = e.target;
    var parent = target.parentNode;
    var index = [].indexOf.call(parent.children, target);
    pages[index + 1].scrollIntoView();
  });


navTitle.addEventListener('click', () => {
	pages[0].scrollIntoView();
});
mainLogo.addEventListener('click', () => {
	pages[1].scrollIntoView();
});


/* === Gallery/Slideshow === */
const slideshow = document.querySelector('.slideshow')
const slides = slideshow.getElementsByTagName('img');
let i = 0;

function nextSlide() {
	slides[i].classList.remove('active');
	i = (i + 1) % slides.length;
	slides[i].classList.add('active');
}

function prevSlide() {
	slides[i].classList.remove('active');
	i = (i - 1) % slides.length;
	slides[i].classList.add('active');
}

window.setInterval(nextSlide, 8000);
