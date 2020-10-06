import { Component, OnInit } from '@angular/core';
import { ChoferService } from '../../../services/chofer/chofer.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-choferes',
	templateUrl: './choferes.component.html',
	styles: [],
})
export class ChoferesComponent implements OnInit {
	choferes: any[] = [];
	cargando = false;
	pageNu = 1;
	pages = 1;

	constructor(public choferService: ChoferService, public router: Router) {
		this.getChoferes(this.pageNu);
	}

	ngOnInit(): void {}

	getChoferes(pageNu: number) {
		this.cargando = true;
		this.choferService.getChoferes(pageNu).subscribe((res: any) => {
			console.log(res);
			this.choferes = res.object;
			this.cargando = false;
		});
	}

	seleccionar(chofer: any) {
		this.router.navigate(['/choferes', chofer.idPersona]);
	}

	nuevo() {
		this.router.navigate(['/choferes', 'nuevo']);
	}
}
