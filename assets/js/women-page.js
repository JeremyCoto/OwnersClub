// Women's Page JavaScript

// Women's products (8 products)
const womensProducts = [
    {
        id: 101,
        name: "Seamless Sports Bra",
        category: "Women's Tops",
        price: 54.99,
        image: "",
        gender: "women",
        type: "tops"
    },
    {
        id: 102,
        name: "High-Waist Leggings",
        category: "Women's Bottoms",
        price: 69.99,
        image: "",
        gender: "women",
        type: "bottoms"
    },
    {
        id: 103,
        name: "Cropped Hoodie",
        category: "Women's Outerwear",
        price: 84.99,
        image: "",
        gender: "women",
        type: "outerwear"
    },
    {
        id: 104,
        name: "Training Tank",
        category: "Women's Tops",
        price: 39.99,
        image: "",
        gender: "women",
        type: "tops"
    },
    {
        id: 105,
        name: "Performance Jacket",
        category: "Women's Outerwear",
        price: 119.99,
        image: "",
        gender: "women",
        type: "outerwear"
    },
    {
        id: 106,
        name: "Running Shorts",
        category: "Women's Bottoms",
        price: 44.99,
        image: "",
        gender: "women",
        type: "bottoms"
    },
    {
        id: 107,
        name: "Long Sleeve Top",
        category: "Women's Tops",
        price: 59.99,
        image: "",
        gender: "women",
        type: "tops"
    },
    {
        id: 108,
        name: "Yoga Pants",
        category: "Women's Bottoms",
        price: 74.99,
        image: "",
        gender: "women",
        type: "bottoms"
    }
];

let currentFilter = 'all';
let currentSort = 'featured';

// Load women's products
function loadWomensProducts() {
    const grid = document.getElementById('womens-products-grid');
    if (!grid) return;
    
    let filteredProducts = [...womensProducts];
    
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
                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : `<div class="product-placeholder">OC</div>`}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">£${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCartWomens(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Add to cart function for women's page
function addToCartWomens(productId) {
    const product = womensProducts.find(p => p.id === productId);
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
    loadWomensProducts();
    
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            loadWomensProducts();
        });
    });
    
    // Sort select
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            loadWomensProducts();
        });
    }
});
