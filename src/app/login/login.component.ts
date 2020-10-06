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
	// allMenu: Menu[] = MENU;

	error: string;
	recordarme = false;
	username: string;
	cargando = false;

	constructor(public router: Router, public usuarioService: UsuarioService) {}

	ngOnInit(): void {
		init_plugins();
		login_plugin();
		this.username = localStorage.getItem('username') || '';
		if (this.username.length > 1) {
			this.recordarme = true;
		}
	}

	login(form: NgForm) {
		this.cargando = true;
		if (form.invalid) {
			return;
		}

		let user: any = {};
		user.username = form.value.username;
		user.password = form.value.password;

		this.usuarioService.login(user, form.value.recordarme).subscribe(
			res => {
				console.log(res);
				this.cargando = false;
				this.router.navigate(['/bienvenido']);
			},
			(err: any) => {
				this.cargando = false;
			}
		);
	}

	public enviarCorreo(f: NgForm): void {
		console.log('enviando...');
	}
}
