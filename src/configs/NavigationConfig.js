import { APP_PREFIX_PATH } from 'configs/AppConfig'
import { 
  DashboardOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-usuarios',
      path: `${APP_PREFIX_PATH}/dashboards/usuarios`,
      title: 'Usuarios',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-productos',
      path: `${APP_PREFIX_PATH}/dashboards/productos`,
      title: 'Productos',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-clientes',
      path: `${APP_PREFIX_PATH}/dashboards/clientes`,
      title: 'Clientes',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-oportunidades',
      path: `${APP_PREFIX_PATH}/dashboards/oportunidades`,
      title: 'Oportunidades',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-cotizaciones',
      path: `${APP_PREFIX_PATH}/dashboards/cotizaciones`,
      title: 'Cotizaciones',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-taller',
      path: `${APP_PREFIX_PATH}/dashboards/servicio`,
      title: 'Servicios',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-rentas',
      path: `${APP_PREFIX_PATH}/dashboards/rentas`,
      title: 'Rentas',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-logistica',
      path: `${APP_PREFIX_PATH}/dashboards/logistica`,
      title: 'Logisticas',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-tareas',
      path: `${APP_PREFIX_PATH}/dashboards/tareas`,
      title: 'Tareas',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-soportes',
      path: `${APP_PREFIX_PATH}/dashboards/soportes`,
      title: 'Soportes Internos',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-seguimientos',
      path: `${APP_PREFIX_PATH}/dashboards/seguimientos`,
      title: 'Seguimientos',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
},
{
  key: 'agricultura',
  path: `${APP_PREFIX_PATH}/agricultura`,
  title: 'agricultura',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'agricultura-demostraciones',
      path: `${APP_PREFIX_PATH}/agricultura/demostraciones`,
      title: 'Demostraciones',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'agricultura-instalaciones',
      path: `${APP_PREFIX_PATH}/agricultura/instalaciones`,
      title: 'Instalaciones',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'agricultura-stock',
      path: `${APP_PREFIX_PATH}/agricultura/stock`,
      title: 'Stock',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'agricultura-ventas',
      path: `${APP_PREFIX_PATH}/agricultura/ventas`,
      title: 'Ventas',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
},
{
  key: 'topografia',
  path: `${APP_PREFIX_PATH}/topografia`,
  title: 'topografia',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'topografia-proyectos',
      path: `${APP_PREFIX_PATH}/topografia/proyectos`,
      title: 'Proyectos',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}

]


const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
