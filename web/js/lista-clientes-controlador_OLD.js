/* global listar_clientes */

//'use strict';

const mostrar_datos = async () => {
    const $data = document.getElementById('cuerpoTabla');

    const resp = await listar_clientes();
    let strToPrint = ''
    resp.forEach((row, index) => {
        const { _id, name, email, phone, createdAt} = row
       
        strToPrint += `<tr><th scope="row">#${index + 1}</th>`
        strToPrint += `<td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td> 
            <td>${createdAt.toLocaleString("es-ES")}</td>`
        strToPrint += `<td><button onclick="deleteCustomer(${email})">Eliminar</button></td></tr>`
    });
    $data.innerHTML = strToPrint;
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
        url: "https://sr-api-gestioncomercial.herokuapp.com/apiv1/customers/new",
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
function deleteCustomer(id) {
    //elemento = document.getElementById(event);
    alert(id)
    axios.delete('https://sr-api-gestioncomercial.herokuapp.com/customers/615c3021981e03d20c5f5cbc', {})
        .then(res => {
            alert("ha sido Eliminado!!");

        })
        .catch(err => {
            alert(2);
            console.log(err)
        })


}
