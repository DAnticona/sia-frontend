import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: [],
})
export class HeaderComponent implements OnInit {
	error: string;
	usuario: Usuario;

	constructor(public usuarioService: UsuarioService, public router: Router) {}

	ngOnInit(): void {
		this.usuario = this.usuarioService.usuario;
	}

	public logout(): void {
		if (!this.usuarioService.logout()) {
			this.error = 'Ocurrió un error, comuníquese con el administrador del sistema';
			return;
		}
		this.router.navigate(['/login']);
	}
}
