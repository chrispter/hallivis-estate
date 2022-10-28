import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from '../components/Layout';
import { BlockHeader, SearchForm } from '../components/Global';
import { NotFoundItems } from '../components/Estate';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import { EstateInfo } from '../interfaces';
import { estatesInfo } from '../routes';

const SearchPage: NextPage = () => {

  const [estatesFilter, setEstatesFilter] = useState<EstateInfo[]>([]);
  const { form: { city, propriety, state } } = useContext(SearchContext);


  if(estatesFilter.length === 0) return <NotFoundItems title='Busqueda' search={ true } />;

  return (
    <Layout title='Busqueda' description='En HALLIVIS ® te ayudamos a encontrar los mejores inmuebles en venta y renta a nivel nacional con 0% de comisión'>
      <BlockHeader />
      <SearchForm />
    </Layout>
  )
}

export default SearchPage;
