import React, { FC } from 'react';
import Image from 'next/image';
import { squareHome } from 'routes';
import { nameBrand } from '../../constants';
import { IconSquare } from './IconSquare';
import Link from 'next/link';
import { SearchForm } from 'components/Global';

export const ContentHome: FC = () => {
    return (
        <>
            <SearchForm />
            <div className='py-20'>
                <hr className='w-2/4 border-t-2 border-gray-h m-auto pt-10' />
                <h2 className='w-2/3 m-auto text-purple-h text-2xl md:leading-[55px] md:text-[40px] text-center'>
                En <span className='font-medium'>{ nameBrand.toUpperCase() }</span> te ayudamos a encontrar los mejores inmuebles en <span className='uppercase font-medium'>venta</span> y <span className='uppercase font-medium'>renta</span> a nivel <span className='uppercase font-medium'>nacional</span> con <span className='md:text-[50px] font-medium uppercase'>0% de comisión</span>
                </h2>
            </div>
            <div className='pb-20 px-8 flex flex-wrap justify-around w-full max-w-[1440px] m-auto'>
                {squareHome.map(({ name, url, image, state }) => (
                    <IconSquare 
                        key={ name }
                        name={ name }
                        url={ url }
                        image={ image }
                        state={ state }
                    />
                )).slice(0,4)}
            </div>

            <div className='w-full relative h-auto'>
                <div className='hidden md:block'>
                    <Image 
                        fill
                        className='object-center object-cover pointer-events-none z-1'
                        src='/template/home/centerHome.webp'
                        alt='Hallivis Home'
                    />
                </div>
                <div className='relative px-8 py-20 bg-[#272427] md:bg-transparent flex flex-col justify-end items-end md:text-right'>
                    <h3 className='w-full md:w-2/4 text-3xl text-white mb-5'>Asesórate con { nameBrand.toUpperCase() } y <span className='font-bold text-3xl'>renta o vende</span> tu propiedad de manera <span className='font-bold text-3xl'>segura y eficaz</span></h3>
                    <p className='md:w-2/4 text-lg text-white'>
                    Al vender o rentar una propiedad es importante contar con un agente Inmobiliario profesional y capacitado. Nuestros agentes se especializan en dar asesoría personalizada a clientes que quieren vender su propiedad a un precio justo de mercado y en el menor tiempo posible. De igual manera ayudan a sus clientes a encontrar la propiedad de sus sueños de una forma segura, fácil y sin complicaciones.
                    </p>
                    <Link 
                        href="/contacto"
                        className='uppercase mt-10 py-5 px-10 bg-purple-h text-2xl text-white'
                    >
                        Contactanos   
                    </Link>
                </div>
            </div>

            <div className='py-20'>
                <hr className='w-2/4 border-t-2 border-gray-h m-auto pt-10' />
                <h2 className='w-2/3 m-auto text-purple-h text-2xl md:leading-[55px] md:text-[40px] text-center uppercase font-bold'>
                Nadie en el mundo vende más bienes raíces que { nameBrand.toUpperCase() }
                </h2>
                <h4 className='w-2/3 m-auto text-purple-h py-5 text-2xl text-center'>Ser los líderes mundiales en Bienes Raíces, alcanzar nuestras metas a través de ayudar a otros a alcanzar las suyas. Todos ganan.</h4>
            </div>
        </>
    )
}
