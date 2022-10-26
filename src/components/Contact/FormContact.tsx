import React, { FC } from 'react';

export const FormContact: FC = () => {
    return (
        <form>
            <input type='text' className='border-2 w-full p-2 mb-5' placeholder='Nombre' />
            <input type='text' className='border-2 w-full p-2 mb-5' placeholder='Teléfono' />
            <input type='text' className='border-2 w-full p-2 mb-5' placeholder='Correo' />
            <textarea className='border-2 w-full p-2 mb-5' placeholder='Mensaje'></textarea>
            <button className='bg-purple-h hover:bg-purple-h/90 w-full text-white py-3'>Enviar</button>
        </form>
    )
}
