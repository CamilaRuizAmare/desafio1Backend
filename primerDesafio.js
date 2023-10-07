class ProductManager {
    constructor() {
        this.products = [];
    };

    addProduct(title, description, price, thumbnail, code, stock) {
        const id = this.products.length + 1;
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id
        };
        const codeValidation = this.products.find(data => data.code === code);
        const productValidation = product.title != '' && product.description != '' && product.price != '' && product.thumbnail != '' && product.code != '' && product.stock != ''
        if (!codeValidation && productValidation) {
            this.products.push(product);
            return product;
        } else {
            console.log(`El producto con código ${product.code} ya fue ingresado`);
        }
    };

    getProducts() {
        return this.products;
    };

    getProductById(id) {
        const productByIdValidation = this.products.find(data => data.id === id);
        if (!productByIdValidation) {
            return console.log('Product Not Found');
        }
            else {
                return console.log(productByIdValidation);
            };
    };

};

const productManager = new ProductManager();
/* console.log(productManager.getProducts());
productManager.addProduct('Producto prueba', 'Este es un producto prueba', 200,  'Sin imagen', 'abc123', 25);
console.log(productManager.getProducts());
productManager.addProduct('Producto prueba', 'Este es un producto prueba', 200,  'Sin imagen', 'abc123', 25);
console.log(productManager.getProducts());
productManager.getProductById(1);
productManager.getProductById(20); */


