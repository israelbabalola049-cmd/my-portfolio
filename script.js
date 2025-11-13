// Mobile Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.style.right = mobileMenu.style.right === "0px" ? "-250px" : "0px";
});
function closeMenu(){ mobileMenu.style.right="-250px"; }

// Animate skill bars on scroll
const skillFills = document.querySelectorAll('.fill');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight;
  skillFills.forEach(fill => {
    const top = fill.getBoundingClientRect().top;
    if(top < trigger - 50 && !fill.classList.contains('filled')){
      fill.classList.add('filled');
      fill.style.width = fill.getAttribute('data-width');
    }
  });
});
