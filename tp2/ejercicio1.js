/*1- Escribir un programa que solicite la edad y si es mayor o igual de 18 años mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido indicarlo en un mensaje.repetir hasta que el usuario cancele*/

//for(let i=0; true; i++){
 while(true){
    const edad = prompt("Ingrese la edad")

    if(edad===null)break;
//falta definir para que sea entre 18 y 65
    if(Number(edad)>=18&&Number(edad)<=65){
        console.log("Puede manejar")
    } else if (Number(edad)<18&&Number(edad)>=0){
        console.log("No puede manejar")
    } else{
        console.log("Numero inválido")
    }

}
console.log("Hasta luego!")

