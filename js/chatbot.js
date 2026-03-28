// DNSB chat widget — load after DOM; expects #chat-body, #chat-window, etc.
let chatOpen = false;
const chatBody = document.getElementById('chat-body');

function toggleChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chat-window');
  if (win) win.classList.toggle('open', chatOpen);
  const notif = document.querySelector('.chat-notif');
  if (notif) notif.style.display = 'none';
  if (chatOpen && chatBody && chatBody.children.length === 0) {
    setTimeout(() => addBotMsg('👋 Namaskar! Welcome to DNSB. How can I help you today?'), 400);
    setTimeout(() => addBotMsg('You can ask me about account opening, loans, branch locations, or any other banking queries.'), 1200);
  }
}

function addBotMsg(text, delay) {
  delay = delay || 0;
  if (!chatBody) return;
  const typing = document.createElement('div');
  typing.className = 'chat-msg bot typing';
  typing.innerHTML = '<span class="dot-typing"></span><span class="dot-typing"></span><span class="dot-typing"></span>';
  chatBody.appendChild(typing);
  chatBody.scrollTop = chatBody.scrollHeight;
  setTimeout(() => {
    typing.remove();
    const msg = document.createElement('div');
    msg.className = 'chat-msg bot';
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 900 + delay);
}

function addUserMsg(text) {
  if (!chatBody) return;
  const msg = document.createElement('div');
  msg.className = 'chat-msg user';
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function sendFAQ(el, text) {
  el.style.opacity = '0.4';
  el.style.pointerEvents = 'none';
  addUserMsg(text);
  handleBot(text);
}

function sendChat() {
  const inp = document.getElementById('chat-input');
  if (!inp) return;
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  addUserMsg(text);
  handleBot(text);
}

async function handleBot(msg) {
  const lower = msg.toLowerCase();

  if (lower.includes('branch') || lower.includes('location') || lower.includes('address') || lower.includes('kahan')) {
    addBotMsg('📍 <strong>DNSB Branches:</strong><br/>• <b>Registered Office:</b> 720, Near Ghanta Ghar, Subzi Mandi, Delhi-110007<br/>• <b>Admin Office:</b> 3-C/5, Opp Liberty Cinema, New Rohtak Rd, Delhi-110005<br/>• <b>Meethapur Branch:</b> 223, Village Meethapur, Badarpur, Delhi-110044<br/><br/>📞 Call: 011-45541592');
    return;
  }
  if (lower.includes('open account') || lower.includes('saving') || lower.includes('account kholna')) {
    addBotMsg("🏦 <strong>Account Opening at DNSB:</strong><br/>1️⃣ Visit your nearest branch<br/>2️⃣ Fill the KYC form (download below)<br/>3️⃣ Submit: Aadhaar, PAN, photo, address proof<br/>4️⃣ Initial deposit as required<br/><br/>📄 <a href='https://dnsbltd.com/wp-content/uploads/2018/04/KYC%20FORM.pdf' target='_blank' rel='noopener noreferrer' style='color:var(--accent)'>Download KYC Form →</a>");
    return;
  }
  if (lower.includes('loan') || lower.includes('emi') || lower.includes('rin')) {
    addBotMsg("💰 <strong>DNSB Loan Products:</strong><br/>• Unsecured Loans (no collateral)<br/>• Secured Loans (with collateral)<br/>• Registered Mortgage<br/>• Vehicle Loan<br/>• Home Renovation / Plot Purchase<br/><br/>📋 <a href='https://dnsbltd.com/services/' target='_blank' rel='noopener noreferrer' style='color:var(--accent)'>Official loan details on dnsbltd.com →</a><br/><br/>Use our <a href='index.html#calculator' style='color:var(--accent)' onclick='toggleChat()'>EMI Calculator</a> on the home page to plan your loan. Or visit any branch!");
    return;
  }
  if (lower.includes('dicgc') || lower.includes('insurance') || lower.includes('insure') || lower.includes('deposit safe')) {
    addBotMsg("🛡️ <strong>DICGC Insurance:</strong><br/>Your deposits at DNSB are insured up to <strong>₹5,00,000 per customer</strong> under RBI's Deposit Insurance &amp; Credit Guarantee Corporation (DICGC). This means your money is safe even in unexpected situations.");
    return;
  }
  if (lower.includes('fd') || lower.includes('fixed') || lower.includes('555') || lower.includes('term deposit')) {
    addBotMsg("📈 <strong>555-Day Term Deposit Scheme:</strong><br/>DNSB has an active special FD scheme for 555 days with attractive interest rates.<br/><br/>📄 <a href='https://dnsbltd.com/wp-content/uploads/2025/03/CIR872.pdf' target='_blank' rel='noopener noreferrer' style='color:var(--accent)'>Download Circular →</a><br/><br/>Visit any branch or call 011-45541592 for details.");
    return;
  }
  if (lower.includes('internet banking') || lower.includes('online') || lower.includes('login')) {
    addBotMsg("💻 <strong>Internet Banking:</strong><br/>Access your account at:<br/><a href='https://online.dnsbltd.com/ibs-jsp/faces/pages/user/login.xhtml' target='_blank' rel='noopener noreferrer' style='color:var(--accent)'>online.dnsbltd.com →</a><br/><br/>For login issues, contact: <a href='mailto:info@dnsbltd.com' style='color:var(--accent)'>info@dnsbltd.com</a>");
    return;
  }
  if (lower.includes('kyc') || lower.includes('document')) {
    addBotMsg("📝 <strong>KYC Requirements:</strong><br/>• Aadhaar Card<br/>• PAN Card<br/>• Passport-size photo<br/>• Address proof<br/><br/><a href='https://dnsbltd.com/wp-content/uploads/2018/04/KYC%20FORM.pdf' target='_blank' rel='noopener noreferrer' style='color:var(--accent)'>Download KYC Form →</a>");
    return;
  }
  if (lower.includes('phone') || lower.includes('call') || lower.includes('contact') || lower.includes('email')) {
    addBotMsg("📞 <strong>Contact DNSB:</strong><br/>Phone: <a href='tel:01145541592' style='color:var(--accent)'>011-45541592</a> / <a href='tel:01145062644' style='color:var(--accent)'>011-45062644</a><br/>Email: <a href='mailto:info@dnsbltd.com' style='color:var(--accent)'>info@dnsbltd.com</a><br/>Complaints: <a href='mailto:dnsb.complaint@gmail.com' style='color:var(--accent)'>dnsb.complaint@gmail.com</a>");
    return;
  }

  try {
    const typing = document.createElement('div');
    typing.className = 'chat-msg bot typing';
    typing.innerHTML = '<span class="dot-typing"></span><span class="dot-typing"></span><span class="dot-typing"></span>';
    chatBody.appendChild(typing);
    chatBody.scrollTop = chatBody.scrollHeight;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: 'You are a helpful banking assistant for Delhi Nagrik Sehkari Bank Ltd. (DNSB), a cooperative bank in Delhi established in 1969 by Late Sh. T.C. Gupta. You answer questions about the bank concisely and helpfully. Key facts: Founded 1969, serves economically weaker sections, DICGC insured ₹5L per customer, offices at Subzi Mandi and New Rohtak Road Delhi, phone 011-45541592, email info@dnsbltd.com, internet banking at online.dnsbltd.com. Keep answers under 80 words, friendly, and in simple English or Hindi mix if user speaks Hindi. Use relevant emojis sparingly.',
        messages: [{ role: 'user', content: msg }]
      })
    });
    const data = await res.json();
    typing.remove();
    const text = data.content?.map(b => b.text || '').join('') || "I'm unable to answer that right now. Please call 011-45541592 or email info@dnsbltd.com for assistance.";
    const m = document.createElement('div');
    m.className = 'chat-msg bot';
    m.textContent = text;
    chatBody.appendChild(m);
    chatBody.scrollTop = chatBody.scrollHeight;
  } catch (e) {
    document.querySelectorAll('.chat-msg.bot.typing').forEach(el => el.remove());
    addBotMsg("I couldn't process that right now. Please call <strong>011-45541592</strong> or email <a href='mailto:info@dnsbltd.com' style='color:var(--accent)'>info@dnsbltd.com</a> for help.");
  }
}
