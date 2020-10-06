import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../../services/almacen/area.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-almacenes',
	templateUrl: './almacenes.component.html',
	styles: [],
})
export class AlmacenesComponent implements OnInit {
	areas: any[] = [];
	cargando = true;
	constructor(public areaService: AreaService, public router: Router) {
		this.areaService.getAreas().subscribe((res: any) => {
			console.log(res);
			this.areas = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	seleccionar(area: any) {
		console.log(area);
		this.router.navigate(['/almacenes', area.idArea]);
	}

	nuevo() {
		this.router.navigate(['/almacenes', 'nuevo']);
	}
}
