"use strict";
//Anemic Class 
class Car {
    constructor(id, model, brand) {
        this._brand = brand;
        this._id = id;
        this._model = model;
    }
    get brand() {
        return this._brand;
    }
    get id() {
        return this._id;
    }
    get model() {
        return this._model;
    }
    set brand(data) {
        this._brand = data;
    }
    set id(data) {
        this._id = data;
    }
    set model(data) {
        this._model = data;
    }
}
// Expressividade
//Anemic Class 
class CarExpressive {
    constructor(id, model, brand) {
        this._color = 'gray';
        this._brand = brand;
        this._id = id;
        this._model = model;
    }
    get brand() {
        return this._brand;
    }
    get id() {
        return this._id;
    }
    get model() {
        return this._model;
    }
    set brand(data) {
        this._brand = data;
    }
    set id(data) {
        this._id = data;
    }
    set model(data) {
        this._model = data;
    }
    changeModel(model) {
        return this._model = model;
    }
    changeColor(color) {
        return this._color = color;
    }
}
