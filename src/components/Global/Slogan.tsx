import { nameBrand } from '../../constants';
import React, { FC } from 'react';

export const Slogan: FC = () => {
    return (
        <div className='w-full pb-10'>
            <h2 className='pb-10 w-full md:w-2/3 m-auto text-purple-h text-2xl md:leading-[55px] md:text-[40px] text-center uppercase'>Nadie en el mundo <span className='font-semibold'>vende más bienes raíces</span> que <span className='font-semibold'>{ nameBrand.toUpperCase() }</span></h2>

            <hr className='w-2/4 border-t-2 border-gray-h m-auto pt-10' />
        </div>
    )
}
