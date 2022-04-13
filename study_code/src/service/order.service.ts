import Order from "../entity/order";

export default class orderService {
    static getTotal (order: Order[]) {
        return order.reduce((total, order) => {
            return total + order.totalPrice;
        }, 0);
    }
}