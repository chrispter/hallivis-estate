import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
    image: string;
    name: string;
    state: string;
    url: string;
};

export const IconSquare: FC<Props> = ({ url, image, name, state}) => {
    return (
        <div className='w-full md:w-1/4 px-3'>
            <div className=' aspect-square bg-purple-h text-center relative mb-10 md:mb-0' key={ name }>
                <Link 
                    href={ url }
                    className='text-white w-full h-full'    
                >
                    <Image 
                        fill
                        className='object-center object-cover pointer-events-none'
                        src={ image }
                        alt={ name }
                    />
                    <div className='relative aspect-square bg-slate-600/50 hover:bg-slate-600/80 flex justify-center items-center flex-col' >
                        <h4 className='py-1 font-semibold text-3xl'>{ name }</h4>
                        <p className='text-xl py-2'>{ state }</p>
                        <div className='bg-purple-h py-3 px-5'>Ver inmuebles</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
