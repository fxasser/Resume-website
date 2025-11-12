document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.dropdown');

  cards.forEach(card => {
    const btn = card.querySelector('.dropdown-btn');
    const panel = card.querySelector('.dropdown-panel');

    btn.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove('open');
          const b = c.querySelector('.dropdown-btn');
          const p = c.querySelector('.dropdown-panel');
          if (b) b.setAttribute('aria-expanded', 'false');
          if (p) p.setAttribute('hidden', '');
        }
      });

      if (isOpen) {
        card.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        panel.setAttribute('hidden', '');
      } else {
        card.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        panel.removeAttribute('hidden');
      }
    });
  });
});
