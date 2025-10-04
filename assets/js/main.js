// Main JavaScript for OwnersClub

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Cart button functionality
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', showCartSidebar);
    }
    
    // Close cart button
    const closeCartBtn = document.getElementById('close-cart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', hideCartSidebar);
    }
    
    // Cart overlay click to close
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', hideCartSidebar);
    }
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        // Toggle menu when clicking hamburger button
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking any menu link
        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnButton = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnButton && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Search functionality
    const searchBtn = document.getElementById('search-btn');
    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchModal.classList.add('active');
            setTimeout(() => searchInput.focus(), 300);
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', function() {
            searchModal.classList.remove('active');
            searchInput.value = '';
            showSearchSuggestions();
        });
    }
    
    // Close search on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
            searchInput.value = '';
            showSearchSuggestions();
        }
    });
    
    // Close search when clicking outside
    searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
            searchInput.value = '';
            showSearchSuggestions();
        }
    });
    
    // Real-time search
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            if (searchTerm.length > 0) {
                performSearch(searchTerm);
            } else {
                showSearchSuggestions();
            }
        });
    }
    
    function showSearchSuggestions() {
        searchResults.innerHTML = `
            <div class="search-suggestions">
                <p class="suggestions-title">Popular searches:</p>
                <div class="suggestion-tags">
                    <span class="suggestion-tag" onclick="searchFromTag('hoodie')">Hoodie</span>
                    <span class="suggestion-tag" onclick="searchFromTag('jacket')">Jacket</span>
                    <span class="suggestion-tag" onclick="searchFromTag('leggings')">Leggings</span>
                    <span class="suggestion-tag" onclick="searchFromTag('joggers')">Joggers</span>
                    <span class="suggestion-tag" onclick="searchFromTag('men')">Men's</span>
                    <span class="suggestion-tag" onclick="searchFromTag('women')">Women's</span>
                </div>
            </div>
        `;
    }
    
    function performSearch(searchTerm) {
        const results = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.category.toLowerCase().includes(searchTerm) ||
                   product.gender.toLowerCase().includes(searchTerm);
        });
        
        if (results.length > 0) {
            searchResults.innerHTML = results.map(product => `
                <div class="search-result-item" onclick="goToProduct(${product.id})">
                    <div class="search-result-icon">OC</div>
                    <div class="search-result-info">
                        <div class="search-result-name">${product.name}</div>
                        <div class="search-result-category">${product.category}</div>
                    </div>
                    <div class="search-result-price">£${product.price.toFixed(2)}</div>
                </div>
            `).join('');
        } else {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <p>No products found for "${searchTerm}"</p>
                    <p>Try searching for: Hoodie, Jacket, Leggings, Joggers, etc.</p>
                </div>
            `;
        }
    }
    
    window.searchFromTag = function(tag) {
        searchInput.value = tag;
        performSearch(tag);
    };
    
    window.goToProduct = function(productId) {
        searchModal.classList.remove('active');
        searchInput.value = '';
        showSearchSuggestions();
        
        setTimeout(() => {
            const productCard = document.querySelector(`[data-product-id="${productId}"]`);
            if (productCard) {
                productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                productCard.style.border = '2px solid white';
                setTimeout(() => {
                    productCard.style.border = '';
                }, 2000);
            }
        }, 300);
    };
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe value cards
    document.querySelectorAll('.value-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Handle escape key to close cart
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideCartSidebar();
    }
});

// Parallax effect for hero and featured sections
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const featuredBanner = document.querySelector('.featured-banner');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (featuredBanner) {
        const featuredOffset = featuredBanner.offsetTop;
        const featuredScroll = scrolled - featuredOffset;
        if (featuredScroll > -window.innerHeight && featuredScroll < window.innerHeight) {
            featuredBanner.style.backgroundPositionY = `${featuredScroll * 0.3}px`;
        }
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
