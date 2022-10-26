
import { ContentAbout } from 'components/AboutUs';
import { Banner } from 'components/Global';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';


const AboutUsPage: NextPage = () => {
  return (
    <Layout title='Nosotros' description='Nadie en el mundo vende más bienes raíces que Hallivis®'>
      <Banner 
        image='/template/aboutus/nosotrosHallivis.webp'
        nameImage='Nosotros Hallivis'
        small={ false }
      />
      <ContentAbout />
    </Layout>
  )
}

export default AboutUsPage;
