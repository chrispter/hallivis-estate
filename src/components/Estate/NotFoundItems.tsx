import Link from 'next/link';
import React, { FC } from 'react';
import { BlockHeader, SearchForm } from '../../components/Global';
import { Layout } from '../../components/Layout';
import { FaHome } from 'react-icons/fa';

interface Props {
    title: string;
    search?: boolean;
}

export const NotFoundItems: FC<Props> = ({ title, search = false }) => {

    return (
        <Layout title={ title } description='Nadie en el mundo vende más bienes raíces que Hallivis®'>
            <BlockHeader />
            <>
                { search && (<SearchForm />) }
            </>
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
