import {Link} from 'react-router-dom'


export default function NavLink() {
    

    return ( 
        <div className='flex gap-6 font-semibold text-sm'> 
            <Link to="Tienda">Tienda</Link> 
            <p>Suscripción</p> 
            <p>Para empresas</p> 
            <p>Sobre nosotros</p> 
            <p>Contacto</p>
        </div>
    )
}