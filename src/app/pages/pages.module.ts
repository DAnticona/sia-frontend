import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { SharedModule } from '../shared/shared.module';

// Componentes
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PagesComponent } from './pages.component';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Rutas
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { ReporteClientesComponent } from './reporte-clientes/reporte-clientes.component';
import { ReporteVentasComponent } from './reporte-ventas/reporte-ventas.component';
import { ReporteMercaderiasComponent } from './reporte-mercaderias/reporte-mercaderias.component';
import { ReporteControlVehiculosComponent } from './reporte-control-vehiculos/reporte-control-vehiculos.component';
import { ReporteSaldosUbicacionComponent } from './reporte-saldos-ubicacion/reporte-saldos-ubicacion.component';
import { AperturarTarjetaComponent } from './aperturar-tarjeta/aperturar-tarjeta.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

@NgModule({
	declarations: [
		PagesComponent,
		BienvenidoComponent,
		MiPerfilComponent,
		ReporteClientesComponent,
		ReporteVentasComponent,
		ReporteMercaderiasComponent,
		ReporteControlVehiculosComponent,
		ReporteSaldosUbicacionComponent,
		AperturarTarjetaComponent,
		TarjetaComponent,
	],
	imports: [BrowserModule, CommonModule, FormsModule, SharedModule, ChartsModule, PagesRoutingModule],
	exports: [BienvenidoComponent, PagesComponent],
})
export class PagesModule {}
