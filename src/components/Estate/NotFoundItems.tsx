import { BlockHeader } from 'components/Global';
import { Layout } from 'components/Layout'
import Link from 'next/link'
import React, { FC } from 'react'
import { FaHome } from 'react-icons/fa';

interface Props {
    title: string;
}

export const NotFoundItems: FC<Props> = ({ title }) => {
    return (
        <Layout title={ title } description='Nadie en el mundo vende más bienes raíces que Hallivis®'>
            <BlockHeader />
            <div className='py-20 px-10 w-full max-w-[1440px] m-auto flex flex-col text-center justify-center text-3xl text-purple-h'>
                <p className='font-semibold'>Por el momento no contamos con este tipo de inmuble.</p>
                <Link 
                    href='/'
                    className='w-full text-center underline pt-10 flex justify-center items-center'
                    >
                    <FaHome className='text-[40px]' />
                    <p className='pl-2 text-xl'>Regresar al inicio</p>
                </Link>
            </div>
        </Layout>
    )
}
