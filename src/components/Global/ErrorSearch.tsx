import React, { FC } from 'react'

export const ErrorSearch: FC = () => {
    return (
        <div className='w-full max-w-[852px] mx-auto mt-5 py-3 text-center bg-red-100 rounded-xl border-2 border-red-300 text-red-700'>
            <p>Obligatorio selecionar un valor para una mejor busqueda</p>
        </div>
    )
}
