# OwnersClub - Quick Reference Card

## 🚀 Launch Website
```
Double-click: index.html
```

## 📁 File Locations

### Main Files
- **Homepage**: `index.html`
- **All Styles**: `assets/css/styles.css`
- **Main JS**: `assets/js/main.js`
- **Cart Logic**: `assets/js/cart.js`
- **Products**: `assets/js/products.js`

### Add Images Here
- **Hero Background**: `assets/images/hero-bg.jpg`
- **Featured Banner**: `assets/images/featured-bg.jpg`

## 🎨 Quick Customization

### Change Colors
File: `assets/css/styles.css` (Lines 10-20)
```css
--color-black: #0a0a0a;
--color-white: #ffffff;
```

### Add Products
File: `assets/js/products.js`
```javascript
{
    id: 13,
    name: "Product Name",
    category: "Category",
    price: 99.99,
    section: "new-arrivals",
    gender: "men"
}
```

### Edit Brand Story
File: `index.html` (Line ~90)
Look for: `<section id="about">`

## 🛠️ Common Tasks

### Test Shopping Cart
1. Click "Add to Cart" on any product
2. Click cart icon (top right)
3. Adjust quantities with +/-
4. Refresh page - cart persists!

### Test Mobile View
1. Press `F12` in browser
2. Press `Ctrl+Shift+M`
3. Select device size

### Clear Cart
Open browser console (F12) and type:
```javascript
localStorage.clear()
```

## 📊 Website Sections

1. **Hero** - Full screen intro
2. **New Arrivals** - Latest 4 products
3. **Featured Banner** - Collection highlight
4. **Men's** - Men's products
5. **Women's** - Women's products
6. **About** - Brand story
7. **Values** - 3 core values
8. **Footer** - Links & info

## 🎯 Navigation Links

- `#new-arrivals` → New products
- `#men` → Men's section
- `#women` → Women's section
- `#collections` → Featured banner
- `#about` → About section

## 💡 Pro Tips

✅ **Images**: Use 1920x1080px for backgrounds
✅ **Products**: Add 12 products minimum
✅ **Mobile**: Test on real devices
✅ **Performance**: Keep images under 500KB
✅ **Colors**: Stick to dark theme

## 🐛 Troubleshooting

**Products not showing?**
→ Check browser console (F12)

**Cart not working?**
→ Enable localStorage in browser

**Styles broken?**
→ Hard refresh (Ctrl+F5)

## 📱 Responsive Sizes

- **Desktop**: 1024px+
- **Tablet**: 768-1023px
- **Mobile**: <768px

## 🎨 Color Codes

```
Black:       #0a0a0a
Dark Gray:   #1a1a1a
Medium Gray: #2a2a2a
Light Gray:  #3a3a3a
White:       #ffffff
```

## ⚡ Performance

- Total Size: ~42KB (no images)
- Load Time: <1 second
- No dependencies (except fonts)

## 🔗 Useful Commands

### Open in Browser
```bash
start index.html
```

### View File Structure
```bash
tree /F
```

## 📞 Need More Help?

1. Read `SETUP.md` for detailed setup
2. Read `README.md` for full documentation
3. Read `PROJECT_OVERVIEW.md` for technical details

---

**Quick Start**: Just double-click `index.html` and you're live! 🎉
