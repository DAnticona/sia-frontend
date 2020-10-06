import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GrupoServicioService } from '../../services/servicio/grupo-servicio.service';
import { ServicioService } from '../../services/servicio/servicio.service';
import { SubservicioService } from '../../services/servicio/subservicio.service';

@Component({
	selector: 'app-lista-servicios',
	templateUrl: './lista-servicios.component.html',
	styles: [],
})
export class ListaServiciosComponent implements OnInit {
	grupos: any[] = [];
	grupo: any = {};
	servicios: any[] = [];
	servicio: any = {};
	subservicios: any[] = [];

	@Output() selected = new EventEmitter<any>();
	constructor(
		public grupoServicioService: GrupoServicioService,
		public servicioService: ServicioService,
		public subservicioService: SubservicioService
	) {
		this.grupoServicioService.getGrupos().subscribe((res: any) => {
			this.grupos = res.object;
			// this.servicioService.getServicio().subscribe((res: any) => {
			//   this.grupos = res.object;
			// });
		});
	}

	ngOnInit(): void {}

	select(servicio: any) {
		this.servicio = servicio;
	}

	send() {
		this.selected.emit(this.servicio);
	}

	cancel() {
		this.servicio = {};
		this.send();
	}
}
