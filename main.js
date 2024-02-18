let valor = 4;
const ficha = document.getElementById("ficha");
ficha.addEventListener('blur', function () { alert(ficha.value) });
alert("algo");
if (typeof valor === 'number') {
  document.write("Es un número");
};
if (ficha.value.length >= 4) {
  alert("valor excedido")
}
console.log(typeof valor);