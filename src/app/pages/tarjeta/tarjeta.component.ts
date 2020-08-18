import { Component, OnInit } from '@angular/core';
import { TARJETAS } from '../../mock-data/mock-tarjetas';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarjeta } from '../../models/tarjeta.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AGENCIAS } from '../../mock-data/mock-agencias';

declare function cierraAgencias(id: string);
@Component({
	selector: 'app-tarjeta',
	templateUrl: './tarjeta.component.html',
	styles: [],
})
export class TarjetaComponent implements OnInit {
	tarjetas = TARJETAS;
	tarjeta: Tarjeta;
	agencias = AGENCIAS;

	ubicaciones = [
		{ nombre: 'GALPON#1 ZONA A AL LADO DERECHO' },
		{ nombre: 'GALPON#1 ZONA A AL LADO IZQUIERDO' },
		{ nombre: 'GALPON#1 ZONA B AL LADO DERECHO' },
		{ nombre: 'GALPON#1 ZONA B AL LADO IZQUIERDO' },
		{ nombre: 'GALPON#1 ZONA C AL LADO DERECHO' },
	];

	mercaderias = [
		{ nombre: 'EQUIPOS Y MATERIALES ELECTRICOS' },
		{ nombre: 'GANADERIA' },
		{ nombre: 'ARTICULOS ELECTRICOS Y ACCESORIOS' },
		{ nombre: 'BALDOSAS Y LOZAS DE CERAMICA' },
		{ nombre: 'CALZADOS ZAPATILLAS, BOTAS' },
	];

	depositos = [
		{ nombre: 'NEPTUNIA SA' },
		{ nombre: 'FARGO LINE SA' },
		{ nombre: 'LOGISTICA INTEGRAL MARITIMA ANDINA SA' },
		{ nombre: 'MEDLOG PERU SA' },
		{ nombre: 'RANSA COMERCIAL SA TERMINAL' },
	];

	clases = [
		{ nombre: 'CAJA' },
		{ nombre: 'CARTON' },
		{ nombre: 'CILINDRO' },
		{ nombre: 'CUBETA' },
		{ nombre: 'FARDO' },
	];

	destinos = [
		{ nombre: 'DEPOSITO' },
		{ nombre: 'TRANSITO' },
		{ nombre: 'TRASBORDO' },
		{ nombre: 'REEMBARQUE' },
		{ nombre: 'ADMISIÓN TEMPORAL' },
	];
	constructor(public router: Router, public activatedRoute: ActivatedRoute) {
		this.activatedRoute.params.subscribe(params => {
			let id = Number(params.id);
			if (this.tarjetas.filter(t => t.nroOrden === id).length > 0) {
				this.tarjeta = this.tarjetas.filter(t => t.nroOrden === id)[0];
				console.log(this.tarjeta);
			}
		});
	}

	ngOnInit(): void {}

	guardar(forma: NgForm) {
		console.log(forma);
		Swal.fire({
			title: 'Datos actualizados',
			text: 'Se guardaron los datos correctamente',
			icon: 'success',
			timer: 2000,
			showConfirmButton: false,
			onClose: () => {
				this.router.navigate(['/aperturar-tarjeta']);
			},
		});
	}

	seleccionaAgencia(agencia) {
		this.tarjeta.declarante.coEmp = agencia.coEmp;
		this.tarjeta.declarante.nuDoc = agencia.nuDoc;
		this.tarjeta.declarante.raSoc = agencia.raSoc;
		cierraAgencias('agencias');
	}

	seleccionaUbicacion(ubicacion) {
		this.tarjeta.ubicacion = ubicacion.nombre;
		cierraAgencias('ubicaciones');
	}

	seleccionaMercaderia(mercaderia) {
		this.tarjeta.mercancia = mercaderia.nombre;
		cierraAgencias('mercaderias');
	}

	seleccionaDeposito(deposito) {
		this.tarjeta.depTemporal = deposito.nombre;
		cierraAgencias('depositos');
	}

	seleccionaClase(clase) {
		this.tarjeta.clase = clase.nombre;
		cierraAgencias('clases');
	}

	seleccionaDestino(destino) {
		this.tarjeta.destino = destino.nombre;
		cierraAgencias('destinos');
	}
}
