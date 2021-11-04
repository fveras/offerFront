/* global listar_clientes */

//'use strict';

const mostrarTablaClientes = async () => {
    const $tablaDeDatos = document.getElementById('tablaDeDatos');

    // Recogemos los datos de los clientes
    const resp = await Clientes.getAll();

    // Preparamos la tabla con todos los datos
    let strDatos = ``
    for (let index = 0; index < resp.length; index++) {
        const { _id, name, email, phone, createdAt } = resp[index]
        const fecha = new Date(createdAt).toLocaleDateString("es-ES", { dateStyle: 'short' })
        strDatos += `<tr>
            <td class="actionsCol">
                <button onclick="showRegister(event)" data-id="${_id}" class="btn btn-primary"><i class="bi bi-eye"></i></button>
                <button onclick="deleteRegister(event)" data-id="${_id}" class="btn btn-secondary"><i class="bi bi-trash"></i></button>
            </td>
            <th class="idCol">${index + 1}</th>
            <td scope="col" >${name}</td>
            <td scope="col" >${email}</td>
            <td scope="col" >${phone}</td> 
            <td scope="col" class="text-center">${fecha}</td>
        </tr>`
    }

    $tablaDeDatos.innerHTML = `
    <table class="table table-bordered table-hover table-sm">
        <!-- Cabecera de la tabla -->
        <thead class="thead-dark">
            <tr>
                <th scope="col" class="actionsCol">Acciones</th>
                <th scope="col" class="idCol">#</th>
                <th scope="col">Nombre Cliente</th>
                <th scope="col">Email</th>
                <th scope="col">Telefono</th>
                <th scope="col">Fecha Alta</th>
            </tr>
        </thead>

        <!-- Cuerpo de los datos -->
        <tbody>
            ${strDatos}
        </tbody>
    </table>`

};


function sendUserData() {

    const body = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        contactPerson: document.getElementById('contactPerson').value,
        comments: document.getElementById('comments').value,
    }
    axios({
        url: CLIENTES.url_base + '/new',
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: body
    })
        .then(res => {
            const resp = res.data.data
            // Aqui haz lo que necesites.... YA está el cliente creado!!
            alert(resp.name + "ha sido creado!!");
            document.getElementById("altaClientes").reset();
        })
        .catch(err => {
            console.log(err)
        })
}


// Función llamada desde el btn Borrar
async function deleteRegister(evt) {

    try {
        // Leemos el id del dataset (data-id) ** el [a || b] es para leer TODA la pulsación del botón
        const id = evt.target.dataset.id || evt.target.parentElement.dataset.id
        await Clientes.delete(id);
        alert("Registro borrado!")
    } catch (error) {
        alert("Error borrando registro", error)
    } finally {
        mostrarTablaClientes()
    }

}


function showRegister(e) {
    const id = e.target.dataset.id || e.target.parentElement.dataset.id
    alert('Ver registro ID: ' + id)
}

// Ejecutamos la función principal para ver los datos
mostrarTablaClientes()