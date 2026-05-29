//1.	Inicialización:
//o	Crea un array vacío llamado carrito.
//o	Crea una variable booleana para controlar el bucle while.
let carrito = [];
let continuarCompra = true;

while (continuarCompra) {
    let opcion = parseInt(prompt(
        "Seleccione una opción: \n"+
        "1. Agregar producto \n" +
        "2. Ver carrito \n"+
        "3. Sacar ultimo producto \n"+
        "4. Salir"
        
    ));
    switch(opcion){
        case 1: 
            let nuevoProducto = prompt("Ingrese el nombre del producto");
            carrito.push(nuevoProducto);
            alert("Agregaste "+ nuevoProducto + " al carrito");
            break;

        case 2: 
            if (carrito.length===0){
                alert("El carrito de compras esta vacio")
            } else {
                let verCarrito = "Tu carrito de compras: \n";
                carrito.forEach(function(producto,indice){
                    verCarrito += (indice+1) + ". " + producto + " \n";
                                }) 
                alert(verCarrito)
            }
            break;
        
        case 3: 
            if (carrito.length===0){
                alert("No hay productos para eliminar");
            } else {
                let quitarProducto = carrito.pop();
                alert("Eliminaste '" + quitarProducto + "' del carrito.");
            }
            break;
            
        case 4:
            continuarCompra=false;
            alert("Saliendo del Carrito de compras");
            break;

    }

}


//2.	El Menú Principal (prompt):
//o	Opción 1: Agregar Producto (pide el nombre de un artículo y lo suma al final del array).
//o	Opción 2: Ver Carrito (muestra todos los productos numerados. Si no hay nada, avisa que está vacío).
//o	Opción 3: Sacar Último Producto (elimina el último artículo que se agregó al carrito y avisa cuál fue). ¡Ojo aquí! Investiga o recuerda qué método de array sirve para quitar el último, a diferencia de .shift() que quita el primero.
//o	Opción 4: Salir (apaga el bucle de forma limpia).
