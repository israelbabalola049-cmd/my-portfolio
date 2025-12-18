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
/* Skills Profile Container */
.skills-profile {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 1px solid #222;
}

/* Profile Picture */
.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 0 15px rgba(100, 100, 100, 0.4);
  border: 2px solid #555;
}

/* Profile Info */
.profile-info {
  flex-grow: 1;
}

/* Code Sniper Text */
.code-sniper {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.8rem;
  font-weight: 700;
  color: #aaa;
  quotes: '“' '”';
  position: relative;
  user-select: none;
  letter-spacing: 0.05em;
}

.code-sniper::before {
  content: open-quote;
  color: #666;
  font-size: 2.5rem;
  position: absolute;
  left: -18px;
  top: -10px;
}

.code-sniper::after {
  content: close-quote;
  color: #666;
  font-size: 2.5rem;
  position: absolute;
  right: -18px;
  bottom: -10px;
}

/* Skill Bar Text and Percentage */
.skill-bar p {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: #ccc;
}

.bar {
  position: relative;
  background: #222;
  border-radius: 10px;
  height: 22px;
  box-shadow: inset 0 0 4px #111;
}

.fill {
  height: 100%;
  background: linear-gradient(90deg, #888, #bbb);
  width: 0;
  border-radius: 10px;
  transition: width 1s ease-in-out;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  font-weight: 700;
  color: #222;
  font-size: 0.9rem;
  user-select: none;
}

/* Percentage inside bar */
.percent {
  color: #222;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}

/* Add some margin bottom to last skill bar */
.skill-bar:last-child {
  margin-bottom: 40px;
}

/* Add a bit of responsive tweak for smaller screens */
@media (max-width: 480px) {
  .skills-profile {
    flex-direction: column;
    align-items: flex-start;
  }
  .profile-pic {
    width: 100px;
    height: 100px;
  }
  .code-sniper {
    font-size: 1.5rem;
    margin-top: 10px;
    position: static;
  }
}
