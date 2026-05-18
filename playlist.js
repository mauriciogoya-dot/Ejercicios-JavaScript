// 1. Inicialización 
let playlist = []; // Crea un array vacío llamado playlist 
let continuarGestion = true; // Variable booleana para controlar el bucle principal 

// 2. Bucle Principal de Opciones 
while (continuarGestion) {
    
    // Menú con prompt() convirtiendo la opción del usuario a número 
    let opcion = Number(prompt(
        "Mi Playlist:\n" + 
        "1. Agregar Canción al Final\n" +
        "2. Ver Playlist\n" + 
        "3. Reproducir Siguiente Canción (Mostrar y Eliminar la Primera)\n" + 
        "4. Eliminar Canción Específica\n" + 
        "5. Salir\n" + 
        "Ingresa el número de la opción:" 
    ));

    // 3. Manejo de Opciones 
    switch (opcion) {
        
        // Caso 1: Agregar Canción al Final [cite: 20]
        case 1:
            let nuevaCancion = prompt("Ingresa el nombre de la canción:"); // Pide el nombre de la canción [cite: 21]
            playlist.push(nuevaCancion); // Añádela a playlist usando push() [cite: 22]
            alert("'" + nuevaCancion + "' ha sido agregada con éxito."); // alert() de confirmación [cite: 23]
            break; // Detiene la ejecución y sale del switch

        // Caso 2: Ver Playlist [cite: 24]
        case 2:
            // Si la playlist está vacía [cite: 25]
            if (playlist.length === 0) {
                alert("La playlist está vacía."); // alert("La playlist está vacía.") [cite: 25]
            } else {
                // Si no, arma una cadena con las canciones numeradas usando forEach() [cite: 26]
                let mensajePlaylist = "Tu Playlist:\n";
                playlist.forEach(function(cancion, indice) {
                    // Sumamos 1 al índice para que el usuario vea la lista desde el 1 y no desde el 0
                    mensajePlaylist += (indice + 1) + ". " + cancion + "\n";
                });
                alert(mensajePlaylist); // Muestra las canciones numeradas [cite: 26]
            }
            break;

        // Caso 3: Reproducir Siguiente Canción [cite: 27]
        case 3:
            // Si la playlist está vacía [cite: 28]
            if (playlist.length === 0) {
                alert("No hay canciones para reproducir."); // alert("No hay canciones para reproducir.") [cite: 28]
            } else {
                // shift() obtiene y elimina el primer elemento del array 
                let cancionEliminada = playlist.shift(); 
                alert("Reproduciendo ahora: " + cancionEliminada); // alert con el nombre de la canción eliminada [cite: 30]
            }
            break;

        // Caso 4: Eliminar Canción Específica [cite: 31]
        case 4:
            if (playlist.length === 0) {
                alert("La playlist está vacía, no hay nada que eliminar.");
            } else {
                // Primero armamos la lista numerada para que el usuario elija [cite: 32]
                let listaParaEliminar = "Selecciona el número de la canción a eliminar:\n";
                playlist.forEach(function(cancion, indice) {
                    listaParaEliminar += (indice + 1) + ". " + cancion + "\n";
                });
                
                // Pide el número de la canción a eliminar 
                let numeroCancion = Number(prompt(listaParaEliminar));
                // Ajusta para el índice restando 1 (ya que los arrays empiezan en 0) 
                let indiceAEliminar = numeroCancion - 1;

                // Valida que el índice sea correcto (mayor o igual a cero y menor que el largo del array) 
                if (indiceAEliminar >= 0 && indiceAEliminar < playlist.length) {
                    // Usa splice(indice, cantidadAEliminar) para borrarla 
                    let cancionBorrada = playlist.splice(indiceAEliminar, 1);
                    alert("Se ha eliminado '" + cancionBorrada + "' de la playlist."); // alert() de confirmación [cite: 35]
                } else {
                    alert("Número de canción no válido."); // alert() de error [cite: 35]
                }
            }
            break;

        // Caso 5: Salir [cite: 36]
        case 5:
            continuarGestion = false; // Termina el bucle utilizando la variable booleana [cite: 37]
            alert("Saliendo de la playlist."); // alert() de salida [cite: 38]
            break;

        // default: Opción no válida [cite: 39]
        default:
            alert("Opción no válida."); // alert("Opción no válida.") [cite: 40]
            break;
    }
}