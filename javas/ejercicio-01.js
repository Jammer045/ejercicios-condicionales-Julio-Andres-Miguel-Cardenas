
// //ejercicio 1

// let number1_1 = prompt ("Ingrese aqui el primer numero del ejercicio 1")

// let number2_1 = prompt ("Ingrese aqui el segundo numero del ejercicio 1")

// if (number1_1>number2_1) {console.log("El primer numero es mayor que el segundo");
    
// }

// //ejercicio 2

// let number1_2 = prompt ("Ingrese aqui el primer numero del ejercicio 2")

// let number2_2 = prompt ("Ingrese aqui el segundo numero del ejercicio 2")

// if (number1_2==number2_2) {console.log("Los numeros son exactamente iguales");
    
// } else if (number1_2<number2_2) {console.log("Los numeros son diferentes");} else if (number1_2>number2_2){console.log("Los numeros son diferentes");}

// //ejercicio 3

// let number1 = prompt ("Ingrese aqui el primer numero del ejercicio 3")

// let number2 = prompt ("Ingrese aqui el segundo numero del ejercicio 3")

// if (number1>number2) {console.log("El primer numero ingresado es mayor");} else if (number1==number2) {console.log("Los numeros son exactamente iguales");} else if (number1<number2) {console.log("El segundo numero es mayor que el primero");}

// //ejercicio 4

// let number1_4 = prompt ("Ingrese aqui el primer numero del ejercicio 4")

// let number2_4 = prompt ("Ingrese aqui el segundo numero del ejercicio 4")

// let number3_4 = prompt ("Ingrese aqui el tercer numero del ejercicio 4")

// if (number1_4<number2_4&&number1_4<number3_4){console.log("El numero mas chico es: el primero");}

// else if (number2_4<number1_4&&number2_4<number3_4) {console.log("El numero mas chico es: el segundo");}

// else if (number3_4<number2_4&&number3_4<number1_4){console.log("El numero mas chico es: el tercero");}

// // ejercicio 5

// let alumno1 = {
//     nombre: "Juan",
//     edad: 17,
//     altura: "150cm"
// }

// let alumno2 = {
//     nombre: "Pepito",
//     edad:18,
//     altura: "170cm"
// }

// if (alumno1.altura>alumno2.altura) {console.log("alumno1 es mas alto que alumno2");
    
// } else {console.log("alumno2 es mas alto que alumno1");}

// if (alumno1.edad>alumno2.edad) {console.log("alumno1 es mas viejo que alumno2");
    
// } else {console.log("alumno2 tiene mas edad que alumno1");
    
// }

// //ejercicio 6

// let edadConductor = prompt ("Ingrese aqui la edad del conductor")

// let alturaConductor = prompt ("Ingrese aqui la altura del conductor")

// let visionConductor = prompt ("Ingrese aqui el resultado del examen optico")

// if (edadConductor>=18&&alturaConductor>="150cm"&&visionConductor>=8) {
//     console.log("El conductor es apto para conducir");
// } else {console.log("El conductor no es apto: Licencia rechazada");}

// // ejercicio 7

// let nombrePersona = prompt ("Ingrese aqui el nombre de la persona")

// let pasePersona = prompt ("La persona tiene pase VIP?")

// let entradaPersona = prompt ("La persona cuenta con boleto de entrada?")

// if (pasePersona=="si"||nombrePersona=="Julio") {console.log("Nos sentimos honrados al contar con su presencia: Bienvenido");
    
// }

// entradaPersona = prompt ("Desea utilizar su pase de entrada?")
    
// if (entradaPersona=="si"){console.log("Le damos la Bienvenida: Pase usted");}

// entradaPersona = prompt ("Le gustaria adquirir un boleto en taquilla?")

// if (entradaPersona=="si"){entradaPersona = prompt("Cuanto dinero lleva consigo?")}


// if (entradaPersona>=1000) {console.log("Adelante puede pasar");
    
