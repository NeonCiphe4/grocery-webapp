# Grocery Webapp

A minimal, responsive grocery storefront demonstrating product listing and a client-side cart counter. Built with **HTML, CSS, JavaScript** (no backend required).

---

## 1) Architecture
**Type:** Frontend-only static app  
**Data:** Product array inside `script.js`  
**Flow:** `index.html` → loads `style.css` + `script.js` → renders product grid → cart count badge

---

## 2) Project Structure
grocery-webapp/
├─ index.html # Landing page with product grid
├─ style.css # Styles (responsive, card layout)
├─ script.js # Product data + render + cart counter
├─ .gitignore # Ignores node_modules/.env (future)
├─ LICENSE # MIT License
└─ README.md # This file

---

## 3) Pre-Requisites
- Any modern browser (Chrome/Firefox/Edge). No installs required.

---

## 4) Clone & Run
git clone https://github.com/neonciphe4/grocery-webapp.git
cd grocery-webapp
# Open index.html directly, or:
python -m http.server 8000
# Visit http://localhost:8000
