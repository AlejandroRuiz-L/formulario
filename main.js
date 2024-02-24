const ficha = document.getElementById("ficha");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("email");
const tel = document.getElementById("tel");
const skill = document.getElementById("skill");
const evento_blur = function (elemento) {
  elemento.addEventListener('blur', () => {
    const patt_str = /^[a-zA-Z]{3}_[0-9]{5}$/;
    if (patt_str.test(ficha.value)) {
      console.log('valido');
    }
  })
}
/*
function evento_blur(elemento) {
  elemento.addEventListener('blur', () => {
    if (elemento.value == "") {
      console.log("Debe llenar el campo.");
      ficha.style.borderColor = "green";
    }
  })
};
ficha.addEventListener('blur', () => {
  if (!patt_str.test(ficha.value)) {
    console.log("Solo se pueden ingresar letras.");
    ficha.style.borderColor = "red";
  } else {
    console.log("'Vacio' correcto.")
  }
})
ficha.addEventListener('blur', () => {
  if (!expresion1.test(ficha.value)) {
    console.log("El campo 'ficha' no es válido.");
    ficha.style.borderColor = "purple";
  } else {
    console.log("'Cod' correcto.");
    ficha.style.borderColor = "skyblue";
  }
})
evento_blur(ficha);
evento_blur(nombre);
evento_blur(apellidos);
evento_blur(correo);
evento_blur(tel);
console.log('Finalizado');
*/