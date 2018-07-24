// Validar Numero
function validarNumeroDesde(dato, selector, desde) {

    $("#error_" + selector).hide();

    if (dato.trim() == "") {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe contener un valor");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else if (isNaN(dato)) {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe contener un número entero");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else if (parseInt(dato) < desde) {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe ser mayor a " + desde);
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else {
        $("#" + selector).parent().removeClass("has-error");
        $("#" + selector).parent().addClass("has-success");
        return true;
    }
}

// Validar Numero
function validarNumeroRango(dato, selector, desde, hasta) {

    $("#error_" + selector).hide();

    if (dato.trim() == "") {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe contener un valor");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else if (isNaN(dato)) {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe contener un número entero");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else if (parseInt(dato) < desde || parseInt(dato) > hasta) {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe estar entre " + desde + " y " + hasta);
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else {
        $("#" + selector).parent().removeClass("has-error");
        $("#" + selector).parent().addClass("has-success");
        return true;
    }
}

// Validar Texto
function validarTexto(dato, selector, hasta) {

    $("#error_" + selector).hide();

    if (dato.trim() == "") {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("No te olvides de escribir este campo");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else if (!isNaN(dato)) {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe contener letras alfabéticas");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#nombre").focus();
        return false;
    }
    else if (dato.length > hasta) {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe contener hasta " + hasta + " caracteres");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else {
        $("#" + selector).parent().removeClass("has-error");
        $("#" + selector).parent().addClass("has-success");
        return true;
    }
}

// Validar Email
function validarEmail(dato, selector, hasta) {

    var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $("#error_" + selector).hide();

    if (dato.trim() == "") {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("No te olvides tu email");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else if (!exp.test(dato)) {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe contener una dirección de email");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else if (dato.length > hasta) {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe contener hasta " + hasta + " caracteres");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else {
        $("#" + selector).parent().removeClass("has-error");
        $("#" + selector).parent().addClass("has-success");
        return true;
    }
}

// Validar JSON
function validarJSON(dato) {

    try {
        JSON.parse(dato);
    }
    catch (e) {
        return false;
    }
    return true;
}

// Validar Opciones
function validarOpcion(dato, selector) {

    $("#error_" + selector).hide();

    if (dato.trim() == "") {
        $("#" + selector).parent().addClass("has-error");
        $("#error_" + selector).text("debe seleccionar una opción");
        $("#error_" + selector).fadeIn("fast", "linear");
        $("#" + selector).focus();
        return false;
    }
    else {
        $("#" + selector).parent().removeClass("has-error");
        $("#" + selector).parent().addClass("has-success");
        return true;
    }
}