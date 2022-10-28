import { ReactElement } from "react";
import { EstateInfo } from './estates';

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
    getEstates: () => void;
    resultEstates: EstateInfo[]
}

export interface FormState {
    type: string;
    state: string;
    town: string;
}