import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from '../../../services/rol/rol.service';
import { MenuService } from '../../../services/menu/menu.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-rol',
	templateUrl: './rol.component.html',
	styles: [],
})
export class RolComponent implements OnInit {
	role: any = {};
	menus: any[] = [];
	assignedMenus: any[] = [];
	active = false;

	constructor(
		public activatedRoute: ActivatedRoute,
		public router: Router,
		public roleService: RolService,
		public menuService: MenuService
	) {
		this.menuService.getMenus().subscribe((res: any) => {
			console.log(res);
			this.menus = res.object;
		});

		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = params.id;
				this.roleService.getRole(id).subscribe((res: any) => {
					console.log(res);
					this.role = res.object;
					this.assignedMenus = res.object.menus;
					console.log(this.assignedMenus);
				});
			}
		});
	}

	ngOnInit(): void {}

	activeValue(value: string) {
		console.log(value);
		// this.role.activeFg = value;
	}

	remove(menu: any) {
		this.assignedMenus.splice(this.assignedMenus.indexOf(menu), 1);
	}

	add(menu: any) {
		console.log(menu.idMenu);
		console.log(this.assignedMenus);
		if (this.assignedMenus.filter(f => f.id === menu.idMenu).length > 0) {
			return;
		}
		this.assignedMenus.push(menu);
	}

	guardar(form: NgForm) {
		if (form.invalid) {
			return;
		}
		this.role.menus = this.assignedMenus.map(x => x.id);
		console.log(this.role);
		if (this.role.id) {
			this.roleService.updateRole(this.role).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/roles', res.object.idRol]);
			});
		} else {
			this.roleService.createRole(this.role).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/roles', res.object.idRol]);
			});
		}
	}

	volver() {
		this.router.navigate(['/roles']);
	}
}
