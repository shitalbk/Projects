const productList = {
   products: [
    {
      title: 'A Pillow',
      imageUrl: 'https://i5.walmartimages.com/asr/4ac85746-c5ed-4b39-96f6-db9e4c85a62e_1.2f506af536237b234b7d0008bca6e43c.jpeg',
      price: 18.89,
      description: 'A soft pillow'
    },
    {
      title: 'A Headset',
      imageUrl: 'https://exooto.com/wp-content/uploads/2018/09/Lightweight-Aluminum-Headband-Retractable-Mic-in-Line-Remote-Gaming-Headset-Pewdiepie-Edition_1.jpg',
      price: 79.99,
      description: 'A Gaming Headset'
    },
    {
      title: 'A Cup',
      imageUrl: 'https://www.zastavki.com/pictures/1920x1200/2011/Food_Drinks_Cup_of_fresh_coffee_028669_.jpg',
      price: 1.89,
      description: 'A Coffee Cup'
    }
  ],
  render(){
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for(const prod of this.products){
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();