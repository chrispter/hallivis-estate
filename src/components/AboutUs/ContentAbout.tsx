import React, { FC } from 'react';
import { Slogan } from 'components/Global';
import Image from 'next/image';
import { values } from '../../routes';
import { ItemValues } from './ItemValues';
import { ItemsInfo } from './ItemsInfo';

export const ContentAbout: FC = () => {
    return (
        <>
            <div className='pt-20 px-10 w-full max-w-[1440px] m-auto'>
                <Slogan />
            </div>

            <div className='w-full bg-purple-h p-10'>
                <div className='max-w-[1440px] m-auto'>
                    <div className=' w-full max-w-[500px] m-auto'>
                        <Image 
                            src='/template/hallivis.webp'
                            alt='Hallivis'
                            width={ 556 }
                            height={ 143 }
                        />
                    </div>
                
                    <div className='pt-10 text-white text-lg font-normal'>
                        <p className='mb-5'>Es una empresa establecida en 2017 en México con la finalidad de satisfacer las necesidades de un mercado inmobiliario en constante crecimiento y muy exigente.</p>

                        <p className='mb-5'>En nuestro país, se ha convertido en una compañía en crecimiento. Está presente en todos los estados de la república, siendo la primera inmobiliaria en cobrar 0% de comisión. Desde que comenzó Hallivis®, la compañía ha experimentado un importante crecimiento logrando una posición de liderazgo en el sector inmobiliario, avalada por más de 300 agentes independientes en 90 franquicias ubicadas en todo el territorio nacional.</p>

                        <p>Hallivis® ha crecido en las diferentes áreas del sector inmobiliario, cubriendo de una manera importante la comercialización Inmobiliaria dentro del sector HABITACIONAL, COMERCIAL E INDUSTRIAL apoyándose en un equipo altamente capacitado siendo actualmente la mejor opción de COMERCIALIZACIÓN para los DESARROLLADORES DE VIVIENDA que se ven beneficiados con el profesionalismo de una empresa que trabaja bajo una premisa de capacitación constante, contratación de Profesionales de Alto Desempeño y orientados a Resultados.</p>
                    </div>
                </div>
            </div>

            <div className='py-20 px-10 w-full max-w-[1440px] m-auto'>
                <div className='flex justify-around md:flex-row flex-col'>
                    {values.map(({ name, description, list }) => (
                        <ItemValues
                            key={ name } 
                            name={ name }
                            description={ description }
                            list={ list }
                        />
                    ))}
                </div>
            </div>

            <div className='relative h-[380px]'>
                <Image
                    src='/template/aboutus/hallivisCenterNosotros.webp'
                    alt='Hallivis Nosotros'
                    fill
                    className='object-center object-cover pointer-events-none'
                />
            </div>

            <ItemsInfo />
        </>
    )
}
