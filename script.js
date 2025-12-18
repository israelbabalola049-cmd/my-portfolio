// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');

  if (isOpen) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.classList.remove('menu-open');
  } else {
    mobileMenu.classList.add('open');
    hamburger.classList.add('active');
    document.body.classList.add('menu-open');
  }
});

// Close menu on link click
function closeMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('active');
  document.body.classList.remove('menu-open');
}

// Animate skill bars on scroll
const skillFills = document.querySelectorAll('.fill');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight;
  skillFills.forEach(fill => {
    const top = fill.getBoundingClientRect().top;
    if (top < trigger - 50 && !fill.classList.contains('filled')) {
      fill.classList.add('filled');
      fill.style.width = fill.getAttribute('data-width');
    }
  });
});
