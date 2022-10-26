import React, { FC } from 'react';
import Flickity from 'react-flickity-component';
import Image from 'next/image';
import { FLICKITY_OPTIONS } from '../../constants';

interface Props {
    images: string[];
}

export const Carousel: FC<Props> = ({ images }) => {

    const noImage = '/template/noimage.webp';

    if(images.length === 0) {
        return (
            <div className='h-[450px] flex flex-wrap justify-center items-center flex-col'>
                <Image 
                    src={ noImage }
                    alt="No Image"
                    width={ 450 }
                    height={ 600 }
                />
            </div>
        )
    }

    return (
        <Flickity
            className={'carousel'} 
            elementType={'div'} 
            options={ FLICKITY_OPTIONS } 
        >
            {images.map((image, i) => (
                <div key={ i.toString() } className='absolute w-[600px] h-[450px]'>
                    <Image
                        src={ image } 
                        alt={ image }  
                        fill
                        className='object-center object-cover pointer-events-none' 
                    />
                </div>
            ))}
        </Flickity>
    )
}
