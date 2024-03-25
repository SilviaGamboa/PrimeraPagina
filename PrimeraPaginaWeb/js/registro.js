/************************************Laboratorio***************************************************** */
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
  
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      const { nombre, apellidos, edad, numtelefono, genero, correo, contrasenna } = obtenerDatosFormulario();
      const esValido = validarNombre(nombre) && validarApellidos(apellidos) && validarEdad(edad) && validarTelefono(numtelefono) && validarContrasenna(contrasenna) && validarCorreo(correo);
  
      esValido ? manejarExito() : manejarError();
    });
  });
  
  const obtenerDatosFormulario = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const numtelefono = document.getElementById("numero").value.trim();
    const genero = document.getElementById("genero").value;
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
  
    return { nombre, apellidos, edad, numtelefono, genero, correo, contrasenna };
  };
  
  const validarNombre = (nombre) => /^[a-zA-Z]+$/.test(nombre);
  const validarApellidos = (apellidos) => /^[a-zA-Z]+$/.test(apellidos);
  const validarEdad = (edad) => /^(1[5-9]|[2-9][0-9])$/.test(edad);
  const validarTelefono = (numtelefono) => /^\+?\d{1,3}[-\s]?\d{3}[-\s]?\d{4}$/.test(numtelefono);
  const validarCorreo = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  const validarContrasenna = (contrasenna) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(contrasenna);
  
  const manejarExito = () => {
    alert("Registro Exitoso");
    limpiarCamposTexto();
  };
  
  const manejarError = () => {
    alert("Datos no válidos");
  };
  
  const limpiarCamposTexto = () => {
    const campos = document.querySelectorAll("#formulario input[type='text'], #formulario input[type='number'], #formulario input[type='tel'], #formulario input[type='email'], #formulario input[type='password']");
    campos.forEach((campo) => (campo.value = ""));
  };
  