import { Link } from "react-router-dom"

function Items({foto, nombre, id, precio}) {
    return (
        <>
        <div className='container-cards'>
        <div className='card-productos'>
            <img className='img-productos' src={foto} alt={nombre} />
            <h2>{nombre}</h2>
            <p>AR$: {precio.toLocaleString('es-AR')}</p>
            <div>
            <Link to={`/productos/${id}`}><button>Ver</button></Link>
            <button>🛒</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Items