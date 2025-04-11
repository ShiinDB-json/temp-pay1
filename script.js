// Configuration - Easy to update values
const config = {
  paymentMethods: {
    dana: '081246493375',
	gopay: '081248845231',
    ovo: '081248845231',
    bri: '1234567890',
    bni: '0987654321',
    whatsapp: 'https://wa.me/6281248845231',
    email: 'kzy.help@gmail.com',
    qris: 'https://files.catbox.moe/miaizn.png',
    donationLinks: {
      trakteer: 'https://trakteer.id',
      saweria: 'https://saweria.co',
      buymeacoffee: 'https://www.buymeacoffee.com'
    }
  }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  // Simulate loading
  setTimeout(() => {
    document.getElementById('loading-screen').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('loading-screen').classList.add('hidden');
      document.getElementById('main-content').classList.remove('hidden');
    }, 800);
  }, 2500);

  // Start button click handler
  document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('about-section').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('about-section').classList.add('hidden');
      document.getElementById('payment-container').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('payment-container').style.opacity = '1';
      }, 50);
    }, 500);
  });

  // Setup toggle handlers for payment sections
  const setupToggle = (btnId, contentId) => {
    const btn = document.getElementById(btnId);
    const content = document.getElementById(contentId);
    
    btn.addEventListener('click', () => {
      // Close all other sections first
      ['e-wallet-content', 'bank-content', 'donate-content'].forEach(id => {
        if (id !== contentId) {
          const el = document.getElementById(id);
          el.style.opacity = '0';
          setTimeout(() => el.classList.add('hidden'), 300);
        }
      });
      
      // Toggle current section
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        setTimeout(() => content.style.opacity = '1', 10);
      } else {
        content.style.opacity = '0';
        setTimeout(() => content.classList.add('hidden'), 300);
      }
    });
  };

  setupToggle('e-wallet-btn', 'e-wallet-content');
  setupToggle('bank-btn', 'bank-content');
  setupToggle('donate-btn', 'donate-content');

  // Add cyber terminal effect to header
  const header = document.querySelector('header h1');
  let text = header.textContent;
  header.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      header.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  typeWriter();
});

// Utility Functions
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification(`Copied: ${text}`);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    showNotification('Failed to copy. Please try again.');
  });
}

function openQR() {
  window.open(config.paymentMethods.qris, '_blank');
}

function openLink(url) {
  window.open(url, '_blank');
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'fixed bottom-4 right-4 bg-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Terminal-like console effect
console.log('%cSHIINPAY GATEWAY INITIALIZED', 'color: #00ffff; font-size: 16px; font-weight: bold;');
console.log('%c>> System integrity check complete', 'color: #00ff00;');
console.log('%c>> Encryption protocols enabled', 'color: #00ff00;');
console.log('%c>> Payment processing ready', 'color: #00ff00;');