import { FormState, SearchContextProps, SearchProps } from "interfaces";
import { createContext, useState } from "react";
import { useRouter } from 'next/router';

export const SearchContext = createContext( {} as SearchContextProps );

export const SearchProvider = ( { children }: SearchProps ) => {

    const router = useRouter();
    const { Provider } = SearchContext;
    const [ error, setError ] = useState<boolean>(false);
    const [ form, setForm ] = useState<FormState>({
        propriety: '',
        state: '',
        city: '',
    });

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const getEstates = () => {
        router.push('/busqueda');
    }
 
    return (
        <Provider
            value={{
                error,
                setError,
                form,
                setForm,
                handleChange,
                getEstates,
            }} 
        >
            { children }
        </Provider>
    )
}