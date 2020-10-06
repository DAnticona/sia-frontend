import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo/vehiculo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-vehiculo',
	templateUrl: './vehiculo.component.html',
	styles: [],
})
export class VehiculoComponent implements OnInit {
	vehiculo: any = {};
	tiposVehiculo: any[] = [];
	ejeCheck = true;
	constructor(
		public vehiculoService: VehiculoService,
		public router: Router,
		public activatedRoute: ActivatedRoute
	) {
		this.activatedRoute.params.subscribe(params => {
			this.vehiculo.eje = this.ejeCheck ? 'S' : 'N';
			if (params.id !== 'nuevo') {
				let id = params.id;
				this.vehiculoService.getVehiculo(id).subscribe((res: any) => {
					console.log(res);
					this.vehiculo = res.object;
					this.vehiculo.codeTipoVehiculo = res.object.tipoVehiculo.idTipoVehiculo;
				});
			}
		});

		this.vehiculoService.getTiposVehiculo().subscribe((res: any) => {
			console.log(res);
			this.tiposVehiculo = res.object;
		});
	}

	ngOnInit(): void {}

	guardar(v: any) {
		console.log(this.vehiculo);
		this.vehiculo.id = v.idVehiculo;
		if (this.vehiculo.idVehiculo) {
			this.vehiculoService.updateVehiculo(this.vehiculo).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/vehiculo', res.object.idVehiculo]);
			});
		} else {
			this.vehiculoService.createVehiculo(this.vehiculo).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/vehiculo', res.object.idVehiculo]);
			});
		}
	}

	volver() {
		this.router.navigate(['/vehiculos']);
	}

	ejeValue(value: string) {
		console.log(value);
		this.vehiculo.eje = value;
	}
}
