import Address from "./address";
import Customer from "./customer";

describe('Customer unit tests', () => {

    it('should be count 2', () => {
        const number = 2;
        expect(number).toBe(2);
    });

    it('should create a new customer', () => {
        let customer = new Customer("1", 'John', 'Doe@doe');
        expect(customer.id).toBe('1');
        expect(customer.name).toBe('John');
        expect(customer.email).toBe('Doe@doe');
    });

    it('should throw an error when creating a new customer with an empty id', () => {
        expect(() => {
            let customer = new Customer("", 'John', 'Doe@doe');
        }).toThrowError('Customer id is required');
    });

    it('should throw an error when creating a new customer with an empty name', () => {
        expect(() => {
            let customer = new Customer("1", '', 'Doe@doe');
        }).toThrowError('Customer name is required');
    });

    it('should throw an error when creating a new customer with an empty email', () => {
        expect(() => {
            let customer = new Customer("1", 'Doe@doe', '');
        }).toThrowError('Customer email is required');
    });

    it('should throw an error when creating a new customer and active without address', () => {
        expect(() => {
            let customer = new Customer("1", 'John', 'Doe@doe');
            customer.activate();
        }).toThrowError('Customer address is required');
    });

    it('should activate a customer', () => {
        let customer = new Customer("1", 'John', 'Doe@doe');
        const address = new Address('Street', 'City', 'State', '03380200');
        customer.Address = address;

        customer.activate();
        expect(customer.isActive()).toBe(true);
    })
})