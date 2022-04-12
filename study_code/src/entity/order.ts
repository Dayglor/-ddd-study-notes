import OrderItem from "./orderItem";

export default class Order {
  constructor(
    private id: string,
    private customerId: string,
    private items: OrderItem[]
  ) {}

  
}