import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AgenciasService } from '../../services/agencias/agencias.service';

@Component({
	selector: 'app-lista-agencias',
	templateUrl: './lista-agencias.component.html',
	styles: [],
})
export class ListaAgenciasComponent implements OnInit {
	cargando = true;
	agencias: any[] = [];
	agencia: any = {};

	@Output() selected = new EventEmitter<any>();

	constructor(public agenciaService: AgenciasService) {
		this.agenciaService.getAgencias().subscribe((res: any) => {
			this.agencias = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	select(agencia: any) {
		this.agencia = agencia;
	}

	send() {
		this.selected.emit(this.agencia);
	}

	cancelar() {
		this.agencia = {};
		this.send();
	}
}
