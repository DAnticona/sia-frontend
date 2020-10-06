import { Component, OnInit } from '@angular/core';
import { RegimenService } from '../../../services/regimen/regimen.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-regimenes',
	templateUrl: './regimenes.component.html',
	styles: [],
})
export class RegimenesComponent implements OnInit {
	regimenes: any[] = [];
	cargando = false;
	constructor(public regimenService: RegimenService, public router: Router) {
		this.cargando = true;
		this.regimenService.getRegimenes().subscribe((res: any) => {
			console.log(res);
			this.regimenes = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	seleccionar(regimen: any) {
		this.router.navigate(['/regimenes', regimen.idRegimen]);
	}

	nuevo() {
		this.router.navigate(['/regimenes', 'nuevo']);
	}
}
