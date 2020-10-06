import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DamService } from '../../../services/dam/dam.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dams',
	templateUrl: './dams.component.html',
	styles: [],
	providers: [DatePipe],
})
export class DamsComponent implements OnInit {
	dams: any[] = [];
	startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
	endDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

	cargando = false;

	constructor(public datePipe: DatePipe, public damService: DamService, public router: Router) {}

	ngOnInit(): void {}

	search(desde: string, hasta: string, tipo: string) {
		console.log('buscar');
	}

	ingresar(dam: any) {
		this.router.navigate(['/dams', dam.idTarjeta]);
	}

	nuevo() {
		this.router.navigate(['/dams', 'nuevo']);
	}
}
