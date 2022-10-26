import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
    image: string;
    text?: string;
    nameImage: string;
    small: boolean;
};

export const Banner: FC<Props> = ({ image, text, nameImage, small }) => {
    return (
        <div className='w-full'>
            <div className={`relative ${ small ? 'h-[350px]': 'h-[600px]' }`}>
                <Image 
                    fill
                    className='object-center object-cover pointer-events-none'
                    src={ image }
                    alt={ nameImage }
                />
                
                {text && (
                    <div className='absolute bottom-10 md:right-0 z-10 w-full flex justify-end'>
                        <h3 className='text-[38px] font-light text-center md:text-right w-full px-10 max-w-[700px] text-white uppercase'>{ text }</h3>
                    </div>
                )}
            </div>
        </div>
    )
}
