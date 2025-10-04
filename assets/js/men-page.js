// Men's Page JavaScript

// Extended men's products
const mensProducts = [
    ...products.filter(p => p.gender === 'men'),
    {
        id: 201,
        name: "Pro Running Shorts",
        category: "Men's Bottoms",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1598032895397-b9c644f3c1c7?w=600&h=800&fit=crop",
        gender: "men",
        type: "bottoms"
    },
    {
        id: 202,
        name: "Muscle Fit Tank",
        category: "Men's Tops",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
        gender: "men",
        type: "tops"
    },
    {
        id: 203,
        name: "Winter Puffer Jacket",
        category: "Men's Outerwear",
        price: 189.99,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=800&fit=crop",
        gender: "men",
        type: "outerwear"
    },
    {
        id: 204,
        name: "Thermal Base Layer",
        category: "Men's Tops",
        price: 64.99,
        image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=800&fit=crop",
        gender: "men",
        type: "tops"
    },
    {
        id: 205,
        name: "Cargo Joggers",
        category: "Men's Bottoms",
        price: 94.99,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
        gender: "men",
        type: "bottoms"
    },
    {
        id: 206,
        name: "Windbreaker Jacket",
        category: "Men's Outerwear",
        price: 109.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
        gender: "men",
        type: "outerwear"
    }
];

let currentFilter = 'all';
let currentSort = 'featured';

// Load men's products
function loadMensProducts() {
    const grid = document.getElementById('mens-products-grid');
    if (!grid) return;
    
    let filteredProducts = [...mensProducts];
    
    // Apply filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => {
            if (currentFilter === 'tops') return p.category.includes('Tops');
            if (currentFilter === 'bottoms') return p.category.includes('Bottoms');
            if (currentFilter === 'outerwear') return p.category.includes('Outerwear');
            return true;
        });
    }
    
    // Apply sort
    if (currentSort === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'newest') {
        filteredProducts.reverse();
    }
    
    // Render products
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">£${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCartMens(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Add to cart function for men's page
function addToCartMens(productId) {
    const product = mensProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showCartSidebar();
    showNotification('Item added to cart!');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadMensProducts();
    
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            loadMensProducts();
        });
    });
    
    // Sort select
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            loadMensProducts();
        });
    }
});
