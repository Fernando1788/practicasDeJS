//8.- Escribe un programa que pida un número y diga si es divisible por 2

let num1 = Number(prompt("ingrese un numero "));
const num2 = 2;
//let resto;

if(num1%num2 === 0) {
    console.log("El numero SI es divisible por 2 ")
} else if(num1 || 0){
    console.log("El numero ingresado es indivisible")

} else {
    console.log("el numero NO es divisible por 2");
}