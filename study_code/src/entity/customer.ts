export default class Customer {

    _id: string;
    _name: string;
    _email: string;
    _address: string;
    _active: boolean;

    constructor(id: string,name: string,email: string,address: string) {
        this._id = id;
        this._name = name;
        this._email = email
        this._address = address;
        this._active = false;
        this.validate();
    }

    validate(): void {
        if(this._name.length <= 0){
            throw new Error('Name is required')
        }

        if(this._email.length <= 0){
            throw new Error('Email is required')
        }

        if(this._address.length <= 0){
            throw new Error('Address is required')
        }
    }

    get id(): string {
        return this._id; 
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get address(): string {
        return this._address
    }

    activate(): void {
        if(this._address.length <= 0){
            throw new Error('Address is required')
        }
        this._active = true;
    }

    deactivate(): void {
        this._active = false
    }

    changeName(name: string): void {
        this._name = name;
        this.validate();
    }
}

let customer = new Customer('1','','fdafds@gd.com','asdfasdf');
console.log(customer.name);