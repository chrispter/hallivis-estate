import { SearchContext } from '../../context/SearchContext';
import React, { FC, useContext } from 'react';
import { saleSearch, townSearch, typeSearch } from '../../routes';
import { ErrorSearch } from './ErrorSearch';
import { useRouter } from 'next/router';


export const SearchForm: FC = () => {

    const { error, setError, form: { propriety, city, state }, handleChange, getEstates  } = useContext(SearchContext);
    const router = useRouter();

    const handleSubmit = ( e: any ) => {
        e.preventDefault();

        if(propriety === '' && state === '' && city === ''){
            setError(true);
            return
        }

        setError(false);
        getEstates();
        
    };

    return (
        <div className='w-full max-w-[1440px] m-auto px-10 pt-20'>
            <form 
                className='flex flex-col md:flex-row justify-center items-center'
                onSubmit={ handleSubmit }
            >
                <select
                    name='propriety' 
                    className='py-6 px-2 mr-2 w-full md:w-auto mb-5 md:mb-0' 
                    onChange={ e => handleChange(e) }
                    value={ propriety }
                >
                    {typeSearch.map(({ name, slug }) => (
                        <option key={ name } value={ slug }>{ name }</option>
                    ))}
                </select>
                <select 
                    name='state'
                    className='py-6 px-2 mr-2 w-full md:w-auto mb-5 md:mb-0' 
                    onChange={ e => handleChange(e) }
                    value={ state }
                >
                    {saleSearch.map(({ name, slug }) => (
                        <option key={ name } value={ slug }>{ name }</option>
                    ))}
                </select>
                <select 
                    name='city'
                    className='py-6 px-2 mr-2 w-full md:w-auto mb-5 md:mb-0' 
                    onChange={ e => handleChange(e) }
                    value={ city }
                >
                    {townSearch.map(({ name, slug }) => (
                        <option key={ name } value={ slug }>{ name }</option>
                    ))}
                </select>
                
                <button className='bg-purple-h p-5 text-center text-white w-full md:w-auto'>Buscar</button>
            </form>

            { error && <ErrorSearch /> }
        </div>
  )
}
