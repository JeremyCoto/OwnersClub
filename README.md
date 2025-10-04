# OwnersClub - Premium British Athletic Wear

A professional, modern e-commerce website for OwnersClub, a premium British sports and athletic wear brand.

## 🎯 Features

- **Dark, Premium Design**: Sophisticated black color palette inspired by luxury athletic brands
- **Fully Functional Shopping Cart**: Add, remove, and manage items with localStorage persistence
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Parallax effects, fade-ins, and smooth scrolling
- **Professional Structure**: Clean, organized codebase with separate CSS and JavaScript files
- **Interactive UI**: All buttons and navigation links are fully functional

## 📁 Project Structure

```
OwnersClub/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles and responsive design
│   ├── js/
│   │   ├── main.js         # Main functionality and interactions
│   │   ├── cart.js         # Shopping cart management
│   │   └── products.js     # Product database and display
│   └── images/             # Image assets folder
│       ├── hero-bg.jpg     # Hero section background (add your image here)
│       └── featured-bg.jpg # Featured banner background (add your image here)
└── README.md               # This file
```

## 🚀 Getting Started

1. **Add Your Images**:
   - Place your hero background image in `assets/images/hero-bg.jpg`
   - Add a featured collection image in `assets/images/featured-bg.jpg`
   - Optionally add product images (currently using placeholders)

2. **Open the Website**:
   - Simply open `index.html` in your web browser
   - No build process or server required!

3. **Customize**:
   - Edit product data in `assets/js/products.js`
   - Modify colors in `assets/css/styles.css` (CSS variables at the top)
   - Update content in `index.html`

## 🎨 Design Inspiration

Inspired by premium athletic brands:
- **Lululemon**: Clean layouts and high-quality imagery
- **Represent**: British streetwear aesthetic and Owners Club branding
- **Vuori**: Performance-focused athletic wear presentation
- **Alo Yoga**: Modern, minimalist design approach

## 🛒 Shopping Cart Features

- Add products to cart with visual feedback
- Adjust quantities with +/- buttons
- Remove items individually
- Persistent cart using localStorage
- Real-time total calculation
- Smooth sidebar animation

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎨 Color Palette

- **Primary Black**: `#0a0a0a`
- **Dark Gray**: `#1a1a1a`
- **Medium Gray**: `#2a2a2a`
- **Light Gray**: `#3a3a3a`
- **White**: `#ffffff`
- **Off-White**: `#f5f5f5`

## 🔧 Customization Tips

### Adding Products
Edit `assets/js/products.js` and add new product objects:

```javascript
{
    id: 13,
    name: "Your Product Name",
    category: "Category",
    price: 99.99,
    image: "path/to/image.jpg",
    section: "new-arrivals", // or "men" or "women"
    gender: "men" // or "women"
}
```

### Changing Colors
Edit CSS variables in `assets/css/styles.css`:

```css
:root {
    --color-black: #0a0a0a;
    --color-dark-gray: #1a1a1a;
    /* etc... */
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 OwnersClub. All rights reserved.

## 🇬🇧 Made in the UK

Proudly representing British athletic wear excellence.
