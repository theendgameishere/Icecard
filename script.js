// ===== AOS (Animate On Scroll) Initialisation =====
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Sticky header background toggle
  const nav = document.getElementById('main-nav');
  const hero = document.getElementById('hero');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      });
    },
    { threshold: 0 }
  );
  observer.observe(hero);

  // Fetch & render CMS content demo
  fetchAndRenderContent();
});

// ===== CMS Data Fetching Demo =====
async function fetchAndRenderContent() {
  /* Replace the URL below with your CMS endpoint
  const res = await fetch('https://your-cms.com/api/content');
  const data = await res.json();
  */

  // Demo data for illustration purposes
  const data = {
    hero_title: 'Amplify Your Digital Presence',
    hero_subtitle: 'We craft highâ€‘impact websites and AI-powered solutions that resonate.',
    hero_cta_text: 'Start Your Project',
    services_heading: 'Our Core Services',
    service1_title: 'Innovation',
    service1_desc: 'Cuttingâ€‘edge design & AI automation.',
    service2_title: 'Strategy',
    service2_desc: 'Dataâ€‘driven roadmaps that win markets.',
    service3_title: 'Results',
    service3_desc: 'Tangible growth & measurable ROI.',
    about_heading: 'Who We Are',
    about_text: 'Echo Agency is a collective of designers, strategists, and engineers amplifying brands through elite digital experiences.',
    cta_heading: 'Ready to Echo Across the Web?',
    cta_button_text: 'Book a Free Consult',
    copyright_year: '2025'
  };

  for (const [key, value] of Object.entries(data)) {
    const el = document.querySelector(`[data-cms-id="${key}"]`);
    if (el) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else {
        el.textContent = value;
      }
    }
  }
}
