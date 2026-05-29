let gastos = [];
let registrarGastos = true;
while (registrarGastos) {
    let opcion = Number(prompt(
        "Seleccionar una Opción: \n" +
        "1: Registrar Gasto. \n" +
        "2: Ver Historial de Gastos. \n" +
        "3: Calcular Total Gastado. \n" +
        "4: Salir."
    ));
    switch (opcion) {
        case 1:
            let monto = Number(prompt("Ingrese monto del gasto a reistrar."));
            gastos.push(monto);
            alert("Ingresaste " + monto + " a tu resgistro de gastos.")
            break;
        case 2:
            if (gastos.length === 0) {
                alert("Aún no tienes gastos registrados.")
            } else {
                let mostrarGastos = "Tu registro de gastos: \n";
                gastos.forEach(function (registro, indice) {
                    mostrarGastos += (indice + 1) + ". " + (registro) + ".\n"
                });
                alert(mostrarGastos);
            }
            break;
        case 3:
            if (gastos.length === 0) {
                alert("Aún no tienes gastos registrados.")
            } else {
                let total = 0;
                gastos.forEach(function (monto) {
                    total = total + monto;
                });
                alert("Tus gastos hasta ahora: $ " + total);
            }
            break;
        case 4:
            registrarGastos = false;
            alert("Saliendo del Registro.")
            break;

        default:
            alert("Opcion no valida");
            break;



    }





}