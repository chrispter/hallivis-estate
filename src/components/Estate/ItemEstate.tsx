import { EstateInfo } from '../../interfaces';
import React, { FC } from 'react';
import Link from 'next/link';
import { FaBath, FaBed, FaCar, FaRulerHorizontal } from 'react-icons/fa';
import { ItemImageEstate } from './ItemImageEstate';

interface Props {
    estate: EstateInfo;
}

export const ItemEstate: FC<Props> = ({ estate }) => {

    const {
        name,
        address,
        costs,
        state,
        type,
        town,
        baths,
        rooms,
        m2total,
        parking,
        images,
        slug,
    } = estate;

    return (
        <Link 
            href={`/inmuebles/detalles-inmueble/${ slug }`}
            className='w-full max-w-[490px] md:w-1/2 lg:w-1/4 py-5 px-6 m-auto md:m-0 flex flex-col justify-around'
        >
            <ItemImageEstate 
                images={ images } 
                name={ name}
            />

            <div className='flex justify-between items-center text-xs my-2'>
                <p className='bg-purple-h text-white py-1 px-2 rounded capitalize'>{ type.slice(0, -1) }</p>
                <p className='bg-slate-200 py-1 px-2 rounded capitalize'>{ state }</p>
            </div>

            <h4 className='font-medium'>{ name }</h4>
            <p>{ address }</p>
            <p className='text-sm'>{ town }</p>

            <h4 className='py-4 text-lg font-semibold'>{ costs.toLocaleString('en-US') } MXN</h4>
            <hr /> 

            <div className='flex py-3'>
                <div className='w-1/4 flex flex-col justify-center items-center'>
                    <FaBed className='text-slate-600' />
                    <p className='text-sm font-semibold'>{ rooms }</p>
                </div>
                <div className='w-1/4 flex flex-col justify-center items-center'>
                    <FaBath className='text-slate-600' />
                    <p className='text-sm font-semibold'>{ baths }</p>
                </div>
                <div className='w-1/4 flex flex-col justify-center items-center'>
                    <FaCar className='text-slate-600' />
                    <p className='text-sm font-semibold'>{ parking }</p>
                </div>
                <div className='w-1/4 flex flex-col justify-center items-center'>
                    <FaRulerHorizontal className='text-slate-600' />
                    <p className='text-sm font-semibold'>{ m2total } m²</p>
                </div>
            </div>
        </Link>
    )
}
