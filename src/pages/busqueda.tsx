import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { BlockHeader, SearchForm } from '../components/Global';
import { ItemEstate, NotFoundItems } from '../components/Estate';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';


const SearchPage: NextPage = () => {

  const { resultEstates } = useContext(SearchContext);


  if(resultEstates.length === 0) return <NotFoundItems title='Busqueda' search={ true } />;

  return (
    <Layout title='Busqueda' description='En HALLIVIS ® te ayudamos a encontrar los mejores inmuebles en venta y renta a nivel nacional con 0% de comisión'>
      <BlockHeader />
      <SearchForm />
      <div className='py-20 px-10 w-full max-w-[1440px] m-auto flex flex-col md:flex-row flex-wrap'>
        {resultEstates.map((estate) => (
            <ItemEstate 
              key={ estate.slug } 
              estate={ estate }
            />
        ))}
      </div>
    </Layout>
  )
}

export default SearchPage;
