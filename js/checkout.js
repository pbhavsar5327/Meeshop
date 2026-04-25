// checkout.js
document.addEventListener('DOMContentLoaded', () => {
  initNav('');
  const cart = getCart();
  if (cart.length === 0) { window.location.href = 'cart.html'; return; }

  const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const origTotal = cart.reduce((s,i)=>s+i.oldPrice*i.qty,0);
  const savings = origTotal - subtotal;
  const delivery = subtotal >= 499 ? 0 : 49;
  const total = subtotal + delivery;

  document.getElementById('checkoutSummary').innerHTML = `
    <div class="co-summary">
      <h3>Order Summary</h3>
      ${cart.map(i=>`<div class="co-item"><img src="${i.image}" alt="${i.name}"><div class="co-item-info"><div class="co-item-name">${i.name}</div><div class="co-item-qty">Qty: ${i.qty}</div><div class="co-item-price">₹${(i.price*i.qty).toLocaleString()}</div></div></div>`).join('')}
      <div class="co-row"><span>Subtotal</span><span>₹${subtotal.toLocaleString()}</span></div>
      <div class="co-row" style="color:var(--success)"><span>You Save</span><span>−₹${savings.toLocaleString()}</span></div>
      <div class="co-row"><span>Delivery</span><span>${delivery===0?'FREE':'₹'+delivery}</span></div>
      <div class="co-row total"><span>Total</span><span>₹${total.toLocaleString()}</span></div>
      <button class="btn btn-primary proceed-btn" onclick="proceedToPayment()">Continue to Payment →</button>
      <p style="text-align:center;font-size:11px;color:var(--text-muted);margin-top:10px">🔒 100% Secure Checkout</p>
    </div>`;
});

function proceedToPayment() {
  const fields = { fname:'First Name', phone:'Mobile', addr1:'Address', city:'City', state:'State', pin:'PIN Code' };
  for (const [id, label] of Object.entries(fields)) {
    const el = document.getElementById(id);
    if (!el || !el.value.trim()) { showToast(`Please enter ${label}`, 'error'); el?.focus(); return; }
  }
  if (!/^\d{10}$/.test(document.getElementById('phone').value)) { showToast('Enter valid 10-digit mobile number','error'); return; }
  if (!/^\d{6}$/.test(document.getElementById('pin').value)) { showToast('Enter valid 6-digit PIN code','error'); return; }

  const addr = {
    name: document.getElementById('fname').value + ' ' + document.getElementById('lname').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    addr1: document.getElementById('addr1').value,
    addr2: document.getElementById('addr2').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    pin: document.getElementById('pin').value
  };
  localStorage.setItem('ms_checkout_addr', JSON.stringify(addr));
  window.location.href = 'payment.html';
}
