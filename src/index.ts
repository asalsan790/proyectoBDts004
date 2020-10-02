import {menuPral} from '../view/menuPral'
import { leerTeclado } from '../view/entradaTeclado'
let n1: number
let n2: number
const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Operación SUMA")
                n1 =  parseInt( await leerTeclado('Dame un número')) 
                n2 =  parseInt( await leerTeclado('Dame otro número'))
                // Controlamos la excepción
                try{
                    console.log(`El resultado es: ${suma(n1, n2)}`)
                }catch(error){
                    console.log('Error: ' + error)
                }
                break
            case 2:
                console.log("Operación Multiplicación")
                n1 =  parseInt( await leerTeclado('Dame un número')) 
                n2 =  parseInt( await leerTeclado('Dame otro número'))
                console.log(`El resultado es: ${multiplica(n1, n2)}`)
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

const multiplica = (n1: number, n2: number): number => n1 * n2
// Lanzamos una excepción
const suma = (n1: number, n2: number): number => {
    let resultado: number
    if (isNaN(n1) || isNaN(n2)) { 
        throw "Algún dato es no númerico" 
    }
    resultado = n1 + n2
    return resultado
}

main()



