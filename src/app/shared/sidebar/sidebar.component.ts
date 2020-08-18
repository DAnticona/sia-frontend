import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Menu } from '../../models/menu.model';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styles: [],
})
export class SidebarComponent implements OnInit {
	error: string;
	usuario: Usuario;
	menu: Menu[] = [];
	constructor(public router: Router, public usuarioService: UsuarioService) {}

	ngOnInit(): void {
		this.usuario = this.usuarioService.usuario;
		this.menu = this.usuarioService.menu;
	}

	public logout(): void {
		if (!this.usuarioService.logout()) {
			this.error = 'Ocurrió un error, comuníquese con el administrador del sistema';
			return;
		}
		this.router.navigate(['/login']);
	}
}
