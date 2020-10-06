import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VendedorService } from '../../services/vendedor/vendedor.service';

@Component({
	selector: 'app-lista-vendedores',
	templateUrl: './lista-vendedores.component.html',
	styles: [],
})
export class ListaVendedoresComponent implements OnInit {
	cargando = true;
	vendedores: any[] = [];
	vendedor: any = {};

	@Output() selected = new EventEmitter<any>();

	constructor(public vendedorService: VendedorService) {
		this.vendedorService.getSellers().subscribe((res: any) => {
			this.vendedores = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	select(vendedor: any) {
		this.vendedor = vendedor;
	}

	send() {
		this.selected.emit(this.vendedor);
	}

	cancelar() {
		this.vendedor = {};
		this.send();
	}
}
