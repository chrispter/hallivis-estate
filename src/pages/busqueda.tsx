import type { NextPage } from 'next';
import { ContentHome, BannerHome } from 'components/Home';
import { Layout } from '../components/Layout';
import { BlockHeader } from 'components/Global';

const SearchPage: NextPage = () => {
  return (
    <Layout title='Busqueda' description='En HALLIVIS ® te ayudamos a encontrar los mejores inmuebles en venta y renta a nivel nacional con 0% de comisión'>
      <BlockHeader />
    </Layout>
  )
}

export default SearchPage;
