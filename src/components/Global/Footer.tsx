import Link from 'next/link';
import React, { FC } from 'react';
import { routesMenu, routesSale } from '../../routes';
import { getYear, nameBrand } from '../../constants';

export const Footer: FC = () => {
  return (
    <>
        <div className='w-full bg-gray-h p-10'>
            <div className='max-w-[1440px] m-auto flex flex-col md:flex-row justify-between items-center'>

                <div className='w-full md:w-[70%]'>
                    <h1 className='text-purple-h font-bold text-3xl mb-5 text-center md:text-left'>{ nameBrand }</h1>
                    <div>
                        <ul className='flex flex-col md:flex-row md:flex-wrap'>
                            {routesSale.map(({ url, name }) => (
                                <li key={ name } className='text-white font-medium mb-3 md:border-r-2 md:border-white px-2 text-center md:text-left'>
                                    <Link href={ url }>{ name }</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='w-full md:w-[15%]'>
                    <ul className='list-disc border-t-2 md:border-none pt-5 md:pt-0'>
                        {routesMenu.map(({ url, name }) => (
                            <li key={ name } className='text-purple-h font-medium mb-3 text-center md:text-left'>
                                <Link href={ url }>{ name }</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </div>

        <div className='bg-white py-7 w-full max-w-[1440px]'>
            <div className='m-auto text-center text-2xl'>
                {`${ getYear }© ${ nameBrand } | Todos los derechos reservados`} 
            </div>               
        </div>
    </>
  )
}
