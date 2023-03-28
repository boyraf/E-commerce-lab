fetch("http://localhost:3000/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const characters = document.querySelector('.details');

    data.forEach(function (product) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        
      <img src="${product.image}" alt="Product Image" style="width:50%; height:50%">
      <div class="container">
        <h3><b>${product.name}</b></h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
          <div class="card-actions">
            <button class="edit-button" style="background-color: #4CAF50; color: white; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">Edit</button>
            <button class="delete-button" style="background-color: #f44336; color: white; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
          </div>
        </div>
      `;
      characters.appendChild(card);

      // Add event listeners to the buttons
      const editButton = card.querySelector('.edit-button');
      const deleteButton = card.querySelector('.delete-button');
      editButton.addEventListener('click', () => {
        // Handle edit action
        console.log('Edit clicked for product', product.id);
      });
      deleteButton.addEventListener('click', () => {
        // Handle delete action
        console.log('Delete clicked for product', product.id);
      });
    });
  });
