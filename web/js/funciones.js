function validateDate(date1) {


    
}

function limpiarFormulario() {
    document.getElementById("DateCustomer").reset();
}

function generateFechaActual() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;
    return today;
}
function process(date){
   var date;
   // Do something
   return date;
}