import { Component, OnInit } from '@angular/core';
import { TipoMercanciaService } from '../../../services/tipo-mercancia/tipo-mercancia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-tipo-mercancia',
	templateUrl: './tipo-mercancia.component.html',
	styles: [],
})
export class TipoMercanciaComponent implements OnInit {
	tipo: any = {};
	cargando = false;
	constructor(
		public tipoMercanciaService: TipoMercanciaService,
		public router: Router,
		public activatedRoute: ActivatedRoute
	) {
		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = params.id;
				this.cargando = true;
				this.tipoMercanciaService.getTipo(id).subscribe(
					(res: any) => {
						console.log(res);
						this.tipo = res.object;
						this.tipo.id = res.object.idTipoMercancia;
						this.cargando = false;
					},
					(err: any) => {
						this.cargando = false;
					}
				);
			}
		});
	}

	ngOnInit(): void {}

	guardar(f: NgForm) {
		console.log(this.tipo);
		if (this.tipo.id) {
			this.tipoMercanciaService.updateTipo(this.tipo).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/tipos-mercancia', res.object.idTipoMercancia]);
			});
		} else {
			this.tipoMercanciaService.createTipo(this.tipo).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/tipos-mercancia', res.object.idTipoMercancia]);
			});
		}
	}

	volver() {
		this.router.navigate(['/tipos-mercancia']);
	}
}
