// script.js – Mobile navigation handling for Abdellah Id'issa site
// ---------------------------------------------------------------
// This script provides an openMenu() function that toggles the
// visibility of the navigation menu on small screens. The hamburger
// button calls openMenu() via its onclick attribute. We also close the
// menu automatically when a navigation link is clicked, improving the
// mobile UX.

// Toggle the menu open/close state
function openMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (!navMenu) return; // safety check
  navMenu.classList.toggle('open');

  // Toggle visual active state on the button (optional styling)
  const toggleBtn = document.querySelector('.menu-toggle');
  if (toggleBtn) toggleBtn.classList.toggle('active');
}

// Close the menu when a navigation link is clicked (mobile only)
function attachLinkHandlers() {
  const navMenu = document.getElementById('nav-menu');
  if (!navMenu) return;
  const links = navMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        const toggleBtn = document.querySelector('.menu-toggle');
        if (toggleBtn) toggleBtn.classList.remove('active');
      }
    });
  });
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide scroll-to-top button
function toggleScrollTopButton() {
  const btn = document.getElementById('scroll-top');
  if (window.scrollY > 300) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
}

// Show/hide social bar (appears when scrolling down)
function toggleSocialBar() {
  const socialBar = document.getElementById('social-bar');
  if (window.scrollY > 200) {
    socialBar.classList.add('visible');
  } else {
    socialBar.classList.remove('visible');
  }
}

// Initialise after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  attachLinkHandlers();
  
  // Scroll-to-top button handler
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', scrollToTop);
  }
  
  // Throttle scroll event for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        toggleScrollTopButton();
        toggleSocialBar();
        ticking = false;
      });
      ticking = true;
    }
  });
});
