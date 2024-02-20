const ficha = document.getElementById("ficha");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("email");
const tel = document.getElementById("tel");
const skill = document.getElementById("skill");
function evento_blur(elemento) {
  elemento.addEventListener('blur', () => {
    if (elemento.value == "") {
      alert("Debe llenar el campo.")
    } else {
      if (isNumber(elemento.value)) {
        alert("Es correcto")
      } else { "No es correcto" }
    }
  })
};
evento_blur(ficha);
evento_blur(nombre);
evento_blur(apellidos);
evento_blur(correo);
evento_blur(tel);