// **Inventario Simple de Libros en una Biblioteca Personal**
// Crearás un sistema básico para llevar un registro de libros en una biblioteca personal.

// 1.  **Inicialización:**
let libros = [];                //     *   Crea un array vacío llamado `libros`.
let continuarRegistro = true;   //     *   Usa una variable booleana (ej. `continuarRegistro = true;`) para controlar el bucle principal.

// 2.  **Bucle Principal de Opciones:**
//     *   Dentro del bucle `while`, muestra un menú con `prompt()`:

while (continuarRegistro) {
    let opcion = Number(prompt(
        "Biblioteca Personal: \n" +
        "1. Añadir Libro. \n" +
        "2. Ver Libros Disponibles. \n" +
        "3. Eliminar Libro \n" +
        "4. Buscar Libro por Título \n" +
        "5. Salir. \n" +
        "Ingresa el número de la opción:"
    ));
    switch (opcion) {  // 3.  **Manejo de Opciones:**
        case 1:                                                         //**Caso 1 (Añadir Libro):**
            let añadir = prompt("Ingresa el Titulo del Libro.");        // Pide el título del libro (`prompt()`).
            libros.push(añadir);                                     //   Si se ingresa un título, añádelo al array `libros`.
            alert("Añadiste " + añadir + " a tu inventario.");          //   `alert()` de confirmación.
            break;
        case 2:                                                     // **Caso 2 (Ver Libros Disponibles):**
            if (libros.length === 0) {                              // Si `libros` está vacío, 
                alert("No hay libros en la biblioteca.")            //`alert("No hay libros en la biblioteca.")`.
            } else {                                                // Si no, muestra los títulos numerados usando `forEach()` y `alert()`.
                let mostrarTitulos = "Libros en tu Biblioteca: \n";
                libros.forEach(function (titulos, indice) {
                    mostrarTitulos += (indice + 1) + ". " + (titulos) + ". \n"
                });
                alert(mostrarTitulos);
            }
            break;
               
        case 3:                                                     // **Caso 3 (Eliminar Libro):**
            if (libros.length === 0) {
                alert("No hay libros para eliminar.");
            } else {                                                // *   Muestra la lista numerada de libros.
                let mostrarLibros = "Libros en tu Biblioteca: \n";
                libros.forEach(function (titulo, indice) {
                    mostrarLibros += (indice + 1) + ". " + titulo + ". \n";
                });
                alert(mostrarLibros);                   
                                                                    // *   Pide el *número* del libro a eliminar. Ajusta para el índice.

                let indiceEliminar = Number(prompt("Ingresa el número del libro que deseas eliminar.")) - 1;
                if (indiceEliminar >= 0 && indiceEliminar < libros.length) {
                    let libroEliminado = libros.splice(indiceEliminar, 1);              // *   Valida el índice. Si es válido, usa `splice()` para eliminarlo.
                    alert("Eliminaste " + libroEliminado + " de tu inventario.");       // *   `alert()` de confirmación o error.
                } else {
                    alert("Índice inválido.");
                }
            }
            break;

        case 4:                                                                                      // **Caso 4 (Buscar Libro por Título):**
            let terminoBusqueda = prompt("Ingresa un término de búsqueda para el título del libro.");// Pide un término de búsqueda (`prompt()`).
            let librosEncontrados = [];                                                              // Crea un array `librosEncontrados`.

            libros.forEach(function (titulo) {                                                       // Usa `forEach()` en `libros`. Si el título del libro (convertido a minúsculas) `includes()` el término de búsqueda (convertido a minúsculas), añádelo a `librosEncontrados`.
                if (titulo.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                    librosEncontrados.push(titulo);
                }
            });

            if (librosEncontrados.length > 0) {                                             // Si `librosEncontrados` no está vacío, muéstralos con `alert()`. Sino, `alert("No se encontraron libros con ese término.")`.
                alert("Libros encontrados: \n" + librosEncontrados.join("\n"));
            } else {
                alert("No se encontraron libros con ese término.");
            }
            break;

        case 5:                                             //     *   **Caso 5 (Salir):**
            continuarRegistro = false;                     //         *   Termina el bucle utilizando la variable booleana definida para controlar el bucle.
            alert("Cerrando la biblioteca personal.");  //         *   `alert("Cerrando la biblioteca personal.")`.
            break;
        default:                                        //     *   **`default`:**
            alert("Opción no válida.");                 //         *   `alert("Opción no válida.")`.
            break;
    }
}