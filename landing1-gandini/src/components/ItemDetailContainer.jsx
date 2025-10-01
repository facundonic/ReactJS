import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import componentesComputadora from "../productos/productos"
function ItemDetailContainer() {
    const { id } = useParams();

    const producto = componentesComputadora.find(prod => prod.id === parseInt(id))

    if (!producto) {
        return (
            <>
                <div className='div-producto-fallido'>
                    <img src="/producto-no-encontrado.png" alt="" />
                    <h2>Error al encontrar el producto</h2>
                    <Link to={'/productos'}><button>Volver a productos</button></Link>
                </div>
            </>
            
        )
    }

    return (
        <>
        <div className='div-producto-detalle'>
            <div className='div-card-detalle'>
                <img className='foto-producto-detalle' src={producto.foto} alt={producto.nombre} />
                <div>
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <h3>AR$: {producto.precio.toLocaleString('es-AR')}</h3>
                </div>
                <div className='buttons-funcionalidad-detalles-div'>
            <Link to={'/productos'}><button>Volver</button></Link>
            <button>🛒</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetailContainer