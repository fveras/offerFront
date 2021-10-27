/* global axios */
//
//'use strict';

function listar_clientes() {

    const resp = new Promise( async (resolve, reject) => {
        try {
            const resp = await axios('https://sr-api-gestioncomercial.herokuapp.com/apiv1/customers/all')
            // console.log(respuesta.data.data);
            resolve(resp.data.data);
        } catch (error) {
            console.log(error);
            reject(error);
        }

    })

    return resp




}