// } else {console.log("Un placer haberlo atendido, que le vaya bien :)");
    
// }

// //ejercicio 8

// let numeroSecreto= "5"

// let numeroIngresado = prompt ("Reglas del juego: Intenta descubri el numero secreto (del 1-10), tienes 3 intentosIngrese aqui su numero")

// if (numeroIngresado==numeroSecreto) {console.log("Ganaste haz adivinado el numero: Felicitaciones :)");
    
// } else {

// if (numeroIngresado>numeroSecreto) {console.log("Casi, el numero secreto es menor: Intenta nuevamente (Intentos restantes: 2)");} else if (numeroIngresado<numeroSecreto) {console.log("Casi, pero el numero secreto es superior, intenta nuevamente (intentos resatantes: 2)");
    
// } 

// numeroIngresado = parseInt(prompt ("Ingrese aqui su numero:"))

// if (numeroIngresado==numeroSecreto) {console.log("Ganaste haz adivinado el numero: Felicitaciones :)");

// }

// else {if (numeroIngresado>numeroSecreto) {console.log("Casi, el numero secreto es menor: Intenta nuevamente (Intentos restantes: 1)");
    
// } else if (numeroIngresado<numeroSecreto) {console.log("Casi, pero el numero secreto es superior, intenta nuevamente (intentos resatantes: 1)");
    
// } 

// numeroIngresado = parseInt(prompt ("Ingrese aqui su numero"))

// if (numeroIngresado==numeroSecreto) {console.log("Ganaste: haz adivinado el numero: Felicitaciones :)");
    
// }

// else if (numeroIngresado>numeroSecreto) {console.log("Casi, el numero secreto era menor: Game Over :(");
    
// } else if (numeroIngresado<numeroSecreto) {console.log("Casi, pero el numero secreto era superior: Game over");
    
// } 

//  else {console.log("Game Over");
    
// }
// }
// }



// // ejercicio 9

// let edad = prompt ("Ingrese aqui su edad")

// switch (edad) {
//     case "1": console.log("Eres un infante");
        
//         break;

//         case "2": console.log("Eres un infante");
        
//         break;

//         case "3": console.log("Eres un infante");
        
//         break;

//         case "4": console.log("Eres un infante");
        
//         break;

//         case "5": console.log("Eres un infante");
        
//         break;

//         case "6": console.log("Eres un infante");
        
//         break;

//         case "7": console.log("Eres un infante");
        
//         break;

//         case "8": console.log("Eres un infante");
        
//         break;

//         case "9": console.log("Eres un infante");
        
//         break;

//         case "10": console.log("Eres un infante");
        
//         break;

//         case "111": console.log("Eres un infante");
        
//         break;

//         case "12": console.log("Eres un infante");
        
//         break;

//         case "13": console.log("Eres un adolecente");
        
//         break;

//         case "14": console.log("Eres un adolecente");
        
//         break;

//         case "15": console.log("Eres un adolecente");
        
//         break;

//         case "16": console.log("Eres un adolecente");
        
//         break;

//         case "17": console.log("Eres un adolecente");
        
//         break;

//         case "18": console.log("Eres un adolecente");
        
//         break;

//         case "19": console.log("Eres un chavorruco");
        
//         break;

//         case "20": console.log("Eres un chavorruco");
        
//         break;

//         case "21": console.log("Eres un chavorruco");
        
//         break;

//         case "22": console.log("Eres un chavorruco");
        
//         break;

//         case "23": console.log("Eres un chavorruco");
        
//         break;

//         case "24": console.log("Eres un chavorruco");
        
//         break;

//         case "25": console.log("Eres un chavorruco");
        
//         break;

//         case "26": console.log("Eres un chavorruco");
        
//         break;

//         case "27": console.log("Eres un chavorruco");
        
//         break;

//         case "28": console.log("Eres un chavorruco");
        
//         break;

//         case "29": console.log("Eres un chavorruco");
        
//         break;

//         case "30": console.log("Eres un chavorruco");
        
