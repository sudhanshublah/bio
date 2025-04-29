document.addEventListener('DOMContentLoaded', function() {
  // Scroll reveal observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe all content sections
  document.querySelectorAll('.content-section').forEach(section => {
    observer.observe(section);
  });
  
  // Add class to sections for animation
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('content-section');
  });
});