// Product Database
const products = [
    // New Arrivals
    {
        id: 1,
        name: "Performance Hoodie",
        category: "Men's Outerwear",
        price: 89.99,
        image: "",
        section: "new-arrivals",
        gender: "men"
    },
    {
        id: 2,
        name: "Essential Training Tee",
        category: "Men's Tops",
        price: 45.99,
        image: "",
        section: "new-arrivals",
        gender: "men"
    },
    {
        id: 3,
        name: "Tech Joggers",
        category: "Men's Bottoms",
        price: 79.99,
        image: "",
        section: "new-arrivals",
        gender: "men"
    },
    {
        id: 4,
        name: "Seamless Sports Bra",
        category: "Women's Tops",
        price: 54.99,
        image: "",
        section: "new-arrivals",
        gender: "women"
    },
    
    // Men's Collection
    {
        id: 5,
        name: "Lightweight Jacket",
        category: "Men's Outerwear",
        price: 129.99,
        image: "",
        section: "men",
        gender: "men"
    },
    {
        id: 6,
        name: "Training Shorts",
        category: "Men's Bottoms",
        price: 49.99,
        image: "",
        section: "men",
        gender: "men"
    },
    {
        id: 7,
        name: "Compression Top",
        category: "Men's Tops",
        price: 59.99,
        image: "",
        section: "men",
        gender: "men"
    },
    {
        id: 8,
        name: "Track Pants",
        category: "Men's Bottoms",
        price: 74.99,
        image: "",
        section: "men",
        gender: "men"
    },
    
    // Women's Collection
    {
        id: 9,
        name: "High-Waist Leggings",
        category: "Women's Bottoms",
        price: 69.99,
        image: "",
        section: "women",
        gender: "women"
    },
    {
        id: 10,
        name: "Cropped Hoodie",
        category: "Women's Outerwear",
        price: 84.99,
        image: "",
        section: "women",
        gender: "women"
    },
    {
        id: 11,
        name: "Training Tank",
        category: "Women's Tops",
        price: 39.99,
        image: "",
        section: "women",
        gender: "women"
    },
    {
        id: 12,
        name: "Performance Jacket",
        category: "Women's Outerwear",
        price: 119.99,
        image: "",
        section: "women",
        gender: "women"
    }
];

// Function to create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : `<div class="product-placeholder">OC</div>`}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">£${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to load products into sections
function loadProducts() {
    // Load New Arrivals (first 4 products)
    const newArrivalsGrid = document.getElementById('new-arrivals-grid');
    if (newArrivalsGrid) {
        const newArrivals = products.filter(p => p.section === 'new-arrivals').slice(0, 4);
        newArrivalsGrid.innerHTML = newArrivals.map(createProductCard).join('');
    }
    
    // Load Men's Collection
    const mensGrid = document.getElementById('mens-grid');
    if (mensGrid) {
        const mensProducts = products.filter(p => p.gender === 'men' && p.section === 'men').slice(0, 4);
        mensGrid.innerHTML = mensProducts.map(createProductCard).join('');
    }
    
    // Load Women's Collection
    const womensGrid = document.getElementById('womens-grid');
    if (womensGrid) {
        const womensProducts = products.filter(p => p.gender === 'women').slice(0, 4);
        womensGrid.innerHTML = womensProducts.map(createProductCard).join('');
    }
}

// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Load products when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProducts);
} else {
    loadProducts();
}
