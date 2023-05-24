const productos = [
    // Caterogia Clasicos
    { nombre: "90 Años de Juego", precio: "7.500", precioOFF:"10.000", id: "2550", idCat: "1", img: "/img/img_90anos.webp", detalle: "Explora 90 años de aprendizaje mediante el juego. Niños, adultos y abuelos podrán disfrutar de largas horas de diversión y nostalgia mientras recrean juguetes LEGO® de diferentes épocas." },
    { nombre: "Ladrillos Transparentes", precio: "11.775", precioOFF:"15.700",id: "3436", idCat: "1", img: "/img/img_ladrillosTransparentes.png", detalle: "Dale chispa al juego de tu peque con LEGO® con este deslumbrante set permite a los niños jugar con creatividad gracias a una colorida selección de piezas LEGO® transparentes" },
    { nombre: "Ladrillo y Ruedas", precio: "13.125",precioOFF:"12.505", id: "3455", idCat: "1", img: "/img/img_ladrillosRuedas.webp", detalle: "Ponle ruedas a la creatividad de tu peque. Pon a rodar la creatividad de tu peque con este colorido set de juego y su estimulante variedad de ruedas y ladrillos" },
    // Categoria Arquitectura
    { nombre: "Gran Pirámide de Guiza", precio: "18.000",precioOFF:"13.500", id: "8834", idCat: "2", img: "/img/img_piramideGuisa.webp", detalle: "Recrea una de las maravillas de la Antigüedad y siente cómo te transportas hasta el antiguo Egipto mientras creas y expones este modelo LEGO® de la gran pirámide de Guiza." },
    { nombre: "La Casa Blanca", precio: "9.300",precioOFF:"12.400", id: "3484", idCat: "2", img: "/img/img_casaBlanca.webp", detalle: "Construye un símbolo estadounidense,     si has ido a la Casa Blanca, sueñas con visitarla o simplemente sabes apreciar la arquitectura majestuosa, te encantará este set." },
    { nombre: "Taj Mahal", precio: "14.625",precioOFF:"19.500", id: "2975", idCat: "2", img: "/img/img_tajMahal.png", detalle: "La más grandiosa expresión arquitectónica del amor, este impresionante modelo del Taj Mahal para construir y exponer es perfecto para los amantes de la arquitectura, los viajes y la historia." },
    // Categoria Mario Bross
    { nombre: "La casa de Donkey Kong", precio: "19.537",precioOFF:"26.050", id: "8342", idCat: "3", img: "/img/img_casaDK.webp", detalle: "Los peques podrán construir un colorido nivel en la jungla e interpretar historias con el Set de Expansión: Casa del árbol de Donkey Kong LEGO® Super Mario™ (71424). La casa del árbol cuenta con un montón de genuinos detalles que entusiasmarán a los fans de Donkey Kong™, como un televisor construible, una radio y un compartimento secreto. Los niños usarán sus figuras de LEGO® Mario™, LEGO® Luigi™ o LEGO® Peach™ (no incluidas) para obtener recompensas en monedas digitales por sentarlas en el lomo de Donkey Kong, echar una siesta en la hamaca, hacer caer un plátano de la palmera y regalárselo a Donkey Kong, “tocar” las congas, visitar a Cranky Kong y mucho más. Nota: Para jugar de manera interactiva, necesitas un pack inicial (71360, 71387 o 71403)." },
    { nombre: "Bloque de Interrogación", precio: "18.750",precioOFF:"25.000", id: "25.000", idCat: "3", img: "/img/img_bloqueInterrogacion.webp", detalle: "Niveles por descubrir, juega mientras construyes este set de 2064 piezas, ideal también para exponer, y descubre sus muchas referencias al juego y sus sorpresas ocultas." },
    { nombre: "El Poderoso Bowser™", precio: "16.125",precioOFF:"21.500", id: "51259", idCat: "1354", img: "/img/img_poderosoBrowser.webp", detalle: "Rinde homenaje a un emblemático enemigo del universo Super Mario™ con el modelo LEGO® El Poderoso Bowser™ para exponer y jugar." },

]

// promesa para retornar todo el listado de productos
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

// promesa para retonar solo 1 producto
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const producto = productos.find(prod => prod.id === id)
            resolve(producto);
        }, 2000)
    })
}
// promesa para retonar un filtrado por una categoria seleccionada
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },2000 )
    })
}
