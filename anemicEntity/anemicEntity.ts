//Anemic Class 

class Car {
    _id: string;
    _model: string;
    _brand: string;

    constructor(id:string,model:string,brand:string){
        this._brand = brand;
        this._id = id;
        this._model = model
    }

    get brand():string {
        return this._brand;
    }
    get id():string {
        return this._id;
    }
    get model():string {
        return this._model;
    }

    set brand(data:string) {
        this._brand = data;
    }
    set id(data:string) {
        this._id = data;
    }
    set model(data:string) {
        this._model = data;
    }
}

// Expressividade
//Anemic Class 

class CarExpressive {
    _id: string;
    _model: string;
    _brand: string;
    _color: string = 'gray';

    constructor(id:string,model:string,brand:string){
        this._brand = brand;
        this._id = id;
        this._model = model
    }

    get brand():string {
        return this._brand;
    }
    get id():string {
        return this._id;
    }
    get model():string {
        return this._model;
    }

    set brand(data:string) {
        this._brand = data;
    }
    set id(data:string) {
        this._id = data;
    }
    set model(data:string) {
        this._model = data;
    }

    changeModel(model:string):string {
        return this._model = model;
    }

    changeColor(color:string):string {
        return this._color = color;
    }
}