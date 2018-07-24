/* Documento Ready */
$(document).ready(function(){
    $("#insertar").submit(function (event) {

        // Prevengo Envio
        event.preventDefault();

        // Asigno Variables
        var nombre      = $('#insertar #nombre').val();
        var apellido    = $('#insertar #apellido').val();
        var email       = $('#insertar #email').val();
        var mensaje    = $('#insertar #mensaje').val();

        // Valido Datos
        if (            
            validarTexto(nombre, "nombre", 128) &
            validarTexto(apellido, "apellido", 128) &
            validarEmail(email, "email", 256) &
            validarTexto(mensaje, "mensaje", 128)
            ) {
            $(this).unbind('submit').submit();
        }

        return false;
    });
});

