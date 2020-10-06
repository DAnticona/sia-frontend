import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../../models/menu.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UsuarioService {
	usuario: any;
	token: string;
	menus: any[];
	logueado: boolean;

	constructor(public http: HttpClient, public router: Router) {
		this.loadStorage();
	}

	public estaLogueado() {
		return this.token.length > 5 ? true : false;
	}

	loadStorage() {
		if (localStorage.getItem('token')) {
			this.token = localStorage.getItem('token');
			this.usuario = JSON.parse(localStorage.getItem('authUser'));
			this.menus = JSON.parse(localStorage.getItem('menus'));
		} else {
			this.token = '';
			this.usuario = null;
			this.menus = null;
		}
	}

	guardarStorage(authUser: Usuario, token: string, menus: Menu[]) {
		localStorage.setItem('token', token);
		localStorage.setItem('authUser', JSON.stringify(authUser));
		localStorage.setItem('menus', JSON.stringify(menus));

		this.usuario = authUser;
	}

	login(usuario: any, rememberme: boolean = false) {
		if (rememberme) {
			localStorage.setItem('username', usuario.username);
		} else {
			localStorage.removeItem('username');
		}

		let url = URL_SERVICIOS + '/auth/login';

		return this.http.post(url, usuario).pipe(
			map((res: any) => {
				console.log(res);
				let authUser: any = {};
				authUser.idPersona = res.id;
				authUser.nombres = res.name;
				authUser.apellidoPaterno = res.lastname;
				authUser.username = res.username;
				authUser.email = res.email;
				authUser.imagen = res.imagen;
				authUser.rol = res.rol;

				this.token = res.TOKEN.AccessToken;

				this.menus = res.menu;
				this.menus.sort((a, b) => a.orden - b.orden);
				for (let menu of this.menus) {
					menu.submenu.sort((a, b) => a.orden - b.orden);
				}
				this.guardarStorage(authUser, this.token, this.menus);
				return true;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire('Error en el login', err.error.message, 'error');
				return throwError(err);
			})
		);
	}

	logout() {
		this.usuario = null;
		this.token = '';
		this.menus = [];
		// localStorage.clear();
		localStorage.removeItem('token');
		localStorage.removeItem('authUser');
		localStorage.removeItem('menus');

		this.router.navigate(['/login']);
	}

	encontrarUsuarioPorId(id: number) {
		let url = URL_SERVICIOS + `/v1/usuarios/${id}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions).pipe(
			map(res => {
				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}

	actualizarUsuario(user: any) {
		let url = URL_SERVICIOS + '/v1/usuarios';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.put(url, user, httpOptions).pipe(
			map((res: any) => {
				console.log(res);
				if (user.idPersona === this.usuario.idPersona) {
					console.log('mi perfil');
					this.usuario = res.object;
					console.log(this.usuario);
					this.guardarStorage(this.usuario, this.token, this.menus);
				}

				Swal.fire({
					title: 'Usuario actualizado',
					text: this.usuario.nombres,
					icon: 'success',
				});

				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}

	getUsers() {
		let url = URL_SERVICIOS + '/v1/usuarios';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions).pipe(
			map(res => {
				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}

	createUser(usuario: any) {
		let url = URL_SERVICIOS + '/v1/usuarios';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.token}`,
				'Content-Type': 'application/json',
			}),
		};

		let usuarioDB = {
			username: usuario.username,
			password: usuario.password,
			idRol: usuario.idRol,
			idTipoDocumento: usuario.idTipoDocumento,
			numeroDocumento: usuario.nuDocumento,
			nombres: usuario.nombres,
			apellidoPaterno: usuario.apPaterno,
			apellidoMaterno: usuario.apMaterno,
			sexo: usuario.sexo,
			fechaNacimiento: usuario.feNacimiento,
			email: usuario.email,
		};

		console.log(usuarioDB);

		return this.http.post(url, usuarioDB, httpOptions).pipe(
			map(res => {
				Swal.fire({
					title: 'Usuario creado',
					text: usuarioDB.username,
					icon: 'success',
				});
				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}

	changeMyPassword(idPersona: number, password: string) {
		let url = URL_SERVICIOS + '/v1/usuarios/password';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.token}`,
				'Content-Type': 'application/json',
			}),
		};

		let usuario = {
			idPersona,
			password,
		};

		return this.http.put(url, usuario, httpOptions).pipe(
			map(res => {
				console.log(res);
				Swal.fire({
					title: 'Contraseña actualizada',
					text: this.usuario.nombres,
					icon: 'success',
					onClose: () => {
						this.logout();
					},
				});

				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}

	changeOtherPassword(id: number, password: string) {
		let url = URL_SERVICIOS + '/usuarios/password';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.token}`,
				'Content-Type': 'application/json',
			}),
		};

		let user = {
			idPersona: id,
			password,
		};

		return this.http.put(url, user, httpOptions).pipe(
			map((res: any) => {
				console.log(res);
				Swal.fire({
					title: 'Contraseña actualizada',
					text: res.username,
					icon: 'success',
				});

				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}
}
