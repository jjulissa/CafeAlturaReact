import imgFlecha from '../../assets/IconFlechas.png'
import salon from '../../assets/SalonCafeDeAltura.png'

export default function Shop() {
    
    return ( 
        <> 
        <section className='bg-hover gap-6 py-11 px-6'>
            <div className='flex gap-6 '>
                <article className='flex flex-col gap-4 pt-32'>
                    <h2 className='text-verde text-2xl font-medium' >Pruébalo en nuestro coffee shop</h2>
                    <p className='text-sm font-normal text-black'>
                        Visita nuestra cafetería en el centro de la ciudad 
                        para probar los granos de café antes de hacer tu
                        pedido y llévate un descuento
                    </p>
                    <picture className='flex gap-4'>
                        <p className='text-sm font-semibold text-black'>Cómo llegar</p> 
                        <img className='w-6 h-4' src={imgFlecha} alt="img" />
                    </picture>
                </article> 
                <img className='w-salonCafeDeAltura h-salonCafeDeAltura' src={salon} alt="img" />
            </div>
        </section>
        </>

    )
}