//         break;

//         case "31": console.log("Eres un chavorruco");
        
//         break;

//         case "32": console.log("Eres un chavorruco");
        
//         break;

//         case "33": console.log("Eres un chavorruco");
        
//         break;

//         case "34": console.log("Eres un chavorruco");
        
//         break;

//         case "35": console.log("Eres un chavorruco");
        
//         break;

//         case "36": console.log("Eres un chavorruco");
        
//         break;

//         case "37": console.log("Eres un chavorruco");
        
//         break;

//         case "38": console.log("Eres un chavorruco");
        
//         break;

//         case "39": console.log("Eres un chavorruco");
        
//         break;

//         case "40": console.log("Eres un chavorruco");
        
//         break;

//         case "41": console.log("Eres un chavorruco");
        
//         break;

//         case "42": console.log("Eres un chavorruco");
        
//         break;

//         case "43": console.log("Eres un chavorruco");
        
//         break;

//         case "44": console.log("Eres un chavorruco");
        
//         break;

//         case "45": console.log("Eres un chavorruco");
        
//         break;

//         case "46": console.log("Eres un anciano");
        
//         break;

//         case "47": console.log("Eres un anciano");
        
//         break;

//         case "48": console.log("Eres un anciano");
        
//         break;

//         case "49": console.log("Eres un anciano");
        
//         break;

//         case "50": console.log("Eres un anciano");
        
//         break;

//         case "51": console.log("Eres un anciano");
        
//         break;

//         case "52": console.log("Eres un anciano");
        
//         break;

//         case "53": console.log("Eres un anciano");
        
//         break;

//         case "54": console.log("Eres un anciano");
        
//         break;

//         case "55": console.log("Eres un anciano");
        
//         break;

//         case "56": console.log("Eres un anciano");
        
//         break;

//         case "57": console.log("Eres un anciano");
        
//         break;

//         case "58": console.log("Eres un anciano");
        
//         break;

//         case "59": console.log("Eres un anciano");
        
//         break;

//         case "60": console.log("Eres un anciano");
        
//         break;

//         case "61": console.log("Eres un anciano");
        
//         break;

//         case "62": console.log("Eres un anciano");
        
//         break;

//         case "63": console.log("Eres un anciano");
        
//         break;

//         case "64": console.log("Eres un anciano");
        
//         break;

//         case "65": console.log("Eres un anciano");
        
//         break;

//         case "66": console.log("Eres un anciano");
        
//         break;

//         case "67": console.log("Eres un anciano");
        
//         break;

//         case "68": console.log("Eres un anciano");
        
//         break;

//         case "69": console.log("Eres un anciano");
        
//         break;

//         case "70": console.log("Eres un anciano");
        
//         break;

//         case "71": console.log("Eres un anciano");
        
//         break;

//         case "72": console.log("Eres un anciano");
        
//         break;

//         case "73": console.log("Eres un anciano");
        
//         break;

//         case "74": console.log("Eres un anciano");
        
//         break;

//         case "75": console.log("Eres un anciano");
        
//         break;

//         case "76": console.log("Eres un anciano");
        
//         break;

//         case "77": console.log("Eres un anciano");
        
//         break;

//         case "78": console.log("Eres un anciano");
        
//         break;

//         case "79": console.log("Eres un anciano");
        
//         break;

//         case "80": console.log("Eres un anciano");
        
//         break;

//         case "81": console.log("Eres un anciano");
        
//         break;

//         case "82": console.log("Eres un anciano");
        
//         break;

//         case "83": console.log("Eres un anciano");
        
//         break;

//         case "84": console.log("Eres un anciano");
        
//         break;

//         case "85": console.log("Eres un anciano");
        
//         break;

//         case "86": console.log("Eres un anciano");
        
//         break;

//         case "87": console.log("Eres un anciano");
        
//         break;

//         case "88": console.log("Eres un anciano");
        
//         break;

//         case "89": console.log("Eres un anciano");
        
