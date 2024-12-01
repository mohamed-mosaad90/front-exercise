const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    menu.style.transition = `display 1s`

});
let nav=document.querySelector("nav");
// nav.addEventListener("click",()=>{
//     nav.style.transition = `all 1s`

// })