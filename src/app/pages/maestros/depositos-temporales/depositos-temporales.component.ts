import { Component, OnInit } from '@angular/core';
import { DepositoTemporalService } from '../../../services/deposito-temporal/deposito-temporal.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-depositos-temporales',
	templateUrl: './depositos-temporales.component.html',
	styles: [],
})
export class DepositosTemporalesComponent implements OnInit {
	depositos: any[] = [];
	cargando = true;
	constructor(public depositoService: DepositoTemporalService, public router: Router) {
		this.depositoService.getDepositos().subscribe((res: any) => {
			console.log(res);
			this.depositos = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	seleccionar(deposito: any) {
		this.router.navigate(['/depositos-temporales', deposito.idDeposito]);
	}

	nuevo() {
		this.router.navigate(['/depositos-temporales', 'nuevo']);
	}
}
