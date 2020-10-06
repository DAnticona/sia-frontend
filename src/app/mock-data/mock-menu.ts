import { Menu } from '../models/menu.model';
export const MENU: any[] = [
	{
		titulo: 'Maestros',
		icono: 'mdi mdi-table-large',
		noRol: 'ADMIN_ROLE',
		submenu: [
			{ titulo: 'Clientes/Proveedores', url: '' },
			{ titulo: 'Servicios', url: '' },
			{ titulo: 'Ubicaciones', url: '' },
			{ titulo: 'Transportistas', url: '' },
			{ titulo: 'Mercaderías', url: '' },
			{ titulo: 'Bancos', url: '' },
			{ titulo: 'Tipo de Cambio', url: '' },
			{ titulo: 'Bultos', url: '' },
			{ titulo: 'Depósito temporal', url: '' },
			{ titulo: 'Agencias de aduanas', url: '' },
		],
	},
	{
		titulo: 'Seguridad',
		icono: 'mdi mdi-lock',
		noRol: 'ADMIN_ROLE',
		submenu: [
			{ titulo: 'Usuarios del sistema', url: '' },
			{ titulo: 'Roles', url: '' },
			{ titulo: 'Accesos', url: '' },
		],
	},
	{
		titulo: 'Mantenimiento',
		icono: 'mdi mdi-settings',
		noRol: 'ADMIN_ROLE',
		submenu: [
			{ titulo: 'Autorizaciones ingreso/salida', url: '' },
			{ titulo: 'Mantenimiento de tickets', url: '' },
		],
	},
	{
		titulo: 'Almacen',
		icono: 'fa fa-cubes',
		noRol: 'USER_ROLE',
		submenu: [
			// { titulo: 'Visto bueno', url: '' },
			{ titulo: 'Aperturar tarjeta', url: '/aperturar-tarjeta' },
			// { titulo: 'Registro mercadería en abandono', url: '' },
			// { titulo: 'Anular guías de ingreso/salida', url: '' },
			// { titulo: 'Imprimir etiquetas', url: '' },
			// { titulo: 'Inventario', url: '' },
		],
	},
	{
		titulo: 'Facturación',
		icono: 'mdi mdi-file-document',
		noRol: 'USER_ROLE',
		submenu: [
			{ titulo: 'Faturas', url: '' },
			{ titulo: 'Boletas de venta', url: '' },
			{ titulo: 'Notas de crédito', url: '' },
			{ titulo: 'Notas de débito', url: '' },
			{ titulo: 'Cobranzas', url: '' },
		],
	},
	{
		titulo: 'Clientes',
		icono: 'icon-people',
		noRol: 'USER_ROLE',
		submenu: [
			{ titulo: 'Estado de cuenta/abonos', url: '' },
			{ titulo: 'Cotizaciones', url: '' },
		],
	},
	{
		titulo: 'Reportes',
		icono: 'mdi mdi-chart-areaspline',
		noRol: 'USER_ROLE',
		submenu: [
			{ titulo: 'Clientes', url: '/reporte-clientes' },
			{ titulo: 'Ventas', url: '/reporte-ventas' },
			{ titulo: 'Mercaderías', url: '/reporte-mercaderias' },
			// { titulo: 'Control Vehículos', url: '/reporte-control-vehiculos' },
			{ titulo: 'Saldos por ubicación', url: '/reporte-almacenes' },
		],
	},
];
