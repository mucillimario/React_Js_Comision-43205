import { useState, useContext } from "react";
import { CarritoContext } from '../../context/CarritoContext';
import { db_firebase } from '../../services/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './Checkout.css'

// Funcion que formatea numero a moneda.

function formatoMoneda(moneda) {
    return '$ ' + moneda.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");



    //funciones y validaciones:

    const manejadorFormulario = (event) => {
        event.preventDefault();

        //Verificamos que los campos esten completos:
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        //Validamos que los campos del email coincidan
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        //Paso 1: Creamos el objeto de la orden:

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email,
            fechaCompra: serverTimestamp()
        };

        //Paso 2: Guardamos la orden en la base de datos:
        addDoc(collection(db_firebase, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.error("Error al crear la orden.", error);
                setError("Se produjo un error al crear la orden,");
            })

        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfirmacion("");
        setError("");
        setOrdenId("");


    }

    return (


        <div className="cardCheckout">

            <div className="checkoutDetallesCompra">
                <h2>Detalle de compra</h2>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <div className="detalleCompra">
                            <div className="detalleCompra_1">
                                <h4 className="cartItemBold esp1" > {producto.item.nombre} </h4>
                                <h4 className="esp2" >Precio unitario: {formatoMoneda(producto.item.precio)} </h4>
                            </div>
                            <div className="detalleCompra_2">
                                <h4>Cantidad: {producto.cantidad} </h4>

                                <h4 className="cartItemBold">SubTotal: {formatoMoneda(producto.item.precio * producto.cantidad)}</h4>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}

                {
                    ordenId && (
                        <div className="checkoutMsjExito">
                            <h3>¡Gracias por tu compra!  </h3>
                            <h3>Tu número de Orden es <strong>{ordenId}</strong>  </h3>
                        </div>
                    )
                }


            </div>
            <div className="checkoutFormulario">

                <h2>Datos del comprador</h2>

                <form onSubmit={manejadorFormulario} className="formulario">

                    <div className="form-group">
                        <label htmlFor=""> Nombre </label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor=""> Apellido </label>
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor=""> Telefono </label>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor=""> Email </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor=""> Email Confirmación </label>
                        <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>
                    <div className="checkoutFormBtnFinal">
                        {error && <p style={{ color: "red" }}> {error} </p>}

                        <button className="btnFinCompra" type="submit">
                            <i class="bi bi-check-lg"></i> Finalizar Compra
                        </button>

                    </div>

                </form>

            </div>
        </div>

    )
}

export default Checkout
