import React, { FC } from 'react';
import { characteristics } from '../../routes';

export const ItemsInfo:FC = () => {
    return (
        <div className='py-20 px-10 w-full max-w-[1440px] m-auto flex flex-col md:flex-row'>
            <div className='w-full md:w-3/5 pr-0 md:pr-10'>  
                <div className='mb-10'>
                    <h3 className='text-purple-h text-2xl font-semibold pb-5 uppercase'>Vendedores asociados</h3>
                    <p className='mb-5 text-lg'>Nuestro equipo de trabajo esta integrado de la siguiente forma:</p>
                    <p className='mb-5 text-lg'>Más de 30 vendedores capacitados en ventas, trámites hipotecarios y aspectos legales básicos.</p>
                    <p className='text-lg'>2 oficinas locales con una fuerza de ventas capacitados.</p>
                </div>
                <div>
                    <h3 className='text-purple-h text-2xl font-semibold pb-5 uppercase'>Equipo de apoyo profesional</h3>
                    <p className='text-lg'>Como toda empresa Corporativa cuenta con un equipo de profesionales con los que trabaja de modo conjunto, para lograr los objetivos de nuestros clientes. Este equipo está integrado por personas y empresas reconocidas como Notarios, Abogados, Contadores, Empresas de Publicidad e Instituciones de Crédito Valuadores, Topógrafos, Constructores con la finalidad de brindar un SERVICIO INTEGRAL a nuestros clientes y así garantizar el ÉXITO en nuestras operaciones.</p>
                </div>
            </div>
            <div className='w-full md:w-2/5 mt-10 md:mt-0'>
                <h3 className='text-purple-h text-2xl font-semibold pb-5 uppercase'>Características de nuestro equipo</h3>
                <ul className='list-disc px-10 border-l-8 border-purple-h'>
                    { characteristics.map(item => <li key={ item } className='text-lg mb-6'>{ item }</li>)}
                </ul>
            </div>
        </div>
    )
}
