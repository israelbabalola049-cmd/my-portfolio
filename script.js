// ============================================
// Smooth Scroll Progress Bar
// ============================================
function updateScrollProgress() {
  const scrollProgress = document.querySelector('.scroll-progress');
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.pageYOffset / scrollHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ============================================
// Mobile Menu Toggle
// ============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

function closeMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

// Close menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    closeMenu();
  }
});

// ============================================
// Intersection Observer for Fade-in Animations
// ============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ============================================
// Animated Skill Bars
// ============================================
const skillBarsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.fill');
      fills.forEach(fill => {
        const width = fill.getAttribute('data-width');
        fill.style.setProperty('--width', width);
        setTimeout(() => {
          fill.classList.add('animate');
        }, 100);
      });
      skillBarsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.expertise');
if (skillsSection) {
  skillBarsObserver.observe(skillsSection);
}

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      closeMenu();
    }
  });
});

// ============================================
// Enhanced Project Cards Hover Effect
// ============================================
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mousemove', (e) => {
    const rect = project.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    
    project.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
  });
  
  project.addEventListener('mouseleave', () => {
    project.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
  });
});

// ============================================
// Focus Cards 3D Tilt Effect
// ============================================
const focusCards = document.querySelectorAll('.focus-card');

focusCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) rotate(2deg)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) rotate(0)';
  });
});

// ============================================
// Form Validation and Enhancement
// ============================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  const inputs = contactForm.querySelectorAll('input, select, textarea');
  
  // Add floating label effect
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Form submission handling
  contactForm.addEventListener('submit', function(e) {
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    button.style.opacity = '0.7';
    
    // Note: Form will actually submit to Formspree
    // This is just for visual feedback
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      button.style.opacity = '1';
    }, 3000);
  });
}

// ============================================
// Parallax Effect on Scroll
// ============================================
let ticking = false;

function parallaxEffect() {
  const scrolled = window.pageYOffset;
  
  const heroBackground = document.querySelector('.hero-background');
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(parallaxEffect);
    ticking = true;
  }
});

// ============================================
// Add Glow Effect on Hover for Links
// ============================================
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.textShadow = '0 0 10px rgba(79, 172, 254, 0.8)';
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.textShadow = 'none';
  });
});

// ============================================
// Typing Animation for Hero Text (Optional Enhancement)
// ============================================
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Uncomment to enable typing animation on hero title
// window.addEventListener('load', () => {
//   const h1 = document.querySelector('.hero h1');
//   const originalText = h1.textContent;
//   typeWriter(h1, originalText, 50);
// });

// ============================================
// Add Ripple Effect to Buttons
// ============================================
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
  ripple.classList.add('ripple');
  
  const rippleElement = button.getElementsByClassName('ripple')[0];
  if (rippleElement) {
    rippleElement.remove();
  }
  
  button.appendChild(ripple);
}

const buttons = document.querySelectorAll('.cta-btn, .contact-form button');
buttons.forEach(button => {
  button.addEventListener('click', createRipple);
  button.style.position = 'relative';
  button.style.overflow = 'hidden';
});

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// ============================================
// Lazy Loading Images
// ============================================
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});

images.forEach(img => imageObserver.observe(img));

// ============================================
// Console Easter Egg
// ============================================
console.log('%c👋 Welcome to my portfolio!', 'color: #4facfe; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with passion and dedication', 'color: #667eea; font-size: 14px;');
console.log('%cFeel free to reach out: israelbabalola049@gmail.com', 'color: #4facfe; font-size: 12px;');

// ============================================
// Page Load Performance Tracking
// ============================================
window.addEventListener('load', () => {
  const loadTime = performance.now();
  console.log(`%cPage loaded in ${Math.round(loadTime)}ms`, 'color: #00f2fe; font-size: 12px;');
});

// ============================================
// Add Keyboard Navigation
// ============================================
document.addEventListener('keydown', (e) => {
  // Press 'h' to go to home
  if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
    const target = document.querySelector('#hero');
    if (target && !isInputFocused()) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Press 'c' to go to contact
  if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
    const target = document.querySelector('#contact');
    if (target && !isInputFocused()) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

function isInputFocused() {
  return document.activeElement.tagName === 'INPUT' || 
         document.activeElement.tagName === 'TEXTAREA' ||
         document.activeElement.tagName === 'SELECT';
}

// ============================================
// Initialize on DOM Content Loaded
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Trigger initial fade-in for hero section
  setTimeout(() => {
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach(el => el.classList.add('visible'));
  }, 100);
  
  console.log('%c✨ Portfolio initialized successfully!', 'color: #00f2fe; font-size: 14px;');
});
