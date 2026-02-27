// ===== Club Automação - Main JavaScript =====

document.addEventListener('DOMContentLoaded', function() {

  // ===== Navigation scroll effect =====
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // ===== Mobile menu toggle =====
  const mobileBtn = document.querySelector('.nav-mobile-btn');
  const mobileMenu = document.querySelector('.nav-mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileBtn.innerHTML = isOpen ? '✕' : '☰';
    });
    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        mobileBtn.innerHTML = '☰';
      });
    });
  }

  // ===== FAQ Accordion =====
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });

  // ===== Filter tags =====
  document.querySelectorAll('.filter-tags, .category-tags').forEach(function(container) {
    const tags = container.querySelectorAll('.filter-tag, .category-tag');
    const grid = document.querySelector('[data-filterable]');
    tags.forEach(function(tag) {
      tag.addEventListener('click', function() {
        tags.forEach(function(t) { t.classList.remove('active'); });
        tag.classList.add('active');
        if (grid) filterItems(grid, tag.dataset.category || 'Todos');
      });
    });
  });

  // ===== Search =====
  const searchInput = document.querySelector('[data-search]');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const term = searchInput.value.toLowerCase();
      const grid = document.querySelector('[data-filterable]');
      if (grid) {
        grid.querySelectorAll('[data-searchable]').forEach(function(card) {
          const text = card.dataset.searchable.toLowerCase();
          card.style.display = text.includes(term) ? '' : 'none';
        });
      }
    });
  }

  function filterItems(grid, category) {
    grid.querySelectorAll('[data-category]').forEach(function(card) {
      if (category === 'Todos' || card.dataset.category === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // ===== Video play buttons =====
  document.querySelectorAll('[data-video-url]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const card = btn.closest('.project-card');
      const media = card.querySelector('.media');
      const url = btn.dataset.videoUrl;
      media.innerHTML = '<iframe src="' + url + '?autoplay=1" style="width:100%;height:100%;border:none;" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>';
    });
  });

});
