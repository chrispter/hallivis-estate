import { ItemEstate } from '../../components/Estate';
import type { NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { estatesInfo } from '../../routes';
import { Banner } from '../../components/Global';

const AboutUsPage: NextPage = () => {
  return (
    <Layout title='Inmuebles' description='Nadie en el mundo vende más bienes raíces que Hallivis®'>
      <Banner 
        image='/template/home/centerHome.webp'
        nameImage='Contact Hallivis Banner'
        small={ true }
        text='Inmuebles'
      />
      <div className='py-20 px-10 w-full max-w-[1440px] m-auto flex flex-col md:flex-row flex-wrap'>
        {estatesInfo.map((estate) => (
          <ItemEstate 
            key={ estate.name } 
            estate={ estate }
          />
        ))}
      </div>
    </Layout>
  )
}

export default AboutUsPage;
