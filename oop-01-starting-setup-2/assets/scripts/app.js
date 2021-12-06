// Product Class Creation
class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // price;
  // description;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId){
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }
  render() {
    const cartEl = this.createRootElement('section','cart');
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }
  addToCart() {
    App.addProductToCart(this.product);
  }
  render() {
    const prodEl = this.createRootElement('li','product-item');
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
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    
  }
}

class ProductList extends Component{
  products = [
    new Product(
      "A Pillow",
      "https://i5.walmartimages.com/asr/4ac85746-c5ed-4b39-96f6-db9e4c85a62e_1.2f506af536237b234b7d0008bca6e43c.jpeg",
      18.89,
      "A soft pillow"
    ),
    new Product(
      "A Headset",
      "https://exooto.com/wp-content/uploads/2018/09/Lightweight-Aluminum-Headband-Retractable-Mic-in-Line-Remote-Gaming-Headset-Pewdiepie-Edition_1.jpg",
      79.99,
      "A Gaming Headset"
    ),
    new Product(
      "A Cup",
      "https://www.zastavki.com/pictures/1920x1200/2011/Food_Drinks_Cup_of_fresh_coffee_028669_.jpg",
      1.89,
      "A Coffee Cup"
    )
  ];

  constructor(renderHookId) {
    super(renderHookId);
  }

  render() {
    this.createRootElement('ul','product-list', [new ElementAttribute('id','prod-list')]);
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, 'prod-list');
      productItem.render();
    }
  }
}

class Shop {
  render() {
    this.cart = new ShoppingCart('app');
    this.cart.render();
    const productList = new ProductList('app');
    productList.render();
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
