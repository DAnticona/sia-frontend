import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClienteService } from '../../services/cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-lista-clientes',
	templateUrl: './lista-clientes.component.html',
	styles: [],
})
export class ListaClientesComponent implements OnInit {
	cargando = true;
	clientes: any[] = [];
	cliente: any = {};
	pageNu = 1;
	pages = 1;

	@Output() selected = new EventEmitter<any>();

	constructor(public clienteService: ClienteService, public router: Router) {
		this.getClients(this.pageNu);
	}

	ngOnInit(): void {}

	getClients(pageNu: number) {
		this.clienteService.getClients(pageNu).subscribe((res: any) => {
			this.clientes = res.object;
			this.pageNu = Number(pageNu);
			this.pages = Math.ceil(res.count / 10);
			this.cargando = false;
		});
	}

	selectClient(cliente: any) {
		this.cliente = cliente;
	}

	sendClient() {
		this.selected.emit(this.cliente);
	}

	cancelar() {
		this.cliente = {};
		this.sendClient();
	}

	search(type: any, term: string) {
		this.cliente = {};
		this.pageNu = 1;
		this.pages = 1;
		if (term) {
			this.cargando = true;
			this.clientes = [];
			if (type === '1') {
				this.clienteService.seacrhClientByRuc(term).subscribe((res: any) => {
					console.log(res);
					if (res.object) {
						this.cargando = false;
						this.clientes.push(res.object);
					} else {
						this.clienteService.seacrhClientByDocument(term).subscribe((res1: any) => {
							console.log(res1);
							if (res1.object) {
								this.cargando = false;
								this.clientes.push(res1.object);
							} else {
								this.cargando = false;
							}
						});
					}
				});
			} else if (type === '2') {
				this.clienteService.searchClientByRazonSocial(term).subscribe((res: any) => {
					console.log(res);
					if (res.object.length > 0) {
						this.cargando = false;
						this.clientes = res.object;
					} else {
						this.clienteService.searchClientByName(term).subscribe((res1: any) => {
							console.log(res1);
							if (res1.object.length > 0) {
								this.cargando = false;
								this.clientes = res1.object;
							} else {
								this.cargando = false;
							}
						});
					}
				});
			}
		} else {
			this.getClients(this.pageNu);
		}
	}
}
