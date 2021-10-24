// Product Class Creation
class Product{
  title = 'DEFAULT';
  imageUrl;
  price;
  description;

  constructor(title,image,price,desc){
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

const productList = {
   products: [
     new Product(
      'A Pillow',
      'https://i5.walmartimages.com/asr/4ac85746-c5ed-4b39-96f6-db9e4c85a62e_1.2f506af536237b234b7d0008bca6e43c.jpeg',
      18.89,
      'A soft pillow'
     ),
    new Product(
      'A Headset',
      'https://exooto.com/wp-content/uploads/2018/09/Lightweight-Aluminum-Headband-Retractable-Mic-in-Line-Remote-Gaming-Headset-Pewdiepie-Edition_1.jpg',
      79.99,
      'A Gaming Headset'
    ),
    new Product(
      'A Cup',
      'https://www.zastavki.com/pictures/1920x1200/2011/Food_Drinks_Cup_of_fresh_coffee_028669_.jpg',
      1.89,
      'A Coffee Cup'
    )
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