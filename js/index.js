actualizar_icono_carrito()
addCartToHTML_index()


let modelo_array = ["SE", "12", "13", "14", "15", "15 Plus", "15 Pro", "15 Pro Max"]
let tag_array = ["#precio_SE", "#precio_12", "#precio_13", "#precio_14", "#precio_15", "#precio_15_Plus", "#precio_15_Pro", "#precio_15_Pro_Max"]

modelo_array.forEach((elm, num) => {
    write_price(elm, tag_array[num])
})

function write_price(modelo, tag) {
    //Se obtiene un arreglo del modelo de interés
    let modelo_encontrado = sistema.productos.filter((elm2) => elm2.modelo == modelo)
    // Se ordena en función a su precio en forma ascendente
    modelo_encontrado.sort((a, b) => a.precio - b.precio)

    // El primer elemento es el de menor precio
    let precio = modelo_encontrado[0].precio
    // Se coloca el precio en el lugar correspondiente
    document.querySelector(tag).innerText = "Desde $ " + precio
}