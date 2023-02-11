let closeModalBtn = document.querySelector(".botonModalCerrar");
const accept = document.querySelector(".accept");
let quitarDelCarrito = document.querySelectorAll(".botonTrashModal");
let seguirComprando = document.querySelector(".seguirComprandoBtn");
const total = document.getElementById("precioTotal");
//listeners
closeModalBtn.addEventListener("click", closeModal);
iconCarritoContador.addEventListener("click", renderModal);
accept.addEventListener("click", aceptarCommpra);
seguirComprando.addEventListener("click", closeModal);
quitarDelCarrito.addEventListener("click", eliminarDelCarrito);

//todo lo que es render de esta linea hacia abajo
function renderModal() {
  actualizarCarrito();
  if (contadorCart.innerText === "0") {
    modalCarrito.style.display = "none";
  } else openModal();
}

function openModal() {
  console.log("problemas");
  //aca hay problemas

  modalCarrito.style.display = "block";
  console.log("prueba antes de pintar carrito");
}

function closeModal() {
  console.log("cerrar");
  modalCarrito.style.display = "none";
}

function aceptarCommpra() {
  console.log("compraRealizada");

  Swal.fire({
    title: "quiere realizar la compra?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "si",
    denyButtonText: `no`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed && carrito.length > 0) {
      carrito.length = 0;
      localStorage.setItem("miCarrito", JSON.stringify(carrito));
      console.log(JSON.stringify(carrito));
      contadorCart.innerHTML = 0;
      Swal.fire("compra realizada!", "", "success");
      actualizarCarrito();
      closeModal();
    } else if (result.isDenied) {
      Swal.fire("la compra no se ha realizado", "", "info");
      closeModal();
    }
  });
}

//carrito
