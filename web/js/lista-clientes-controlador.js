/* global listar_clientes */

//'use strict';
const mostrar_datos = async () => {
    const $data = document.getElementById('cuerpoTabla');

    const resp = await listar_clientes();
    console.log("Mostrar datos", resp)
    $data.innerHTML += `<tr>`;
    resp.map((row, index) => $data.innerHTML += `<th scope="row">#${index + 1}</th>
                    <td>${row.name}</td>
                    <td>${row.email}</td>
                    <td>${row.phone}</td> 
                    <td>${row.createdAt.toLocaleString("es-ES")}</td>`)

    $data.innerHTML += ` </tr>`;
};

function sendUserData() {
    alert("cambio de ventana");
    let dato = document.getElementsById("name").value;


    // axios.post('https://sr-api-gestioncomercial.herokuapp.com/apiv1/customers/new', {
    //     "name": "Nombre de cliente 8",
    //     "email": "mail.cliente8@mail.com",
    //     "comments": "Cliente 8 en la nube"

    // })
    //     .then(res => {
    //         if (res.status == 201) {
    //             console.log('El nuevo Post ha sido almacenado con id: ', res.data.id);
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    axios({
        url: "https://sr-api-gestioncomercial.herokuapp.com/apiv1/customers/new",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
          "name": "Nombre de cliente 8",
          "email":"mail.cliente8@mail.com",
          "comments": "Cliente 8 en la nube"
        }
      })
      .then( res => {
          console.log(res)
      })
      .catch( err => {
          console.log(err)
      })

}
