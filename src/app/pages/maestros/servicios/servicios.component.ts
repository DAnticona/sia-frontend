import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../../services/servicio/servicio.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-servicios',
	templateUrl: './servicios.component.html',
	styles: [],
})
export class ServiciosComponent implements OnInit {
	cargando = false;
	servicios: any[] = [];
	constructor(public servicioService: ServicioService, public router: Router) {
		this.cargando = true;
		this.servicioService.getServicios().subscribe((res: any) => {
			console.log(res);
			this.servicios = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	seleccionar(tipo: any) {
		this.router.navigate(['/servicios', tipo.idServicio]);
	}

	nuevo() {
		this.router.navigate(['/servicios', 'nuevo']);
	}
}
