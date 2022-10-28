import { FormState, SearchContextProps, SearchProps } from "interfaces";
import { createContext, useState } from "react";
import { useRouter } from 'next/router';
import { EstateInfo } from '../interfaces/estates';
import { estatesInfo } from "routes";

export const SearchContext = createContext( {} as SearchContextProps );

export const SearchProvider = ( { children }: SearchProps ) => {

    const router = useRouter();
    const { Provider } = SearchContext;
    const [ error, setError ] = useState<boolean>(false);
    const [ form, setForm ] = useState<FormState>({
        type: '',
        state: '',
        town: '',
    });
    const [resultEstates, setResultEstates] = useState<EstateInfo[]>([])

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const getEstates = () => {
        if(router.asPath !== '/busqueda') {
            router.push('/busqueda');
        }
        let estatesFilter: EstateInfo[] = estatesInfo
            .filter( (estate) => {
                if(form.type !== ''){
                    return estate.type === form.type
                }
                return estate;
            })
            .filter( (estate) => {
                if(form.state !== ''){
                    return estate.state === form.state
                }
                return estate;
             })
             .filter( (estate) => {
                if(form.town !== ''){
                    return estate.townSlug === form.town
                }
                return estate;
             });
        
       
        console.log(estatesFilter);
        setResultEstates(estatesFilter);

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
                resultEstates,
            }} 
        >
            { children }
        </Provider>
    )
}