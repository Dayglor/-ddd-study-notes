"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id, name, email, address) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._address = address;
        this._active = false;
        this.validate();
    }
    validate() {
        return this._name.length > 0 && this._email.length > 0 && this._address.length > 0;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get address() {
        return this._address;
    }
    activate() {
        this._active = true;
    }
    deactivate() {
        this._active = false;
    }
    changeName(name) {
        this._name = name;
    }
}
exports.default = Customer;
let customer = new Customer('1', '', 'fdafds@gd.com', 'asdfasdf');
console.log(customer.name);
