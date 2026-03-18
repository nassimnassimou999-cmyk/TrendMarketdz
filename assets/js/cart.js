// Cart functionality script

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }
}

const cart = new Cart();

// Example of adding an item
cart.addItem({ id: 1, name: 'Product 1', price: 29.99 });

console.log(cart.getItems());