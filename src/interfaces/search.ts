import { ReactElement } from "react";

export interface SaleState {
    name: string;
    slug: string;
};

export interface TypeState {
    name: string;
    slug: string;
};

export interface TownState {
    name: string;
    slug: string;
};


export interface SearchProps {
    children?: ReactElement | ReactElement[];
}

export interface SearchContextProps {
    error: boolean;
    setError: ( error: boolean ) => void;
    form: FormState;
    setForm: (form: FormState) => void;
    handleChange: ( e: any ) => void;
}

export interface FormState {
    propriety: string;
    state: string;
    city: string;
}