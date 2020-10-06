import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { LoginGuard } from '../services/guards/login.guard';
import { ReporteClientesComponent } from './reportes/reporte-clientes/reporte-clientes.component';
import { ReporteVentasComponent } from './reportes/reporte-ventas/reporte-ventas.component';
import { ReporteMercaderiasComponent } from './reportes/reporte-mercaderias/reporte-mercaderias.component';
import { ReporteControlVehiculosComponent } from './reportes/reporte-control-vehiculos/reporte-control-vehiculos.component';
import { ReporteSaldosUbicacionComponent } from './reportes/reporte-saldos-ubicacion/reporte-saldos-ubicacion.component';
import { TarjetasComponent } from './almacen/tarjetas/tarjetas.component';
import { TarjetaComponent } from './almacen/tarjeta/tarjeta.component';
import { AduanasComponent } from './maestros/aduanas/aduanas.component';
import { AgenciasAduanaComponent } from './maestros/agencias-aduana/agencias-aduana.component';
import { AlmacenesComponent } from './maestros/almacenes/almacenes.component';
import { ChoferesComponent } from './maestros/choferes/choferes.component';
import { ClientesComponent } from './maestros/clientes/clientes.component';
import { DepositosTemporalesComponent } from './maestros/depositos-temporales/depositos-temporales.component';
import { RegimenesComponent } from './maestros/regimenes/regimenes.component';
import { ServiciosComponent } from './maestros/servicios/servicios.component';
import { TiposBultoComponent } from './maestros/tipos-bulto/tipos-bulto.component';
import { TiposMercanciaComponent } from './maestros/tipos-mercancia/tipos-mercancia.component';
import { VehiculosComponent } from './maestros/vehiculos/vehiculos.component';
import { VendedoresComponent } from './maestros/vendedores/vendedores.component';
import { IngresosSalidasComponent } from './mantenimiento/ingresos-salidas/ingresos-salidas.component';
import { TicketsPesajeComponent } from './mantenimiento/tickets-pesaje/tickets-pesaje.component';
import { FacturasComponent } from './facturacion/facturas/facturas.component';
import { BoletasComponent } from './facturacion/boletas/boletas.component';
import { CotizacionesComponent } from './clientes/cotizaciones/cotizaciones.component';
import { NotasCreditoComponent } from './facturacion/notas-credito/notas-credito.component';
import { NotasDebitoComponent } from './facturacion/notas-debito/notas-debito.component';
import { ClienteComponent } from './maestros/cliente/cliente.component';
import { VendedorComponent } from './maestros/vendedor/vendedor.component';
import { AlmacenComponent } from './maestros/almacen/almacen.component';
import { AgenciaComponent } from './maestros/agencia/agencia.component';
import { RegimenComponent } from './maestros/regimen/regimen.component';
import { ChoferComponent } from './maestros/chofer/chofer.component';
import { VehiculoComponent } from './maestros/vehiculo/vehiculo.component';
import { TipoBultoComponent } from './maestros/tipo-bulto/tipo-bulto.component';
import { PersonaComponent } from './maestros/persona/persona.component';
import { EmpresaComponent } from './maestros/empresa/empresa.component';
import { PersonasComponent } from './maestros/personas/personas.component';
import { EmpresasComponent } from './maestros/empresas/empresas.component';
import { AduanaComponent } from './maestros/aduana/aduana.component';
import { DepositoTemporalComponent } from './maestros/deposito-temporal/deposito-temporal.component';
import { TipoMercanciaComponent } from './maestros/tipo-mercancia/tipo-mercancia.component';
import { ServicioComponent } from './maestros/servicio/servicio.component';
import { UsuariosComponent } from './sistema/usuarios/usuarios.component';
import { UsuarioComponent } from './sistema/usuario/usuario.component';
import { RolesComponent } from './sistema/roles/roles.component';
import { RolComponent } from './sistema/rol/rol.component';
import { CotizacionComponent } from './clientes/cotizacion/cotizacion.component';
import { DamsComponent } from './almacen/dams/dams.component';
import { DamComponent } from './almacen/dam/dam.component';

