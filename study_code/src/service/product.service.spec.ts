import Product from "../entity/product";
import productService from "./product.service";

describe('Orderservice unit test', () => {  
    it('should changed price of all products', () => {
        const product1 = new Product('p1', 'product1', '10');
        const product2 = new Product('p2', 'product2', '20');
        const product3 = new Product('p3', 'product3', '30');
        const products = [product1, product2, product3];
        
        productService.increasePrice(products, 10);
        expect(product1.price).toBe('20');
        expect(product2.price).toBe('30');
        expect(product3.price).toBe('40');

    })
});