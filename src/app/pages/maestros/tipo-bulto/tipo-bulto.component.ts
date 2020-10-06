import { Component, OnInit } from '@angular/core';
import { TipoBultoService } from '../../../services/tipo-bulto/tipo-bulto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-tipo-bulto',
	templateUrl: './tipo-bulto.component.html',
	styles: [],
})
export class TipoBultoComponent implements OnInit {
	tipo: any = {};

	constructor(
		public tipoBultoService: TipoBultoService,
		public router: Router,
		public activatedRoute: ActivatedRoute
	) {
		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = params.id;
				this.tipoBultoService.getTipo(id).subscribe((res: any) => {
					console.log(res);
					this.tipo = res.object;
				});
			}
		});
	}

	ngOnInit(): void {}

	guardar(tipo: any) {
		console.log(tipo);
		if (tipo.idTipoBulto) {
			this.tipoBultoService.updateTipo(tipo).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/tipo-bulto', res.object.idTipoBulto]);
			});
		} else {
			this.tipoBultoService.createTipo(tipo).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/tipo-bulto', res.object.idTipoBulto]);
			});
		}
	}

	volver() {
		this.router.navigate(['/tipos-bulto']);
	}
}
