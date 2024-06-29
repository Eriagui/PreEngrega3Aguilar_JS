let body = document.querySelector('body');
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let listCartHTML = document.querySelector('.listCart');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(sistema.carrito.length > 0){
        sistema.carrito.forEach(item => {
            totalQuantity = totalQuantity +  item.cantidad;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.id;

            let positionProduct = sistema.productos.findIndex((value) => value.id == item.id);
            let info = sistema.productos[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="../assets/images/${info.imagen}.webp">
                </div>
                <div class="name">
                Iphone ${info.modelo}, ${info.color}, ${info.capacidad} GB
                </div>
                <div class="totalPrice">$${info.precio * item.cantidad}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.cantidad}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    //iconCartSpan.innerText = totalQuantity;
}

const addCartToHTML_index = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(sistema.carrito.length > 0){
        sistema.carrito.forEach(item => {
            totalQuantity = totalQuantity +  item.cantidad;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.id;

            let positionProduct = sistema.productos.findIndex((value) => value.id == item.id);
            let info = sistema.productos[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="./assets/images/${info.imagen}.webp">
                </div>
                <div class="name">
                Iphone ${info.modelo}, ${info.color}, ${info.capacidad} GB
                </div>
                <div class="totalPrice">$${info.precio * item.cantidad}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.cantidad}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    //iconCartSpan.innerText = totalQuantity;
}

function cantidad_carrito() {
    total_articulos = 0
    sistema.carrito.forEach((elm) =>{
        total_articulos = total_articulos + elm.cantidad
    })
    return total_articulos
}

function actualizar_icono_carrito(){
    let total = cantidad_carrito()
    document.querySelector(".cantidad-carrito").innerText = total
}