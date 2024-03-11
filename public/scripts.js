document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const itemsList = document.getElementById('itemsList');
  
    fetch('/items')
      .then(response => response.json())
      .then(items => {
        itemsList.innerHTML = items.map(item => `<div>${item.name} - ${item.price}</div>`).join('');
      });
  
    itemForm.addEventListener('submit', event => {
      event.preventDefault();
      
      const formData = new FormData(itemForm);
      const newItem = {
        name: formData.get('name'),
        price: formData.get('price')
      };
  
      fetch('/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
      })
      .then(response => response.json())
      .then(items => {
        itemsList.innerHTML = items.map(item => `<div>${item.name} - ${item.price}</div>`).join('');
        itemForm.reset();
      });
    });
  });
  