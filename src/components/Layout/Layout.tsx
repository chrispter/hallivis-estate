import React, { FC } from 'react';
import Head from 'next/head';
import { Footer, Menu } from '../Global';
import { nameBrand } from '../../constants';
import { useRouter } from 'next/router';

interface Props {
    title?: string;
    description?: string;
    children: JSX.Element | JSX.Element[];
    image?: string; 
};

export const Layout: FC<Props> = ({ children, title = 'Hallivis', description, image }) => {

    const { asPath } = useRouter();
    const noImage = '/template/hallivis.webp';
    const imgMedia = image === undefined ? noImage : image;

    return (
        <>  
            <Head>
                <title>{ title } | { nameBrand }</title>
                <meta charSet="UTF-8" />
                <meta name="author" content="@chripster" />
                <meta name="description" content={ description } />
                <meta name="keywords" content="bienes, raices, hallivis, bodegas, casas, rentas, venta, real state, terrenos, departamentos, segura, eficaz, oficinas" />
                <meta name="twitter:card" content="summary_large_image"/>
                {/* <meta name="twitter:site" content="@hallivis"/>
                <meta name="twitter:creator" content="@hallivis"/> */}
                <meta name="twitter:site:id" content="73396388"/>
                <meta name="twitter:title" content={ title } />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:image" content={ imgMedia } />
                <meta name="twitter:image:alt" content={ title } />
            
                <meta property="og:site_name" content={ nameBrand } />
				<meta property="og:locale" content="es_ES" />
                <meta property='og:title' content={`${ title } | ${ nameBrand }`} />
                <meta property="og:description" content={ description } />
                <meta property="og:image" content={ imgMedia } />
                <meta property="og:image:alt" content={ title } />
                {/* <meta property="og:url" content={ currentUrl } /> */}
                <meta property="og:type" content="article" />
                {/* <meta property="fb:app_id" content="109304785771499" /> */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            
            </Head>
            <div>
                <Menu />
                { children }
                <Footer />
            </div>
        </>
    )
}
