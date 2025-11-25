// Set dark mode as default on first visit
const savedTheme = localStorage.getItem('theme');
if (!savedTheme || savedTheme === 'dark') {
  document.body.classList.add('dark');
}

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Save user preference
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Contact form response
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  if (!name) return;
  this.reset();
  document.getElementById('formMsg').textContent = `Thanks, ${name}! Your message has been sent.`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(sec => observer.observe(sec));