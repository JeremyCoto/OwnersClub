# 📐 OwnersClub - Structure Guide

## 🗂️ Visual File Structure

```
OwnersClub/
│
├── 📄 index.html                 ← YOUR MAIN WEBSITE (open this!)
│
├── 📁 assets/
│   │
│   ├── 📁 css/
│   │   └── 📄 styles.css         ← All visual styling
│   │
│   ├── 📁 js/
│   │   ├── 📄 main.js            ← Main interactions
│   │   ├── 📄 cart.js            ← Shopping cart logic
│   │   └── 📄 products.js        ← Product database
│   │
│   └── 📁 images/
│       ├── 📄 placeholder.txt    ← Instructions
│       ├── 🖼️ hero-bg.jpg        ← ADD YOUR IMAGE HERE
│       └── 🖼️ featured-bg.jpg    ← ADD YOUR IMAGE HERE
│
├── 📄 README.md                  ← Full documentation
├── 📄 SETUP.md                   ← Quick start guide
├── 📄 PROJECT_OVERVIEW.md        ← Technical details
├── 📄 QUICK_REFERENCE.md         ← Handy reference
├── 📄 NEXT_STEPS.md              ← What to do next
└── 📄 STRUCTURE_GUIDE.md         ← This file
```

## 🎯 What Each File Does

### **Main Files**

| File | Purpose | When to Edit |
|------|---------|--------------|
| `index.html` | Your website homepage | Change text, add sections |
| `styles.css` | All colors, fonts, layouts | Change colors, spacing |
| `main.js` | Interactions, animations | Add new features |
| `cart.js` | Shopping cart system | Modify cart behavior |
| `products.js` | Product catalog | Add/edit products |

### **Documentation Files**

| File | What's Inside |
|------|---------------|
| `README.md` | Complete guide to everything |
| `SETUP.md` | Step-by-step setup instructions |
| `PROJECT_OVERVIEW.md` | Technical specifications |
| `QUICK_REFERENCE.md` | Quick tips and commands |
| `NEXT_STEPS.md` | What to do after setup |
| `STRUCTURE_GUIDE.md` | This file - structure overview |

## 🔄 How Files Connect

```
index.html
    ↓
    ├─→ styles.css (makes it look good)
    ├─→ main.js (makes it interactive)
    ├─→ cart.js (handles shopping cart)
    └─→ products.js (loads products)
```

## 📱 Website Structure (What Users See)

```
┌─────────────────────────────────────┐
│         NAVIGATION BAR              │ ← Fixed at top
│  Logo | Menu | Search | Cart        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│                                     │
│         HERO SECTION                │ ← Full screen
│    "ELEVATE YOUR PERFORMANCE"       │    + your image
│                                     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│       NEW ARRIVALS                  │
│   [Product] [Product] [Product]     │ ← 4 products
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│    FEATURED COLLECTION BANNER       │ ← Full width
│      "WINTER COLLECTION 2025"       │    + your image
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│       MEN'S COLLECTION              │
│   [Product] [Product] [Product]     │ ← 4 products
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│      WOMEN'S COLLECTION             │
│   [Product] [Product] [Product]     │ ← 4 products
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         ABOUT SECTION               │
│   Brand Story | Image               │ ← Your story
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│        VALUES SECTION               │
│  [Quality] [Design] [Performance]   │ ← 3 values
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│           FOOTER                    │
│  Links | Info | Copyright           │
└─────────────────────────────────────┘
```

## 🛒 Shopping Cart Flow

```
User clicks "Add to Cart"
         ↓
    cart.js runs
         ↓
  Item added to array
         ↓
  Saved to localStorage
         ↓
   Cart count updates
         ↓
  Notification appears
         ↓
   Cart sidebar opens
```

## 🎨 CSS Organization

The `styles.css` file is organized in sections:

```css
1. RESET & BASE STYLES        ← Lines 1-40
2. NAVIGATION                 ← Lines 41-120
3. HERO SECTION               ← Lines 121-180
4. BUTTONS                    ← Lines 181-220
5. SECTIONS                   ← Lines 221-260
6. PRODUCT GRID               ← Lines 261-350
7. FEATURED BANNER            ← Lines 351-400
8. ABOUT SECTION              ← Lines 401-450
9. VALUES SECTION             ← Lines 451-500
10. FOOTER                    ← Lines 501-580
11. SHOPPING CART             ← Lines 581-720
12. ANIMATIONS                ← Lines 721-750
13. RESPONSIVE DESIGN         ← Lines 751-814
```

## 📊 Product Data Structure

