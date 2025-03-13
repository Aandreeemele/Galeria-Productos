function crearProducto(imgSrc, nombre, precioOriginal, precioDescuento, descripcion, id) {
    const producto = document.createElement("div");
    producto.classList.add("producto");

    // Imagen del producto
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = nombre;
    producto.appendChild(img);

    // Título del producto
    const titulo = document.createElement("h2");
    titulo.textContent = nombre;
    producto.appendChild(titulo);

    // Precio original del producto
    const precioOriginalElemento = document.createElement("p");
    precioOriginalElemento.classList.add("precio-original");
    precioOriginalElemento.textContent = `$${precioOriginal}`;
    producto.appendChild(precioOriginalElemento);

    // Precio con descuento
    const precioDescuentoElemento = document.createElement("p");
    precioDescuentoElemento.classList.add("precio-descuento");
    precioDescuentoElemento.textContent = `$${precioDescuento}`;
    producto.appendChild(precioDescuentoElemento);

    // Etiqueta de descuento
    const descuento = document.createElement("span");
    descuento.classList.add("descuento");
    descuento.textContent = "-40%";
    producto.appendChild(descuento);

    // Descripción del producto
    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;
    producto.appendChild(descripcionElemento);

    return producto;
}

export { crearProducto };
