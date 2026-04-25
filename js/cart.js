// cart.js
document.addEventListener('DOMContentLoaded', () => {
  initNav('cart');
  renderCart();
});

function renderCart() {
  const cart = getCart();
  const itemsEl = document.getElementById('cartItems');
  const summaryEl = document.getElementById('cartSummary');
  const emptyEl = document.getElementById('cartEmpty');
  const layoutEl = document.getElementById('cartLayout');
  const countTitle = document.getElementById('cartCountTitle');

  if (cart.length === 0) {
    layoutEl.style.display = 'none';
    emptyEl.style.display = 'block';
    countTitle.textContent = '';
    return;
  }

  countTitle.textContent = `(${cart.reduce((s,i)=>s+i.qty,0)} items)`;
  layoutEl.style.display = 'grid';
  emptyEl.style.display = 'none';

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item" id="ci-${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-cat">${item.category}</div>
        <div>
          <span class="cart-item-price">₹${item.price.toLocaleString()}</span>
          <span class="cart-item-old">₹${item.oldPrice.toLocaleString()}</span>
        </div>
        <div class="cart-item-controls">
          <div class="qty-ctrl">
            <button onclick="changeQty(${item.id},-1)">−</button>
            <span id="qty-${item.id}">${item.qty}</span>
            <button onclick="changeQty(${item.id},1)">+</button>
          </div>
          <button class="cart-remove" onclick="removeItem(${item.id})">🗑 Remove</button>
        </div>
      </div>
    </div>`).join('');

  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const origTotal = cart.reduce((s,i) => s + i.oldPrice * i.qty, 0);
  const savings = origTotal - subtotal;
  const delivery = subtotal >= 499 ? 0 : 49;
  const total = subtotal + delivery;

  summaryEl.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row"><span>Subtotal (${cart.reduce((s,i)=>s+i.qty,0)} items)</span><span>₹${subtotal.toLocaleString()}</span></div>
    <div class="summary-row savings"><span>You Save</span><span>−₹${savings.toLocaleString()}</span></div>
    <div class="summary-row"><span>Delivery</span><span>${delivery === 0 ? '<span style="color:var(--success)">FREE</span>' : '₹' + delivery}</span></div>
    <div class="summary-row total"><span>Total</span><span>₹${total.toLocaleString()}</span></div>
    <div class="cart-promo">
      <input type="text" placeholder="Promo code">
      <button onclick="showToast('Promo codes coming soon!','')">Apply</button>
    </div>
    <a href="checkout.html" class="btn btn-primary checkout-btn btn-lg">Proceed to Checkout →</a>
    <p style="text-align:center;font-size:12px;color:var(--text-muted);margin-top:12px">🔒 Safe & Secure Checkout</p>`;
}

window.changeQty = function(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, Math.min(10, item.qty + delta));
  saveCart(cart);
  renderCart();
};

window.removeItem = function(id) {
  removeFromCart(id);
  document.getElementById('ci-' + id)?.remove();
  renderCart();
};
