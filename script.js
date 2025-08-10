const products=[
  {id:1,name:'Organic Apples (1kg)',price:149,img:'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop'},
  {id:2,name:'Bananas (1 dozen)',price:69,img:'https://images.unsplash.com/photo-1571772805064-207c8435df79?q=80&w=800&auto=format&fit=crop'},
  {id:3,name:'Tomatoes (1kg)',price:59,img:'https://images.unsplash.com/photo-1546470427-e2f1686b3b48?q=80&w=800&auto=format&fit=crop'},
  {id:4,name:'Whole Wheat Bread',price:49,img:'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop'},
  {id:5,name:'Fresh Milk (1L)',price:79,img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'}
];

const grid=document.getElementById('products');
const cartCountEl=document.getElementById('cartCount');
let cartCount=0;

function render(){
  grid.innerHTML=products.map(p=>`
    <article class="card">
      <img src="${p.img}" alt="${p.name}">
      <div class="body">
        <h3>${p.name}</h3>
        <div class="price">₹ ${p.price}</div>
        <button class="btn" data-id="${p.id}">Add to cart</button>
      </div>
    </article>
  `).join('');

  // Delegate clicks for all Add buttons
  grid.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
      cartCount++;
      cartCountEl.textContent = cartCount;
      e.target.textContent = 'Added ✓';
      setTimeout(()=>e.target.textContent='Add to cart', 900);
    }
  }, { once: true });
}

render();
