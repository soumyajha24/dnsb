/**
 * Hindi / English UI strings for DNSB static site.
 * Mark elements with data-i18n="key", data-i18n-html="key", data-i18n-placeholder="key", data-i18n-title="key", data-i18n-aria="key".
 */
(function () {
  const STRINGS = {
    en: {
      'lang.en': 'EN',
      'lang.hi': 'हि',
      'lang.group': 'Choose language',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.rates': 'Rates',
      'nav.downloads': 'Downloads',
      'nav.contact': 'Contact',
      'nav.ib': 'Internet Banking →',
      'nav.ib_short': 'Internet Banking →',
      'nav.kyc': 'KYC Form',
      'nav.menu': 'Open menu',
      'nav.close_menu': 'Close menu',
      'nav.dismiss_notif': 'Dismiss notifications',
      'nav.theme': 'Toggle dark or light mode',

      'header.logo_sub': 'Est. 1969 · Cooperative Bank',
      'header.notif_live': '📢 Live',
      'notif.fd': 'New FD Rates Updated —',
      'notif.fd_link': '555-Day Term Deposit Scheme now active',
      'notif.meethapur': 'Meethapur Branch shifted — 223, Village Meethapur, Badarpur, Delhi-110044',
      'notif.arho': 'ARHO shifted to Admin Office, 3-C/5, Opp Liberty Cinema, New Rohtak Road, Delhi-110005',
      'notif.deaf': 'DEAF Outstanding List (31-12-2025) — Download Now',

      'footer.brand_sub': 'Delhi Nagrik Sehkari Bank Ltd.',
      'footer.tagline': 'Serving Delhi\'s communities since 1969. A co-operative bank built on trust, transparency, and the commitment to empower every section of society.',
      'footer.dicgc': 'Deposits insured up to <strong>₹5,00,000</strong> per customer under DICGC as directed by Reserve Bank of India.',
      'footer.explore': 'Explore',
      'footer.information': 'Information',
      'footer.quick': 'Quick Links',
      'footer.official_about': 'About Us (Official)',
      'footer.profile': 'Profile',
      'footer.auditor': 'Auditor\'s Report',
      'footer.rates_pdf': 'Rates of Interest',
      'footer.ib': 'Internet Banking',
      'footer.kyc': 'KYC Form',
      'footer.cyber': 'Cyber Security',
      'footer.complaint': 'File Complaint',
      'footer.copy': '© 2026 Delhi Nagrik Sehkari Bank Ltd. All rights reserved. | RBI Regulated Co-operative Bank',
      'footer.powered': 'Powered by VMS PVT. LTD.',

      'hero.tag': 'Delhi\'s Trusted Cooperative Bank',
      'hero.title1': 'Banking With',
      'hero.title2': 'Purpose & Precision',
      'hero.desc': 'Delhi Nagrik Sehkari Bank Ltd. — serving the people of Delhi since 1969. Built to uplift economically weaker sections with honest, accessible cooperative banking.',
      'hero.cta_ib': '🔐 Internet Banking',
      'hero.cta_svc': 'Explore Services ↓',
      'hero.cta_emi': '📊 EMI Calculator',
      'hero.trust1': 'DICGC Insured ₹5L',
      'hero.trust2': 'RBI Regulated',
      'hero.trust3': 'Since 1969',
      'hero.card.acct': 'Account Type',
      'hero.card.savings': 'Savings Account',
      'hero.card.ins': 'INSURED AMOUNT PER CUSTOMER',
      'hero.card.founded': 'Founded',
      'hero.card.region': 'Region',
      'hero.card.reg': 'Regulated',
      'hero.mini.scheme': 'Special Scheme',
      'hero.mini.days': '555 Days',
      'hero.mini.fd': 'Term Deposit',
      'hero.mini.now': '✦ Active Now',

      'mq.label': '📢 Notices',
      'mq.deaf': 'DEAF Outstanding as on 31-12-2025',
      'mq.meethapur': 'Meethapur Branch shifted — 223, Village Meethapur, Badarpur, Delhi-110044',
      'mq.arho': 'ARHO shifted to Admin Office, 3-C/5, Opp Liberty Cinema, New Rohtak Road, Delhi-110005',
      'mq.fd': 'Term Deposit Scheme for 555 Days — View Circular',
      'mq.election': 'Election Result 2024 — DNSBL Published',

      'svc.sec_tag': 'What We Offer',
      'svc.sec_title': 'Banking Services Designed for You',
      'svc.sec_sub': 'From everyday savings to flexible loans — comprehensive financial solutions for every section of society.',
      'svc.sav.t': 'Savings & Deposits',
      'svc.sav.d': 'Grow your wealth securely with our range of RBI-compliant deposit accounts.',
      'svc.loan.t': 'Loans',
      'svc.loan.d': 'Affordable loan products for personal, housing and vehicle needs.',
      'svc.cc.t': 'Cash Credit & OD',
      'svc.cc.d': 'Flexible credit facilities for businesses and individuals.',
      'svc.dig.t': 'Digital Products',
      'svc.dig.d': 'Modern banking at your fingertips — access your account anytime.',
      'svc.ten.t': 'Tenders & Empanelment',
      'svc.ten.d': 'Official procurement and empanelment notices for vendors.',
      'svc.kyc.t': 'KYC & Compliance',
      'svc.kyc.d': 'Stay compliant with RBI guidelines. Complete your KYC easily.',
      'svc.link_rates': 'View Rates →',
      'svc.link_loans': 'Loan details (official site) →',
      'svc.link_enquire': 'Enquire →',
      'svc.link_login': 'Login →',
      'svc.link_tenders': 'View Tenders →',
      'svc.link_kyc': 'KYC Form →',

      'svc.aria.sav': 'Savings and deposits — DNSB official services',
      'svc.aria.loan': 'Loans — DNSB official services',
      'svc.aria.cc': 'Cash credit and overdraft — DNSB official services',
      'svc.aria.dig': 'Digital products — DNSB official site',
      'svc.aria.ten': 'Tenders and empanelment — DNSB official site',
      'svc.aria.kyc': 'KYC and compliance — DNSB official site',

      'stat.y': 'Year Established',
      'stat.y_sub': 'Over 55 years of service',
      'stat.dicgc': 'DICGC Insurance Cover',
      'stat.dicgc_sub': 'Per customer, RBI mandated',
      'stat.br': 'Branches',
      'stat.br_sub': 'Across Delhi NCR',
      'stat.svc': 'Core Services',
      'stat.svc_sub': 'Savings, Loans, CC & more',

      'calc.tag': 'Financial Tool',
      'calc.title': 'EMI Loan Calculator',
      'calc.sub': 'Calculate your monthly EMI instantly. Plan your loan before applying.',
      'calc.amt': 'Loan Amount',
      'calc.rate': 'Interest Rate (% p.a.)',
      'calc.tenure': 'Loan Tenure (Years)',
      'calc.emi': 'Monthly EMI',
      'calc.total_paid': 'Total Payable',
      'calc.apply': 'Apply for Loan →',
      'calc.reset': 'Reset',
      'calc.principal': 'Principal Amount',
      'calc.interest_lbl': 'Total Interest',
      'calc.ratio': 'Interest Ratio',

      'dl.sec_tag': 'Documents',
      'dl.sec_title': 'Downloads & Forms',
      'dl.sec_sub': 'All important documents, forms and circulars in one place.',
      'dl.kyc_name': 'KYC Form',
      'dl.kyc_type': 'PDF · Customer',
      'dl.loan_name': 'Loan products & rules',
      'dl.loan_type': 'Official website · Services',
      'dl.fd_name': '555-Day FD Circular',
      'dl.fd_type': 'PDF · Depositors',
      'dl.deaf_name': 'DEAF Outstanding List',
      'dl.deaf_type': 'PDF · 31-12-2025',
      'dl.elec_name': 'Election Result 2024',
      'dl.elec_type': 'PDF · Governance',
      'dl.cyber_name': 'Cyber Security Circular',
      'dl.cyber_type': 'PDF · NCSAM',
      'dl.btn_dl': 'Open',

      'contact.tag': 'Get in Touch',
      'contact.title': 'We\'re Here to Help',
      'contact.sub': 'Contact our offices or send us an email. Our team is ready to assist you with any banking need.',
      'contact.email_btn': '📧 Email Us',
      'contact.open': 'Open Account',

      'page.about.kicker': 'Profile',
      'page.about.title': 'About',
      'page.about.title_x': 'DNSB',
      'page.about.lead': 'Discover the history, mission, and the people behind Delhi Nagrik Sehkari Bank Ltd.',

      'page.svc.tag': 'What we offer',
      'page.svc.title1': 'Bank',
      'page.svc.title2': 'Services',
      'page.svc.lead': 'Premium financial products customized for your dynamic needs. Secure your future with our highly structured cooperative systems and superior interest rates.',

      'page.rates.tag': 'Transparency',
      'page.rates.title1': 'Rates &',
      'page.rates.title2': 'Charges',
      'page.rates.lead': 'Transparent banking with uncompromised integrity. View our latest Service Charges and Interest Rates.',
      'page.rates.tab_charges': 'Service Charges',
      'page.rates.tab_rates': 'Rates of Interest',

      'page.dl.tag': 'Resources',
      'page.dl.title1': 'Official',
      'page.dl.title2': 'Downloads',
      'page.dl.lead': 'Access our latest financial reports, essential bank policies, and customer forms securely.',
      'page.dl.fin': 'Financial Reports & Statements',
      'page.dl.pol': 'Policies & Guidelines',
      'page.dl.forms': 'Customer Forms',
      'page.dl.audit_t': 'Independent Auditor Report & Balance Sheet',
      'page.dl.audit_s': 'For the year ended 31.03.2025',
      'page.dl.ar_t': 'DNSB 36th Annual Report',
      'page.dl.ar_s': 'Financial Year 2024-25',
      'page.dl.griev_t': 'Grievances Redressal Policy',
      'page.dl.griev_s': 'Our commitment to customer resolutions',
      'page.dl.ncsam_t': 'National Cyber Security Awareness',
      'page.dl.ncsam_s': 'Mandatory digital safety guidelines (NCSAM)',
      'page.dl.loan_t': 'Loan products & policies',
      'page.dl.loan_s': 'Summaries and rules on the official DNSB services page',
      'page.dl.kyc_t': 'KYC Form',
      'page.dl.kyc_s': 'Know Your Customer document update form',
      'page.dl.download': 'Download',
      'page.dl.view': 'View online',

      'page.contact.tag': 'Locations & helpline',
      'page.contact.title1': 'Contact',
      'page.contact.title2': '& Branches',
      'page.contact.lead': 'Reach our registered and administrative offices or browse the complete directory of operational branches.',
      'page.ct.tag': 'Get in Touch',
      'page.ct.title1': 'Contact',
      'page.ct.title2': 'Us',
      'page.ct.lead': 'Find all the ways you can reach DNSB — from our corporate offices to a branch near you.',
      'page.ct.back': '← Back to home',
      'page.ct.email': 'Email us',

      'chat.fab': 'Chat with DNSB',
      'chat.close': 'Close chat',
      'chat.name': 'DNSB Assistant',
      'chat.status': 'Online · Powered by AI',
      'chat.ph': 'Ask me anything...',
      'chat.faq1': 'Open Account',
      'chat.faq2': 'Loan Info',
      'chat.faq3': 'Branch Details',
      'chat.faq4': 'DICGC Info',
      'chat.faq5': 'FD Scheme',
      'to_top': 'Back to top',

      'cyber.btn': 'NCSAM PDF Guide',
      'cyber.h': 'National Cyber Security Awareness',
      'cyber.p': 'Your security is our highest priority. To protect your digital assets, adhere strictly to the National Cyber Security Awareness guidelines (NCSAM). Ensure absolute discretion with your credentials.',
    },
    hi: {
      'lang.en': 'EN',
      'lang.hi': 'हि',
      'lang.group': 'भाषा चुनें',

      'nav.home': 'होम',
      'nav.about': 'हमारे बारे में',
      'nav.services': 'सेवाएँ',
      'nav.rates': 'दरें',
      'nav.downloads': 'डाउनलोड',
      'nav.contact': 'संपर्क',
      'nav.ib': 'इंटरनेट बैंकिंग →',
      'nav.ib_short': 'इंटरनेट बैंकिंग →',
      'nav.kyc': 'KYC फॉर्म',
      'nav.menu': 'मेनू खोलें',
      'nav.close_menu': 'मेनू बंद करें',
      'nav.dismiss_notif': 'सूचनाएँ बंद करें',
      'nav.theme': 'लाइट / डार्क मोड',

      'header.logo_sub': 'स्थापना 1969 · सहकारी बैंक',
      'header.notif_live': '📢 लाइव',
      'notif.fd': 'नई FD दरें अपडेट —',
      'notif.fd_link': '555-दिन की अवधि की जमा योजना सक्रिय',
      'notif.meethapur': 'मीतापुर शाखा स्थानांतरित — 223, गाँव मीतापुर, बदरपुर, दिल्ली-110044',
      'notif.arho': 'ARHO स्थानांतरित — प्रशासनिक कार्यालय, 3-C/5, लिबर्टी सिनेमा सामने, नई रोहतक रोड, दिल्ली-110005',
      'notif.deaf': 'DEAF बकाया सूची (31-12-2025) — अभी डाउनलोड करें',

      'footer.brand_sub': 'दिल्ली नागरिक सहकारी बैंक लि.',
      'footer.tagline': '1969 से दिल्ली के समुदायों की सेवा में। विश्वास, पारदर्शिता और समाज के हर वर्ग को सशक्त बनाने का प्रतिबद्ध सहकारी बैंक।',
      'footer.dicgc': 'RBI के निर्देशानुसार DICGC के तहत प्रति ग्राहक <strong>₹5,00,000</strong> तक जमा बीमा।',
      'footer.explore': 'नेविगेशन',
      'footer.information': 'जानकारी',
      'footer.quick': 'त्वरित लिंक',
      'footer.official_about': 'हमारे बारे में (आधिकारिक)',
      'footer.profile': 'प्रोफाइल',
      'footer.auditor': 'लेखा परीक्षक रिपोर्ट',
      'footer.rates_pdf': 'ब्याज दरें',
      'footer.ib': 'इंटरनेट बैंकिंग',
      'footer.kyc': 'KYC फॉर्म',
      'footer.cyber': 'साइबर सुरक्षा',
      'footer.complaint': 'शिकायत दर्ज करें',
      'footer.copy': '© 2026 दिल्ली नागरिक सहकारी बैंक लि. सर्वाधिकार सुरक्षित। | RBI-विनियमित सहकारी बैंक',
      'footer.powered': 'सहयोग: VMS PVT. LTD.',

      'hero.tag': 'दिल्ली का विश्वसनीय सहकारी बैंक',
      'hero.title1': 'बैंकिंग',
      'hero.title2': 'उद्देश्य और सटीकता के साथ',
      'hero.desc': 'दिल्ली नागरिक सहकारी बैंक लि. — 1969 से दिल्ली के लोगों की सेवा में। ईमानदार, सुलभ सहकारी बैंकिंग से आर्थिक रूप से कमजोर वर्ग को सशक्त बनाना।',
      'hero.cta_ib': '🔐 इंटरनेट बैंकिंग',
      'hero.cta_svc': 'सेवाएँ देखें ↓',
      'hero.cta_emi': '📊 EMI कैलकुलेटर',
      'hero.trust1': 'DICGC बीमा ₹5 लाख',
      'hero.trust2': 'RBI विनियमित',
      'hero.trust3': '1969 से',
      'hero.card.acct': 'खाता प्रकार',
      'hero.card.savings': 'बचत खाता',
      'hero.card.ins': 'प्रति ग्राहक बीमित राशि',
      'hero.card.founded': 'स्थापना',
      'hero.card.region': 'क्षेत्र',
      'hero.card.reg': 'विनियमित',
      'hero.mini.scheme': 'विशेष योजना',
      'hero.mini.days': '555 दिन',
      'hero.mini.fd': 'सावधि जमा',
      'hero.mini.now': '✦ अभी सक्रिय',

      'mq.label': '📢 सूचनाएँ',
      'mq.deaf': '31-12-2025 तक DEAF बकाया',
      'mq.meethapur': 'मीतापुर शाखा स्थानांतरित — 223, गाँव मीतापुर, बदरपुर, दिल्ली-110044',
      'mq.arho': 'ARHO स्थानांतरित — प्रशासनिक कार्यालय, 3-C/5, लिबर्टी सिनेमा सामने, नई रोहतक रोड, दिल्ली-110005',
      'mq.fd': '555 दिन की सावधि योजना — परिपत्र देखें',
      'mq.election': 'चुनाव परिणाम 2024 — DNSBL प्रकाशित',

      'svc.sec_tag': 'हम क्या प्रदान करते हैं',
      'svc.sec_title': 'आपके लिए डिज़ाइन की गई बैंकिंग सेवाएँ',
      'svc.sec_sub': 'दैनिक बचत से लचीले ऋण तक — समाज के हर वर्ग के लिए व्यापक वित्तीय समाधान।',
      'svc.sav.t': 'बचत और जमा',
      'svc.sav.d': 'RBI अनुरूप जमा खातों की श्रृंखला से अपनी संपत्ति सुरक्षित रूप से बढ़ाएँ।',
      'svc.loan.t': 'ऋण',
      'svc.loan.d': 'व्यक्तिगत, आवासीय और वाहन आवश्यकताओं के लिए किफायती ऋण उत्पाद।',
      'svc.cc.t': 'कैश क्रेडिट और ओडी',
      'svc.cc.d': 'व्यवसायों और व्यक्तियों के लिए लचीले ऋण सुविधाएँ।',
      'svc.dig.t': 'डिजिटल उत्पाद',
      'svc.dig.d': 'आधुनिक बैंकिंग आपकी उँगलियों पर — कभी भी खाता एक्सेस करें।',
      'svc.ten.t': 'टेंडर और पैनल नियुक्ति',
      'svc.ten.d': 'विक्रेताओं के लिए आधिकारिक खरीद और पैनल नियुक्ति सूचनाएँ।',
      'svc.kyc.t': 'KYC और अनुपालन',
      'svc.kyc.d': 'RBI दिशानिर्देशों के अनुरूप रहें। अपना KYC सरलता से पूर्ण करें।',
      'svc.link_rates': 'दरें देखें →',
      'svc.link_loans': 'ऋण विवरण (आधिकारिक साइट) →',
      'svc.link_enquire': 'पूछताछ →',
      'svc.link_login': 'लॉगिन →',
      'svc.link_tenders': 'टेंडर देखें →',
      'svc.link_kyc': 'KYC फॉर्म →',

      'svc.aria.sav': 'बचत और जमा — DNSB आधिकारिक सेवाएँ',
      'svc.aria.loan': 'ऋण — DNSB आधिकारिक सेवाएँ',
      'svc.aria.cc': 'कैश क्रेडिट और ओवरड्राफ्ट — DNSB आधिकारिक सेवाएँ',
      'svc.aria.dig': 'डिजिटल उत्पाद — DNSB आधिकारिक साइट',
      'svc.aria.ten': 'टेंडर और पैनल — DNSB आधिकारिक साइट',
      'svc.aria.kyc': 'KYC और अनुपालन — DNSB आधिकारिक साइट',

      'stat.y': 'स्थापना वर्ष',
      'stat.y_sub': '55+ वर्ष की सेवा',
      'stat.dicgc': 'DICGC बीमा कवर',
      'stat.dicgc_sub': 'प्रति ग्राहक, RBI नियत',
      'stat.br': 'शाखाएँ',
      'stat.br_sub': 'दिल्ली NCR में',
      'stat.svc': 'मुख्य सेवाएँ',
      'stat.svc_sub': 'बचत, ऋण, CC व अधिक',

      'calc.tag': 'वित्तीय उपकरण',
      'calc.title': 'EMI ऋण कैलकुलेटर',
      'calc.sub': 'मासिक EMI तुरंत गिनें। आवेदन से पहले अपनी योजना बनाएँ।',
      'calc.amt': 'ऋण राशि',
      'calc.rate': 'ब्याज दर (% प्रति वर्ष)',
      'calc.tenure': 'ऋण अवधि (वर्ष)',
      'calc.emi': 'मासिक EMI',
      'calc.total_paid': 'कुल चुकाने योग्य राशि',
      'calc.apply': 'ऋण के लिए आवेदन करें →',
      'calc.reset': 'रीसेट',
      'calc.principal': 'मूल धन',
      'calc.interest_lbl': 'कुल ब्याज',
      'calc.ratio': 'ब्याज अनुपात',

      'dl.sec_tag': 'दस्तावेज़',
      'dl.sec_title': 'डाउनलोड और फॉर्म',
      'dl.sec_sub': 'सभी महत्वपूर्ण दस्तावेज़, फॉर्म और परिपत्र एक स्थान पर।',
      'dl.kyc_name': 'KYC फॉर्म',
      'dl.kyc_type': 'PDF · ग्राहक',
      'dl.loan_name': 'ऋण उत्पाद और नियम',
      'dl.loan_type': 'आधिकारिक वेबसाइट · सेवाएँ',
      'dl.fd_name': '555-दिन FD परिपत्र',
      'dl.fd_type': 'PDF · जमाकर्ता',
      'dl.deaf_name': 'DEAF बकाया सूची',
      'dl.deaf_type': 'PDF · 31-12-2025',
      'dl.elec_name': 'चुनाव परिणाम 2024',
      'dl.elec_type': 'PDF · प्रशासन',
      'dl.cyber_name': 'साइबर सुरक्षा परिपत्र',
      'dl.cyber_type': 'PDF · NCSAM',
      'dl.btn_dl': 'खोलें',

      'contact.tag': 'संपर्क करें',
      'contact.title': 'हम मदद के लिए यहाँ हैं',
      'contact.sub': 'हमारे कार्यालयों से संपर्क करें या ईमेल भेजें। किसी भी बैंकिंग आवश्यकता में हमारी टीम तैयार है।',
      'contact.email_btn': '📧 ईमेल करें',
      'contact.open': 'खाता खोलें',

      'page.about.kicker': 'प्रोफाइल',
      'page.about.title': 'के बारे में',
      'page.about.title_x': 'DNSB',
      'page.about.lead': 'दिल्ली नागरिक सहकारी बैंक लि. के इतिहास, लक्ष्य और लोगों के बारे में जानें।',

      'page.svc.tag': 'हम क्या प्रदान करते हैं',
      'page.svc.title1': 'बैंक',
      'page.svc.title2': 'सेवाएँ',
      'page.svc.lead': 'आपकी गतिशील जरूरतों के लिए प्रीमियम वित्तीय उत्पाद। सहकारी व्यवस्थाओं और बेहतर ब्याज दरों के साथ अपना भविष्य सुरक्षित करें।',

      'page.rates.tag': 'पारदर्शिता',
      'page.rates.title1': 'दरें और',
      'page.rates.title2': 'शुल्क',
      'page.rates.lead': 'अटूट ईमानदारी के साथ पारदर्शी बैंकिंग। नवीनतम सेवा शुल्क और ब्याज दरें देखें।',
      'page.rates.tab_charges': 'सेवा शुल्क',
      'page.rates.tab_rates': 'ब्याज दरें',

      'page.dl.tag': 'संसाधन',
      'page.dl.title1': 'आधिकारिक',
      'page.dl.title2': 'डाउनलोड',
      'page.dl.lead': 'नवीनतम वित्तीय रिपोर्ट, आवश्यक नीतियाँ और ग्राहक फॉर्म सुरक्षित रूप से एक्सेस करें।',
      'page.dl.fin': 'वित्तीय रिपोर्ट और विवरण',
      'page.dl.pol': 'नीतियाँ और दिशानिर्देश',
      'page.dl.forms': 'ग्राहक फॉर्म',
      'page.dl.audit_t': 'स्वतंत्र लेखा परीक्षक रिपोर्ट और बैलेंस शीट',
      'page.dl.audit_s': 'वर्ष 31.03.2025 को समाप्त',
      'page.dl.ar_t': 'DNSB 36वाँ वार्षिक रिपोर्ट',
      'page.dl.ar_s': 'वित्तीय वर्ष 2024-25',
      'page.dl.griev_t': 'शिकायत निवारण नीति',
      'page.dl.griev_s': 'ग्राहक समाधान के प्रति हमारी प्रतिबद्धता',
      'page.dl.ncsam_t': 'राष्ट्रीय साइबर सुरक्षा जागरूकता',
      'page.dl.ncsam_s': 'अनिवार्य डिजिटल सुरक्षा दिशानिर्देश (NCSAM)',
      'page.dl.loan_t': 'ऋण उत्पाद व नीतियाँ',
      'page.dl.loan_s': 'आधिकारिक DNSB सेवा पृष्ठ पर सारांश और नियम',
      'page.dl.kyc_t': 'KYC फॉर्म',
      'page.dl.kyc_s': 'अपने ग्राहक को जानें (KYC) अद्यतन फॉर्म',
      'page.dl.download': 'डाउनलोड',
      'page.dl.view': 'ऑनलाइन देखें',

      'page.contact.tag': 'स्थान और हेल्पलाइन',
      'page.contact.title1': 'संपर्क',
      'page.contact.title2': 'और शाखाएँ',
      'page.contact.lead': 'पंजीकृत और प्रशासनिक कार्यालयों से जुड़ें या सभी शाखाओं की सूची देखें।',
      'page.ct.tag': 'संपर्क करें',
      'page.ct.title1': 'संपर्क',
      'page.ct.title2': 'जानकारी',
      'page.ct.lead': 'DNSB तक पहुँचने के सभी तरीके — कॉर्पोरेट कार्यालयों से लेकर नज़दीकी शाखा तक।',
      'page.ct.back': '← होम पर वापस',
      'page.ct.email': 'ईमेल करें',

      'chat.fab': 'DNSB से चैट',
      'chat.close': 'चैट बंद करें',
      'chat.name': 'DNSB सहायक',
      'chat.status': 'ऑनलाइन · AI सहायित',
      'chat.ph': 'कुछ भी पूछें...',
      'chat.faq1': 'खाता खोलें',
      'chat.faq2': 'ऋण जानकारी',
      'chat.faq3': 'शाखा विवरण',
      'chat.faq4': 'DICGC जानकारी',
      'chat.faq5': 'FD योजना',
      'to_top': 'ऊपर जाएँ',

      'cyber.btn': 'NCSAM PDF मार्गदर्शिका',
      'cyber.h': 'राष्ट्रीय साइबर सुरक्षा जागरूकता',
      'cyber.p': 'आपकी सुरक्षा हमारी सर्वोच्च प्राथमिकता है। अपनी डिजिटल संपत्ति की सुरक्षा के लिए NCSAM दिशानिर्देशों का कड़ाई से पालन करें। अपनी जानकारी गोपनीय रखें।',
    },
  };

  function getDict() {
    const lang = localStorage.getItem('dnsb-lang') || 'en';
    return STRINGS[lang] || STRINGS.en;
  }

  function applyI18n() {
    const lang = localStorage.getItem('dnsb-lang') || 'en';
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
    const dict = STRINGS[lang] || STRINGS.en;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (k && dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const k = el.getAttribute('data-i18n-html');
      if (k && dict[k] != null) el.innerHTML = dict[k];
    });
    ['placeholder', 'title', 'aria-label'].forEach((attr) => {
      const sel = `[data-i18n-${attr}]`;
      document.querySelectorAll(sel).forEach((el) => {
        const k = el.getAttribute(`data-i18n-${attr}`);
        if (k && dict[k] != null) el.setAttribute(attr, dict[k]);
      });
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const k = el.getAttribute('data-i18n-aria');
      if (k && dict[k] != null) el.setAttribute('aria-label', dict[k]);
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const is = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('lang-active', is);
      btn.setAttribute('aria-pressed', is ? 'true' : 'false');
    });
  }

  function setSiteLang(code) {
    const next = code === 'hi' ? 'hi' : 'en';
    localStorage.setItem('dnsb-lang', next);
    applyI18n();
  }

  window.setSiteLang = setSiteLang;
  window.applyI18n = applyI18n;
  window.getI18nDict = getDict;

  document.addEventListener('DOMContentLoaded', () => {
    applyI18n();
  });
})();
