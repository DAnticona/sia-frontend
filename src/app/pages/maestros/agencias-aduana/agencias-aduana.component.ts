import { Component, OnInit } from '@angular/core';
import { AgenciasService } from '../../../services/agencias/agencias.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-agencias-aduana',
	templateUrl: './agencias-aduana.component.html',
	styles: [],
})
export class AgenciasAduanaComponent implements OnInit {
	agencias: any[] = [];
	cargando = false;
	constructor(public agenciasService: AgenciasService, public router: Router) {
		this.cargando = true;
		this.agenciasService.getAgencias().subscribe((res: any) => {
			console.log(res);
			this.agencias = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	seleccionar(agencia: any) {
		this.router.navigate(['/agencias-aduana', agencia.idEmpresa]);
	}

	nuevo() {
		this.router.navigate(['/agencias-aduana', 'nuevo']);
	}
}
