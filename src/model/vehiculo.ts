export class Vehiculo {
    private _marca: string
    private _modelo: string
    constructor(_marca: string, _modelo: string){
        this._marca = _marca
        this._modelo = _modelo
    }
    get marca(){
        return this._marca
    }
    get modelo(){
        return this._modelo
    }
    set marca(_marca: string){
        this._marca = _marca
    }
    set modelo(_modelo: string){
        this._modelo = _modelo
    }
}

