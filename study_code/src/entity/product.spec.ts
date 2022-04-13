import Product from "./product";

describe('Product unit test', () => {
    it('show throw error when product name is empty', () => {
        expect(() => new Product('prod1', '', '')).toThrowError('Product name is required');
    });

    it('show throw error when product id is empty', () => {
        expect(() => new Product('', 'Prod1', '')).toThrowError('Product id is required');
    });

    it('show throw error when product price is empty', () => {
        expect(() => new Product('prod1', 'Prod1', '')).toThrowError('Product price is required');
    });

    it('should create product', () => {
        const product = new Product('prod1', 'Prod1', '100');
        expect(product.id).toBe('prod1');
        expect(product.name).toBe('Prod1');
        expect(product.price).toBe('100');
    });

    it('should create two products with same id', () => {
        const product1 = new Product('prod1', 'Prod1', '100');
        const product2 = new Product('prod1', 'Prod2', '200');
        expect(product1.id).toBe('prod1');
        expect(product1.name).toBe('Prod1');
        expect(product1.price).toBe('100');
        expect(product2.id).toBe('prod1');
        expect(product2.name).toBe('Prod2');
        expect(product2.price).toBe('200');
    });

    it('should change product name', () => {
        const product = new Product('prod1', 'Prod1', '100');
        product.changeName('Prod2');
        expect(product.name).toBe('Prod2');
    });

    it('should change product price', () => {
        const product = new Product('prod1', 'Prod1', '100');
        product.changePrice('200');
        expect(product.price).toBe('200');
    });
})