
const products=[
{id:1,name:'Laptop',price:50000},
{id:2,name:'Phone',price:20000},
{id:3,name:'Headphones',price:2500},
{id:4,name:'Watch',price:3500}
];
const box=document.getElementById('products');
function render(arr){
box.innerHTML='';
arr.forEach(p=>{
box.innerHTML+=`
<div class='col-md-3'>
<div class='card p-3'>
<h5>${p.name}</h5>
<p>₹${p.price}</p>
<button class='btn btn-primary' onclick='addToCart(${p.id})'>Add to Cart</button>
</div></div>`;
});
}
function addToCart(id){
let cart=JSON.parse(localStorage.getItem('cart')||'[]');
cart.push(products.find(p=>p.id===id));
localStorage.setItem('cart',JSON.stringify(cart));
alert('Added Successfully');
}
render(products);
document.getElementById('search').addEventListener('input',e=>{
render(products.filter(p=>p.name.toLowerCase().includes(e.target.value.toLowerCase())));
});
