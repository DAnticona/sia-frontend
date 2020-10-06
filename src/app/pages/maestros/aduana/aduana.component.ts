import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AduanaService } from '../../../services/aduana/aduana.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-aduana',
	templateUrl: './aduana.component.html',
	styles: [],
})
export class AduanaComponent implements OnInit {
	aduana: any = {};
	cargando = true;
	constructor(
		public activatedRoute: ActivatedRoute,
		public aduanaService: AduanaService,
		public router: Router
	) {
		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = Number(params.id);
				this.aduanaService.getAduanaById(id).subscribe((res: any) => {
					console.log(res);
					this.aduana = res.object;
					this.aduana.id = res.object.idAduana;
				});
			}
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	guardar(f: NgForm) {
		console.log(this.aduana);
		if (this.aduana.id) {
			this.aduanaService.updateAduana(this.aduana).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/aduanas', res.object.idAduana]);
			});
		} else {
			this.aduanaService.createAduana(this.aduana).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/aduanas', res.object.idAduana]);
			});
		}
	}

	volver() {
		this.router.navigate(['/aduanas']);
	}
}
