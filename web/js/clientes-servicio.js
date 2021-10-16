/* global axios */
//
//'use strict';

async function listar_clientes() {
    const respuesta = await axios({
        method: 'get',
        url: 'https://sr-api-gestioncomercial.herokuapp.com/apiv1/customers/all'
    })
        // console.log(respuesta.data.data);
        return respuesta.data.data;

   
           
}

