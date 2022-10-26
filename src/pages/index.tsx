import type { NextPage } from 'next';
import { ContentHome, BannerHome } from 'components/Home';
import { Layout } from '../components/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home' description='En HALLIVIS ® te ayudamos a encontrar los mejores inmuebles en venta y renta a nivel nacional con 0% de comisión'>
      <BannerHome />
      <ContentHome />
    </Layout>
  )
}

export default HomePage;
