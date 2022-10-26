import { ContentContact } from 'components/Contact';
import { Banner } from 'components/Global';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout';


const ContactPage: NextPage = () => {
  return (
    <Layout title='Contacto' description='Nadie en el mundo vende más bienes raíces que Hallivis®'>
      <Banner 
        image='/template/contact/contactHallivisBanner.webp'
        nameImage='Contact Hallivis Banner'
        small={ false }
      />
      <ContentContact />
    </Layout>
  )
}

export default ContactPage;
