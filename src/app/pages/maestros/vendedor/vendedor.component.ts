import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../../../models/vendedor.model';
import { VendedorService } from '../../../services/vendedor/vendedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-vendedor',
	templateUrl: './vendedor.component.html',
	styles: [],
})
export class VendedorComponent implements OnInit {
	vendedor = new Vendedor();

	constructor(
		public vendedorService: VendedorService,
		public activatedRoute: ActivatedRoute,
		public router: Router,
		public location: Location
	) {
		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = Number(params.id);
				this.vendedorService.getSeller(id).subscribe(res => {
					console.log(res);
					this.vendedor.id = res.object.idPersona;
					this.vendedor.idTipoDocumento = res.object.tipoDocumento.idTipoDocumento;
					this.vendedor.nuDocumento = res.object.numeroDocumento;
					this.vendedor.nombres = res.object.nombres;
					this.vendedor.apPaterno = res.object.apellidoPaterno;
					this.vendedor.apMaterno = res.object.apellidoMaterno;
					this.vendedor.sexo = res.object.sexo;
					this.vendedor.email = res.object.email;
					this.vendedor.feNacimiento = res.object.fechaNacimiento;
				});
			}
		});
	}

	ngOnInit(): void {}

	guardar(vendedor: any) {
		this.vendedor.idTipoDocumento = vendedor.idTipoDocumento;
		this.vendedor.nuDocumento = vendedor.nuDocumento;
		this.vendedor.nombres = vendedor.nombres;
		this.vendedor.apPaterno = vendedor.apPaterno;
		this.vendedor.apMaterno = vendedor.apMaterno;
		this.vendedor.sexo = vendedor.sexo;
		this.vendedor.email = vendedor.email;
		this.vendedor.feNacimiento = vendedor.feNacimiento;
		// console.log(this.persona);

		if (this.vendedor.id) {
			this.vendedorService.updateSeller(this.vendedor).subscribe(res => {
				console.log(res);
				this.router.navigate(['/vendedor', res.object.idPersona]);
			});
		} else {
			this.vendedorService.createSeller(this.vendedor).subscribe(res => {
				console.log(res);
				this.router.navigate(['/vendedor', res.object.idPersona]);
			});
		}
	}

	volver() {
		this.router.navigate(['/vendedores']);
	}
}
