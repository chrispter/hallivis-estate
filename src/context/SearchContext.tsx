import { FormState, SearchContextProps, SearchProps } from "interfaces";
import { createContext, useState } from "react";

export const SearchContext = createContext( {} as SearchContextProps );

export const SearchProvider = ( { children }: SearchProps ) => {

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
 
    return (
        <Provider
            value={{
                error,
                setError,
                form,
                setForm,
                handleChange,
            }} 
        >
            { children }
        </Provider>
    )
}