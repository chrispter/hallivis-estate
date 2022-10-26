import { Slogan } from 'components/Global';
import React, { FC } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FormContact } from './FormContact';

export const ContentContact: FC = () => {
    return (
        <div className='py-20 px-10 w-full max-w-[1440px] m-auto'>
            
            <Slogan />

            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <FormContact />
                </div>
                <div className='md:w-1/2 flex flex-col justify-center items-center text-center text-purple-h'>
                    <div className='flex flex-col justify-center items-center py-5'>
                        <FaPhoneAlt style={{ fontSize: '40px'}} />
                        <h4 className='text-2xl py-2'>Teléfono</h4>
                        <p>55 5398 9598</p>
                    </div>
                    <div className='flex flex-col justify-center items-center py-5'>
                        <FaEnvelope style={{ fontSize: '40px'}} />
                        <h4 className='text-2xl py-2'>Correo</h4>
                        <p>
                            <a href='mailto:contacto@hallivis.com'>contacto@hallivis.com</a>
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center py-5'>
                        <FaMapMarkerAlt style={{ fontSize: '40px'}} />
                        <h4 className='text-2xl py-2'>Dirección</h4>
                        <p>Santa Mónica, Tlalnepantla de Baz, Estado de México.</p>
                    </div>
                </div>
            </div>
      </div>
    )
}
