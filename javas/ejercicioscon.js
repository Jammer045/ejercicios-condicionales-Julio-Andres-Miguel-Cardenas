let quieroCafe = prompt ("Queres un cafe?")

 if (quieroCafe=="si") {console.log("hay cafe en la alcena?");
    
}

else if (quieroCafe=="no") {console.log("sigo trabajando");
    
}

let hayCafe = prompt ("hayCafe?")

if (hayCafe=="si") {console.log("Me preparo un cafe");
    
}

else if (hayCafe=="no") {console.log("tienes dinero?");
    
}

let hayDinero = prompt ("tienes dinero?")

if (hayDinero=="si") {console.log("hay que ir a la tienda");
    
}

else if (hayDinero=="no") {console.log("no hay cafecito :(");}

let dinero = prompt ("cuanto dinero tienes?")

let alcanza = (dinero-70)

if (alcanza>=0) {console.log("compro un frasco y preparo cafecito :)");
    
}

else if (alcanza<0) {console.log("sigue trabajando");
}

let cafe = prompt ("Que tipo de cafe prefieres?")

switch (cafe) {
    case "normal": console.log("Vas a andar con todo el power");
        
        break;

        case "descafeinado": console.log("No te va a quitar el sueño");
        
        break;
        case "frio": console.log("perfecto para la calor");
        
        break;

    default: console.log("Que gustos tan raros tiene usted");
        break;
}