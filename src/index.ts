import {menuPral} from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
import { Vehiculo } from './model/vehiculo'
let marca: string
let modelo: string
let veh: Vehiculo
const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n) {
            case 1:
                console.log('Opción Nuevo Vehículo')
                marca = await leerTeclado('Dame la marca') 
                modelo = await leerTeclado('Dame el modelo')
                veh = new Vehiculo(marca, modelo)
                break
            case 2:
                console.log('Opción mostrar Vehículo')
                console.log(`La marca es: ${veh.marca}`)
                console.log(`El modelo es: ${veh.modelo}`)
                break
            case 3:
                console.log('Opción cambiar modelo')
                modelo = await leerTeclado('Dame el modelo')
                veh.modelo = modelo
                break                
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()



