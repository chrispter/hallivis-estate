import { SaleState, TownState, TypeState } from "interfaces";

export const typeSearch: TypeState[] = [
    { name: 'Seleccione un tipo inmueble', slug: '' },
    { name: 'Casas', slug: 'casas', },
    { name: 'Departamentos', slug: 'departamentos', },
    { name: 'Terrenos', slug: 'terrenos', },
    { name: 'Bodegas', slug: 'bodegas', },
    { name: 'Naves Insdustriales', slug: 'naves-industriales', },
    { name: 'Oficinas', slug: 'oficinas', },
];

export const saleSearch: SaleState[] = [
    { name: 'Seleccione un estado del inmueble', slug: '' },
    { name: 'Renta', slug: 'renta' },
    { name: 'Venta', slug: 'venta' },
];

export const townSearch: TownState[] = [
    { name: 'Seleccione una ciudad', slug: '' },
    { name: 'Aguascalientes', slug: 'aguascalientes' },
    { name: 'Baja California', slug: 'baja-california' },
    { name: 'Baja California Sur', slug: 'baja-california-sur' },
    { name: 'Campeche', slug: 'campeche' },
    { name: 'Chiapas', slug: 'chiapas' },
    { name: 'Chihuahua', slug: 'chihuahua' },
    { name: 'Coahuila', slug: 'coahuila' },
    { name: 'Colima', slug: 'colima' },
    { name: 'CDMX', slug: 'cdmx' },
    { name: 'Durango', slug: 'durango' },
    { name: 'Guanajuato', slug: 'guanajuato' },
    { name: 'Guerrero', slug: 'guerrero' },
    { name: 'Hidalgo', slug: 'hidalgo' },
    { name: 'Jalisco', slug: 'jalisco' },
    { name: 'Edo. México', slug: 'mexico' },
    { name: 'Michoacán', slug: 'michoacán' },
    { name: 'Morelos', slug: 'morelos' },
    { name: 'Nayarit', slug: 'nayarit' },
    { name: 'Nuevo León', slug: 'nuevo-leon' },
    { name: 'Oaxaca', slug: 'oaxaca' },
    { name: 'Puebla', slug: 'puebla' },
    { name: 'Querétaro', slug: 'queretaro' },
    { name: 'Quintana Roo', slug: 'quintana-roo' },
    { name: 'San Luis Potosí', slug: 'san-luis-potosi' },
    { name: 'Sinaloa', slug: 'sinaloa' },
    { name: 'Sonora', slug: 'sonora' },
    { name: 'Tabasco', slug: 'tabasco' },
    { name: 'Tamaulipas', slug: 'tamaulipas' },
    { name: 'Tlaxcala', slug: 'tlaxcala' },
    { name: 'Veracruz', slug: 'veracruz' },
    { name: 'Yucatán', slug: 'yucatan' },
    { name: 'Zacatecas', slug: 'zacatecas' },
];