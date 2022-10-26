import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookSquare, FaInstagramSquare, FaPhoneAlt } from 'react-icons/fa';
import { routesMenu } from '../../routes';

export const Menu: FC = () => {
  return (
    <header className='absolute w-full bg-slate-200/80 p-5 z-50'>
      <div className='w-full max-w-[1440px] m-auto'>
        <div className='flex justify-center md:justify-end text-purple-h'>
          <ul className='flex'>
            <li className='text-2xl font-thin py-1 px-2 flex'>
              <FaPhoneAlt style={{ fontSize: '30px', paddingRight: '10px' }} /> 55 5398 9598
            </li>
            <li className='py-1 px-2'>
              <FaInstagramSquare style={{ fontSize: '30px' }} />
            </li>
            <li className='py-1 px-2'>
              <FaFacebookSquare style={{ fontSize: '30px' }} />
            </li>
          </ul>
        </div>
        <nav className='flex flex-col md:flex-row justify-between items-center mt-2 text-purple-h font-semibold'>
          <div className='w-[250px] py-3 md:py-0'>
            <Link href='/' className='cursor-pointer'>
              <Image 
                src='/template/hallivis.webp' 
                width={ 556 } 
                height={ 143 }
                alt="Hallivis"  
              />
            </Link>
          </div>
          <ul className='flex text-xl'>
            {routesMenu.map(({ url, name }) => (
              <li key={ name } className='border-r-2 border-purple-h py-1 px-2'>
                <Link href={ url }>{ name }</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
