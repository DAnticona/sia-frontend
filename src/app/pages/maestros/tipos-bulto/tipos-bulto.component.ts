import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoBultoService } from '../../../services/tipo-bulto/tipo-bulto.service';

@Component({
	selector: 'app-tipos-bulto',
	templateUrl: './tipos-bulto.component.html',
	styles: [],
})
export class TiposBultoComponent implements OnInit {
	tipos: any[] = [];
	cargando = false;
	constructor(public tipoBultoService: TipoBultoService, public router: Router) {
		this.cargando = true;
		this.tipoBultoService.getTipos().subscribe((res: any) => {
			console.log(res);
			this.tipos = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	seleccionar(tipo: any) {
		this.router.navigate(['/tipos-bulto', tipo.idTipoBulto]);
	}

	nuevo() {
		this.router.navigate(['/tipos-bulto', 'nuevo']);
	}
}
