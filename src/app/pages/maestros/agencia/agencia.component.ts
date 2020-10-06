import { Component, OnInit } from '@angular/core';
import { AgenciasService } from '../../../services/agencias/agencias.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-agencia',
	templateUrl: './agencia.component.html',
	styles: [],
})
export class AgenciaComponent implements OnInit {
	agencia: any = {};

	constructor(
		public agenciaService: AgenciasService,
		public router: Router,
		public activatedRoute: ActivatedRoute
	) {
		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = params.id;
				this.agenciaService.getAgencia(id).subscribe((res: any) => {
					console.log(res);
					this.agencia = res.object;
				});
			}
		});
	}

	ngOnInit(): void {}

	guardar(agencia: any) {
		console.log(agencia);
		if (agencia.idEmpresa) {
			this.agenciaService.updateAgencia(agencia).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/agencia', res.object.idEmpresa]);
			});
		} else {
			this.agenciaService.createAgencia(agencia).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/agencia', res.object.idEmpresa]);
			});
		}
	}

	volver() {
		this.router.navigate(['/agencias-aduana']);
	}
}
