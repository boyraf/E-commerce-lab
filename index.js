fetch("http://localhost:3000/products")
.then(function (response) {
  return response.json(); 
})
.then(function (data) {
  const characters = document.querySelector('.details');
  

  
  data.forEach(function(products) {
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${products.image}" alt="Avatar" style="width:50%" style="height:50%">
      <div class="container"  >
        <h3><b>${products.name}</b></h3>
        <h3>${products.description}</h3>
        <h3>${products.price}</h3>
        
      </div>
    `;
    

    characters.appendChild(card);
  });
});