const pagesRoutes: Routes = [
	{
		path: '',
		component: PagesComponent,
		canActivate: [LoginGuard],
		children: [
			{
				path: 'bienvenido',
				component: BienvenidoComponent,
				data: { titulo: 'Bienvenido' },
			},
			{
				path: 'mi-perfil',
				component: MiPerfilComponent,
				data: { titulo: 'Mi Perfil' },
			},
			// Maestros
			{
				path: 'aduanas',
				component: AduanasComponent,
				data: { titulo: 'Maestro de Aduanas' },
			},
			{
				path: 'aduanas/:id',
				component: AduanaComponent,
				data: { titulo: 'Detalle de Aduana' },
			},
			{
				path: 'agencias-aduana',
				component: AgenciasAduanaComponent,
				data: { titulo: 'Maestro de Agencias de Aduana' },
			},
			{
				path: 'agencias-aduana/:id',
				component: AgenciaComponent,
				data: { titulo: 'Detalle de Agencia de Aduana' },
			},
			{
				path: 'almacenes',
				component: AlmacenesComponent,
				data: { titulo: 'Maestro de Almacenes' },
			},
			{
				path: 'almacenes/:id',
				component: AlmacenComponent,
				data: { titulo: 'Detalle del Almacén' },
			},
			{
				path: 'choferes',
				component: ChoferesComponent,
				data: { titulo: 'Maestro de Choferes' },
			},
			{
				path: 'choferes/:id',
				component: ChoferComponent,
				data: { titulo: 'Detalle del Chofer' },
			},
			{
				path: 'clientes',
				component: ClientesComponent,
				data: { titulo: 'Maestro de Clientes' },
			},
			{
				path: 'clientes/:id',
				component: ClienteComponent,
				data: { titulo: 'Detalle del Cliente' },
			},
			{
				path: 'depositos-temporales',
				component: DepositosTemporalesComponent,
				data: { titulo: 'Maestro de Almacenes Aduaneros' },
			},
			{
				path: 'depositos-temporales/:id',
				component: DepositoTemporalComponent,
				data: { titulo: 'Detalle del Almacén Aduanero' },
			},
			{
				path: 'empresas',
				component: EmpresasComponent,
				data: { titulo: 'Maestro de Empresas' },
			},
			{
				path: 'empresas/:id',
				component: EmpresaComponent,
				data: { titulo: 'Detalle de Empresa' },
			},
			{
				path: 'personas',
				component: PersonasComponent,
				data: { titulo: 'Maestro de Personas' },
			},
			{
				path: 'personas/:id',
				component: PersonaComponent,
				data: { titulo: 'Detalle de Persona' },
			},
			{
				path: 'regimenes',
				component: RegimenesComponent,
				data: { titulo: 'Maestro de Regímenes' },
			},
			{
				path: 'regimenes/:id',
				component: RegimenComponent,
				data: { titulo: 'Detalle Régimen' },
			},
			{
				path: 'servicios',
				component: ServiciosComponent,
				data: { titulo: 'Maestro de Servicios' },
			},
			{
				path: 'servicios/:id',
				component: ServicioComponent,
				data: { titulo: 'Detalle del Servicio' },
			},
			{
				path: 'tipos-bulto',
				component: TiposBultoComponent,
				data: { titulo: 'Maestro de Tipos de Bultos' },
			},
			{
				path: 'tipos-bulto/:id',
				component: TipoBultoComponent,
				data: { titulo: 'Detalle de Tipo de Bulto' },
			},
			{
				path: 'tipos-mercancia',
				component: TiposMercanciaComponent,
				data: { titulo: 'Maestro de Tipos de Mercancía' },
			},
			{
				path: 'tipos-mercancia/:id',
				component: TipoMercanciaComponent,
				data: { titulo: 'Detalle de Tipo de Mercancía' },
			},
			{
				path: 'vehiculos',
				component: VehiculosComponent,
				data: { titulo: 'Maestro de Vehículos' },
			},
			{
				path: 'vehiculos/:id',
				component: VehiculoComponent,
				data: { titulo: 'Detalle del Vehículo' },
			},
			{
				path: 'vendedores',
				component: VendedoresComponent,
				data: { titulo: 'Maestro Comercial' },
			},
			{
				path: 'vendedores/:id',
				component: VendedorComponent,
				data: { titulo: 'Comercial' },
			},
			// Almacen
			{
				path: 'dams',
				component: DamsComponent,
				data: { titulo: 'Lista de DAM' },
			},
			{
				path: 'dams/:id',
				component: DamComponent,
				data: { titulo: 'Detalle de DAM' },
			},
			{
				path: 'tarjetas',
				component: TarjetasComponent,
				data: { titulo: 'Tarjetas' },
			},
			{
				path: 'tarjetas/:id',
				component: TarjetaComponent,
				data: { titulo: 'Modificar Tarjeta' },
			},
			// Mantenimiento
			{
				path: 'ingresos-salidas',
				component: IngresosSalidasComponent,
				data: { titulo: 'Ingresos / Salidas' },
			},
			{
				path: 'tickets-pesaje',
				component: TicketsPesajeComponent,
				data: { titulo: 'Tickes de Pesaje' },
			},
			// Facturacion
			{
				path: 'facturas',
				component: FacturasComponent,
				data: { titulo: 'Facturas' },
			},
			{
				path: 'boletas',
				component: BoletasComponent,
				data: { titulo: 'Boletas de Venta' },
			},
			{
				path: 'notas-credito',
				component: NotasCreditoComponent,
				data: { titulo: 'Notas de Crédito' },
			},
			{
				path: 'notas-debito',
				component: NotasDebitoComponent,
				data: { titulo: 'Notas de Débito' },
			},
			// Clientes
			{
				path: 'cotizaciones',
				component: CotizacionesComponent,
				data: { titulo: 'Cotizaciones' },
			},
			{
				path: 'cotizaciones/:id',
				component: CotizacionComponent,
				data: { titulo: 'Cotización' },
			},
			// Reportes
			{
				path: 'reporte-clientes',
				component: ReporteClientesComponent,
				data: { titulo: 'Reporte de Clientes' },
			},
			{
				path: 'reporte-ventas',
				component: ReporteVentasComponent,
				data: { titulo: 'Reporte de Ventas' },
			},
			{
				path: 'reporte-mercaderias',
				component: ReporteMercaderiasComponent,
				data: { titulo: 'Reporte de Mercaderías' },
			},
			{
				path: 'reporte-control-vehiculos',
				component: ReporteControlVehiculosComponent,
				data: { titulo: 'Control Vehiculos' },
			},
			{
				path: 'reporte-almacenes',
				component: ReporteSaldosUbicacionComponent,
				data: { titulo: 'Reporte Almacenes' },
			},
			// Sistema
			{
				path: 'usuarios',
				component: UsuariosComponent,
				data: { titulo: 'Usuarios del Sistema' },
			},
			{
				path: 'usuarios/:id',
				component: UsuarioComponent,
				data: { titulo: 'Detalle del Usuario' },
			},
			{
				path: 'roles',
				component: RolesComponent,
				data: { titulo: 'Roles del Sistema' },
			},
			{
				path: 'roles/:id',
				component: RolComponent,
				data: { titulo: 'Detalles del Rol' },
			},
			// Default
			{ path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(pagesRoutes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
