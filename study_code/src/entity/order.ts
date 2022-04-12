import OrderItem from "./orderItem";

export default class Order {
  constructor(
    private id: string,
    private customerId: string,
    private items: OrderItem[]
  ) {
      this.validate()
  }

  validate(): void {
    if(this.customerId.length < 10) {
        throw new Error("Customer is required");
    }
    if(this.id.length < 10) {
        throw new Error("Order id is required");
    }
    if (this.items.length === 0) {
      throw new Error("Order must have at least one item");
    }
  }

  get totalPrice (): number {
    return this.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0)
  }
}