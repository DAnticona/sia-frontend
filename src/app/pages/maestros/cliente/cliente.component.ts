import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../../../services/persona/persona.service';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { NgForm } from '@angular/forms';

declare function cierra_modal(id);

@Component({
	selector: 'app-cliente',
	templateUrl: './cliente.component.html',
	styles: [],
})
export class ClienteComponent implements OnInit {
	cliente: any = {};
	empresa: any = {};
	empresas: any[] = [];
	pageNu = 1;
	pages = 1;
	persona: any = {};
	personas: any[] = [];
	idChoosed: number;
	empresaTab = true;
	nuevoCliente = true;
	cargando = false;

	constructor(
		public clienteService: ClienteService,
		public activatedRoute: ActivatedRoute,
		public personaService: PersonaService,
		public empresaService: EmpresaService,
		public router: Router
	) {
		this.activatedRoute.params.subscribe(params => {
			this.cliente.idTipoPersona = 1;
			if (params.id !== 'nuevo') {
				this.nuevoCliente = false;
				let id = Number(params.id);
				this.cargando = true;
				this.clienteService.getClientById(id).subscribe((res: any) => {
					console.log(res);
					this.cliente.idCliente = res.object.idCliente;
					this.cliente.idTipoPersona = res.object.tipoPersona.idTipoPersona;

					if (res.object.empresa) {
						this.cliente.idEmpresa = res.object.empresa.idEmpresa;
						this.empresa = res.object.empresa;
						this.empresaTab = true;
					} else {
						this.cliente.idPersona = res.object.persona.idPersona;
						this.persona = res.object.persona;
						this.persona.idTipoDocumento = res.object.persona.tipoDocumento.idTipoDocumento;
						this.empresaTab = false;
					}

					this.cargando = false;
				});
			}
		});
	}

	searchCompany(pageNu: number) {
		this.idChoosed = null;
		this.empresaService.getCompanies(pageNu).subscribe((res: any) => {
			this.empresas = res.object;
			this.pages = Math.ceil(res.count / 10);
			this.pageNu = Number(pageNu);
		});
	}

	searchPerson(pageNu: number) {
		this.idChoosed = null;
		this.personaService.getPersons(pageNu).subscribe((res: any) => {
			console.log(res);
			this.personas = res.object;
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

	filterPersons(type: string, term: string) {
		console.log(type, term);
		if (term) {
			this.personas = [];
			if (type === '1') {
				this.personaService.seacrhByDocument(term).subscribe((res: any) => {
					if (res.object) {
						this.personas.push(res.object);
					}
				});
			} else if (type === '2') {
				this.personaService.seacrhByName(term).subscribe((res: any) => {
					if (res.object) {
						this.personas = res.object;
					}
				});
			}
		} else {
			this.searchPerson(1);
		}
	}

	chooseCompany() {
		if (this.idChoosed) {
			this.empresaService.getCompanyById(this.idChoosed).subscribe((res: any) => {
				console.log(res);
				this.empresa = res.object;
				this.cliente.idTipoPersona = 1;
				this.cliente.idEmpresa = this.empresa.idEmpresa;
				this.cliente.idPersona = null;
				this.persona = null;
				cierra_modal('empresas');
			});
		}
	}

	choosePerson() {
		if (this.idChoosed) {
			this.personaService.getPerson(this.idChoosed).subscribe((res: any) => {
				console.log(res);
				this.persona = res.object;
				this.persona.idTipoDocumento = res.object.tipoDocumento.idTipoDocumento;
				this.cliente.idTipoPersona = 2;
				this.cliente.idPersona = this.persona.idPersona;
				this.cliente.idEmpresa = null;
				this.empresa = null;
				cierra_modal('personas');
			});
		}
	}

	ngOnInit(): void {}

	save(f: NgForm) {
		console.log(this.cliente);
		this.cargando = true;
		this.clienteService.createClient(this.cliente).subscribe(
			(res: any) => {
				this.cargando = false;
				this.router.navigate(['/clientes', res.object.idCliente]);
			},
			(err: any) => {
				this.cargando = false;
			}
		);
	}

	volver() {
		this.router.navigate(['/clientes']);
	}
}
