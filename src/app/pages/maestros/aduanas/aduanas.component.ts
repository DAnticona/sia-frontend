import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AduanaService } from '../../../services/aduana/aduana.service';

@Component({
	selector: 'app-aduanas',
	templateUrl: './aduanas.component.html',
	styles: [],
})
export class AduanasComponent implements OnInit {
	aduanas: any[] = [];
	cargando = true;
	constructor(public aduanaService: AduanaService, public router: Router) {
		this.aduanaService.getAduanas().subscribe((res: any) => {
			this.aduanas = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	seleccionar(aduana: any) {
		this.router.navigate(['/aduanas', aduana.id]);
	}

	nuevo() {
		this.router.navigate(['/aduanas', 'nuevo']);
	}
}
