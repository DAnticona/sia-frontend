import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html',
	styles: [],
})
export class UsuariosComponent implements OnInit {
	usuarios: any = [];
	constructor(public usuarioService: UsuarioService, public router: Router) {
		this.usuarioService.getUsers().subscribe((res: any) => {
			console.log(res);
			this.usuarios = res.object;
		});
	}

	ngOnInit(): void {}

	seleccionar(usuario: any) {
		console.log(usuario);
		console.log(this.usuarioService.usuario);
		if (usuario.idPersona === this.usuarioService.usuario.id) {
			this.router.navigate(['/mi-perfil']);
		} else {
			this.router.navigate(['/usuarios', usuario.idPersona]);
		}
	}

	nuevo() {
		console.log('nuevo');
		this.router.navigate(['/usuarios', 'nuevo']);
	}
}
