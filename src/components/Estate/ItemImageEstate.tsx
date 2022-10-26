import Image from 'next/image';
import React, { FC, useMemo, useState } from 'react';

interface Props {
    images: string[];
    name: string;
}

export const ItemImageEstate: FC<Props> = ({ images, name }) => {

    const [isHovered, setIsHovered] = useState(false);
    const noImage = '/template/noimage.webp';

    const estateImage = useMemo(() => {
        return isHovered
            ? images[1]
            : images[0] 
    }, [isHovered, images]);

    if(images.length === 0) {
        return (
            <Image 
                src={ noImage }
                className="aspect-square rounded-2xl"
                alt={ name }
                width={ 500 }
                height={ 500 }
            />
        )
    }

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image 
                src={ estateImage }
                className="aspect-square rounded-2xl"
                alt={ name }
                width={ 500 }
                height={ 500 }
            />
        </div>
    )
}
