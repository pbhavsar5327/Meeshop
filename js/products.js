
// products.js
document.addEventListener('DOMContentLoaded', () => {
  initNav('products');
  renderCategoryFilters();

  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('productsCount');
  const emptyEl = document.getElementById('emptyState');
  const sortSel = document.getElementById('sortSelect');
  const filterToggle = document.getElementById('filterToggle');
  const sidebar = document.getElementById('sidebar');
  const clearBtn = document.getElementById('clearFilters');

  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('cat');
  const urlQ = params.get('q');

  if (urlCat) {
    const radio = document.querySelector(`input[name="cat"][value="${urlCat}"]`);
    if (radio) radio.checked = true;
  }

  function getFilters() {
    return {
      cat: document.querySelector('input[name="cat"]:checked')?.value || 'all',
      price: document.querySelector('input[name="price"]:checked')?.value || 'all',
      rating: parseFloat(document.querySelector('input[name="rating"]:checked')?.value || '0'),
      sort: sortSel.value,
      q: urlQ || ''
    };
  }

  function applyFilters() {
    const f = getFilters();
    let list = [...PRODUCTS];
    if (f.q) list = list.filter(p => [p.name,p.category,p.description].some(v => v.toLowerCase().includes(f.q.toLowerCase())));
    if (f.cat !== 'all') list = list.filter(p => p.category === f.cat);
    if (f.price !== 'all') {
      if (f.price === '0-299') list = list.filter(p => p.price <= 299);
      else if (f.price === '300-599') list = list.filter(p => p.price >= 300 && p.price <= 599);
      else if (f.price === '600-999') list = list.filter(p => p.price >= 600 && p.price <= 999);
      else if (f.price === '1000+') list = list.filter(p => p.price >= 1000);
    }
    if (f.rating > 0) list = list.filter(p => p.rating >= f.rating);
    if (f.sort === 'price-asc') list.sort((a,b) => a.price - b.price);
    else if (f.sort === 'price-desc') list.sort((a,b) => b.price - a.price);
    else if (f.sort === 'rating') list.sort((a,b) => b.rating - a.rating);
    else if (f.sort === 'discount') list.sort((a,b) => calcDiscount(b.price,b.oldPrice) - calcDiscount(a.price,a.oldPrice));
    render(list);
  }

  function render(list) {
    grid.innerHTML = '';
    countEl.textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;
    if (list.length === 0) { emptyEl.style.display = 'block'; return; }
    emptyEl.style.display = 'none';
    list.forEach(p => { grid.innerHTML += productCardHtml(p); });
  }

  window.resetFilters = function() {
    document.querySelectorAll('input[name="cat"]')[0].checked = true;
    document.querySelectorAll('input[name="price"]')[0].checked = true;
    document.querySelectorAll('input[name="rating"]')[0].checked = true;
    sortSel.value = 'default';
    applyFilters();
  };

  document.querySelectorAll('input[name="cat"], input[name="price"], input[name="rating"]').forEach(el => el.addEventListener('change', applyFilters));
  sortSel.addEventListener('change', applyFilters);
  if (clearBtn) clearBtn.addEventListener('click', resetFilters);

  if (filterToggle) {
    filterToggle.addEventListener('click', () => { sidebar.classList.toggle('open'); });
    document.addEventListener('click', e => {
      if (!sidebar.contains(e.target) && e.target !== filterToggle) sidebar.classList.remove('open');
    });
  }

  applyFilters();
});
