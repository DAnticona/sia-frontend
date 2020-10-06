import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../../../services/vendedor/vendedor.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vendedores',
	templateUrl: './vendedores.component.html',
	styles: [],
})
export class VendedoresComponent implements OnInit {
	vendedores: any[] = [];
	cargando = false;

	constructor(public vendedorService: VendedorService, public router: Router) {
		this.cargando = true;
		this.vendedorService.getSellers().subscribe((res: any) => {
			console.log(res);
			this.vendedores = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	nuevo() {
		this.router.navigate(['/vendedores', 'nuevo']);
	}

	seleccionar(vendedor: any) {
		console.log(vendedor);
		this.router.navigate(['/vendedores', vendedor.idPersona]);
	}
}
