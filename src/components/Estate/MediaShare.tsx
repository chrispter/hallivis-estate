import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { FaFacebook, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa';

interface Props {
    host: string;
}

export const MediaShare: FC<Props> = ({ host }) => {
    const { asPath } = useRouter();
    const url =  `${ host }${ asPath }`;
    
    return (
        <div className='bg-slate-100 p-5 rounded-3xl'>
            <h4 className='font-semibold mb-5'>Compartir</h4>
            <div className='text-3xl text-slate-600 flex'>
                <a 
                    target="_blank"  
                    rel="noreferrer" 
                    className='mx-3'
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://${ url }`}
                >
                    <FaFacebook  />
                </a>
                <a 
                    target="_blank"  
                    rel="noreferrer" 
                    href={`https://twitter.com/share?url=https://${ url }`}
                >
                    <FaTwitterSquare className='mx-3' />
                </a>
                <a 
                    target="_blank"  
                    rel="noreferrer" 
                    href={`https://api.whatsapp.com/send/?text=https://${ url }`}
                >
                    <FaWhatsapp className='mx-3' />
                </a>
            </div>
        </div>
    )
}
