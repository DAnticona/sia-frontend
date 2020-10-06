import { Component, OnInit } from '@angular/core';
import { RolService } from '../../../services/rol/rol.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-roles',
	templateUrl: './roles.component.html',
	styles: [],
})
export class RolesComponent implements OnInit {
	cargando = true;
	roles: any[] = [];

	constructor(public roleService: RolService, public router: Router) {
		this.roleService.getRoles().subscribe((res: any) => {
			console.log(res);
			this.roles = res.object;
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	choose(role: any) {
		console.log(role);
		this.router.navigate(['/roles', role.id]);
	}

	new() {
		this.router.navigate(['/roles', 'nuevo']);
	}
}
