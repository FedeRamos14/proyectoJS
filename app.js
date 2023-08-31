let Bienvenida = prompt("Bievenido a Favorita Raciones, ingrese la opción que desea realizar \n1: Averigua el producto para tu mascota \n2: Salir")

function DatosPerro() {
    let nombrePerro = prompt("ingrese el nombre de su mascota")
    console.log("el nombre de la mascota es: " + nombrePerro)


    /* Cachorro (1-2 años) , Adulto (2+ años), Senior (7+ años)*/
    let edadPerro = prompt("¿Que edad tiene tu perro?")
    console.log("Rango de edad de " + nombrePerro + "es de " + edadPerro)

    /* Menos de 12 kg, Entre 12 y 23kg, Entre 23 y 35 kg, más de 35 kg */
    let pesoPerro = prompt("¿Cuanto pesa tu perro?")
    console.log("El rango de peso de " + nombrePerro + "es de " + pesoPerro)
}


function derivadoProductos() {

    let problemaPerro = prompt("¿Cual de los siguientes problemas molesta a tu perro ? \n1: Aburrimiento \n2: Ansiedad \n3: Problemas Digestivos \n4: Higiene Dental \n5: Problemas urinarios \n6: Hidratación \n7: Articulaciones y ligamentos \n8: Alergias/Piel \n9:Ninguno")
    console.log("Problema que presenta el perro: " + problemaPerro)

    switch (problemaPerro) {
        case "aburrimiento":
            alert("El mejor producto para su mascota es: Huesos saborizados para desmenuzar y roer ¡Excelentes opciones para el aburrimiento! ")
            console.log("Producto seleccionado:")
            break;

        case "ansiedad":
            alert("El mejor producto para su mascota es: AmanzaCan para perros, calma la ansiedad de tu mascota a los mordizcos")
            console.log("Producto seleccionado:")
            break;

        case "problemas digestivos":
            alert("El mejor producto para su mascota es: Comida Barf Primocao seleccionada para perro (digestivo) excelente para problemas estomacales")
            console.log("Producto seleccionado:")
            break;

        case "higiene dental":
            alert("El mejor producto para su mascota es: Huesos y orejas de cerdo higienizadas (limpieza bucal), dejara la boca de tu perro fresca, limpia y segura de gérmenes")
            console.log("Producto seleccionado:")
            break;

        case "problemas urinarios":
            alert("El mejor producto para su mascota es: Maxine UI (vejiga y riñones), excelente para problemas de orina para mascota")
            console.log("Producto seleccionado: Maxine UI (vejiga y riñones)")
            break;

        case "hidratacion":
            alert("El mejor producto para su mascota es: AloeVeraPaw para perros, protege las almuadillas de tu perro de los males de cualquier estación")
            console.log("Producto seleccionado:")
            break;

        case "articulaciones":
            alert("El mejor producto para su mascota es:  Glucopet (glucosamina para ligamentos), excelente suplemento para las articulaciones y ligamentos de tus pequeños")
            console.log("Producto seleccionado:")
            break;

        case "alergia/piel":
            alert("El mejor producto para su mascota es: Crema antialerg para perros y chubeats de salmon (Reforzado con Vitamina D), calma la alergia de tu mascota en un instante y suplementa su piel")
            console.log("Producto seleccionado:")
            break;

        case "Ninguno":
            alert("El mejor producto para su mascota es: Racion Maxine Premium (con 47 % de proteina natural), excelente alimento para huesos y pelaje sanos y fuerte")
            console.log("Producto seleccionado:")
            break;

        default:
            alert("Ingrese una opcion valida")
            derivadoProductos()
            break;
    }

}



while (Bienvenida === "1") {

    DatosPerro()
    derivadoProductos()
    let numeroCelular = prompt("Ingresa tu numero celular para que te contactemos")
    console.log("numero de contacto: " + numeroCelular)
    let salida = prompt("¿Desea ingresar otra mascota? De no ser así escriba salir para finalizar el programa")
    if (salida === "salir") {
        break
    } else if (salida === "continuar") {
        DatosPerro()
    }


    if (Bienvenida === "2") {
        break
    }

}