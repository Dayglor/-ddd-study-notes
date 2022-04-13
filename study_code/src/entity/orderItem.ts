export default class OrderItem {
  constructor(
    private _productId: string,
    private _productName: string,
    private _price: number,
    private _quantity: number,
  ) {}

  get productId(): string {
    return this._productId;
  }

  get productName(): string {
    return this._productName;
  }

  get price(): number {
    return this._price;
  }

  get quantity(): number {
    return this._quantity;
  }

  get totalPrice(): number {
    return this._price * this._quantity;
  }
}