//         break;

//         case "90": console.log("Eres un anciano");
        
//         break;

//         case "91": console.log("Eres un anciano");
        
//         break;

//         case "92": console.log("Eres un anciano");
        
//         break;

//         case "93": console.log("Eres un anciano");
        
//         break;

//         case "94": console.log("Eres un anciano");
        
//         break;

//         case "95": console.log("Eres un anciano");
        
//         break;

//         case "96": console.log("Eres un anciano");
        
//         break;

//         case "97": console.log("Eres un anciano");
        
//         break;

//         case "98": console.log("Eres un anciano");
        
//         break;

//         case "99": console.log("Eres un anciano");
        
//         break;

//         case "100": console.log("Eres un anciano");
        
//         break;

//     default: console.log("Realmente tienes esa edad?");
//         break;
//  }

//  // ejercicio 10

// let jugador1 = prompt ("Juguemos al piedra, papel o tijera: Jugador1 elija:")

//  let jugador2 = prompt ("Es el turno del jugado2:")

// if (jugador1=="piedra"&&jugador2=="tijera"){console.log("Gana jugador1")} else if (jugador1=="piedra"&&jugador2=="papel"){console.log("Gana jugador2");}

// if (jugador1=="tijera"&&jugador2=="piedra") {console.log("gana jugador2");} else if (jugador1=="tijera"&&jugador2=="papel"){console.log("Gana jugador1");}

// if (jugador1=="papel"&&jugador2=="piedra") {console.log("Gana jugador1");} else if (jugador1=="papel"&&jugador2=="tijera"){console.log("Gana jugador2");}

//  if (jugador1!="piedra"&&jugador1!="tijera"&&jugador1!="papel") {console.log("Jugador1 un esta haciendo trampa");}

// if (jugador2!="piedra"&&jugador2!="tijera"&&jugador2!="papel") {console.log("Jugador2 un esta haciendo trampa");}

// // ejercicio 11

// let color = prompt ("Elija su color")

// switch (color) {
//     case "blanco": console.log("Falta de color");
        
//         break;

//         case "negro": console.log("Falta de color");
        
//         break;

//         case "verde": console.log("El verde es vida: haz elegido el color de la naturaleza");
        
//         break;

//         case "azul": console.log("Haz elegido el color asociado con el agua");
        
//         break;

//         case "amarillo": console.log("El color del sol: eres un ser de luz");
        
//         break;

//         case "rojo": console.log("Rojo es fuego, es pasion: el color del diablo");
        
//         break;

//         case "marron": console.log("Seguro eres Mexicano: color asociado a la tierra");
        
//        break;

//     default: console.log("Exelente eleccion, no lo habia pensado :o");
//         break;
//  }

// // ejercicio 12

// let digito1 = parseInt (prompt ("Elije el primer digito"))

// let operacion = prompt ("Elija la operacion que desea realizar")

// let digito2 = parseInt (prompt ("Ingrese el segundo numero"))

// let value;

// if (operacion=="+") {value = digito1+digito2
    
//  } else if (operacion=="-") {value = digito1-digito2} else if (operacion=="*"){value= digito1*digito2} else if (operacion=="/"){value = digito1/digito2}

// console.log(value);

// // ejercicio 13

// let dni = {
    
//     Nombre: prompt ("Ingrese aqui su nombre"),

//     Apellidos: prompt ("Ingrese aqui sus apellidos"),

//     Fecha: prompt ("Ingrese aqui su fecha de nacimiento"),

//     Nacionalidad: prompt ("De que nacionalidad es:"),

//     Genero: prompt ("Ingrese aqui su genero:"),

//     Ciudad: prompt ("Lugar de nacimiento")
// }

// let confirmacion = prompt ("Son correctos estos datos")

// if (confirmacion=="si") {console.table (dni) + console.log("El registro fue exitoso");
    
// } else {console.log("solicitud rechazada: vuelva a intentarlo en un mes");
    
// }