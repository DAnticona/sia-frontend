import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.component.html',
	styles: [],
})
export class ClientesComponent implements OnInit {
	cargando = true;
	clientes: any[] = [];
	pageNu = 1;
	pages = 1;
	constructor(public clienteService: ClienteService, public router: Router) {
		this.clienteService.getClients(this.pageNu).subscribe((res: any) => {
			console.log(res);
			this.clientes = res.object;
			this.pages = Math.ceil(res.count / 10);
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	getClients(pageNu: number) {
		this.clienteService.getClients(pageNu).subscribe((res: any) => {
			this.clientes = res.object;
			this.pageNu = Number(pageNu);
		});
	}

	dbClick(cliente: any) {
		this.router.navigate(['/clientes', cliente.idCliente]);
	}

	nuevo() {
		this.router.navigate(['/clientes', 'nuevo']);
	}

	search(type: any, term: string) {
		if (term) {
			this.cargando = true;
			if (type === '1') {
				this.clienteService.seacrhClientByRuc(term).subscribe((res: any) => {
					console.log(res);
					if (res.object) {
						this.cargando = false;
						this.router.navigate(['/clientes', res.object.idCliente]);
					} else {
						this.clienteService.seacrhClientByDocument(term).subscribe((res1: any) => {
							console.log(res1);
							if (res1.object) {
								this.cargando = false;
								this.router.navigate(['/clientes', res1.object.idCliente]);
							} else {
								this.cargando = false;
							}
						});
					}
				});
			} else if (type === '2') {
				this.clienteService.searchClientByRazonSocial(term).subscribe((res: any) => {
					console.log(res);
					if (res.object) {
						this.cargando = false;
						this.clientes = res.object;
					} else {
						this.clienteService.searchClientByName(term).subscribe((res1: any) => {
							console.log(res1);
							if (res1.object) {
								this.cargando = false;
								this.clientes = res.object;
							} else {
								this.cargando = false;
							}
						});
					}
				});
			}
		}
	}
}
