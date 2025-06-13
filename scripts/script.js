// Data for food menu
const foodMenu = [
  {
    id: 'f01',
    name: 'Grilled Peri-Peri Chicken',
    description:
      'Juicy grilled chicken marinated in spicy peri-peri sauce served with sides.',
    price: 120.0,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5817b16a-c842-4936-9f79-1f42e7bceb81.png'
  },
  {
    id: 'f02',
    name: 'Beef Bobotie',
    description:
      'Traditional South African baked dish with curried minced beef topped with egg custard.',
    price: 110.0,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a8425b7a-ca31-4de5-8d58-f06647e49ae3.png'
  },
  {
    id: 'f03',
    name: 'Vegetarian Bunny Chow',
    description:
      'Half loaf of bread filled with spicy vegetable curry – Durban specialty.',
    price: 85.0,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa724084-34c8-4d94-bb4c-d5b06703c0a6.png'
  },
  {
    id: 'f04',
    name: 'Fish & Chips',
    description:
      'Crispy fried fish served with chips and tartar sauce.',
    price: 95.0,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a456c97c-8124-4c6b-9e1a-33d30d5386c2.png'
  },
  {
    id: 'f05',
    name: 'Classic Cheeseburger',
    description:
      'Beef patty with cheese, lettuce, tomato, and burger sauce on a toasted bun.',
    price: 90.0,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52667917-1c82-4b37-912b-d66fb37c5df8.png'
  }
];

// Data for events
const eventList = [
  {
    id: 'e01',
    title: 'Saturday Night DJ Groove',
    description: 'Dance all night with DJ Kwesta spinning the best hits.',
    date: '2024-07-20',
    price: 80.0
  },
  {
    id: 'e02',
    title: 'Live Jazz Evening',
    description: 'Relax and enjoy live jazz music with exquisite cocktails.',
    date: '2024-07-27',
    price: 120.0
  },
  {
    id: 'e03',
    title: 'Reggae Vibes Festival',
    description: 'Celebrate reggae music with local and international artists.',
    date: '2024-08-03',
    price: 150.0
  }
];

// Gallery images
const galleryImages = [
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3673b0da-f998-40e3-ba84-36b6efad6e60.png',
    alt: 'Dimly lit club dance floor with colorful lighting and people dancing'
  },
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f15e5490-12e2-4436-8a2d-1505498dbc87.png',
    alt: 'Close-up of a platter with grilled meat, salad, and side dishes on wooden table'
  },
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d06d2655-04ab-4313-9f50-1c7a3a5626c5.png',
    alt: 'Outdoor restaurant seating area with string lights and wooden tables'
  },
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e4de79e-522f-4168-9afa-ef582aa44f91.png',
    alt: 'DJ performing in the DJ booth with turntables and speakers'
  },
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bdc955e3-6337-4a2c-85e7-bcc38359b018.png',
    alt: 'Cocktail bar with colorful drinks and a bartender serving guests'
  },
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2815578f-0760-42b8-8a97-5af88512bd2f.png',
    alt: 'Group of happy people dancing and enjoying music inside the club'
  }
];

// DOM Elements
const foodListEl = document.getElementById('food-items-list');
const eventsListEl = document.getElementById('event-items-list');
const galleryGridEl = document.getElementById('gallery-images');

// Cart data structure [{id, type: 'food'|'event', name, price, qty}]
let cart = JSON.parse(localStorage.getItem('marupingCart')) || [];

// Render Food Menu
function renderFoodMenu() {
  foodListEl.innerHTML = '';
  foodMenu.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'food-card';
    card.tabIndex = 0;
    card.setAttribute('aria-label', `${item.name}, price R${item.price.toFixed(2)}`);
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name} - ${item.description}" loading="lazy" />
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="price">R${item.price.toFixed(2)}</div>
      <button type="button" data-id="${item.id}" data-type="food" aria-label="Add ${item.name} to cart">Add to Cart</button>
    `;
    foodListEl.appendChild(card);
  });
}

// Render Events
function renderEvents() {
  eventsListEl.innerHTML = '';
  eventList.forEach((event) => {
    const card = document.createElement('article');
    card.className = 'event-card';
    card.tabIndex = 0;
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    card.setAttribute('aria-label', `${event.title} on ${formattedDate}, ticket price R${event.price.toFixed(2)}`);
    card.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <div class="date">${formattedDate}</div>
      <div class="price">Ticket Price: R${event.price.toFixed(2)}</div>
      <button type="button" data-id="${event.id}" data-type="event" aria-label="Purchase ticket for ${event.title}">Buy Ticket</button>
    `;
    eventsListEl.appendChild(card);
  });
}

// Render Gallery
function renderGallery() {
  galleryGridEl.innerHTML = '';
  galleryImages.forEach((img) => {
    const imageEl = document.createElement('img');
    imageEl.className = 'gallery-img';
    imageEl.src = img.src;
    imageEl.alt = img.alt;
    imageEl.loading = 'lazy';
    imageEl.tabIndex = 0;
    galleryGridEl.appendChild(imageEl);
  });
}

// Update cart UI counts
const cartCountEls = [
  document.getElementById('cart-count'),
  document.getElementById('cart-count-mobile')
];
function updateCartCount() {
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  cartCountEls.forEach(el => { el.textContent = totalQty; });
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('marupingCart', JSON.stringify(cart));
  updateCartCount();
}

