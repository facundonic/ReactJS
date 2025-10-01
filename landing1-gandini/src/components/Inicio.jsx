import { Link } from 'react-router-dom'
import Mother from '../assets/mother-asus.png'
import PlacaVideo from '../assets/placa-video.png'
import Procesador from '../assets/procesador-amd.png'


function Inicio() {
    return (
        <>
        <div className='div-inicio'>
            <h1>PC SHOP</h1>
            <p>$ ¡Las mejores ofertas! $</p>
        </div>
        <div className='images-index'>
            <Link to={'/productos'}><div className='images-index-divs'>
            <img src={Mother} className='mother-asus-img' alt="Imágen de una placa madre de la marca Asus, modelo Maximus XII." />
            </div></Link>
            <Link to={'/productos'}><div className='images-index-divs'>
            <img src={PlacaVideo} className='placa-video-img' alt="Imágen de una placa de video de la marca Nitro." />
            </div></Link>
            <Link to={'/productos'}><div className='images-index-divs'>
            <img src={Procesador} className='procesador-img' alt="Imágen del procesador Amd Ryzen 3 3200G en su respectiva caja." />
            </div></Link>
        </div>
        </>
    )
}

export default Inicio

