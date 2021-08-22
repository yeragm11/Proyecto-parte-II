class Carrito{

	//Añadir producto
	comprarProducto(e){
		e.prevDefault();
		if (e.target.classList.contains("agregar-carrito")) {

			const producto = e.target.parentElement.parentElement;
			this.leerDatosProductos(producto);
		}
	}

	leerDatosProducto(producto){

		const infoProducto = {
			nombre : producto.querySelector('nombre')
			imagen : producto.querySelector('imagen').src,
		}
	}

}