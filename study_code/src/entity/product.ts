export default class Product {
    constructor(private _id:string, private _name:string,private  _price:string) {
        // this.id = id;
        // this.name = name;
        // this.price = price;

        this.validate();
    }

    get name():string {
        return this._name;
    };

    get id():string {
        return this._id;
    }

    get price():string {
        return this._price;
    }

    validate() {
        if (this._id.length < 1) {
            throw new Error('Product id is required');
        }
        if (this._name.length < 1) {
            throw new Error('Product name is required');
        }

        if (!this._price || this._price.length < 1) {
            throw new Error('Product price is required');
        }

        return true;
    }

    changeName(name:string) {  
        this._name = name;
        this.validate();
    }

    changePrice(price:string) {
        this._price = price;
        this.validate();
    }
}