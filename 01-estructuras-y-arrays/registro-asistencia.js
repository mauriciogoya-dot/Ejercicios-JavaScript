//Registro de Asistencia de Alumnos
//Requisitos del programa:
//Inicialización:
// Crea un array llamado presentes que empiece con algunos nombres cargados para no arrancar de cero, 
// por ejemplo: let presentes = ["Ana", "Pedro", "Luis"];
let presentes = ["Ana", "Pedro", "Luis", "Mauricio", "Valeria"];
let continuarRegistro = true;    // Tu variable booleana para controlar el while.

// El Menú Principal (prompt):
while (continuarRegistro) {
    let opcion = parseInt(prompt(
        "Seleccione la opción que desea realizar. \n" +
        "1: Registrar Alumno. \n" +
        "2: Ver Lista de Presentes. \n" +
        "3: Quitar Alumno por Nombre. \n" +
        "4: Salir."
    ));

    switch (opcion) {
        case 1:// Opción 1: Registrar Alumno. (Pide el nombre de un alumno con prompt y lo agrega al array).
            let alumno = prompt("Ingrese nombre del alumno:");
            presentes.push(alumno);
            alert("Ingrestaste a " + alumno + " a la lista de presentes.");
            break;
        case 2:// Opción 2: Ver Lista de Presentes. (Muestra los alumnos numerados usando el forEach).
            if (presentes.length === 0) {
                alert("No hay alumnos registrados.");
            } else {
                let verLista = "Lista de Presentes: \n";
                presentes.forEach(function (nombre, indice) {
                    verLista += (indice + 1) + "." + (nombre) + "\n";
                });
                alert(verLista);

            }
            break;
        // Opción 3: Quitar Alumno por Nombre. (Aquí está el nuevo desafío: el profesor escribe el nombre del alumno
        case 3:
            if (presentes.length === 0) {
                alert("No hay alumnos registrados.");
            } else {
                // 1. Primero le pedimos el nombre al usuario
                let alumnoAQuitar = prompt("Ingrese nombre del alumno que desea quitar:");

                // 2. Buscamos en qué número de índice se encuentra ese nombre
                let indiceReal = presentes.indexOf(alumnoAQuitar);

                // 3. Validamos: Si indexOf devuelve algo distinto de -1, significa que SÍ existe
                if (indiceReal !== -1) {
                    // Usamos splice: "Párate en 'indiceReal' y borra 1 elemento"
                    presentes.splice(indiceReal, 1);
                    alert("Quitaste a " + alumnoAQuitar + " de la lista de presentes.");
                } else {
                    // Si devolvió -1, es porque el nombre no coincide exactamente con ninguno del array
                    alert("El alumno '" + alumnoAQuitar + "' no se encuentra en la lista.");
                }
            }
            break;
        case 4:
            continuarRegistro = false
            alert("Saliendo del Resgitro de Alumnos.")
            break;
    }
}