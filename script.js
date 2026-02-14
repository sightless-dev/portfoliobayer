const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const auroras = document.querySelectorAll('.bg-aurora');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  auroras.forEach((el, i) => {
    const factor = (i + 1) * 0.35;
    el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});
