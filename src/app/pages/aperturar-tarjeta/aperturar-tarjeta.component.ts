import { Component, OnInit } from '@angular/core';
import { TARJETAS } from '../../mock-data/mock-tarjetas';
import { Tarjeta } from '../../models/tarjeta.model';
import { Router } from '@angular/router';
@Component({
	selector: 'app-aperturar-tarjeta',
	templateUrl: './aperturar-tarjeta.component.html',
	styles: [],
})
export class AperturarTarjetaComponent implements OnInit {
	tarjetas = TARJETAS;
	constructor(public router: Router) {}

	ngOnInit(): void {}

	ingresar(tarjeta: Tarjeta) {
		this.router.navigate(['/tarjeta', tarjeta.nroOrden]);
	}
}
