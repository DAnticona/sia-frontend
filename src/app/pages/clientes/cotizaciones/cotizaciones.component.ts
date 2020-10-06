import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CotizacionService } from '../../../services/cotizacion/cotizacion.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cotizaciones',
	templateUrl: './cotizaciones.component.html',
	styles: [],
	providers: [DatePipe],
})
export class CotizacionesComponent implements OnInit {
	cargando = false;
	cotizaciones: any[] = [];
	startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
	endDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

	constructor(public router: Router, public cotizacionService: CotizacionService, public datePipe: DatePipe) {
		this.cargando = true;
		this.cotizacionService.getAll().subscribe(
			(res: any) => {
				this.cotizaciones = res.object;
				this.cargando = false;
			},
			(err: any) => {
				this.cargando = false;
			}
		);
	}

	ngOnInit(): void {}

	search(startDate: string, endDate: string) {
		console.log('Busqueda');
	}

	seleccionar(cotizacion: any) {
		console.log('cotizacion');
		this.router.navigate(['cotizaciones', cotizacion.id]);
	}

	nuevo() {
		this.router.navigate(['cotizaciones', 'nuevo']);
	}
}
