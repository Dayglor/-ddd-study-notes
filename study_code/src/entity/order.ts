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
        throw new Error("Customer is required and must be greater than 10 characters");
    }
    if(this.id.length < 10) {
        throw new Error("Order id is required and must be greater than 10 characters");
    }
    if (this.items.length === 0) {
      throw new Error("Order must have at least one item");
    }

    if(this.items.some(item => item.quantity < 1)) {
        throw new Error("OrderItem quantity must be greater than 0");
    }
  }

  get totalPrice (): number {
    return this.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0)
  }
}