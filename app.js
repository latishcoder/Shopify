
let currentColor = 'Red';
let currentSize = 'M';

function selectColor(color) {
  currentColor = color;
  document.getElementById('selectedColor').textContent = color;

  // Highlight selected color button
  const colorBtns = document.querySelectorAll('.color-btn');
  colorBtns.forEach(btn => btn.classList.remove('selected'));
  const selectedBtn = Array.from(colorBtns).find(btn =>
    btn.style.backgroundColor.toLowerCase() === color.toLowerCase()
  );
  if (selectedBtn) selectedBtn.classList.add('selected');

  // Optionally, update main image here based on color
  // Example:
  // changeImage(`assets/images/${color.toLowerCase()}-variant.jpg`);
}

    function selectSize(size) {
        const buttons = document.querySelectorAll('.sizes button');
        buttons.forEach(btn => btn.classList.remove('selected'));
        const selectedButton = Array.from(buttons).find(btn => btn.textContent === size);
        if (selectedButton) selectedButton.classList.add('selected');
      }
      
      // Modal logic
      const modal = document.getElementById('sizeChartModal');
      const btn = document.getElementById('sizeChartBtn');
      const closeBtn = modal.querySelector('.close');
      
      btn.onclick = () => modal.style.display = 'flex';
      
      closeBtn.onclick = () => modal.style.display = 'none';
      
      window.onclick = (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      };
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          modal.style.display = 'none';
        }
      });

   // app.js

function changeImage(imageUrl) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageUrl;
  }
  

  const colorButtons = document.querySelectorAll('.color-btn');
  let selectedColors = [];
  
  colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.getAttribute('data-color');
  
      if (selectedColors.includes(color)) {
        selectedColors = selectedColors.filter(c => c !== color);
        btn.classList.remove('selected');
      } else {
        selectedColors.push(color);
        btn.classList.add('selected');
      }
    });
  });
  
  // Compare Colors Modal
  const compareBtn = document.getElementById('compareColorsBtn');
  const compareModal = document.getElementById('compareModal');
  const closeModal = compareModal.querySelector('.close');
  const swatchContainer = document.getElementById('compareSwatches');
  
  compareBtn.addEventListener('click', () => {
    if (selectedColors.length < 2) {
      alert("Please select at least two colors to compare.");
      return;
    }
  
    swatchContainer.innerHTML = "";
    selectedColors.forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'swatch';
      swatch.style.backgroundColor = color.toLowerCase();
      swatchContainer.appendChild(swatch);
    });
  
    compareModal.style.display = 'flex';
  });
  
  closeModal.addEventListener('click', () => {
    compareModal.style.display = 'none';
  });
  
  window.addEventListener('click', e => {
    if (e.target === compareModal) compareModal.style.display = 'none';
  });
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') compareModal.style.display = 'none';
  });

  
  function scrollCarousel(direction) {
    const carousel = document.getElementById('recommendationCarousel');
    const cardWidth = carousel.querySelector('.recommendation-card').offsetWidth + 20; // width + gap
    carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  }

  
  function addToCart(button) {
    const card = button.closest('.product-card');
    const productName = card.getAttribute('data-product');
    alert(`${productName} added to cart!`);
    // You can also push to a cart array or update cart count here
  }
  

  function addBundleToCart() {
    alert("Bundle added to cart: Main Product, Leather Wallet, Canvas Belt");
    // Optional: add logic to push all items to cart array or backend
  }

  
  function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');
  
    contents.forEach(content => {
      content.style.display = content.id === tabId ? 'block' : 'none';
    });
  
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.textContent.replace(/\s/g, '').toLowerCase().includes(tabId));
    });
  }
  