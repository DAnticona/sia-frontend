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
import { ReporteClientesComponent } from './reportes/reporte-clientes/reporte-clientes.component';
import { ReporteVentasComponent } from './reportes/reporte-ventas/reporte-ventas.component';
import { ReporteMercaderiasComponent } from './reportes/reporte-mercaderias/reporte-mercaderias.component';
import { ReporteControlVehiculosComponent } from './reportes/reporte-control-vehiculos/reporte-control-vehiculos.component';
import { ReporteSaldosUbicacionComponent } from './reportes/reporte-saldos-ubicacion/reporte-saldos-ubicacion.component';
import { TarjetasComponent } from './almacen/tarjetas/tarjetas.component';
import { TarjetaComponent } from './almacen/tarjeta/tarjeta.component';
import { ClientesComponent } from './maestros/clientes/clientes.component';
import { VendedoresComponent } from './maestros/vendedores/vendedores.component';
import { AlmacenesComponent } from './maestros/almacenes/almacenes.component';
import { AgenciasAduanaComponent } from './maestros/agencias-aduana/agencias-aduana.component';
import { RegimenesComponent } from './maestros/regimenes/regimenes.component';
import { DepositosTemporalesComponent } from './maestros/depositos-temporales/depositos-temporales.component';
import { ChoferesComponent } from './maestros/choferes/choferes.component';
import { VehiculosComponent } from './maestros/vehiculos/vehiculos.component';
import { TiposBultoComponent } from './maestros/tipos-bulto/tipos-bulto.component';
import { TiposMercanciaComponent } from './maestros/tipos-mercancia/tipos-mercancia.component';
import { ServiciosComponent } from './maestros/servicios/servicios.component';
import { FormasPagoComponent } from './maestros/formas-pago/formas-pago.component';
import { MonedasComponent } from './maestros/monedas/monedas.component';
import { UbigeosComponent } from './maestros/ubigeos/ubigeos.component';
import { AduanasComponent } from './maestros/aduanas/aduanas.component';
import { IngresosSalidasComponent } from './mantenimiento/ingresos-salidas/ingresos-salidas.component';
import { TicketsPesajeComponent } from './mantenimiento/tickets-pesaje/tickets-pesaje.component';
import { FacturasComponent } from './facturacion/facturas/facturas.component';
import { BoletasComponent } from './facturacion/boletas/boletas.component';
import { UsuariosComponent } from './sistema/usuarios/usuarios.component';
import { RolesComponent } from './sistema/roles/roles.component';
import { AccesosComponent } from './sistema/accesos/accesos.component';
import { CotizacionesComponent } from './clientes/cotizaciones/cotizaciones.component';
import { NotasCreditoComponent } from './facturacion/notas-credito/notas-credito.component';
import { NotasDebitoComponent } from './facturacion/notas-debito/notas-debito.component';
import { ClienteComponent } from './maestros/cliente/cliente.component';
import { PersonaComponent } from '../pages/maestros/persona/persona.component';
import { EmpresaComponent } from '../pages/maestros/empresa/empresa.component';
import { VendedorComponent } from './maestros/vendedor/vendedor.component';
import { AlmacenComponent } from './maestros/almacen/almacen.component';
import { UsuarioComponent } from './sistema/usuario/usuario.component';
import { EmpresasComponent } from '../pages/maestros/empresas/empresas.component';
import { PersonasComponent } from '../pages/maestros/personas/personas.component';
import { PipesModule } from '../pipes/pipes.module';
import { AgenciaComponent } from './maestros/agencia/agencia.component';
import { RegimenComponent } from './maestros/regimen/regimen.component';
import { ChoferComponent } from './maestros/chofer/chofer.component';
import { VehiculoComponent } from './maestros/vehiculo/vehiculo.component';
import { TipoBultoComponent } from './maestros/tipo-bulto/tipo-bulto.component';
import { AduanaComponent } from './maestros/aduana/aduana.component';
import { DepositoTemporalComponent } from './maestros/deposito-temporal/deposito-temporal.component';
import { TipoMercanciaComponent } from './maestros/tipo-mercancia/tipo-mercancia.component';
import { ServicioComponent } from './maestros/servicio/servicio.component';
import { RolComponent } from './sistema/rol/rol.component';
import { CotizacionComponent } from './clientes/cotizacion/cotizacion.component';
import { ListaClientesComponent } from '../components/lista-clientes/lista-clientes.component';
import { ListaVendedoresComponent } from '../components/lista-vendedores/lista-vendedores.component';
import { ListaAgenciasComponent } from '../components/lista-agencias/lista-agencias.component';
import { ListaServiciosComponent } from '../components/lista-servicios/lista-servicios.component';
import { DamsComponent } from './almacen/dams/dams.component';
import { DamComponent } from './almacen/dam/dam.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
		TarjetasComponent,
		TarjetaComponent,
		ClientesComponent,
		VendedoresComponent,
		AlmacenesComponent,
		AgenciasAduanaComponent,
		AduanasComponent,
		RegimenesComponent,
		DepositosTemporalesComponent,
		ChoferesComponent,
		VehiculosComponent,
		TiposBultoComponent,
		TiposMercanciaComponent,
		ServiciosComponent,
		FormasPagoComponent,
		MonedasComponent,
		UbigeosComponent,
		IngresosSalidasComponent,
		TicketsPesajeComponent,
		FacturasComponent,
		BoletasComponent,
		UsuariosComponent,
		RolesComponent,
		AccesosComponent,
		CotizacionesComponent,
		NotasCreditoComponent,
		NotasDebitoComponent,
		ClienteComponent,
		PersonaComponent,
		EmpresaComponent,
		VendedorComponent,
		AlmacenComponent,
		UsuarioComponent,
		EmpresasComponent,
		PersonasComponent,
		AgenciaComponent,
		RegimenComponent,
		ChoferComponent,
		VehiculoComponent,
		TipoBultoComponent,
		AduanaComponent,
		DepositoTemporalComponent,
		TipoMercanciaComponent,
		ServicioComponent,
		RolComponent,
		CotizacionComponent,
		ListaClientesComponent,
		ListaVendedoresComponent,
		ListaAgenciasComponent,
		ListaServiciosComponent,
		DamsComponent,
		DamComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		SharedModule,
		ChartsModule,
		PipesModule,
		PagesRoutingModule,
		FontAwesomeModule,
	],
	exports: [BienvenidoComponent, PagesComponent],
})
export class PagesModule {}
