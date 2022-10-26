import type { NextPage } from 'next';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { Layout } from '../components/Layout';


const ContactPage: NextPage = () => {
  return (
    <Layout title='404' description='Nadie en el mundo vende más bienes raíces que Hallivis®'>
      <div className='w-full max-w-[1440px] m-auto pt-[280px] pb-20 text-purple-h'>
        <h4 className='text-[60px] md:text-[180px] text-center font-bold md:mb-20 mb-2'>404</h4>
        <p className='text-3xl text-center'>Página no encontrada</p>
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

export default ContactPage;
