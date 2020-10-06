import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { DepositoTemporalService } from '../../../services/deposito-temporal/deposito-temporal.service';
import { NgForm } from '@angular/forms';

declare function cierra_modal(id);

@Component({
	selector: 'app-deposito-temporal',
	templateUrl: './deposito-temporal.component.html',
	styles: [],
})
export class DepositoTemporalComponent implements OnInit {
	deposito: any = {};
	empresas: any[] = [];
	pageNu = 1;
	pages = 1;
	empresa: any = {};
	cargando = false;
	nuevoDeposito = true;
	idChoosed: number;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public empresaService: EmpresaService,
		public depositoTemporalService: DepositoTemporalService
	) {
		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				this.nuevoDeposito = false;
				this.cargando = true;
				let id = params.id;
				this.depositoTemporalService.getDepositoById(id).subscribe((res: any) => {
					this.deposito = res.object;
					this.deposito.id = res.object.idDeposito;
					this.empresa = res.object.empresa;
					this.cargando = false;
				});
			}
		});
	}

	ngOnInit(): void {}

	searchCompany(pageNu: number) {
		this.idChoosed = null;
		this.empresaService.getCompanies(pageNu).subscribe((res: any) => {
			this.empresas = res.object;
			this.pages = Math.ceil(res.count / 10);
			this.pageNu = Number(pageNu);
		});
	}

	filterCompanies(type: string, term: string) {
		console.log(type, term);
		if (term) {
			this.empresas = [];
			if (type === '1') {
				this.empresaService.searchByRuc(term).subscribe((res: any) => {
					if (res.object) {
						this.empresas.push(res.object);
					}
				});
			} else if (type === '2') {
				this.empresaService.searchByName(term).subscribe((res: any) => {
					if (res.object) {
						this.empresas = res.object;
					}
				});
			}
		} else {
			this.searchCompany(1);
		}
	}

	chooseCompany() {
		if (this.idChoosed) {
			this.empresaService.getCompanyById(this.idChoosed).subscribe((res: any) => {
				console.log(res);
				this.empresa = res.object;
				this.deposito.idEmpresa = this.empresa.idEmpresa;
				cierra_modal('empresas');
			});
		}
	}

	save(f: NgForm) {
		if (f.invalid) {
			return;
		}
		console.log(this.deposito);
		this.cargando = true;
		this.depositoTemporalService.createDeposito(this.deposito).subscribe(
			(res: any) => {
				this.cargando = false;
				this.router.navigate(['/depositos-temporales', res.object.idDeposito]);
			},
			(err: any) => {
				this.cargando = false;
			}
		);
	}

	volver() {
		this.router.navigate(['/depositos-temporales']);
	}
}
