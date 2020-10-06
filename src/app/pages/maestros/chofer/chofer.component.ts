import { Component, OnInit } from '@angular/core';
import { ChoferService } from '../../../services/chofer/chofer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-chofer',
	templateUrl: './chofer.component.html',
	styles: [],
})
export class ChoferComponent implements OnInit {
	chofer: any = {};

	constructor(
		public choferService: ChoferService,
		public router: Router,
		public activatedRoute: ActivatedRoute
	) {
		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = params.id;
				this.choferService.getChofer(id).subscribe((res: any) => {
					console.log(res);
					this.chofer = res.object;
				});
			}
		});
	}

	ngOnInit(): void {}

	guardar(chofer: any) {
		console.log(chofer);
		if (chofer.idPersona) {
			this.choferService.updateChofer(chofer).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/chofer', res.object.idPersona]);
			});
		} else {
			this.choferService.createChofer(chofer).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/chofer', res.object.idPersona]);
			});
		}
	}

	volver() {
		this.router.navigate(['/choferes']);
	}
}
