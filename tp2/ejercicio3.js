/*/3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/

//while(true){
    var resultado = "";
    do{
        let cadena = prompt("Ingrese una cadena")
        resultado = resultado + cadena;
    }while(resultado!=undefined)
    console.log("Su texto es " + resultado + ("-"))

