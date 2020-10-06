import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-ingresos-salidas',
	templateUrl: './ingresos-salidas.component.html',
	styles: [],
	providers: [DatePipe],
})
export class IngresosSalidasComponent implements OnInit {
	movimientos: any[] = [];
	startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
	endDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

	cargando = false;

	constructor(public datePipe: DatePipe, public router: Router) {
		// this.cargando = true;
	}

	ngOnInit(): void {}

	search(desde: string, hasta: string, tipo: string) {
		console.log('buscar');
	}

	ingresar(movimiento: any) {
		this.router.navigate(['/ingresos-salidas', movimiento.idTarjeta]);
	}

	nuevo() {
		this.router.navigate(['/ingresos-salidas', 'nuevo']);
	}
}
