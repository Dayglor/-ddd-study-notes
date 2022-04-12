import Address from "./address";

export default class Customer {

    private _id: string;
    private _name: string;
    private _email: string;
    private _address!: Address;
    private _active: boolean;

    constructor(id: string, name: string,email: string) {
        this._id = id;
        this._name = name;
        this._email = email
        // this._address = address;
        this._active = false;
        this.validate();
    }

    validate(): void {

        if(this._id === '') {
            throw new Error('Customer id is required')
        }

        if(this._name.length <= 0){
            throw new Error('Customer name is required')
        }

        if(this._email.length <= 0){
            throw new Error('Customer email is required')
        }

        // if(this._address.length <= 0){
        //     throw new Error('Address is required')
        // }
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
        return this._address.toString();
    }

    set Address(address: Address) {
        this._address = address;
    }

    isActive(): boolean {
        return this._active;
    }

    changeAddress(address: Address): void {
        this._address = address;
    }

    activate(): void {
        if(!this._address){
            throw new Error('Customer address is required')
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