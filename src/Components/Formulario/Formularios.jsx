import imgPhone from '../../assets/Phone.png'
import imgGmail from '../../assets/IconGmail.png' 
import Button from '../Button/Button.jsx'

export default function Formulario() {
    

    return ( 
        <> 
            <section className='flex bg-contact gap-2.5'>
                <article className='flex flex-col gap-8 pt-28 pl-10'>
                    <div className='w-1/2'>
                        <h2 className='text-lg font-semibold text-black'>Entra en contacto con nosotros</h2>
                        <p className='pt-3 text-cont'>
                            Si tienes dudas, ponte en contacto con nosotros a través 
                            del formulario y te responderemos lo antes posible.
                        </p>
                    </div>

                    <div className=''>
                        <p className='text-cont'>
                            TAmbién puedes ponerte en contacto con nostros en nuestra 
                            dirección o a través del teléfono de la tienda.
                        </p> 
                        <address className='text-cont pt-8'>
                            <p>
                                742 Evergreen Terrace
                            </p>
                            <p>
                                Springfield, OR 12345
                            </p>

                        </address>

                        <address className='text-cont pt-2.5'> 
                            <div className='pt-2.5 flex'> 
                                <img className='w-2.5 h-2.5' src={imgPhone} alt="" />
                                <p className='text-cont'>+1(555)123-4567</p>
                            </div>

                            <div className='flex'> 
                                <img className='w-2.5 h-2.5' src={imgGmail} alt="" />
                                <p className='text-cont'>support@example.com</p>
                            </div>
                        </address>
                        <p className='flex text-cont p-3.5 gap-1'>¿Buscas un trabajo?<span className='text-black underline'>Ver nuestras ofertas.</span> </p>
                    </div>
                </article>

                <article className='bg-white p-8 w-2/5 flex justify-center items-center'>
                    <form className='flex flex-col gap-6 '>
                        <div className='flex flex-col gap-1 text-label text-xs'>
                            <label>Nombre Completo</label> 
                            <input type="text" className='rounded-md w-96 border border-label' />
                        </div>

                        <div className='flex flex-col gap-1 text-label text-xs'>
                            <label>Email</label> 
                            <input type="text" className='rounded-md w-96 border border-label'/>
                        </div>

                        <div className='flex flex-col gap-1 text-label text-xs'>
                            <label>Telefono </label> 
                            <input type="text" className='rounded-md border w-96 border-label'/>
                        </div>

                        <div className='flex flex-col gap-1 text-label text-xs'>
                            <textarea 
                                name="quejas" id="quejas" cols="25" 
                                rows="9" placeholder="¿En qué podemos ayudarte?" className='w-96 border border-label rounded-md'>
                            </textarea>
                        </div>

                        <div>
                            <input type="checkbox" name="" id="" />
                            <label> Acepto la
                                <p>Política de Privacidad</p>
                                y los
                                <p>Términos y condiciones.</p>
                            </label>
                        </div>
                        
                        <div> 
                            <Button 
                            bgColor="bg-verde"
                            textColor='text-white'
                            TextButton= "Enviar" 
                            /> 
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}