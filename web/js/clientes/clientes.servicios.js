/* global axios */
//
//'use strict';


const Clientes = {
    url_base: 'https://sr-api-gestioncomercial.herokuapp.com/apiv1/customers',

    // Recogemos todos los clientes de la BD
    getAll: () => {
        const resp = new Promise(async (resolve, reject) => {
            try {
                const resp = await axios({
                    method: 'get',
                    url: `${Clientes.url_base}/all`
                })
                // console.log(respuesta.data.data);
                resolve(resp.data.data);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
        return resp
    },

    // Borramos el cliente indicado por id
    delete: (id) => {
        const resp = new Promise(async (resolve, reject) => {
            try {
                const resp = await axios({
                    method: 'delete',
                    url: `${Clientes.url_base}/${id}`
                })
                // console.log(respuesta.data.data);
                resolve(resp.data.data);
            } catch (error) {
                reject(error);
            }
        })
        return resp
    },
}