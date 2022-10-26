import type { NextPage, GetServerSideProps } from 'next';
import { Layout } from '../../../components/Layout';
import { estatesInfo } from '../../../routes';
import { EstateInfo } from '../../../interfaces';
import { ItemEstate, NotFoundItems } from '../../../components/Estate';
import { BlockHeader } from 'components/Global';


interface Props {
  estate: EstateInfo[];
  title: string;
}

const TypePage: NextPage<Props> = ({ estate, title }) => {

    if(estate.length === 0) return <NotFoundItems title={ title } />;

    return (
        <Layout title={ title } description='Nadie en el mundo vende más bienes raíces que Hallivis®'>
            <BlockHeader />
            <div className='py-20 px-10 w-full max-w-[1440px] m-auto flex flex-col md:flex-row flex-wrap'>
                {estate.map((estate) => (
                    <ItemEstate 
                        key={ estate.name } 
                        estate={ estate }
                    />
                ))}
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { type } = params as { type: string };
    const estate: EstateInfo[] = estatesInfo.filter( (estate) => estate.type === type );
    const title: string = type.charAt(0).toUpperCase() + type.slice(1); 

    return {
        props: {
            estate,
            title,
        }
    }
}

export default TypePage;
