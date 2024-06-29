class Iphone{
    constructor(id, modelo, capacidad, color, precio, existencias, imagen){
        this.id = id
        this.modelo = modelo
        this.capacidad = capacidad
        this.color = color
        this.precio = precio
        this.existencias = existencias
        this.imagen = imagen
    }
}

class Usuario{
    constructor (nombre, contrasena){
        this.nombre = nombre
        this.contrasena = contrasena
    }
}

class Sistema {
    constructor() {
        this.productos = [
            new Iphone(1, "SE", 64,  "negro", 10499, 10, "SE_Negro"),
            new Iphone(2, "SE", 128, "negro", 11499, 11, "SE_Negro"),
            new Iphone(3, "SE", 64,  "rojo", 10499, 12, "SE_Rojo"),
            new Iphone(4, "SE", 128, "rojo", 11499, 13, "SE_Rojo"),
            new Iphone(5, "12", 64,  "negro", 11499, 14, "12_Negro"),
            new Iphone(6, "12", 128, "negro", 13499, 15, "12_Negro"),
            new Iphone(7, "13", 128, "azul", 14499, 16, "13_Azul"),
            new Iphone(8, "13", 256, "azul", 16499, 17, "13_Azul"),
            new Iphone(9, "13", 128, "azul media noche", 14499, 18, "13_AzulMedia"),
            new Iphone(10, "13", 256, "azul media noche", 16499, 19, "13_AzulMedia"),
            new Iphone(11, "13", 128, "rojo", 14499, 20, "13_Rojo"),
            new Iphone(12, "13", 256, "rojo", 16499, 21, "13_Rojo"),
            new Iphone(13, "14", 128, "rojo", 16999, 22, "14_Rojo"),
            new Iphone(14, "14", 256, "amarillo", 18999, 23, "14_Amarillo"),
            new Iphone(15, "15", 128, "amarillo", 19499, 24, "15_Amarillo"),
            new Iphone(16, "15", 256, "azul", 21499, 25, "15_Azul"),
            new Iphone(17, "15", 512, "negro", 25999, 26, "15_Negro"),
            new Iphone(18, "15 Plus", 128, "amarillo", 21999, 27, "15P_Amarillo"),
            new Iphone(19, "15 Plus", 256, "azul", 23999, 28, "15P_Azul"),
            new Iphone(20, "15 Plus", 512, "negro", 28499, 29, "15P_Negro"),
            new Iphone(21, "15 Pro", 128, "blanco", 23999, 30, "15Pro_Blanco"),
            new Iphone(22, "15 Pro", 256, "natural", 25999, 31, "15Pro_Natural"),
            new Iphone(23, "15 Pro", 512, "negro", 30499, 32, "15Pro_Negro"),
            new Iphone(24, "15 Pro", 1000, "azul", 34999, 33, "15Pro_Azul"),
            new Iphone(25, "15 Pro Max", 256, "natural", 28999, 34, "15_Pro_Natural"),
            new Iphone(26, "15 Pro Max", 512, "negro", 33499, 35, "15ProMax_Negro"),
            new Iphone(27, "15 Pro Max", 1000, "blanco", 37999, 36, "15ProMax_Blanco"),
        ]

        this.usuarios = [
            new Usuario("PEPE", "ElPepe"),
            new Usuario("Maria", "Maria123")
        ]

        this.carrito = []
    }
}

class Articulo{
    constructor(id, cantidad){
        this.id = id
        this.cantidad = cantidad
    }
}

let sistema_inicial = new Sistema
let sistema_guardado = JSON.parse(localStorage.getItem("saved_system"))
//Si en el local storage no hay un sistema guardado, entonces se toma el que se tiene en el archivo sistema
//Para eso nos ayudamos del operador Nullish
let sistema = sistema_guardado ?? sistema_inicial