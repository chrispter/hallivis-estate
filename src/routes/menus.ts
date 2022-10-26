import { RouteMenu, RouteSearch, SquareMenuHome } from "interfaces";

export const routesMenu: RouteMenu[] = [
    { url: '/', name: 'Inicio' },
    { url: '/inmuebles', name: 'Inmuebles' },
    { url: '/nosotros', name: 'Nosotros' },
    { url: '/contacto', name: 'Contacto' },
];

export const routesSale: RouteSearch[] = [
    { url: '/inmuebles/casas/venta', name: 'Casas en Venta' },
    { url: '/inmuebles/casas/renta', name: 'Casas en Renta' },
    { url: '/inmuebles/departamentos/venta', name: 'Departamentos en venta' },
    { url: '/inmuebles/departamentos/renta', name: 'Departamentos en renta' },
    { url: '/inmuebles/terrenos', name: 'Terrenos' },
    { url: '/inmuebles/bodegas', name: 'Bodegas' },
    { url: '/inmuebles/naves-industriales', name: 'Naves Insdustriales' },
    { url: '/inmuebles/oficinas', name: 'Oficinas' },
];

export const squareHome: SquareMenuHome[] =[
    { url: '/inmuebles/casas', name: 'Casas', state: 'Renta y Venta', image: '/template/home/casas.webp' },
    { url: '/inmuebles/departamentos', name: 'Departamentos', state: 'Renta y Venta', image: '/template/home/deptos.webp' },
    { url: '/inmuebles/terrenos', name: 'Terrenos', state: 'Renta y Venta', image: '/template/home/terrenos.webp' },
    { url: '/inmuebles/bodegas', name: 'Bodegas', state: 'Renta y Venta', image: '/template/home/bodegas.webp' },
    { url: '/inmuebles/naves', name: 'Naves Insdustriales', state: 'Renta y Venta', image: '' },
    { url: '/inmuebles/oficinas', name: 'Oficinas', state: 'Renta y Venta', image: '' },
];