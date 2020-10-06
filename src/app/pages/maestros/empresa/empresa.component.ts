import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-empresa',
	templateUrl: './empresa.component.html',
	styles: [],
})
export class EmpresaComponent implements OnInit {
	empresa: any = {};
	cargando = false;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public empresaService: EmpresaService
	) {
		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				this.cargando = true;
				let id = params.id;
				this.empresaService.getCompanyById(id).subscribe((res: any) => {
					this.empresa = res.object;
					this.empresa.id = res.object.idEmpresa;
				});
			}
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	search(term: string) {
		if (term) {
			this.cargando = true;
			this.empresaService.searchByRuc(term).subscribe((res: any) => {
				console.log(res);
				if (res.object) {
					this.router.navigate(['empresas', res.object.idEmpresa]);
				}
				this.cargando = false;
			});
		}
	}

	guardar(f: NgForm) {
		this.cargando = true;
		console.log(this.empresa);
		if (this.empresa.id) {
			this.empresaService.updateCompany(this.empresa).subscribe(
				(res: any) => {
					console.log(res);
					this.cargando = false;
					this.router.navigate(['empresas', res.object.idEmpresa]);
				},
				(err: any) => {
					this.cargando = false;
				}
			);
		} else {
			this.empresaService.createCompany(this.empresa).subscribe(
				(res: any) => {
					console.log(res);
					this.cargando = false;
					this.router.navigate(['empresas', res.object.idEmpresa]);
				},
				(err: any) => {
					this.cargando = false;
				}
			);
		}
	}

	volver() {
		this.router.navigate(['/empresas']);
	}
}
