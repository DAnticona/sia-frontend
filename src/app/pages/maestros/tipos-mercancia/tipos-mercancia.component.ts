import { Component, OnInit } from '@angular/core';
import { TipoMercanciaService } from '../../../services/tipo-mercancia/tipo-mercancia.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tipos-mercancia',
	templateUrl: './tipos-mercancia.component.html',
	styles: [],
})
export class TiposMercanciaComponent implements OnInit {
	cargando = false;
	tipos: any[] = [];
	constructor(public tipoMercanciaService: TipoMercanciaService, public router: Router) {
		this.cargando = true;
		this.tipoMercanciaService.getTipos().subscribe((res: any) => {
			console.log(res);
			this.tipos = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	seleccionar(tipo: any) {
		this.router.navigate(['/tipos-mercancia', tipo.idTipoMercancia]);
	}

	nuevo() {
		this.router.navigate(['/tipos-mercancia', 'nuevo']);
	}
}
