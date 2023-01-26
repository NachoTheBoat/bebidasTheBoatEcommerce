const iconCarritoContador = document.querySelector(".iconCarrito");
let closeModalBtn = document.querySelector(".botonModalCerrar");

closeModalBtn.addEventListener("click", closeModal);
iconCarritoContador.addEventListener("click", renderModal);

function renderModal() {
  if (contadorCart.innerText === "0") {
    modalCarrito.style.display = "none";
  } else openModal();
}

function openModal() {
  modalCarrito.style.display = "block";
}
function closeModal() {
  console.log("cerrar");
  modalCarrito.style.display = "none";
}

// Mi intencion es mostrar los productos elegidos en un modal, eso todavia me falta. Los productos elegidos se almacenan
// en el local storage. Ahora tengo que ver como usar esos valores del local storage para mostrar los  productos, y el precio final
// y agregar un boton para quitar un producto, y otro boton para finalizar compra, y que dsp de hacer click en finalizar compra
// muestre un sweet alert y vaciar el local storage. Voy bien encaminado con esta idea? Que mas podria agregar?
