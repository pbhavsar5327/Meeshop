// payment.js
let selectedMethod = 'upi';

document.addEventListener('DOMContentLoaded', () => {
  initNav('');
  const cart = getCart();
  if (cart.length === 0) { window.location.href = 'cart.html'; return; }

  const addr = JSON.parse(localStorage.getItem('ms_checkout_addr') || '{}');
  const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const delivery = subtotal >= 499 ? 0 : 49;
  const total = subtotal + delivery;

  document.getElementById('paySummary').innerHTML = `
    <div class="pay-summary">
      <h3>Order Summary</h3>
      ${addr.name ? `<div class="pay-addr"><strong>📦 Delivering to:</strong>${addr.name}<br>${addr.addr1}${addr.addr2 ? ', '+addr.addr2 : ''}<br>${addr.city}, ${addr.state} – ${addr.pin}<br>📞 ${addr.phone}</div>` : ''}
      <div class="pay-row"><span>Subtotal</span><span>₹${subtotal.toLocaleString()}</span></div>
      <div class="pay-row"><span>Delivery</span><span>${delivery===0?'FREE':'₹'+delivery}</span></div>
      <div class="pay-row total"><span>Total Payable</span><span>₹${total.toLocaleString()}</span></div>
      <button class="btn btn-primary pay-now-btn" onclick="placeOrder(${total})">🔒 Pay ₹${total.toLocaleString()}</button>
      <p style="text-align:center;font-size:11px;color:var(--text-muted);margin-top:10px">🔒 256-bit SSL Encrypted Payment</p>
    </div>`;
});

function selectMethod(el) {
  document.querySelectorAll('.pay-option').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  selectedMethod = el.dataset.method;
  document.querySelectorAll('.pay-form').forEach(f => f.style.display = 'none');
  const form = document.getElementById('form-' + selectedMethod);
  if (form) form.style.display = 'block';
}

function placeOrder(total) {
  if (selectedMethod === 'upi') {
    const upi = document.getElementById('upiId')?.value.trim();
    if (!upi || !upi.includes('@')) { showToast('Enter a valid UPI ID (e.g. name@upi)', 'error'); return; }
  } else if (selectedMethod === 'card') {
    const num = document.getElementById('cardNum')?.value.replace(/\s/g,'');
    if (!num || num.length < 16) { showToast('Enter a valid 16-digit card number', 'error'); return; }
    if (!document.getElementById('expiry')?.value.match(/^\d{2}\/\d{2}$/)) { showToast('Enter expiry as MM/YY', 'error'); return; }
    if (!document.getElementById('cvv')?.value.match(/^\d{3}$/)) { showToast('Enter valid 3-digit CVV', 'error'); return; }
  }

  // Simulate processing
  const btn = document.querySelector('.pay-now-btn');
  btn.textContent = '⏳ Processing...';
  btn.disabled = true;

  setTimeout(() => {
    const cart = getCart();
    const addr = JSON.parse(localStorage.getItem('ms_checkout_addr') || '{}');
    const order = saveOrder({ items: cart, address: addr, total, paymentMethod: selectedMethod });
    localStorage.setItem('ms_last_order', JSON.stringify(order));
    saveCart([]);
    window.location.href = 'order-success.html';
  }, 1800);
}
