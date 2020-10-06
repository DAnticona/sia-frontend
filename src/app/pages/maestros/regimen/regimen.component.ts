import { Component, OnInit } from '@angular/core';
import { RegimenService } from '../../../services/regimen/regimen.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-regimen',
	templateUrl: './regimen.component.html',
	styles: [],
})
export class RegimenComponent implements OnInit {
	regimen: any = {};

	constructor(
		public regimenService: RegimenService,
		public router: Router,
		public activatedRoute: ActivatedRoute
	) {
		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = params.id;
				this.regimenService.getRegimen(id).subscribe((res: any) => {
					console.log(res);
					this.regimen = res.object;
				});
			}
		});
	}

	ngOnInit(): void {}

	guardar(regimen: any) {
		console.log(regimen);
		if (regimen.idRegimen) {
			this.regimenService.updateRegimen(regimen).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/regimen', res.object.idRegimen]);
			});
		} else {
			this.regimenService.createRegimen(regimen).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/regimen', res.object.idRegimen]);
			});
		}
	}

	volver() {
		this.router.navigate(['/regimenes']);
	}
}
