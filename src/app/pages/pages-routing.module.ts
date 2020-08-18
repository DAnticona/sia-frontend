import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { LoginGuard } from '../services/guards/login.guard';
import { ReporteClientesComponent } from './reporte-clientes/reporte-clientes.component';
import { ReporteVentasComponent } from './reporte-ventas/reporte-ventas.component';
import { ReporteMercaderiasComponent } from './reporte-mercaderias/reporte-mercaderias.component';
import { ReporteControlVehiculosComponent } from './reporte-control-vehiculos/reporte-control-vehiculos.component';
import { ReporteSaldosUbicacionComponent } from './reporte-saldos-ubicacion/reporte-saldos-ubicacion.component';
import { AperturarTarjetaComponent } from './aperturar-tarjeta/aperturar-tarjeta.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

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
				path: 'aperturar-tarjeta',
				component: AperturarTarjetaComponent,
				data: { titulo: 'Tarjetas' },
			},
			{
				path: 'tarjeta/:id',
				component: TarjetaComponent,
				data: { titulo: 'Modificar Tarjeta' },
			},
			{
				path: 'mi-perfil',
				component: MiPerfilComponent,
				data: { titulo: 'Mi Perfil' },
			},
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
			{ path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(pagesRoutes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
