import { leerTeclado } from '../view/entradaTeclado'
const prueba = async () => {
    let n: string
    n =  await leerTeclado('nmbre: ') 
    console.log(`Tu nombre ${n}`)
}
const prueba2 = async () => {
    await prueba()
    let n: number
    n =  parseInt( await leerTeclado('Dame tu edad')) 
    if (n > 18 ){
        console.log(`Eres mayor de edad por tener ${n} años`)
    }else{
        console.log(`Eres menor de edad por tener ${n} años`)
    }
}
prueba2()
