const producto = {
    nombre: 'Harina de Trigo',
    precio: 1800,
    peso: 1000,
    marca: 'Alimentos 1',
    tipo: 'Harinas'
}
//Opcion 1 para obtener valores de OBJETOS
//let precio = producto['precio'];
//let peso = producto.peso
// console.log("Precio", precio);
// console.log("peso", peso);

//Opcion 2 para obtener valores
let { nombre, precio, peso } = producto

//Destructuring de arreglos
const nombres = ["José", "María", "Jesús", "Juan"]

//Opción uno para obtener valores de un arreglo
let primero = nombres[2]

//Opción dos para obtener valores de un arreglo 
let [,segundo,tercero ] = nombres //la coma es para representar el primer elemento, si quieres acceder al 4to entonces hay que poner 3 comas

//para almacenar se usa el "...restoElementos", y muestra todos los indices que no se declararon

const otrosNombres = ["Carlos", "Pedro"]
const apellidos = ["Perez", "Gonzalez"]

//Opción uno para concatenar arreglos
//const nuevosNombres = nombres.concat(otrosNombres)

//Opción dos para concatenar arreglos
const nuevosNombres = [...nombres, ...otrosNombres, ...apellidos]
console.log(nuevosNombres);



