import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItem";

let customer = new Customer("John", "Doe", 'email@test', '123456789');
let address = new Address("Leoneta 124", "SP", "São paulo", "03380235");
customer.changeAddress(address);
customer.activate();

const item1 = new OrderItem("Product 1", 22, 10);
const item2 = new OrderItem("Product 2", 33, 20);
const items = [item1, item2];
const order = new Order("1", customer._id, items);

console.log(order)