// Add item to cart
function addToCart(id, type) {
  const catalog = type === 'food' ? foodMenu : eventList;
  const item = catalog.find(x => x.id === id);
  if (!item) return;

  // Check if item is already in cart
  const cartItem = cart.find(x => x.id === id && x.type === type);
  if (cartItem) {
    cartItem.qty += 1;
  } else {
    cart.push({ id: id, type: type, name: item.name, price: item.price, qty: 1 });
  }
  saveCart();
  alert(`${item.name} added to cart.`);
}

// Render Cart Modal Items
const cartModal = document.getElementById('cart-modal');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotalLabel = document.getElementById('cart-total-label');
const checkoutButton = document.getElementById('checkout-button');
const checkoutForm = document.getElementById('checkout-form');
const checkoutSuccess = document.getElementById('checkout-success');

function renderCartItems() {
  cartItemsList.innerHTML = '';
  if (cart.length === 0) {
    cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
    cartTotalLabel.textContent = 'Total: R0.00';
    checkoutButton.disabled = true;
    checkoutForm.hidden = true;
    checkoutSuccess.style.display = 'none';
    return;
  }
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <span class="item-name">${item.name} x${item.qty}</span>
      <span class="item-info">R${(item.price * item.qty).toFixed(2)}</span>
      <button class="remove-item" data-index="${index}" aria-label="Remove one ${item.name} from cart">&times;</button>
    `;
    cartItemsList.appendChild(li);
  });
  cartTotalLabel.textContent = `Total: R${total.toFixed(2)}`;
  checkoutButton.disabled = false;
  checkoutForm.hidden = true;
  checkoutSuccess.style.display = 'none';
}

// Event listeners for cart remove buttons
cartItemsList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-item')) {
    const index = parseInt(e.target.getAttribute('data-index'), 10);
    if (!isNaN(index)) {
      cart[index].qty -= 1;
      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }
      saveCart();
      renderCartItems();
    }
  }
});

// Open and close cart modal
const openCartButtons = document.querySelectorAll('#open-cart-button, #open-cart-button-mobile');
const closeCartButton = document.getElementById('close-cart-button');

openCartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartModal.hidden = false;
    cartModal.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
    renderCartItems();
    // Trap focus in modal
    trapFocus(cartModal);
  });
});
closeCartButton.addEventListener('click', () => {
  cartModal.classList.remove('active');
  setTimeout(() => {
    cartModal.hidden = true;
  }, 300);
  openCartButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
  releaseFocus();
});

// Trap focus within modal for accessibility
let lastFocusedElement = null;
function trapFocus(element) {
  lastFocusedElement = document.activeElement;
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusableElements.length === 0) return;

  const firstEl = focusableElements[0];
  const lastEl = focusableElements[focusableElements.length - 1];

  function handleFocusTrap(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    } else if (e.key === 'Escape') {
      closeCartButton.click();
    }
  }
  element.addEventListener('keydown', handleFocusTrap);
  firstEl.focus();
  element._handleFocusTrap = handleFocusTrap;
}
function releaseFocus() {
  if (lastFocusedElement) lastFocusedElement.focus();
  if (cartModal._handleFocusTrap) {
    cartModal.removeEventListener('keydown', cartModal._handleFocusTrap);
    cartModal._handleFocusTrap = null;
  }
}

// Checkout button opens form
checkoutButton.addEventListener('click', () => {
  checkoutForm.hidden = false;
  checkoutSuccess.style.display = 'none';
  checkoutButton.disabled = true;
  const firstInput = checkoutForm.querySelector('input, select');
  if (firstInput) firstInput.focus();
});

// Show or hide delivery address input based on delivery option
const deliverySelect = document.getElementById('cust-delivery');
const addressContainer = document.getElementById('address-container');
deliverySelect.addEventListener('change', () => {
  if (deliverySelect.value === 'delivery') {
    addressContainer.style.display = 'block';
    addressContainer.querySelector('input').setAttribute('required', 'required');
  } else {
    addressContainer.style.display = 'none';
    addressContainer.querySelector('input').removeAttribute('required');
  }
});

// Handle checkout form submission
checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Basic validation done by browser
  // Here, can simulate sending order and then clear cart
  cart = [];
  saveCart();
  renderCartItems();
  checkoutForm.reset();
  checkoutForm.hidden = true;
  checkoutSuccess.style.display = 'block';
  checkoutButton.disabled = true;
});

// Event delegation for Add to Cart / Buy Ticket buttons
document.body.addEventListener('click', (e) => {
  const target = e.target;
  if (
    target.tagName === 'BUTTON' &&
    (target.hasAttribute('data-id') && target.hasAttribute('data-type'))
  ) {
    const id = target.getAttribute('data-id');
    const type = target.getAttribute('data-type');
    addToCart(id, type);
  }
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileNavMenu = document.getElementById('mobile-nav-menu');
mobileMenuButton.addEventListener('click', () => {
  const isOpen = mobileNavMenu.classList.toggle('show');
  mobileMenuButton.setAttribute('aria-expanded', isOpen.toString());
});

// Initialize UI
renderFoodMenu();
renderEvents();
renderGallery();
updateCartCount();

// Scroll focus to content when navigation clicked for accessibility
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const hash = link.getAttribute('href');
    if (hash && hash.startsWith('#')) {
      e.preventDefault();
      const targetSection = document.querySelector(hash);
      if (targetSection) {
        targetSection.focus({preventScroll: true});
        window.scrollTo({
          top: targetSection.offsetTop - 72,
          behavior: 'smooth'
        });
      }
    }
  });
});
