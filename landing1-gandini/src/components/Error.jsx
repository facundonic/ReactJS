import ImagenError from '../assets/error-img.jpg'


function Error() {
    return (
        <div className='div-error'>
            <img className='error-img' src={ImagenError} alt="Un chico mirando su laptop con signos de confusión." />
            <div className='div-error-h2'>
            <h2>Error al encontrar la URL</h2>
            <p>Regresa al inicio.</p>
            </div>
        </div>
    )
}

export default Error