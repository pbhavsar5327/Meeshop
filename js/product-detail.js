// product-detail.js
document.addEventListener('DOMContentLoaded', () => {
  initNav('products');
  const id = parseInt(new URLSearchParams(window.location.search).get('id'));
  const container = document.getElementById('pdContainer');
  const relatedGrid = document.getElementById('relatedGrid');

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>Product not found</h3><p>This product may have been removed.</p><a href="products.html" class="btn btn-primary">Back to Products</a></div>`;
    return;
  }

  document.getElementById('bcName').textContent = product.name;
  document.title = product.name + ' – MeeShop';

  let qty = 1;
  const disc = calcDiscount(product.price, product.oldPrice);

  container.innerHTML = `
    <div class="pd-wrap">
      <div class="pd-gallery">
        <div class="pd-main-img"><img src="${product.image}" alt="${product.name}" id="mainImg"></div>
      </div>
      <div class="pd-info">
        <span class="pd-cat">${product.category}</span>
        <h1 class="pd-name">${product.name}</h1>
        <div class="pd-rating"><span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span><span>${product.rating} · ${product.reviews.toLocaleString()} reviews</span></div>
        <div class="pd-price-row"><span class="pd-price">₹${product.price.toLocaleString()}</span><span class="pd-old-price">₹${product.oldPrice.toLocaleString()}</span><span class="pd-off">${disc}% OFF</span></div>
        <p class="pd-desc">${product.description}</p>
        <div class="pd-highlights"><h4>Product Highlights</h4><ul>${product.highlights.map(h => `<li>${h}</li>`).join('')}</ul></div>
        <div class="pd-qty"><label>Quantity:</label><button class="qty-btn" id="qtyMinus">−</button><span class="qty-val" id="qtyVal">1</span><button class="qty-btn" id="qtyPlus">+</button></div>
        <div class="pd-actions"><button class="btn btn-purple btn-lg" id="addCartBtn">🛒 Add to Cart</button><button class="btn btn-primary btn-lg" id="buyNowBtn">⚡ Buy Now</button><button class="btn btn-secondary" id="wishBtn">${isWishlisted(product.id) ? '❤️' : '🤍'} Wishlist</button></div>
        <div class="pd-trust"><div class="pd-trust-item">🚚 Free Delivery</div><div class="pd-trust-item">↩️ 7-Day Returns</div><div class="pd-trust-item">🔒 Secure Payment</div><div class="pd-trust-item">✅ Genuine Product</div></div>
      </div>
    </div>`;

  document.getElementById('mainImg').addEventListener('error', function () {
    this.src = 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=900&auto=format&fit=crop';
  });

  document.getElementById('qtyMinus').addEventListener('click', () => { if (qty > 1) { qty--; document.getElementById('qtyVal').textContent = qty; } });
  document.getElementById('qtyPlus').addEventListener('click', () => { if (qty < 10) { qty++; document.getElementById('qtyVal').textContent = qty; } });
  document.getElementById('addCartBtn').addEventListener('click', () => addToCart(product.id, qty));
  document.getElementById('buyNowBtn').addEventListener('click', () => { addToCart(product.id, qty); window.location.href = 'cart.html'; });
  document.getElementById('wishBtn').addEventListener('click', function() { const added = toggleWishlist(product.id); this.textContent = (added ? '❤️' : '🤍') + ' Wishlist'; });

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  if (related.length > 0) related.forEach(p => { relatedGrid.innerHTML += productCardHtml(p); });
  else relatedGrid.parentElement.parentElement.style.display = 'none';
});
