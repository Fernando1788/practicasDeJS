//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const num1 = Number(prompt("ingrese el primer numero"));
const num2 = Number(prompt("Ingrese el segundo numero"));
const num3 = Number(prompt("Ingrese el tercer numero"));
let numx = 0;
let mayor = 0;

if (num1 > num2 && num1 > num3) {
  console.log("El primer numero es el mas grande " + (numx = num1));
} else if (num2 > num3) {
  console.log("El segundo numero es el mas grande " + (numx = num2));
} else {
  console.log("el tercer numero es el mas grande " + (numx = num3));
}
