
function Contacto() {
    return (
        <>
            <h2 className='h2-contacto'>Contacto</h2>
            <div className='div-quienes-somos'>
                <h3>¿Quienes somos?</h3>
                <p className='parrafos-contacto'>Somos una empresa de venta de productos y componentes de computación, en vigencia desde hace 5 años, trabajamos con las empresas Redragon, Asus, AMD, Intel y Nvidia.</p>
                <p className='parrafos-contacto'>Nuestra responsabilidad es mantener el orden, la organización y el estado de tus compras, para que lo recibas en condiciones, en tiempo y forma y con la garantía estipulada en cada producto.</p>
            </div>
            <div className='div-contactanos'>
                <h3>Contáctanos</h3>
                <p className='parrafos-contacto'>pcshop@gmail.com</p>
                <p className='parrafos-contacto'>pcshop@hotmail.com</p>
                <p className='parrafos-contacto'>Redes: @pc.shop</p>
            </div>
            <div className='div-comentario'>
                <h3>¡Déjanos un comentario!</h3>
                <form>
                    <div>
                    <input className='input-comentario' placeholder="Escribe un comentario..."/>
                    </div>
                    <div className='div-input-submit'>
                    <input className='input-submit' type="submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contacto