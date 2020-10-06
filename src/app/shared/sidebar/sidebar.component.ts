import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Menu } from '../../models/menu.model';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styles: [],
})
export class SidebarComponent implements OnInit {
	error: string;
	usuario: any = {};
	menus: any[] = [];
	constructor(public router: Router, public usuarioService: UsuarioService) {
		this.usuario = this.usuarioService.usuario;
		this.menus = this.usuarioService.menus;
	}

	ngOnInit(): void {}
}
