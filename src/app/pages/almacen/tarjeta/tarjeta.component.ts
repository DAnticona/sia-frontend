import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { faBoxOpen, faDolly, faTruckLoading, faWarehouse } from '@fortawesome/free-solid-svg-icons';

declare function cierraAgencias(id: string);
@Component({
	selector: 'app-tarjeta',
	templateUrl: './tarjeta.component.html',
	styles: [],
})
export class TarjetaComponent implements OnInit {
	tarjetas: any[] = [];
	tarjeta: any = {};
	agencias: any = [];
	tiposMercancia: any[] = [];
	areas: any[] = [];
	ubicaciones: any[] = [];
	levante = false;

	faWarehouse = faWarehouse;
	faDolly = faDolly;
	faTruckLoading = faTruckLoading;
	faBoxOpen = faBoxOpen;

	cargando = false;

	constructor(public router: Router, public activatedRoute: ActivatedRoute) {
		// TEMP
		this.tarjeta.cliente = {};
		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = Number(params.id);
				if (this.tarjetas.filter(t => t.nroOrden === id).length > 0) {
					this.tarjeta = this.tarjetas.filter(t => t.nroOrden === id)[0];
					console.log(this.tarjeta);
				}
			}
		});
	}

	ngOnInit(): void {}

	levanteValue(value: string) {
		console.log(value);
		this.tarjeta.levanteFg = value;
	}

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

	volver() {
		this.router.navigate(['/tarjetas']);
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
