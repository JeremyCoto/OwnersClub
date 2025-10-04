// Collections Page JavaScript

// All collections data
const collectionsData = {
    '247': {
        name: '247 Collection',
        description: 'Performance gear for athletes who train 24/7. Designed for relentless dedication.',
        products: [
            {
                id: 201,
                name: "247 Uprising Oversized T-Shirt",
                category: "247 Collection",
                price: 54.99,
                image: "",
                collection: "247"
            },
            {
                id: 202,
                name: "247 Trail T-Shirt",
                category: "247 Collection",
                price: 49.99,
                image: "",
                collection: "247"
            },
            {
                id: 203,
                name: "247 Trail Sock",
                category: "247 Collection",
                price: 19.99,
                image: "",
                collection: "247"
            },
            {
                id: 204,
                name: "247 Gloves",
                category: "247 Collection",
                price: 34.99,
                image: "",
                collection: "247"
            },
            {
                id: 205,
                name: "247 Performance Hoodie",
                category: "247 Collection",
                price: 89.99,
                image: "",
                collection: "247"
            },
            {
                id: 206,
                name: "247 Training Shorts",
                category: "247 Collection",
                price: 59.99,
                image: "",
                collection: "247"
            },
            {
                id: 207,
                name: "247 Cap",
                category: "247 Collection",
                price: 29.99,
                image: "",
                collection: "247"
            },
            {
                id: 208,
                name: "247 Backpack",
                category: "247 Collection",
                price: 79.99,
                image: "",
                collection: "247"
            }
        ]
    },
    'initial': {
        name: 'Initial Collection',
        description: 'Where it all began. Our founding pieces that started the movement.',
        products: [
            {
                id: 301,
                name: "Initial Signature Tee",
                category: "Initial Collection",
                price: 44.99,
                image: "",
                collection: "initial"
            },
            {
                id: 302,
                name: "Initial Classic Hoodie",
                category: "Initial Collection",
                price: 84.99,
                image: "",
                collection: "initial"
            },
            {
                id: 303,
                name: "Initial Track Pants",
                category: "Initial Collection",
                price: 69.99,
                image: "",
                collection: "initial"
            },
            {
                id: 304,
                name: "Initial Crew Socks",
                category: "Initial Collection",
                price: 16.99,
                image: "",
                collection: "initial"
            },
            {
                id: 305,
                name: "Initial Windbreaker",
                category: "Initial Collection",
                price: 99.99,
                image: "",
                collection: "initial"
            },
            {
                id: 306,
                name: "Initial Shorts",
                category: "Initial Collection",
                price: 49.99,
                image: "",
                collection: "initial"
            },
            {
                id: 307,
                name: "Initial Beanie",
                category: "Initial Collection",
                price: 24.99,
                image: "",
                collection: "initial"
            },
            {
                id: 308,
                name: "Initial Duffle Bag",
                category: "Initial Collection",
                price: 89.99,
                image: "",
                collection: "initial"
            }
        ]
    },
    'winter': {
        name: 'Winter 2025',
        description: 'Cold-weather essentials engineered for peak performance in any condition.',
        products: [
            {
                id: 401,
                name: "Winter Thermal Base Layer",
                category: "Winter 2025",
                price: 64.99,
                image: "",
                collection: "winter"
            },
            {
                id: 402,
                name: "Winter Puffer Jacket",
                category: "Winter 2025",
                price: 189.99,
                image: "",
                collection: "winter"
            },
            {
                id: 403,
                name: "Winter Fleece Joggers",
                category: "Winter 2025",
                price: 79.99,
                image: "",
                collection: "winter"
            },
            {
                id: 404,
                name: "Winter Thermal Gloves",
                category: "Winter 2025",
                price: 39.99,
                image: "",
                collection: "winter"
            },
            {
                id: 405,
                name: "Winter Insulated Vest",
                category: "Winter 2025",
                price: 119.99,
                image: "",
                collection: "winter"
            },
            {
                id: 406,
                name: "Winter Thermal Leggings",
                category: "Winter 2025",
                price: 69.99,
                image: "",
                collection: "winter"
            },
            {
                id: 407,
                name: "Winter Wool Beanie",
                category: "Winter 2025",
                price: 29.99,
                image: "",
                collection: "winter"
            },
            {
                id: 408,
                name: "Winter Neck Warmer",
                category: "Winter 2025",
                price: 24.99,
                image: "",
                collection: "winter"
            }
        ]
    }
};

let currentCollection = '247';

// Load collection products
function loadCollectionProducts() {
    const grid = document.getElementById('collections-products-grid');
    const collectionInfo = document.getElementById('collection-info');
    
    if (!grid || !collectionInfo) return;
    
    const collection = collectionsData[currentCollection];
    
    // Update collection info
    collectionInfo.innerHTML = `
        <h2>${collection.name}</h2>
        <p>${collection.description}</p>
    `;
    
    // Render products with animation
    grid.style.opacity = '0';
    
    setTimeout(() => {
        grid.innerHTML = collection.products.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    ${product.image ? `<img src="${product.image}" alt="${product.name}">` : `<div class="product-placeholder">OC</div>`}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">£${product.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" onclick="addToCartCollection(${product.id})">Add to Cart</button>
                </div>
            </div>
        `).join('');
        
        grid.style.opacity = '1';
    }, 300);
}

// Add to cart function for collections page
function addToCartCollection(productId) {
    let product = null;
    
    // Find product in all collections
    for (const collectionKey in collectionsData) {
        product = collectionsData[collectionKey].products.find(p => p.id === productId);
        if (product) break;
    }
    
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
    loadCollectionProducts();
    
    // Collection tabs
    const collectionTabs = document.querySelectorAll('.collection-tab');
    collectionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            collectionTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentCollection = this.dataset.collection;
            loadCollectionProducts();
        });
    });
});
