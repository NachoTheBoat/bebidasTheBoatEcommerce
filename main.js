const contenedorProductos = document.querySelector(".contenedorProductos");
const modalCarrito = document.getElementById("modalCart");
const contenedorCarrito = document.getElementById("containerCarrito");
let carrito = [];

const contadorCart = document.getElementById("contadorCarrito");
let botonesAgregar = document.querySelectorAll(".productoAgregar");

//funcion para renderizar productos en el dom
function cargarProductos() {
  productos.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
        <img src="${producto.imagen}" class="productoImagen" alt="" />
        <div>
          <h3 class="productoTitulo">${producto.nombre}</h3>
          <p class="productoPrecio">$${producto.precio}</p>
          <button class="productoAgregar" id="${producto.id}" )>agregar</button>
        </div>
      </div>
    `;
    contenedorProductos.append(div);
  });
}

cargarProductos();

function actualizarBotones() {
  console.log("actualizar btones");
  botonesAgregar = document.querySelectorAll(".productoAgregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}
actualizarBotones();

// Agregar productos seleccionados
function agregarAlCarrito(e) {
  Toastify({
    text: "producto agregado al carrito!🥳🍹",
    offset: {
      x: 75, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
  }).showToast();
  console.log("clicked");

  const btnId = e.currentTarget.id;
  console.log(btnId);
  let productoAgregado = productos.find((producto) => producto.id == btnId);

  if (carrito.some((producto) => producto.id == btnId)) {
    let index = carrito.findIndex((producto) => producto.id == btnId);
    console.log(index);
    carrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    carrito.push(productoAgregado);
  }
  actualizarContador();
  actualizarTotal();
  actualizarCarrito();
  localStorage.setItem("miCarrito", JSON.stringify(carrito));

  console.log(carrito);
  carrito = JSON.parse(localStorage.getItem("miCarrito"));

  //prueba
}

function actualizarContador() {
  let numberCart = carrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  contadorCart.innerHTML = numberCart;
}
