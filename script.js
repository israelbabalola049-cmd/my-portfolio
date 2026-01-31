// ============================================
// Navigation Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ============================================
// Mobile Navigation Toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// ============================================
// Smooth Scrolling
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Trigger skill bar animations
      if (entry.target.classList.contains('skills')) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    }
  });
}, observerOptions);

// Observe sections for fade-in
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// ============================================
// Skill Bars Animation
// ============================================
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach((bar, index) => {
    setTimeout(() => {
      const progress = bar.getAttribute('data-progress');
      bar.style.width = progress + '%';
    }, index * 100);
  });
}

// Observe skills section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  skillsObserver.observe(skillsSection);
}

// ============================================
// Form Enhancement
// ============================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Form will submit to Formspree
    // Reset button after a delay for UX
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 3000);
  });
  
  // Add focus effects
  const inputs = contactForm.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
}

// ============================================
// Active Navigation Link
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

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
// Parallax Effect
// ============================================
let ticking = false;

function parallaxScroll() {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-background');
  
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(parallaxScroll);
    ticking = true;
  }
});

// ============================================
// Project Hover Effects
// ============================================
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(project => {
  project.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });
  
  project.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// ============================================
// Performance Logging
// ============================================
window.addEventListener('load', () => {
  const loadTime = performance.now();
  console.log(`%cPortfolio loaded in ${Math.round(loadTime)}ms`, 'color: #4a90e2; font-size: 12px;');
  console.log('%c👋 Welcome! Built by Israel Babalola', 'color: #4a90e2; font-size: 14px; font-weight: bold;');
});

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Add initial class to body
  document.body.classList.add('loaded');
  
  // Trigger animations after a short delay
  setTimeout(() => {
    document.querySelectorAll('.section').forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight) {
        section.classList.add('visible');
      }
    });
  }, 100);
});
