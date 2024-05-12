function registrarPersona() {
    // guardamos los datos obtenidos en las siguientes variables por medio de id de etiqueta
    let nomPerson = document.getElementById('nombrePerson').value;
    let birthDate = document.getElementById('birthDate').value;
    let phonePerson = document.getElementById('telefonoPerson').value;
    let emailPerson = document.getElementById('emailPerson').value;
    let adressPerson = document.getElementById('adressPerson').value;
    console.log(nomPerson,birthDate,phonePerson,emailPerson,adressPerson);
    // usaremos una tabla para mostrar las personas ingresadas creamos variable para add fila
    let tablaPerson = document.getElementById('listadoPerson');
    let numRow = tablaPerson.rows.length;
    //verificamos que no haya datos repetidos
    for (let i = 1; i < numRow; i++) {
        let fila = tablaPerson.rows[i];
        //para la tabla vamos a recorrer cada fila existente y si algun dato de la fila es estrictamente igual
        //lanzara una alerta para no repetir datos de la misma persona.
        if(
            fila.cells[0].innerHTML === nomPerson &&
            fila.cells[0].innerHTML === nomPerson &&
            fila.cells[0].innerHTML === nomPerson &&
            fila.cells[0].innerHTML === nomPerson &&
            fila.cells[0].innerHTML === nomPerson 
        ){
            Swal.fire(`Estos datos ya han sido ingresados`);
            return; // para salir de la funcion si los datos ya existen
        }
    }
    // si los datos no existen insercion de las celdas para mostrar los datos usando parametros numericos para señalar la posicion
    // de los datos.
     // variable para agregar fila al final de la tabla utilizando el indice -1 como parametro
    let newRow = tablaPerson.insertRow(-1);
    let cellName = newRow.insertCell(0);
    let cellbirthday = newRow.insertCell(1);
    let cellPhone = newRow.insertCell(2);
    let cellEmail = newRow.insertCell(3);
    let cellAdress = newRow.insertCell(4);
    let cellEdit = newRow.insertCell(5);
    //asignamos los datos a las celdas
    cellName.innerHTML = nomPerson;
    cellbirthday.innerHTML = birthDate;
    cellPhone.innerHTML = phonePerson;
    cellEmail.innerHTML = emailPerson;
    cellAdress.innerHTML = adressPerson;
    //agregamos un btn para editar los datos de la fila
    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Editar";
    btnEdit.classList.add("btn");// agregamos clase de bootstrap
    btnEdit.onclick = function() {
        editaPerson(newRow);
    };
    cellEdit.appendChild(btnEdit);
    //limpiamos los campos de entrada para permitir nuevos ingresos
    document.getElementById('nombrePerson').value = "";
    document.getElementById('birthDate').value = "";
    document.getElementById('telefonoPerson').value = "";
    document.getElementById('emailPerson').value = "";
    document.getElementById('adressPerson').value = "";
}
function editaPerson(row) {
    let nomPerson = prompt(`Ingrese el nombre nuevamente: ${row.cells[0].innerHTML}`);
    let birthDate = prompt(`Ingrese su fecha de nacimiento nuevamente: ${row.cells[1].innerHTML}`);
    let phonePerson = prompt(`Ingrese nuevamente su numero de telefono: ${row.cells[2].innerHTML}`);
    let emailPerson = prompt(`Ingrese nuevamente su correo electronico: ${row.cells[3].innerHTML}`);
    let adressPerson = prompt(`Ingrese nuevamente su direccion: ${row.cells[4].innerHTML}`);

    if (nomPerson && birthDate && phonePerson && emailPerson && adressPerson) {
        // actualiza los datos
        row.cells[0].innerHTML = nomPerson;
        row.cells[1].innerHTML = birthDate;
        row.cells[2].innerHTML = phonePerson;
        row.cells[3].innerHTML = emailPerson;
        row.cells[4].innerHTML = adressPerson;
    }
}