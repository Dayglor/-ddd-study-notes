import Product from "../entity/product";

export default class productService {
    static increasePrice(products: Product[], amount: number): void {
        products.forEach(product => {
            product.changePrice((+product.price + amount).toString());
        });
    }
}