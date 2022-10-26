import React, { FC } from 'react';

interface Props {
    address: string;
    amenities?: string[];
    description?: string,
    name: string;
    others?: string[];
    state: string;
    type: string;
    town: string;
}

export const LeftContent: FC<Props> = ({
    address,
    amenities,
    description,
    name,
    others,
    state,
    town,
    type,
}) => {
    return (
        <div className=' yw-full md:w-3/5 px-5'>
            <div className='flex justify-between items-center text-base my-2'>
                <p className='bg-purple-h text-white py-1 px-5 rounded capitalize'>{ type.slice(0, -1) }</p>
                <p className='bg-slate-200 py-1 px-2 rounded capitalize'>{ state }</p>
            </div>

            <h2 className='text-3xl font-semibold'>{ name }</h2>
            <h4 className='text-xl'>{ address }</h4>
            <p className='text-md mb-7'>{ town }</p>

            { description && (
                <>
                    <hr className='my-8'/>
                    <h4 className='text-xl font-medium mb-3'>Descripción</h4>
                    <p>{ description }</p>
                </>
            )}

            { others && (
                <>
                    <hr className='my-8'/>
                    <h3 className='text-3xl font-medium mb-3'>Características</h3>
                    <h4 className='text-xl font-medium mb-3'>Generales</h4>
                        <ul className='list-disc pl-5'>
                            {others?.map((item) =>(
                                <li key={ item } className="mb-5">{ item }</li>
                            ))}
                        </ul>
                </>
            )}

            { amenities && (
                <>
                    <hr className='my-8'/>
                    <h4 className='text-xl font-medium mb-3'>Amenidades</h4>
                    <ul className='list-disc pl-5'>
                        {amenities?.map((item) =>(
                            <li key={ item } className="mb-5">{ item }</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
