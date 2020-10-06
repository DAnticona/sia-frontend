import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from '../../../services/almacen/area.service';
import { UbicacionService } from '../../../services/almacen/ubicacion.service';
import { NgForm } from '@angular/forms';

declare function cierra_modal(id);
declare function open_modal(id);

@Component({
	selector: 'app-almacen',
	templateUrl: './almacen.component.html',
	styles: [],
})
export class AlmacenComponent implements OnInit {
	area: any = {};
	ubicacion: any = {};
	ubicaciones: any[] = [];
	areaActiva = true;
	ubicacionActiva = true;
	cargando = true;
	constructor(
		public activatedRoute: ActivatedRoute,
		public areaService: AreaService,
		public router: Router,
		public ubicacionService: UbicacionService
	) {
		this.activatedRoute.params.subscribe(params => {
			this.area.activo = this.areaActiva ? 'S' : 'N';
			if (params.id !== 'nuevo') {
				let id = Number(params.id);
				this.areaService.getArea(id).subscribe((res: any) => {
					console.log(res);
					this.area = res.object;
					this.area.id = res.object.idArea;
					this.areaActiva = this.area.activo === 'S' ? true : false;
					this.getAllUbicaciones(id);
				});
			}

			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	getAllUbicaciones(id: number) {
		this.ubicacionService.getUbicacionesByArea(id).subscribe((res: any) => {
			console.log(res);
			this.ubicaciones = res.object;
			this.cargando = false;
		});
	}

	guardar(f: NgForm) {
		console.log(this.area);
		if (this.area.id) {
			this.areaService.updateArea(this.area).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/almacenes', res.object.idArea]);
			});
		} else {
			this.areaService.createArea(this.area).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/almacenes', res.object.idArea]);
			});
		}
	}

	volver() {
		this.router.navigate(['/almacenes']);
	}

	nuevo() {
		this.ubicacion = {};
		this.ubicacionActiva = true;
		this.ubicacion.activo = this.ubicacionActiva ? 'S' : 'N';
	}
	seleccionar(ubicacion: any) {
		console.log(ubicacion);
		this.ubicacion = ubicacion;
		this.ubicacion.id = ubicacion.idUbicacion;
		this.ubicacionActiva = this.ubicacion.activo === 'S' ? true : false;
		open_modal('ubicacion');
	}

	guardarUbicacion(f: NgForm) {
		this.ubicacion.idArea = this.area.id;
		console.log(this.ubicacion);
		if (this.ubicacion.idUbicacion) {
			this.ubicacionService.updateUbicacion(this.ubicacion).subscribe((res: any) => {
				console.log(res);
				this.getAllUbicaciones(this.area.id);
				cierra_modal('ubicacion');
			});
		} else {
			this.ubicacionService.createUbicacion(this.ubicacion).subscribe((res: any) => {
				console.log(res);
				this.getAllUbicaciones(this.area.id);
				cierra_modal('ubicacion');
			});
		}
	}

	activarUbicacion(value: string) {
		this.ubicacion.activo = value;
	}

	activarArea(value: string) {
		this.area.activo = value;
	}
}
