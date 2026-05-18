// El Desafío: Control de Turnos en una Clínica
// Requisitos del programa:
// Inicialización:

// Crea un array vacío llamado filaPacientes.
let filaPacientes = [];
// Tu clásica variable booleana para controlar el bucle while.
let continuarLlamando = true;
// El Menú Principal (prompt):
while (continuarLlamando) {
    let opcion = parseInt(prompt(
        "Seleccionar opción:\n" +
        "1: Llega Paciente. \n" +
        "2: Ver Fila de Espera. \n" +
        "3: Atender Siguiente Paciente.\n" +
        "4: Salir."
    ))
    switch (opcion) {
        case 1: // Opción 1: Llega Paciente. (Pide el nombre del paciente y lo anota al final de la fila).
            let pacienteNuevo = prompt("Ingrese nombre del paciente:")
            filaPacientes.push(pacienteNuevo)
            alert("Ingresaste a " + pacienteNuevo + " a la fila de pacientes.");
            break;
        case 2:// Opción 2: Ver Fila de Espera. (Muestra la lista de pacientes numerados. Si no hay nadie, avisa: "La sala de espera está vacía").
            if (filaPacientes.length === 0) {
                alert("No hay pacientes en espera.")
            } else {
                let verFila = "Fila de pacientes: \n"; 
                filaPacientes.forEach(function (nombre, indice) {
                    verFila += (indice + 1) + "." + (nombre) + "\n";
                    
                })
                alert(verFila);
            }
            break;
        case 3:// Opción 3: Atender Siguiente Paciente. (El médico atiende al primero de la fila. 
            //El programa debe borrarlo de la lista y mostrar un cartel que diga: "Atendiendo a: [Nombre del paciente]").
            if (filaPacientes.length === 0) {
                alert("No hay pacientes en espera.");
            } else {
                let siguientePaciente = filaPacientes.shift();
                alert("Atendiendo a " + siguientePaciente + ".");
            }
            break;

        case 4:// Opción 4: Salir.
            continuarLlamando = false;
            alert("Saliendo del programa.")
            break;

        default:
            alert("Opción no válida.");
            break;

    }


}


