import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-empresas',
	templateUrl: './empresas.component.html',
	styles: [],
})
export class EmpresasComponent implements OnInit {
	empresas: any = [];
	cargando = true;
	pageNu = 1;
	pages = 1;

	constructor(public router: Router, public empresaService: EmpresaService) {
		this.empresaService.getCompanies(this.pageNu).subscribe((res: any) => {
			console.log(res);
			this.empresas = res.object;
			this.pages = Math.ceil(res.count / 10);
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	getCompanies(pageNu: number) {
		// console.log(pageNu);
		this.empresaService.getCompanies(pageNu).subscribe((res: any) => {
			this.empresas = res.object;
			this.pageNu = Number(pageNu);
			// this.pages = new Array(Math.ceil(res.count / 10));
			// this.pages = new Array(Math.ceil(10));
		});
	}

	search(type: string, term: string) {
		this.cargando = true;
		if (term) {
			if (type === '1') {
				console.log('1');
				this.empresaService.searchByRuc(term).subscribe((res: any) => {
					console.log(res);
					if (res.object) {
						this.router.navigate(['empresas', res.object.idEmpresa]);
					}
					this.cargando = false;
				});
			} else if (type === '2') {
				this.empresaService.searchByName(term).subscribe((res: any) => {
					console.log(res);
					this.empresas = res.object;
					this.cargando = false;
				});
			}
		} else {
			this.pageNu = 1;
			this.empresaService.getCompanies(this.pageNu).subscribe((res: any) => {
				console.log(res);
				this.empresas = res.object;
				this.cargando = false;
			});
		}
	}

	seleccionar(empresa: any) {
		this.router.navigate(['empresas', empresa.idEmpresa]);
	}

	nuevo() {
		this.router.navigate(['empresas', 'nuevo']);
	}
}
