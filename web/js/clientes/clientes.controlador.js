/* global listar_clientes */

//'use strict';

const mostrar_datos = async () => {
    const $tablaDeDatos = document.getElementById('tablaDeDatos');

    // Recogemos los datos de los clientes
    const resp = await Clientes.getAll();

    // Preparamos la tabla con todos los datos
    let strDatos = `<tbody>`
    for (let index = 0; index < resp.length; index++) {
        const { _id, name, email, phone, createdAt } = resp[index]
        const fecha = new Date(createdAt).toLocaleDateString("es-ES", { dateStyle: 'long' })
        strDatos += `<tr>
            <th scope="row">#${index + 1}</th>
            <td scope="row">${name}</td>
            <td scope="row">${email}</td>
            <td scope="row">${phone}</td> 
            <td scope="row" class="text-center">${fecha}</td>
            <td scope="row">
                <button onclick="deleteCustomer(event)" data-id="${_id}">Eliminar</button>
            </td>
        </tr>`
    }
    strDatos += '</tbody>'

    $tablaDeDatos.innerHTML = `
    <table class="table table-bordered table-hover table-sm">
        <!-- Cabecera de la tabla -->
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre Cliente</th>
                <th scope="col">Email</th>
                <th scope="col">Telefono</th>
                <th scope="col">Fecha Alta</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>

        <!-- Cuerpo de los datos -->
        ${strDatos}
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
async function deleteCustomer(event) {
    const { id } = event.target.dataset
    try {
        const resp = await Clientes.delete(id);
        alert("Registro borrado!")
    } catch (error) {
        alert("Error borrando registro")
    } finally {
        mostrar_datos()
    }

}



// Ejecutamos la función principal para ver los datos
mostrar_datos()