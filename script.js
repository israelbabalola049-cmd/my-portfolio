

// ============================================
// Custom Cursor
// ============================================
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

function animateOutline() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;
  
  cursorOutline.style.left = `${outlineX - 20}px`;
  cursorOutline.style.top = `${outlineY - 20}px`;
  
  requestAnimationFrame(animateOutline);
}
animateOutline();

// Cursor hover effects
const interactiveElements = document.querySelectorAll('a, button, .project-card');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorDot.style.transform = 'scale(1.5)';
    cursorOutline.style.transform = 'scale(1.5)';
  });
  
  el.addEventListener('mouseleave', () => {
    cursorDot.style.transform = 'scale(1)';
    cursorOutline.style.transform = 'scale(1)';
  });
});

// ============================================
// Navigation
// ============================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
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
document.querySelectorAll('[class*="fade-in"]').forEach(el => {
  observer.observe(el);
});

// ============================================
// Skill Bars Animation
// ============================================
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillFills = entry.target.querySelectorAll('.skill-fill');
      skillFills.forEach(fill => {
        const width = fill.style.getPropertyValue('--skill-width');
        fill.style.width = '0%';
        setTimeout(() => {
          fill.style.width = width;
        }, 100);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  skillObserver.observe(skillsSection);
}

// ============================================
// Stats Counter Animation
// ============================================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statValues = entry.target.querySelectorAll('.stat-value');
      statValues.forEach(stat => {
        const text = stat.textContent;
        const isPercentage = text.includes('%');
        const value = parseInt(text);
        
        if (isPercentage) {
          animateCounter(stat, value, 1500);
          stat.textContent = value + '%';
        } else if (text.includes('+')) {
          stat.textContent = '0+';
          animateCounter(stat, value, 1500);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  statsObserver.observe(heroStats);
}

// ============================================
// Parallax Effects
// ============================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  
  // Hero grid parallax
  const heroGrid = document.querySelector('.hero-grid');
  if (heroGrid) {
    heroGrid.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
  
  // Profile image parallax
  const profileImage = document.querySelector('.profile-image-wrapper');
  if (profileImage) {
    const rect = profileImage.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      const offset = (window.innerHeight - rect.top) * 0.05;
      profileImage.style.transform = `translateY(${offset}px)`;
    }
  }
});

// ============================================
// Form Handling
// ============================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    button.innerHTML = `
      <svg class="spinner" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" stroke-dasharray="50" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 10 10" to="360 10 10" dur="1s" repeatCount="indefinite"/>
        </circle>
      </svg>
      Sending...
    `;
    button.disabled = true;
    
    // Note: Form will actually submit to Formspree
    // This is just for UX feedback
    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 3000);
  });
  
  // Input focus effects
  const inputs = contactForm.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });
}

// ============================================
// Project Cards Tilt Effect
// ============================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ============================================
// Dynamic Text Effects
// ============================================
const heroName = document.querySelector('.hero-name');
if (heroName) {
  const text = heroName.textContent;
  heroName.textContent = '';
  
  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    span.style.transform = 'translateY(20px)';
    span.style.animation = `letterFadeIn 0.5s ease-out ${index * 0.05}s forwards`;
    heroName.appendChild(span);
  });
}

// Add keyframe animation for letters
const style = document.createElement('style');
style.textContent = `
  @keyframes letterFadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// ============================================
// Easter Eggs & Enhancements
// ============================================

// Konami Code Easter Egg (up, up, down, down, left, right, left, right, b, a)
let konamiCode = [];
const konamiPattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.keyCode);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiPattern.join(',')) {
    document.body.style.animation = 'rainbow 2s linear infinite';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 5000);
  }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(rainbowStyle);

// ============================================
// Performance Optimizations
// ============================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Lazy load images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ============================================
// Accessibility Enhancements
// ============================================

// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#hero';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: var(--color-bg);
  padding: 8px 16px;
  text-decoration: none;
  z-index: 10001;
`;
skipLink.addEventListener('focus', () => {
  skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
  skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Keyboard navigation for project cards
projectCards.forEach(card => {
  card.setAttribute('tabindex', '0');
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const link = card.querySelector('.project-link');
      if (link) link.click();
    }
  });
});

// ============================================
// Console Easter Egg
// ============================================
console.log('%c👋 Hey there, curious developer!', 'color: #00e5ff; font-size: 20px; font-weight: bold;');
console.log('%cLooks like you\'re checking out the code. I like your style!', 'color: #a8a8b8; font-size: 14px;');
console.log('%cFeel free to reach out if you want to collaborate: israelbabalola049@gmail.com', 'color: #00e5ff; font-size: 14px;');

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Add loaded class to body for CSS animations
  document.body.classList.add('loaded');
  
  // Trigger initial animations
  setTimeout(() => {
    const heroElements = document.querySelectorAll('.hero [class*="fade-in"]');
    heroElements.forEach(el => el.classList.add('visible'));
  }, 100);
});

// Log page load time
window.addEventListener('load', () => {
  const loadTime = performance.now();
  console.log(`%cPage loaded in ${Math.round(loadTime)}ms`, 'color: #00ff88; font-size: 12px;');
});
