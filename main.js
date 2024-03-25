document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const { correo, contrasenna } = obtenerDatosFormulario();
        const esValido = validarContrasenna(contrasenna) && validarCorreo(correo);
        
        esValido ? manejarExito() : manejarError();
    });
});

const obtenerDatosFormulario = () => {
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
    return { correo, contrasenna };
};


/*
^: Coincide con el inicio de la cadena.
(?=.*\d): Asegura que la cadena contenga al menos un dígito del 0 al 9.
(?=.*[a-z]): Asegura que la cadena contenga al menos una letra minúscula.
(?=.*[A-Z]):Asegura que la cadena contenga al menos una letra mayúscula.
(?=.*[!@#$%^&*]): Asegura que la cadena contenga al menos uno de los caracteres especiales en el conjunto !@#$%^&*.
(?=.*[a-zA-Z]): Este asegura que la cadena contenga al menos una letra (minúscula o mayúscula).
.{8,}: Esto coincide con cualquier caracter (excepto nueva línea) al menos 8 veces.
$: Coincide con el final de la cadena.
*/
const validarContrasenna = (contrasenna) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(contrasenna);


/*

^: Coincide con el inicio de la cadena.
[^\s@]+: Coincide con uno o más caracteres que no son espacios en blanco (\s) ni el símbolo '@'.
@: Coincide con el símbolo '@'.
[^\s@]+: Coincide con uno o más caracteres que no son espacios en blanco (\s) ni el símbolo '@'.
\.: Coincide con el carácter punto literal (.).
[^\s@]+: Coincide con uno o más caracteres que no son espacios en blanco (\s) ni el símbolo '@'.
$: Coincide con el final de la cadena.

*/
const validarCorreo = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);


const manejarExito = () => {
    alert("Iniciar sesión exitoso");
    limpiarCamposTexto();
};

const manejarError = () => {
    alert("Los datos ingresados no son válidos");
};

const limpiarCamposTexto = () => {
    const campos = document.querySelectorAll("#formulario input[type='email'], #formulario input[type='password']");
    campos.forEach((campo) => campo.value = "");
};