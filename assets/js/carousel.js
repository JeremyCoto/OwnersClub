// Carousel functionality
let currentSlide = 0;
const slidesToShow = 3;

// Featured carousel products (using different images)
const carouselProducts = [
    {
        id: 101,
        name: "Elite Running Shoes",
        category: "Footwear",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop"
    },
    {
        id: 102,
        name: "Pro Gym Bag",
        category: "Accessories",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop"
    },
    {
        id: 103,
        name: "Wireless Headphones",
        category: "Accessories",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=800&fit=crop"
    },
    {
        id: 104,
        name: "Water Bottle Pro",
        category: "Accessories",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=800&fit=crop"
    },
    {
        id: 105,
        name: "Yoga Mat Premium",
        category: "Accessories",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=800&fit=crop"
    },
    {
        id: 106,
        name: "Resistance Bands Set",
        category: "Accessories",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&h=800&fit=crop"
    }
];

// Create carousel item HTML
function createCarouselItem(product) {
    return `
        <div class="carousel-item" onclick="addToCart(${product.id})">
            <div class="carousel-item-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="carousel-item-info">
                <div class="carousel-item-category">${product.category}</div>
                <h3 class="carousel-item-name">${product.name}</h3>
                <div class="carousel-item-price">£${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

// Load carousel
function loadCarousel() {
    const carouselTrack = document.getElementById('carousel-track');
    const carouselDots = document.getElementById('carousel-dots');
    
    if (!carouselTrack) return;
    
    // Load carousel items
    carouselTrack.innerHTML = carouselProducts.map(createCarouselItem).join('');
    
    // Create dots
    const numDots = Math.ceil(carouselProducts.length / slidesToShow);
    if (carouselDots) {
        carouselDots.innerHTML = Array(numDots).fill(0).map((_, i) => 
            `<div class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>`
        ).join('');
    }
}

// Navigate carousel
function moveCarousel(direction) {
    const carouselTrack = document.getElementById('carousel-track');
    if (!carouselTrack) return;
    
    const items = carouselTrack.querySelectorAll('.carousel-item');
    const maxSlide = Math.ceil(items.length / slidesToShow) - 1;
    
    currentSlide += direction;
    
    if (currentSlide < 0) currentSlide = maxSlide;
    if (currentSlide > maxSlide) currentSlide = 0;
    
    updateCarousel();
}

// Go to specific slide
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Update carousel position
function updateCarousel() {
    const carouselTrack = document.getElementById('carousel-track');
    if (!carouselTrack) return;
    
    const items = carouselTrack.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 32; // 32px gap
    const offset = -currentSlide * itemWidth * slidesToShow;
    
    carouselTrack.style.transform = `translateX(${offset}px)`;
    carouselTrack.style.transition = 'transform 0.5s ease';
    
    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// Auto-play carousel
let autoplayInterval;

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    loadCarousel();
    
    // Carousel navigation buttons
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            moveCarousel(-1);
            stopAutoplay();
            startAutoplay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            moveCarousel(1);
            stopAutoplay();
            startAutoplay();
        });
    }
    
    // Start autoplay
    startAutoplay();
    
    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoplay);
        carouselContainer.addEventListener('mouseleave', startAutoplay);
    }
});

// Add carousel products to main products array for cart functionality
if (typeof products !== 'undefined') {
    carouselProducts.forEach(product => {
        if (!products.find(p => p.id === product.id)) {
            products.push(product);
        }
    });
}
