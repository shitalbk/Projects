// Product Class Creation
class Product{
  // title = 'DEFAULT';
  // imageUrl;
  // price;
  // description;

  constructor(title,image,price,desc){
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ShoppingCart{
  items = [];

  addProduct(product){
    this.items.push(product);
    this.totalOutput = `<h2>Total: \$${1}</h2>`;
    
  }
  render(){
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');

    return cartEl;
  }
}

class ProductItem{
  constructor(product){
    this.product = product;
  }
  addToCart(){
    console.log('Adding product to cart...');
    console.log(this.product);
  }
  render(){
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
    <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click',this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList{
  products = [
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
  ];

  constructor(){}
  render(){
    
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for(const prod of this.products){
      const productItem = new ProductItem(prod);
      const prodEL = productItem.render();
      prodList.append(prodEL);
    }
    return prodList;
  }
}

class Shop{
  render(){
    const renderHook = document.getElementById('app');
    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

const shop = new Shop();
shop.render();