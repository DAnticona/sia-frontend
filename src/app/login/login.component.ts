import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Menu } from '../models/menu.model';
import { MENU } from '../mock-data/mock-menu';
import { Rol } from '../models/rol.model';

declare function init_plugins();
declare function login_plugin();
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	allMenu: Menu[] = MENU;

	error: string;
	recordarme = false;
	username: string;

	constructor(public router: Router, public usuarioService: UsuarioService) {}

	ngOnInit(): void {
		init_plugins();
		login_plugin();
		this.username = localStorage.getItem('username') || '';
		if (this.username.length > 1) {
			this.recordarme = true;
		}
	}

	public login(forma: NgForm): void {
		if (forma.invalid) {
			return;
		}
		let usuario = new Usuario();
		usuario.username = forma.value.username;
		usuario.password = forma.value.password;

		this.usuarioService.login(usuario, forma.value.recordarme).subscribe(
			(res: any) => {
				console.log(res);
				let user = new Usuario();
				let rol = new Rol();

				rol.nombre = res.rol;
				user.nombres = res.name;
				user.apellidoPaterno = res.lastname;
				user.email = res.email;
				user.rol = rol;

				if (!res.imagen) {
					user.imagen = 'assets/images/users/325687.png';
				}

				let menu: Menu[];

				if (user.rol.nombre === 'ADMIN') {
					menu = this.allMenu;
				} else {
					menu = this.allMenu.filter(m => m.noRol === 'USER');
				}
				this.usuarioService.guardarStorage(user, true, menu);
				this.router.navigate(['/bienvenido']);
			},
			(err: any) => {
				console.log(err);
				this.error = err.error.message;
			}
		);
	}

	public enviarCorreo(f: NgForm): void {
		console.log('enviando...');
	}
}