Each product in `products.js` has:

```javascript
{
    id: 1,              // Unique number
    name: "Product",    // Display name
    category: "Type",   // Category label
    price: 99.99,       // Price in £
    image: "",          // Image path (optional)
    section: "men",     // Which section to show
    gender: "men"       // Men's or Women's
}
```

## 🎯 Key Sections in index.html

| Line Range | Section | What's There |
|------------|---------|--------------|
| 1-12 | Head | Meta tags, title, CSS links |
| 14-51 | Navigation | Logo, menu, cart icon |
| 53-61 | Hero | Main headline, CTA button |
| 63-69 | New Arrivals | Product grid |
| 71-78 | Featured Banner | Collection highlight |
| 80-87 | Men's Section | Men's products |
| 89-96 | Women's Section | Women's products |
| 98-115 | About | Brand story |
| 117-145 | Values | 3 value cards |
| 147-189 | Footer | Links and info |
| 191-210 | Cart Sidebar | Shopping cart |
| 212-217 | Scripts | JavaScript files |

## 🔧 Common Customization Points

### **Change Main Colors**
File: `assets/css/styles.css`
Lines: 10-18
```css
--color-black: #0a0a0a;
--color-white: #ffffff;
```

### **Add Products**
File: `assets/js/products.js`
Lines: Add to end of array
```javascript
{id: 13, name: "New Product", ...}
```

### **Edit Hero Text**
File: `index.html`
Lines: 55-58
```html
<h1>YOUR HEADLINE</h1>
<p>Your subtitle</p>
```

### **Update About Story**
File: `index.html`
Lines: 103-107
```html
<p>Your brand story...</p>
```

## 📱 Responsive Breakpoints

```
Desktop (1024px+)
    ↓
Tablet (768-1023px)
    ↓
Mobile (<768px)
```

Each breakpoint adjusts:
- Grid columns
- Font sizes
- Navigation style
- Spacing
- Cart width

## 🎨 Color System

```
Background Layers:
┌─────────────────────┐
│ #0a0a0a (Darkest)   │ ← Body background
│  ┌──────────────┐   │
│  │ #1a1a1a      │   │ ← Cards
│  │  ┌────────┐  │   │
│  │  │ #2a2a2a│  │   │ ← Borders
│  │  └────────┘  │   │
│  └──────────────┘   │
└─────────────────────┘

Text Colors:
#ffffff → Main text (white)
#f5f5f5 → Secondary text (off-white)
```

## 🚀 Loading Sequence

When page loads:

```
1. HTML loads
2. CSS loads → Page styled
3. Google Fonts load → Typography ready
4. products.js loads → Products defined
5. cart.js loads → Cart initialized
6. main.js loads → Interactions active
7. Page fade-in animation
8. User can interact!
```

## 💾 Data Storage

```
Browser localStorage:
    ↓
"ownersclub_cart"
    ↓
JSON array of cart items
    ↓
Persists between sessions
```

## 🎯 Quick Edit Guide

**Want to change...?**

| Change | File | Section |
|--------|------|---------|
| Logo text | index.html | Line 18 |
| Hero headline | index.html | Line 55 |
| Colors | styles.css | Lines 10-18 |
| Products | products.js | Entire file |
| About text | index.html | Lines 103-107 |
| Footer links | index.html | Lines 150-180 |

## 📐 Design Grid System

```
Container: 1400px max-width
    ↓
Padding: 2rem (32px) on sides
    ↓
Product Grid: Auto-fill, min 300px
    ↓
Gap: 2rem (32px) between items
```

## 🎨 Typography Scale

```
Hero Title:     4rem (64px)
Section Title:  2.5rem (40px)
Product Name:   1.1rem (17.6px)
Body Text:      1rem (16px)
Small Text:     0.85rem (13.6px)
```

## ✅ File Checklist

**Core Files (Required):**
- ✅ index.html
- ✅ assets/css/styles.css
- ✅ assets/js/main.js
- ✅ assets/js/cart.js
- ✅ assets/js/products.js

**Optional Files (Recommended):**
- 🖼️ assets/images/hero-bg.jpg
- 🖼️ assets/images/featured-bg.jpg
- 🖼️ Product images

**Documentation (Helpful):**
- ✅ README.md
- ✅ SETUP.md
- ✅ All other .md files

---

## 🎯 Remember

**The website works perfectly RIGHT NOW** - even without images!

Just open `index.html` and start exploring. Add images and customize content at your own pace.

**Everything is connected and working together to create your professional OwnersClub website! 🚀**
