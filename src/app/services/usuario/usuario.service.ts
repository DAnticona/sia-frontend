import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../models/menu.model';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
	providedIn: 'root',
})
export class UsuarioService {
	usuario: Usuario;
	menu: Menu[];
	logueado: boolean;

	constructor(public http: HttpClient) {
		this.cargarStorage();
	}

	public estaLogueado() {
		return this.logueado;
	}

	public cargarStorage() {
		if (localStorage.getItem('logueado')) {
			this.usuario = JSON.parse(localStorage.getItem('usuario'));
			this.logueado = Boolean(localStorage.getItem('logueado'));
			this.menu = JSON.parse(localStorage.getItem('menu'));
		} else {
			this.usuario = null;
			this.logueado = false;
			this.menu = null;
		}
	}

	public guardarStorage(usuario: Usuario, logueado: boolean, menu: Menu[]) {
		localStorage.setItem('usuario', JSON.stringify(usuario));
		localStorage.setItem('logueado', String(logueado));
		localStorage.setItem('menu', JSON.stringify(menu));

		this.usuario = usuario;
		this.logueado = logueado;
		this.menu = menu;
	}

	public login(usuario: Usuario, recordarme: boolean) {
		if (recordarme) {
			localStorage.setItem('username', usuario.username);
		} else {
			localStorage.removeItem('username');
		}

		let url = URL_SERVICIOS + '/auth/login';

		return this.http.post(url, usuario);
	}

	public logout(): boolean {
		this.usuario = null;
		this.logueado = false;
		this.menu = null;
		localStorage.removeItem('usuario');
		localStorage.removeItem('logueado');
		localStorage.removeItem('menu');
		return true;
	}
}
