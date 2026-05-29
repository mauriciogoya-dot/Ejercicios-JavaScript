// Objetivo: Practicar la manipulación de arrays combinando la búsqueda por nombre y la eliminación con splice.

// Consigna:
// Vas a crear un script para gestionar un carrito de compras interactivo.

// Inicialización: Crea un array llamado carrito con algunos productos ya cargados (por ejemplo: ["Leche", "Pan", "Café"]).
let carrito = ["Leche", "Pan", "Café"];
let continuarComprando = true;

// Bucle y Menú: Arma un bucle while con un switch que tenga las siguientes opciones:
while(continuarComprando) {
    let opcion = Number(prompt(
        "Seleccionar una Opción: \n" +
        "1. Agregar Producto \n" +
        "2. Mostrar Carrito \n" +
        "3. Eliminar Producto por Nombre \n" +
        "4. Vaciar Carrito \n" +
        "5. Salir"
    ));

    switch (opcion) {
        case 1:
            let producto = prompt("Ingrese el nombre del producto a agregar.");
            carrito.push(producto);
            alert("Producto agregado: " + producto);
            break;
        case 2:
            if (carrito.length === 0) {
                alert("El carrito está vacío.");
            } else {
                let carritoNumerado = "Carrito de Compras: \n";
                carrito.forEach(function (nombre, indice) {
                    carritoNumerado += (indice + 1) + ". " + (nombre) + ".\n";
                });
                alert(carritoNumerado);
            }
            break;
        case 3:
            let nombreProducto = prompt("Ingrese el nombre del producto a eliminar.");
            let indiceProducto = carrito.indexOf(nombreProducto);
            if (indiceProducto !== -1) {
                carrito.splice(indiceProducto, 1);
                alert("Producto eliminado: " + nombreProducto);
            } else {
                alert("El producto no está en el carrito.");
            }
            break;
        case 4:
            carrito.length = 0; // Vacía el array
            alert("Carrito vaciado.");
            break;
        case 5:
            continuarComprando = false;
            alert("Saliendo del carrito de compras.");
            break;
        default:
            alert("Opción inválida.");
            break;
    }
}

// 3. Eliminar Producto por Nombre: El usuario escribe el nombre del producto que quiere sacar. Aquí está el desafío: El programa debe buscar el producto usando indexOf. Si existe, lo elimina con splice y avisa que fue quitado; si no existe, debe lanzar un mensaje de error que diga "El producto no está en el carrito".

// 4. Vaciar Carrito: Una opción rápida que borre todos los elementos del array de un solo golpe (Pista: investiga cómo reasignar el length del array a 0 o cómo usar un método limpio para resetearlo).

// 5. Salir: Termina el bucle.