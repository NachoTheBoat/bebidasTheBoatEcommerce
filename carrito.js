const iconCarritoContador = document.querySelector(".iconCarrito");

const pintarCarrito = (carrito) => {
  const contenedor = document.querySelector(".modalProductoContainer");

  contenedor.innerHTML = "";

  carrito.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("modalProductoElegido");
    div.innerHTML = `
              <p>${producto.nombre}</p>
              <p>Precio: ${producto.precio}</p>/              <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>

          `;
    contenedor.appendChild(div);
  });
  console.log("fumction pintar carrito");
};

const actualizarCarrito = () => {
  modalProductoContainer.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "modalProductoElegido";
    div.innerHTML = `
      <img src="${prod.imagen}" class="productoImagen" alt="" />
                                    <div class="descripcionProductoModal">
                                        <h3 class="productoTitulo">${prod.nombre}</h3>
                                        <p>cantidad: <span id ="cantidad">${prod.cantidad} </p>
                                        <p class="prdoductoPrecio">${prod.precio}</p>
                                        <div class="botonTrashModal">
                                          <i class="bi bi-trash3" onclick= "eliminarDelCarrito(${prod.id})"></i>
                                        </div>

    `;
    modalProductoContainer.appendChild(div);
    actualizarTotal();
  });
};

const guardarCarritoStorage = (carrito) => {
  localStorage.setItem("Micarrito", JSON.stringify(carrito));
};

//calcular el total
function actualizarTotal() {
  const totalCalculado = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
  console.log(totalCalculado);
  total.innerHTML = `Precio total: ${totalCalculado}$`;
}
//quitar del carrito
const eliminarDelCarrito = (productoId) => {
  Toastify({
    duration: 1000,
    text: "producto eliminado 😏",
    style: {
      background: "linear-gradient(to right, #FB856C, #FD4B25)",
      borderRadius: "1px",

      textTransform: "uppercase",
      fontSize: ".70rem",
    },
    offset: {
      x: 75, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
  }).showToast();

  ///
  const productoIndex = carrito.findIndex(
    (producto) => producto.id == productoId
  );
  carrito.splice(productoIndex, 1);
  pintarCarrito(carrito);
  actualizarTotal(carrito);

  actualizarContador();
  actualizarCarrito();
  console.log(carrito);
  localStorage.setItem("miCarrito", JSON.stringify(carrito));
};
