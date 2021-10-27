 /* global data, axios */

axios.get('https://sr-api-gestioncomercial.herokuapp.com/apiv1/customers/all', {
          transformResponse: axios.defaults.transformResponse.concat(function (data, headers) {
            return data;
          })
        })
        .then(function (res) {
          document.getElementById('id').src = data._id;
          document.getElementById('username').innerHTML = data.name;
          document.getElementById('useravatar').src = data.email;
          document.getElementById('username').innerHTML = data.comments;

        });