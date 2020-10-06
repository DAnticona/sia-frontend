import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../../services/servicio/servicio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GrupoServicioService } from '../../../services/servicio/grupo-servicio.service';

@Component({
	selector: 'app-servicio',
	templateUrl: './servicio.component.html',
	styles: [],
})
export class ServicioComponent implements OnInit {
	servicio: any = {};
	grupos: any[] = [];
	cargando = false;
	precioPct = false;
	constructor(
		public servicioService: ServicioService,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public grupoServicioService: GrupoServicioService
	) {
		this.grupoServicioService.getGrupos().subscribe((res: any) => {
			this.grupos = res.object;
		});

		this.activatedRoute.params.subscribe(params => {
			this.servicio.pct = this.precioPct ? 'S' : 'N';
			if (params.id !== 'nuevo') {
				let id = params.id;
				this.cargando = true;
				this.servicioService.getServicio(id).subscribe(
					(res: any) => {
						console.log(res);
						this.servicio = res.object;
						this.servicio.id = res.object.idServicio;
						this.servicio.idGrupoServicio = res.object.grupoServicio.idGrupoServicio;
						this.precioPct = this.servicio.pct === 'S' ? true : false;
						this.cargando = false;
					},
					(err: any) => {
						this.cargando = false;
					}
				);
			}
		});
	}

	ngOnInit(): void {}

	changePrecioPct(value: string) {
		this.servicio.pct = value;
	}

	guardar(f: NgForm) {
		console.log(this.servicio);
		if (this.servicio.id) {
			this.servicioService.updateServicio(this.servicio).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/servicios', res.object.idServicio]);
			});
		} else {
			this.servicioService.createServicio(this.servicio).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/servicios', res.object.idServicio]);
			});
		}
	}

	volver() {
		this.router.navigate(['/servicios']);
	}
}
