import type { NextPage, GetServerSideProps } from 'next';
import { Layout } from '../../../components/Layout';
import { estatesInfo } from '../../../routes';
import { EstateInfo } from '../../../interfaces';
import { Carousel, LeftContent, RightContent } from '../../../components/Estate';
import { BlockHeader } from 'components/Global';

interface Props {
  estate: EstateInfo;
  host: string;
}

const SingleEstatePage: NextPage<Props> = ({ estate, host }) => {

  const {
      name,
      address,
      costs,
      state,
      type,
      town,
      baths,
      rooms,
      levels,
      m2live,
      m2total,
      description,
      parking,
      images,
      others,
      amenities,
  } = estate;

  
  return (
    <Layout title={ name } description={ description } image={ images[0] } >
      <BlockHeader />
      <Carousel images={ images } />

      <div className='py-20 px-10 w-full max-w-[1440px] m-auto flex flex-col md:flex-row'>
        <LeftContent
          address={ address }
          amenities={ amenities }
          description={ description }
          name={ name }
          others={ others }
          state={ state }
          type={ type }
          town={ town }
        />

        <RightContent 
          costs={ costs }
          baths={ baths }
          rooms={ rooms }
          levels={ levels }
          m2live={ m2live }
          m2total={ m2total }
          parking={ parking }
          host={ host }
        />
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {

  const { slug } = params as { slug: string };
  const host = req.headers.host;
  const estate = estatesInfo.filter( (estate) => estate.slug === slug );

  return {
    props: {
      estate: estate[0],
      host,
    }
  }
}

export default SingleEstatePage;
