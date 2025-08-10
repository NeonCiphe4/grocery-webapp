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

## 5) Role Based Access
This submission demonstrates the User view (public storefront).

User Role: Browse products, add to cart (client-side counter).

Admin Role (planned): Product CRUD, order views.

Access Model (planned): JWT-based auth with role claims.

## 6) Project Flow
User opens index.html

script.js loads in-file product array → renders cards

Clicking Add to cart increments the cart badge (demo)

## 7) Frontend Development
7.1 User Interface (UI) Design
Clean navbar, hero, and card grid.

Click feedback on buttons.

7.2 Responsive Design
CSS Grid with auto-fit(minmax(...)) scales from mobile → desktop.

Sticky header for quick nav.

7.3 Product Catalog
Products are defined as objects { id, name, price, img } in script.js.

7.4 Shopping Cart & Checkout
Cart badge updates on click (client-side demo).

Full checkout/payment intentionally excluded in static scope.

7.5 User Authentication & Account Management (Planned)
Future: Sign up / Sign in / Reset password with JWT sessions.

7.6 Payment Integration (Planned)
Future: Razorpay/Stripe sandbox checkout.

## 8) Backend Development (Planned)
Stack (proposed): Node.js + Express, MongoDB/PostgreSQL

Endpoints: /products, /cart, /orders, /auth

Security: input validation, rate limiting, hashed passwords
(Not required for this static submission.)

## 9) Integration
Current: Frontend runs standalone (no external API).

Future: Connect to Express API, persist cart (LocalStorage), Admin dashboard.
