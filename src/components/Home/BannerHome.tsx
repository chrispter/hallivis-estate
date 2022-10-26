import Image from 'next/image';
import React, { FC } from 'react';

export const BannerHome:FC = () => {
  return (
    <div className='w-full'>
        <div className='relative h-[600px]'>
            <Image 
              fill
              className='object-center object-cover pointer-events-none'
              src='/template/home/headerHallivisHome.webp'
              alt='Hallivis Home'
            />
            <div className='absolute bottom-10 md:right-0 z-10 w-full flex justify-end'>
              <h3 className='text-[38px] font-light text-center md:text-right w-full px-10 max-w-[700px] text-white uppercase'>El lugar <span className='font-bold'>que buscas para cumplir</span> tus sueños</h3>
            </div>
        </div>
    </div>
  )
}
