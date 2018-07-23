/* Documento Ready */
$(document).ready(function(){
    $("#insertar").submit(function (event) {

        // Prevengo Envio
        event.preventDefault();

        // Asigno Variables
        var usuario     = $('#insertar #usuario').val();
        var nombre      = $('#insertar #nombre').val();
        var apellido    = $('#insertar #apellido').val();
        var email       = $('#insertar #email').val();
        var password    = $('#insertar #password').val();

        // Valido Datos
        if (            
            validarTexto(usuario, "usuario", 128) &
            validarTexto(nombre, "nombre", 128) &
            validarTexto(apellido, "apellido", 128) &
            validarEmail(email, "email", 256) &
            validarTexto(password, "password", 128)
            ) {
            $(this).unbind('submit').submit();
        }

        return false;
    });
});

