import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
	selector: 'app-tarjetas',
	templateUrl: './tarjetas.component.html',
	styles: [],
	providers: [DatePipe],
})
export class TarjetasComponent implements OnInit {
	tarjetas: any[] = [];
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

	ingresar(tarjeta: any) {
		this.router.navigate(['/tarjetas', tarjeta.idTarjeta]);
	}

	nuevo() {
		this.router.navigate(['/tarjetas', 'nuevo']);
	}
}
