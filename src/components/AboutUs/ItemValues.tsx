import React, { FC } from 'react';

interface Props {
    name: string;
    description?: string;
    list?: string[]
}

export const ItemValues: FC<Props> = ({ name, description, list }) => {
    return (
        <div className='w-full md:w-1/3 px-3 mb-10 md:mb-0'>
            <h3 className='text-purple-h text-2xl font-semibold pb-5 uppercase'>{ name }</h3>

            { description && <p className='text-lg'>{ description }</p> }

            { list && (
                <ul className='list-disc px-5 '>
                    { list.map(item => <li key={ item } className='text-lg'>{ item }</li>)}
                </ul>
            )}
        </div>
    )
}
