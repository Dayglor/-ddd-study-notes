import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItem";

let customer = new Customer("John", "Doe", 'email@test');
let address = new Address("Leoneta 124", "SP", "São paulo", "03380235");
customer.changeAddress(address);
customer.activate();

const item1 = new OrderItem('p1',"Product 1", 22, 10);
const item2 = new OrderItem('p2', "Product 2", 33, 20);
const items = [item1, item2];
const order = new Order("1", customer.id, items);

console.log(order)