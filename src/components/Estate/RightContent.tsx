import React, { FC } from 'react';
import { FaBath, FaBed, FaCar, FaRegBuilding, FaRulerCombined, FaRulerHorizontal } from 'react-icons/fa';
import { MediaShare } from './MediaShare';

interface Props {
    costs: number;
    baths?: number | undefined;
    rooms?: number | undefined;
    levels?: number | undefined;
    m2live?: number | undefined;
    m2total?: number | undefined;
    parking?: number | undefined;
    host: string;
}

export const RightContent: FC<Props> = ({
    costs,
    baths,
    levels,
    m2live,
    m2total,
    parking,
    rooms,
    host,
}) => {
    return (
        <div className='w-full md:w-2/5'>

            <div className='bg-slate-100 p-5 rounded-3xl mb-5 flex flex-wrap'>
                { levels && (
                    <div className='w-1/4 flex flex-col justify-center items-center'>
                        <FaRegBuilding className='text-slate-600 text-2xl' />
                        <p className='text-sm font-normal'>Niveles</p>
                        <p className='text-sm font-semibold'>{ levels }</p>
                    </div>
                )}

                { rooms && (
                    <div className='w-1/4 flex flex-col justify-center items-center'>
                        <FaBed className='text-slate-600 text-2xl' />
                        <p className='text-sm font-normal'>Recámaras</p>
                        <p className='text-sm font-semibold'>{ rooms }</p>
                    </div>
                )}

                { baths && (
                    <div className='w-1/4 flex flex-col justify-center items-center'>
                        <FaBath className='text-slate-600 text-2xl' />
                        <p className='text-sm font-normal'>Baños</p>
                        <p className='text-sm font-semibold'>{ baths }</p>
                    </div>
                )}

                { parking && (
                    <div className='w-1/4 flex flex-col justify-center items-center'>
                        <FaCar className='text-slate-600 text-2xl' />
                        <p className='text-sm font-normal'>Estacionamientos</p>
                        <p className='text-sm font-semibold'>{ parking }</p>
                    </div>
                )}

                { m2live && (
                    <div className='w-1/4 flex flex-col justify-center items-center mt-10'>
                        <FaRulerHorizontal className='text-slate-600 text-2xl' />
                        <p className='text-sm font-normal'>Construidos</p>
                        <p className='text-sm font-semibold'>{ m2live } m²</p>
                    </div>
                )}

                { m2total && (
                    <div className='w-1/4 flex flex-col justify-center items-center mt-10'>
                        <FaRulerCombined className='text-slate-600 text-2xl' />
                        <p className='text-sm font-normal'>Totales</p>
                        <p className='text-sm font-semibold'>{ m2total } m²</p>
                    </div>
                )}
            </div>

            <div className='bg-slate-100 p-5 rounded-3xl mb-5'>
                <h4 className='font-semibold'>Desde</h4>
                <h3 className='text-3xl font-semibold'>$ { costs.toLocaleString('en-US')} MXN</h3>
            </div>

            <MediaShare host={ host } />

        </div>
    )
}
