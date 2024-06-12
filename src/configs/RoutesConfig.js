import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.usuarios',
        path: `${APP_PREFIX_PATH}/dashboards/usuarios`,
        component: React.lazy(() => import('views/app-views/dashboards/usuarios')),
    },
    {
        key: 'dashboard.clientes',
        path: `${APP_PREFIX_PATH}/dashboards/clientes`,
        component: React.lazy(() => import('views/app-views/dashboards/clientes')),
    },
    {
        key: 'dashboard.productos',
        path: `${APP_PREFIX_PATH}/dashboards/productos`,
        component: React.lazy(() => import('views/app-views/dashboards/productos')),
    },
    {
        key: 'dashboard.oportunidades',
        path: `${APP_PREFIX_PATH}/dashboards/oportunidades`,
        component: React.lazy(() => import('views/app-views/dashboards/oportunidades')),
    },
    {
        key: 'dashboard.cotizaciones',
        path: `${APP_PREFIX_PATH}/dashboards/cotizaciones`,
        component: React.lazy(() => import('views/app-views/dashboards/cotizaciones')),
    },
    {
        key: 'dashboard.taller',
        path: `${APP_PREFIX_PATH}/dashboards/servicio`,
        component: React.lazy(() => import('views/app-views/dashboards/taller/Servicio')),
    },
    {
        key: 'dashboard.rentas',
        path: `${APP_PREFIX_PATH}/dashboards/rentas`,
        component: React.lazy(() => import('views/app-views/dashboards/rentas/Renta')),
    },
    {
        key: 'dashboard.logistica',
        path: `${APP_PREFIX_PATH}/dashboards/logistica`,
        component: React.lazy(() => import('views/app-views/dashboards/logistica/Lista')),
    },
    {
        key: 'dashboard.tareas',
        path: `${APP_PREFIX_PATH}/dashboards/tareas`,
        component: React.lazy(() => import('views/app-views/dashboards/tareas')),
    },
    {
        key: 'dashboard.soportes',
        path: `${APP_PREFIX_PATH}/dashboards/soportes`,
        component: React.lazy(() => import('views/app-views/dashboards/soportes')),
    },
    {
        key: 'dashboard.seguimientos',
        path: `${APP_PREFIX_PATH}/dashboards/seguimientos`,
        component: React.lazy(() => import('views/app-views/dashboards/seguimientos')),
    },
    {
        key: 'agricultura.demostraciones',
        path: `${APP_PREFIX_PATH}/agricultura/demostraciones`,
        component: React.lazy(() => import('views/app-views/agricultura/Demostraciones')),
    },
    {
        key: 'agricultura.instalaciones',
        path: `${APP_PREFIX_PATH}/agricultura/instalaciones`,
        component: React.lazy(() => import('views/app-views/agricultura/Instalaciones')),
    },
    {
        key: 'agricultura.stock',
        path: `${APP_PREFIX_PATH}/agricultura/stock`,
        component: React.lazy(() => import('views/app-views/agricultura/Stock')),
    },
    {
        key: 'agricultura.ventas',
        path: `${APP_PREFIX_PATH}/agricultura/ventas`,
        component: React.lazy(() => import('views/app-views/agricultura/Ventas')),
    },
    {
        key: 'topografia.proyectos',
        path: `${APP_PREFIX_PATH}/topografia/proyectos`,
        component: React.lazy(() => import('views/app-views/topografia/Proyectos')),
    },
]