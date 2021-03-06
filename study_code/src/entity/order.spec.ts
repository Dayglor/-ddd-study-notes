import Order from "./order";
import OrderItem from "./orderItem";

describe('Order unit test', () => {


    it('should throw error when order has no items', () => {
        expect(() => new Order('oder31231331', 'user11023456546', [])).toThrowError('Order must have at least one item');
    });

    it('should throw error when order has no id', () => {
        expect(() => new Order('', 'user132131321', [])).toThrowError('Order id is required');
    });

    it('should throw error when order has no customer', () => {
        expect(() => new Order('oder42141241414121', '', [])).toThrowError('Customer is required');
    });

    it('should create a valid order', () => {
        const item1 = new OrderItem('item1','productName',  10, 1);
        const item2 = new OrderItem('item2', 'productName2', 13, 3);
        const order = new Order('oder42141241414121', 'user132131321', [item1, item2]);
        expect(order).toBeDefined();
    });

    it('should calculate total price', () => {
        const item1 = new OrderItem('item1','productName',  10, 1);
        const item2 = new OrderItem('item1','productName2',  17, 3);
        const order = new Order('oder42141241414121', 'user132131321', [item1, item2]);
        expect(order.totalPrice).toBe(item1.price * item1.quantity + item2.price * item2.quantity);
    });

    it('should throw error if quantity is not valid', () => {
        const item1 = new OrderItem('item1','productName',  10, 0);
        const item2 = new OrderItem('item1','productName2',  17, 3);
        expect(() => new Order('oder42141241414121', 'user132131321', [item1, item2])).toThrowError('OrderItem quantity must be greater than 0');
    })


    // it('should create an order', () => {
    //     const order = new Order('order1', 'customerId' );
        
    //     expect(order).toBeTruthy();
    // })

});