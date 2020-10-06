import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo/vehiculo.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vehiculos',
	templateUrl: './vehiculos.component.html',
	styles: [],
})
export class VehiculosComponent implements OnInit {
	vehiculos: any[] = [];
	cargando = false;
	constructor(public vehiculoService: VehiculoService, public router: Router) {
		this.cargando = true;
		this.vehiculoService.getVehiculos().subscribe((res: any) => {
			console.log(res);
			this.vehiculos = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	seleccionar(vehiculo: any) {
		this.router.navigate(['/vehiculos', vehiculo.idVehiculo]);
	}

	nuevo() {
		this.router.navigate(['/vehiculos', 'nuevo']);
	}
}
