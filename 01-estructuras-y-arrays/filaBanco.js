let fila = ["Carlos", "Maria", "Jorge"];
let continuarllamando = true;

while (continuarllamando) {
    let opcion = Number(prompt("Seleccionar Opcion: \n" +
        "1. Ingresar nombre del siguiente turno. \n" +
        "2. Atender al siguiente en espera. \n" +
        "3. Ingrese nro de la persona que se retira. \n" +
        "4. Salir."
    ));

    switch (opcion) {
        case 1:
            let cliente = prompt("Ingrese nombre del cliente.");
            fila.push(cliente);
            alert("ingresaste a " + cliente + " a la fila de espera.");
            break;
        case 2:
            if (fila.length === 0) {
                alert("No hay personas en espera.")
            } else {
                let siguiente = fila.shift()
                alert("Atendiendo ahora a: " + siguiente + ".");
            }
            break;
        case 3:
            if (fila.length === 0) {
                alert("No hay personas en espera.")
            } else {
                let filaNumerada = "Fila de espera: \n";
                fila.forEach(function (nombre, indice) {
                    filaNumerada += (indice + 1) + ". " + (nombre) + ".\n"
                });
                let numeroPersona = Number(prompt("Ingrese el numero de la persona que se retira: \n" + filaNumerada));
                let indicePersona = numeroPersona - 1;
                if (indicePersona >= 0 && indicePersona < fila.length) {
                    let personaRetirada = fila.splice(indicePersona, 1);
                    alert("Se retiro: " + personaRetirada + " de la fila de espera.");
                } else {
                    alert("Numero de persona no valido.");
                }
            }
            break;
        case 4:
            continuarllamando = false;
            alert("Saliendo de la lista de espera.");
            break;

        default:
            alert("Opcion invalida.");
            break;

    }



}