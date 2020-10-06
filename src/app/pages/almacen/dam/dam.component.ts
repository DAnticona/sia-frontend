import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AduanaService } from '../../../services/aduana/aduana.service';
import { DepositoTemporalService } from '../../../services/deposito-temporal/deposito-temporal.service';
import { RegimenService } from '../../../services/regimen/regimen.service';
import { TipoBultoService } from '../../../services/tipo-bulto/tipo-bulto.service';
import {
	faWarehouse,
	faLandmark,
	faHashtag,
	faDotCircle,
	faMoneyBill,
	faTruck,
	faFileInvoice,
	faUserTie,
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-dam',
	templateUrl: './dam.component.html',
	styles: [],
})
export class DamComponent implements OnInit {
	faWarehouse = faWarehouse;
	faLandmark = faLandmark;
	faHashtag = faHashtag;
	faDotCircle = faDotCircle;
	faMoneyBill = faMoneyBill;
	faTruck = faTruck;
	faFileInvoice = faFileInvoice;
	faUserTie = faUserTie;

	dam: any = {};
	aduanas: any[] = [];
	almacenes: any[] = [];
	regimenes: any[] = [];
	tiposBulto: any[] = [];
	cargando = false;

	constructor(
		public router: Router,
		public aduanaService: AduanaService,
		public depositoTemporalService: DepositoTemporalService,
		public regimenService: RegimenService,
		public tipoBultoService: TipoBultoService
	) {
		this.aduanaService.getAduanas().subscribe((res: any) => {
			this.aduanas = res.object;
		});

		this.depositoTemporalService.getDepositos().subscribe((res: any) => {
			console.log(res);
			this.almacenes = res.object;
		});

		this.regimenService.getRegimenes().subscribe((res: any) => {
			this.regimenes = res.object;
		});

		this.tipoBultoService.getTipos().subscribe((res: any) => {
			this.tiposBulto = res.object;
		});
	}

	ngOnInit(): void {}

	guardar(form: NgForm) {}

	volver() {
		this.router.navigate(['/dams']);
	}
}
