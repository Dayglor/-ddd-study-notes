import Order from "../entity/order";
import OrderItem from "../entity/orderItem";
import orderService from "./order.service";

describe('OderService unit tests', () => {
    it('should get total of all orders', () => {
        const orderItem1 = new OrderItem('1', 'item1', 10, 1);
        const orderItem2 = new OrderItem('2', 'item2', 10, 2);
        const orderItem3 = new OrderItem('3', 'item3', 13, 1);
        const orderItem4 = new OrderItem('4', 'item4', 18, 1);
        const orderItem5 = new OrderItem('5', 'item5', 13, 3);

        const order1 = new Order('o1421412412', 'user1fdsfdsfs', [orderItem1, orderItem2, orderItem3, orderItem4, orderItem5]);
        const order2 = new Order('o1fdsfadsfsd', 'user121241', [orderItem1, orderItem3, orderItem4]);
        const order3 = new Order('o1521512dsafgsd', 'userfdsafds1', [orderItem1, orderItem2, orderItem4, orderItem5]);
        const order4 = new Order('o5412521gfds12451', 'usergsdagsd2311', [ orderItem4, orderItem5]);

        const total = orderService.getTotal([order1, order2, order3, order4]);
        
        const totalPriceExpected = order1.totalPrice + order2.totalPrice + order3.totalPrice + order4.totalPrice;

        expect(total).toEqual(totalPriceExpected);
    });
})