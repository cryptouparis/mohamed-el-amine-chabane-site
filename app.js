(() => {
  let lang = localStorage.getItem('site-lang') || (navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en');
  const toggle = document.getElementById('langToggle');
  const year = document.getElementById('year');
  year.textContent = new Date().getFullYear();

  function renderPublications() {
    const list = document.getElementById('publicationList');
    list.innerHTML = (window.PUBLICATIONS || []).map(pub => `
      <a class="publication reveal" href="${pub.url}" target="_blank" rel="noopener">
        <div class="pub-year">${pub.year}</div>
        <div>
          <div class="pub-type">${pub.type[lang]}</div>
          <h3>${pub.title}</h3>
          <p class="pub-meta">${pub.authors}<br>${pub.venue}</p>
          <div class="pub-tags">${pub.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
        <div class="pub-arrow">↗</div>
      </a>
    `).join('');
  }

  function renderProjects() {
    const list = document.getElementById('projectList');
    list.innerHTML = (window.PROJECTS || []).map(p => `
      <article class="project reveal">
        <div class="project-label">${p.label[lang]}</div>
        <h3>${p.title}</h3>
        <p>${p.text[lang]}</p>
      </article>
    `).join('');
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en][data-fr]').forEach(el => {
      el.textContent = el.dataset[lang];
    });
    toggle.textContent = lang === 'en' ? 'FR' : 'EN';
    toggle.setAttribute('aria-label', lang === 'en' ? 'Afficher le site en français' : 'Show site in English');
    renderPublications();
    renderProjects();
    localStorage.setItem('site-lang', lang);
    requestAnimationFrame(setupReveal);
  }

  toggle.addEventListener('click', () => {
    lang = lang === 'en' ? 'fr' : 'en';
    applyLanguage();
  });

  let observer;
  function setupReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    observer?.disconnect();
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08});
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  applyLanguage();
})();
